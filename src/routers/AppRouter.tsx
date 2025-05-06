import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from '../layouts/Topbar';
import ImportExcelView from '../views/ImportExcelView';
import Home from '../views/Home';
import File5 from '../views/File5';
import File4 from '../views/File4';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/import-excel" element={<ImportExcelView />} />
        <Route path="/file5" element={<File5 />} />
        <Route path="/file4" element={<File4 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
