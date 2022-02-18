import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../redux/tasks/tasksSelectors';
import { setSelectedTaskID } from '../../redux/tasks/tasksActions';

const ItemStyled = styled.li`
  position: absolute;
  width: 200px;
  top: ${(props) => props.start}px;
  left: 50px;
  height: ${(props) => props.duration}px;

  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  background-color: #e2ecf5;
  border-left: 2px solid #6e9ecf;
`;

function MeetingItemsList({ onHandleClick }) {
  const tasksArrayData = useSelector(getTasks);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { id } = e.target.dataset;
    onHandleClick();
    dispatch(setSelectedTaskID(id));
  };

  return (
    <ul style={{ display: 'flex' }}>
      {tasksArrayData.map(({ _id, start, duration, title }) => (
        <ItemStyled
          key={_id}
          data-id={_id}
          start={start}
          duration={duration}
          onClick={handleClick}
        >
          {title}
        </ItemStyled>
      ))}
    </ul>
  );
}

export default MeetingItemsList;
