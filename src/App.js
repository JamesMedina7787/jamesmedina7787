import React, { Component } from 'react';
import './App.css';
import Yoga from "./components/Yoga"
import Navigation from    "./components/Navigation"
import FoldOverItem from  "./components/FoldOverItem"
import FoldOverItem2 from "./components/FoldOverItem2"
import FoldOverItem3 from "./components/FoldOverItem3"
import FoldOverItem4 from "./components/FoldOverItem4"

import Yama1 from  "./components/Yama1"
import Yama2 from "./components/Yama2"
import Yama3 from "./components/Yama3"
import Yama4 from "./components/Yama4"
import Yama5 from "./components/Yama5"

import Niyama1 from  "./components/Niyama1"
import Niyama2 from "./components/Niyama2"
import Niyama3 from "./components/Niyama3"
import Niyama4 from "./components/Niyama4"
import Niyama5 from  "./components/Niyama5"

import Pranyama from "./components/Pranyama"

import {NavLink} from 'react-router-dom'
import {BrowserRouter, Route, Switch, browserHistory} from "react-router-dom";

import anahata from './pictures/anahata.jpg'
import anja from './pictures/anja.jpg'
import chakraSnakeImage from './pictures/chakra-snake-image.jpg'
import lotusYogini from './pictures/lotus-Yogini.jpg'
import lotus from './pictures/lotus.jpg'
import lotus2 from './pictures/lotus2.png'
import lotus3 from './pictures/lotus3.png'
import ohm from './pictures/ohm.png'
import prana from './pictures/prana.jpg'
import SacralChakraSymbol1 from './pictures/Sacral-Chakra-Symbol-1.jpg'
import vishudda from './pictures/vishudda.jpg'

const superAgent = require('superagent')
const url = 'http://omdbapi.com/?=star&y=&r=json'

class App extends Component {
  constructor(){
    super()
  }
  fetchFeed= function(){
    superAgent.get(url)
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) =>{
      if(err){
        console.log(err.message)
        return
      }
      console.log(JSON.stringify(response.body))
    })
  }

  render() {
    return (




      <div className="App">


<button onClick={this.fetchFeed.bind(this)}>Click here</button>
      <BrowserRouter >
       <Navigation  />
       <Switch >


         <div className="">



           <Route className='' path="/" >
           </Route>



           <Route className='' path="/FoldOverItem" component={FoldOverItem}  >
           </Route>



           <Route className='foldOver' path="/FoldOverItem2" component={FoldOverItem2} >
           </Route>



           <Route  className='foldOver' path="/FoldOverItem3" component={FoldOverItem3}>
           </Route>

           <Route  className='foldOver' path="/FoldOverItem4" component={FoldOverItem4}>
           </Route>


      </div>
         <Route component={Error}></Route>
                 </Switch>
      </BrowserRouter>





      </div>
    );
  }
}

export default App;
