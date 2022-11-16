import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Home/Header/Header';
import GalleryStore from '../GalleryStore/GalleryStore';
import GalleryTop from '../GalleryTop/GalleryTop';

const Gallery = () => {
    return (
        <div>
            <Header></Header>
            <GalleryTop></GalleryTop>
            <GalleryStore></GalleryStore>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;