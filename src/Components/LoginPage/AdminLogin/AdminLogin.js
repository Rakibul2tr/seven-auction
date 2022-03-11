import React from 'react';
import { Container, Row } from 'react-bootstrap';
import loginlogo from '../../../assets/images/icon/adminLogo.png'
import "./AdminLogin.css"

const AdminLogin = () => {
    return (
        <div className='admin_section'>
            <Container>
                <Row>
                    <div className="admin_login_border">
                        <div className="login_aria">
                            <div className="loginLogo w-25">
                                <img src={loginlogo} alt="" className="img-fluid" />
                            </div>
                            <div className="loginForm">
                                <form action="">
                                <div className="row py-2">
                                    <label htmlFor="email">Email</label>
                                    <div className="email_addrass">
                                    <input
                                        type="email"
                                        placeholder="ameer@gmail.com"
                                        name="email"
                                        id="email"
                                        
                                    />
                                    <i class="fa-solid fa-envelope"></i>
                                    </div>
                                 </div>
                                 <div className="row py-2">
                                    <label htmlFor="password">Password</label>
                                    <div className="pasword">
                                    <input
                                        type="password"
                                        placeholder="Type admin Password"
                                        name="password"
                                        
                                    />
                                    <i class="fa-solid fa-lock"></i>
                                    </div>
                                </div>
                                 <div className="row py-2 mt-5">
                                    <div className="login_button">
                                        <button>login</button>
                                    </div>
                                </div>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AdminLogin;