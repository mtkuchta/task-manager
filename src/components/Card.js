import styled from 'styled-components';
import Task from './Task';

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
    transform: translateZ(0);
    transform: rotate(${({ rot }) => `${rot}deg`});
    transition: 0.5s;
    padding: 4%;
  }
`;

const Card = ({ area, important, urgent, tasks, isDoneHandler, deleteTaskHandler }) => {
  const rot = Math.random().toFixed(2);
  const taskList = tasks.map((task) => {
    if (important === task.isImportant && urgent === task.isUrgent) {
      return (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          rot={rot}
          isDoneHandler={isDoneHandler}
          deleteTaskHandler={deleteTaskHandler}
          isDone={task.isDone}
        />
      );
    }
  });

  return (
    <Container area={area} rot={rot}>
      <ul className="card">{taskList}</ul>
    </Container>
  );
};

export default Card;
