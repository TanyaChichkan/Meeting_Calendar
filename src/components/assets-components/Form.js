import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { nanoid } from 'nanoid';
import { addTaskOperation } from '../../redux/tasks/tasksOperations';
import Wrapper from './Wrapper';
import ValidationMessage from './ValidationMessage';
import { constantsText } from '../../constants/constants';

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
    startTime: constantsText.initialStartTime,
    finishTime: constantsText.initialFinishTime,
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

    if (startTime < constantsText.initialStartTime) {
      setValidationError((prev) => ({
        ...prev,
        start: constantsText.minTimeMsg,
      }));
    }

    if (finishTime > constantsText.finishTime) {
      setValidationError((prev) => ({
        ...prev,
        finish: constantsText.maxTimeMsg,
      }));
    }

    if (
      startTime < constantsText.initialStartTime &&
      finishTime > constantsText.finishTime
    ) {
      setValidationError({
        start: constantsText.minTimeMsg,
        finish: constantsText.maxTimeMsg,
      });
    }

    if (startTime > finishTime) {
      setValidationError((prev) => ({
        ...prev,
        general: constantsText.startTimeBiggerFinishTimeMsg,
      }));
    }

    if (startTime === finishTime) {
      setValidationError((prev) => ({
        ...prev,
        general: constantsText.startTimeSameWithFinishTime,
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
    setState({
      startTime: constantsText.initialStartTime,
      finishTime: constantsText.initialFinishTime,
      title: '',
    });
  };

  const btnDisabledCondition =
    validationError.start || validationError.finish || !state.title;

  return (
    <>
      <FormHeadingStyled>New task</FormHeadingStyled>

      <FormStyled onSubmit={handleSubmit}>
        <TextField
          id={constantsText.textFieldFWId}
          label='Task'
          variant={constantsText.textFieldVariant}
          type='text'
          value={state.title}
          required
          name={constantsText.inputNameTitle}
          onChange={handleChange}
          size={constantsText.textFieldSize}
        />

        <FieldsetStyled>
          <Wrapper from='input'>
            <label>Start</label>
            <TextField
              id={constantsText.textFieldStandard}
              variant={constantsText.textFieldVariant}
              type='time'
              value={state.startTime}
              required
              name={constantsText.inputNameStart}
              onChange={handleChange}
              size={constantsText.textFieldSize}
            />
          </Wrapper>

          <Wrapper from='input'>
            <label>Finish</label>
            <TextField
              id={constantsText.textFieldStandard}
              variant={constantsText.textFieldVariant}
              type='time'
              value={state.finishTime}
              required
              name={constantsText.inputNameFinish}
              onChange={handleChange}
              size={constantsText.textFieldSize}
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
