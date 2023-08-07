import React from 'react'
import { Container } from 'react-bootstrap'
import blogApp from "../assets/images/blogapp.PNG"
import ProjectCard from './ProjectCard'

const ProjectsComponent = () => {
    return (
        <>
            <Container fluid id="projects" className="min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center">
                {/* Heading */}
                <h2
                    className="display-1 mt-5"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                >
                    My <span className="text-warning">Projects.</span>
                </h2>
                <Container fluid className='mb-5'>
                    <div className="row ">
                        <div className="col-lg-9 col-md-10 mx-auto ">
                            {/* Using BS Card */}
                            <div className="row d-flex flex-row justify-content-around align-content-around flex-wrap mt-3">
                                {/* --------------- Project 1 --------------- */}
                                <ProjectCard
                                    img_source={blogApp}
                                    title={"Inventory Management App"}
                                    description={`A web-based text editor developed us Draft JS that can be used by a blogger to create, edit and view the blogs.
                                    The blogger should also be able to add images to the blog, add tags, see total views of the blog,
                                    see last modified date and created date.`}
                                />{/* --------- end Project------------------ */}
                                {/* --------------- Project 2 --------------- */}
                                <ProjectCard
                                    img_source={"https://camo.githubusercontent.com/27b2a27721ad63349a763762c4f9840759fba5e58a0f03751760a100e0244d39/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f6f707034796a31373764697a79616f736168306f2e706e67"}
                                    title={"Inventory Management App"}
                                    description={"It is designed to track and manage items through various stages along the supply chain, handling orders, sales, returns, reports,"}
                                />{/* --------- end Project------------------ */}
                                {/* --------------- Project 1 --------------- */}
                                <ProjectCard
                                    img_source={blogApp}
                                    title={"Inventory Management App"}
                                    description={`A web-based text editor developed us Draft JS that can be used by a blogger to create, edit and view the blogs.
                                    The blogger should also be able to add images to the blog, add tags, see total views of the blog,
                                    see last modified date and created date.`}
                                />{/* --------- end Project------------------ */}
                                {/* --------------- Project 2 --------------- */}
                                <ProjectCard
                                    img_source={"https://camo.githubusercontent.com/27b2a27721ad63349a763762c4f9840759fba5e58a0f03751760a100e0244d39/68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f6f707034796a31373764697a79616f736168306f2e706e67"}
                                    title={"Inventory Management App"}
                                    description={"It is designed to track and manage items through various stages along the supply chain, handling orders, sales, returns, reports,"}
                                />{/* --------- end Project------------------ */}
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default ProjectsComponent