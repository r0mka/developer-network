import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
        <Switch>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </div>
    </React.Fragment>
  </Router>
);

export default App;
