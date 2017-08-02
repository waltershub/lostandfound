import React from 'react';

const fakeUsers = [
  {
    username: 'Chetan',
    password: 'chetan',
    email: 'chetan@chetan.com',
    name: 'ChetanMalhi'
  },
  {
    username: 'Walter',
    password: 'walter',
    email: 'walter@walter.com',
    name: 'WalterShub'
  },
  {
    username: 'Chao',
    password: 'chao',
    email: 'chao@chao.com',
    name: 'yuchao'
  }];

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      password: 'password',
      email: 'email',
      name: 'name'
    };

    this.changeHandler = this.changeHandler.bind(this);
  }
  addUser() {
    axios.post('/SignUp', {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name
    })
    .then(function(response) {
      console.log('new user added', response);
    });
  }

  changeHandler(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
    console.log('testing: changed')
  }

  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <button>SignUp</button>
        </form>
        <button>Back to Homepage</button>
      </div>
    )
  }
}


export default SignUp;