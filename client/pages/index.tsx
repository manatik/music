import React from 'react';
import MainLayout from "../layouts/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
            <div className='center'>
                <h1>Добро пожаловать!</h1>
                <h3>Тут треки!</h3>
            </div>
            </MainLayout>

            <style jsx>
                {`
                  .center {
                    margin-top: 150px;
                    display: flex;
                    flex-direction: column;
                    align-content: center;
                    justify-content: center;
                  }
                `}
            </style>
        </>
    );
};

export default Index;