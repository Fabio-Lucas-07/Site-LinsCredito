import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png';
import path from 'path';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='sticky top-0 z-50 w-full bg-[#063b66] shadow-xl/20'>

      
      <div className='relative flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8'>

        
        <div className='flex items-center md:absolute md:left-10'>
          <a href="#inicio">
            <img src={Logo} alt="Logo" className=' w-auto' />
          </a>

        </div>

       
        <div className='flex md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white hover:text-gray-300 focus:outline-none'
          >
           
            {isOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </button>
        </div>

      
        <div className='hidden w-full md:flex md:items-center md:justify-center '>
          <ul className='flex flex-row gap-10 text-white'>
            <li><a href="#produtos" className="nav-itens ">Produtos</a></li>
            <li><a href="#sobre" className="nav-itens">Sobre</a></li>
            <li><a href="#simulacao" className="nav-itens">Simulação</a></li>
            <li><a href="#contato" className="nav-itens">Contato</a></li>
          </ul>
        </div>

      </div>

      {isOpen && (
        <div className='md:hidden bg-[#063b66] px-2 pt-2 pb-3 space-y-1'>
          <a href="#produtos" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Produtos</a>
          <a href="#sobre" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Sobre</a>
          <a href="#simulacao" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Simulação</a>
          <a href="#contato" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Contato</a>
        </div>
      )}

    </nav>
  );
}


export default Navbar;