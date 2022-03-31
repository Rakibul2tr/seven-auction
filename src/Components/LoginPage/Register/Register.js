import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const [opacity,setopacity] = useState('');
    const [success,setsuccess] = useState('');
    const [error,seterror] = useState({});

    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const onSubmit = data => {
        console.log(data);
        fetch(`https://seven-auction.herokuapp.com/api/user/register`,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
           if(data.message){
            setsuccess(data.message)
            seterror('')
            alert('Please Login Now')
           }
           else if(data.issue){
            seterror(data.issue)
            setsuccess('')
           }
        })
      }
      console.log(error);
    return (
        <div>
           <div className="welcom_text p-3 ps-5">
             <h2>Create an account</h2>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)} className='register_form'>
                {/* first name field */}
            <div className={opacity==='FistopacityNone'?'opacityNone':'field_row'}>
                <div className="row px-5 py-2" onClick={()=>setopacity('FistopacityNone')}>
                    <label htmlFor="first_name">First Name</label>
                    <div className="first_name">
                        <input type="text"
                         placeholder='ameer' 
                         {...register("firstName", { required: true })} 
                         />
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
                { error.first && <p className='text-center text-danger fs-6'>{error.first}</p>}
            </div>

                {/* last name field */}
            <div className={opacity==='lastOpaciNone'?'opacityNone':'field_row'}>
                <div className="row px-5 py-2" onClick={()=>setopacity('lastOpaciNone')}>
                    <label htmlFor="last_name">Last Name</label>
                    <div className="last_name">
                        <input type="text" 
                        placeholder='hosen'
                        {...register("lastName", { required: true })}
                          />
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
                { error.last && <p className='text-center text-danger fs-6'>{error.last}</p>}
            </div>

                {/* phone number field */}
            <div className={opacity==='PhoneopacityNone'?'opacityNone':'field_row'}>
                <div className="row px-5 py-2" onClick={()=>setopacity('PhoneopacityNone')}>
                    <label htmlFor="phone">Phone Number</label>
                    <div className="phone">
                        <input type="tel" 
                        placeholder='Phone Number'
                        {...register("phone", { required: true,pattern:/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i })}  
                         />
                        <i className="fas fa-phone-alt"></i>
                    </div>
                </div>
                { error.phone && <p className='text-center text-danger fs-6'>{error.phone}</p>}
            </div>

                {/* email address field */}
            <div className={opacity==='emailopacityNone'?'opacityNone':'field_row'}>
                <div className="row px-5 py-2" onClick={()=>setopacity('emailopacityNone')}>
                    <label htmlFor="email">Email Address</label>
                    <div className="email_addrass">
                        <input type="email"
                         placeholder='ameer@gmail.com'
                         {...register("email", { required: true,pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}  
                          />
                        <i className="far fa-envelope"></i>
                    </div>
                </div>
                {error.email && <p className='text-center text-danger fs-6'>{error.email}Please check the Email</p>}
            </div>
            {/* password field */}
             <div className={opacity==='passopacityNone'?'opacityNone':'field_row'}>
                <div className="row px-5 py-2" onClick={()=>setopacity('passopacityNone')}>
                    <label htmlFor="password">Password</label>
                    <div className="pasword">
                        <input type="password"
                         placeholder='Type Password' 
                         {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ }) } 
                         />
                        <i className="fas fa-lock"></i>
                    </div>
                    {error.password && <p className='text-center text-danger '>{error.password}Please give at list 8 character uppercase symbole nember</p>}
                </div>
             </div>
                <p className='text-center'>{success?<span className='fw-bold text-success'>{success}</span>:<span className='text-danger'>{error.password}</span>} </p>
            <div className="row px-5 py-2 mt-3 text-center">
                <button className='submit_btn'>Register</button>
            </div>
            <p className='register_p'>by clickin on the registation button you agree on the <Link to='/'>tearms and conditions </Link></p>
         </form> 
        </div>
    );
};

export default Register;