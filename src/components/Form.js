import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-grow: 0;
  justify-content: center;

  input[type='text'] {
    width: 100%;
    font-size: 2em;
    font-family: 'Architects Daughter';
    line-height: 2.2em;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.CADET};
    background-color: transparent;
    margin-bottom: 40px;
    padding-left: 5px;
    transition: 0.3s;

    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.CADETBLUE};
    }
    &:focus::placeholder {
      color: transparent;
    }
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

  input[type='submit'] {
    width: 80%;
    margin: 8% 0;
    font-family: 'Montserrat';
    font-size: 1.8em;
    font-weight: normal;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.CADET};
    outline: none;
    border: none;
    border-radius: 5px;
    filter: drop-shadow(-5px 5px 3px rgba(0, 0, 0, 0.55));
    cursor: pointer;
    transform: scale(1);
    transition: 0.2s;
    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.colors.CADETBLUE};
    }
  }
`;

const Form = ({ addTask, tasks }) => {
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

  return (
    <StyledForm
      onSubmit={(e) => {
        addTask(e, task);
        clearInput();
      }}
    >
      <input
        type="text"
        placeholder="new task..."
        value={textInput}
        onChange={(e) => {
          handleInput(e);
        }}
        required
      />
      <div className="checkbox_container">
        <Checkbox red handleCheckbox={handleImportantCheckbox} value={isImportant} />
        <p>important</p>
      </div>
      <div className="checkbox_container">
        <Checkbox red handleCheckbox={handleUrgentCheckbox} value={isUrgent} />
        <p>urgent</p>
      </div>
      <input type="submit" value="Add task" />
    </StyledForm>
  );
};

export default Form;
