import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';

import Header from '../layouts/Header';
import NewTaskPanel from './NewTaskPanel';
import TaskBoard from './TaskBoard';
import UserPanel from './UserPanel';

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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Aside>
          <Header />
          <UserPanel />
          <NewTaskPanel />
        </Aside>
        <Main>
          <TaskBoard />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
