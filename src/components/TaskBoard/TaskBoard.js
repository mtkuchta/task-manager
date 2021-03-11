import Card from '../Card/Card';
import CardDescription from '../CardDescription/CardDecription';

import { Container } from './TaskBoard.style';

import { cardsDescriptionData } from '../../assets/cardsDescriptionData';
import { cardsData } from '../../assets/cardsData';

const TaskBoard = () => {
  return (
    <Container>
      {cardsData.map((card, index) => {
        return <Card key={index} area={card.area} important={card.important} urgent={card.urgent} />;
      })}

      {cardsDescriptionData.map((card) => {
        return <CardDescription key={card.area} area={card.area} text={card.text} red={card.red} rotated={card.rotated} />;
      })}
    </Container>
  );
};

export default TaskBoard;
