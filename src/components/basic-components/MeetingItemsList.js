import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip } from '@mui/material';
import { getTasks } from '../../redux/tasks/tasksSelectors';
import { setSelectedTaskID } from '../../redux/tasks/tasksActions';
import { useEffect } from 'react';
import useGroupTasks from '../../custom-hooks/useGroupTasks';
import { style } from '@mui/system';

const ItemStyled = styled.li`
  position: absolute;
  width: 200px;
  top: ${(props) => props.start}px;
  left: 50px;
  height: ${(props) => props.duration}px;

  background-color: #e2ecf5;
  border-left: 2px solid #6e9ecf;
`;

const TextStyled = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

function MeetingItemsList({ onHandleClick }) {
  const tasksArrayData = useGroupTasks().tasksData;
  const dispatch = useDispatch();

  console.log(tasksArrayData);

  const handleClick = (e) => {
    const { id } = e.target.dataset;
    onHandleClick();
    dispatch(setSelectedTaskID(id));
  };

  return (
    <ul style={{ display: 'flex' }}>
      {tasksArrayData?.length &&
        tasksArrayData.map((el, idx) => {
          if (el.length > 1) {
            const width = 200 / el.length;
            return (
              <ul key={el[0].title + idx}>
                {el.map((item, index) => {
                  const left = index === 0 ? `50px` : `${50 + width * index}px`;
                  return (
                    <ItemStyled
                      onClick={handleClick}
                      data-id={item._id}
                      key={item._id}
                      start={item.start}
                      duration={item.duration}
                      style={{
                        width: `${width}px`,
                        left,
                      }}
                    >
                      <Tooltip title={item.title} placement='bottom-start'>
                        <TextStyled>{item.title}</TextStyled>
                      </Tooltip>
                    </ItemStyled>
                  );
                })}
              </ul>
            );
          }

          return (
            <ItemStyled
              key={el[0]._id}
              start={el[0].start}
              duration={el[0].duration}
              onClick={handleClick}
              data-id={el[0]._id}
            >
              <Tooltip title={el[0].title} placement='bottom-start'>
                <TextStyled>{el[0].title}</TextStyled>
              </Tooltip>
            </ItemStyled>
          );
        })}
    </ul>
  );
}

export default MeetingItemsList;
