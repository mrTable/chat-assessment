import React from 'react';
import propTypes from 'prop-types';
import { InputForm, InputArea, SubmitButton } from './styled';

class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: ''};
    this.textareaRef = React.createRef();
  }

  submitMessage = () => {
    const { message } = this.state;
    if (this.state.message !== '') {
      // TODO "delivered"
      this.props.sendMessage(message);
      this.setState({message: ''});
    }
  };

  metaEnterSubmit = event => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      this.submitMessage();
    }
  };

  componentDidMount() {
    this.textareaRef.current.focus();
    window.addEventListener('keydown', this.metaEnterSubmit);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.metaEnterSubmit);
  }

  handleChange = event => {
    this.setState({message: event.target.value});
  };

  handleSubmit = event => {
    this.submitMessage();
    event.preventDefault();
  };

  render() {
    return (
      <InputForm onSubmit={this.handleSubmit}>
        <InputArea
          maxLength={4096}
          ref={this.textareaRef}
          value={this.state.message}
          placeholder='Your message'
          onChange={this.handleChange}/>
        <SubmitButton type="submit">Send</SubmitButton>
      </InputForm>
    );
  }
}

MessageInput.propTypes = {
  sendMessage: propTypes.func.isRequired,
};


export default MessageInput;
