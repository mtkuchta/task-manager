import { StyledError } from './Error.style';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <StyledError>{message}</StyledError>;
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
