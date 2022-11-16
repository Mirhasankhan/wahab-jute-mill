import React from 'react';
import './Footer.css';
import mill from '../../../Images/mill-2.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import { FilePresent } from '@mui/icons-material';

const Footer = () => {
    return (
        <section className="row footer-container">
            <div style={{ paddingTop: '50px' }} className="col-md-3">
                <img src={mill} alt="" />
                <p style={{ color: 'white', textAlign: 'left', paddingLeft: '70px', paddingTop: '20px' }}>Sed ut perspiciatis unde omnis<br /> iste natus error sit voluptatem ac<br />cusantium doloremque laudan<br />tium, totam rem aperiam, eaque<br /> ipsa quae ab illo inventore veri<br />tatis et quasi architecto beatae vita<br />e</p>
            </div>
            <div className="col-md-3 adress">               
                   
                    <h1>ADDRESS</h1>              
                <div className="d-flex">
                    <LanguageIcon className="envelop-icon"></LanguageIcon>
                    <h5>3584 Hickory Heights Drive ,Hanover MD 21076, USA</h5>                    
                </div>
                <div className='d-flex'>
                    <PhoneEnabledIcon className="envelop-icon"></PhoneEnabledIcon>
                <h4>00 00 000 0</h4>
                </div>
               <div className="d-flex">
                 <MailOutlineIcon className="envelop-icon"></MailOutlineIcon>
                 <h5>mirhasan000034@gmail.com</h5>
               </div>

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
                <form>
                    <input className="footer-input" text="email" placeholder="your email address..."/>
                    <button className="send-icon"><SendIcon className="iconsss"></SendIcon></button>
                </form>
                <h6 style={{ paddingTop: '10px' }}>We're Social Connect With Us</h6>
                <div className="d-flex">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookIcon className="news-icon"></FacebookIcon></a>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><GoogleIcon className="news-icon"></GoogleIcon></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterIcon className="news-icon"></TwitterIcon></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="news-icon"></LinkedInIcon></a>
                </div>

            </div>
            <h5 style={{ color: 'white', paddingTop: '80px',borderTop: '1px solid gray' }}>COPYRIGHT © 2022. All Rights Reserved</h5>

        </section>
    );
};

export default Footer;