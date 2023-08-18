
const ProjectCard = ({ img_source, title, description, git_url, demo_url }) => {
    if (img_source && title && description) {
        return (
            /* ------------------------------- Project CARD ------------------------------- */
            <div
                className="card rounded shadow-lg col-sm-5 mb-5 border-0 p-0 bg-light"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{
                    maxWidth: '352px',
                    padding: '12px',
                    // transition: '.3s ease-in-out',
                    width: '100%',
                    height: 'auto',
                }}
            >
                {/* ---------------- CARD Image ---------------- */}
                <img
                    src={img_source ? img_source : ''}
                    alt=""
                    className='card-img-top rounded'
                    style={{
                        maxHeight: '200px',
                        maxWidth: "352px",
                        height: '100%',
                        width: '100%',
                    }}
                />{/* ------------- End Card Image ------------- */}

                {/* -------------- CARD Body ------------------- */}
                <div className="card-body">

                    {/* ----------- Card title ----------------- */}
                    <h5 className="card-title">
                        {
                            title
                                ? title
                                : "Card Title"
                        }
                    </h5>{/* ----------------------------------- */}


                    {/* ----------- Card Description ----------- */}
                    <div className="card-text p-1 mb-2">
                        {
                            description
                                ? description
                                : "Description of the product"
                        }
                    </div>{/* ---------------------------------- */}

                </div>{/* -------------------------------------- */}


                <div class="card-footer border-0">
                    <div className="d-flex justify-content-around">
                        {
                            git_url
                                ? (
                                    /* Git Code */
                                    < div className="container border-end">
                                        <button
                                            class="cta border-0 bg-none"
                                        >
                                            <a
                                                href={git_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="text-decoration-none"
                                            >

                                                <span
                                                    class="hover-underline-animation text-uppercase"
                                                >
                                                    View Code
                                                </span>
                                            </a>
                                        </button>
                                    </div>
                                )
                                : (
                                    <>
                                    </>
                                )
                        }


                        {/* Live Demo */}
                        <div className="container">
                            <button
                                class="cta border-0 bg-none"
                            >
                                <a
                                    href={demo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-decoration-none"
                                >
                                    <span
                                        class="hover-underline-animation text-uppercase"
                                    >
                                        Live Demo
                                    </span>
                                </a>
                            </button>
                        </div>


                    </div>
                </div>
            </div >
            /* ------------------------------ End Project Card --------------------------- */
        )
    } else {
        return (
            <>
            </>
        )
    }
}
export default ProjectCard