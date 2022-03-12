import React from 'react';
import './Marksed.css';
import car1 from "../../../assets/images/car/car-1.png";
import car2 from "../../../assets/images/car/car-2.png";
import car3 from "../../../assets/images/car/car-3.png";
import car4 from "../../../assets/images/car/car-4.png";
import countryFlag from "../../../assets/images/saudi-flag.png";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Marksed = () => {
    const cars = [
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car1,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of ladfyu sdfh",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car2,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing ladfyu sdfh",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car3,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        },
        {
            title: "2008 Ferrari 430 scuderia",
            desc: "Lorem Ipsum is simply dummy text of the printing",
            brand: "LHD",
            countryFlag: countryFlag,
            location: "KSA, Riyadh",
            imageSrc: car4,
            bidCount: 34,
            timecount: "06:30:50",
            price: "149,000 S.R"
        }
        
    ];
    return (
        <Container style={{ background: "#F6F8FA" }}>
       <Row className="pb-4">
        <div className="my_marksed">
          <h4>Marked</h4>
        </div>
        <div className="mark_car_aria">
            <div className="row">
                {
                    cars.map(car=>(<Col md={4} className="mb-5" key={car.imageSrc}>
                    <div className="auction-car-item">
                        <div className="mark_car-img_bg" style={{ backgroundImage: `url(${car.imageSrc})` }}>
                            <div className="car-time-and-price d-flex">
                                <div className="car-time"><i className="fa-solid fa-clock"></i>{car.timecount}</div>
                                <div className="car-price">{car.price}</div>
                            </div>
                        </div>
                        <div className="car-bid-shareMark d-flex align-items-center justify-content-between">
                            <div className="car-bid_btn text-muted">{car.bidCount} Bids</div>
                            <div className="car-share_Mark">
                                <Button variant='link'><i className="fa-solid fa-share-nodes"></i></Button>
                                <Button variant='link'><i className="fa-solid fa-bookmark"></i></Button>
                            </div>
                        </div>
                        <Link to="/#" className="car-title-link"><h2 className="car-title_bid pt-3">{car.title}</h2></Link>
                        <p className="car-descrip text-muted">{car.desc}</p>
                        <div className="car-brandLocation d-flex align-items-center">
                            <div className="car-brand_smal text-muted">
                                <i className="fa-brands fa-black-tie"></i> {car.brand}
                            </div>
                            <div className="car-location_smal text-muted">
                                <img src={car.countryFlag} alt="Location..." /> {car.location}
                            </div>
                        </div>
                    </div>
                </Col>))  
                }
            </div>
        </div>
       
      </Row>
    </Container>
    );
};

export default Marksed;