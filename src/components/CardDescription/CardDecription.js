import { Container } from './CardDescription.styles';
import PropTypes from 'prop-types';

const CardDescription = ({ area, red, rotated, text }) => {
  return (
    <Container area={area} color={red ? 'red' : 'cadet'} rotated={rotated}>
      <h1>{text}</h1>
    </Container>
  );
};

CardDescription.propTypes = {
  area: PropTypes.string,
  red: PropTypes.bool,
  rotated: PropTypes.bool,
  text: PropTypes.string,
};

export default CardDescription;
