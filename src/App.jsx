import { Routes, Route } from 'react-router-dom';
import PRHeader from './components/PRHeader/PRHeader';
import PRAbout from './components/RRAbout/PRAbout';
import PRServices from './components/PRServices/PRServices';
import PRNews from './components/PRNews/PRNews';
import PRReviews from './components/PRReviews/PRReviews';

function App() {
  return (
    <>
      <PRHeader />
      <Routes>
        <Route
          path="/"
          element={(
            <PRAbout />
          )}
        />
        <Route
          path="/services"
          element={(
            <PRServices />
          )}
        />
        <Route
          path="/news"
          element={(
            <PRNews />
          )}
        />
        <Route
          path="/reviews"
          element={(
            <PRReviews />
          )}
        />
      </Routes>
    </>
  );
}

export default App;
