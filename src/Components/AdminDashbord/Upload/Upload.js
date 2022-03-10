import React from 'react';
import './Upload.css'
import { Col, Container, Row } from "react-bootstrap";
import iconImg from '../../../assets/images/icon/graterthen.png'

const Upload = () => {
    return (
        <Container style={{ background: "#F6F8FA" }}>
        <Row className="p-4">
          <div className="upload">
            <h4>upload</h4>
          </div>
          <Row className="pt-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3>what do you want to auction?</h3>
                    <div className="bick_car d-flex">
                        <div className="bick"><i class="fa-solid fa-motorcycle"></i></div>
                        <div className="car"><i class="fa-solid fa-car"></i></div>
                    </div>
                    <h3>whats the name of your bike?</h3>
                    <form>
                      <div className="input_fild">
                        <input type="text" placeholder='Enter your Bick Name'/>
                        <i class="fa-solid fa-motorcycle"></i>
                      </div>
                      <button className='next_btn'>
                        next
                        <i class="fa-solid fa-angles-right"></i>
                      </button>
                    </form>
                </div>
            </div>
            </Col>
          </Row>
        </Row>
      </Container>
    );
};

export default Upload;