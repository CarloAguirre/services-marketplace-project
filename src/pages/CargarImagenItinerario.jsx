
import { useState } from 'react'
import Cookies from 'universal-cookie'

import { cargarImagen } from '../../helpers/cargarImagen'
import { NavModel } from '../components/NavModel'
import '../assets/css/login.css'
import { cargarImagenItinerario } from '../../helpers/cargarImagenItinerario'


export const CargarImagenItinerario = () => {

    const page = 'createProduct'

    const cookies = new Cookies();
    const id = cookies.get("id")
    const name = cookies.get('name');
  
    const [archivo, setArchivo] = useState(null);

    
    const onInputChange = (event)=>{

        console.log(event.target.files[0].name)
        setArchivo(event.target.files[0]);
 
    }
    
    const onSubmit = async(event)=>{
        event.preventDefault();
        
        (archivo)
            ? await cargarImagenItinerario(archivo, id)
            : document.getElementById('errorMsg').innerHTML = `
            <p>
            You have not uploaded any images.
            </p>`                            
    }

  return (

    <>
    <div className='body-bg pb-3'>
        <header>
            {<NavModel name={name} pagina={page} />}
        </header>
            <h3 className='text-center mb-5'>2- Upload an image for the description of your service</h3>
        <div className='form-wrapper pb-3'>
        <form 
            className='login-form'
            >
            <div className="mb-3">
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Upload an image for the itinerary of your service</label>
                <input className="form-control" type="file" id="formFile" onChange={onInputChange} />
            </div>
            </div>
            <button type="submit" className="btn btn-primary button-width" onClick={onSubmit}>Upload Photo</button>
            </form>
        </div>
        <div id='errorMsg' className='text-center mt-3' ></div> 
    </div>
    </>

  )
}
