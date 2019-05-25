import React, { Component } from 'react';
import ridge from "../pictures/ridge.jpg"
import port from "../pictures/port.jpg"
import bronx from "../pictures/bronx.jpg"
import core from "../pictures/core.jpg"

class FoldOverItem3 extends Component {
    render() {
return(
      <div className="linksContainer">
      <a  href={'https://www.lafitness.com/pages/ClassSchedulePrintVersion.aspx?clubid=695&Yonkers-New%20York'} alt="YogiJWM">
       <img  className="linkStyle" src={ridge}/><br/>
        <br />
          <br/>
       </a><br/>
       <a href={'https://www.lafitness.com/pages/ClassSchedulePrintVersion.aspx?clubid=681'} alt="YogiJWM">
        <img  className="linkStyle" src={port}/><br/>
         <br />
           <br/>
        </a>
        <a href={'https://www.lafitness.com/pages/ClassSchedulePrintVersion.aspx?clubid=932'} alt="YogiJWM">
         <img  className="linkStyle" src={bronx}/><br/>
          <br />
            <br/>
         </a>
         <a href={'https://mindbody.io/fitness/instructors/james-medina'} alt="YogiJWM">
          <img  className="linkStyle" src={core}/><br/>
           <br />
             <br/>
          </a>
      </div>
    )
  }
}

export default FoldOverItem3;
