import style from './style.module.scss'
import acupuntura from '../../../assets/acupuntura3.jpg'

export const Slider_2 = () => {
  return (
    <div className={ style.slide1_container }>
      <div className={ `${style.box_text}` }>
        <div className={ style.content_text }>
          <h3>BOA SAÚDE É O BEM MAIS VALIOSO</h3>
          <h1>
            Viva sem tensão durante o dia com a acupuntura
          </h1>
          <p>
             "Esperar ter sede para cavar um poço pode ser tarde demais"
          </p>

          <button type="button">Saber mais</button>

        </div>
      </div>
      <div className={ `${style.box_image}` }>
        <img src={acupuntura} alt="" />
      </div>
    </div>
  )
}
