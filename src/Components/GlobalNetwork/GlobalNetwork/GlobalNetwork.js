import React from 'react';
import Header from '../../../Components/Home/Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import NetworkTitle from '../NerworkTitle/NetworkTitle';
import Network from '../Network/Network';

const GlobalNetwork = () => {
    return (
        <div>
            <Header></Header>
            <Network></Network>
            <NetworkTitle></NetworkTitle>
            <Footer></Footer>
        </div>
    );
};

export default GlobalNetwork;