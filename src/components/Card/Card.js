import React, { useState } from 'react';
import { connect } from 'react-redux';
import { dragLeave, dragOver, clearState } from '../../actions/dragAndDropActions';
import { dropTask } from '../../actions/taskActions';
import { updateTaskInDatabase } from '../../services/firebase';
import Task from '../Task/Task';
import { Container } from './Card.styles';

const Card = ({ area, important, urgent, tasks, user, dragAndDrop, dragOver, dragLeave, dropTask, clearState }) => {
  const rot = Math.random().toFixed(2);
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    if (dragAndDrop.container != e.target) {
      dragOver(e.target);
    }
  };

  const handleDropTask = (e) => {
    e.preventDefault();
    const target = e.target;
    target.style.opacity = '1';
    if (dragAndDrop.container) {
      const transferedTask = tasks[tasks.findIndex((el) => el.id === dragAndDrop.draggedTask)];
      const container = dragAndDrop.container;
      dropTask({ transferedTask, container });
      updateTaskInDatabase(user, tasks, transferedTask.id);
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
        }}
      >
        {taskList}
      </ul>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    dragAndDrop: state.dragAndDrop,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dragOver: (task) => dispatch(dragOver(task)),
  dragLeave: () => dispatch(dragLeave()),
  dropTask: (payload) => dispatch(dropTask(payload)),
  clearState: () => dispatch(clearState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
