import SignUp from '../../components/SignUp/SignUp';
import { Container } from './SignUpPage.styles';

const SignUpPage = ({ handlerCreateUser }) => {
  return (
    <Container>
      <SignUp handlerCreateUser={handlerCreateUser} />
    </Container>
  );
};

export default SignUpPage;
