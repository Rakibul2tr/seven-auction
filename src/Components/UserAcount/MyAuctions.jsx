import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MyAuction from './MyAuction/MyAuction';

const MyAuctions = () => {
    return (
        <>
        <Container style={{ background: "#F6F8FA" }}>
            <Row className="py-5">
                <div className="col-md-12" style={{ minHeight: "500px" }}>
                <MyAuction/>
                </div>
            </Row>
        </Container>
        </>
    );
};

export default MyAuctions;