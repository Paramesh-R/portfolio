import React from 'react'

const FullViewComp = ({ id, children, bg_details }) => {
    return (
        <>
            <div id={id ? id : ""} className={`d-flex flex-column align-items-center min-vh-100 ${bg_details}`}>
                {children}
            </div>
        </>
    )
}

export default FullViewComp