import React from 'react';
import mill from '../../../../Images/Mill Header.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const Header = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
  function closeModal() {
    setIsOpen(false);
  }
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
                                <Nav.Link><button className="quote-button" onClick={openModal}>Get a qoute</button></Nav.Link>

                                <Modal
                                    isOpen={modalIsOpen}

                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <h2 style={{textAlign:'center',color:'#06E978'}}>QUOTE</h2>
                                    
                                    
                                    <form>
                                       <div className="m-3">
                                        <input style={{marginRight:'20px'}} text="name" placeholder="Enter Your Name"/>
                                        <input text="email" placeholder="Enter Your Email Address"/>
                                       </div>
                                       <div className="mb-3">
                                       <input text="name" placeholder="Enter Your Subject"/>                                      
                                       </div>
                                       <textarea placeholder="Enter Description"/>
                                    </form>
                                    <button onClick={closeModal}>Submit</button>
                                </Modal>
                            </Nav>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </main>
    );
};

export default Header;