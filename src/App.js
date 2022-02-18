import { BrowserRouter } from 'react-router-dom';

import SchedulerTracker from './components/basic-components/SchedulerTracker';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <SchedulerTracker />
      </div>
    </BrowserRouter>
  );
}

export default App;
