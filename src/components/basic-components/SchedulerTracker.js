import { useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import Error from '../info-components/Error';
import Loader from '../info-components/Loader';
import Dashboard from './Dashboard';
import Container from '../assets-components/Container';
import Header from '../assets-components/Header';
import { constantsText } from '../../constants/constants';
import RegisterForm from '../assets-components/authForm/RegisterForm';
import LogInForm from '../assets-components/authForm/LogInForm';
import { getAuthError, getAuthLoader } from '../../redux/auth/authSelectors';
import { getLoading, getError } from '../../redux/tasks/tasksSelectors';

const SchedulerTracker = () => {
  const authError = useSelector(getAuthError);
  const authLoading = useSelector(getAuthLoader);
  const tasksLoading = useSelector(getLoading);
  const tasksError = useSelector(getError);

  return (
    <>
      <Header />
      <main>
        <Container>
          <section>
            <Routes>
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/login' element={<LogInForm />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </section>
        </Container>
      </main>

      {(authLoading || tasksLoading) && (
        <Loader open={authLoading || tasksLoading ? true : false} />
      )}
      {(authError || tasksError) && (
        <Error
          errorState={authError || tasksError}
          message={constantsText.errorMsg}
        />
      )}
    </>
  );
};

export default SchedulerTracker;
