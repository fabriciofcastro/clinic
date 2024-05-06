import style from './style.module.scss'
import KeenSlider from '../../components/slider/sliderContainer'
import sublinhado from '../../components/assets/AspectRatio.svg'
import avatar from "../../components/assets/avatar.jpg"

export const Home = () => {


  return (

    <div className={ style.container }>

      <KeenSlider />

      <div className={ style.about }>

        <div className={ style.about_image }>
          <img src={ avatar } alt="" />
        </div>

        <div className={ style.about_text }>
          <h1>Sobre</h1>
          <div className={ style.about_header }>

            <img src={ sublinhado } alt="" />
            <h2>Li de Sá</h2>
            <p>
              Terapeuta de massagem certificada
            </p>
          </div>
          <div>


            <p>
              Sou um parágrafo. Aqui você pode adicionar seu texto.
              É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.
            </p>
          </div>

          <button type="button">Leia mais</button> 

        </div>
      </div>
    </div>
  )
}
