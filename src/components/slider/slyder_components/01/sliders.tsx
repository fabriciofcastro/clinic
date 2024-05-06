import style from './style.module.scss'
import massage from '../../../assets/relaxation_rock2.jpg'

export const Slider_1 = () => {
  return (
    <div className={ style.slide1_container }>
      <div className={ `${style.box_text}` }>
        <div className={ style.content_text }>
          <h3>BEM ESTAR O TEMPOR TODO</h3>
          <h1>
            Relaxe, renove-se, renasça
          </h1>
          <p>
            MASSAGEM TERAPÊUTICA RESTAURADORA
          </p>

          <button type="button">Saber mais</button>

        </div>
      </div>
      <div className={ `${style.box_image}` }>
        <img src={ massage } alt="" />
      </div>
    </div>
  )
}