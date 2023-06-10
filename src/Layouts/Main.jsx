import React from 'react';
import Navbar from '../component/pages/shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../component/pages/shared/Footer';

const Main = () => {
    const location = useLocation()
    const withoutNavFooter = location.pathname.includes("login")
    const withoutNavFooter2 = location.pathname.includes("register")
    return (
        <div>
            {
                withoutNavFooter2 || withoutNavFooter || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                withoutNavFooter2 || withoutNavFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Main;