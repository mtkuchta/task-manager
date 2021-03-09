import { Container } from './SubmitButton.styles';
import PropTypes from 'prop-types';

const SubmitButton = ({ value }) => {
  return (
    <Container>
      <input type="submit" value={value} />
    </Container>
  );
};

SubmitButton.propTypes = {
  value: PropTypes.string,
};

export default SubmitButton;
