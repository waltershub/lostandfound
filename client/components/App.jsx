import React from 'react';
import MenuBar from './MenuBar.jsx';
import FoundItems from './FoundItems.jsx';
import LostItems from './LostItemsList.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <FoundItems />
        <LostItems />
      </div>
    );
  }
}

export default App;
