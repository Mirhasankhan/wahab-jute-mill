import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Home/Header/Header';
import HistoryTitle from '../HistoryTitle/HistoryTitle';
import HistoryTop from '../HistoryTop/HistoryTop';

const History = () => {
    return (
        <div>
            <Header></Header>
            <HistoryTop></HistoryTop>
            <HistoryTitle></HistoryTitle>
            <Footer></Footer>
        </div>
    );
};

export default History;