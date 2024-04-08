import React from 'react'
import logogoogle from './img/logogoogle.svg'
import inicio from './img/datos-del-usuario.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './LoginStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center min-vh-100 body" style={{ marginTop: '50px' }}>
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* Left Box */}
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#ff7d00' }}>
            <div className="featured-image mb-3">

              <img src={inicio} className="img-fluid" style={{ width: '250px' }} />
            </div>
            <p className="text-white fs-2 text-center" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}>Necesitas verificarte</p>
            <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: "'Courier New', Courier, monospace" }}>Inicia sesión para una mayor experiencia</small>
          </div>

          {/* Right Box */}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hola, bienvenido devuelta</h2>
                <p>Nos alegramos de verte de nuevo.</p>
              </div>
              <form>
                <div className="input-group mb-3">

                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Correo electronico" />

                </div>

                <div className="input-group mb-1">
                <span className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Contraseña" />
                </div>

                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="formCheck" />
                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Recuerdame</small></label>
                  </div>
                  <div className="forgot">
                    <small><a href="#">¿Olvidaste tu contraseña?</a></small>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6">Iniciar sesión</button>
                </div>

              </form>

              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img src={logogoogle} style={{ width: '20px' }} className="me-2" />
                  <small>Inicia sesión con Google</small>
                </button>
              </div>

              <div className="row">
                <small>¿No tienes una cuenta?<Link className="nav-link" to="/signup"><a href="#" >Registrate aquí</a></Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login