import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Terms.css';

const Terms = () => {
    return (
        <div>
            <Container>
                <Row className='p-5'>
                    <div className="Terms_hedding py-3">
                        <h4>Terms and Condition</h4>
                    </div>
                    <div className="terms_text px-5 py-3">
                        <h6>User Agreement</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!</p>
                        <h6>Billing Agreement</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Terms;