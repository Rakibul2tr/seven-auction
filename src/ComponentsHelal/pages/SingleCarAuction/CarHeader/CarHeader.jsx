import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Style.css";

const CarHeader = () => {
    return (
        <>
            <div className="car-header">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <div className="car-header-left">
                                <div className="car-header-info-boxes d-flex">
                                    <div className="header-info-box">
                                        <h5>20,000 S.R</h5>
                                        <span className='text-uppercase text-muted'>Current Bid</span>
                                    </div>
                                    <div className="header-info-box">
                                        <h5 className='text-uppercase'>7 Days</h5>
                                        <span className='text-muted'>02/02/2022 10:05: PM</span>
                                    </div>
                                    <div className="header-info-box">
                                        <h5>225</h5>
                                        <span className='text-uppercase text-muted'>Bids</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="car-header-right text-md-end">
                                <Button className="single-car-markshare me-4" variant='link'><i class="fa-regular fa-bookmark"></i></Button>
                                <Button className="single-car-markshare me-4" variant='link'><i class="fa-solid fa-share-nodes"></i></Button>
                                <Button className="single-bid-btn text-uppercase" variant='link'>Bid</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CarHeader;