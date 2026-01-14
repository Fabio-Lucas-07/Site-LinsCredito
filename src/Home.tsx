import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
//-------------Imporatação Nav-bar----------------
import Navbar from './components/navbar.tsx'

//-------------Importação de imamgens-------------

import Insta from './assets/instaLogo.png'
import Whats from './assets/whatsLogo.png'
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import pic4 from './assets/fgts.png'
import transparencia from './assets/Transparência.png'
import atendimento from './assets/atendimento.png'
import sonhos from './assets/sonhos.png'
import agilidade from './assets/agilidade.png'




const Images = [
  {
    ImgSrc: pic1,
    Title: "LinsCrédito",
    text: `testando`
  },
  {
    ImgSrc: pic2,
    Title: ""
  },
  {
    ImgSrc: pic3,
    Title: ""
  },
  {
    ImgSrc: pic4,
    Title: ""
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState(0);
  const [vezes, setVezes] = useState(0);
  const [idade, setIdade] = useState(0);
  const [tipo, setTipo] = useState("")

  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % Images.length);
  //   }, 3000);
  //   return () => clearInterval(intervalo);
  // }, []);

  const handleCpf = (event) => {
    setCpf(event.target.value);
  };
  const handleIdade = (event) => {
    setIdade(event.target.value);
  };
  const handleValor = (event) => {
    setValor(event.target.value);
  };
  const handleVezes = (event) => {
    setVezes(event.target.value);
  };
  const handleRightSide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
  };
  const handleLeftSide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length)
  };
  const handleChange = (event) => {
    setTipo(event?.target.value)
  };

  // Variaveis para guardar número e mensagem de texto
  
  const number = "27998236211";
  const mensagem = `Olá, sou portador do CPF: ${cpf} tenho ${idade} anos e 
  desejo realizar um empréstimo ${tipo} em ${vezes}x`;
  const linkWhatsapp = `https://wa.me/${number}?text=${encodeURIComponent(mensagem)}`;



  return (

    <div className='body bg-[#034C8C] m-0  overflow-hidden'>
      <div >
        <Navbar />
      </div>
      <div className='mother flex flex-col '>
        <div className=''>

          {/* Inicio do Slider de fotos */}
          <div className='w-full h-[600px] max-sm:h-screen bg-white relative group overflow-hidden max-sm:h-80'>


            <div
              className='w-full h-full flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >

              {Images.map((item, index) => (
                <div
                  key={index}
                  className='w-full h-full flex-shrink-0 bg-center'
                  style={{
                    backgroundImage: `url(${item.ImgSrc})`,
                    backgroundSize: '100% 100%'
                  }}
                ><div className='flex w-full h-full justify-end  items-center left-10 text-white '>
                    <div className='flex flex-col bg-black/50 h-full w-full items-center justify-center'>
                      <h1 className='font-extrabold text-6xl border-b-4'>{item.Title}</h1>
                      <p className='flex justify-center items-center p-4 '>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <button
              className='bg-transparent  text-white absolute top-1/2 right-5 -translate-y-1/2  
              rounded-full p-2 text-4xl hover:cursor-pointer hover:bg-black/50 transition duration-150 z-10
              max-sm:scale-50 max-sm:right-0'
              onClick={handleRightSide}
            >
              <i className="ri-arrow-right-circle-fill"></i>
            </button>


            <button
              className='bg-transparent text-white absolute top-1/2 left-5 -translate-y-1/2 
              rounded-full p-2 text-4xl hover:cursor-pointer hover:bg-black/50 transition duration-150 z-10
              max-sm:scale-50 max-sm:left-0'
              onClick={handleLeftSide}
            >
              <i className="ri-arrow-left-circle-fill"></i>
            </button>
          </div>
        </div>
        {/* Fim do Slide de fotos */}

        {/* Produtos da Empresa */}
        <div className='flex flex-col w-full h-auto max-sm:h-325 justify-center items-center gap-1 bg-[#042C4D] '>

          <div className='flex flex-row gap-10 m-30 max-sm:scale-60 max-sm:flex-col'>

            <div className="relative w-120 h-150 bg-blue-900 rounded-2xl text-center pt-16 pb-8 px-6 shadow-xl mt-10 text-white ">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-600 rounded-full flex flex-col items-center justify-center 
             border-gray-100 shadow-sm text-white text-5xl">
                <i class="ri-cash-line "></i>
              </div>
              <p>O FGTS (Fundo de Garantia do Tempo de Serviço) não é apenas um direito trabalhista;
                é o seu patrimônio crescendo mês a mês. Depositado pela empresa, esse valor funciona
                como uma reserva de segurança para momentos importantes — como a compra da casa própria,
                uma aposentadoria mais tranquila ou aquele imprevisto que ninguém planeja.
                Mas aqui está o segredo: você não precisa esperar anos para ver esse dinheiro.Hoje,
                existem formas inteligentes de antecipar esses valores e realizar seus projetos agora.
                Quer descobrir quanto você tem disponível e como usar isso a seu favor? Vamos conversar!</p>

               <button type='button' className='rounded-xl bg-[#058605] text-white cursor-pointer h-15 w-100 
                transition duration-500 hover:bg-[#035703] shadow-xl/15 flex bottom-10 left-1/2 -translate-x-1/2 absolute items-center justify-center ' >
                  Simular
                </button>

            </div>
            <div className="relative w-120 h-150 bg-blue-900 rounded-2xl text-center pt-16 pb-8 px-6 shadow-xl mt-10 text-white ">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-600 rounded-full flex items-center justify-center 
             border-gray-100 shadow-sm text-white text-5xl">
                <i class="ri-shake-hands-line"></i>
              </div>
              <div className=''>
                <p>O Empréstimo Consignado é a solução ideal para quem busca as taxas de juros mais baixas do mercado e
                  total conveniência. Por ser descontado diretamente na folha de pagamento, ele oferece uma segurança maior
                  tanto para quem empresta quanto para quem recebe, garantindo prazos mais longos e parcelas que cabem no
                  seu bolso sem sobressaltos. É a oportunidade perfeita para organizar sua vida financeira, quitar dívidas
                  caras ou realizar aquele projeto antigo com a tranquilidade de saber exatamente quanto vai pagar.
                  Sem burocracia excessiva e com liberação rápida, o crédito consignado transforma sua estabilidade
                  profissional em uma ferramenta para conquistar seus objetivos agora. Quer saber qual o limite disponível
                  para você? Vamos conversar!</p>

                <button type='button' className='rounded-xl bg-[#058605] text-white cursor-pointer h-15 w-100 
                transition duration-500 hover:bg-[#035703] shadow-xl/15 flex bottom-10 left-1/2 -translate-x-1/2 absolute items-center justify-center ' >
                  Simular
                </button>

              </div>


            </div>
            <div className="relative w-120 h-150 bg-blue-900 rounded-2xl text-center pt-16 pb-8 px-6 shadow-xl mt-10 text-white ">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-600 rounded-full flex flex-col items-center justify-center 
             border-gray-100 shadow-sm text-white text-5xl">
                <i class="ri-wallet-3-line"></i>
              </div>
              <p>O Empréstimo Pessoal é a alternativa rápida e flexível para quando a vida exige agilidade. Diferente de outras
                modalidades, ele não requer garantias complexas ou uma finalidade específica: o crédito é seu para usar como
                preferir, seja para uma emergência, uma viagem inesperada ou para aproveitar uma oportunidade única de negócio.
                Com processos de aprovação cada vez mais dinâmicos e digitais, você ganha o fôlego financeiro necessário com a
                liberdade de escolher o plano de parcelamento que melhor se adapta ao seu planejamento mensal. É o dinheiro na
                mão com a transparência que você merece para retomar o controle das suas finanças ou dar o próximo passo nos
                seus planos. Precisa de crédito rápido e sem complicações? Vamos conversar!</p>
             
                
                <button type='button' className='rounded-xl bg-[#058605] text-white cursor-pointer h-15 w-100 
                transition duration-500 hover:bg-[#035703] shadow-xl/15 flex bottom-10 left-1/2 -translate-x-1/2 absolute items-center justify-center ' >
                  Simular
                </button>
              
            </div>
            
          </div>
        
        </div>
        <div className='flex flex-row justify-center w-auto h-150 max-sm:h-325 max-sm:gap-10 items-center gap-10 ml-45 mr-45 max-sm:flex-col max-md:flex-col max-lg:flex-col max-sm:scale-80 max-sm:gap-0 mb-10'>
            <div className='produtos items-center  '>
              <h1>Transparencia Total</h1>
              <img src={transparencia} alt="" className='h-30 m-5' />
              <p>Com a LinsCrédito não existem letras miúdas. Explicamos cada detalhe do seu contrato de forma simples e clara, 
                para que você tome sua decisão com total tranquilidade e segurança.</p>
            </div>
            <div className='produtos items-center '>
              <h1>Atendimento Humanizado</h1>
              <img src={atendimento} alt="" className='h-30 m-5' />
              <p>Mais do que números, lidamos com histórias de vida. Nosso atendimento é feito de pessoas para pessoas,
                 com a paciência, o respeito e a atenção que você merece.</p>

            </div>
            <div className='produtos items-center '>
              <h1>Compromisso com Sonhos</h1>
              <img src={sonhos} alt="" className='h-30 m-5' />
              <p>O crédito é apenas uma ferramenta; o nosso verdadeiro objetivo é ver você realizando aquela viagem, 
                reformando a casa ou ajudando a família. O seu sonho é a nossa meta</p>
            </div>
            <div className='produtos '>
              <h1>Agilidade Desburocratizada</h1>
              <img src={agilidade} alt="" className='h-30 m-5' />
              <p>Sabemos que quem tem planos tem pressa. Utilizamos tecnologia para tornar a liberação do seu crédito 
              rápida, sem filas e sem papelada desnecessária</p>

            </div>
          </div>
        

        <div className=''>
          <div className='flex flex-col justify-center items-center h-auto w-full gap-20 max-sm:h-165```````````````````````````````````````````````` max-sm:scale-100 bg-[#042C4D] p-20'>

            <div className="flex flex-col bg-white w-auto h-auto rounded-2xl shadow-lg p-8 items-center gap-10 max-sm:scale-70"> 
              <div>
                <h1 className='font-bold text-5xl text-[#042C4D]'>Simulação </h1>
              </div>
              <div className=' flex flex-col gap-3'>
                <label className='titulos'
                >CPF</label>
                <input className='box-input' id="cpf" type="text"
                  onChange={handleCpf} />

                <label className='titulos'>Idade</label>
                <input className='box-input' type="number"
                onChange={handleIdade} />

                <label className='titulos'>Quantas vezes?</label>
                <div className='flex flex-row gap-5 items-center '>
                  <input className='w-80 h-10 border border-gray-300 rounded-md' type="number" 
                  onChange={handleVezes}/>
                  <div className='flex w-15 h-6 bg-[#C0C0C0] rounded-md text-[#4F4F4F] items-center justify-center text-xs'>Max 96x </div>
                </div>

                <label className='titulos'>Tipo de Empréstimo</label>

                <div className='flex flex-col gap-5 items-center'>
                  <div className='flex flex-row gap-10 '>
                    <div className="input-container ">
                      <input
                        id="fgts"
                        type="radio"
                        className="tipo peer"
                        value="FGTS"
                        name="tipo"
                        onChange ={handleChange}
                      />

                      <label htmlFor="fgts">FGTS</label>

                    </div>
                    <div className="input-container">
                      <input
                        id="consignado"
                        type="radio"
                        className="tipo peer"
                        value="Consignado"
                        name="tipo"
                        onChange ={handleChange}
                      />

                      <label htmlFor="consignado">Consignado</label>

                    </div>
                    <div className="input-container">
                      <input
                        id="pessoal"
                        type="radio"
                        className="tipo peer"
                        value="Pessoal"
                        name="tipo"
                        onChange ={handleChange}
                      />

                      <label htmlFor="pessoal">Pessoal</label>


                    </div>
                  </div>

                </div>
                <label className='titulos'>Tipo do Beneficio</label>
                <div className='flex flex-row gap-10 items-center justify-center'>
                  <div className="input-container ">
                    <input type="radio" className='tipo peer' value='21' name='beneficio' />

                    <label htmlFor="pessoal">21</label>

                  </div>
                  <div className="input-container ">
                    <input type="radio" className='tipo peer' value='41' name='beneficio' />

                    <label htmlFor="pessoal">41</label>

                  </div>
                  <div className="input-container">
                    <input type="radio" className='tipo peer' value='32' name='beneficio' />

                    <label htmlFor="pessoal">32</label>

                  </div>


                </div>
                <a  className='rounded-xl bg-[#058605] text-white cursor-pointer h-15 w-100 
                transition duration-500 hover:bg-[#035703] shadow-xl/15 flex items-center justify-center'
                href= {linkWhatsapp}>
                  Simular</a>


              </div>
            </div>

          </div>
          {/* Rodapé do site (Contato) */}
          <div className='contato text-white flex flex-col items-center justify-center '>
            <div className='flex flex-col justify-start h-full w-screen    max-sm:text-2 max-sm:text-[5px] '>

              <div className='flex flex-row mb-0px items-center justify-start h-full w-full p-10 '>

                

                <div className='flex flex-col  w-full h-full items-start justify-start '>
                  <ul className='flex flex-row gap-4 '>
                    <li className='text-4xl'><a href=""><i class="ri-instagram-line"></i></a></li>
                    <li className='text-4xl'>
                      <a href= {linkWhatsapp}>
                      <i class="ri-whatsapp-line"></i></a></li>
                  </ul>
                  <ul>

                    <li>Contato</li>
                    <li>Sobre Nós</li>
                    <li>Politica de privacidade</li>
                  </ul>
                </div>
                <div className='flex flex-col justify-end items-center h-full w-full mb-0px  bottom-0 left-0
                  p-4 text-white text-xs
                  '>
                  <p>Cpf: {cpf}</p>
                  <p>Idade: {idade}</p>
                  <p>Vezes: {vezes}</p>
                  <p>Tipo: {tipo}</p>
                  <p className=''>© 2025 LinsCrédito - Todos os direitos reservados.</p>

                </div>
                <div className='flex-col items-end  bottom-0 h-full w-full '>
                  <h1 className='text-white text-4xl font-extrabold mb-2'>Fale Conosco</h1>
                  <p className='flex mb-10'>Nos envie uma mensagem em nosso número de telefone, entraremos em contato o mais rápido possível!</p>
                  <p className='text-white text-4xl font-extrabold mb-2'>(27)99823-6211</p>
                </div>

              </div>

            </div>




          </div>

        </div>

      </div>

    </div >
  )
}
