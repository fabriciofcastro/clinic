import style from './style.module.scss'
import ventosa from '../../../assets/terapia-de-ventosa.jpg'
import { ButtonDefault } from '../../../button/buttonDefault'

export const Slider_3 = () => {
  return (
    <div className={ style.slide1_container }>
      <div className={ `${style.box_text}` }>
        <div className={ style.content_text }>
          <h3>LIBERTE-SE DA DOR</h3>
          <h1>
            Viva melhor com a técnica ventosaterapia
          </h1>
          <p>
          Ventosaterapia destacam-se a melhora da circulação sanguínea e linfática, alívio da dor muscular, redução do estresse e ansiedade, diminuição da celulite e melhora da aparência da pele.
          </p>

          <ButtonDefault text='Saber mais' />

        </div>
      </div>
      <div className={ `${style.box_image}` }>
        <img src={ventosa} alt="" />
      </div>
    </div>
  )
}
