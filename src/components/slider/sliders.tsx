import style from './style.module.scss'

export const Slider_1 = () => {
  return (
    <div className={ style.slide1_container }>
      <div className={ `${style.box_text}` }>
        <div className={ style.content_text }>
          <h3>BEM-VINDO</h3>
          <h1>
            Aprendendo a Crescer com AI
          </h1>
          <p>
            com a nossa infraestrutura inteligent, as
            empresas estão cultivando novas estratégias agrículas
          </p>

          <button type="button">Saber mais</button>

        </div>
      </div>
      <div className={ `${style.box_image}` }></div>
    </div>
  )
}
