import React from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Alert from './components/layout/Alert';
import store from './store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
