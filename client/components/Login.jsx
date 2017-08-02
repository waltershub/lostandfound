import React from 'react';

var input = "blank";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
  }
  submitLogin(input) {
    window.alert('input', input);
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.submitLogin}>
          <p>username</p>
          <input type="text" />

          <p>password</p>
          <input type="password" />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
