import React, { useState } from 'react';
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import styles from '../../styles/[id].module.scss'
import { GetServerSideProps } from "next";
import axios from "axios";
import { useInput } from "../../hooks/useInput";
import { ITrack } from "../../types/track";

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter()
  const username = useInput('');
  const text = useInput('');

  const addComment = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/tracks/comment', {
        username: username.value,
        text: text.value,
        trackId: track._id
      });

      setTrack(prev => ({
        ...prev,
        comments: [data, ...prev.comments]
      }));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MainLayout title={track.name + ' ' + track.artist +  ' - Музыкальная площадка'}>
      <Button
        variant='outlined'
        style={{ fontSize: 32 }}
        onClick={() => router.push('/tracks')}
      >
        К списку
      </Button>
      <Grid container className={styles.container}>
        <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
        <div className={styles.container}>
          <h1>Название - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField
          {...username}
          label='Ваше имя'
          fullWidth
        />

        <TextField
          {...text}
          label='Комментарий'
          fullWidth
          multiline
          rows={4}
        />

        <Button onClick={addComment}>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map(comment =>
          <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await axios.get('http://localhost:5000/tracks/' + params.id);
  return {
    props: {
      serverTrack: data
    }
  }
}