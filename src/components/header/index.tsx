import { NavLink } from 'react-router-dom'
import style from './style.module.scss'
import Logo from '../assets/logo.png'
import LogoAss from '../assets/logoass.svg'

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={ Logo } alt='Logo. Mulher fazendo massagem' />   
        <img className={style.logo_image} src={LogoAss} alt="" />
        <h1>Li de Sá</h1>
      </div>
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">SOBRE</NavLink>
          </li>
          <li>
            <NavLink to="/services">SERVIÇOS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTATO</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
