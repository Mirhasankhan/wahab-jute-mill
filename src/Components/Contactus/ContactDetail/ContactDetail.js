import React from 'react';
import './ContactDetail.css';
import envelop from '../../../Images/envelop.png';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


const ContactDetail = () => {
    return (
        <div className="contact-container">
            <div className="row">
                <div className="col-md-5">
                    <div className="d-flex">
                        <div className="envelops">
                            <img src={envelop} alt="" />
                        </div>
                        <div className="envelop-text">
                            <h6>Example.com</h6>
                            <h6>Example@gmail.com</h6>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="envelops">
                            <img src={envelop} alt="" />
                        </div>
                        <div className="envelop-text">
                            <h6>Example.com</h6>
                            <h6>Example@gmail.com</h6>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="envelops">
                            <img src={envelop} alt="" />
                        </div>
                        <div className="envelop-text">
                            <h6>Example.com</h6>
                            <h6>Example@gmail.com</h6>
                        </div>
                    </div>
                    <h4 style={{ textAlign: 'left ', marginLeft: '27px', marginTop: '15px' }}>Find Us Here :</h4>
                    <div className="d-flex ms-4">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FacebookIcon className="news-icon"></FacebookIcon></a>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><GoogleIcon className="news-icon"></GoogleIcon></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><TwitterIcon className="news-icon"></TwitterIcon></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="news-icon"></LinkedInIcon></a>
                </div>

                </div>

                <div className="col-md-7 bg-white">
                    <div>
                        <div>
                            <input className="input-ul" type="text" name="name"  placeholder="Name *" required="" />
                        </div>
                        <div>
                            <input className="input-ul" type="text" name="phone"  placeholder="Phone Number *" />
                        </div>
                        <div>
                            <input className="input-ul" type="email" name="email"  placeholder="Email Address *" required="" />
                        </div>

                        <div>
                            <textarea className="input-ul" name="text"  placeholder="Your Message *" required=""></textarea>
                        </div>
                    </div>
                    <div class="captcha-area">
                        <div>
                            <p><img className="codeimg" src="https://wc-teelucks.com/wahab-jute-mills/assets/images/capcha_code.png" alt="" /> <i class="fas fa-sync-alt pointer refresh_code"></i></p>

                        </div>
                        <div>
                            <input name="codes" type="text" class="input-field" placeholder="Enter Code *" required="" />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactDetail;