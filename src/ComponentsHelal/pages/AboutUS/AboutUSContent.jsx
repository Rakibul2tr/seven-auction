import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Style.css";

import Map from "../../../assets/images/slider/map.png";

const AboutUSContent = () => {
    return (
        <>
            <div className="aboutus-cont-sec py-5">
                <Container>
                    <h2 className="about-title mb-4">About us</h2>

                    <Row>
                        <Col md={6} className="mb-4">
                            <div className="about-left">
                                <h3 className='fs-5 fw-bolder mb-3'>What is seven auction?</h3>
                                <p>The description of the Auction Lot is, dolor sit amet consectetur adipisicing elit. Eos, minima sunt. Ex corporis magnam deleniti earum molestiae itaque ullam quisquam ipsam in velit! Voluptas nemo voluptatum similique blanditiis esse doloribus id voluptate, dolorum, nihil, impedit aliquid. Minima similique reprehenderit molestiae porro quo, amet atque veritatis, earum magni, architecto accusantium laboriosam.</p>

                                <div className="about-info-boxes mt-5">
                                    <div className="about-info-boxe d-flex align-items-center">
                                        <div className="about-info-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="about-info-text">
                                            <span>+900 345 2392</span>
                                        </div>
                                    </div>
                                    <div className="about-info-boxe d-flex align-items-center">
                                        <div className="about-info-icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="about-info-text">
                                            <span>info@sevenauction.com</span>
                                        </div>
                                    </div>
                                    <div className="about-info-boxe d-flex align-items-center">
                                        <div className="about-info-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="about-info-text">
                                            <span>Dhaka, Mohammadpur - 1207</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-social about-social pt-5">
                                    <a href="/">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="/">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="/">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="/">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                    <a href="/">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </div>

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="about-right">
                                <img src={Map} alt="Not found!" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AboutUSContent;