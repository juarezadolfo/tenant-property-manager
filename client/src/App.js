import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TenantSignup from "./pages/TenantSignup";
import LandlordSignup from "./pages/LandlordSignup";
import LLogin from "./pages/LLogin";
import TLogin from "./pages/TLogin";
import TenantMain from "./pages/TenantMain";
import LandlordMain from "./pages/LandlordMain";
import SignIn from "./pages/Home";
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/tsignup" component={TenantSignup} />
          <Route exact path="/lsignup" component={LandlordSignup} />
          <Route exact path="/llogin" component={LLogin} />
          <Route exact path="/tlogin" component={TLogin} />
          <Route exact path="/tmain" component={TenantMain} />
          <Route exact path="/lmain" component={LandlordMain} />
          <Route exact path="/" component={SignIn} />
         
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
