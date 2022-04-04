import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review/Review';
import './SellWithUs.css'
import StepEight from './StepEightKelomiter/StepEight';
import StepFive from './StepFiveEngine/StepFive';
import StepFour from './StepFourColor/StepFour';
import StepNine from './StepNineAmount/StepNine';
import StepOne from './StepOneType/StepOne';
import StepSeven from './StepSevenDescription/StepSeven';
import StepSix from './StepSixDetails/StepSix';
import StepTow from './StepTowImage/StepTow';
import StepTree from './StepTreeLocation/StepTree';
import Submit from './SubmitStepRhd/Submit';

const SellWithUs = () => {
    const [Steps,setSteps]=useState('start')
    
    return (
        <div>
            <Container>
                {
                 Steps==='start'&&
                 <Row>
                    <div className="sell_secion">
                        <div className="sell_hidding">
                            <h4>sell your car with seven auctions</h4>
                        </div>
                        <div className="sell_text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem fuga soluta cupiditate dolore beatae, illo cum ut reprehenderit ipsum molestiae deleniti perferendis quae maiores quaerat dolorum dolores inventore officia unde?</p>
                        </div>
                        <div className="sell_btn">
                            <button onClick={()=>setSteps('stepOne')}>start now !</button>
                        </div>
                        <div className="teck_min">
                            <span><i className="fa-solid fa-clock"></i>takes 3 min</span>
                        </div>
                    </div>
                </Row>
                }
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
                
            </Container>
        </div>
    );
};

export default SellWithUs;