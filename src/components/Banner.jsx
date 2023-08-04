import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Banner = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <header className='min-vh-100' id='banner'>
                <div className="
                    min-vh-100 
                    d-flex flex-wrap align-items-center
                    bg-white
                    fw-normal
                    px-5 mb-0 rounded-3
                    "
                >

                    <div
                        className="container-fluid py-5 
                        d-flex flex-column align-items-center justify-content-center
                        "
                        data-aos="fade-in" data-aos-easing="ease" data-aos-delay="1000"
                    >
                        <h1 className="display-5 fw-bold word-break">Hi, I'm Parameswaran</h1>
                        <p className="col-md-8 fs-4">MERN Stack developer</p>
                        <a className="btn btn-secondary btn-lg" type="button" href="#about">Know more</a>
                    </div>
                </div>
            </header>


        </>
    )
}

export default Banner