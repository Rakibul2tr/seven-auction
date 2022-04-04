import React, { useState } from 'react';
import './Upload.css'
import { Col, Container, Row } from "react-bootstrap";
import StepOne from './StepOneType/StepOne';
import StepTow from './StepTowImage/StepTow';
import StepTree from './StepTreeLocation/StepTree';
import StepFour from './StepFourColor/StepFour';
import StepFive from './StepFiveEngine/StepFive';
import StepSix from './StepSixDetails/StepSix';
import StepSeven from './StepSevenDescription/StepSeven';
import StepEight from './StepEightKelomiter/StepEight';
import StepNine from './StepNineAmount/StepNine';
import Submit from './SubmitStepRhd/Submit';
import Review from './Review/Review';

const Upload = () => {
  const [Steps,setSteps]=useState('stepOne')
    return (
        <Container style={{ background: "#F6F8FA" }}>
        <Row className="p-4">
          <div className="upload">
            <h4>upload</h4>
          </div>
          {
                   Steps==='stepOne'&& <StepOne setSteps={setSteps}/>
                }
                {
                   Steps==='stepTow'&& <StepTow setSteps={setSteps}/>
                }
                {
                   Steps==='stepTree'&& <StepTree setSteps={setSteps}/>
                }
                {
                   Steps==='stepFour'&& <StepFour setSteps={setSteps}/>
                }
                {
                   Steps==='stepFive'&& <StepFive setSteps={setSteps}/>
                }
                {
                   Steps==='stepSix'&& <StepSix setSteps={setSteps}/>
                }
                {
                   Steps==='stepSeven'&& <StepSeven setSteps={setSteps}/>
                }
                {
                   Steps==='stepEight'&& <StepEight setSteps={setSteps}/>
                }
                {
                   Steps==='StepNine'&& <StepNine setSteps={setSteps}/>
                }
                {
                   Steps==='submit'&& <Submit setSteps={setSteps}/>
                }
               {
                   Steps==='review'&& <Review setSteps={setSteps}/>
               }
          
        </Row>
      </Container>
    );
};

export default Upload;