import React from 'react';
import FoundItems from './FoundItems.jsx';
import LostItems from './LostItems.jsx';
import MenuBar from './MenuBar.jsx';

class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <div>
          <FoundItems />
          <LostItems />
        </div>
      </div>
    );
  }
}

export default DashBoard;
