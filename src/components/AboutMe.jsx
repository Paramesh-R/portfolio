import { Container } from "react-bootstrap"
import FullViewComp from "./FullViewComp"
const profile_src = "/assets/images/profile3.png"


const AboutMe = () => {
    return (
        <>
            <FullViewComp id="about" bg_details='bg-light'>
                < Container fluid className='m-auto' style={{ 'transitionDuration': '0.3s', 'transitionProperty': 'all' }}>
                    <div
                        className="row  text-center align-items-center justify-content-center"
                        data-aos="fade-in"
                        data-aos-duration="800"
                    >
                        <img
                            src={profile_src}
                            alt="user"
                            className='rounded p-0 float-start me-md-2'
                            style={{ width: '270px' }}
                        />
                        <div className="col-xl-6 col-lg-6 col-md-6">

                            {/* Heading - About Me */}
                            <h2 className='display-1 '>About <span className='text-warning'>Me.</span></h2>

                            {/* Description */}
                            <p className="lead px-xl-5 mb-lg-4" style={{ textAlign: "justify" }}>
                                {/* I build applications for the web from the
                                ground up. I have a keen interest in Web Development and I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills. */}
                                I create web applications from the ground up. I have a strong interest in web development and am constantly looking for new information and experiences to widen my horizons and improve my abilities.
                            </p>

                           
                            <a
                                className="btn btn-secondary btn-lg"
                                type="button"
                                target='_blank'
                                rel="noreferrer"
                                href="https://drive.google.com/file/d/1-XeBDXaVV-DDJ33ekAl852h-jDZvzvrH/view?usp=drive_link"
                            >
                                View Resume
                            </a>

                        </div>
                    </div>

                </Container >
            </FullViewComp>

        </>
    )
}

export default AboutMe