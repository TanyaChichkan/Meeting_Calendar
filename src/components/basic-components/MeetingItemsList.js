import styled from 'styled-components';
import { useSelector, dispatch, useDispatch } from 'react-redux';
import { deleteTaskOperation } from '../../redux/tasksOperations';
import { getTasks } from '../../redux/tasksSelectors';

const ItemStyled = styled.li`
  position: absolute;
  top: ${(props) => props.start}px;
  left: 50px;
  height: ${(props) => props.duration}px;
  width: 200px;

  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  background-color: #e2ecf5;
  border-left: 2px solid #6e9ecf;
`;

function MeetingItems() {
  const tasksArrayData = useSelector(getTasks);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log(e.target);
    dispatch(deleteTaskOperation(e.target.dataset.id));
  };

  return (
    <ul>
      {tasksArrayData.map(({ id, start, duration, title }) => (
        <ItemStyled
          data-id={id}
          start={start}
          duration={duration}
          key={id}
          onClick={handleClick}
        >
          {title}
        </ItemStyled>
      ))}
    </ul>
  );
}

export default MeetingItems;
