import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { dragLeave, dragOver, dropTask, clearState } from '../actions/actions';
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

const Card = ({ area, important, urgent, tasks: { tasks }, dragAndDrop, dragOver, dragLeave, dropTask, clearState }) => {
  const rot = Math.random().toFixed(2);
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    if (dragAndDrop.container != e.target) {
      console.log('over');
      dragOver(e.target);
    }
  };

  const handleDropTask = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target);
    target.style.opacity = '1';
    if (dragAndDrop.container) {
      console.log('jestesm');
      const transferedTask = tasks[dragAndDrop.draggedTask];
      const container = dragAndDrop.container;
      dropTask({ transferedTask, container });
    }
  };

  const taskList = tasks.map((task) => {
    if (important === task.isImportant && urgent === task.isUrgent) {
      return <Task key={task.id} id={task.id} description={task.description} rot={rot} />;
    }
  });

  return (
    <Container area={area} rot={rot} isOver={isOver}>
      <ul
        className="card"
        data-important={`${important}`}
        data-urgent={`${urgent}`}
        onDragEnd={(e) => {
          handleDropTask(e);
          clearState();
        }}
        onDrop={() => {
          setIsOver(false);
        }}
        onDragOver={(e) => {
          handleDragOver(e);
          setIsOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          dragLeave(e);
          setIsOver(false);
          console.log('dupa');
        }}
      >
        {taskList}
      </ul>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    dragAndDrop: state.dragAndDrop,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dragOver: (task) => dispatch(dragOver(task)),
  dragLeave: () => dispatch(dragLeave()),
  dropTask: (payload) => dispatch(dropTask(payload)),
  clearState: () => dispatch(clearState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
