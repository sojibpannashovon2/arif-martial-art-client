import React from 'react';
import Navbar from '../component/pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;