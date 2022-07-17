import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import styles from '../../styles/[id].module.scss'

interface TrackPageProps {
    track: ITrack;
}

const TrackPage: React.FC<TrackPageProps> = ({track}) => {
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant='outlined'
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container className={styles.container}>
                <img src={track.picture} width={200} height={200}/>
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
                    label='Ваше имя'
                    fullWidth
                />
                <TextField
                    label='Комментарий'
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
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