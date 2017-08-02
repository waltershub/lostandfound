import { React, Component } from 'react';
import FoundItems from './FoundItems.jsx';
import LostItems from './LostItems.jsx';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <FoundItems />
        <LostItems />
      </div>
    );
  }
}

export default DashBoard;
