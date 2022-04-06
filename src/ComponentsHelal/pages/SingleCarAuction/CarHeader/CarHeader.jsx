import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Style.css";

const CarHeader = ({currentBid,numberOfBids}) => {
    return (
        <>
            <Container>
                <div className="car-header">
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <div className="car-header-left">
                                <div className="car-header-info-boxes text-center d-flex">
                                    <div className="header-info-box">
                                        <h5>{currentBid} S.R</h5>
                                        <span className='text-uppercase text-muted'>Current Bid</span>
                                    </div>
                                    <div className="header-info-box">
                                        <h5 className='text-uppercase'>7 Days</h5>
                                        <span className='text-muted'>02/02/2022 10:05: PM</span>
                                    </div>
                                    <div className="header-info-box">
                                        <h5>{numberOfBids}</h5>
                                        <span className='text-uppercase text-muted'>Bids</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="car-header-right text-md-end">
                                <Button className="single-car-markshare me-4" variant='link'><i className="fa-regular fa-bookmark"></i></Button>
                                <Button className="single-car-markshare me-4" variant='link'><i className="fa-solid fa-share-nodes"></i></Button>
                                <Button className="single-bid-btn text-uppercase" variant='link'>Bid</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default CarHeader;