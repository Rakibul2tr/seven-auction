import React, { useState } from 'react';
import './Submit.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepEight'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const Submit = (props) => {

  const [rhdBtn,setRhdBtn]=useState('RHD')
  console.log(rhdBtn);
  const [menual,setMenual]=useState('Manual')
  console.log(menual);
  const { register, handleSubmit } = useForm();

  const [storData,setstorData]=useState([getValue()])
  const onSubmit = data => {
    data.traffic=rhdBtn
    data.mode=menual
    const prevdata= Object.assign({}, ...storData,data)
    console.log(prevdata);

    // props.setSteps('')
    localStorage.removeItem("StepSeven");
  };
 
    return (
        <Container>
         {/* step Submit RHD/LHD & Manual/ Automatic*/}
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding_step_submit'>RHD/LHD & Manual/ Automatic</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      
                      <div className="row pt-5">
                        <div className='d-flex justify-content-around w-75 mx-auto'>
                          <span className='sirial_number'>1</span>

                        <button className={rhdBtn==='RHD'?'rhd_btn btnActive':'rhd_btn'}onClick={()=>setRhdBtn('RHD')}>RHD</button>

                        <button className={rhdBtn==='LHD'?'lhd_btn btnActive':'lhd_btn'}onClick={()=>setRhdBtn('LHD')}>LHD</button>
                        </div>
                        

                        <p className='d-flex justify-content-around w-75 mx-auto pt-3'>
                        <span className='sirial_number'>2</span>
                        <button className={menual==='Manual'?'rhd_btn btnActive':'rhd_btn'} onClick={()=>setMenual('Manual')}>Manual</button>
                        <button className={menual==='Automatic'?'lhd_btn btnActive':'lhd_btn'} onClick={()=>setMenual('Automatic')}>Automatic</button></p>


                      </div>

                      <div className="dable_btn_Step_submit">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepEight')}>
                      <i className="fa-solid fa-angles-left"></i>
                      Previous
                      </button>
                      <button className='next_btn'>
                        Submit
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

export default Submit;