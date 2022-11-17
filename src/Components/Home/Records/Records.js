import React from 'react';
import './Records.css';
import rising from '../../../Images/rising.png';
import ok from '../../../Images/Ok.png';
import globe from '../../../Images/Globe.png';
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

const Records = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
  function closeModal() {
    setIsOpen(false);
  }


    return (
        <section className="records-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="history-container">
                        <h4>Since 2010</h4>
                        <h1>We Are Always With You To</h1>
                        <h1>Make Your Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus<br />pendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                        <button style={{ marginTop: '30px' }} onClick={openModal} className="explore-button">Get a quote</button>
                        
                        <Modal
                            isOpen={modalIsOpen}
                            
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2>Hello</h2>
                            <button onClick={closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <input />
                                <button>tab navigation</button>
                                <button>stays</button>
                                <button>inside</button>
                                <button>the modal</button>
                            </form>
                        </Modal>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex">
                        <div className="box-editing">
                            <img style={{ marginTop: '50px', marginBottom: '10px' }} src={rising} alt="" />
                            <h5>10 Winning Awards</h5>
                        </div>
                        <div className="box-editing">
                            <img style={{ marginTop: '50px', marginBottom: '10px' }} src={ok} alt="" />
                            <h5>1230 Satisfied Clients</h5>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="box-editing">
                            <img style={{ marginTop: '50px', marginBottom: '10px' }} src={globe} alt="" />
                            <h5>360 Best Projects</h5>
                        </div>
                        <div className="box-editing">
                            <img style={{ marginTop: '50px', marginBottom: '10px' }} src={ok} alt="" />
                            <h5>15+ Years Served</h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Records;