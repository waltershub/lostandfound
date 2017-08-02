import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import DashBoard from './DashBoard.jsx';
import Login from './Login.jsx';
import App from './App.jsx';
import ItemForm from './ItemForm.jsx';

class Master extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/app">App</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/itemform">ItemForm</Link></li>
            <li><Link to="/dashboard">Dash</Link></li>
          </ul>
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/itemform" component={ItemForm} />
          <Route path="/dashboard" component={DashBoard} />
        </div>
      </Router>
    );
  }
}

export default Master;
