import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 5em;
    opacity: 1;
    animation: loader 2s infinite ease-in-out;
  }

  @keyframes loader {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
