import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerLogo from "../../../images/site_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Container>
      <Row className="footer_row">
        <div className="col-md-3">
          <div className="footer_text">
            <div className="footer_logo">
              <img className="img-fluid" src={footerLogo} alt="" />
            </div>
            <p className="text-center">
              <Link to="/">info@severauction.com</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer_text">
            <div className="footer_heading">
              <h2>auction</h2>
            </div>
            <div className="footer_menu">
              <li>
                <Link to="/">live auction</Link>
              </li>
              <li>
                <Link to="/">solid</Link>
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
                <Link to="/">sell with us</Link>
              </li>
              <li>
                <Link to="/">about us</Link>
              </li>
              <li>
                <Link to="/">selling guide</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
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
                <Link to="/">privacy and policy</Link>
              </li>
              <li>
                <Link to="/">terms and condition</Link>
              </li>
              <li>
                <Link to="/">contact us</Link>
              </li>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
