import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './HeaderStyles.css'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">CelStore</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/celulares">Celulares</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accesorios">Accesorios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ofertas">Ofertas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center me-auto">
              <div className="iconoUsuario">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
              <button className="btn btn-outline-success mr-2" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
