import React, { useState } from 'react';
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
    transform: rotate(${({ rot }) => `${rot}deg`}) scale(${({ isOver }) => (isOver ? 1.05 : 1)});
    transition: 0.5s;
    padding: 4%;
    transition: 0.6s;
  }
`;

const Card = ({ area, important, urgent, tasks, isDoneHandler, deleteTaskHandler, dropTask, dragStart, dragOver, dragLeave }) => {
  const rot = Math.random().toFixed(2);
  const [isOver, setIsOver] = useState(false);

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
          dragStart={dragStart}
        />
      );
    }
  });

  return (
    <Container area={area} rot={rot} isOver={isOver}>
      <ul
        className="card"
        data-important={`${important}`}
        data-urgent={`${urgent}`}
        onDragEnd={(e) => {
          dropTask(e);
        }}
        onDrop={() => setIsOver(false)}
        onDragOver={(e) => {
          dragOver(e);
          setIsOver(true);
        }}
        onDragLeave={(e) => {
          dragLeave(e);
          setIsOver(false);
        }}
      >
        {taskList}
      </ul>
    </Container>
  );
};

export default Card;
