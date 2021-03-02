import styled from 'styled-components';
import { connect } from 'react-redux';

import deleteIcon from '../assets/icons/cancel.png';

import { changeTaskStatus, deleteTask, startDrag } from '../actions/actions';

import Checkbox from './Checkbox';

const Container = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Caveat', sans-serif;
  padding: 5px 5px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }

  .description {
    font-family: 'Architects Daughter';
    font-size: 2.1em;
    width: 80%;
    text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  }

  button {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    outline: none;
    border: none;
    line-height: 20px;
    padding-bottom: 2px;
    font-size: 15px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.RED};
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
  }
`;

const Task = ({ id, description, deleteTask, changeTaskStatus, startDrag, tasks: { tasks } }) => {
  const handleDeleteTask = (e) => {
    const idToDelete = parseInt(e.target.parentNode.dataset.index);
    deleteTask(idToDelete);
  };

  const handleIsDoneTask = (e) => {
    const taskID = parseInt(e.target.parentNode.id);
    changeTaskStatus(taskID);
  };

  const handleDragStart = (e) => {
    const draggedTaskIndex = e.target.firstChild.id;
    const target = e.target;
    setTimeout(() => {
      target.style.opacity = '0';
    }, 0);
    startDrag(parseInt(draggedTaskIndex));
  };

  return (
    <Container isDone={tasks[id].isDone} draggable={true} onDragStart={handleDragStart}>
      <Checkbox handleCheckbox={handleIsDoneTask} value={tasks[id].isDone} id={id} />
      <p className="description">{description}</p>
      <button className="delete" onClick={handleDeleteTask} data-index={id}>
        <img src={deleteIcon}></img>
      </button>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (task) => dispatch(deleteTask(task)),
  changeTaskStatus: (task) => dispatch(changeTaskStatus(task)),
  startDrag: (task) => dispatch(startDrag(task)),
});

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    dragAndDrop: state.dragAndDrop,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Task);
