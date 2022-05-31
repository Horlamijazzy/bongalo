import React from 'react';
import ava from "../assets/ava.svg"
import sat from "../assets/sat.svg"
import sup from "../assets/sup.svg"
import "./Section5.css"
function Section5 () {
    return (
        <div>
            <div className="section5">
            <div className="section51-content">
             <img src={ava} alt="ava" className="ava" />
             <h2 className="textmain1">Availability</h2>
             <p>We know how hard it can be<br />finding a perfect home to <br />rent, especially when moving<br />to a new country; so we are<br />available 24/7 for your<br />inquiries about the best<br />places to stay. You'll find the<br />best places to stay on our<br />platform without stress.</p>
         </div>
         <div className="section52-content">
             <img src={sat} alt="sat" className="sat" />
             <h2>Client Satisfaction</h2>
             <p >Whether you are on a budget<br />or travelling for a;<br />conference, seminar,<br />vacation, we got you<br />covered. Plus, you can pay<br /> easily with your mobile wallet<br />from any country in Africa in<br />addition to the other<br />payments methods available to<br />on our system.</p>
         </div>
         <div className="section53-content">
             <img src={sup} alt="sup" className="sup" />
             <h2>Support</h2>
             <p>We're available to support<br />you as you book and set out<br />on your trip across the<br />continent. Our experienced<br />supports team ensures your<br />experience stays awesome all<br />the way on your trip and<br />even beyond. Count on us for<br />our 24/7 support service.</p>
             </div>
            </div>
        </div>
    )
}

export default Section5