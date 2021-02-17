import styled from 'styled-components';

const Container = styled.div`
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
    transform: rotate(${({ rot }) => `${rot}deg`});
  }
`;

const Card = (props) => {
  const rot = Math.random().toFixed(2);
  return (
    <Container area={props.area} rot={rot}>
      <div className="card"></div>
    </Container>
  );
};

export default Card;
