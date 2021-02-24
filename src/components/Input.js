import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    font-size: 2em;
    font-family: 'Architects Daughter';
    line-height: 2.2em;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.CADET};
    background-color: transparent;
    margin-bottom: 40px;
    padding-left: 5px;
    transition: 0.3s;

    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.CADETBLUE};
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
`;

const Input = ({ type, value, inputHandler, placeholder }) => {
  return (
    <Container>
      <input
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
