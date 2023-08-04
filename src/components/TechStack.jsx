import { Icon } from '@iconify/react';
import { Container } from 'react-bootstrap';


const TechStack = () => {
    const stack = [
        { "name": "Javascript", "icon": "logos:javascript" },
        { "name": "React js", "icon": "logos:react" },
        { "name": "mongoDB", "icon": "devicon:mongodb-wordmark" },
        { "name": "Express js", "icon": "skill-icons:expressjs-light" },
        { "name": "Node.js", "icon": "logos:nodejs-icon" },
        { "name": "HTML", "icon": "vscode-icons:file-type-html" },
        { "name": "CSS", "icon": "vscode-icons:file-type-css" },
        { "name": "SCSS", "icon": "vscode-icons:file-type-scss2" },
        { "name": "Git", "icon": "logos:git-icon" },
        { "name": "Bootstrap", "icon": "skill-icons:bootstrap" },
        { "name": "MySQL", "icon": "logos:mysql" },
        // { "name": "Python", "icon": "logos:python" },
        // { "name": "Java", "icon": "logos:java" },
    ]
    return (
        <>

            <div id="arsenal" className='d-flex flex-column align-items-center min-vh-100 bg-white'>
                <Container fluid id="arsenal" /* style={{ marginTop: '100px' }} */ className='m-auto'>

                    <div
                        data-aos="fade-in"
                        data-aos-duration="1000"
                    >
                        {/* Heading Tech Stack */}
                        <h2 className='display-1'>My <span className='text-warning'>Tech Stack.</span></h2>
                        <h6>The skills, tools and technologies I use to bring your products to life:</h6>
                    </div>
                    <div class="container-fluid ">
                        <div class="row justify-content-center ">
                            <div class="col-12 col-md-8 col-lg-8 ">



                                <div
                                    className="mt-5 row m-auto
                                    d-flex flex-wrap align-items-center justify-content-evenly  
                                    position-relative
                                    "
                                >
                                    {stack.map((item) => (
                                        <>
                                            <div
                                                className=" 
                                                col-4 col-md-3 col-lg-2
                                                d-flex flex-column align-items-center justify-content-around
                                                my-2 mx-1
                                                "
                                                data-aos="fade-up"
                                                data-aos-duration="800"
                                            >
                                                <Icon icon={item.icon} width="90px" height="90px" className="rounded" />
                                                <span>{item.name}</span >
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>




                </Container >



            </div>



        </>
    )
}

export default TechStack


// LEGACY CODE

// Tech Stack

/* const ListTechStack = () => {
    return (
        <div className="container-fluid border border-primary">
            <ul
                className="mt-5 d-flex flex-row flex-wrap justify-content-evenly align-items-center m-auto position-relative list-unstyled border border-secondary"
                style={{ width: '70%' }}
            >
                
                {stack.map(
                    (item) => (


                        <li
                            key={item.name}
                            className="d-flex flex-column align-items-center m-1 p-xs-5 mx-sm-1 mx-1 p-sm-4 border border-warning"
                        // data-aos="fade-up"
                        // data-aos-duration="800"
                        >


                            <Icon icon={item.icon} width="90px" height="90px" className="rounded" />
                            <span>{item.name}</span >

                        </li>


                    )


                )}



            </ul>
        </div>
    )
} */