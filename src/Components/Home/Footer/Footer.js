import React from 'react';
import './Footer.css';
import mill from '../../../Images/mill-2.png';

const Footer = () => {
    return (
        <section className="row footer-container">
            <div style={{paddingTop: '50px'}} className="col-md-3">               
                <img src={mill} alt=""/>  
                <p style={{color: 'white', textAlign: 'left', paddingLeft: '70px', paddingTop: '20px'}}>Sed ut perspiciatis unde omnis<br/> iste natus error sit voluptatem ac<br/>cusantium doloremque laudan<br/>tium, totam rem aperiam, eaque<br/> ipsa quae ab illo inventore veri<br/>tatis et quasi architecto beatae vita<br/>e</p>             
            </div>
            <div className="col-md-3 adress">
                <h1>ADDRESS</h1>
                <h5>3584 Hickory Heights Drive ,Hanover MD 21076, USA</h5>
                <h4>00 00 000 0</h4>
                <h4>mirhasan000034@gmail.com</h4>

            </div>
            <div className="col-md-3 adress">
                <h1>Useful Links</h1>
                <h4>About Us </h4>
                <h4>History</h4>
                <h4>Gallery</h4>
                <h4>Privacy & Policy </h4>
                <h4>Contact Us </h4>

            </div>
            <div className="col-md-3 adress">
                <h1>NewsLetter</h1>
                <input className="footer-input" text="email" placeholder="your email address..."/>
                <h5 style={{paddingTop:'10px'}}>We're Social Connect With Us</h5>

            </div>
            <h5 style={{color: 'white',paddingTop: '250px'}}>COPYRIGHT © 2022. All Rights Reserved</h5>

        </section>
    );
};

export default Footer;