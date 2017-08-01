import React from 'react';

class LostItemEntry extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.itemName}</p>
        <p>{this.props.itemReturned + ''}</p>
      </div>
    );
  }
}

export default LostItemEntry;