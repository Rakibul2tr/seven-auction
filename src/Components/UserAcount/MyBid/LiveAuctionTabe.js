import React, { useEffect, useRef, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyBid.css";
import UseHoocks from "./../../../UseHoocks/UseHoocks";
import Countdown from "react-countdown";

const LiveAuctionTabe = (props) => {
  const { bearerToken } = UseHoocks();
  const [bidedAuctions, setbidedAuctions] = useState([]);

  useEffect(() => {
    fetch(`https://seven-auction.herokuapp.com/api/user/my-bids?result=live`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: bearerToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setbidedAuctions(data?.bidedAuctions);
      });
  }, []);

  return (
    <div className="bid_car_aria">
      <div className="row">
        {bidedAuctions.length > 0
          ? bidedAuctions.map((car) => (
              <Col md={4} className="mb-5" key={car._id}>
                <div className="auction-car-item">
                  <div
                    className="car-img_bg"
                    style={{ backgroundImage: `url(${car.images})` }}
                  >
                    <div
                      className={
                        car.bidCount >= 40
                          ? "top_belt_greenColor"
                          : "top_belt_redColor"
                      }
                    >
                      <div className="top_belt_div">
                        <p>
                          {car.bidCount >= 40 ? (
                            <span>you are the last bidder</span>
                          ) : (
                            "someone bid on your bid"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="car-time-and-price d-flex">
                      <div className="car-time">
                        <i className="fa-solid fa-clock"></i>
                        <Countdown date={car.liveEnd} />
                      </div>
                      <div className="car-price">{car.minimumAmount}</div>
                    </div>
                  </div>
                  <div className="car-bid-shareMark d-flex align-items-center justify-content-between">
                    <div className="car-bid_btn text-muted">
                      {car.bidCount} Bids
                    </div>
                    <div className="car-share_Mark">
                      <Button variant="link">
                        <i className="fa-solid fa-share-nodes"></i>
                      </Button>
                      <Button variant="link">
                        <i className="fa-solid fa-bookmark"></i>
                      </Button>
                    </div>
                  </div>
                  <Link to="/#" className="car-title-link">
                    <h2 className="car-title_bid pt-3">{car.name}</h2>
                  </Link>
                  <p className="car-descrip text-muted">{car.description}</p>
                  <div className="car-brandLocation d-flex align-items-center">
                    <div className="car-brand_smal text-muted">
                      <i className="fa-brands fa-black-tie"></i> {car.traffic}
                    </div>
                    <div className="car-location_smal text-muted">
                      <img src={car.countryFlag} alt="Location..." />{" "}
                      {car.location}
                    </div>
                  </div>
                </div>
              </Col>
            ))
          : bidedAuctions.map((car) => (
              <Col md={4} className="mb-5" key={car.imageSrc}>
                <div className="auction-car-item">
                  <div
                    className="car-img_bg"
                    style={{ backgroundImage: `url(${car.imageSrc})` }}
                  >
                    <div
                      className={
                        car.bidCount >= 40
                          ? "top_belt_greenColor"
                          : "top_belt_redColor"
                      }
                    >
                      <div className="top_belt_div">
                        <p>
                          {car.bidCount >= 40 ? (
                            <span>you are the last bidder</span>
                          ) : (
                            "someone bid on your bid"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="car-time-and-price d-flex">
                      <div className="car-time">
                        <i className="fa-solid fa-clock"></i>
                        {car.timecount}
                      </div>
                      <div className="car-price">{car.price}</div>
                    </div>
                  </div>
                  <div className="car-bid-shareMark d-flex align-items-center justify-content-between">
                    <div className="car-bid_btn text-muted">
                      {car.bidCount} Bids
                    </div>
                    <div className="car-share_Mark">
                      <Button variant="link">
                        <i className="fa-solid fa-share-nodes"></i>
                      </Button>
                      <Button variant="link">
                        <i className="fa-solid fa-bookmark"></i>
                      </Button>
                    </div>
                  </div>
                  <Link to="/#" className="car-title-link">
                    <h2 className="car-title_bid pt-3">{car.title}</h2>
                  </Link>
                  <p className="car-descrip text-muted">{car.desc}</p>
                  <div className="car-brandLocation d-flex align-items-center">
                    <div className="car-brand_smal text-muted">
                      <i className="fa-brands fa-black-tie"></i> {car.brand}
                    </div>
                    <div className="car-location_smal text-muted">
                      <img src={car.countryFlag} alt="Location..." />{" "}
                      {car.location}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
      </div>
    </div>
  );
};

export default LiveAuctionTabe;
