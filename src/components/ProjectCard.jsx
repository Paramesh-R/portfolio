const ProjectCard = ({ img_source, title, description }) => {
    if (img_source && title && description) {
        return (
            /* ------------------------------- Project CARD ------------------------------- */
            <div
                className="card rounded shadow-lg col-sm-5 mb-5 border-0 p-0 bg-light"
                style={{
                    maxWidth: '352px',
                    padding: '12px',
                    transition: '.3s ease-in-out',
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
                    <div className="card-text p-1 mb-2 ">
                        {
                            description
                                ? description
                                : "Description of the product"
                        }
                    </div>{/* ---------------------------------- */}
                    
                </div>{/* -------------------------------------- */}
            </div>
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