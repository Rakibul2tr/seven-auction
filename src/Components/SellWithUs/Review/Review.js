import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgDiv from '../../../assets/images/car/car-1.png'
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
    
    const [review,setReview]=useState([getValue()])
    console.log(review[0]);
    const file= URL.revokeObjectURL(review[0].file);

    console.log(file);
    const gelary=[
        imgDiv,imgDiv,imgDiv,imgDiv
    ]
    
    return (
        <>
            <Container>
                <Row className='py-5'>
                    <Col md={6}>
                        <div className="image_glary_review">
                            <Row>
                                {/* {
                                    file.map(item=>(<Col xs={6}>
                                        <div className="image_div_review">
                                            <img src={item} alt="gelary" />
                                        </div>
                                    </Col>))
                                } */}
                                {
                                    gelary.map(item=>(<Col xs={6}>
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
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="review_descripton">
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae quidem accusamus necessitatibus? Excepturi similique autem, non mollitia illo, molestias id neque animi fugit tenetur illum sit voluptate esse asperiores?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae quidem accusamus necessitatibus? Excepturi similique autem, non mollitia illo, molestias id neque animi fugit tenetur illum sit voluptate esse asperiores?</p>
                        </div>
                    </Col>
                </Row>
                <Row className='py-5'>
                <div className="dable_btn_Step_review">
                      <button className='prev_btn'onClick={()=>props.setSteps('submit')}>
                      <i className="fa-solid fa-angles-left"></i>
                      Previous
                      </button>
                      <button className='next_btn'>
                        Submit
                      </button>
                      </div>
                </Row>
            </Container>
        </>
    );
};

export default Review;