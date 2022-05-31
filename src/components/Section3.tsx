import React from 'react'
import frame1 from "../assets/frame1.svg"
import frame2 from "../assets/frame2.svg"
import frame3 from "../assets/frame3.svg"
import frame4 from "../assets/frame4.svg"
import group1 from "../assets/group1.svg"
import group2 from "../assets/group2.svg"
import group3 from "../assets/group3.svg"
import group4 from "../assets/group4.svg"
import Ellipseplace from "../assets/Ellipseplace.svg"
import Vectorplace from "../assets/Vectorplace.svg"
import "./Section3.css"

function Section3 () {
    return (
        <div className="section3">
            <h1 className="text">Featured Places</h1>
            <div className="section3-content">
            <div className="frame">
                <img src={frame1} alt="frame1" className="frame1" />
                <img src={group1} alt="group1" className="group1" />
            </div>
            <div className="frameloc">
                <img src={frame2} alt="frame2" className="frame2" />
                <img src={group2} alt="group2" className="group2" />
            </div>
            <div className="frameloc">
                <img src={frame3} alt="frame3" className="frame2" />
                <img src={group3} alt="group3" className="group2" />
            </div>
            <div className="frameloc">
                <img src={frame4} alt="frame4" className="frame2" />
                <img src={group4} alt="group4" className="group2" />
            </div>
            <img src={Ellipseplace} alt="Ellipseplace" className="ellipseplace" />
            <img src={Vectorplace} alt="Vectorplace" className="vectorplace" />
            </div>
        </div>
        
    )
}

export default Section3