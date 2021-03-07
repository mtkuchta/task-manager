import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../services/firebase';
import { logIn, setLogError, clearLogError } from '../../actions/actions';

import AppLogo from '../AppLogo/AppLogo';
import SubmitButton from '../SubmitButton/SubmitButton';
import Input from '../Input/Input';
import Error from '../Error/Error';

const Container = styled.div`
  width: 40vh;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));

  .signUp {
    width: 100%;
    text-align: center;
    font-size: 1.5em;
  }
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogIn = ({ user, logIn, setLogError, clearLogError }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e, userName, password) => {
    e.preventDefault();
    clearLogError();
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then((user) => logIn(user))
      .catch((error) => setLogError(error.message));
    history.push('/');

    setUserName('');
    setPassword('');
  };

  return (
    <Container>
      <AppLogo />
      {user.error ? <Error message={user.error || ''} /> : null}
      <Form onSubmit={(e) => handleLogin(e, userName, password)}>
        <Input placeholder="email" type="text" value={userName} inputHandler={handleUserNameInput} />
        <Input placeholder="password" type="password" value={password} inputHandler={handlePasswordInput} />
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
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
