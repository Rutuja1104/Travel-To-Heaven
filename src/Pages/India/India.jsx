import React from 'react'
import './India.css'
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'
import AndamanTour from './AndamanTour/AndamanTour'
import Sikkim from './Sikkim/Sikkim'
import Goa from './Goa/Goa'
import Kashmir from './Kashmir/Kashmir'
import Kasol from './Himachal/Kasol'
import Darjeeling from './Darjeeling/Darjeeling'
import Munnar from './Kerala/Munnar'

const India = () => {
    // Initialize the carousel with a faster interval
var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
    interval: 2000 // Set interval to 2 seconds (2000 ms)
  });
  
    return (
        <div>
        <div id="carouselExampleIndicators" className="carousel slide m-6" data-bs-ride="carousel" data-bs-interval="2000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 

<AndamanTour/>
      <Goa />
      <Sikkim />
      <Kashmir />
      <Kasol />
      <Darjeeling />
      <Munnar /> 



        </div>
    )
}

export default India
