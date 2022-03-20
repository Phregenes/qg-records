import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from "./components/Pages/Home";
import Links from "./components/Pages/Links";
import Social from "./components/SocialMedia";
import Artists1 from "./components/Pages/Artists/artists1";
import Artists2 from "./components/Pages/Artists/artists2";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/links" component={Links}/>
        <Route path="/social" component={Social}/>
        <Route path="/tim-mc" component={Artists1}/>
        <Route path="/onefe-mc" component={Artists2}/>
      </Switch>
    </div>
  );
}
 
 export default App;
