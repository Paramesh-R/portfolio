import { Icon } from '@iconify/react';
import React, { useState, useRef, useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

   

    /* ---------------EMAIL JS---------------------------- */
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_serviceID,
            process.env.REACT_APP_templateID,
            form.current,
            process.env.REACT_APP_publicKey
        )
            .then((result) => {
                console.log(result.text);
                e.target.reset();

                alert("Email Sent Successfully")

                // Reset Form
                setName("");
                setEmail("");
                setMessage("");

            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        // console.log(form.current)
    }, [])

    /* -------------------------------------------------- */

    return (
        <>
            <div className="container-fluid bg-light" id='contact'>
                <div className="card bg-light pb-3 my-4 border-0" >
                    {/*--------------------------- BEGIN: SECTION - Header - Contact Us ---------------------------*/}
                    <section className="py-lg-5 py-3 bg-light d-flex flex-column justify-content-center mt-1">
                        <div className="container z-2">
                            <div className="row justify-content-center text-center align-items-center">
                                <div className="col-xl-10 col-lg-10 col-md-10" data-aos="fade-in" data-aos-duration="1000">
                                    <h1 className="display-1 mb-lg-3 font-weight-bold">Contact <span className='text-warning'>Me.</span></h1>
                                    <p className="lead px-xl-5 mb-lg-4">Please feel free to drop me a line</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*--------------------------- END: SECTION - Header - Contact Us ----------------------------*/}

                    {/*<------------------------- BEGIN: SECTION - Contact Us - CONTENT ------------------------->*/}
                    <section className='pt-0'>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card p-3 p-lg-5 bg-soft border border-soft">
                                        <div className="row align-items-center">

                                            {/*  -------(Left) Form - Contact Us ------------------- */}
                                            <div className="col-12 col-md-7 mb-4 mb-lg-0">
                                                <Form ref={form} onSubmit={sendEmail}>

                                                    {/* <-------------------Your Name-------------------> */}
                                                    <Form.Group className="mb-4" controlId="formBasicName" >
                                                        <InputGroup>
                                                            <InputGroup.Text>
                                                                <Icon icon="mdi:user" />{/* <i className="fa fa-user" /> */}
                                                            </InputGroup.Text>
                                                            <Form.Control
                                                                type="text"
                                                                name="user_name"
                                                                autoComplete="name"
                                                                placeholder="Enter your name"
                                                                required
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </InputGroup>
                                                    </Form.Group>

                                                    {/* <-------------------Your Email-------------------> */}
                                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                                        <InputGroup>
                                                            <InputGroup.Text>
                                                                <Icon icon="material-symbols:alternate-email" />{/* <i className="fa-solid fa-envelope" /> */}
                                                            </InputGroup.Text>
                                                            <Form.Control
                                                                type="email"
                                                                name="user_email"
                                                                autoComplete="email"
                                                                placeholder="Enter your email"
                                                                required
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </InputGroup>
                                                    </Form.Group>

                                                    {/* <-------------------Your Message-------------------> */}
                                                    <Form.Group className="mb-4" controlId="formBasicMessage">
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={5}
                                                            required
                                                            name='message'
                                                            placeholder='Enter your message'
                                                            maxLength={300}
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                        />
                                                    </Form.Group>

                                                    {/* Google ReCaptcha - To Do*/}


                                                    <Button variant="dark" type="submit">
                                                        Submit
                                                    </Button>
                                                </Form>

                                            </div>
                                            {/* ---------------------------------------------------- */}

                                            {/*  -------(Right) Static - Address Contact info ------ */}
                                            <div
                                                className="col-12 col-md-5 text-center d-flex flex-column justify-md-content-between rounded p-1"
                                                style={{ 'background': '#FAFAFA' }}
                                            >
                                                {/* <---------------------------- ITEM ----------------------------> */}
                                                <div className="item1 mb-1">
                                                    {/* icon */}
                                                    {/* <div className="mb-2"> <i className="fas fa-street-view "></i></div> */}
                                                    <Icon icon="mdi:map-marker-radius-outline" width='1rem' className='mb-1' />
                                                    {/* heading */}
                                                    <h5><strong>Address</strong></h5>
                                                    {/* content */}
                                                    <span>
                                                        Bangalore, India
                                                    </span>

                                                </div>
                                                <hr className='mx-auto w-50' />
                                                {/* <---------------------------- ITEM ----------------------------> */}
                                                <div className="item2 mb-1">
                                                    {/* icon */}
                                                    {/* <div className="mb-1"> <i className="fa-solid fa-envelope"></i></div> */}
                                                    <Icon icon="mdi:email-outline" width={'1rem'} className='mb-1' />
                                                    <h5><strong>Email</strong></h5>
                                                    {/* content */}
                                                    <span>
                                                        <a
                                                            href="mailto:parameswaran.r@outlook.com"
                                                            className="text-decoration-none link-dark"
                                                        >parameswaran.r@outlook.com</a>
                                                    </span>
                                                </div>
                                                <hr className='mx-auto w-50' />
                                                {/* <---------------------------- ITEM ----------------------------> */}
                                                <div className="item3 mb-1">
                                                    {/* icon */}
                                                    {/* <div className="mb-1"> <i className="fa fa-phone" aria-hidden="true"></i> </div> */}
                                                    <Icon icon="ic:baseline-local-phone" width={'1rem'} className='mb-1' />
                                                    {/* heading */}
                                                    <h5>Phone</h5>
                                                    {/* content */}
                                                    <span>
                                                        <a
                                                            href="tel:+919597917719"
                                                            className="text-decoration-none link-dark"
                                                        >+91 959 791 7719</a>
                                                    </span>
                                                </div>
                                                {/* <hr className='mx-auto w-50' /> */}
                                                {/* <---------------------------- ITEM ----------------------------> */}
                                                {/* <div className="item3 mb-1"> */}
                                                {/* icon */}
                                                {/* <div className="mb-1">
                                                        <i className="fas fa-hashtag" aria-hidden="true"></i>
                                                    </div> */}

                                                {/* heading */}
                                                {/*  <h5>Follow Me</h5>
                                                    <span className='text-center'>
                                                        <div className="d-flex justify-content-center">
                                                            <a className="btn btn-square btn-secondary me-2" target="_blank" href="https://github.com/Paramesh-R">
                                                                <Icon icon="ant-design:github-outlined" width={'25px'} />
                                                            </a>
                                                            <a className="btn btn-square btn-secondary me-2 d-flex align-items-center justify-content-center" target="_blank" href="www.linkedin.com/in/paramesh-r">
                                                                <Icon icon="il:linkedin" width={'20px'} />
                                                            </a>
                                                        </div>
                                                    </span> */}
                                                {/* </div> */}
                                            </div>{/* ---------------------------------------------- */}

                                        </div>
                                        {/* ---------------------------------------------------- */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section >

                    {/*<-------------------------- END: SECTION - Contact Us - CONTENT -------------------------->*/}



                </div>
            </div>


        </>
    )
}

export default ContactMe