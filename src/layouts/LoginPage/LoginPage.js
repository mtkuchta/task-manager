import React from 'react';
import LogIn from '../../components/LogIn/LogIn';
import { Container } from './LoginPage.styles';

const LoginPage = ({ handleLogin }) => {
  return (
    <Container>
      <LogIn handleLogin={handleLogin} />
    </Container>
  );
};

export default LoginPage;
