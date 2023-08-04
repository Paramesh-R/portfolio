import React from 'react'
import { Container } from 'react-bootstrap'
import blogApp from "../assets/images/blogapp.PNG"

/* const CCard = () => {
    return (
        <div className="col-sm-5 mb-5">
            <div className="card">
                <img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1644404007228/PjUPs9pXA.png"
                    alt="Blogger"
                    width={"50px"}
                    className='card-img-top rounded'
                />
                <div className="card-body">
                    <h5 className="card-title">Blogger App using DraftJs Editor</h5>
                    <span>Date</span>
                    <p className="card-text" style={{ textAlign: "justify" }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Meta data</small></p>
                </div>
            </div>
        </div>

    )
} */

/*

    -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    user-select: none;
    border-radius: 10px;
    height: 410px;
    max-width: 352px;
    padding: 12px;
    transition: .3s ease-in-out;
    width: 100%;
    animation-fill-mode: both;
    animation-duration: 1000ms;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
    animation-name: react-reveal-947736670637028-7;

<div class="react-reveal Blog_post__aiyzv" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-947736670637028-7;">
    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612245550452/7Q7g-NjGN.jpeg" alt="Landmark Recognition using Firebase ML in React Native Cover">
    <h2>Landmark Recognition using Firebase ML in React Native
    </h2>
    <div class="Blog_metadata__mBNCK">
    <span>Feb 2nd 2021
    </span>
    </div>
    <p>In this tutorial, we will be building a Non-Expo React Native application to recognize landmarks from images using Firebase's machine learning kit.
    Firebase
    Firebase is a platform developed by Google for creating mobile and web applications. It was o...
    </p>
</div>
*/

const CCard1 = () => {
    return (
        <div className="col-sm-5 mb-5" data-aos="fade-in" data-aos-easing="ease" data-aos-delay="800">
            <div className="card" style={{ maxWidth: "350px" }}>
                <img
                    src={blogApp}
                    alt="Blogger"
                    width={"50px"}
                    className='card-img-top rounded'
                />
                <div className="card-body">
                    <h5 className="card-title">Blog App using DraftJs Editor</h5>
                    {/* <span>Date</span> */}
                    <p className="card-text" style={{ textAlign: "justify" }}>
                        A web-based text editor developed us Draft JS that can be used by a blogger to create, edit and view the blogs.
                        The blogger should also be able to add images to the blog, add tags, see total views of the blog,
                        see last modified date and created date.
                    </p>
                    {/* <p className="card-text"><small className="text-muted">Meta data</small></p> */}
                </div>
            </div >
        </div >

    )
}
const CCard2 = () => {
    return (
        <div className="col-sm-5 mb-5" data-aos="fade-in" data-aos-easing="ease" data-aos-delay="800">
            <div className="card">
                <img
                    src="https://camo.githubusercontent.com/27b2a27721ad63349a763762c4f9840759fba5e58a0f03751760a100e0244d39/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f6f707034796a31373764697a79616f736168306f2e706e67"
                    alt="Blogger"
                    width={"50px"}
                    className='card-img-top rounded'
                />
                <div className="card-body">
                    <h5 className="card-title">Inventory Management App</h5>
                    {/* <span>Date</span> */}
                    <p className="card-text" style={{ textAlign: "justify" }}>
                        It is designed to track and manage items through various stages along the supply chain, handling orders, sales, returns, reports,
                    </p>
                    {/* <p className="card-text"><small className="text-muted">Meta data</small></p> */}
                </div>
            </div>
        </div>

    )
}
const PortfolioComp = () => {
    return (
        <>
            <Container fluid id="projects" className="min-vh-100 bg-white d-flex flex-column align-items-center justify-content-center">
                <h2 className="display-1" data-aos="fade-in" data-aos-duration="1000">My <span className="text-warning">Projects.</span></h2>
                <Container fluid className=''>
                    <div className="row ">
                        <div className="col-lg-9 col-md-10 mx-auto ">
                            {/* Using BS Card */}
                            <div className="row d-flex flex-row justify-content-around align-content-around flex-wrap mt-3">
                                {/* <ProjectCard /> */}
                                {/* <ProjectCard /> */}
                                <CCard1 />
                                <CCard2 />

                            </div>
                            {/* <div className="rounded h-2 border border-danger" style={{cursor:"pointer",height:"410px"}}>
                                <img
                                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1644404007228/PjUPs9pXA.png"
                                    alt="Email Password Authentication using Firebase in React Native Cover"
                                    width={"50px"}
                                />
                                <h2>Email Password Authentication using Firebase in React Native</h2>
                                <div className="Blog_metadata__mBNCK">
                                    <span>Feb 8th 2022</span>
                                </div>
                                <p>
                                    In this tutorial, we will learn how to authenticate users with their email and password using Firebase's authentication module in a Non-Expo React Native application.
                                    To learn more about Firebase, refer to this link.
                                    Prerequisites
                                    The basics of React...
                                </p>
                            </div> */}
                        </div>

                    </div>
                </Container>
            </Container>
        </>
    )
}

export default PortfolioComp