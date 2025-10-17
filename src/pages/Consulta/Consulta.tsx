import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Consulta() {
  return (
    <div>
      <Link to={"/"}>
        <button type='button' className='border w-10 h-10 mr-auto bg-[#FF0000] rounded-2xl '>Voltar</button>
      </Link>
      <div className="flex  items-center justify-center">

        <div className="flex  flex-col bg-[#013884] h-200 w-450 rounded-4xl items-center justify-center p-10 text-white shadow-xl/20 " >
          <h1 className='text-ligth font-bold text-3xl text-[#058605]'>Simulação</h1>
          <div className='flex h-150 w-380 bg-[#012047] rounded-2xl m-10'>

          </div>
        </div>
      </div>
    </div>
  )
}
