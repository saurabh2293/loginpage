import React from 'react';
import Login from './Component/Login';
import REGISTER from './Component/Details';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div>
    <Route exact path='/' component={Login}></Route> 
    <Route exact path='/update' component={REGISTER}></Route> 
    </div>
    </Router>
  );
}

export default App;
