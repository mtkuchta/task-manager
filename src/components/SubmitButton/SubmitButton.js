import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input[type='submit'] {
    width: 80%;
    margin: 8% 0;
    font-family: 'Montserrat';
    font-size: 1.8em;
    font-weight: normal;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.CADET};
    outline: none;
    border: none;
    border-radius: 5px;
    filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.55));
    cursor: pointer;
    transform: scale(1);
    transition: 0.2s;
    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.colors.CADETBLUE};
    }
  }
`;

const SubmitButton = ({ value }) => {
  return (
    <Container>
      <input type="submit" value={value} />
    </Container>
  );
};
export default SubmitButton;
