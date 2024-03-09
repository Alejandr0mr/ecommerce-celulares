import React from 'react'

function Carousel() {
  return (
    <div>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="la.jpg" alt="Los Angeles" class="d-block" style="width:100%"/>
    <div class="carousel-caption">
      <h3>Los Angeles</h3>
      <p>We had such a great time in LA!</p>
    </div>
  </div>
  <div class="carousel-item">
    <img src="chicago.jpg" alt="Chicago" class="d-block" style="width:100%"/>
    <div class="carousel-caption">
      <h3>Chicago</h3>
      <p>Thank you, Chicago!</p>
    </div> 
  </div>
  <div class="carousel-item">
    <img src="ny.jpg" alt="New York" class="d-block" style="width:100%"/>
    <div class="carousel-caption">
      <h3>New York</h3>
      <p>We love the Big Apple!</p>
    </div>  
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
    </div>
  )
}

export default Carousel