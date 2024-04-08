import React from 'react'
// import logogoogle from './img/logogoogle.svg'
// import inicio from './img/datos-del-usuario.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './SignupStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faUserPlus, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <div>
            <Header />

            <div className="container d-flex justify-content-center align-items-center min-vh-100 body" style={{ margin: '100px 100px' }}>
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    {/*  Box */}
                    <div className="col-md-12 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4 text-center">
                                <h2 >Formulario de registro</h2>
                            </div>
                            <form>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Nombre" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faUserPlus} />
                                    </span>
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Apellido" />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Correo electronico" />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                    <FontAwesomeIcon icon={faMobileScreen} />
                                    </span>
                                    <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Celular" />
                                </div>

                                {/* Para las contraseñas */}
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className="input-group mb-1">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                            <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Contraseña" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group mb-1">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                            <input type="password2" className="form-control form-control-lg bg-light fs-6" placeholder="Repetir contraseña" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-3 mt-3">
                                    <button className="btn btn-lg btn-primary w-100 fs-6">Iniciar sesión</button>
                                </div>

                            </form>
                            <div className="row">
                                <small>¿Ya tienes cuenta?<Link className="nav-link" to="/login"><a href="#" >Inicia sesión aquí</a></Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup