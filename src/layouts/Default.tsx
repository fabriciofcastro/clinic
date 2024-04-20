import style from './style.module.scss'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div className={style.container}>
      <Outlet />
    </div>
  )
}

