import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getSelectedTask } from '../../redux/tasks/tasksSelectors';
import { deleteTaskOperation } from '../../redux/tasks/tasksOperations';

import { objWithTimeAndValues } from '../../helpers/helpers';
import MeetingItemsList from './MeetingItemsList';
import CustomPopover from '../assets-components/CustomPopover';
import Form from '../assets-components/Form';
import AlertDialog from '../assets-components/AlertDialog';

import { getAuthLoggedIn } from '../../redux/auth/authSelectors';
import useGroupTasks from '../../custom-hooks/useGroupTasks';
import { fetchTasksOperation } from '../../redux/tasks/tasksOperations';

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
  const isLoggedIn = useSelector(getAuthLoggedIn);

  const tasks = useGroupTasks().tasksData;

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTasksOperation());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login`);
    }
  }, [isLoggedIn, navigate]);

  const handleClickOpenPopOver = (e) => {
    if (e.currentTarget.nodeName === 'DIV') {
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

        {isLoggedIn && tasks?.length ? (
          <MeetingItemsList onHandleClick={handleClickOpenAlert} />
        ) : null}

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
