import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import SchedulerTracker from './components/basic-components/SchedulerTracker';
import { refreshUserOperation } from './redux/auth/authOperations';
import { getAuthLoggedIn, getAuthToken } from '../src/redux/auth/authSelectors';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAuthToken);
  const isLoggedIn = useSelector(getAuthLoggedIn);

  useEffect(() => {
    !isLoggedIn && token && dispatch(refreshUserOperation());
  }, [dispatch, token, isLoggedIn]);

  return (
    <BrowserRouter>
      <div className='App'>
        <SchedulerTracker />
      </div>
    </BrowserRouter>
  );
};

export default App;
