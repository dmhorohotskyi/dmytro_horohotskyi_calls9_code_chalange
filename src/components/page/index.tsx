import React from 'react';
import './style.css';
import Header from "../header"
import MainContent from '../mainContent'
import Footer from '../footer'

function Page() {
    return (
        <div className='page'>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
);
}

export default Page;
