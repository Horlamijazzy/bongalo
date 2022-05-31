import React from 'react';
import rectangle7 from "../assets/rectangle7.svg";
import rectangle8 from "../assets/rectangle8.svg";
import rectangle9 from "../assets/rectangle9.svg";
import rectangle10 from "../assets/rectangle10.svg";
import rectangle11 from "../assets/rectangle11.svg";
import "./Section2.css"

function Section2 () {
    return (
        <div className="section2">
            <div className="sectionmain">
            <h1 className="h1main">Featured Cities</h1>
          <div className="section2-top">
              {/* <div className="section2-top1"> */}
              <img src={rectangle7} alt="rectangle7" className="image" />
              <h1 className="section2-text">Kigali</h1>
              <p className="section2-text2">25 properties</p>
              {/* </div> */}
              {/* <div className="section2-top2"> */}
              <img src={rectangle8} alt="rectangle8" className="image" />
              <h1 className="section2-text3">Yaounde</h1>
              <p className="section2-text4">15 properties</p>
              {/* </div> */}
              
          </div>
          <div className="section2-bottom">
              <div className="section2-bottom1">
              <img src={rectangle9} alt="rectangle9" className="image1" />
              <h1 className="section2-text">Rubavu</h1>
              <p className="section2-text2">32 properties</p>
              </div>
              <div className="section2-bottom1">
              <img src={rectangle10} alt="rectangle10" className="image1" />
              <h1 className="section2-text3">Doula</h1>
              <p className="section2-text4">16 properties</p>
              </div>
              <div className="section2-bottom1">
              <img src={rectangle11} alt="rectangle11" className="image1" />
              <h1 className="section2-text5">Butare</h1>
              <p className="section2-text6">32 properties</p>
              </div>
          </div>
        </div>
        </div>
    )
}

export default Section2;