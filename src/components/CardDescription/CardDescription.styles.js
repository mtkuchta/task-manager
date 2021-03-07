import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ${(props) => props.area};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h1 {
    font-weight: normal;
    font-size: 30px;
    letter-spacing: 1px;
    background-color: ${({ theme, color }) => (color === 'red' ? theme.colors.RED : theme.colors.CADETBLUE)};
    width: 320px;
    text-align: center;
    line-height: 50px;
    filter: drop-shadow(-6px ${({ rotated }) => (rotated ? '-6px' : '6px')} 4px rgba(0, 0, 0, 0.65));
    transform: rotate(${(props) => (props.rotated ? '-90deg' : '0')});
    flex-shrink: 0;
    border-radius: 5px;
  }
`;
