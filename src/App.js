import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import SchedulerTracker from './components/basic-components/SchedulerTracker';
import { refreshUserOperation } from './redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();

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
