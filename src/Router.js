import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import Celulares from './pages/Celulares';
import Accesorios from './pages/Accesorios';
import Contacto from './pages/Contacto/Contacto'
import Login from './pages/LogIn/Login';
import Signup from './pages/SignUp/Signup';
import DetalleCelular from './components/body/products/DetalleCelular/DetalleCelular';
import DetalleAccesorio from './components/body/products/DetalleAccesorio/DetalleAccesorio';
import Cart from './components/carrito/Cart';
import Carrito from './components/carrito/Carrito';



function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/celulares" element={<Celulares />}/>
        <Route exact path="/accesorios" element={<Accesorios />}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/celulares/:id" element={<DetalleCelular/>} />
        <Route exact path="/accesorios/:id" element={<DetalleAccesorio/>} />
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/carrito" element={<Carrito />}/>

      </Routes>
    </HashRouter>
  );
}

export default Router;
