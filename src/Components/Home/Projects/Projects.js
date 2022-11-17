import React from 'react';
import worker from '../../../Images/workers.jpg';
import './Projects.css';

const Projects = () => {
    return (
        <div style={{ backgroundColor: '#F7F7F9', height: '800px', width: '100%'}}>
            <h2 style={{ paddingTop: '30px', paddingBottom: '10px' }}>Our Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci<br />didunt ut labore et dolore magna aliqua.</p>
            <img src={worker} alt="" />
            <div style={{paddingTop: '20px'}} className="d-flex justify-content-center">
                <button className="slike-button">>></button>
                <button className="slike-button">>></button>
            </div>

        </div>
    );
};

export default Projects;