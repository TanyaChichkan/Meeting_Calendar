import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import SchedulerTracker from './components/basic-components/SchedulerTracker';
import { refreshUserOperation } from './redux/auth/authOperations';
import { getAuthToken } from './redux/auth/authSelectors';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAuthToken);

  useEffect(() => {
    dispatch(refreshUserOperation());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='App'>
        <SchedulerTracker />
      </div>
    </BrowserRouter>
  );
};

export default App;
