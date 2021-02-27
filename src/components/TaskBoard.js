import styled from 'styled-components';
import Card from './Card';
import CardDescription from './CardDecription';

import { cardsDescriptionData } from '../assets/cardsDescriptionData';
import { cardsData } from '../assets/cardsData';

const Container = styled.div`
  width: 95vh;
  height: 95vh;
  display: grid;
  grid-template-columns: 10% 45% 45%;
  grid-template-rows: 10% 45% 45%;
  grid-template-areas:
    'empty urgent not_urgent'
    'important important-urgent important-not_urgent'
    'not_important not_important-urgent not_important-not_urgent';
`;

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
