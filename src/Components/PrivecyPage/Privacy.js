import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Privacy.css';

const Privacy = () => {
    return (
        <div>
            <Container>
                <Row className='p-5'>
                    <div className="privacy_hedding py-3">
                        <h4>privacy and policy</h4>
                    </div>
                    <div className="privacy_text px-5 py-3">
                        <h6>User Policy</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!</p>
                        <h6>Billing and Pyments</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci, repudiandae facilis ab hic sit ullam itaque, praesentium tempore a fugiat sunt doloribus similique ex quia sint! Atque, corrupti perferendis!Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Privacy;