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
  name: React.PropTypes.String.isRequired
};

export default FoundItemsEntry;
