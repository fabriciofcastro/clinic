import style from './style.module.scss'

export const SliderMassage = () => {
  return (
    <div className={style.container}>
     <div className={style.boxText}>
      <p>MASSAGEM PREMIUM</p>
      <h1>
        A ACUPUNTURA PARA CORRIGIR DESENQUILÍBRIO DA ENERGIA
      </h1>
      <p>
        Eleve sua saúde e bem estar, para uma vida leve e feliz!
      </p>
      <p>Parcelamos em 12x sem juros</p>
      <button>Saber mais</button>
     </div>
     <div className={style.boxImage}></div>
    </div>
  )
}



