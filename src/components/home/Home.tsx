import { Breadcrumb, Layout } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import React from 'react'
import Game from '../game/Game';
import Login from '../login/Login';
import styled from "styled-components";
import { User } from "../../../shared/types/authentication/UserType";

const CenterScreen = styled(Content)`
   
`;

type Props = {}



const Home = (props: Props) => {
    let isLoggedIn: boolean = false;
    let user: User = {
        id: -1, name: "",
    }

    const loginProps = {
        isLoggedIn: false,
        user: user,
    }

    

    let game = {
        currentTurn: Number,
        board: [[false, false, false],
        [false, false, false],
        [false, false, false]],
    }

    return (
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', textAlign: 'center' }}>
                    <h1 style={{ color: 'white' }}>
                        Tic-Tac-Toe
                    </h1>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <CenterScreen >{!isLoggedIn && <Login {...loginProps}/>}
                            {isLoggedIn && <Game />}</CenterScreen>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created by Jordan Burdett using React, node, express, feathers</Footer>
            </Layout>
        </>
    )
}

export default Home