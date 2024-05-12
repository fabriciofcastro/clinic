import style from './style.module.scss'
import Reflexologia from '../../../assets/reflexologia.jpg'
import { ButtonDefault } from '../../../button/buttonDefault'

export const Slider_5 = () => {
  return (
    <div className={ style.slide1_container }>
      <div className={ `${style.box_text}` }>
        <div className={ style.content_text }>
          <h3>RELAXE SEU CORPO TODO </h3>
          <h1>
            A reflexologia é indicada para complementar o tratamento de:
          </h1>
          <div className={style.reflex_beneficio}>
            <ul>
              <li>Estresse e ansiedade;</li>
              <li>Depressão;</li>
              <li>Insônia;</li>
              <li>Prisão de ventre;</li>
              <li>Labirintite;</li>
              <li>Dor no fundo das costas;</li>
              <li>Neuropatia periférica.</li>

            </ul>
          </div>

          <ButtonDefault text='Saber mais' />

        </div>
      </div>
      <div className={ `${style.box_image}` }>
        <img src={ Reflexologia } alt="" />
      </div>
    </div>
  )
}
