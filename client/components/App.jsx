import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DashBoard from './DashBoard.jsx';
import Login from './Login.jsx';
import ItemForm from './ItemForm.jsx';
import Master from './Master.jsx';

const fakeAuth = {
  loggedIn: false,
  login() {
    this.loggedIn = true;
  },
  logout() {
    this.loggedIn = true;
  },
};

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      isLoggedIn: false,
    };

    this.checkLoggedIn = this.checkLoggedIn.bind(this);
  }

  checkLoggedIn() {
    axios.get('/status')
      .then((status) => {
        this.setState({ isLoggedIn: status });
      });
  }

  render() {
    return this.loggedIn ? (
      <DashBoard />
    ) :
    (
      <Login />
    );
  }
}

export default App;
