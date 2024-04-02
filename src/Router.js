import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Celulares from './pages/Celulares';
import Accesorios from './pages/Accesorios';
import Ofertas from './pages/Ofertas';


function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/celulares" element={<Celulares />}/>
        <Route exact path="/accesorios" element={<Accesorios />}/>
        <Route exact path="/ofertas" element={<Ofertas />}/>

      </Routes>
    </HashRouter>
  );
}

export default Router;
