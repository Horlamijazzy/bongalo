import React from 'react'
import logo from "../assets/logo.svg"
import bongalo from "../assets/bongalo.svg";
import Ellipse4 from "../assets/Ellipse4.svg";
import Group from "../assets/Group.svg";
import "./Nav.css"

function Nav () {
    return (
        <div>
        <div className="hero">
            <nav>
                <div className="nav-logos">
                <img src={Group} alt="Group" className="Group" />
                <img src={logo} alt="logo" className="logo" />
                <img src={bongalo} alt="bongalo"  className="bongalo" />
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">List a property</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
                <img src={Ellipse4} alt="Ellipse4" className="ellipse4" />
                <button className="btn-nav">Login</button>
            </nav>       
        </div>
        </div>
    )
}

export default Nav;