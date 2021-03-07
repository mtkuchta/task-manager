import { Container } from './Input.styles';

const Input = ({ type, value, inputHandler, placeholder, name }) => {
  return (
    <Container>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          inputHandler(e);
        }}
        required
      />
    </Container>
  );
};

export default Input;
