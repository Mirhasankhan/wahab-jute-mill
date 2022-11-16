import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Home/Header/Header';
import ContactDetail from '../ContactDetail/ContactDetail';
import ContactTop from '../ContactTop/ContactTop';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <ContactTop></ContactTop>
            <ContactDetail></ContactDetail>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;