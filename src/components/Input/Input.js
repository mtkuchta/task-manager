import { Container } from './Input.styles';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  inputHandler: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
