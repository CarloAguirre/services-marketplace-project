import Cookies from 'universal-cookie'


import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { CardGrid } from '../components/CardGrid';
import '../assets/css/card.css'

export const Home = () => {

    let page = 'home';
    
  return (
    
    <div className='principal'>

    <header>
      {<NavModel pagina={page}/>}
    </header>

      <div className='background-body'>
        {<CardGrid />}
      <hr className=' container' />
      <p className='text-center justify-content-center'>© Cabra del valle 2022-2023 - Todos los derechos reservados</p>
      <hr className='mb-0'/>
      </div>     
    </div>

  )
}
