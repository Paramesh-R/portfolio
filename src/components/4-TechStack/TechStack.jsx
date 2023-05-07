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
        { "name": "Bootstrap", "icon": "logos:bootstrap" },
        { "name": "MySQL", "icon": "logos:mysql" },
        // { "name": "Python", "icon": "logos:python" },
        // { "name": "Java", "icon": "logos:java" },
    ]
    return (
        <>

            <div id="arsenal" className='d-flex flex-column align-items-center min-vh-100 bg-white'>
                < Container fluid id="arsenal" /* style={{ marginTop: '100px' }} */ className='m-auto'>

                    <h2 className='display-1'>My <span className='text-warning'>Tech Stack.</span></h2>
                    <h6>The skills, tools and technologies I use to bring your products to life:</h6>


                    <ul className="mt-5 d-flex flex-wrap justify-content-center align-items-center m-auto position-relative" style={{ width: '60%' }}>
                        {/* Item */}
                        {stack.map(
                            (item) => (


                                <li key={item.name} className="d-flex flex-column align-items-center p-sm-1 p-md-3">
                                    <Icon icon={item.icon} width="90px" height="90px" />
                                    <span>{item.name}</span >
                                </li>


                            )


                        )}

                    </ul>

                </Container >
            </div>



        </>
    )
}

export default TechStack