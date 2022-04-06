import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/icon/adminLogo.png";

const Mobilmenu = (props) => {
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="offcanvas_logo">
              <img className="img-fluid" src={logoImg} alt="Site Logo" />
            </div>
          </Offcanvas.Title>
          <i className="fa-solid fa-xmark" onClick={props.handleClose}></i>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="col-12">
            <div className="offcanvs_menu">
              <Link to="/">Auction</Link>
              <Link to="/">
                <span>Sell With Us</span>
              </Link>
              <Link to="/">
                <i className="far fa-bell"></i>
              </Link>
              <Link to="/">
                <i className="fas fa-user-circle"></i>
              </Link>
              <Link to="/">Support</Link>
              <Link to="/">En</Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Mobilmenu;
