import { NavLink } from 'react-router-dom'
import style from './style.module.scss'

export const Home = () => {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">SOBRE</NavLink>
        <NavLink to="/services">SERVIÇOS</NavLink>
        <NavLink to="/contact">CONTATO</NavLink>
      </nav>
    </div>
  )
}
