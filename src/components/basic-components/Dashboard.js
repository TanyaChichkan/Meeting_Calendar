import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { objWithTimeAndValues } from '../../helpers/helpers';
import MeetingItems from './MeetingItemsList';
import CustomPopover from '../assets-components/CustomPopover';
import Form from '../assets-components/Form';

const ContainerStyled = styled.div`
  position: relative;
`;

const CellContainerStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  width: 200px;

  &::after {
    content: '';
    display: ${(props) => (props.index % 2 === 0 ? 'none' : 'block')};
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    width: 250px;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: -1;
  }
`;

const SpanTimeTextStyled = styled.span`
  font-size: ${(props) => (props.index % 2 === 0 ? '16px' : '12px')};
`;

const Dashboard = () => {
  const array = objWithTimeAndValues;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    if (e.target.nodeName === 'DIV') {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ContainerStyled>
        {array.map((item, index) => (
          <CellContainerStyled
            key={item.time}
            index={index}
            onClick={handleClick}
          >
            <SpanTimeTextStyled index={index}>{item.time}</SpanTimeTextStyled>
          </CellContainerStyled>
        ))}
        <MeetingItems />
        <CustomPopover anchorEl={anchorEl} handleClose={handleClosePopOver}>
          <Form handleClose={handleClosePopOver} />
        </CustomPopover>
      </ContainerStyled>
    </>
  );
};

export default Dashboard;
