import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';
import { renumberTasks } from '../assets/helpers/renumberTasks';
import { changeTaskAttributes } from '../assets/helpers/changeTaskAttributes';

import Header from '../layouts/Header';
import NewTaskPanel from './NewTaskPanel';
import TaskBoard from './TaskBoard';
import UserPanel from './UserPanel';

const tasks = [
  { description: 'Zrobić portfolio', id: 0, isImportant: true, isUrgent: true, isDone: false },
  { description: 'Napisać CV', id: 1, isImportant: true, isUrgent: true, isDone: false },
  { description: 'skoczyć na bangi', id: 2, isImportant: false, isUrgent: false, isDone: false },
  { description: 'Odpisać na maile LinkedIn', id: 3, isImportant: false, isUrgent: true, isDone: false },
  { description: 'Kupić ciuchy', id: 4, isImportant: true, isUrgent: false, isDone: false },
];

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: linear-gradient(to top right, ${({ theme }) => theme.colors.CADET}, transparent);
`;

const Main = styled.main`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Aside = styled.aside`
  width: 26%;
  height: 100%;
`;

function App() {
  const [data, setData] = useState(tasks);
  const [draggedTask, setDraggedTask] = useState(null);
  const [container, setContainer] = useState(null);

  const addTask = (e, task) => {
    e.preventDefault();
    const tasksArr = [...data];
    tasksArr.push(task);
    setData(tasksArr);
  };

  const handleIsDoneTask = (e) => {
    const tasks = [...data];
    const id = parseInt(e.target.parentNode.id);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
    });
    setData(tasks);
  };

  const handleDeleteTask = (e) => {
    const idToDelete = parseInt(e.target.parentNode.dataset.index);
    const tasks = [...data];
    const taskToDeleteIndex = tasks.findIndex((task) => task.id === idToDelete);
    tasks.splice(taskToDeleteIndex, 1);
    renumberTasks(tasks);
    setData(tasks);
  };

  const dragStart = (e) => {
    console.log(e.target.parentNode);
    const draggedTaskIndex = e.target.firstChild.id;
    const target = e.target;
    setDraggedTask(parseInt(draggedTaskIndex));
    setTimeout(() => {
      target.style.opacit = 'none';
    }, 0);
  };

  const dragOver = (e) => {
    e.preventDefault();
    if (container != e.target) {
      setContainer(e.target);
    }
  };

  const dragLeave = (e) => {
    setContainer(null);
  };

  const dropTask = (e) => {
    e.preventDefault();
    const target = e.target;
    target.style.display = 'flex';
    if (container) {
      const tasks = [...data];
      const transferedTask = tasks[draggedTask];
      tasks.splice(draggedTask, 1);
      tasks.push(changeTaskAttributes(container, transferedTask));
      renumberTasks(tasks);
      setData(tasks);
      setContainer(null);
      setDraggedTask(null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Aside>
          <Header />
          <UserPanel />
          <NewTaskPanel addTask={addTask} tasks={data} />
        </Aside>
        <Main>
          <TaskBoard
            tasks={data}
            isDoneHandler={handleIsDoneTask}
            deleteTaskHandler={handleDeleteTask}
            dropTask={dropTask}
            dragStart={dragStart}
            dragOver={dragOver}
            dragLeave={dragLeave}
          />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
