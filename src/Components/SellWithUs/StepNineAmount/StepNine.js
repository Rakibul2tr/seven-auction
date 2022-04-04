import React, { useState } from 'react';
import './StepNine.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepSeven'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const StepNine = (props) => {
  const { register, handleSubmit } = useForm();
  const [storData,setstorData]=useState([getValue()])
  const onSubmit = data => {
    const prevdata= Object.assign({}, ...storData,data)
    console.log(prevdata);
   
    const setLocalStor=JSON.stringify(prevdata)
    localStorage.setItem('StepNine',setLocalStor)
    props.setSteps('submit')
    localStorage.removeItem("StepSeven");
  };
 
    return (
        <Container>
         {/* step eight Traveled Kilometers */}
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding_step9'>Vehicle Amount</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="input_fild Amount_fild">
                        <input type="text"
                        {...register("minimumAmount")} 
                        placeholder='Minimum Amount $'/>
                      </div>

                      <div className="input_fild Amount_fild mt-3">
                        <input type="text"
                        {...register("expectationAmount")} 
                        placeholder='Expectation Amount $'/>
                      </div>


                      <div className="dable_btn_Step9">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepSeven')}>
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

export default StepNine;