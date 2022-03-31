import React, { useState } from 'react';
import './Upload.css'
import { Col, Container, Row } from "react-bootstrap";
import iconImg from '../../../assets/images/icon/graterthen.png'
import StepOne from './StepOne/StepOne';
import StepTow from '../../SellWithUs/StepTow/StepTow';
import StepTree from '../../SellWithUs/StepTree/StepTree';
import StepFour from '../../SellWithUs/StepFour/StepFour';
import StepFive from '../../SellWithUs/StepFive/StepFive';
import StepSix from '../../SellWithUs/StepSix/StepSix';
import StepSeven from '../../SellWithUs/StepSeven/StepSeven';
import StepEight from '../../SellWithUs/StepEight/StepEight';
import StepNine from '../../SellWithUs/StepNine/StepNine';
import Submit from '../../SellWithUs/SubmitStep/Submit';

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
          
        </Row>
      </Container>
    );
};

export default Upload;