import Slider from 'react-slick';
import style from './style.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderMassage } from './slider1/slider';
import { SliderMassage2 } from './slider2/slider';
import { SliderMassage3 } from './slider3/slider';


export const SliderContainer = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }
  return (
    <div className={ style.container }>
      <div className={style.containerSlider}></div>
      <Slider { ...settings } className={ style.slider }>
        <SliderMassage />
        <SliderMassage2 />
        <SliderMassage3 />
      </Slider>
    </div>
  )
}
