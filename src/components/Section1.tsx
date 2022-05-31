import React from 'react'
import ellipse from "../assets/ellipse.svg"
import dest from "../assets/dest.svg"
import date from "../assets/date.svg"
import Vectordown from "../assets/Vectordown.svg"
import guest from "../assets/guest.svg"
import Line from "../assets/Line.svg"
import "./Section1.css"

function Section1 () {
    return (
        <div className="section1">
            <div className="section1-content">
          <div className="dest">
              <div>
              <img src={ellipse} alt="ellipse" className="ellipse" />
              <img src={dest} alt="dest" className="image1" />
              </div>
              <h4>Destination</h4>
              <p>Kigali, Rwanda</p>
              <img src={Vectordown} alt="down" className="down" />
              <img src={Line} alt="Line" className="line" />
          </div>
          <div className="date">
              <img src={ellipse} alt="ellipse" className="ellipse" />
              <img src={date} alt="date" className="image2" />
              <h4>Arrival - Departure</h4>
              <p>wed, Oct 1 - Tue, Dec 10</p>
              <img src={Vectordown} alt="down" className="down" />
              <img src={Line} alt="Line" className="line" />
          </div>
          <div className="guest">
              <img src={guest} alt="guest" className="image3" />
              <h4>Guest</h4>
              <p>5 Guests</p>
              <img src={Vectordown} alt="down" className="down" />
              <img src={Line} alt="Line" className="line" />
          </div>
          <button className="btn-s1">Search</button>
            </div>
        </div>
    )
}

export default Section1