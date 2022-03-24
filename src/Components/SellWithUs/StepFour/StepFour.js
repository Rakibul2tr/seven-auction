import React, { useState } from 'react';
import './StepFour.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { ColorPicker, useColor } from 'react-color-palette';
import ReactColorPicker from '@super-effective/react-color-picker';

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
    data.color=color
    const prevdata= Object.assign({}, ...storData,data)
    
    
    console.log(prevdata);
   
    const setLocalStor=JSON.stringify(prevdata)
    localStorage.setItem('StepFour',setLocalStor)

    props.setSteps('stepFive')
    localStorage.removeItem("StepTow");
  };
  const onColorChange = (updatedColor) => {
    setColor(updatedColor);
   
  };
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
                     <ReactColorPicker color={color} onChange={onColorChange} />
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