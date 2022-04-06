import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Notification from './Notification/Notification';

const Notifications = () => {
    return (
        <>
        <Container style={{ background: "#F6F8FA" }}>
            <Row className="py-5">
                <div className="col-md-12" style={{ minHeight: "500px" }}>
                <Notification/>
                </div>
            </Row>
        </Container>
        </>
    );
};

export default Notifications;