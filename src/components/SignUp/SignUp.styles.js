import styled from 'styled-components';

export const Container = styled.div`
  width: 50vh;

  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));

  .description {
    width: 100%;
    text-align: center;
    font-size: 2.5em;
  }
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
