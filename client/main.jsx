import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router';
import App from './components/App.jsx';
import MenuBar from './components/MenuBar.jsx';
import DashBoard from './components/DashBoard.jsx';

ReactDOM.render(
  (
    <Router>
      <Route path="/" component={App}>
        <Route path="dash" components={{ main: DashBoard, topbar: MenuBar }} />
      </Route>
    </Router>
  ),
document.getElementById('app'));
