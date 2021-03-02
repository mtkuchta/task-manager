import React, { useState } from 'react';
import styled from 'styled-components';
import { newUser } from '../services/firebase';

import AppLogo from './AppLogo';
import SubmitButton from './SubmitButton';
import Input from './Input';

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

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

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
    if (password === confirmedPassword) newUser(userName, password);
    setUserName('');
    setPassword('');
    setConfirmedPassword('');
  };

  return (
    <Container>
      <AppLogo />
      <div className="description">Create new account:</div>
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

export default SignUp;
