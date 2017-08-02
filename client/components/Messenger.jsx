import React from 'react';

class Messenger extends React.Component {
  constructor() {
    super(props) {
      this.state = {
        messages: []
      }
    }
  }

  render(){
    return (
      <div>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
      </div>
    );
  };
}

export default Messenger;