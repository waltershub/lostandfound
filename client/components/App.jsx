import React from 'react';
import MenuBar from './MenuBar.jsx';
import LostItems from './LostItemsList.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <LostItems />
      </div>
    );
  }
}

export default App;
