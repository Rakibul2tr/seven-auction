import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarHeader from '../CarHeader/CarHeader';

import "./Style.css";

import carFeaturedImg from "../../../../assets/images/car/car-3.png";

// gallery images 
import carGlimg1 from "../../../../assets/images/car/car-1.png";
import carGlimg2 from "../../../../assets/images/car/car-2.png";
import carGlimg4 from "../../../../assets/images/car/car-4.png";
import carGlimg5 from "../../../../assets/images/car/car-5.png";
import carGlimg6 from "../../../../assets/images/car/car-6.png";
import carGlimg7 from "../../../../assets/images/car/car-7.png";
import carGlimg8 from "../../../../assets/images/car/car-8.png";
import carGlimg9 from "../../../../assets/images/car/car-9.png";

const galleryImages = [
    { _id: 1, glSrc: carGlimg1 },
    { _id: 2, glSrc: carGlimg2 },
    { _id: 3, glSrc: carGlimg4 },
    { _id: 4, glSrc: carGlimg5 },
    { _id: 5, glSrc: carGlimg6 },
    { _id: 6, glSrc: carGlimg7 },
    { _id: 7, glSrc: carGlimg8 },
    { _id: 8, glSrc: carGlimg9 },
];

const SingleCarAuction = () => {
    return (
        <>
            <CarHeader />

            <div className="single-car-details mt-5 mb-5">
                <Container>
                    <div className="car-gallery">
                        <Row>
                            <Col md={8}>
                                <img src={carFeaturedImg} alt="Not found!" />
                            </Col>
                            <Col md={4}>
                                <Row className=''>
                                    {
                                        galleryImages.map(galleryImage => (
                                            <Col md={6} key={galleryImage._id} className="mb-3">
                                                <img src={galleryImage.glSrc} alt="Not found!" />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    <div className="car-detail">
                        <h2 className='single-car-title text-uppercase'>1989 land rover 90 3.5 V8 - Factory soft top</h2>
                        <Row>
                            <Col md={8} className="">
                                <div className="single-car-desc shadow-sm p-4 rounded" style={{ height: '100%' }}>
                                    <h3 className='fw-bolder mb-3'>Description</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                </div>
                            </Col>
                            <Col md={4} className="">
                                <div className="single-car-overview shadow-sm p-4 rounded" style={{ height: '100%' }}>
                                    <h3 className='fw-bolder mb-3'>Car Overview</h3>
                                    <div className="car-overview-boxes">
                                        <div className="car-overview-boxe">
                                            <i class="fa-solid fa-clock"></i>
                                            <span>97,015 km</span>
                                        </div>
                                        <div className="car-overview-boxe">
                                            <i class="fa-solid fa-ring"></i>
                                            <span>LHD</span>
                                        </div>
                                        <div className="car-overview-boxe">
                                            <i class="fa-solid fa-brush"></i>
                                            <span>Green Blue</span>
                                        </div>
                                        <div className="car-overview-boxe">
                                            <i class="fa-solid fa-sliders"></i>
                                            <span>3.SL V8</span>
                                        </div>
                                        <div className="car-overview-boxe">
                                            <i class="fa-solid fa-share"></i>
                                            <span>97,015 km</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SingleCarAuction;