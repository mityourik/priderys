import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PRHeader from './components/PRHeader/PRHeader';
import PRAbout from './components/RRAbout/PRAbout';
import PRServices from './components/PRServices/PRServices';
import PRNews from './components/PRNews/PRNews';
import PRReviews from './components/PRReviews/PRReviews';
import PRFilter from './components/PRFilterBar/PRFilter';

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <PRHeader
        onBookingClick={handleFilterClick}
      />
      {isFilterOpen && (
        <PRFilter />
      )}
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
