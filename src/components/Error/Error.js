import styled from 'styled-components';

const StyledError = styled.p`
  width: 100%;
  color: red;
  font-size: 1.5em;
  text-align: center;
  padding: 10px 0;
`;

const Error = ({ message }) => {
  return <StyledError>{message}</StyledError>;
};

export default Error;
