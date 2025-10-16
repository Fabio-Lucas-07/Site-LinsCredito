import './style.css'
import Logo from '../../../public/assets/logo.png'
import Menu from '../../../public/assets/menu.png'

function Home() {



  return (

    <div>
      <div className='top-bar'>

        <img src={Logo} />
        <div className='navigation'>
          <a href="">Quem Somos</a>
          <a href="">Produtos</a>
          <a href="">Serviços</a>
          <a href="">Contato</a>
        </div>
        <button type='button'>Consultar</button>
      </div>

      <div className='carrosel'>

      </div>

    </div>
    


  )
}

export default Home
