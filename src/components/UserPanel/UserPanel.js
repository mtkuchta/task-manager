import { connect } from 'react-redux';
import { logout } from '../../services/firebase';
import { Container } from './UserPanel.styles';

const UserPanel = ({ user }) => {
  const email = user.currentUser ? user.currentUser.email : '';

  return (
    <Container>
      <h2>User:</h2>
      <p className="email">{email}</p>
      <button className="logout" onClick={logout}>
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
export default connect(mapStateToProps, {})(UserPanel);
