import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import './Style.css';

import car1 from "../../../../assets/images/car/car-1.png";
import car2 from "../../../../assets/images/car/car-2.png";
import car3 from "../../../../assets/images/car/car-3.png";
import car4 from "../../../../assets/images/car/car-4.png";

import brandIcon from "../../../../assets/images/brand-icon.png";

import countryFlag from "../../../../assets/images/saudi-flag.png";
import { Link } from 'react-router-dom';

const Livecars = [
    {
        title: "2008 Ferrari 430 scuderia",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        brand: "LHD",
        countryFlag: countryFlag,
        location: "KSA, Riyadh",
        imageSrc: car4,
        bidCount: 34,
        timecount: "06:30:50",
        price: "149,000 S.R"
    },
];

const Soldcars = [
    {
        title: "2008 Ferrari 430 scuderia",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        brand: "LHD",
        countryFlag: countryFlag,
        location: "KSA, Riyadh",
        imageSrc: car4,
        bidCount: 34,
        timecount: "06:30:50",
        price: "149,000 S.R"
    },
    {
        title: "2008 Ferrari 430 scuderia",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        brand: "LHD",
        countryFlag: countryFlag,
        location: "KSA, Riyadh",
        imageSrc: car4,
        bidCount: 34,
        timecount: "06:30:50",
        price: "149,000 S.R"
    },
    {
        title: "2008 Ferrari 430 scuderia",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        brand: "LHD",
        countryFlag: countryFlag,
        location: "KSA, Riyadh",
        imageSrc: car3,
        bidCount: 34,
        timecount: "06:30:50",
        price: "149,000 S.R"
    },
];

const AuctionFilter = () => {

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);
    return (
        <>
            <Container className='py-5'>
                <div className="auction-filter-form py-4">
                    <Row>
                        <Col md={6}>
                            <div className="auction-search-form">
                                <input type="text" />
                                <div className="auction-placeholer">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="text-end">
                            <div className="auction-filter-btns">
                                <Button variant='link'><i className="fa-solid fa-bars-staggered"></i> Filters</Button>
                                <Button variant='link'><i className="fa-solid fa-bookmark"></i> Marks</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="auction-cars">
                    <Tabs defaultActiveKey="live" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="live" title="Live (150)">
                            <div className="auction-car-lisl">
                                <Row>
                                    {
                                        Livecars.map(car => (
                                            <Col md={3} className="mb-5" key={car.title}>
                                                <div className="auction-car-item">
                                                    <div className="car-img" style={{ backgroundImage: `url(${car.imageSrc})` }}>
                                                        <div className="car-time-and-price d-flex">
                                                            <div className="car-time">
                                                                <i class="fa-regular fa-clock"></i>
                                                                {car.timecount}
                                                            </div>
                                                            <div className="car-price">{car.price}</div>
                                                        </div>
                                                    </div>
                                                    <div className="car-bid-shareMark d-flex align-items-center justify-content-between">
                                                        <div className="car-bid text-muted">{car.bidCount} Bids</div>
                                                        <div className="car-shareMark">
                                                            <Button variant='link'><i className="fa-solid fa-share-nodes"></i></Button>
                                                            <Button variant='link'><i className="fa-solid fa-bookmark"></i></Button>
                                                        </div>
                                                    </div>
                                                    <Link to="/singlecar" className="car-title-link"><h2 className="car-title pt-3">{car.title}</h2></Link>
                                                    <p className="car-desc text-muted">{car.desc}</p>
                                                    <div className="car-brandLocation d-flex align-items-center">
                                                        <div className="car-brand text-muted">
                                                            <img src={brandIcon} alt="Brand..." /> {car.brand}
                                                        </div>
                                                        <div className="car-location text-muted">
                                                            <img src={car.countryFlag} alt="Location..." /> {car.location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <div className="car-loadmore-btn text-center d-grid gap-2 mb-5">
                                    <Button
                                        disabled={isLoading}
                                        onClick={!isLoading ? handleClick : null}
                                    >
                                        {isLoading ? 'Loading…' : 'Load More'}
                                    </Button>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="sold" title="Sold (3,250)">
                            <div className="auction-car-lisl">
                                <Row>
                                    {
                                        Soldcars.map(car => (
                                            <Col md={3} className="mb-5" key={car.title}>
                                                <div className="auction-car-item">
                                                    <div className="car-img" style={{ backgroundImage: `url(${car.imageSrc})` }}>
                                                        <div className="car-time-and-price d-flex">
                                                            <div className="car-time">
                                                                <i class="fa-regular fa-clock"></i>
                                                                {car.timecount}
                                                            </div>
                                                            <div className="car-price">{car.price}</div>
                                                        </div>
                                                    </div>
                                                    <div className="car-bid-shareMark d-flex align-items-center justify-content-between">
                                                        <div className="car-bid text-muted">{car.bidCount} Bids</div>
                                                        <div className="car-shareMark">
                                                            <Button variant='link'><i className="fa-solid fa-share-nodes"></i></Button>
                                                            <Button variant='link'><i className="fa-solid fa-bookmark"></i></Button>
                                                        </div>
                                                    </div>
                                                    <Link to="/singlecar" className="car-title-link"><h2 className="car-title pt-3">{car.title}</h2></Link>
                                                    <p className="car-desc text-muted">{car.desc}</p>
                                                    <div className="car-brandLocation d-flex align-items-center">
                                                        <div className="car-brand text-muted">
                                                            <img src={brandIcon} alt="Brand..." /> {car.brand}
                                                        </div>
                                                        <div className="car-location text-muted">
                                                            <img src={car.countryFlag} alt="Location..." /> {car.location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <div className="car-loadmore-btn text-center d-grid gap-2 mb-5">
                                    <Button
                                        disabled={isLoading}
                                        onClick={!isLoading ? handleClick : null}
                                    >
                                        {isLoading ? 'Loading…' : 'Load More'}
                                    </Button>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </>
    )
}

export default AuctionFilter;