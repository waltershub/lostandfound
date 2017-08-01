import React from 'react';

class FoundItemsEntry extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>--{this.props.name}--</li>
          <li>-other thing-</li>
        </ul>
      </div>
    );
  }
}

FoundItemsEntry.propTypes = {
<<<<<<< HEAD
  name: React.PropTypes.String.isRequired
=======
  name: React.PropTypes.string.isRequired
>>>>>>> dash-FoundItem
};

export default FoundItemsEntry;
