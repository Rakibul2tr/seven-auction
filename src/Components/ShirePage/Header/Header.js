import React from 'react';
import { Container, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/site_logo.png';
import Login from '../../LoginPage/Login/Login';
import './Header.css'

const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Container>
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
                    <Link to='/'>Auction</Link>
                    <Link to='/'>
                        <button>Sell With Us</button>
                    </Link>
                    <Link to='/'>
                       <button onClick={() => setModalShow(true)}>Login</button>
                    </Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>
                        <select>
                            <option>En</option>
                            <option>Dn</option>
                            <option>Bn</option>
                        </select>
                    </Link>
                </div>
            </div>
            {/* mobil device navbar */}
            <div className="col-12 mobil_device">
                <div className="menu_right">
                    <Link to='/'>Auction</Link>
                    <Link to='/'>
                        <span>Sell With Us</span>
                    </Link>
                    <Link to='/'><i className="far fa-bell"></i></Link>
                    <Link to='/'>
                    <i className="fas fa-user-circle"></i>
                    </Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>En</Link>
                </div>
            </div>
           </Row>
           <Row>
               
               <Login 
               show={modalShow}
               onHide={() => setModalShow(false)}
              />
              
           </Row>
        </Container>
    );
};

export default Header;