import styled from 'styled-components';

import SignUp from '../components/SignUp/SignUp';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUpPage = ({ handlerCreateUser }) => {
  return (
    <Container>
      <SignUp handlerCreateUser={handlerCreateUser} />
    </Container>
  );
};

export default SignUpPage;
