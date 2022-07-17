import React from "react";
import { ITrack } from "../types/track";
import { Card, Grid, IconButton } from "@material-ui/core";
import styles from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  const router = useRouter()
  const { playTrack, setActiveTrack } = useActions();
  const { active } = useTypedSelector(state => state.player);

  const play = (e) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
      <IconButton onClick={play}>
        {active
          ? <PlayArrow/>
          : <Pause/>
        }
      </IconButton>
      <img width={70} height={70} src={'http://localhost:5000/' + track.picture} alt={'preview track'}/>
      <Grid className={styles.track__info} container direction='column'>
        <div className={styles.track__name}>{track.name}</div>
        <div className={styles.track__artist}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton className={styles.track__delete} onClick={e => e.stopPropagation()}>
        <Delete/>
      </IconButton>
    </Card>
  );
};

export default TrackItem;