
import { useState } from 'react'
import Cookies from 'universal-cookie'

import { cargarImagen } from '../../helpers/cargarImagen'
import { NavModel } from '../components/NavModel'
import '../assets/css/login.css'

export const CargarImagenProducto = () => {

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
            ? await cargarImagen(archivo, id)
            : document.getElementById('errorMsg').innerHTML = `
            <p>
                No haz cargado ninguna imagen.
            </p>`                            
    }

  return (

    <>
    <header>
        {<NavModel name={name} />}
    </header>
    <div className='form-wrapper'>
    <form 
        className='login-form'
        >
        <div className="mb-3">
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile" onChange={onInputChange} />
        </div>
        </div>
        <button type="submit" className="btn btn-primary button-width" onClick={onSubmit}>Cargar Foto</button>
        </form>
    </div>
    <div id='errorMsg' className='text-center' ></div> 
    </>

  )
}
