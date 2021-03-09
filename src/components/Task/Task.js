import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import deleteIcon from '../../assets/icons/cancel.png';

import { Container } from './Task.style';

import { findIsTaskDone } from '../../assets/helpers/findIsTaskDone';
import { changeTaskStatus, deleteTask } from '../../actions/taskActions';
import { startDrag } from '../../actions/dragAndDropActions';
import { updateTaskInDatabase, deleteTaskInDatabase } from '../../services/firebase';

import Checkbox from '../Checkbox/Checkbox';

const Task = ({ id, description, deleteTask, changeTaskStatus, startDrag, tasks, user }) => {
  const handleDeleteTask = (e) => {
    const idToDelete = parseInt(e.target.parentNode.dataset.index);
    deleteTask(idToDelete);
    deleteTaskInDatabase(user, idToDelete);
  };

  const handleIsDoneTask = (e) => {
    const taskID = parseInt(e.target.parentNode.id);
    changeTaskStatus(taskID);
    updateTaskInDatabase(user, tasks, taskID);
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
    <Container isDone={findIsTaskDone(tasks, id)} draggable={true} onDragStart={handleDragStart}>
      <Checkbox handleCheckbox={handleIsDoneTask} value={findIsTaskDone(tasks, id)} id={id} />
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
    tasks: state.tasks.tasks,
    dragAndDrop: state.dragAndDrop,
    user: state.user,
  };
};

Task.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  deleteTask: PropTypes.func,
  changeTaskStatus: PropTypes.func,
  startDrag: PropTypes.func,
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Task);
