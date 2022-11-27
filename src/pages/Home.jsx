import Cookies from 'universal-cookie'


import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { FiltersModel } from '../components/FiltersModel';
import { CardGrid } from '../components/CardGrid';
import '../assets/css/card.css'

export const Home = () => {

    const cookies = new Cookies();

    console.log(cookies.get("name"))
    console.log(cookies.get("email"))
    console.log(cookies.get("uid"))
    console.log(cookies.get("token"))

    const name = cookies.get("name")

  return (
    
    <div className='principal'>

    <header>
      {<NavModel name ={name} />}
    </header>

      
      {/* <div className='filters-wrapper'>
      {<FiltersModel />}
      {<FiltersModel />}
      {<FiltersModel />}
    </div> */}

      <div className='background-body'>
        {<CardGrid />}
      <hr className=' container' />
      <p className='text-center'>© Cabra del valle 2022 - todos los derechos reservados</p>
      <hr className='mb-0'/>
      </div>     
    </div>

  )
}
