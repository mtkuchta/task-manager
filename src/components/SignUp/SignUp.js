import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../services/firebase';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AppLogo from '../AppLogo/AppLogo';
import SubmitButton from '../SubmitButton/SubmitButton';
import Input from '../Input/Input';
import Error from '../Error/Error';

import { setLogError, clearLogError } from '../../actions/actions';
// import { createUserInDatabase } from '../../services/firebase';

const Container = styled.div`
  width: 50vh;

  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));

  .description {
    width: 100%;
    text-align: center;
    font-size: 2.5em;
  }
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUp = ({ user, setLogError }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const history = useHistory();

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmedPasswordInput = (e) => {
    setConfirmedPassword(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    setLogError(null);
    let success = false;
    if (password === confirmedPassword) {
      auth()
        .createUserWithEmailAndPassword(userName, password)
        .then((data) => {
          // success = true;
          const userID = data.user.uid;
          // createUserInDatabase(userID);
          setUserName('');
          setPassword('');
          setConfirmedPassword('');
          history.push('/');
        })
        .catch((error) => setLogError(error.message));
      // if (success) {
      //   // history.push('/');
      // }
    } else {
      setLogError('Passwords are different');
      setPassword('');
      setConfirmedPassword('');
    }
  };

  return (
    <Container>
      <AppLogo />
      <div className="description">Create new account:</div>
      {user.error ? <Error message={user.error || ''} /> : null}
      <Form onSubmit={handleCreateUser}>
        <Input placeholder="email" type="text" value={userName} inputHandler={handleUserNameInput} />
        <Input placeholder="password" type="password" value={password} inputHandler={handlePasswordInput} />
        <Input
          placeholder="confirm password"
          type="password"
          value={confirmedPassword}
          inputHandler={handleConfirmedPasswordInput}
        />
        <SubmitButton value="Sign Up" />
      </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // logIn: (user) => dispatch(logIn(user)),
  setLogError: (message) => dispatch(setLogError(message)),
  clearLogError: () => dispatch(clearLogError()),
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
