import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  grid-area: ${(props) => props.area};
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 94%;
    height: 94%;
    background-color: ${({ theme }) => theme.colors.YELLOW};
    filter: drop-shadow(-8px 8px 4px rgba(0, 0, 0, 0.55));
    transform: translateZ(0);
    transform: rotate(${({ rot }) => `${rot}deg`}) scale(${({ isOver }) => (isOver ? 1.05 : 1)});
    transition: 0.5s;
    padding: 4%;
    transition: 0.6s;
  }
`;
