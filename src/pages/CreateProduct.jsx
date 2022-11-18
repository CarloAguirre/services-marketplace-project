import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

import '../assets/css/login.css'
import { NavModel } from '../components/NavModel'


export const CreateProduct = () => {

    const cookies = new Cookies();

    const name = cookies.get('name')
    const token = cookies.get('token')

    const trekkingId = '6341e2381a3fb2d4e2251ce2'
    const ciclismoId = '63488753cf489b14f0e4c8e1'

    const [formstate, setFormState] = useState({
        nombre: '',
        categoria: '',
        precio: ''
    })

    const onSubmit = async(event)=>{
        event.preventDefault();

        var data = JSON.stringify({
            "nombre": formstate.nombre,
            "categoria": formstate.categoria,
            "precio": formstate.precio
        });

        var config = {
            method: 'post',
            url: 'https://restserver-crud-avanzado.herokuapp.com/api/productos/',
            headers: { 
                'Authorization': token, 
                'Content-Type': 'application/json'
            },
            data : data
        };

        await axios(config)
        .then(function (response) {
            const {nombre} = response.data
            
            console.log(response.data._id)
            cookies.set('id', response.data._id, {"path": "/"})

            alert(`Haz crado correctamente el tour: ${nombre}`)
            window.location.href = "./upload-service-image"
        })
        .catch(function ({response}) {
            const {msg} = response.data;
        
            document.getElementById('errorMsg').innerHTML = `
            <p>
                ${msg}
            </p>`     
        
        });

    }

    const {nombre, categoria, precio} = formstate;

    const onInputchange = async({target})=>{
        const {name, value} = target;
        await setFormState({
            ...formstate,
            [name]: value
        })

        console.log(formstate)
    }

  return (
    <>
    <header>
        {<NavModel name={name} />}
    </header>
    <div className='form-wrapper'>
            <form 
            className='login-form'
            onSubmit={onSubmit}
            >
            <div className="mb-3">
                <label className="form-label">Nombre del Tour</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Tekking cerro mamalluca...' 
                name='nombre'
                value={nombre}
                onChange={onInputchange}
                />
            </div>
            
            <div className="form-floating filter-custom">
                <select 
                className="form-select" 
                id="floatingSelect" 
                aria-label="Floating label select example"
                name='categoria'
                value={categoria}
                onChange={onInputchange}
                >
                    <option>Categoria</option>
                    <option value={trekkingId}>Trekking</option>
                    <option value={ciclismoId}>Ciclismo</option>
                </select>
                <label htmlFor="floatingSelect">Selecciona una opción</label>
            </div>
    
            <div className="input-group">
                <input 
                type="text" 
                className="form-control" 
                aria-label="Dollar amount (with dot and two decimal places)"
                name='precio'
                value={precio}
                onChange={onInputchange}
                />
                <span 
                className="input-group-text">$</span>
                <span 
                className="input-group-text">0.00</span>
            </div>
            <button type="submit" className="btn btn-primary create-account__button mt-4">Crear Tour</button>
            </form>
        </div>
            <div id='errorMsg' className='text-center' ></div>
    
    </>
  )
}
