import React from 'react';
import './Records.css';
import rising from '../../../Images/rising.png';
import ok from '../../../Images/Ok.png';
import globe from '../../../Images/Globe.png';

const Records = () => {
    return (
        <div className="row records-container">
            <div className="col-md-6 history-container">
                <h4>Since 2010</h4>
                <h1>We Are Always With You To</h1>
                <h1>Make Your Projects</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus<br />pendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                <button style={{marginTop: '30px'}} className="quote-button">Get a quote</button>

            </div>
            <div className="col-md-6">
                <div className="d-flex">
                    <div className="box-editing">
                        <img style={{marginTop: '50px',marginBottom: '10px'}}  src={rising} alt=""/>
                        <h5>10 Winning Awards</h5>
                    </div>
                    <div className="box-editing">
                        <img style={{marginTop: '50px',marginBottom: '10px'}}   src={ok} alt=""/>
                        <h5>1230 Satisfied Clients</h5>
                    </div>
                </div>
                <div className="d-flex">
                <div className="box-editing">
                        <img style={{marginTop: '50px',marginBottom: '10px'}}  src={rising} alt=""/>
                        <h5>360 Best Projects</h5>
                    </div>
                    <div className="box-editing">
                        <img style={{marginTop: '50px',marginBottom: '10px'}}  src={ok} alt=""/>
                        <h5>15+ Years Served</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Records;