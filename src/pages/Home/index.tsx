import style from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageSlider } from './image_slider'
import { EffectFade } from 'swiper/modules';

export const Home = () => {
  return (
    <div className={style.container}>
      <Swiper
        slidesPerView={ 1 }
        pagination={{clickable: true}}
        navigation
        modules={[EffectFade]}
        effect="fade"
        
      >
        {
          ImageSlider.map((item, index) => (
            <SwiperSlide key={ index } className={style.swiper_container} >
              <img className={style.slide_img} src={ item.img } alt="" />
              <p className={style.slide_message}>
                {item.massage}
              </p>
            </SwiperSlide>
          ))
        }
      </Swiper>


    </div>
  )
}
