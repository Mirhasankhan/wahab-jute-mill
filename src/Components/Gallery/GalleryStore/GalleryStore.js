import React from 'react';
import './GalleryStore.css';
import summer from '../../../Images/summer.jpg';
import laptop from '../../../Images/laptop.jpg';
import capman from '../../../Images/capman.svg';
import jewellery from '../../../Images/aurnaments.jpg';
import together from '../../../Images/together.jpg';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const GalleryStore = () => {
    return (
        <div className="gallery-container">
            <div className="row">
                <div className="col-md-7">
                    <a href={summer}><img style={{ width: '650px', marginLeft: '130px'}} src={summer} alt=""/></a>
                </div>
                <div className="col-md-5">
                <a href={laptop}><img style={{ width: '500px', marginRight: '150px',height: '230px'}} src={laptop} alt=""/></a>
                <h2>lorem ipsum</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <a href={jewellery}><img style={{ width: '420px', marginLeft: '130px', height: '250px'}} src={jewellery} alt=""/></a>
                    
                </div>
                <div className="col-md-7">
                <a href={together}><img style={{ width: '700px', marginRight: '150px',height: '220px'}} src={together} alt=""/></a>
                <h2>lorem ipsum</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <a href={capman}><img style={{ width: '420px', marginLeft: '130px', height: '220px'}} src={capman} alt=""/></a>
                    <h4 style={{backgroundColor: 'white', marginLeft: '120px'}}>lorem ipsum</h4>
                </div>
                <div className="col-md-7">
                <a href={together}><img style={{ width: '700px', marginRight: '150px',height: '250px'}} src={together} alt=""/></a>
                
                </div>
            </div>
            <div>
                <div className="photo-frame">
                    <img src={summer} alt=""/>
                </div>
                <div className="icon-detail">
                    <ZoomInIcon></ZoomInIcon>
                </div>

            </div>
        </div>
    );
};

export default GalleryStore;