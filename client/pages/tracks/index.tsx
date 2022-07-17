import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {
            _id: 'fdsf',
            artist: 'fdsfs',
            audio: 'vhghjhj',
            comments: [{_id: 'fdsfs', text: 'fsdfds', username: 'bfghfg'}],
            text: 'fsdfsfsfhjgj',
            listens: 0,
            name: 'vghmhjh',
            picture: 'fdhjgkghjg'
        }
    ]

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: '900px'}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;