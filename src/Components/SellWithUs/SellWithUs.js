import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './SellWithUs.css'

const SellWithUs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="sell_secion">
                        <div className="sell_hidding">
                            <h4>sell your car with seven auctions</h4>
                        </div>
                        <div className="sell_text">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem fuga soluta cupiditate dolore beatae, illo cum ut reprehenderit ipsum molestiae deleniti perferendis quae maiores quaerat dolorum dolores inventore officia unde?</p>
                        </div>
                        <div className="sell_btn">
                            <button>start now !</button>
                        </div>
                        <div className="teck_min">
                            <span><i class="fa-solid fa-clock"></i>takes 3 min</span>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default SellWithUs;