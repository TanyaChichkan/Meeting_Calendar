import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logInOperation } from '../../../redux/auth/authOperations';
import { getAuthLoggedIn } from '../../../redux/auth/authSelectors';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50vw;
  height: auto;
  max-width: 350px;
  min-width: 160px;
`;

const initialState = { password: '', email: '' };

const LogInForm = () => {
  const [state, setState] = useState(initialState);
  const isLoggedIn = useSelector(getAuthLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/dashboard`);
    }
  }, [isLoggedIn, navigate]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInOperation(state));
    setState(initialState);
  };

  return (
    <FormStyled onSubmit={onHandleSubmit}>
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
      <button type='submit'>LogIn</button>
    </FormStyled>
  );
};

export default LogInForm;
