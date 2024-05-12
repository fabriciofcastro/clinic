import style from './style.module.scss'

interface TextButtonProps {
  text: string
}

export const ButtonDefault = ({text}: TextButtonProps) => {
  return (
    <button className={style.button}>{text}</button>
  )
}
