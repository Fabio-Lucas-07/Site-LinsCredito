import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.tsx'
import { BrowserRouter, Route, Routes ,} from 'react-router-dom'
import Consulta from './pages/Consulta/Consulta.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/consulta' element={<Consulta/>} ></Route>
      <Route path='*' element={<h1>Not Fould</h1>}></Route>
    </Routes>
  </BrowserRouter>
)
