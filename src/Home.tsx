import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar.tsx'

import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.png'
import pic4 from './assets/fgts.png'
import transparencia from './assets/Transparência.png'
import atendimento from './assets/atendimento.png'
import sonhos from './assets/sonhos.png'
import agilidade from './assets/agilidade.png'

const Images = [
  { ImgSrc: pic1, Title: "LinsCrédito", text: `Soluções financeiras ao seu alcance` },
  { ImgSrc: pic2, Title: "Confiança", text: "Transparência em cada etapa" },
  { ImgSrc: pic3, Title: "Rapidez", text: "Crédito sem burocracia" },
  { ImgSrc: pic4, Title: "FGTS", text: "Antecipe seus sonhos agora" }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState(0);
  const [vezes, setVezes] = useState("");
  const [idade, setIdade] = useState(0);
  const [tipo, setTipo] = useState("")
  const [beneficio, setBeneficio] = useState(0);
  const [simulador, setSimulador] = useState(0);

  const simulacao = (beneficio:number, vezes:string ) => {
    if ( vezes == "96x") {
      setSimulador( beneficio * 0.35 / 0.02370)
    }else if (vezes == "48x" ) {
      setSimulador (beneficio * 0.35 / 0.03330)
    } else if(vezes == "36x") {
      setSimulador (beneficio * 0.35 / 0.0405)
    }
  }
    
  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % Images.length);
  //   }, 5000);
  //   return () => clearInterval(intervalo);
  // }, []);

  const handleRightSide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
  };
  const handleLeftSide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length)
  };
 
  const number = "27998236211";
  const mensagem = `Olá LinsCrédito! \nSou portador do CPF: *${cpf}*, tenho *${idade}* anos.\nDesejo realizar um empréstimo do tipo: *${tipo}* (Benefício: ${beneficio || 'N/A'})\nParcelamento desejado: *${vezes}* ${simulador.toFixed(2)}`;
  const linkWhatsapp = `https://wa.me/${number}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div className='font-sans bg-slate-50 overflow-x-hidden'>
      
      <div className='flex w-full top-0 z-50 shadow-md fixed'>
        <Navbar />
      </div>

      <div id='inicio' className='relative w-full h-[600px] max-md:h-[550px] bg-gray-900 overflow-hidden group'>
        <div
          className='w-full h-full flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Images.map((item, index) => (
            <div
              key={index}
              className='w-full h-full flex-shrink-0 bg-cover bg-center relative '
              style={{ backgroundImage: `url(${item.ImgSrc})`,
                      backgroundPosition: 'top',}}
            >
              <div className='absolute inset-0 bg-gradient-to-t from-[#042C4D] via-black/40 to-transparent flex flex-col justify-end pb-20 items-center text-white text-center px-4'>
                <h1 className='font-extrabold text-5xl md:text-7xl drop-shadow-lg mb-2 transform transition-all duration-700 translate-y-0 opacity-100'>
                  {item.Title}
                </h1>
                <p className='text-lg my-2 md:text-2xl font-light drop-shadow-md bg-green-600/80 px-4 py-1 rounded-full'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleLeftSide}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:cursor-pointer hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-10'
        >
          <i className="ri-arrow-left-s-line text-3xl"></i>
        </button>
        <button
          onClick={handleRightSide}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/10  hover:cursor-pointer hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-10'
        >
          <i className="ri-arrow-right-s-line text-3xl"></i>
        </button>
        <div id='produtos'></div>
      </div>

      <div  className='py-20 px-5 bg-gradient-to-b from-[#042C4D] to-[#02182b] text-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Nossos Produtos</h2>
            <div className='w-24 h-1 bg-green-500 mx-auto rounded-full'></div>
          </div>

          <div className='grid md:grid-cols-3 gap-15 lg:gap-14'>
            <div className='group relative bg-[#063b66] rounded-3xl p-8 pt-12 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-green-500/20 border border-white/5'>
              <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                <i className="ri-cash-line text-4xl text-white"></i>
              </div>
              <h3 className='text-2xl font-bold text-center mb-4 mt-4'>Antecipação FGTS</h3>
              <p className='text-gray-300 text-center mb-8 text-sm leading-relaxed'>
                O seu patrimônio crescendo mês a mês. Não espere anos para ver esse dinheiro. 
                Existem formas inteligentes de antecipar esses valores e realizar seus projetos agora.
              </p>
              <button className='w-full py-3 rounded-xl bg-green-600 font-bold hover:bg-green-500 hover:cursor-pointer transition-colors shadow-lg'>
                Simular Agora
              </button>
            </div>

            <div className='group relative bg-[#063b66] rounded-3xl p-8 pt-12 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-green-500/20 border border-white/5'>
              <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                <i className="ri-shake-hands-line text-4xl text-white"></i>
              </div>
              <h3 className='text-2xl font-bold text-center mb-4 mt-4'>Empréstimo Consignado</h3>
              <p className='text-gray-300 text-center mb-8 text-sm leading-relaxed'>
                Taxas de juros mais baixas do mercado e total conveniência. 
                Descontado diretamente na folha, garantindo prazos mais longos e parcelas que cabem no bolso.
              </p>
              <button className='w-full py-3 rounded-xl hover:cursor-pointer bg-green-600 font-bold hover:bg-green-500 transition-colors shadow-lg'>
                Simular Agora
              </button>
            </div>

            <div className='group relative bg-[#063b66] rounded-3xl p-8 pt-12 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-green-500/20 border border-white/5'>
              <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                <i className="ri-wallet-3-line text-4xl text-white"></i>
              </div>
              <h3 className='text-2xl font-bold text-center mb-4 mt-4'>Empréstimo Pessoal</h3>
              <p className='text-gray-300 text-center mb-8 text-sm leading-relaxed'>
                Alternativa rápida e flexível. Sem garantias complexas: o crédito é seu para usar como preferir. 
                Processos de aprovação dinâmicos e digitais.
              </p>
              <button className='w-full py-3 rounded-xl bg-green-600 font-bold hover:bg-green-500 hover:cursor-pointer transition-colors shadow-lg'>
                Simular Agora
              </button>
            </div>
          </div>
        </div>
        <div id='sobre' ></div>
      </div>

      <div  className='py-10 px-5 bg-[#02182b] h-250 md:h-auto'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center h-120 items-center justify-center'>
          
          <div className='flex flex-col items-center group '>
            <div className='bg-green-600 p-6 rounded-full mb-4 group-hover:bg-green-800  hover:scale-120 transition '>
                <img src={transparencia} alt="Transparência" className='h-16 w-16 object-contain' />
            </div>
            <h3 className='text-xl font-bold text-[#FFFFFF] mb-2'>Transparência Total</h3>
            <p className='text-gray-400 text-sm'>Sem letras miúdas. Explicamos cada detalhe para sua total segurança.</p>
          </div>

          <div className='flex flex-col items-center group'>
            <div className='bg-green-600 p-6 rounded-full mb-4 group-hover:bg-green-800  hover:scale-120 transition '>
                <img src={atendimento} alt="Atendimento" className='h-16 w-16 object-contain' />
            </div>
            <h3 className='text-xl font-bold text-[#FFFFFF] mb-2'>Atendimento Humanizado</h3>
            <p className='text-gray-400 text-sm'>De pessoas para pessoas. Com a paciência e respeito que você merece.</p>
          </div>

          <div className='flex flex-col items-center group'>
            <div className='bg-green-600 p-6 rounded-full mb-4 group-hover:bg-green-800  hover:scale-120 transition '>
                <img src={sonhos} alt="Sonhos" className='h-16 w-16 object-contain' />
            </div>
            <h3 className='text-xl font-bold text-[#FFFFFF] mb-2'>Foco em Sonhos</h3>
            <p className='text-gray-400 text-sm'>Nosso objetivo é ver você realizando seus planos e ajudando sua família.</p>
          </div>

          <div className='flex flex-col items-center group'>
            <div className='bg-green-600 p-6 rounded-full mb-4 group-hover:bg-green-800  hover:scale-120 transition '>
                <img src={agilidade} alt="Agilidade" className='h-16 w-16 object-contain' />
            </div>
            <h3 className='text-xl font-bold text-[#FFFFFF] mb-2'>Agilidade</h3>
            <p className='text-gray-400 text-sm'>Tecnologia para liberação rápida, sem filas e sem papelada desnecessária.</p>
          </div>

        </div>
      </div>

      <div id='simulacao' className='py-20 px-5 bg-gradient-to-b from-[#02182b] to-[#02182b] relative overflow-hidden'>
        <div className='relative max-w-4xl mx-auto bg-white/95 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row'>
          
          <div className='hidden md:flex md:w-1/3 bg-gradient-to-br from-green-600 to-green-800 p-8 flex-col justify-between text-white'>
             <div>
                <h3 className='text-3xl font-bold mb-4'>Vamos Simular?</h3>
                <p className='opacity-90'>Preencha seus dados ao lado e receba uma proposta personalizada no seu WhatsApp.</p>
             </div>
             <div className='text-8xl opacity-20 text-center'>
                <i className="ri-whatsapp-line"></i>
             </div>
          </div>

          <div className='fullw- md:w-2/3 p-8 md:p-12'>
            <h2 className='text-3xl font-bold text-[#042C4D] mb-8 text-center md:text-left'>Preencha seus dados</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-gray-700 text-sm'
                    >CPF</label>
                    <input 
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all'
                        type="text" 
                        placeholder="000.000.000-00"
                        maxLength={14}
                        onChange={(a) => setCpf(a.target.value)}
    
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold text-gray-700 text-sm'>Idade</label>
                    <input 
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all'
                        type="number"
                        placeholder="Anos"
                        onChange={(e) => setIdade(e.target.value)} 
                    />
                </div>
                 
            </div>

             <div className='flex flex-col gap-2 py-3'>
                    <label className='font-semibold text-gray-700 text-sm'>Valor do Beneficio</label>
                    <input 
                        className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all'
                        type="number"
                        placeholder="Ex : 1620,00"
                        onChange={(b) => setBeneficio(b.target.value)} 
                    />
                </div>

            <div className='flex flex-col gap-2 mt-6'>
                <label className='font-semibold text-gray-700 text-sm'>Quantas parcelas?</label>
                <div className='flex gap-2 items-center justify-center'>
                   {["36x", "48x", "96x"].map((botao) => (
                    <button 
                    key={botao}
                    className={`border-1 rounded-full w-12 h-12 items-center flex justify-center font-bold hover:cursor-pointer
                    ${vezes === botao 
                    ? 'bg-[#042C4D] text-white border-[#042C4D] scale-110' 
                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-blue-300' }
                      `}

                      onClick={() =>setVezes(botao)}>

                     {botao}
                    </button>))}
                </div>
            </div>

            <div className='mt-6'>
                <label className='font-semibold text-gray-700 text-sm mb-2 block'>Tipo de Empréstimo</label>
                <div className='grid grid-cols-3 gap-3'>
                    {['FGTS', 'Consignado', 'Pessoal'].map((option) => (
                        <button
                            key={option}
                            onClick={() => setTipo(option)}
                            className={`py-2 px-1 rounded-lg border text-sm font-medium transition-all text-[11px] hover:cursor-pointer ${
                                tipo === option 
                                ? 'bg-green-600 text-white border-green-600 shadow-md' 
                                : 'bg-white text-gray-500 border-gray-200 hover:border-green-400'
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className='mt-6'>
                <label className='font-semibold text-gray-700 text-sm mb-2 block'>Tipo do Benefício</label>
                <div className='flex gap-4 justify-center'>
                    {['21', '41', '32'].map((b) => (
                        <button
                            key={b}
                            onClick={() => setBeneficio(b)}
                            className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold transition-all hover:cursor-pointer ${
                                beneficio === b 
                                ? 'bg-[#042C4D] text-white border-[#042C4D] scale-110' 
                                : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-blue-300'
                            }`}
                        >
                            {b}
                        </button>
                    ))}
                </div>
            </div>

            <a 
                href={linkWhatsapp}
                target="_blank"
                rel="noreferrer"
                className='mt-8 w-full bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center 
                gap-2 hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/30'
                onClick={() => simulacao(beneficio, vezes)}
            >
                <i className="ri-whatsapp-line text-xl"></i>
                Simular no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <footer id ='contato' className='bg-[#02182b] text-white pt-16 pb-8 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12'>
            
            <div className='flex flex-col items-start'>
                <h2 className='text-3xl font-extrabold mb-4 tracking-tighter'>Lins<span className='text-green-500'>Crédito</span></h2>
                <div className='flex gap-4 mt-2'>
                    <a href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors'>
                        <i className="ri-instagram-line text-xl"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=27998236211" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors'>
                        <i className="ri-whatsapp-line text-xl"></i>
                    </a>
                </div>
            </div>

            <div>
                <h3 className='text-lg font-bold mb-4 border-b border-white/20 pb-2 inline-block'>Navegação</h3>
                <ul className='space-y-2 text-gray-400'>
                    <li><a href="#inicio" className='hover:text-green-400 transition-colors'>Início</a></li>
                    <li><a href="#produtos" className='hover:text-green-400 transition-colors'>Produtos</a></li>
                    <li><a href="#sobre" className='hover:text-green-400 transition-colors'>Sobre</a></li>
                    <li><a href="#simulacao" className='hover:text-green-400 transition-colors'>Simulação</a></li>
                </ul>
            </div>

            <div>
                <h3 className='text-lg font-bold mb-4 border-b border-white/20 pb-2 inline-block'>Fale Conosco</h3>
                <p className='text-gray-400 mb-4 text-sm'>Envie uma mensagem em nosso número, entraremos em contato o mais rápido possível!</p>
                <div className='flex items-center gap-3 text-green-400 font-bold text-2xl'>
                    <i className="ri-phone-line"></i>
                    (27) 99823-6211
                </div>
            </div>
        </div>

        <div className='mt-16 text-center text-gray-600 text-sm border-t border-white/5 pt-8'>
            <p>&copy; 2025 LinsCrédito - Todos os direitos reservados.</p>
            
        </div>
      </footer>
    </div>
  )
}