import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getSelectedTask } from '../../redux/tasks/tasksSelectors';
import { deleteTaskOperation } from '../../redux/tasks/tasksOperations';

import { objWithTimeAndValues } from '../../helpers/helpers';
import MeetingItemsList from './MeetingItemsList';
import CustomPopover from '../assets-components/CustomPopover';
import Form from '../assets-components/Form';
import AlertDialog from '../assets-components/AlertDialog';

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
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();
  const taskID = useSelector(getSelectedTask);

  const handleClickOpenPopOver = (e) => {
    if (e.target.nodeName === 'DIV') {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleClickAlertRequestAndClose = () => {
    dispatch(deleteTaskOperation(taskID));
    setOpenAlert(false);
  };

  return (
    <>
      <ContainerStyled>
        {array.map((item, index) => (
          <CellContainerStyled
            key={item.time}
            index={index}
            onClick={handleClickOpenPopOver}
          >
            <SpanTimeTextStyled index={index}>{item.time}</SpanTimeTextStyled>
          </CellContainerStyled>
        ))}
        <MeetingItemsList onHandleClick={handleClickOpenAlert} />
        <CustomPopover anchorEl={anchorEl} handleClose={handleClosePopOver}>
          <Form handleClose={handleClosePopOver} />
        </CustomPopover>
        <AlertDialog
          open={openAlert}
          handleClose={handleCloseAlert}
          handleRequestSend={handleClickAlertRequestAndClose}
        />
      </ContainerStyled>
    </>
  );
};

export default Dashboard;
