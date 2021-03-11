import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

import { dragLeave, dragOver, clearState } from '../../actions/dragAndDropActions';
import { dropTask } from '../../actions/taskActions';
import { updateTaskInDatabase } from '../../services/firebase';
import Task from '../Task/Task';
import { Container } from './Card.styles';

const Card = ({ area, important, urgent, tasks, user, dragAndDrop, dragOver, dragLeave, dropTask, clearState }) => {
  const rot = Math.random().toFixed(2);
  const [isOver, setIsOver] = useState(false);
  let taskList = [];

  // const showCard = useSpring({
  //   from: { transform: 'scale(0)' },
  //   to: { transform: 'scale(1)' },
  //   config: { friction: 150, tension: 400, mass: 18 },
  // });

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

  if (tasks.length >= 1) {
    taskList = tasks.map((task) => {
      if (important === task.isImportant && urgent === task.isUrgent) {
        return <Task key={task.id} id={task.id} description={task.description} rot={rot} />;
      }
    });
  }

  return (
    <Spring from={{ transform: 'scale(0)' }} to={{ transform: 'scale(1)' }} config={{ friction: 150, tension: 400, mass: 18 }}>
      {(styles) => (
        <Container style={styles} isOver={isOver} area={area} rot={rot}>
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
            {taskList ? taskList : ''}
          </ul>
        </Container>
      )}
    </Spring>
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

Card.propTypes = {
  area: PropTypes.string,
  important: PropTypes.bool.isRequired,
  urgent: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      isImportant: PropTypes.bool,
      isUrgent: PropTypes.bool,
      isDone: PropTypes.bool,
    })
  ),
  user: PropTypes.shape({
    currentUser: PropTypes.object,
  }),
  dragAndDrop: PropTypes.shape({
    container: PropTypes.object,
    draggedTask: PropTypes.number,
  }),
  dragOver: PropTypes.func.isRequired,
  dragLeave: PropTypes.func.isRequired,
  dropTask: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
