import React from 'react';
import LostItemEntry from './LostItemEntry.jsx';

const fakeLostItems = [
  {
    location: 'manhattan',
    description: {
      name: 'baseball',
      brand: 'whatever',
      color: 'white',
      condition: '3',
      size: 'small',
    },
    returned: false,
  },
    {
    location: 'manhattan',
    description: {
      name: 'goldtooth',
      brand: 'whatever',
      color: 'white',
      condition: '3',
      size: 'small',
    },
    returned: false,
  },
];

class LostItems extends React.Component {
  render() {
    return (
      <div>
        <h1>Lost Items List</h1>
        {
          // iterate through all items
          // pass them into lost item entry
          fakeLostItems.map(elem => (
            <LostItemEntry
              itemName={elem.description.name}
              itemColor={elem.description.color}
              itemReturned={elem.returned}
            />
          ))
        }
      </div>
    );
  }
}

export default LostItems;
