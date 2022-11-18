import React from 'react';
import './MoreAbout.css';
import worker1 from '../../../Images/worker-1.png';
import bal from '../../../Images/envelop.png';

const MoreAbout = () => {
    return (
        <section className="more-aboutContainer d-flex">
            <img style={{ height: "700px", marginLeft: '100px' }} src={worker1} alt="" />
            <div className="about-text">
                <h5>A little bit about us</h5>
                <h1 style={{marginTop:'40px', marginBottom:'40px'}}>ABOUT US</h1>
                <p style={{marginBottom: '40px'}}>Our organization pursues several goals that can be identified as our mission. Learn more about them below. Auis nostrud exercitation ullamc laboris nisitm aliquip ex bea sed consequat duis autes ure dolor. dolore magna aliqua nim ad minim.Auis nostrud<br/> exercitation ullamc laboris nisitm aliquip ex bea sed consequat duis autes ure dolor. dolore magna aliqua nim ad minim.</p>
                <button className="explore-button">READ MORE</button>
            </div>

        </section>

        // <section className="more-about">
        //     <div className="row">
        //     <div className="col-md-6">
        //         <img src={worker1} alt="" />

        //     </div>
        //     <div className="col-md-6">
        //         <h6 style={{textAlign: 'left', marginTop: '220px'}}>A little bit More </h6>
        //         <h1 style={{textAlign: 'left', paddingBottom: '30px', paddingTop: '30px', fontWeight: '800'}}>About Us</h1>
        //         <p style={{textAlign: 'left', marginRight: '30px'}}>Our organization pursues several goals that can be identified as our mission. Learn more about them below. Auis nostrud exercitation ullamc laboris nisitm aliquip ex bea sed consequat duis autes ure dolor. dolore magna aliqua nim ad minim. Auis nostrud exercitation ullamc laboris nisitm aliquip ex bea sed consequat duis autes ure dolor. dolore magna aliqua nim ad minim.</p>
        //         <button className="explore-button read-moreButton">Read More</button>

        //     </div>
        // </div>
        // </section>
    );
};

export default MoreAbout;