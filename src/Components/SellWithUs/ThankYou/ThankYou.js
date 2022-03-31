import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ThankYou = () => {
    return (
        <Container>
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding_step3'>
                    Thank You 
                    </h3>
                    
                </div>
            </div>
            </Col>
          </Row>
      </Container>
    );
};

export default ThankYou;