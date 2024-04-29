
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/router'
import './styles/global.scss'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}
