import React from 'react';
import logo from './logo.png';

function Footer() {
  return (
    <div>
      <footer className='bg-light text-dark pt-5 pb-4'>
        <div className='container text-center text-md-start'> 
        <hr className='mb-4'></hr>
          <div className='row text-center text-md-start align-items-center'>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-6 justify-content-center'>
              <img src={logo} alt="Logo de la empresa" className="img-fluid d-block mx-auto" />
            </div>

            <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Nosotros</h5>
              <hr className='mb-4'></hr>
              <p>En CelStore, tu destino confiable para comprar celulares online. Ofrecemos una amplia gama de dispositivos de última generación a precios competitivos, respaldados por un servicio al cliente excepcional. ¡Encuentra el dispositivo perfecto para ti hoy mismo!</p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Dejanos ayudarte</h5>
              <hr className='mb-4'></hr>
              <p><a href='#' className='text-dark'>Tu cuenta</a></p>
              <p><a href='#' className='text-dark'>Tu ordenes</a></p>
              <p><a href='#' className='text-dark'>Manejo de cuenta</a></p>
              <p><a href='#' className='text-dark'>Ayuda</a></p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Has dinero</h5>
              <hr className='mb-4'></hr>
              <p><a href='#' className='text-dark'>#</a></p>
              <p><a href='#' className='text-dark'>Tu ordenes</a></p>
              <p><a href='#' className='text-dark'>Manejo de cuenta</a></p>
              <p><a href='#' className='text-dark'>Ayuda</a></p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
              <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contacto</h5>
              <hr className='mb-4'></hr>
              <p><a href='#' className='text-dark me-3'>Facebook</a></p>
              <p><a href='#' className='text-dark me-3'>correo</a></p>
              <p><a href='#' className='text-dark'>Whatsapp</a></p>
            </div>

            <hr className='mb-4'></hr>

            <p className='text-center'>Todos los derechos reservados a 
              <a href='#'>
                  <strong className='text-primary'> Alejandro Developer</strong>
              </a>
            </p>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
