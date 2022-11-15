import React from 'react';
import About from '../About/About';
import MoreAbout from '../MoreAbout/MoreAbout';

import Services from '../Services/Services';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <MoreAbout></MoreAbout>
        </div>
    );
};

export default Home;