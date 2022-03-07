import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <div className="welcom_text p-3 ps-5">
             <h2>Create an account</h2>
            </div>
            <form action=""className='register_form'>
                {/* first name field */}
            <div className="row px-5 py-2">
                <label htmlFor="first_name">First Name</label>
                <div className="first_name">
                    <input type="text" placeholder='ameer' name="first"  />
                    <i className="fas fa-user-circle"></i>
                </div>
            </div>

                {/* last name field */}
            <div className="row px-5 py-2">
                <label htmlFor="last_name">Last Name</label>
                <div className="last_name">
                    <input type="text" placeholder='hosen' name="last"  />
                    <i className="fas fa-user-circle"></i>
                </div>
            </div>

                {/* phone number field */}
            <div className="row px-5 py-2">
                <label htmlFor="phone">Phone Number</label>
                <div className="phone">
                    <input type="tel" placeholder='Phone Number' name="phone"  />
                    <i class="fas fa-phone-alt"></i>
                </div>
            </div>

                {/* email address field */}
            <div className="row px-5 py-2">
                <label htmlFor="email">Email Address</label>
                <div className="email_addrass">
                    <input type="email" placeholder='ameer@gmail.com' name="email" id="email" />
                    <i class="far fa-envelope"></i>
                </div>
            </div>

            {/* password field */}
             <div className="row px-5 py-2">
                <label htmlFor="password">Password</label>
                <div className="pasword">
                    <input type="password" placeholder='Type Password' name="password"  />
                    <i class="fas fa-lock"></i>
                </div>
            </div>

            <div className="row px-5 py-2 mt-3 text-center">
                <button className='submit_btn'>Register</button>
            </div>
            <p className='register_p'>by clickin on the registation button you agree on the <Link to='/'>tearms and conditions </Link></p>
         </form> 
        </div>
    );
};

export default Register;