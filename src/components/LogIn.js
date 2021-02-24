import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AppLogo from './AppLogo';
import SubmitButton from './SubmitButton';
import Input from './Input';

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

const LogIn = ({ handleLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <AppLogo />
      <Form onSubmit={(e) => handleLogin(e, userName, password)}>
        <Input placeholder="user name" type="text" value={userName} inputHandler={handleUserNameInput} />
        <Input placeholder="password" type="password" value={password} inputHandler={handlePasswordInput} />
        <SubmitButton value="Log in" />
      </Form>
      <div className="signUp">
        Do you need account? <Link to="/signup">Sign Up</Link>
      </div>
    </Container>
  );
};

export default LogIn;
