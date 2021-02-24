import React from 'react';
import styled from 'styled-components';
import LogIn from '../components/LogIn';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginPage = ({ handleLogin }) => {
  return (
    <Container>
      <LogIn handleLogin={handleLogin} />
    </Container>
  );
};

export default LoginPage;
