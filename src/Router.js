import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';


function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />

      </Routes>
    </HashRouter>
  );
}

export default Router;
