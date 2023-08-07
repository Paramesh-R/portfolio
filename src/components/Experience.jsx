import React from 'react'
import { Container } from 'react-bootstrap'
import { Icon } from '@iconify/react';

const Experience = () => {
    return (
        <>
            {/* <---------------------------------- Work Container ------------------------------> */}
            < Container fluid id="work" className='bg-white d-flex flex-column align-items-center min-vh-100 justify-content-center' >
                {/* Heading */}
                <h2 className='display-1'
                    data-aos="fade-in"
                    data-aos-duration="1000"
                >
                    My Work <span className='text-warning'>Experience.</span>
                </h2>
                
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-md-10 mx-auto" data-aos="fade-in" data-aos-duration="1000">
                            {/* Experience Item */}
                            <div className="work_item_1 border-bottom border-warning border-3 mt-5 pb-2 user-select-none">
                                {/* Item Header */}
                                <div className="d-flex flex-row align-items-center w-100 ">

                                    {/* lEFT - Image */}
                                    <Icon icon="simple-icons:tata" width={'25%'} color='#1769AA' />

                                    {/* RIGHT - Details about Organization */}
                                    <div className="work_details d-flex flex-column align-items-start ms-2 w-100">
                                        <h4 className="designation fw-bold mb-1 ps-3">Analyst</h4>

                                        <p className="h6 fw-light mb-1 ps-3 text-start"><small>Tata Consultancy Services - PNC Bank, Full-time</small></p>
                                        <p className="h6 fw-light mb-1 ps-3"><small>Jul 2016 - Sep 2022</small></p>
                                        <p className="h6 fw-light mb-1 ps-3"><small>Bangalore, India</small></p>
                                    </div>

                                </div>
                                {/* Item - Description */}
                                <p className="Work_Description" style={{ textAlign: "justify" }}>
                                    PNC Financial Services is an American Bank holding company and financial services corporation based in Pittsburgh.
                                    My role involved in closely working with international clients to verify if the application follows the series of guidelines that dictate what information mortgage lenders need to provide to borrowers and what they must provide it. <br /> It also involves in validating what fees lenders can charge and how these fees can change as the mortgage matures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default Experience