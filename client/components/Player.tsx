import React, { ChangeEvent, useEffect } from "react";
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";
import { Grid, IconButton } from "@material-ui/core";
import styles from '../styles/player.module.scss';
import TrackProgress from "./TrackProgress";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

let audio: HTMLAudioElement;

const Player = () => {
  const { duration, active, volume, currentTime, pause } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions();

  const play = async () => {
    if (pause) {
      playTrack();
      await audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  }

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  }

  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  }

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active?.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      }
    }
  }

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause
          ? <PlayArrow/>
          : <Pause/>
        }
      </IconButton>
      <Grid className={styles.track__info} container direction='column'>
        <div className={styles.track__name}>{active?.name}</div>
        <div className={styles.track__artist}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
      <VolumeUp style={{ marginLeft: 'auto' }}/>
      <TrackProgress left={volume} right={100} onChange={changeVolume}/>
    </div>
  );
};

export default Player;