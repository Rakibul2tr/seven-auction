import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../LoginPage.css";
import Register from "../Register/Register";



const Login = (props) => {
  const [loginChange, setloginChange] = useState("login");
  const [usemobil,setusemobil] = useState('email');
  const [opacity,setopacity] = useState('');
  
  const { register, handleSubmit, } = useForm();
  const onSubmit = data => {
    fetch(`https://seven-auction.herokuapp.com/api/user/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.jwtToken&&data.loggedUser){
      localStorage.setItem('token',data.jwtToken)

      localStorage.setItem('User',JSON.stringify(data.loggedUser))
        window.location.reload();
      }else{
        console.log(data);
      }
    })
  }



  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="md"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      className="login_modal">
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
            <form onSubmit={handleSubmit(onSubmit)} className="login_form">
              {
                usemobil==='mobil'?
                <div className={opacity==='opacityNone'?'opacityNone':'field_row'}>
                  <div className="row px-5 py-2 ">
                    <label htmlFor="email">Phone number</label>
                    <div className="email_addrass" onClick={()=>setopacity('opacityNone')}>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        {...register("emailOrPhone", { required: true })}
                      />
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p className="login_p">
                      <Link to="/" onClick={()=>setusemobil('email')}>use Email</Link>
                    </p>
                  </div>
                  
                </div>:
                <div className={opacity==='emailopacityNone'?'opacityNone':'field_row'}>
                  <div className="row px-5 py-2">
                    <label htmlFor="email">Email Address</label>
                    <div className="email_addrass" onClick={()=>setopacity('emailopacityNone')}>
                      <input
                        type="email"
                        placeholder="ameer@gmail.com"
                        {...register("emailOrPhone", { required: true })}
                        id="email"
                      />
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p className="login_p">
                      <Link to="/" onClick={()=>setusemobil('mobil')}>use mobile</Link>
                    </p>
                  </div>
                 
                </div>
              }
              <div className={opacity==='passopacityNone'?'opacityNone':'field_row'}>
                <div className="row px-5 py-2">
                  <label htmlFor="password">Password</label>
                  <div className="pasword" onClick={()=>setopacity('passopacityNone')}>
                    <input
                      type="password"
                      placeholder="Type Password"
                      {...register("password", { required: true })}
                    />
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <p className="login_p">
                    <Link to="/">forgot your password ? </Link>
                  </p>
                </div>
                {/* <p className='text-center'>{User?.message? <span className='fw-bold text-success'>{User?.message}</span>:<span className='text-danger'>{User?.issue?.password}</span>}</p> */}
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
