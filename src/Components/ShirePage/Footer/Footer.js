import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerLogo from "../../../images/site_logo.png";
import UseContext from "../../../UseHoocks/UseContext";
import "./Footer.css";

const Footer = () => {

  const {user,setUser,logOutHendl,admin}=UseContext();
  
  return (
    <div className="footer_bg">
    <Container>
      <Row className="footer_row">
        <div className="col-md-3">
          <div className="footer_text">
            <div className="footer_logo">
              <img className="img-fluid" src={footerLogo} alt="" />
            </div>
            <p className="text-center">
              <Link to="/" className="email_info">info@sevenauction.com</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer_text">
            <div className="footer_heading">
              <h2>auctions</h2>
            </div>
            <div className="footer_menu">
              <li>
                <Link to="/">live auctions</Link>
              </li>
              <li>
                <Link to="/">sold</Link>
              </li>
              <li>
                <Link to="" onClick={logOutHendl}>LogOut</Link>
              </li>
              {
                admin&&<li>
                <Link to="/dashboard">Admin Dashboard</Link>
              </li>
              }
              
              <li>
                <Link to="/admin">Admin login</Link>
              </li>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer_text">
            <div className="footer_heading">
              <h2>selling</h2>
            </div>
            <div className="footer_menu">
              <li>
                <Link to="/sell">sell with us</Link>
              </li>
              <li>
                <Link to="/about">about us</Link>
              </li>
              <li>
                <Link to="/">selling guide</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer_text">
            <div className="footer_heading">
              <h2>company</h2>
            </div>
            <div className="footer_menu">
              <li>
                <Link to="/privacy">privacy and policy</Link>
              </li>
              <li>
                <Link to="/terms">terms and condition</Link>
              </li>
              <li>
                <Link to="/contact">contact us</Link>
              </li>
            </div>
          </div>
        </div>
      </Row>
    </Container>
    <div className="footer_bottom">
      <Container>
        <Row>
          <Col md={6}>
            <p>all rights reserved, 2021</p>
          </Col>
          <Col md={6}>
            <div className="social_icon">
            <Link to='/'><i className="fa-brands fa-twitter"></i></Link>
            <Link to='/'><i className="fa-brands fa-instagram"></i></Link>
            <Link to='/'><i className="fa-brands fa-facebook-f"></i></Link>
            <Link to='/'><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link to='/'><i className="fa-brands fa-youtube"></i></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Footer;
