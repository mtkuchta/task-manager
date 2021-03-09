import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../services/firebase';
import { logIn, setLogError, clearLogError } from '../../actions/userActions';

import { Container, Form } from './LogIn.styles';

import AppLogo from '../AppLogo/AppLogo';
import SubmitButton from '../SubmitButton/SubmitButton';
import Input from '../Input/Input';
import Error from '../Error/Error';
import { changeInput, clearInput } from '../../actions/logInActions';

const LogIn = ({ user, logIn, setLogError, clearLogError, changeInput, logInForm, clearInput }) => {
  const history = useHistory();

  const handleLogin = (e, userName, password) => {
    e.preventDefault();
    clearLogError();
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then((user) => logIn(user))
      .catch((error) => setLogError(error.message));
    history.push('/');
    clearInput();
  };

  const handleInputChange = (e) => {
    changeInput({ name: e.target.name, value: e.target.value });
  };

  return (
    <Container>
      <AppLogo />
      {user.error ? <Error message={user.error || ''} /> : null}
      <Form onSubmit={(e) => handleLogin(e, logInForm.email, logInForm.password)}>
        <Input name="email" placeholder="email" type="text" value={logInForm.email} inputHandler={handleInputChange} />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={logInForm.password}
          inputHandler={handleInputChange}
        />
        <SubmitButton value="Log in" />
      </Form>
      <div className="signUp">
        Do you need account? <Link to="/signup">Sign Up</Link>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  setLogError: (message) => dispatch(setLogError(message)),
  clearLogError: () => dispatch(clearLogError()),
  changeInput: (payload) => dispatch(changeInput(payload)),
  clearInput: () => dispatch(clearInput()),
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    logInForm: state.logInForm,
  };
};

LogIn.propTypes = {
  user: PropTypes.shape({
    currentUser: PropTypes.object,
  }),
  logIn: PropTypes.func,
  setLogError: PropTypes.func,
  clearLogError: PropTypes.func,
  changeInput: PropTypes.func,
  logInForm: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  clearInput: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
