import React from 'react';
import './Carousel.css';

function Carousel() {
  return (


    <div className='divCarousel'>

      
      <div className='container text-center mt-2 mb-4 '>
        <h1>Últimos lanzamientos</h1>
      </div>
      <div id="demo" className="carousel slide mb-4 align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner position-relative">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="https://i02.appmifile.com/511_operatorx_operatorx_xm/02/02/2023/2746f98afd667dc9b90a4bc7595fa8dc.jpg?q=100" alt="Los Angeles" className="d-block w-100"></img>
            <div className="carousel-caption" id='poco'>
              <h3>POCO X5 5G</h3>
              <p>La mejor pantalla acomodada a tus necesidades</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-13t/pc/3231f876d65d2830eeef385568823fe1.jpg?q=100" alt="Chicago" className="d-block w-100" />
            <div className="carousel-caption" id='mi'>
              <h3>XIAOMI</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://i02.appmifile.com/876_operator_sg/19/05/2023/a8efc8d0f1b69fea2d1f06274540fa07.jpg?f=webp" alt="New York" className="d-block w-100" />
            <div className="carousel-caption" id='redmi'>
              <h3>Redmi Note 12</h3>
              <p>Discover the new Redmi Note 12!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
