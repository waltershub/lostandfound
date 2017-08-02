import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBoard from './DashBoard.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" />
        <Route path="/dash" component={DashBoard} />
        <Route path="/itemform">
          <Route path="/lost" />
          <Route path="/found" />
        </Route>
        <Route path="/login" />
        <Route path="/signup" />
      </Router>
    );
  }
}

export default App;
