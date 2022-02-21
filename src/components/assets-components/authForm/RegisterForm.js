import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { registrationOperation } from '../../../redux/auth/authOperations';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50vw;
  height: auto;
  max-width: 350px;
  min-width: 160px;
`;

const initialState = { username: '', password: '', email: '' };

const RegisterForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(registrationOperation(state));
    setState(initialState);
  };

  return (
    <FormStyled onSubmit={onHandleSubmit}>
      <label>Name</label>
      <input
        type='text'
        value={state.username}
        name='username'
        onChange={onHandleChange}
        required
      />
      <label>Email</label>
      <input
        type='email'
        value={state.email}
        name='email'
        onChange={onHandleChange}
      />
      <label>Password</label>
      <input
        type='password'
        value={state.password}
        name='password'
        onChange={onHandleChange}
      />
      <button type='submit'>Register</button>
    </FormStyled>
  );
};

export default RegisterForm;
