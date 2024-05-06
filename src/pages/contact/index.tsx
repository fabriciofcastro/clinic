import style from './style.module.scss'

export const Contact = () => {
  return (
    <div className={ style.container }>
      <div className={ style.content }>
        <div className={ style.content_form }>

          <div className={ style.title }>
            <h2>Contato</h2>
          </div>
          <div className={ style.infor_contact }>
            <p>
              (11) 3456-7890 | info@meusite.com
            </p>
            <p> Rua Prates, 194 - Bom Retiro, São Paulo - SP, 01121-000
            </p>

          </div>
          <div className={ style.container_form }>
            <form action="POST">
              <div>
                <div>
                  <label htmlFor="name">Nome *</label>
                  <input type="text" id="name" required/>
                </div>
                <div>
                  <label htmlFor="firstname">Sobrenome *</label>
                  <input type="text" id="firstname" required />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="email">E-mail *</label>
                  <input type="email" id="email" required/>
                </div>
                
              </div>
              <div>
                <div>
                  <label htmlFor="textarea">E-mail *</label>
                 <textarea name="textarea" id="textarea" ></textarea>
                </div>
                
              </div>

              <button type='submit'>Enviar</button>

            </form>
          </div>

        </div>
      </div>


    </div>
  )
}