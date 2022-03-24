import React, { useEffect, useState } from 'react';
import './StepTow.css'
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import carImg from '../../../assets/images/car/car-1.png'
import { RMIUploader } from 'react-multiple-image-uploader';

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepOne'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const StepTow = (props) => {
  
  const { register, handleSubmit } = useForm();

  const [visible, setVisible] = useState(false);

  const [dataSources, setDatasources] = useState([]);

  const prevdata= Object.assign({},dataSources)

  const prevdat= Object.assign({},prevdata)

  console.log(prevdat[0]);

  const [StepTow,setStepTow]=useState([getValue()])

  const onSubmit = data => {
   const prevdata= Object.assign({}, ...StepTow,data)
   console.log(prevdata);
    const stepTowdata=JSON.stringify(prevdata)
    localStorage.setItem('StepTow',stepTowdata)

    props.setSteps('stepTree')
  };
  
  
  const handleSetVisible = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  const onUpload = (data) => {
    console.log("Upload files", data);
   
    setDatasources((preVal) => {
      return [...preVal, ...data];
    });
  };
  const onSelect = (data) => {
    console.log("Select files", data);
  };
  const onRemove = (data) => {
    console.log("Remove image id", data);
  };
  // console.log(dataSources);
    return (
        <Container>
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hiddingStep2'>Vehicle Image Upload</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row cars_aria">
                        {/* <button onClick={handleSetVisible}>Show Me</button> */}
                        <RMIUploader
                          isOpen={visible}
                          hideModal={hideModal}
                          onSelect={onSelect}
                          onUpload={onUpload}
                          onRemove={onRemove}
                          dataSources={dataSources}
                        />
                        
                      </div>
                      

                      <div className="dable_btn">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepOne')}>
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

export default StepTow;