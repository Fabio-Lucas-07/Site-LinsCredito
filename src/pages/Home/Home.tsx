import './style.css'
import Logo from '../../../public/assets/logo.png'
import Menu from '../../../public/assets/menu.png'
import Fgts from '../../../public/assets/fgts.png'
import Insta from '../../../public/assets/instaLogo.png'
import Whats from '../../../public/assets/whatsLogo.png'

function Home() {


  function consulta (){

  return (
    <div className="w-400 h-400 bg-[#FFFFFF]">
      {/* conteúdo aqui */}
    </div>
  );
  }

  return (

    <div className='body bg-[#034C8C] m-0 '>
      <div className = 'flex flex-row items-center text-[#FFFFFF] bg-[#013884] shadow-xl/20 fixed w-full'>

        <img src={Logo} className='ml-10 ' />
        <div className= "nav" >
          <a href="" className="nav-itens ">Quem Somos</a>
          <a href="" className="nav-itens">Produtos</a>
          <a href="" className="nav-itens">Serviços</a>
          <a href="" className="nav-itens">Contato</a>
        </div>
        <button type='button' className = 'rounded-full bg-[#058605] cursor-pointer ml-auto h-9 w-30 transition duration-500 hover:bg-[#035703] ml-10 mr-10 shadow-xl/25' >Consultar</button>
      </div>

      <div className='mother flex flex-col gap-100'>
        <div className='blocos'>

        </div>
        <div className='blocos'>
        </div>
        <div className='blocos'>
          <h1 className='flex flex-row justify-start text-[#FFFFFF] '><img src={Insta}/> <img src={Whats}/> <a href="src/pages/Home/Consulta/Consulta.tsx" className='text-[#FFFFFF]'>Me clique</a></h1>
               <button onClick={consulta} className='bg-[#FFFFFF] hover:cursor-pointer'> clique me</button>
        </div> 
      </div>

    </div>

  

  )
}

export default Home
