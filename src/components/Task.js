import styled from 'styled-components';
import deleteIcon from '../assets/icons/cancel.png';

import Checkbox from './Checkbox';

const Container = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Caveat', sans-serif;
  padding: 5px 5px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }

  .description {
    font-family: 'Architects Daughter';
    font-size: 2.1em;
    width: 80%;
  }

  button {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    outline: none;
    border: none;
    line-height: 20px;
    padding-bottom: 2px;
    font-size: 15px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.4s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.RED};
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
  }
`;

const Task = (props) => {
  return (
    <Container>
      <Checkbox />
      <p className="description">{props.description}</p>
      <button className="delete">
        <img src={deleteIcon}></img>
      </button>
    </Container>
  );
};

export default Task;
