import React from 'react'
import logo from "../assets/logo.svg"
import Bongalofooter from "../assets/Bongalofooter.svg";
import Vectormessage from "../assets/Vectormessage.svg"
import Vectorjoin1 from "../assets/Vectorjoin1.svg"
import Vectorjoin2 from "../assets/Vectorjoin2.svg"
import Vectorjoin3 from "../assets/Vectorjoin3.svg"
import Vectorjoin41 from "../assets/Vectorjoin41.svg"
import Vectorjoin42 from "../assets/Vectorjoin42.svg"
import pay from "../assets/pay.svg"
import Vectorpay2 from "../assets/Vectorpay2.svg"
import Vectorpay3 from "../assets/Vectorpay3.svg"
import "./Footer.css"

function Footer () {
    return (
        <div className="footer">
            <div className="footercontent">
                <div className="footer1">
                <div className="footer1ptop">
                <img src={logo} alt="logo" className="logo" />
            <img src={Bongalofooter} alt="bongalo"  className="bongalo" />
                </div>
                
            <div className="footer1p">
            <p>Enter your email to subscribe to our newsletter</p>
            <form>
                <img src={Vectormessage} alt="message" className="message" />
                <input type="email" placeholder="                  Enter Email Address" /><button className="btnft">Subsribe</button>
            </form>
            </div>
            </div>
            <div className="footer2">
                <div className="footer21">
                    <h5>ABOUT BONGALO</h5>
                    <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Press Release</a></li>
                </ul>
                </div>
                <div className="footer212">
                    <h5 className="footertext">LINK</h5>
                    <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="footer211">
                <h5>CONTACT</h5>
                <p>4th Floor, Fairview Building<br /> KG 622 st, kigali, Rwanda</p>
                <p className="text">6th Floor CamCull Building<br /> Comm Ave, Bamenda, Cameroon<br />info@bongalo.co</p>
            </div>
            <div className="footer121">
                <h5>JOIN US</h5>
                <div className="joincontent">
                <a href="#"><img src={Vectorjoin1} alt="vectorjoin" className="join1" /></a>
                <a href="#"><img src={Vectorjoin2} alt="vectorjoin" className="join2" /></a>
                <a href="#"><img src={Vectorjoin3} alt="vectorjoin" className="join3" /></a>
                <a href="#"><img src={Vectorjoin41} alt="vectorjoin" className="join4" /></a>
                <a href="#"><img src={Vectorjoin42} alt="vectorjoin" className="join" /></a>
                </div>
                
            </div>
            </div>
            <div className="paymentsection">
                <h5>Copyright &#169; 2021 Bongal.co. All right reserved</h5>
                <div className="payment">
                    <img src={pay} alt="pay" className="pay" />
                    <img src={Vectorpay2} alt="Vectorpay2" className="Vectorpay2" />
                    <img src={Vectorpay3} alt="pay" className="Vectorpay" />
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer