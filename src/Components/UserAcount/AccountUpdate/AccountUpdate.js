import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import UseHoocks from "../../../UseHoocks/UseHoocks";
import "./AccountUpdate.css";

const AccountUpdate = () => {
  const {bearerToken}=UseHoocks();
  const [userData,setUserData]=useState({})
  const [error,setError]=useState()

  useEffect(()=>{
    fetch(`https://seven-auction.herokuapp.com/api/user/account-data`,{
      method:'GET',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:bearerToken,
      },
    })
    .then(res=>res.json())
    .then(data=>{
      setUserData(data)
    })
  },[window.location.reload])
  
    
    const { register, handleSubmit, } = useForm();
  const onSubmit = data => {
    fetch(`https://seven-auction.herokuapp.com/api/user/account-update`,{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        authorization:bearerToken,
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      setError(data)
    })

  }

  return (
    <Container>
      <Row className="pb-5">
        <div className="my_account">
          <h4>my details</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="account_form">
          <div className="row px-5 py-2">
            <div className="col-md-6">
              <label htmlFor="firs_name">Firs Name</label>
              <div className="first_name">
                <input type="text" placeholder="First name" 
                {...register("firstName", { required: true })}
                defaultValue={userData?.accountData?.firstName}
                />
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <div className="last_name">
                <input type="text" placeholder="Last name" 
                {...register("lastName", { required: true })}
                defaultValue={userData?.accountData?.lastName}
                />
                <i className="far fa-user-circle"></i>
              </div>
            </div>
          </div>

          <div className="row px-5 py-2">
            <div className="col-md-6">
              <label htmlFor="phone">Phone</label>
              <div className="phone">
                <input type="tel" placeholder="phone number"
                {...register("phone", { required: true })}
                defaultValue={userData?.accountData?.phone}
                />
                <i className="fas fa-phone"></i>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="email">Email Address</label>
              <div className="email_addrass">
                <input
                  type="email"
                  placeholder="ameer@gmail.com"
                  {...register("email", { required: true })}
                  defaultValue={userData?.accountData?.email}
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
                {...register("currentPassword", { required: true })}
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
                {...register("newPassword", { required: true })}
              />
              <i className="fas fa-lock"></i>
            </div>
          </div>
          {
            error&&<p className="text-center text-success">{error?.message}</p>
          }
          <div className="update_btn">
            <button type="submit">update</button>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default AccountUpdate;
