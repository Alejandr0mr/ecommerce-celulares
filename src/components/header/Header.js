import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './HeaderStyles.css'
import logo from './logo.png'
import mi from './mi.ico'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../login/LoginButton';
import Profile from '../login/Profile';
import LogoutButton from '../login/LogoutButton';


function Navbar() {

    const { user, isAuthenticated } = useAuth0()
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg" id='nav'>
                <div className="container">
                    <div className='titulo'>
                        <div className="d-flex align-items-center">
                            <img src={mi} alt="Logo mi" className='logo-mi' />
                            <img src={logo} alt="Logo de la empresa" className='logo-img' />
                            <Link className="navbar-brand" to="/">Mishop</Link>
                        </div>

                    </div>
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
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center me-auto">
                           

            
                           
                        </div>
                        {
                                isAuthenticated ?
                                

                                <React.Fragment>
                                     <div className="iconoUser" title='Ingresar'>
                                    <LogoutButton/>
                                    </div>
                              </React.Fragment>
                                :
                                <div className="iconoUsuario" title='Ingresar'>
                                <LoginButton/>
                            </div>
                            }
                         <div className='iconoCarrito' title='Carrito de compras'>
                                <Link className="nav-link" to="#"><FontAwesomeIcon icon={faCartShopping} /></Link>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
