import style from './style.module.scss'
import AspectRation from '../../components/assets/AspectRatio.svg'
import { ButtonDefault } from '../../components/button/buttonDefault'

export const Contact = () => {
  return (
    <div className={ style.container }>

      <div className={ style.content }>
        <div className={ style.box_contact }>

          <div className={ style.header_contact }>
            <h1>Contato</h1>
            <img src={ AspectRation } alt="Imagem que represenha um sublinhado" />
          </div>
          <div className={ style.info_contact }>
            <div>
              <p>
                (11) 3456-7890 | info@meusite.com
              </p>
            </div>
            <div>
              <p>
                Rua Prates, 194 - Bom Retiro, São Paulo - SP, 01121-000
              </p>
            </div>
          </div>
          <form action="">
            <div className={ style.form_gridContainer }>
              <div className={ style.box_contact1 }>
              
                <div className={ `${style.text_input}` }>                  
                  <label htmlFor="name">Nome *</label>
                  <input type="text" id="name" required />
                </div>

                <div className={ `${style.text_input}` }>
                  <label htmlFor="Sobrenome">Sobrenome *</label>
                  <input type="text" id="Sobrenome" required />
                </div>
              </div>


              <div className={ `${style.text_input} ${style.input_email}` }>
                <label htmlFor="email">E-mail *</label>
                <input type="text" id="email" required />
              </div>

              <div className={ `${style.text_input} ${style.input_textarea}` }>
                <label htmlFor="message">Dite sua mensagem *</label>
                <textarea id="message" placeholder='...' required>

                </textarea>
              </div>
            </div>
            <div className={style.buttonForm}>
               <ButtonDefault text='Enviar'/>
            </div>
           
          </form>
        </div>

      </div>


    </div>
  )
}