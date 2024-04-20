import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/Default'
import { Services } from '../pages/services'
import { About } from '../pages/about'
import { Contact } from '../pages/contact'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
