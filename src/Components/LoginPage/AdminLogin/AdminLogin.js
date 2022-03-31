import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import loginlogo from '../../../assets/images/icon/adminLogo.png'
import "./AdminLogin.css"

const AdminLogin = () => {
    const { register, handleSubmit, } = useForm();
  const onSubmit = data => {
    console.log(data);
    // fetch(`https://seven-auction.herokuapp.com/api/user/login`,{
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify(data)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data);
    // //   if(data.jwtToken&&data.loggedUser){
    // //   localStorage.setItem('token',data.jwtToken)

    // //   localStorage.setItem('User',JSON.stringify(data.loggedUser))
        
    // //   }if(!data.loggedUser.emailVerified){
    // //     setShow(true)
        
    // //   }
    // //   if(data.loggedUser.emailVerified){
        
    // //     window.location.reload();
    // //   }
      
    // //   else{
    // //     console.log(data);
    // //   }
      
    // })
  }
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row py-2">
                                    <label htmlFor="email">Email</label>
                                    <div className="email_addrass">
                                    <input
                                        type="email"
                                        placeholder="ameer@gmail.com"
                                        {...register("email", { required: true })}
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
                                        {...register("password", { required: true })}
                                        
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