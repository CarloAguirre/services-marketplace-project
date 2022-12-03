import Cookies from 'universal-cookie'


import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { CardGrid } from '../components/CardGrid';
import '../assets/css/card.css'
import { Footer } from '../components/Footer';

export const Home = () => {

    let page = 'home';
    
  return (
    
    <div className='principal'>

    <header>
      {<NavModel pagina={page}/>}
    </header>

      <div className='background-body'>
        {<CardGrid />}
        {<Footer />}
      </div>     
    </div>

  )
}
