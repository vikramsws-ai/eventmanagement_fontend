import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventFormContainer from '../containers/EventFormContainer';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events/create" element={<EventFormContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
