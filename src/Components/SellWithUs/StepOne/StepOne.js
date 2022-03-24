import React, { useState } from 'react';
import './StepOne.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const StepOne = (props) => {
  const [auctionType,setAuctionType]=useState('bick')

  const [stepOne,setStepOne]=useState([])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.vehicleType=auctionType
    setStepOne(data)
    const stepOnedata=JSON.stringify(data)
    localStorage.setItem('StepOne',stepOnedata)

    props.setSteps('stepTow')
  };
 
    return (
        <Container>
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding'>What do you want to Auction?</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="bick_car d-flex">
                        <div className={auctionType==='bick'?'bicks bgChang':'bicks'} onClick={()=>setAuctionType('bick')}><i className="fa-solid fa-motorcycle"></i></div>
                        <div className={auctionType==='car'?'cars bgChang':'cars'} onClick={()=>setAuctionType('car')}><i className="fa-solid fa-car"></i></div>
                    </div>
                    <h3>whats the name of your bike?</h3>
                    
                      <div className="input_fild">
                        <input type="text"
                        {...register("name")} 
                        placeholder='Enter your Bick Name'/>
                        <i className="fa-solid fa-motorcycle"></i>
                      </div>
                      <button className='next_btn'>
                        next
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
                    </form>
                </div>
            </div>
            </Col>
          </Row>
      </Container>
    );
};

export default StepOne;