import Cookies from 'universal-cookie'


import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { CardGrid } from '../components/CardGrid';
import '../assets/css/card.css'
import { Reservar } from '../components/Reservar';

export const Contact = () => {

    let page = 'contact';
    
  return (
    
    <div className='principal'>

    <header>
      {<NavModel pagina={page}/>}
    </header>

      <div className='background-body'>
        <Reservar />
      </div>     
    </div>

  )
}
