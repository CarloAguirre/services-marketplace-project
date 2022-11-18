import Cookies from 'universal-cookie'
import CardGrid from '../components/CardGrid';

import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { FiltersModel } from '../components/FiltersModel';

export const Home = () => {

    const cookies = new Cookies();

    console.log(cookies.get("name"))
    console.log(cookies.get("email"))
    console.log(cookies.get("uid"))
    console.log(cookies.get("token"))

    const name = cookies.get("name")

  return (
    <>
    <header>
      {<NavModel name ={name} />}
    </header>

      
      {/* <div className='filters-wrapper'>
      {<FiltersModel />}
      {<FiltersModel />}
      {<FiltersModel />}
      </div> */}

      <div className=' mx-5'>
        {<CardGrid/>}
      <hr className=' container' />
      <p className='text-center'>© Cabra del valle 2022 - todos los derechos reservados</p>
      </div>
 


        
    </>
  )
}
