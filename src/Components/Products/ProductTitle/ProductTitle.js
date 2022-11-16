import React from 'react';
import working1 from '../../../Images/workers.jpg';
import working2 from '../../../Images/working-2.jpg';
import working3 from '../../../Images/working-3.jpg';
import working4 from '../../../Images/working-4.jpg';
import working5 from '../../../Images/working-5.jpg';

const ProductTitle = () => {
    return (
        <section style={{ height: '1250px', backgroundColor: '#F7F7F9' }}>
            <h1 style={{ paddingTop: '30px' }}>Our Products</h1>
            <p style={{ paddingBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci<br />didunt ut labore et dolore magna aliqua.</p>
            <div className="d-flex">
                <div>
                    <img style={{ width: '350px', marginLeft: '120px' }} src={working1} alt="" />
                </div>
                <div>
                    <img style={{ width: '350px', marginLeft: '30px' }} src={working2} alt="" />
                </div>
                <div>
                    <img style={{ width: '350px', marginLeft: '30px' }} src={working3} alt="" />
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <img style={{ width: '350px', marginLeft: '120px', marginTop: '30px' }} src={working4} alt="" />
                </div>
                <div>
                    <img style={{ width: '350px', marginLeft: '30px', marginTop: '30px' }} src={working5} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ProductTitle;