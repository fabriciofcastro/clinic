import { NavLink } from 'react-router-dom'
import style from './style.module.scss'
import Logo from '../assets/logo2.png'
import { FacebookLogo, InstagramLogo, LinkedinLogo, List } from 'phosphor-react'

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={ Logo } alt='Logo. Mulher fazendo massagem' />   
        <h1>Massagem Terapeutica</h1>
      </div>
      <nav className={style.navbar}>
        <div className={style.redesocial}>
          <FacebookLogo />
          <LinkedinLogo />
          <InstagramLogo />
          <List className={ style.iconHambuguer } />
        </div>
       
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
