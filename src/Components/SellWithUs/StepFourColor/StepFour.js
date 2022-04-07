import React, { useState } from 'react';
import './StepFour.css'
import { Col, Container, Row } from "react-bootstrap";
import { GetColorName } from 'hex-color-to-color-name';
import { useForm } from 'react-hook-form';

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepTree'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const StepFour = (props) => {
  const [color, setColor] = useState('#3cd6bf');
  const { register, handleSubmit } = useForm();
  
  const [storData,setstorData]=useState([getValue()])
  const onSubmit = data => {
    data.color=colorName
    const prevdata= Object.assign({}, ...storData,data)
   
    const setLocalStor=JSON.stringify(prevdata)
    localStorage.setItem('StepFour',setLocalStor)

    props.setSteps('stepFive')
    localStorage.removeItem("StepTow");
  };
  const onChangeColor=(e)=>{
    setColor(e.target.value)
  }
  const colorName = GetColorName(color)
    return (
        <Container>
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hidding_step3'>Vehicle Color</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="color_picker">
                     <span className='fw-bold'>Color Select</span>
                     </div>
                      <div className="color_fild d-flex justify-content-center">
                        <input type="color" {...register("color")}  onChange={onChangeColor} />
                        <div className="color_div"><span>{colorName}</span></div>
                      </div>
                      <div className="input_fild location_fild">
                        <input type="text"
                        {...register("nextBidDistance")} 
                        placeholder='Next Bid Distance'/>
                      </div>
                      <div className="dable_btn_Step3">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepTree')}>
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

export default StepFour;