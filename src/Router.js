import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
// import NotFound from './components/NotFound';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        {/* <Route path="*" element={<NotFound />} /> 
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path="/tutoriales" element={<Tutoriales/>}/>
        <Route exact path="/referencias" element={<Referencias/>}/>
        <Route exact path="/recursos" element={<Recursos/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="/login" element={<Login/>}/> */}
      </Routes>
    </HashRouter>
  );
}

export default Router;
