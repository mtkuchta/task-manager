import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../../services/firebase';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import { Container, Form } from './SignUp.styles';

import AppLogo from '../AppLogo/AppLogo';
import SubmitButton from '../SubmitButton/SubmitButton';
import Input from '../Input/Input';
import Error from '../Error/Error';

import { isPasswordValidated } from '../../assets/helpers/isPasswordValidated';

import { setLogError, clearLogError } from '../../actions/userActions';
import { changeSignUpInput, clearSignUpInput, clearSignUpPasswords } from '../../actions/signUpActions';

const SignUp = ({ user, setLogError, signUpForm, changeSignUpInput, clearSignUpInput, clearSignUpPasswords }) => {
  const history = useHistory();

  const show = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { friction: 150, tension: 400, mass: 18 },
  });

  const handleInputChange = (e) => {
    changeSignUpInput({ name: e.target.name, value: e.target.value });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    setLogError(null);
    if (!isPasswordValidated(signUpForm.password)) {
      setLogError('Password must consist of at least 6 characters, contain a capital letter and a number ');
      return;
    }

    if (signUpForm.password === signUpForm.confirmedPassword) {
      auth()
        .createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
        .then(() => {
          clearSignUpInput();
          history.push('/');
        })
        .catch((error) => setLogError(error.message));
    } else {
      setLogError('Passwords are different');
      clearSignUpPasswords();
    }
  };

  return (
    <Container as={animated.div} style={show}>
      <AppLogo />
      <div className="description">Create new account:</div>
      {user.error ? <Error message={user.error || ''} /> : null}
      <Form onSubmit={handleCreateUser}>
        <Input name="email" placeholder="email" type="text" value={signUpForm.email} inputHandler={handleInputChange} />
        <Input
          name="password"
          placeholder="password"
          type="password"
          value={signUpForm.password}
          inputHandler={handleInputChange}
        />
        <Input
          name="confirmedPassword"
          placeholder="confirm password"
          type="password"
          value={signUpForm.confirmedPassword}
          inputHandler={handleInputChange}
        />
        <SubmitButton value="Sign Up" />
      </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setLogError: (message) => dispatch(setLogError(message)),
  clearLogError: () => dispatch(clearLogError()),
  changeSignUpInput: (payload) => dispatch(changeSignUpInput(payload)),
  clearSignUpInput: () => dispatch(clearSignUpInput()),
  clearSignUpPasswords: () => dispatch(clearSignUpPasswords()),
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
    signUpForm: state.signUpForm,
  };
};

SignUp.propTypes = {
  user: PropTypes.shape({
    currentUser: PropTypes.object,
  }),
  setLogError: PropTypes.func,
  signUpForm: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmedPassword: PropTypes.string,
  }),
  changeSignUpInput: PropTypes.func,
  clearSignUpInput: PropTypes.func,
  clearSignUpPasswords: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
