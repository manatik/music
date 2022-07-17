import React from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import styles from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = true}) => {
    const router = useRouter()

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
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