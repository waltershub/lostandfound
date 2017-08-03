import React from 'react';
import MessageEntry from './MessageEntry.jsx';
import axios from 'axios';


class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePost(messageObj) {
    axios({
      method: 'POST',
      url: '/items',
      data: messageObj,
    });
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    const message = this.state.message;
    const messageObj = {
      user_id: 1,
      loser_id: 2,
      text: message,
    };
    this.setState({ messages: [...this.state.messages, message], message: '' });
  }

  render() {
    return (
      <div>
        <h1>Chimp Chat</h1>
        <div>
          { this.state.messages.map(function (message) { return <MessageEntry message={message} /> }) }
        </div>
        <form onSubmit={(event) => {
              this.handleSubmit(event);
            }}>
          <label>
            <br />
              Please enter a message: 
            <br />
            <input type="text" placeholder="Enter a message B" value={this.state.message} onChange={(event) => {
              this.handleChange(event);
            }} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Messenger;