import React from 'react'
import image1 from "../assets/image1.svg"
import image2 from "../assets/image2.svg"
import image3 from "../assets/image3.svg"
import image4 from "../assets/image4.svg"
import Ellipseplace from "../assets/Ellipseplace.svg"
import Vectorplace from "../assets/Vectorplace.svg"
import './Section6.css'

function Section6 () {
    return (
        <div className="section">
            <div className="section-container">
              <h1>Powered by</h1>
            </div>
            <div className="section6">
            <img src={image1} alt="image1" className="img" />
            <img src={image2} alt="image1" className="img" />
            <img src={image3} alt="image1" className="img" />
            <img src={image4} alt="image1" className="img1" /> 
            </div>
            <img src={Ellipseplace} alt="Ellipseplace" className="ellipseplace" />
            <img src={Vectorplace} alt="Vectorplace" className="vectorplace" />
        </div>
    )
}

export default Section6