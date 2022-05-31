import React from 'react'
import amazing1 from "../assets/amazing1.svg"
import amazing2 from "../assets/amazing2.svg"
import amazing3 from "../assets/amazing3.svg"
import amazing4 from "../assets/amazing4.svg"
import Ellipseplace from "../assets/Ellipseplace.svg"
import Vectorplace from "../assets/Vectorplace.svg"
import amaloc from "../assets/amaloc.svg"
import "./Section4.css"

function Section4 () {
    return (
        <div className="section4">
            <h1>Some Amazing Experiences</h1>
            <div className="section4-content">
            <div className="amaloc2">
                <img src={amazing1} alt="amazing1" className="amazing1" />
                <h4>Kigali Genocie</h4>
                <div className="amaloc1">
            <img src={amaloc} alt="amaloc" className="amaloc" />
            <p>Gisozi, Kigali</p>
            </div>
            </div>
            <div>
            <img src={amazing2} alt="amazing1" className="amazing" />
            <h4>Mountain View</h4>
            <div className="amaloc1">
            <img src={amaloc} alt="amaloc" className="amaloc" />
            <p>Gisozi, Kigali</p>
            </div>
            </div>
            <div>
            <img src={amazing3} alt="amazing3" className="amazing" />
            <h4>Anastasia Paradise</h4>
            <div className="amaloc1">
            <img src={amaloc} alt="amaloc" className="amaloc" />
            <p>Gisozi, Kigali</p>
            </div>
            </div>
            <div>
            <img src={amazing4} alt="amazing4" className="amazing" />
            <h4>Nirvana Heights</h4>
            <div className="amaloc1">
            <img src={amaloc} alt="amaloc" className="amaloc" />
            <p>Gisozi, Kigali</p>
            </div>
                
            </div>
            <img src={Ellipseplace} alt="Ellipseplace" className="ellipseplace" />
            <img src={Vectorplace} alt="Vectorplace" className="vectorplace" />
            </div>
        </div>
        
    )
}

export default Section4