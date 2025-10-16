import './style.css'
import Logo from '../../../public/assets/logo.png'
import Menu from '../../../public/assets/menu.png'
import Fgts from '../../../public/assets/fgts.png'

function Home() {



  return (

    <div className='body bg-[#034C8C] m-0 '>
      <div className = 'flex flex-row items-center text-[#FFFFFF] bg-[#013884] shadow-xl/20 fixed w-full'>

        <img src={Logo} className='ml-10 mr-10' />
        <div className= "nav" >
          <a href="" className="nav-itens ">Quem Somos</a>
          <a href="" className="nav-itens">Produtos</a>
          <a href="" className="nav-itens">Serviços</a>
          <a href="" className="nav-itens">Contato</a>
        </div>
        <button type='button' className = 'rounded-full bg-[#058605] cursor-pointer ml-auto h-9 w-30 transition duration-500 hover:bg-[#035703] ml-10 mr-10 shadow-xl/25' >Consultar</button>
      </div>

      <div className='mother flex flex-col gap-100'>
        <div className='carrosel '>
        </div>
        <div className='carrosel'>
        </div>
        <div className='carrosel'>
        </div> 
      </div>

    </div>



  )
}

export default Home
