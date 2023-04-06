import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Default from '../default/Default';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;