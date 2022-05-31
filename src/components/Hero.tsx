import React from 'react'
// import hero from "../assets/hero.svg"
import Ellipse4 from "../assets/Ellipse4.svg"
import ellipse from "../assets/ellipse.svg"
import Vectorhero1 from "../assets/Vectorhero1.svg"
import Vectorhero2 from "../assets/Vectorhero2.svg"
import Vectorhero from "../assets/Vectorhero.svg"
import "./Hero.css"

function Hero () {
    return (
        <div className="hero-section">
            <div className="hero-container">
         {/* <img src={hero} alt="hero" className="hero" /> */}
         <h1>Travelling Africa for<br /> business or leisure? <span>Book</span> a<br />place to stay<img src={Ellipse4} alt="Ellipse4" /></h1>
         <img src={ellipse} alt="ellipse" className="ellipse1" />
         <img src={Vectorhero1} alt="Vectorhero" className="Vectorhero1" />
         <img src={ellipse} alt="ellipse" className="ellipse2" />
         <img src={Vectorhero2} alt="Vectorhero" className="Vectorhero2" />
         <img src={ellipse} alt="ellipse" className="ellipse3" />
         <img src={Vectorhero} alt="Vectorhero" className="Vectorhero3" />
        </div>
        </div>
    )
}

export default  Hero