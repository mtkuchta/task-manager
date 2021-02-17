import styled from 'styled-components';
import Card from './Card';
import CardDescription from './CardDecription';

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
      <Card area="important-urgent" />
      <Card area="important-not_urgent" />
      <Card area="not_important-urgent" />
      <Card area="not_important-not_urgent" />
      <CardDescription area="urgent" text="Urgent" red />
      <CardDescription area="not_urgent" text="Not urgent" />
      <CardDescription area="important" text="Important" red rotated />
      <CardDescription area="not_important" text="Not important" rotated />
    </Container>
  );
};

export default TaskBoard;
