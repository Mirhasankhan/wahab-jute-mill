import React from 'react';
import worker from '../../../Images/workers.jpg';
import working2 from '../../../Images/working-2.jpg';
import working3 from '../../../Images/working-3.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


import './Projects.css';

const Projects = () => {
    return (
        <div style={{ backgroundColor: '#F7F7F9', height: '800px', width: '100%'}}>
            <div>
                <h2 style={{ paddingTop: '30px', paddingBottom: '10px' }}>Our Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci<br />didunt ut labore et dolore magna aliqua.</p>
            </div>            
            <div className="project-img">
                <img src={worker} alt="" />
                <img src={working2} alt=""/>
                <img src={working3} alt=""/>              
            </div>
            <div style={{paddingTop: '20px'}} className="d-flex justify-content-center">
                <button className="slike-button"><ChevronLeftIcon></ChevronLeftIcon></button>
                <button className="slike-button"><ChevronRightIcon></ChevronRightIcon></button>
            </div>

        </div>
    );
};

export default Projects;