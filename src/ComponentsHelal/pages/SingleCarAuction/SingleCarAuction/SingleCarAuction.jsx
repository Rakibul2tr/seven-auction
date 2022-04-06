import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import CarHeader from '../CarHeader/CarHeader';

import "./Style.css";
import Countdown from "react-countdown";

// gallery images 
import carFeaturedImg from "../../../../assets/images/car/single-car-3.png";
import carGlimg1 from "../../../../assets/images/car/single-car-1.png";
import carGlimg2 from "../../../../assets/images/car/single-car-2.png";
import carGlimg4 from "../../../../assets/images/car/single-car-4.png";
import carGlimg5 from "../../../../assets/images/car/single-car-5.png";
import carGlimg6 from "../../../../assets/images/car/single-car-6.png";
import carGlimg7 from "../../../../assets/images/car/single-car-7.png";
import carGlimg8 from "../../../../assets/images/car/single-car-8.png";
import UseHoocks from '../../../../UseHoocks/UseHoocks';


const galleryImages = [
    { glSrc: carFeaturedImg },
    { glSrc: carGlimg1 },
    { glSrc: carGlimg2 },
    { glSrc: carGlimg4 },
    { glSrc: carGlimg5 },
    { glSrc: carGlimg6 },
    { glSrc: carGlimg7 },
    { glSrc: carGlimg8 }
];

const SingleCarAuction = () => {

    let { id } = useParams();
    const { bearerToken } = UseHoocks();

    const {Livecars}=UseHoocks();
    let filetedata=Livecars.filter(car=>{return car._id==id})
    

    const [glIndex, setGlIndex] = useState(0);

    const handleGlTab = (index) => {
        setGlIndex(index);
    };


  const [auctionDetails, setAuctionDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://seven-auction.herokuapp.com/api/auction-details/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: bearerToken,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAuctionDetails(data?.foundAuction);
      });
  }, []);

    return (
        <>
            <div className="single-car-body py-5">
                <CarHeader currentBid={auctionDetails.currentBid} numberOfBids={auctionDetails.numberOfBids} />

                <div className="single-car-details mt-5">
                    <Container>
                        <div className="car-gallery">
                            <Row>
                                <Col md={8}>
                                    <div className="car-large-img">
                                        <img /*src={galleryImages[glIndex].glSrc} */ src={auctionDetails.images} className="w-100 h-100" alt="Not found!" />
                                    </div>
                                </Col>
                                <Col md={4} className="car-gl-images">
                                    <Row className=''>
                                        {
                                            galleryImages.map((galleryImage, index) => (
                                                <Col md={6} key={galleryImage._id} className="mb-3 car-gl-img">
                                                    <img className='w-100 h-100' src={galleryImage.glSrc} alt="Not found!" onClick={() => handleGlTab(index)} />
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </div>

                        <div className="car-detail">
                            <h2 className='single-car-title text-uppercase'>{auctionDetails.name}</h2>
                            <Row>
                                <Col md={8} className="pe-0">
                                    <div className="single-car-desc shadow-sm p-4 rounded" style={{ height: '100%' }}>
                                        <h3 className='fw-bolder mb-3'>Description</h3>
                                        {auctionDetails.description}
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam inventore tempore ullam explicabo quidem, necessitatibus ad quisquam, animi atque minima iste quibusdam odit, sunt sapiente voluptatum pariatur quam eum impedit.</p> */}
                                    </div>
                                </Col>
                                <Col md={4} className="">
                                    <div className="single-car-overview shadow-sm p-4 rounded" style={{ height: '100%' }}>
                                        <h3 className='fw-bolder mb-3'>Car Overview</h3>
                                        <div className="car-overview-boxes">
                                            <div className="car-overview-boxe">
                                                <i className="fa-solid fa-clock"></i>
                                                <span>{auctionDetails.traveledKilometers} km</span>
                                            </div>
                                            <div className="car-overview-boxe">
                                                <i className="fa-solid fa-ring"></i>
                                                <span>{auctionDetails.traffic}</span>
                                            </div>
                                            <div className="car-overview-boxe">
                                                <i className="fa-solid fa-brush"></i>
                                                <span>{auctionDetails.color}</span>
                                            </div>
                                            <div className="car-overview-boxe">
                                                <i className="fa-solid fa-sliders"></i>
                                                <span>{auctionDetails.engine}</span>
                                            </div>
                                            <div className="car-overview-boxe">
                                                <i className="fa-solid fa-share"></i>
                                                <span>97,015 km</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default SingleCarAuction;