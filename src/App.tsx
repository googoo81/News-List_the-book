import React from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:category?" element={<NewsPage />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default App;
