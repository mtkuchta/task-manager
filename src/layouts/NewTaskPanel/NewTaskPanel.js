import AddTask from '../../components/AddTask/AddTask';
import { Container } from './NewTaskPanel.styles';

const NewTaskPanel = () => {
  return (
    <Container>
      <h1>Add Task:</h1>
      <AddTask />
    </Container>
  );
};

export default NewTaskPanel;
