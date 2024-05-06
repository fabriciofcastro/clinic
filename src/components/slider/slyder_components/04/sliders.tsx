import style from './style.module.scss'
import Florais_Bach from '../../../assets/terapia-florais-de-Bach.jpg'

export const Slider_4 = () => {
  return (
    <div className={ style.slide1_container }>
      <div className={ `${style.box_text}` }>
        <div className={ style.content_text }>
          <h3>LIBERTE SUA MENTE E SEJA FELIZ</h3>
          <h1>
          Equilíbrios emocionais e mentais com terapia Florais de Bach.
          </h1>
          <p>
          Cada essência floral é destinada a tratar um aspecto emocional particular, como medo, ansiedade, tristeza, raiva ou falta de confiança.
          </p>

          <button type="button">Saber mais</button>

        </div>
      </div>
      <div className={ `${style.box_image}` }>
        <img src={Florais_Bach} alt="" />
      </div>
    </div>
  )
}
