import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import { logout } from '../../services/firebase';
import { Container } from './UserPanel.styles';

import { clearUserData } from '../../actions/userActions';

const UserPanel = ({ user, clearUserData }) => {
  const email = user.currentUser ? user.currentUser.email : '';

  const showPanel = useSpring({
    from: { transform: 'translateY(-500px)' },
    to: { transform: 'translateY(0)' },
    config: { friction: 20, tension: 80, mass: 2 },
  });

  return (
    <Container as={animated.div} style={showPanel}>
      <h2>User:</h2>
      <p className="email">{email}</p>
      <button
        className="logout"
        onClick={() => {
          logout();
          clearUserData();
        }}
      >
        Log out
      </button>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearUserData: () => dispatch(clearUserData()),
});

UserPanel.propTypes = {
  user: PropTypes.shape({
    currentUser: PropTypes.object,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
