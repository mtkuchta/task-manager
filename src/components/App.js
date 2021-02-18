import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';

import Header from '../layouts/Header';
import NewTaskPanel from './NewTaskPanel';
import TaskBoard from './TaskBoard';
import UserPanel from './UserPanel';

const tasks = [
  { description: 'Zrobić portfolio', isImportant: true, isUrgent: true, isDone: false },
  { description: 'Napisać CV', isImportant: true, isUrgent: true, isDone: false },
  { description: 'skoczyć na bangi', isImportant: false, isUrgent: false, isDone: false },
  { description: 'Odpisać na maile LinkedIn', isImportant: false, isUrgent: true, isDone: false },
  { description: 'Kupić ciuchy', isImportant: true, isUrgent: false, isDone: false },
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

  const addTask = (e) => {
    e.preventDefault();
    console.log('bangla');
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Aside>
          <Header />
          <UserPanel />
          <NewTaskPanel addTask={addTask} />
        </Aside>
        <Main>
          <TaskBoard tasks={tasks} />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
