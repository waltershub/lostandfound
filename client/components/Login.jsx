import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAlreadyExists: false,
    };
  }
  handlePost(userObj) {
    axios({
      method: 'POST',
      url: '/login',
      data: userObj,
    });
    alert('POST REQUEST SENT TO SERVER');
  }

  handleSubmit(e) {
    e.preventDefault();

    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const user = {
      username,
      password,
    };

    alert('The username is: ' + username + ' The password is: ' + password);

    this.handlePost(user);
  }

  render() {
    return (
      <div>
        <h1>Chimp Login</h1>
        <form>
          <label>
            <br />
              Please enter your username B
            <br />
            <input
              id="inputUsername"
              type="text"
              placeholder="Enter chimp username"
              autoFocus
              ref="username"
            />
          </label>
        </form>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <label>
            <br />
              Bananas for passwords
            <br />
            <input
              id="inputPassword"
              type="text"
              placeholder="Enter chimp password"
              ref="password"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
