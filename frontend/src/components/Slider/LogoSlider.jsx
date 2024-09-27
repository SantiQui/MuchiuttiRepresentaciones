import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css"
const LogoSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container py-5">
    <Slider {...settings}>
      <div className='slide'>
        <img src="../src/assets/logos/almar.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/cardenal.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/deulrel.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/ferraris.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/fraccionadora-san-juan.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/laboratorio-memis.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/matilde.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/siglo.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/molinos-carmen.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/tea.jpeg" alt="" />
      </div>
      <div className='slide'>
        <img src="../src/assets/logos/vidalac.jpeg" alt="" />
      </div>
    </Slider>
    </div>
  );
}

export default LogoSlider