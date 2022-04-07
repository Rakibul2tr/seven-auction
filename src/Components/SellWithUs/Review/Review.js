import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgDiv from '../../../assets/images/car/car-1.png'
import UseHoocks from '../../../UseHoocks/UseHoocks';
import './Review.css'


const getValue=()=>{
    const localValue = JSON.parse(localStorage.getItem('Review'));
    if(localValue !== null){
     return localValue
    } else {
    return []
    }
  }
const Review = (props) => {
    const {bearerToken}=UseHoocks()
    // console.log(bearerToken);
    const [review,setReview]=useState([getValue()])
    const [error,setError]=useState()

    console.log(review[0]);
    const fiels=(review[0]?.file);

    const dataSubmit =()=>{
        console.log(review);
        fetch(`https://seven-auction.herokuapp.com/api/user/auctions-upload`,{
            method:'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json',
              authorization:bearerToken,
            },
            body:JSON.stringify(review[0])
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            // setError(data)
            
          })
   }



    
    return (
        <>
            <Container>
                <Row className='py-5'>
                    <Col md={6}>
                        <div className="image_glary_review">
                            <Row>
                                {
                                    fiels.map(item=>(<Col xs={6}>
                                        <div className="image_div_review">
                                            <img src={item} alt="gelary" />
                                        </div>
                                    </Col>))
                                }
                                
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="content">
                            <h4>{review[0]?.name}</h4>
                            <div className="current_price">
                                <div className="price">
                                    <h6>20,000 S.R</h6>
                                    <span>CURRENT BID</span>
                                </div>
                                <div className="day_time">
                                    <h6>7 DAYS</h6>
                                    <span>02/02/2022 10:05: PM</span>
                                </div>
                                <div className="bid">
                                    <h6>7 DAYS</h6>
                                    <span>02/02/2022 10:05: PM</span>
                                </div>
                            </div>
                        </div>
                        <div className="car_over_view">
                        <h4 className=' mb-4'>Car Overview</h4>
                            <div className="review_car-overview-boxes">
                                <div className="review_car-overview-boxe">
                                    <i className="fa-solid fa-clock"></i>
                                    <span>{review[0]?.traveledKilometers}</span>
                                </div>
                                <div className="review_car-overview-boxe">
                                    <i className="fa-solid fa-ring"></i>
                                    <span>{review[0]?.traffic}</span>
                                </div>
                                <div className="review_car-overview-boxe">
                                    <i className="fa-solid fa-brush"></i>
                                    <span>{review[0]?.color}</span>
                                </div>
                                <div className="review_car-overview-boxe">
                                    <i className="fa-solid fa-sliders"></i>
                                    <span>{review[0]?.engine}</span>
                                </div>
                                <div className="review_car-overview-boxe">
                                    <i className="fa-solid fa-share"></i>
                                    <span>97,015 km</span>
                                </div>
                                <div className="review_car-overview-boxe">
                                    <i className="fa-solid fa-share"></i>
                                    <span>$ {review[0]?.expectationAmount}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="review_descripton">
                            <h4>Description</h4>
                            <p>{review[0]?.details}</p>
                            <p>{review[0]?.description}</p>
                        </div>
                    </Col>
                </Row>
                <Row className='py-5'>
                <div className="dable_btn_Step_review">
                      <button className='prev_btn'onClick={()=>props.setSteps('submit')}>
                      <i className="fa-solid fa-angles-left"></i>
                      Previous
                      </button>
                      <button className='next_btn' onClick={dataSubmit}>
                        Submit
                      </button>
                      </div>
                </Row>
                {/* <Row>
                   {
                       error?.issue&&<h3>{error?.issue}</h3>
                   } 
                </Row> */}
            </Container>
        </>
    );
};

export default Review;