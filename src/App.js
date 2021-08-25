import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from "./components/Pages/Home";
import Links from "./components/Pages/Links";
import Social from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/links" component={Links}/>
        <Route path="/social" component={Social}/>
      </Switch>
    </div>
  );
}
 
 export default App;
