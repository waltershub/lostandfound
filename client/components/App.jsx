import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.topbar}
        </div>
        <div>
          {this.props.main}
        </div>
      </div>
    );
  }
}

export default App;
