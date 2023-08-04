import { Icon } from '@iconify/react';
import { Container } from 'react-bootstrap';
import "./ProjectCard.scss"

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
        { "name": "Bootstrap", "icon": "logos:bootstrap" },
        { "name": "MySQL", "icon": "logos:mysql" },
        // { "name": "Python", "icon": "logos:python" },
        // { "name": "Java", "icon": "logos:java" },
    ]
    return (
        <>

            <div id="arsenal" className='d-flex flex-column align-items-center min-vh-100 bg-white'>
                <Container fluid id="arsenal" /* style={{ marginTop: '100px' }} */ className='m-auto'>

                    <h2 className='display-1'>My <span className='text-warning'>Tech Stack.</span></h2>
                    <h6>The skills, tools and technologies I use to bring your products to life:</h6>


                    <div className="container border border-danger min-vw-100 w-75">
                        <ul
                            className="mt-5 d-flex flex-wrap justify-content-center align-items-center m-auto position-relative list-unstyled"
                        // style={{ '@media (min-width: 768px)': { width: '100% !important', }, width: '70%', }}
                        >
                            {/* Item */}
                            {stack.map(
                                (item) => (


                                    <li
                                        key={item.name}
                                        className="d-flex flex-column align-items-center m-1 p-xs-5 mx-sm-1 mx-1 p-sm-4 border border-secondary"
                                    // data-aos="fade-up"
                                    // data-aos-duration="800"
                                    >


                                        <Icon icon={item.icon} width="90px" height="90px" />
                                        <span>{item.name}</span >

                                    </li>


                                )


                            )}



                        </ul>
                    </div>




                </Container >

               

            </div>



        </>
    )
}

export default TechStack