import { Container } from "react-bootstrap"
import FullViewComp from "../FullViewComp"

const AboutMe = () => {
    return (
        <>
            <FullViewComp id="about">
                < Container fluid className='m-auto'>
                    <div className="row  text-center align-items-center justify-content-center">
                        <img
                            src={require("../../assets/images/profile1.png")}
                            alt="user"
                            className='rounded p-0 float-start me-md-2'
                            style={{ width: '270px' }}
                        />
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <h2 className='display-1 '>About <span className='text-warning'>Me.</span></h2>
                            <p className="lead px-xl-5 mb-lg-4" style={{ textAlign: "justify" }}>I build applications for the web from the
                                ground up. I have a keen interest in Web Development and I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.

                            </p>
                        </div>
                    </div>

                </Container >
            </FullViewComp>

        </>
    )
}

export default AboutMe