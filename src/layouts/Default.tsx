import { Footer } from '../components/footer'
import { Header } from '../components/header'
import style from './style.module.scss'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div className={style.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
