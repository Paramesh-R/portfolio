import React from 'react'

const FullViewComp = ({ id, children }) => {
    return (
        <>
            <div id={id ? id : ""} className="d-flex flex-column align-items-center min-vh-100">
                {children}
            </div>
        </>
    )
}

export default FullViewComp