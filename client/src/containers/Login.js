import React  from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { loginSucceeded } from 'actions/auth';
import LoginForm from 'components/LoginForm';
import { Redirect } from 'react-router-dom';
import * as urls from 'constants/urls';

class Login extends React.Component {
  render() {
    if (this.props.username !== null) return <Redirect to={urls.chat}/>;

    return <LoginForm submitHandler={this.props.login}/>;
  }
}

Login.propTypes = {
  username: propTypes.string,
  login: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.username,
});
const mapDispatchToProps = dispatch => ({
  login: username => dispatch(loginSucceeded(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
