import style from './style.module.scss'
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

export const Footer = () => {

  const date = new Date().getFullYear().toLocaleString("pt-br")
  return (
    <footer className={ style.container }>
      <div className={ style.termos }>
        <ul>
          <li><a href="#">Política de Cookies</a></li>
          <li><a href="#">Termos e Condições</a></li>
          <li><a href="#">Política de Privacidade</a></li>
        </ul>
      </div>
     
      <div className={ style.logo }>
        <img src={ Logo } alt="logo" />
        
        <div className={ style.contact }>
          <ul>
            <li>(11) 3456-7890</li>
            <li>|</li>
            <li> info@meusite.com</li>
          </ul>


        </div>
        <div className={style.company}>
          <p>&#169; { date } Li de Sá &#174; criado orgulhosamente por        <Link to="https://www.fabriciofcastro.com.br" target='_blank'> 
             fabriciofcastro.com.br
          </Link>
          
          </p>
        </div>

      </div>
      
    </footer>
  )
}
