import style from './style.module.scss'
import acupuntura from '../../components/assets/Acupuntura1.png'
import KeenSlider from '../../components/slider/sliderContainer'



export const Home = () => {

   
  return (
    
    <div className={ style.container }>
      

      <h1>home</h1>
      <KeenSlider />
      <div className={ style.containerServices }>
        <div className={ `${style.cardsServices}` }>
          <h1>Acupuntura</h1>
          <img src={ acupuntura } alt="" />
        </div>
        <div className={ `${style.cardsServices}` }>
          <h1>Shiatsu </h1>
        </div>
        <div className={ `${style.cardsServices}` }>
          <h1>Florais de Bach</h1>
        </div>
        <div className={ `${style.cardsServices}` }>
          <h1>Shiatsu Pedras</h1>
        </div>

      </div>
    </div>
  )
}
