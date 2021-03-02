import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { GlobalStyle } from '../assets/styles/globalStyle';
import { theme } from '../assets/styles/theme';

import Header from '../layouts/Header';
import LoginPage from '../layouts/LoginPage';
import NewTaskPanel from '../layouts/NewTaskPanel';
import SignUpPage from '../layouts/SignUpPage';
import TaskBoard from './TaskBoard';
import UserPanel from './UserPanel';
import AuthRoute from './AuthRoute';

import { auth } from '../services/firebase';

import { logIn } from '../actions/actions';

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

function App({ user, logIn }) {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((data) => logIn(data));

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Aside>
            <Header />
            {user.currentUser ? <UserPanel /> : null}
            {user.currentUser ? <NewTaskPanel /> : null}
          </Aside>
          <Switch>
            <Route path="/login">{!user.currentUser ? <LoginPage /> : <Redirect to="/" />}</Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <AuthRoute exact path="/">
              <Main>
                <TaskBoard />
              </Main>
            </AuthRoute>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
