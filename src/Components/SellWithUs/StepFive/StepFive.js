import React, { useState } from 'react';
import './StepFive.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepFour'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const StepFive = (props) => {
  const { register, handleSubmit } = useForm();

  const [storData,setstorData]=useState([getValue()])
  const onSubmit = data => {
    const prevdata= Object.assign({}, ...storData,data)
    console.log(prevdata);
   
    const setLocalStor=JSON.stringify(prevdata)
    localStorage.setItem('StepFive',setLocalStor)
    

    props.setSteps('stepSix')
    localStorage.removeItem("StepTree");
  };
  
    return (
        <Container>
          {/* step five Vehicle Engine */}
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding_step3'>Vehicle Engine</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                     
                      <div className="engine_inform">
                        <textarea {...register("engine")} placeholder='Engine' cols="30" rows="5"></textarea>
                      </div>
                      <div className="dable_btn_Step5">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepFour')}>
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

export default StepFive;