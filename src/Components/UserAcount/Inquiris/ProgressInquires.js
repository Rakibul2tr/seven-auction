import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ProgressInquires = (props) => {
    return (
        <Container>
          <Row className='p-4'>
            {
                props.Tickets.map(item=>(<Col md={6} key={item.ticket}>
                    <div className="Ticket_item">
                        <div className="image_div">
                            <img className='img-fluid' src={item.img} alt="" />
                        </div>
                        <div className="tocken_no">
                        <h6>Tocken No: <span>{item.ticket}</span></h6>
                        </div>
                        <div className="text_div">
                            <div className="massege_div">
                                <h6>Massege</h6>
                                <p>{item.desc}</p>
                            </div>
                            <div className="status_div">
                                <span>Status</span>
                                <button className={item.status==='In Progress'?'wornigColor':'redColor'&& item.status==='closed'?'greenLight':'redColor'}
                                >{item.status}</button>
                            </div>
                        </div>
                    </div>
                </Col>))
            }
            
        </Row>
    </Container>
    );
};

export default ProgressInquires;