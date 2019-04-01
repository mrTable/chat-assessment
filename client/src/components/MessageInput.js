import React from 'react';
import propTypes from 'prop-types';

class MessageInput extends React.Component {
  state = {message: ''};

  handleChange = event => {
    this.setState({message: event.target.value});
  };

  handleSubmit = event => {
    const {message} = this.state;
    if (this.state.message !== '') {
      this.props.sendMessage(message);
      // FIXME promise
    }
    event.preventDefault();
  };

  render() {
    return <form onSubmit={this.handleSubmit}>MessageInput
      {/*TODO maxlength*/}
      <textarea value={this.state.username} onChange={this.handleChange}/>
      <input type="submit" value="Send"/>
    </form>
  }
}

MessageInput.propTypes = {
  sendMessage: propTypes.func.isRequired,
};


export default MessageInput;
