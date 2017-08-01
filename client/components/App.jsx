import React from 'react';
import MenuBar from './MenuBar.jsx';
import FoundItems from './FoundItems.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <FoundItems />
      </div>
    );
  }
}

export default App;
