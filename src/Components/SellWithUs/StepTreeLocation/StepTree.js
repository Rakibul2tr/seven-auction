import React, { useState } from 'react';
import './StepTree.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepTow'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const StepTree = (props) => {
  const { register, handleSubmit } = useForm();

    const [storData,setstorData]=useState([getValue()])
  const onSubmit = data => {
    const prevdata= Object.assign({}, ...storData,data)
   
    const setLocalStor=JSON.stringify(prevdata)
    localStorage.setItem('StepTree',setLocalStor)

    props.setSteps('stepFour')
    localStorage.removeItem("StepOne");
  };
 
    return (
        <Container>
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding_step3'>Location</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="input_fild location_fild">
                        <input type="text"
                        {...register("location")} 
                        placeholder='Select your location name'/>
                        <i className="fa-solid fa-location-dot"></i>
                      </div>


                      <div className="dable_btn_Step3">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepTow')}>
                      <i className="fa-solid fa-angles-left"></i>
                      Previous
                      </button>
                      <button className='next_btn'>
                        next
                        <i className="fa-solid fa-angles-right"></i>
                      </button>
                      </div>
                    </form>
                </div>
            </div>
            </Col>
          </Row>
      </Container>
    );
};

export default StepTree;