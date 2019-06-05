import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import prana from "../pictures/prana.jpg"
import satya  from "../pictures/satya.jpg"
import santosha from "../pictures/santosha.jpg"
import asteya from "../pictures/asteya.jpg"
import shaucha from "../pictures/shaucha.jpg"
import fire from "../pictures/fire.jpg"

class Navigation2 extends Component {
  render() {
    console.log()
    return (
    <div id="tenLimbs">
      <div className="linksContainer">
      <NavLink className="linkStyle"  to="/Pranyama"><img className="linkStyle" src={prana} /></NavLink><br/>
        <NavLink className="linkStyle"  to="/Yama2"><img className="linkStyle" src={satya} /></NavLink> <br/>
        <NavLink className="linkStyle"  to="/Yama3"><img className="linkStyle" src={asteya} /></NavLink><br/>
      </div>
        <div className="linksContainer2">
        <NavLink className="linkStyle"  to="/Niyama2"><img className="linkStyle" src={santosha} /></NavLink><br/>
        <NavLink className="linkStyle"  to="/Niyama1"><img className="linkStyle" src={shaucha} /></NavLink><br/>
        <NavLink className="linkStyle"  to="/Niyama3"><img className="linkStyle" src={fire} /></NavLink><br/>
      </div>
    </div>
    );
  }
}

export default Navigation2;
