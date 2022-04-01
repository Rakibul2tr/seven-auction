import React, { useState } from 'react';
import {  Form, FormControl, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../../images/site_logo.png';
import UseContext from '../../../UseHoocks/UseContext';
import Login from '../../LoginPage/Login/Login';
import './Header.css'
import Mobilmenu from './Mobilmenu';

const Header = () => {
    const {user,admin}=UseContext();
    const [modalShow, setModalShow] = React.useState(false);
    //mobile menu controler
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className='header_bg'>
        <div>
           <Row className='Nav_row'>
            <div className="col-md-7">
                <div className="logo_search">
                    <div className="logo">
                        <img className='img-fluid' src={logoImg} alt="Site Logo" />
                    </div>
                    <div className="search_fild">
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search here..."
                        className="me-2"
                        aria-label="Search"
                        />
                        <div className="serch_icon">
                        <i className="fas fa-search"></i>
                       </div>
                    </Form>
                    
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="menu_right">
                    <NavLink to='/' activeclassname='active'>Auctions</NavLink>
                    <Link to='/sell'>
                        <button>Sell with us
                        </button>
                    </Link>
                    {/* <Link to=''>
                       <button onClick={() => setModalShow(true)}>Login</button>
                    </Link> */}
                    {
                        user?.email || admin?.email?<><Link to=''><i className="far fa-bell"></i></Link>
                        <Link to={user?.email?'/account':'/dashboard'}>
                        <i className="fas fa-user-circle"></i>
                        </Link></>:<Link to=''>
                       <button onClick={() => setModalShow(true)}>Login</button>
                    </Link>
                    }
                    <NavLink to='/contact'activeclassname='menu_active'>Support</NavLink>
                    <Link to=''>
                        <select>
                            <option>En</option>
                            <option>Dn</option>
                            <option>Bn</option>
                        </select>
                    </Link>
                </div>
            </div>
           </Row>
           <Row className='mobil_device'>
               {/* mobil device navbar */}
               <i className="fa-solid fa-bars" onClick={handleShow}></i>
               
             <Mobilmenu show={show}handleClose={handleClose}/>
           </Row>
           <Row>
               
               <Login 
               show={modalShow}
               onHide={() => setModalShow(false)}
              />
              
           </Row>
        </div>
      </div>
    );
};

export default Header;