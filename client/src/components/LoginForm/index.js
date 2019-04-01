import React from 'react';
import propTypes from 'prop-types';
import {FancyForm, SubmitButton, TextInput} from './styled';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {username: ''};
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleUsernameChange = event => {
    this.setState({username: event.target.value});
  };

  handleSubmit = event => {
    const { username } = this.state;
    if (username !== '') {
      this.props.submitHandler(username);
    }
    event.preventDefault();
  };


  render() {
    return (
      <FancyForm onSubmit={this.handleSubmit}>
        <TextInput
          ref={this.inputRef}
          type="text"
          maxLength={30}
          onChange={this.handleUsernameChange}
          value={this.state.username}
          placeholder="USERNAME"/>
        <SubmitButton type="submit" value="Start chatting"/>
      </FancyForm>
    );
  }
}

LoginForm.propTypes = {
  submitHandler: propTypes.func.isRequired,
};

export default LoginForm;
