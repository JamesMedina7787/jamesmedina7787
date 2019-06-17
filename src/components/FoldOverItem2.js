import React, { Component } from 'react';
import ig from "../pictures/ig.jpg"
import fb from "../pictures/fb.jpg"



class FoldOverItem2 extends Component {
    render() {

      return (
        <div className="linksContainer">
        <a  href={'https://www.instagram.com/jamesmedina7787/'} alt="James Medina JWM Porfolio">
         <img  className="linkStyle2" src={ig}/><br/>
          <br />
            <br/>
         </a><br/>
         <a href={'https://www.facebook.com/yogijwm'} alt="James Medina JWM Porfolio">
          <img  className="linkStyle2" src={fb}/><br/>
           <br />
             <br/>
          </a>

        </div>
      );
    }
  }

export default FoldOverItem2;
