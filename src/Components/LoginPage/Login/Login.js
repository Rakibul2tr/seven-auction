import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../LoginPage.css";
import Register from "../Register/Register";

const Login = (props) => {
  const [loginChange, setloginChange] = useState("login");

  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="md"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="login_register_row">
          <button
            onClick={() => setloginChange("login")}
            className={loginChange === "login" ? "Loginactive" : null}
          >
            Login
          </button>
          <button
            onClick={() => setloginChange("register")}
            className={loginChange === "register" ? "Loginactive" : null}
          >
            Register
          </button>
        </div>
        {loginChange === "login" && (
          <>
            <div className="welcom_text p-3 ps-5">
              <h2>Welcome Back</h2>
            </div>
            <form action="" className="login_form">
              <div className="row px-5 py-2">
                <label htmlFor="email">Email Address</label>
                <div className="email_addrass">
                  <input
                    type="email"
                    placeholder="ameer@gmail.com"
                    name="email"
                    id="email"
                  />
                  <i classname="far fa-envelope"></i>
                </div>
                <p className="login_p">
                  <Link to="/">use mobile</Link>
                </p>
              </div>
              <div className="row px-5 py-2">
                <label htmlFor="password">Password</label>
                <div className="pasword">
                  <input
                    type="password"
                    placeholder="Type Password"
                    name="password"
                  />
                  <i classname="fas fa-lock"></i>
                </div>
                <p className="login_p">
                  <Link to="/">forgot your password ? </Link>
                </p>
              </div>
              <div className="row px-5 py-2 text-center">
                <button className="submit_btn">Login</button>
              </div>
            </form>
          </>
        )}
        {loginChange === "register" && <Register />}
      </Modal>
    </div>
  );
};

export default Login;
