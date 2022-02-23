import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { pathArray } from '../../helpers/initial-data';
import { constantsText } from '../../constants/constants';

import Notification from '../info-components/Notification';
import Loader from '../info-components/Loader';
import Container from '../assets-components/Container';
import Header from '../assets-components/Header';
import {
  getAuthError,
  getAuthLoader,
  getAuthMessage,
} from '../../redux/auth/authSelectors';
import {
  getLoading,
  getError,
  getTasks,
} from '../../redux/tasks/tasksSelectors';

const SchedulerTracker = () => {
  const authError = useSelector(getAuthError);
  const authLoading = useSelector(getAuthLoader);
  const tasksLoading = useSelector(getLoading);
  const tasksError = useSelector(getError);
  const message = useSelector(getAuthMessage);
  const tasksList = useSelector(getTasks);

  return (
    <>
      <Header />
      {(authError || tasksError) && (
        <Notification
          errorState={authError || tasksError}
          message={constantsText.errorMsg}
          severity={constantsText.error}
        />
      )}

      {message && (
        <Notification
          errorState={message}
          message={message}
          severity={constantsText.success}
        />
      )}

      {(authError || tasksError) && (
        <Notification
          errorState={authError || tasksError}
          severity={constantsText.error}
          error={authError || tasksError}
        />
      )}

      <main>
        <Container>
          <section>
            <Routes>
              {pathArray.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}
            </Routes>
          </section>
        </Container>
      </main>

      {(authLoading || (tasksLoading && tasksList.length)) && (
        <Loader open={authLoading || tasksLoading ? true : false} />
      )}
    </>
  );
};

export default SchedulerTracker;
