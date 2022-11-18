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


const Footer = () => {
    return (
        <section className="footer-container">
            <div className="d-flex">
            <div style={{ paddingTop: '50px' }} >
                <img src={mill} alt="" />
                <p style={{ color: 'white', textAlign: 'left', paddingLeft: '70px', paddingTop: '20px' }}>Sed ut perspiciatis unde omnis<br /> iste natus error sit voluptatem ac<br />cusantium doloremque laudan<br />tium, totam rem aperiam, eaque<br /> ipsa quae ab illo inventore veri<br />tatis et quasi architecto beatae vita<br />e</p>
            </div>
            <div className="adress">             
                   
                    <h5 style={{marginBottom:'30px', marginRight:'60px'}}>ADDRESS</h5>              
                <div className="d-flex">
                    <LanguageIcon className="envelop-icon"></LanguageIcon>
                    <p>3584 Hickory Heights Drive<br/> ,Hanover MD 21076, USA</p>                    
                </div>
                <div className='d-flex'>
                    <PhoneEnabledIcon className="envelop-icon"></PhoneEnabledIcon>
                <p>00 00 000 000</p>
                </div>
               <div className="d-flex">
                 <MailOutlineIcon className="envelop-icon"></MailOutlineIcon>
                 <p>mirhasan000034@gmail.com</p>
               </div>

            </div>
            <div className="adress">
                <h3 style={{marginBottom:'20px', marginRight:'120px'}}>Useful Links</h3>
                <p>About Us </p>
                <p>History</p>
                <p>Gallery</p>
                <p>Privacy & Policy </p>
                <p>Contact Us </p>

            </div>
            <div className="adress">
                <h3 style={{marginBottom:'30px'}}>NewsLetter</h3>
                <form>
                    <input className="footer-input" text="email" placeholder="your email address..."/>
                    <button className="send-icon"><SendIcon className="iconsss"></SendIcon></button>
                </form>
                <p style={{ paddingTop: '10px' }}>We're Social Connect With Us</p>
                <div className="d-flex">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookIcon className="news-icon"></FacebookIcon></a>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><GoogleIcon className="news-icon"></GoogleIcon></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterIcon className="news-icon"></TwitterIcon></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="news-icon"></LinkedInIcon></a>
                </div>
            </div>        


            </div>
            <p className="footer-con">COPYRIGHT © 2022. All Rights Reserved</p>
        </section>
        
    );
};

export default Footer;