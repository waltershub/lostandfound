import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setUsername(e) {
    this.setState({ username: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }

  submitLogin() {
    axios.get('/user', {
      params: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.submitLogin}>
          <p>username</p>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.setUsername}
          />

          <p>password</p>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.setPassword}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
