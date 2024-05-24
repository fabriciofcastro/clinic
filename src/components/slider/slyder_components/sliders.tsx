import style from './style.module.scss'
import { ButtonDefault } from '../../button/buttonDefault'


interface TextSlideProps {
  title: string
  content: string
  message: string
  image: string
}

export const Slider = ({ title, content, message, image }: TextSlideProps) => {
  return (
    <div className={ style.slide1_container }>
      <div className={ `${style.box_text}` }>
        <div className={ style.content_text }>
          <h3>{ title }</h3>
          <h1>
            { content }
          </h1>
          <p>
            { message }
          </p>

          <ButtonDefault text="Saber mais" />
        </div>
      </div>
      <div className={ `${style.box_image}` }>
        <img src={ image } alt="" />
      </div>
    </div>
  )
}
