import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { timeArray } from '../../helpers/initial-data';
import { constantsText } from '../../constants/constants';
import useGroupTasks from '../../custom-hooks/useGroupTasks';

import { getSelectedTask } from '../../redux/tasks/tasksSelectors';
import { getAuthLoggedIn } from '../../redux/auth/authSelectors';
import {
  deleteTaskOperation,
  fetchTasksOperation,
} from '../../redux/tasks/tasksOperations';

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();
  const taskID = useSelector(getSelectedTask);
  const isLoggedIn = useSelector(getAuthLoggedIn);
  const tasks = useGroupTasks().tasksData;
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && dispatch(fetchTasksOperation());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(constantsText.loginLink);
    }
  }, [isLoggedIn, navigate]);

  //popover component open/close
  const handleClickOpenPopOver = (e) => {
    if (e.currentTarget.nodeName === constantsText.divTag) {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  //alert component open/close
  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  //close alert after submitting delete operation
  const handleClickAlertRequestAndClose = () => {
    dispatch(deleteTaskOperation(taskID));
    setOpenAlert(false);
  };

  return (
    <>
      <ContainerStyled>
        {timeArray.map((item, index) => (
          <CellContainerStyled
            key={item}
            index={index}
            onClick={handleClickOpenPopOver}
          >
            <SpanTimeTextStyled index={index}>{item}</SpanTimeTextStyled>
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
