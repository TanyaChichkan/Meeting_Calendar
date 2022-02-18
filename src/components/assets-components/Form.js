import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { nanoid } from 'nanoid';
import { addTaskOperation } from '../../redux/tasks/tasksOperations';
import Wrapper from './Wrapper';
import ValidationMessage from './ValidationMessage';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50vw;
  height: auto;
  max-width: 350px;
  min-width: 160px;
`;

const FormHeadingStyled = styled.h3`
  text-align: center;
  color: grey;
`;

const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const Form = ({ handleClose }) => {
  const [state, setState] = useState({
    startTime: '08:00',
    finishTime: '09:00',
    title: '',
  });
  const [validationError, setValidationError] = useState({
    start: '',
    finish: '',
    general: '',
  });
  const dispatch = useDispatch();

  const timeInputValidation = useCallback(() => {
    const { startTime, finishTime } = state;
    setValidationError({ start: '', finish: '', general: '' });

    if (startTime < '08:00') {
      setValidationError((prev) => ({
        ...prev,
        start: 'Min start time is 08:00',
      }));
    }

    if (finishTime > '17:00') {
      setValidationError((prev) => ({
        ...prev,
        finish: 'Max finish time is 17:00',
      }));
    }

    if (startTime < '08:00' && finishTime > '17:00') {
      setValidationError({
        start: 'Min start time is 08:00',
        finish: 'Max finish time is 17:00',
      });
    }

    if (startTime > finishTime) {
      setValidationError((prev) => ({
        ...prev,
        general: 'Start time is bigger than finish time',
      }));
    }

    if (startTime === finishTime) {
      setValidationError((prev) => ({
        ...prev,
        general: "Start time can't be the same as finish time",
      }));
    }
  }, [state]);

  useEffect(() => timeInputValidation(), [state, timeInputValidation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    if (state.startTime || state.finishTime) timeInputValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();

    dispatch(addTaskOperation({ ...state, id }));
    handleClose();
    setState({ startTime: '08:00', finishTime: '09:00', title: '' });
  };

  const btnDisabledCondition =
    validationError.start || validationError.finish || !state.title;

  return (
    <>
      <FormHeadingStyled>New task</FormHeadingStyled>

      <FormStyled onSubmit={handleSubmit}>
        <TextField
          id='fullWidth'
          label='Task'
          variant='standard'
          type='text'
          value={state.title}
          required
          name='title'
          onChange={handleChange}
          size='normal'
        />

        <FieldsetStyled>
          <Wrapper from='input'>
            <label>Start</label>
            <TextField
              id='standard-basic'
              variant='standard'
              type='time'
              value={state.startTime}
              required
              name='startTime'
              onChange={handleChange}
              size='normal'
            />
          </Wrapper>

          <Wrapper from='input'>
            <label>Finish</label>
            <TextField
              id='standard-basic'
              variant='standard'
              type='time'
              value={state.finishTime}
              required
              name='finishTime'
              onChange={handleChange}
              size='normal'
            />
          </Wrapper>
        </FieldsetStyled>
        <ValidationMessage {...validationError} />

        <button type='submit' disabled={btnDisabledCondition}>
          Save
        </button>
      </FormStyled>
    </>
  );
};

export default Form;
