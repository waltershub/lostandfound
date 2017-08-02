import React from 'react';
//import axios from 'axios';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  
  handleChange(e) {
    this.setState({message: e.target.value});
    console.log('The state of message is now: ', e.target.value);
    console.log(this.state.message)
  }


  handleSubmit(e) {
    e.preventDefault();
    var message = this.state.message;

    this.setState( {messages: this.state.messages.concat([message]) });

    console.log('Messages array = ', this.state.messages);

    this.setState( {message: '' });
  }

  render() {
    return (
      <div>
        <h1>Chimp Chat</h1>
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
