import React from 'react';
import FoundItemsEntry from './FoundItemsEntry.jsx';

const myFoundItems = [
  { name: 'goldtooth' },
  { name: 'marbles' },
  { name: 'ring' },
];

class FoundItems extends React.Component {
  render() {
    return (
      <div>
        <h2>Found Items</h2>
        {myFoundItems.map(item => (
          <FoundItemsEntry
            name={item.name}
            key={item.name}
          />
        ))}
      </div>
    );
  }
}

export default FoundItems;
