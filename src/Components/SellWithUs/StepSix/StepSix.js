import React, { useState } from 'react';
import './StepSix.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import carImage from '../../../assets/images/car/car-1.png'

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepFive'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const StepSix = (props) => {
  const { register, handleSubmit } = useForm();

  const [storData,setstorData]=useState([getValue()])
  console.log(storData[0].file);

  const onSubmit = data => {
    const prevdata= Object.assign({}, ...storData,data)
    console.log(prevdata.name);
   
    const setLocalStor=JSON.stringify(prevdata)
    localStorage.setItem('StepSix',setLocalStor)
    props.setSteps('stepSeven')
    localStorage.removeItem("StepFour");
  };
  
    return (
        <Container>
          {/* step six Vehicle Detailed */}
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding_step6'>Vehicle Detailed</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row pt-3">
                        <div className="col-md-6">
                          <div className="car_title">
                            <h4>{storData[0]?.name}</h4>
                            <span>{storData[0]?.engine}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="car_image">
                            <img className='img-fluid' src={carImage} alt="" />
                            {
                              storData[0].file.map(a=>(console.log(a)))
                            }
                          </div>
                        </div>
                      </div>
                      <div className="engine_inform">
                        <textarea {...register("details")} placeholder='Details' cols="30" rows="5"></textarea>
                      </div>
                      <div className="dable_btn_Step6">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepFive')}>
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

export default StepSix;