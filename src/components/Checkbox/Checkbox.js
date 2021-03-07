import { StyledLabel } from './Checkbox.styles';

const Checkbox = ({ handleCheckbox, red, value, id, name }) => {
  return (
    <StyledLabel red={red ? true : false} id={id}>
      <input name={name} type="checkbox" onChange={handleCheckbox} checked={value ? true : false} />
      <span className="checkmark"></span>1
    </StyledLabel>
  );
};

export default Checkbox;
