import { StyledLabel } from './Checkbox.styles';
import PropTypes from 'prop-types';

const Checkbox = ({ handleCheckbox, red, value, id, name }) => {
  return (
    <StyledLabel red={red ? true : false} id={id}>
      <input name={name} type="checkbox" onChange={handleCheckbox} checked={value ? true : false} />
      <span className="checkmark"></span>1
    </StyledLabel>
  );
};

Checkbox.propTypes = {
  handleCheckbox: PropTypes.func,
  red: PropTypes.bool,
  value: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
};

export default Checkbox;
