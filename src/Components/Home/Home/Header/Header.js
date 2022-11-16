import React from 'react';
import mill from '../../../../Images/Mill Header.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        <main className="header-container">
            <div>
                <img className="set-header" src={mill} alt="" />
            </div>
            <div>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" className="nav-hov">Home</Nav.Link>
                                <Nav.Link href="/aboutUs" className="nav-hov">About Us</Nav.Link>
                                <Nav.Link href="/history" className="nav-hov">History</Nav.Link>
                                <Nav.Link href="/products" className="nav-hov">Products</Nav.Link>
                                <Nav.Link href="gallery" className="nav-hov">Gallery</Nav.Link>
                                <Nav.Link href="/contactUs" className="nav-hov">Contact Us</Nav.Link>
                                <Nav.Link href="getQuote"><button className="quote-button">Get a qoute</button></Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </main>
    );
};

export default Header;