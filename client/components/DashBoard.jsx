import React from 'react';
import FoundItems from './FoundItems.jsx';
import LostItems from './LostItems.jsx';
import ItemForm from './ItemForm.jsx';
import MenuBar from './MenuBar.jsx';
import Messenger from './Messenger.jsx';
import axios from 'axios';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'dash',
      data: '',
    };

    this.setLocation = this.setLocation.bind(this);
    this.getDashData = this.getDashData.bind(this);

    this.getDashData();
  }

  setLocation(location) {
    console.log('setting location to:', location);
    if (location === 'dash') {
      this.getDashData();
    }
    this.setState({ location });
  }

  getDashData() {
    console.log('getting dash data ... ');
    axios.get('/dashdata')
      .then(({ data }) => {
        console.log('dash data', data);
        this.setState({ data });
      });
  }

  render() {
    console.log('found state data', this.state.data.found);
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
          <FoundItems items={this.state.data ? this.state.data.found : []} />
          <LostItems items={this.state.data ? this.state.data.lost : []} />
        </div>
      </div>
    );
  }
}

export default DashBoard;
