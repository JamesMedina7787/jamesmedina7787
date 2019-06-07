import React, { Component } from 'react';
import Navigation2 from  "../components/Navigation2"
import Yama1 from  "../components/Yama1"
import Yama2 from "../components/Yama2"
import Yama3 from "../components/Yama3"
import Yama4 from "../components/Yama4"
import Yama5 from "../components/Yama5"

import Niyama1 from  "../components/Niyama1"
import Niyama2 from "../components/Niyama2"
import Niyama3 from "../components/Niyama3"
import Niyama4 from "../components/Niyama4"
import Niyama5 from  "../components/Niyama5"
import Pranyama from "../components/Pranyama"



import {NavLink} from 'react-router-dom'
import {BrowserRouter, Route, Switch, browserHistory} from "react-router-dom";



class FoldOverItem4 extends Component {
    render() {

      return (
        <div>
        <BrowserRouter >
         <Navigation2  />
         <Switch >


           <div className="blogContainer">



             <Route className='' path="/" >
             </Route>


             <Route className='' path="/Pranyama" component={Pranyama}  >
             </Route>


             <Route className='' path="/Yama1" component={Yama1} >
             </Route>

             <Route className='' path="/Yama2" component={Yama2} >
             </Route>

             <Route  className='' path="/Yama3" component={Yama3}>
             </Route>

             <Route className='' path="/Yama4" component={Yama4} >
             </Route>

             <Route className='' path="/Yama5" component={Yama5} >
             </Route>

             <Route  className='' path="/Niyama1" component={Niyama1}>
             </Route>

             <Route  className='' path="/Niyama2" component={Niyama2}>
             </Route>

             <Route  className='' path="/Niyama3" component={Niyama3}>
             </Route>

             <Route  className='' path="/Niyama4" component={Niyama4}>
             </Route>

             <Route  className='' path="/Niyama5" component={Niyama5}>
             </Route>

        </div>
           <Route component={Error}></Route>
                   </Switch>
        </BrowserRouter>

        </div>
      );
    }
  }

export default FoldOverItem4;
