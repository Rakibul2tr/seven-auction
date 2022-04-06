import React from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginlogo from "../../../assets/images/icon/adminLogo.png";
import "./AdminRegister.css";

const AdminRegister = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`https://seven-auction.herokuapp.com/api/admin/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.adminId) {
          alert("please login now");
        }
      });
  };
  return (
    <div className="admin_section">
      <Container>
        <Row>
          <div className="admin_register_border">
            <div className="login_aria">
              <div className="loginLogo w-25">
                <img src={loginlogo} alt="" className="img-fluid" />
              </div>
              <div className="loginForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row py-2">
                    <label htmlFor="first_name">First Name</label>
                    <div className="first_name">
                      <input
                        type="text"
                        placeholder="ameer"
                        {...register("firstName", { required: true })}
                      />
                      <i className="fas fa-user-circle"></i>
                    </div>
                  </div>
                  <div className="row py-2">
                    <label htmlFor="last_name">Last Name</label>
                    <div className="last_name">
                      <input
                        type="text"
                        placeholder="hosen"
                        {...register("lastName", { required: true })}
                      />
                      <i className="fas fa-user-circle"></i>
                    </div>
                  </div>
                  <div className="row py-2">
                    <label htmlFor="email">Email</label>
                    <div className="email_addrass">
                      <input
                        type="email"
                        placeholder="ameer@gmail.com"
                        {...register("email", { required: true })}
                        id="email"
                      />
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </div>
                  <div className="row py-2">
                    <label htmlFor="password">Password</label>
                    <div className="pasword">
                      <input
                        type="password"
                        placeholder="Type admin Password"
                        {...register("password", { required: true })}
                      />
                      <i className="fa-solid fa-lock"></i>
                    </div>
                  </div>
                  <div className="row py-2 mt-5">
                    <div className="login_button">
                      <button>Register</button>
                    </div>
                  </div>
                  <Link to="/admin" className="login_link_text">
                    Please Login Now
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AdminRegister;
