import React from 'react';
import Navbar from '../Components/Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Layout/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>

        </div>
    );
};

export default Root;
