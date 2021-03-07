import { Container } from './SubmitButton.styles';

const SubmitButton = ({ value }) => {
  return (
    <Container>
      <input type="submit" value={value} />
    </Container>
  );
};
export default SubmitButton;
