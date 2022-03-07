import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';

import "./Style.css";


const ContactInfo = () => {
    return (
        <>
            <Container className='py-5'>
                <div className="contact-header mb-5">
                    <h2 className='contact-title text-center fw-bold pb-2'>Contact us</h2>
                    <p className='contact-desc text-center text-muted fw-normal pt-2'>Any question remarks? Just write us a message!</p>
                </div>

                <Row>
                    <Col md={5} className="mb-4">
                        <div className="contact-info-left">
                            <div className="contact-info-header-icon text-center mb-4">
                                <i className="fa-solid fa-headset"></i>
                            </div>

                            <h3 className='text-light fs-4'>Contact Infromation</h3>
                            <p className='text-white-50 fs-5 pe-5'>Fill up the from and our team will get back to you within 24 hourse.</p>

                            <div className="contact-info-boxes pt-4">
                                <div className="info-box d-flex text-light">
                                    <div className="info-icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <p>+900 345 2369</p>
                                </div>
                                <div className="info-box d-flex text-light">
                                    <div className="info-icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <p>info@sevenauction.com</p>
                                </div>
                                <div className="info-box d-flex text-light">
                                    <div className="info-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <p>Prince Turki lbn abdulaziz Al <br /> Awwar Rd, Hitin, Riyadh 13513</p>
                                </div>
                            </div>

                            <div className="contact-social pt-5">
                                <Link to="/#"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link to="/#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link to="/#"><i className="fa-brands fa-instagram"></i></Link>
                                <Link to="/#"><i className="fa-brands fa-linkedin-in"></i></Link>
                                <Link to="/#"><i className="fa-brands fa-youtube"></i></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactInfo;