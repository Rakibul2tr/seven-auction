import React from "react";
import { Container, Row } from "react-bootstrap";
import "./AccountUpdate.css";

const AccountUpdate = () => {
  
  // const {getAccountData}=UseContext();
  fetch(`https://seven-auction.herokuapp.com/api/user/account-data`)
    .then(res=>res.json())
    .then(data=>console.log(data))


  return (
    <Container>
      <Row className="pb-5">
        <div className="my_account">
          <h4>my details</h4>
        </div>
        <form action="" className="account_form">
          <div className="row px-5 py-2">
            <div className="col-md-6">
              <label htmlFor="firs_name">Firs Name</label>
              <div className="first_name">
                <input type="text" placeholder="First name" name="firs" />
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <div className="last_name">
                <input type="text" placeholder="Last name" name="last" />
                <i className="far fa-user-circle"></i>
              </div>
            </div>
          </div>

          <div className="row px-5 py-2">
            <div className="col-md-6">
              <label htmlFor="phone">Phone</label>
              <div className="phone">
                <input type="tel" placeholder="phone number" name="phone" />
                <i className="fas fa-phone"></i>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="email">Email Address</label>
              <div className="email_addrass">
                <input
                  type="email"
                  placeholder="ameer@gmail.com"
                  name="email"
                  id="email"
                />
                <i className="far fa-envelope"></i>
              </div>
            </div>
          </div>

          {/* password field  */}

          <div className="password_change">
            <h4>password change</h4>
          </div>
          <div className="row px-5 py-2">
            <label htmlFor="old_password">current password</label>
            <div className="current_password">
              <input
                type="password"
                placeholder="current password"
                name="old_password"
              />
              <i className="fas fa-lock"></i>
            </div>
          </div>

          <div className="row px-5 py-2">
            <label htmlFor="new_password">new password</label>
            <div className="current_password">
              <input
                type="password"
                placeholder="New password"
                name="new_password"
              />
              <i className="fas fa-lock"></i>
            </div>
          </div>
          <div className="update_btn">
            <button type="submit">update</button>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default AccountUpdate;
