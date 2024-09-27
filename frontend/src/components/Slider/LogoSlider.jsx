import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./LogoSlider.css";
import Almar from "../../assets/logos/almar.jpeg";
import Cardenal from "../../assets/logos/cardenal.jpeg";
import Deulrel from "../../assets/logos/deulrel.png";
import Ferraris from "../../assets/logos/ferraris.jpeg";
import FraccionadoraSanJuan from "../../assets/logos/fraccionadora-san-juan.jpeg";
import LaboratorioMemis from "../../assets/logos/laboratorio-memis.jpeg";
import Matilde from "../../assets/logos/matilde.jpeg";
import MolinosCarmen from "../../assets/logos/molinos-carmen.jpeg";
import Siglo from "../../assets/logos/siglo.jpeg";
import Tea from "../../assets/logos/tea.jpeg";
import Vidalac from "../../assets/logos/vidalac.jpeg";
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
        <img src={Almar} alt="" />
      </div>
      <div className='slide'>
        <img src={Cardenal} alt="" />
      </div>
      <div className='slide'>
        <img src={Deulrel} alt="" />
      </div>
      <div className='slide'>
        <img src={Ferraris} alt="" />
      </div>
      <div className='slide'>
        <img src={FraccionadoraSanJuan} alt="" />
      </div>
      <div className='slide'>
        <img src={LaboratorioMemis} alt="" />
      </div>
      <div className='slide'>
        <img src={Matilde} alt="" />
      </div>
      <div className='slide'>
        <img src={MolinosCarmen} alt="" />
      </div>
      <div className='slide'>
        <img src={Siglo} alt="" />
      </div>
      <div className='slide'>
        <img src={Tea} alt="" />
      </div>
      <div className='slide'>
        <img src={Vidalac} alt="" />
      </div>
    </Slider>
    </div>
  );
}

export default LogoSlider