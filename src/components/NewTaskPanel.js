import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './Form';

const Container = styled.div`
  width: 90%;
  height: 30%;
  flex-direction: row;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.YELLOW};
  padding: 15px 10px;
  filter: drop-shadow(-6px 6px 4px rgba(0, 0, 0, 0.55));

  h1 {
    font-weight: normal;
    font-size: 2.5em;
    width: 100%;
    padding: 5px 0 10px 10px;
  }
`;

const NewTaskPanel = ({ addTask }) => {
  return (
    <Container>
      <h1>Add Task:</h1>
      <Form addTask={addTask} />
    </Container>
  );
};

export default NewTaskPanel;
