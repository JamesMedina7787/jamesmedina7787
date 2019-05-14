import React, { Component } from 'react';
import './App.css';
import Yoga from "./components/Yoga"
import Navigation from    "./components/Navigation"
import FoldOverItem from  "./components/FoldOverItem"
import FoldOverItem2 from "./components/FoldOverItem2"
import FoldOverItem3 from "./components/FoldOverItem3"
import FoldOverItem4 from "./components/FoldOverItem4"
import {NavLink} from 'react-router-dom'
import {BrowserRouter, Route, Switch, browserHistory} from "react-router-dom";
const superAgent = require('superagent')
// const express = require('express')
const url = 'http://omdbapi.com/?=star&y=&r=json'
// const app = express()



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
