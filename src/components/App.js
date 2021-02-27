import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';
import { changeTaskAttributes } from '../assets/helpers/changeTaskAttributes';

import Header from '../layouts/Header';
import LoginPage from '../layouts/LoginPage';
import NewTaskPanel from '../layouts/NewTaskPanel';
import SignUpPage from '../layouts/SignUpPage';
import TaskBoard from './TaskBoard';
import UserPanel from './UserPanel';

import { appAuth } from '../services/firebase';
import { auth } from '../services/firebase';

import { connect } from 'react-redux';

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
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
`;

function App({ tasks: { tasks } }) {
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // const unsubscribe = auth().onAuthStateChanged((data) => setCurrentUser(data));
    // return () => unsubscribe();
  }, []);

  // const handleCreateUser = (e) => {
  //   e.preventDefault();
  //   console.log('create');
  // };

  // const handleLogin = (e, email, password) => {
  //   e.preventDefault();
  //   appAuth(email, password);
  // };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Aside>
            <Header />
            <UserPanel />
            <NewTaskPanel />
          </Aside>
          <Switch>
            {/* <Route path="/login">
              <LoginPage handleLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <SignUpPage handlerCreateUser={handleCreateUser} />
            </Route> */}

            <Route exact path="/">
              <Main>
                <TaskBoard />
              </Main>
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, {})(App);
