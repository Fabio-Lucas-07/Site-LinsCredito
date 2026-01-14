import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
<nav className='sticky top-0 z-50 w-full bg-[#013884] shadow-xl/20'>
      
      {/* Container Principal */}
      <div className='relative flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8'>

        {/* 1. LOGO */}
        {/* Mobile: Fica no fluxo normal. Desktop: Fica absoluto na esquerda */}
        <div className='flex items-center md:absolute md:left-10'>
          <img src={Logo} alt="Logo" className=' w-auto' />
        </div>

        {/* 2. BOTÃO HAMBÚRGUER (Só aparece no Mobile) */}
        <div className='flex md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white hover:text-gray-300 focus:outline-none'
          >
            {/* Ícone de Menu / X */}
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* 3. MENU DE LINKS (Desktop) */}
        {/* Usamos 'mx-auto' para centralizar, mas ele só aparece no Desktop */}
        <div className='hidden w-full md:flex md:items-center md:justify-center'>
          <ul className='flex flex-row gap-10 text-white'>
            <li><a href="#" className="nav-itens">Produtos</a></li>
            <li><a href="#" className="nav-itens">Sobre</a></li>
            <li><a href="#" className="nav-itens">Simulação</a></li>
            <li><a href="#" className="nav-itens">Contato</a></li>
          </ul>
        </div>

      </div>

      {/* 4. MENU MOBILE (A lista que abre ao clicar) */}
      {/* Fica fora do flex principal para cair para a linha de baixo */}
      {isOpen && (
        <div className='md:hidden bg-[#013276] px-2 pt-2 pb-3 space-y-1'>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Quem Somos</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Produtos</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Serviços</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Contato</a>
        </div>
      )}

    </nav>
  );
}


export default Navbar;