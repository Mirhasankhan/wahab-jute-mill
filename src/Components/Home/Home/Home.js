import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import MoreAbout from '../MoreAbout/MoreAbout';
import Projects from '../Projects/Projects';
import Records from '../Records/Records';

import Services from '../Services/Services';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <MoreAbout></MoreAbout>
            <Records></Records>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;