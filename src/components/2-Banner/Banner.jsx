import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="
            min-vh-100 
            d-flex align-items-center
            bg-white
            fw-normal
            px-5 mb-0 rounded-3
            ">
                <div className="
                container-fluid 
                py-5 
                d-flex flex-column align-items-center justify-content-center
                ">
                    <h1 className="display-5 fw-bold word-break">Hi, I'm Parameswaran</h1>
                    <p className="col-md-8 fs-4">MERN Stack developer</p>
                    <a className="btn btn-secondary btn-lg" type="button" href="#about">Know more</a>
                </div>
            </div>
        </>
    )
}

export default Banner