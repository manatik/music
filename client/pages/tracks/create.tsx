import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Card, Grid} from "@mui/material";

const Create = () => {
    return (
        <MainLayout>
            <Grid container>
                <Card>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button>Загрузить</Button>
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Create;