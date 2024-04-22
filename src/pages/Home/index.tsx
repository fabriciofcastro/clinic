import style from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageSlider } from './image_slider'
import { EffectFade } from 'swiper/modules';
import Avatar from '../../components/assets/avatar.png'

export const Home = () => {
  return (
    <div className={style.container}>
      <Swiper
        className={style.swiper_container}
        slidesPerView={ 1 }
        pagination={{clickable: true}}
        navigation
        modules={[EffectFade]}
        effect="fade"
        
      >
        {
          ImageSlider.map((item, index) => (
            <SwiperSlide key={ index } className={style.swiperslide} >
              <img className={style.slide_img} src={ item.img } alt="" />
              <p className={style.slide_message}>
                {item.massage}
              </p>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className={style.avatar}>
        <img src={Avatar} alt="" />
      </div>

    </div>
  )
}
