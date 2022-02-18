import { useState } from 'react';

const initialState = { password: '', email: '' };

const LogInForm = () => {
  const [state, setState] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
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
    </form>
  );
};

export default LogInForm;
