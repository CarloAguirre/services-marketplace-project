import Cookies from 'universal-cookie'


import { NavModel } from '../components/NavModel';
import '../assets/css/home.css'
import { CardGrid } from '../components/CardGrid';
import '../assets/css/card.css'

export const Error404 = () => {

    let page = 'home';
    
  return (
    
    <div className='principal'>

    <header>
      {<NavModel pagina={page}/>}
    </header>

      <div className='background-body'>
        <div className=' d-flex justify-content-center'>
          <h1 style={{paddingTop: '40vh', paddingBottom: '60vh'}}>--- ERROR 404 - PAGE NOT FOUND ---</h1>
        </div>
      <hr className=' container' />
      <p className='text-center'>© Cabra del valle 2022-2023 - All rights reserved</p>
      <hr className='mb-0'/>
      </div>     
    </div>

  )
}
