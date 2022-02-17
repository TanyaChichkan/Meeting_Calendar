import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getError, getLoading, getTasks } from '../../redux/tasksSelectors';
import Error from '../info-components/Error';
import Loader from '../info-components/Loader';
import Dashboard from './Dashboard';
import Container from '../assets-components/Container';
import { constantsText } from '../../constants/constants';
import { fetchTasksOperation } from '../../redux/tasksOperations';

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
      {tasksArrayData.length ? (
        <>
          <header>
            <Container>
              <h1 style={{ textAlign: 'center' }}>Scheduler</h1>
            </Container>
          </header>
          <main>
            <Container>
              <section>
                <Dashboard />
              </section>
            </Container>
          </main>
        </>
      ) : null}
    </>
  );
};

export default SchedulerTracker;
