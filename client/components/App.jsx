import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import DashBoard from './DashBoard.jsx';
import Login from './Login.jsx';
import ItemForm from './ItemForm.jsx';
import Master from './Master.jsx';
import Messenger from './Messenger.jsx';


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
                <Master />
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
