import React from 'react';

class MenuBar extends React.Component {
  render() {
    var barStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    };
    return (
      <div style={barStyle}>
        <h1>LOST AND FOUND</h1>
        <button>Lost An Item</button>
        <button>Found An Item</button>
        <button>Account Info</button>
        <p>usericon</p>
      </div>
    )
  }
}

export default MenuBar;
