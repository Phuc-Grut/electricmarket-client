import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from '../layouts/Topbar';
import ImportExcelView from '../views/ImportExcelView';
import Home from '../views/Home';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/import-excel" element={<ImportExcelView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
