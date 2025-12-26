import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
//-------------Importação de imamgens-------------
import Logo from './assets/logo.png'
import Insta from './assets/instaLogo.png'
import Whats from './assets/whatsLogo.png'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'



const Images = [
  {
    ImgSrc: pic1,
    Title: "imagem1"
  },
  {
    ImgSrc: pic2,
    Title: "imagem2"
  },
  {
    ImgSrc: pic3,
    Title: "imagem3"
  }
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleRightSide = () => {
      setCurrentIndex((prevIndex) =>(prevIndex + 1) % Images.length)
    };
    const handleLeftSide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length)
    };
  return (
    
    <div className='body bg-[#034C8C] m-0 '>
      <div className='flex flex-row items-center text-[#FFFFFF] bg-[#013884] shadow-xl/20  w-full '>
        <img src={Logo} className='ml-10' />
        <ul className='flex flex-row w-full gap-10 justify-center items-center absolute'>
          <li><a href="" className="nav-itens ">Quem Somos</a></li>
          <li><a href="" className="nav-itens">Produtos</a></li>
          <li><a href="" className="nav-itens">Serviços</a></li>
          <li><a href="" className="nav-itens">Contato</a></li>
        </ul>
      </div>

      <div className='mother flex flex-col '>
       <div className='blocos1'>
   
    <div className='w-full h-[600px] bg-white relative group overflow-hidden'> 
    
        
        <div 
            className='w-full h-full flex transition-transform duration-500 ease-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            
            {Images.map((item, index) => (
                <div 
                    key={index} 
                    className='w-full h-full flex-shrink-0 bg-center bg-cover'
                    style={{ backgroundImage: `url(${item.ImgSrc})` }}
                >
                </div>
            ))}
        </div>

       
        <button 
            className='bg-transparent text-white absolute top-1/2 right-5 -translate-y-1/2 rounded-full p-2 text-4xl hover:cursor-pointer hover:bg-black/50 transition duration-150 z-10' 
            onClick={handleRightSide}
        >
            <i className="ri-arrow-right-circle-fill"></i>
        </button>

        
        <button 
            className='bg-transparent text-white absolute top-1/2 left-5 -translate-y-1/2 rounded-full p-2 text-4xl hover:cursor-pointer hover:bg-black/50 transition duration-150 z-10'
            onClick={handleLeftSide}
        >
            <i className="ri-arrow-left-circle-fill"></i>
        </button>
    </div>
</div>
        <div className='blocos2'>
          <div className='flex flex-row justify-center gap-50 '>
            <div className='produtos '><h1>FGTS</h1>
              <p>O FGTS (Fundo de Garantia do Tempo de Serviço) não é apenas um direito trabalhista; é o seu patrimônio crescendo mês a mês. Depositado pela empresa, esse valor funciona como uma reserva de segurança para momentos importantes — como a compra da casa própria, uma aposentadoria mais tranquila ou aquele imprevisto que ninguém planeja.

                Mas aqui está o segredo: você não precisa esperar anos para ver esse dinheiro. Hoje, existem formas inteligentes de antecipar esses valores e realizar seus projetos agora.

                Quer descobrir quanto você tem disponível e como usar isso a seu favor? Vamos conversar!</p></div>
            <div className='produtos'>
              <h1>Emprestimo Consignado</h1>
              <p>O Empréstimo Consignado é a solução ideal para quem busca as taxas de juros mais baixas do mercado e total conveniência. Por ser descontado diretamente na folha de pagamento, ele oferece uma segurança maior tanto para quem empresta quanto para quem recebe, garantindo prazos mais longos e parcelas que cabem no seu bolso sem sobressaltos. É a oportunidade perfeita para organizar sua vida financeira, quitar dívidas caras ou realizar aquele projeto antigo com a tranquilidade de saber exatamente quanto vai pagar. Sem burocracia excessiva e com liberação rápida, o crédito consignado transforma sua estabilidade profissional em uma ferramenta para conquistar seus objetivos agora. Quer saber qual o limite disponível para você? Vamos conversar!</p>
            </div>
            <div className='produtos'><h1>Emprestimo Pessoal</h1>
              <p>O Empréstimo Pessoal é a alternativa rápida e flexível para quando a vida exige agilidade. Diferente de outras modalidades, ele não requer garantias complexas ou uma finalidade específica: o crédito é seu para usar como preferir, seja para uma emergência, uma viagem inesperada ou para aproveitar uma oportunidade única de negócio. Com processos de aprovação cada vez mais dinâmicos e digitais, você ganha o fôlego financeiro necessário com a liberdade de escolher o plano de parcelamento que melhor se adapta ao seu planejamento mensal. É o dinheiro na mão com a transparência que você merece para retomar o controle das suas finanças ou dar o próximo passo nos seus planos. Precisa de crédito rápido e sem complicações? Vamos conversar!</p>
            </div>
          </div>

        </div>

        <div className='blocos1'>
          <div className='flex flex-col justify-center items-center h-auto w-full gap-20 mt-20 mb-20 '>

            <div className="flex flex-col bg-white w-auto h-auto rounded-2xl shadow-lg p-8 items-center gap-10  ">
              <div>
                <h1 className='font-bold text-5xl text-[#042C4D]'>Simulação </h1>
              </div>
              <div className=' flex flex-col gap-2'>
                <label className='titulos'>CPF</label>
                <input className='box-input' id="cpf" type="number" />

                <label className='titulos'>Idade</label>
                <input className='box-input' type="number" />

                <label className='titulos'>Quantas vezes?</label>
                <div className='flex flex-row gap-5 items-center '>
                  <input className='w-80 h-10 border border-gray-300 rounded-md' type="number" />
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
                <button type='button' className='rounded-xl bg-[#058605] text-white cursor-pointer h-15 w-100 transition duration-500 hover:bg-[#035703] shadow-xl/15' >Simular</button>


              </div>
            </div>

          </div>

          <div className='contato'>
            {(() => {
              const teste = "Empréstimos com as melhores taxas do mercado!";
              var cpf = document.getElementById('cpf') as HTMLInputElement

              return (
                <h1 className='flex flex-row justify-start text-[#FFFFFF] '>

                  <a href="https://www.instagram.com/linscreditoemprestimo/"><img src={Insta} className='hover:cursor-pointer' /></a>

                  <a href={`https://wa.me/5527998236211?text=Olá%20gostaria%20de%20mais%20informações%20${teste},${cpf}.`}><img src={Whats} /></a></h1>
              );
            })()}


          </div>

        </div>

      </div>

    </div >
  )
}
