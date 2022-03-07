import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import "./Style.css";

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="message" className='fw-bold mb-2'>Message</label>
                    <textarea className='mb-4' {...register("Message", { required: true })} rows="15" id="message" />

                    <div className="contact-type-btns d-flex mb-5">
                        <div className="contact-type-btn">
                            <input type="radio" id="Inquiry" {...register("HelpType", { required: true })} value="Inquiry" />
                            <label className="btn btn-default" htmlFor="Inquiry">Inquiry</label>
                        </div>
                        <div className="contact-type-btn">
                            <input type="radio" id="reportBug" {...register("HelpType", { required: true })} value="Report a Bug" />
                            <label className="btn btn-default" htmlFor="reportBug">Report a Bug</label>
                        </div>
                        <div className="contact-type-btn">
                            <input type="radio" id="billingIssue" {...register("HelpType", { required: true })} value="Billing Issue" />
                            <label className="btn btn-default" htmlFor="billingIssue">Billing Issue</label>
                        </div>
                        <div className="contact-type-btn">
                            <input type="radio" id="other" {...register("HelpType", { required: true })} value="Other" />
                            <label className="btn btn-default" htmlFor="other">Other</label>
                        </div>
                    </div>

                    <div className="d-grid gap-2">
                        <Button variant="link" size="lg" type="submit" className='contact-submit-btn'>
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm;