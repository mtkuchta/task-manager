import styled from 'styled-components';

export const Container = styled.div`
  width: 40vh;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));

  .signUp {
    width: 100%;
    text-align: center;
    font-size: 1.5em;
  }
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
