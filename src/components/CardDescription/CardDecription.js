import { Container } from './CardDescription.styles';

const CardDescription = (props) => {
  return (
    <Container area={props.area} color={props.red ? 'red' : 'cadet'} rotated={props.rotated}>
      <h1>{props.text}</h1>
    </Container>
  );
};
export default CardDescription;
