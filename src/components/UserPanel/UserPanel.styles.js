import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 16%;
  margin: 15px auto;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  padding: 15px 10px;
  filter: drop-shadow(-6px 6px 4px rgba(0, 0, 0, 0.55));
  overflow: hidden;

  h2 {
    font-size: 2.5em;
    font-weight: normal;
  }

  .email {
    width: 100%;
    font-size: 1.8em;
    margin: 8px 0;
    text-align: center;
  }

  .logout {
    width: 80%;
    margin: 6% auto;
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
