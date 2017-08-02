import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DashBoard from './DashBoard.jsx';
import TestComp from './TestComp.jsx';

const fakeAuth = {
  loggedIn: true,
  login() {
    this.loggedIn = true;
  },
  logout() {
    this.loggedIn = true;
  },
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              fakeAuth.loggedIn ? (
                <Redirect to="/dash" />
              ) : (
                //add login comp
              )
            )}
          />
          <Route path="/dash" component={DashBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
