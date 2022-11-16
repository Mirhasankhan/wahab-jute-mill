import React from 'react';
import './About.css';
import people from '../../../Images/About.png';

const About = () => {
    return (
        <div className="d-flex about-container">
           <div className="network-container">
            <img src={people} alt=""/>
                <h4>A Global Network</h4>
                <p>Lorem ipsum is some dummy<br/>workds to fill up the space for<br/>using later.</p>
                <a href="/gNetwork"><button className="new-button"> >> </button></a>
           </div>
           <div  className="network-container">
           <img src={people} alt=""/>
                <h4>A Global Network</h4>
                <p>Lorem ipsum is some dummy<br/>workds to fill up the space for<br/>using later.</p>
                <a href="/gNetwork"><button className="new-button"> >> </button></a>
           </div>
           <div  className="network-container">
           <img src={people} alt=""/>
                <h4>A Global Network</h4>
                <p>Lorem ipsum is some dummy<br/>workds to fill up the space for<br/>using later.</p>
                <a href="/gNetwork"><button className="new-button"> >> </button></a>
           </div>
        </div>
    );
};

export default About;