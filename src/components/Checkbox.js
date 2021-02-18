import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: transparent;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 20%;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    border: 2px solid #333;
    transition: 0.3s;
  }

  &:hover input ~ .checkmark {
    border: 2px solid ${({ theme }) => theme.colors.CADET};
    transform: scale(1.05);
  }

  input:checked ~ .checkmark {
    border: none;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    color: ${({ theme }) => theme.colors.GREEN};
  }
  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 4px;
    top: 0px;
    width: 9px;
    height: 14px;
    border: solid ${({ theme }) => theme.colors.GREEN};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = () => {
  return (
    <StyledLabel>
      <input type="checkbox" />
      <span className="checkmark"></span>1
    </StyledLabel>
  );
};

export default Checkbox;
