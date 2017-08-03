import React from 'react';
import FoundItems from './FoundItems.jsx';
import LostItems from './LostItems.jsx';
import ItemForm from './ItemForm.jsx';
import MenuBar from './MenuBar.jsx';
import Messenger from './Messenger.jsx';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'dash',
    };

    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    console.log('setting location to:', location);
    this.setState({ location });
  }

  render() {
    if (this.state.location === 'lost') {
      return (<ItemForm setLocation={this.setLocation} type="Lost" />);
    } else if (this.state.location === 'found') {
      return (<ItemForm setLocation={this.setLocation} type="Found" />);
    } else if (this.state.location === 'messenger') {
      return (<Messenger />);
    }
    return (
      <div>
        <MenuBar setLocation={this.setLocation} />
        <div>
          <FoundItems />
          <LostItems />
        </div>
      </div>
    );
  }
}

export default DashBoard;
