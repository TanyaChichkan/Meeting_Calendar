import { useState } from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50vw;
  height: auto;
  max-width: 350px;
  min-width: 160px;
`;

const initialState = { name: '', password: '', email: '' };

const RegisterForm = () => {
  const [state, setState] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormStyled>
      <label>Name</label>
      <input
        type='text'
        value={state.name}
        name='name'
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
