import React from 'react';
import FoundItemsEntry from './FoundItemsEntry.jsx';

const myFoundItems = [
  { name: 'goldtooth' },
  { name: 'marbles' },
  { name: 'ring' },
];

class FoundItems extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log('found items', this.props.items);
    return (
      <div>
        <h2>Found Items</h2>
        {this.props.items.map(item => (
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
