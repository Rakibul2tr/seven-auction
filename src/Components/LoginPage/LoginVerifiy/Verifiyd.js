import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import UseHoocks from '../../../UseHoocks/UseHoocks';

const Verifiyd = (props) => {
    const {user}=UseHoocks()
    const [success,setSuccess]=useState()
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data);
    fetch(`https://seven-auction.herokuapp.com/api/user/account-verification`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        setSuccess(data);
      
      window.location.reload();
     })
    }
  const [opacity,setopacity] = useState('');
    const handleClose = () =>{
        props.setShow(false);
        
    } 
    const handleShow = () => props.setShow(true);

    const randomNum=Math.floor(Math.random() * 100000)+1;
    console.log(randomNum);

    return (
        <>

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
            {
                success&& <p className='fw-bold text-success text-center'>{success?.message}</p>
            }
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} className="login_form">
              {
               
                <div className={opacity==='emailopacityNone'?'opacityNone':'field_row'}>
                  <div className="row px-5 py-2">
                    <label htmlFor="Varification">Varefication</label>
                    <div className="email_addrass" onClick={()=>setopacity('emailopacityNone')}>
                      <input
                        type="text"
                        placeholder="User ID"
                        {...register("userId", { required: true })}
                        defaultValue={user?._id}
                      />
                      <input type="hidden" {...register("code")}defaultValue={randomNum}/>
                    </div>
                  </div>
                 
                </div>
              }
              
              <div className="row px-5 py-2 text-center">
                <button className="submit_btn">verify</button>
              </div>
            </form>
      </Modal>
      </>
    );
};

export default Verifiyd;