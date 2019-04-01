import React from 'react';
import propTypes from 'prop-types';

class LoginForm extends React.Component {

  state = {username: ''};

  handleUsernameChange = event => {
    this.setState({username: event.target.value});
  };

  handleSubmit = event => {
    const {username} = this.state;
    if (username !== '') {
      this.props.submitHandler(username);
    }
    event.preventDefault();
  };


  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
      <input type="submit" value="Submit"/>
    </form>
  }
}

LoginForm.propTypes = {
  submitHandler: propTypes.func.isRequired,
};

export default LoginForm;
