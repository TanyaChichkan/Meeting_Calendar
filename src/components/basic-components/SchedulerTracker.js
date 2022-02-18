import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  getError,
  getLoading,
  getTasks,
} from '../../redux/tasks/tasksSelectors';
import Error from '../info-components/Error';
import Loader from '../info-components/Loader';
import Dashboard from './Dashboard';
import Container from '../assets-components/Container';
import { constantsText } from '../../constants/constants';
import { fetchTasksOperation } from '../../redux/tasks/tasksOperations';
import RegisterForm from '../assets-components/authForm/RegisterForm';
import LogInForm from '../assets-components/authForm/LogInForm';
import Navigation from '../navigation/Navigation';

const SchedulerTracker = () => {
  const error = useSelector(getError);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const tasksArrayData = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasksOperation());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader open={isLoading ? true : false} />}
      {error && <Error errorState={error} message={constantsText.errorMsg} />}
      <header>
        <Container>
          <h1 style={{ textAlign: 'center' }}>Scheduler</h1>
          <Navigation />
        </Container>
      </header>

      <main>
        <Container>
          <section>
            <Routes>
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/login' element={<LogInForm />} />
            </Routes>
          </section>
        </Container>
      </main>

      {/* {tasksArrayData.length ? <Dashboard /> : null} */}
    </>
  );
};

export default SchedulerTracker;
