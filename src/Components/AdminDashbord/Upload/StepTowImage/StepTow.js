import React, { useEffect, useState } from 'react';
import './StepTow.css'
import { Col, Container, Row } from "react-bootstrap";

const getValue=()=>{
  const localValue = JSON.parse(localStorage.getItem('StepOne'));
  if(localValue !== null){
   return localValue
  } else {
  return []
  }
}

const StepTow = (props) => {

  const [StepTow,setStepTow]=useState([getValue()])

  
  const [file, setFile] = useState([]);
  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
  }
 console.log(file);

  function upload(e) {
    e.preventDefault();
  const prevdata= Object.assign({},...StepTow,{file})
  console.log(prevdata);
    const stepTowdata=JSON.stringify(prevdata)
    localStorage.setItem('StepTow',stepTowdata)

    props.setSteps('stepTree')
    
  }

  function deleteFile(e) {
    
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    
  }
    return (
        <Container>
          <Row className="py-5">
           <Col md={12}>
            <div className="upload_item">
                <div className="border_1">
                    <h3 className='auction_hiddingStep2'>Vehicle Image Upload</h3>
                    <form >
                      <div className="row cars_aria">
                      <div className="form-group preview row">
                        {file.length > 0 &&
                        file.map((item, index) => {
                            return (
                            <div key={item} className='uploadImg_div col-md-3'>
                                <img src={item} alt="" />
                                <button className='deletBtn' type="button" onClick={() => deleteFile(index)}>
                                x
                                </button>
                            </div>
                            );
                        })}
                    </div>
                        <div className="form-group image_input">
                            <input
                            type="file"
                            accept="image/*"
                            multiple 
                            disabled={file.length === 12}
                            className="form-control"
                            onChange={uploadSingleFile}
                            />
                        </div>
                       
                      </div>
                      

                      <div className="dable_btn">
                      <button className='prev_btn'onClick={()=>props.setSteps('stepOne')}>
                      <i className="fa-solid fa-angles-left"></i>
                      Previous
                      
                      </button>
                      <button className='next_btn'onClick={upload}>
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