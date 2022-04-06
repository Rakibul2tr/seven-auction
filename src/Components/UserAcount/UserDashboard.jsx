import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../ShirePage/Footer/Footer';
import Header from '../ShirePage/Header/Header';
import AcountMenu from './AcountMenu/AcountMenu';

const UserDashboard = () => {
    return (
        <div>
            <Header/>
            <Container style={{ background: "#F6F8FA",minHeight:'1000px'}}>
                <div className="dashboard_main_aria">
                    <Row className="py-5">
                        <div className="col-md-3">
                        <AcountMenu/>
                        </div>
                        <div className="col-md-9 " style={{ minHeight: "500px",overflow:'scroll',overflowX:'hidden' }}>
                        <Outlet />
                        </div>
                    </Row>
                </div>
             </Container>
            <Footer/>
        </div>
    );
};

export default UserDashboard;