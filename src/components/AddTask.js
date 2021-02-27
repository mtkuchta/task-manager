import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import SubmitButton from './SubmitButton';
import Input from './Input';

import { addTask } from '../actions/actions';
import { connect } from 'react-redux';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-grow: 0;
  justify-content: center;

  }
  .checkbox_container {
    width: 49%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    p {
      display: block;
      width: 50%;
      font-size: 1.5em;
      font-weight: bold;
      padding-left: 10px;
      color: #333;
    }
  }
`;

const AddTask = ({ addTask, tasks }) => {
  const [textInput, setTextInput] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);

  const task = { description: textInput, id: tasks.length, isImportant, isUrgent, isDone: false };

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  const handleImportantCheckbox = () => {
    setIsImportant(!isImportant);
  };

  const handleUrgentCheckbox = () => {
    setIsUrgent(!isUrgent);
  };

  const clearInput = () => {
    setTextInput('');
    setIsImportant(false);
    setIsUrgent(false);
  };

  const addNewTask = (e, task) => {
    e.preventDefault();
    addTask(task);
    clearInput();
  };

  return (
    <StyledForm onSubmit={(e) => addNewTask(e, task)}>
      <Input value={textInput} type="text" placeholder="new task..." inputHandler={handleInput} />
      <div className="checkbox_container">
        <Checkbox red handleCheckbox={handleImportantCheckbox} value={isImportant} />
        <p>important</p>
      </div>
      <div className="checkbox_container">
        <Checkbox red handleCheckbox={handleUrgentCheckbox} value={isUrgent} />
        <p>urgent</p>
      </div>
      <SubmitButton value="Add task" />
    </StyledForm>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
