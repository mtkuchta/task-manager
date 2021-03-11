import AddTask from '../../components/AddTask/AddTask';
import { useSpring, animated } from 'react-spring';
import { Container } from './NewTaskPanel.styles';

const NewTaskPanel = () => {
  const showPanel = useSpring({
    from: { transform: 'translateX(-500px)' },
    to: { transform: 'translateX(0)' },
  });

  return (
    <Container as={animated.div} style={showPanel}>
      <h1>Add Task:</h1>
      <AddTask />
    </Container>
  );
};

export default NewTaskPanel;
