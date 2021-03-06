import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { StyledForm } from './AddTask.styles';

import { addTask } from '../../actions/taskActions';
import { changeTaskInput, clearTaskInput } from '../../actions/addTaskActions';
import { setTaskID } from '../../assets/helpers/setTaskID';
import { addTaskToDatabase } from '../../services/firebase';

import Checkbox from '../Checkbox/Checkbox';
import SubmitButton from '../SubmitButton/SubmitButton';
import Input from '../Input/Input';

const AddTask = ({ tasks, user: { currentUser }, addTask, addTaskForm, changeTaskInput, clearTaskInput }) => {
  const task = {
    description: addTaskForm.task,
    id: setTaskID(tasks),
    isImportant: addTaskForm.isImportant,
    isUrgent: addTaskForm.isUrgent,
    isDone: false,
  };

  const addNewTask = (e, task) => {
    e.preventDefault();
    addTask(task);
    addTaskToDatabase(currentUser.uid, task);
    clearTaskInput();
  };

  const handleInputChange = (e) => {
    changeTaskInput({ name: e.target.name, value: e.target.value });
  };

  const handleCheckbox = (e) => {
    changeTaskInput({ name: e.target.name, value: e.target.checked });
  };

  return (
    <StyledForm onSubmit={(e) => addNewTask(e, task)}>
      <Input name="task" value={addTaskForm.task} type="text" placeholder="new task..." inputHandler={handleInputChange} />
      <div className="checkbox_container">
        <Checkbox name="isImportant" red handleCheckbox={handleCheckbox} value={addTaskForm.isImportant} />
        <p>important</p>
      </div>
      <div className="checkbox_container">
        <Checkbox name="isUrgent" red handleCheckbox={handleCheckbox} value={addTaskForm.isUrgent} />
        <p>urgent</p>
      </div>
      <SubmitButton value="Add task" />
    </StyledForm>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  changeTaskInput: (payload) => dispatch(changeTaskInput(payload)),
  clearTaskInput: () => dispatch(clearTaskInput()),
});

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    user: state.user,
    addTaskForm: state.addTask,
  };
};

AddTask.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      isImportant: PropTypes.bool,
      isUrgent: PropTypes.bool,
      isDone: PropTypes.bool,
    })
  ),
  currentUser: PropTypes.object,
  addTask: PropTypes.func.isRequired,
  addTaskForm: PropTypes.shape({
    task: PropTypes.string,
    isImportant: PropTypes.bool,
    isUrgent: PropTypes.bool,
  }),
  changeTaskInput: PropTypes.func.isRequired,
  clearTaskInput: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
