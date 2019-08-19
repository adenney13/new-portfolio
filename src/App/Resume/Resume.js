import React from 'react'
import { Document } from 'react-pdf/dist/entry.webpack'

// import MyResume from "../../Assets/aarondenney_resume.pdf"

const Resume = () => {
    return (
        <div className = 'my-resume'>
            <Document file= "../../Assets/aarondenney_resume.pdf"/>
        </div>
    )
}

export default Resume