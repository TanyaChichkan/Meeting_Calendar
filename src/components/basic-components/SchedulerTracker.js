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

const SchedulerTracker = () => {
  const error = useSelector(getAuthError);
  const isLoading = useSelector(getAuthLoader);

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

      {isLoading && <Loader open={isLoading ? true : false} />}
      {error && <Error errorState={error} message={constantsText.errorMsg} />}
    </>
  );
};

export default SchedulerTracker;
