import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { GlobalStyle } from '../../assets/styles/globalStyle';
import { theme } from '../../assets/styles/theme';
import { Wrapper, Main, Aside } from './App.styles';

import Header from '../../layouts/Header/Header';
import LoginPage from '../../layouts/LoginPage/LoginPage';
import NewTaskPanel from '../../layouts/NewTaskPanel/NewTaskPanel';
import SignUpPage from '../../layouts/SignUpPage/SignUpPage';
import TaskBoard from '../TaskBoard/TaskBoard';
import UserPanel from '../UserPanel/UserPanel';
import AuthRoute from '../AuthRoute/AuthRoute';
import Loader from '../Loader/Loader';

import { auth, getTasksfromDatabase } from '../../services/firebase';
import { fetchTasks } from '../../actions/taskActions';
import { logIn, setIsDataLoaded } from '../../actions/userActions';

function App({ user, logIn, fetchTasks, setIsDataLoaded }) {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((data) => logIn(data));

    return () => unsubscribe();
  }, []);

  useEffect(async () => {
    fetchTasks(await getTasksfromDatabase(user));
    if (user.currentUser) {
      setIsDataLoaded();
    }
  }, [user.currentUser]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Aside>
            <Header />
            {user.isDataLoaded && user.currentUser ? <UserPanel /> : null}
            {user.isDataLoaded && user.currentUser ? <NewTaskPanel /> : null}
          </Aside>
          <Switch>
            <Route path="/login">{!user.currentUser ? <LoginPage /> : <Redirect to="/" />}</Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <AuthRoute exact path="/">
              <Main>{user.isDataLoaded ? <TaskBoard /> : <Loader />}</Main>
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
  fetchTasks: (tasks) => dispatch(fetchTasks(tasks)),
  setIsDataLoaded: () => dispatch(setIsDataLoaded()),
});

App.propTypes = {
  user: PropTypes.shape({
    currentUser: PropTypes.object,
    isDataLoaded: PropTypes.bool,
  }),
  logIn: PropTypes.func,
  fetchTasks: PropTypes.func.isRequired,
  setIsDataLoaded: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
