import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

import '../assets/css/login.css'
import { NavModel } from '../components/NavModel'
import { createProducto } from '../../helpers/createProducto'


export const CreateProduct = () => {

    const cookies = new Cookies();

    const name = cookies.get('name')
    const token = cookies.get('token')

    const trekkingId = '6341e2381a3fb2d4e2251ce2'
    const ciclismoId = '63488753cf489b14f0e4c8e1'

    const [formstate, setFormState] = useState({
        nombre: '',
        categoria: '',
        precio: '',
        descripcion: '',
        ciudad: ''

    })

    const onSubmit = async(event)=>{
        event.preventDefault();

        try {
            createProducto(nombre, categoria, precio, descripcion, ciudad, token)
            
        } catch (error) {
            console.log(error)
        }
    }

    const {nombre, categoria, precio, descripcion, ciudad} = formstate;

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
                maxLength="30"
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

            <div className="form-floating filter-custom">
                <select 
                className="form-select" 
                id="floatingSelect" 
                aria-label="Floating label select example"
                name='ciudad'
                value={ciudad}
                onChange={onInputchange}
                >
                    <option>Arica</option>
                    <option>Iquique</option>
                    <option>Antofagasta</option>
                    <option>Copiapó</option>
                    <option>Coquimbo</option>
                    <option>La Serena</option>
                    <option>Vicuña</option>
                    <option>Valparaiso</option>
                    <option>Viña del Mar</option>
                    <option>Talca</option>
                    <option>Rancagua</option>
                    <option>Concepción</option>
                    <option>Valdivia</option>
                    <option>Puerto Varas</option>
                    <option>Puerto Montt</option>
                    <option>Temuco</option>
                    <option>Chillán</option>
                    <option>Osorno</option>
                    <option>Puerto Williams</option>
                    <option>Punta Arenas</option>
                    <option>Rapa-Nui</option>
                </select>
                <label htmlFor="floatingSelect">Ciudad</label>
            </div>

            <label htmlFor="floatingTextarea2">Descripcíon (max: 70 caracteres)</label>
            <div className="form-floating mb-3">
                <textarea 
                className="form-control" 
                id="floatingTextarea2" 
                maxLength="70"
                name='descripcion'
                value ={descripcion}
                onChange={onInputchange}

                ></textarea>
            </div>
    
            <div className="input-group">
                <span 
                className="input-group-text">$</span>
                <input 
                type="text" 
                placeholder='Precio'
                className="form-control" 
                aria-label="Dollar amount (with dot and two decimal places)"
                name='precio'
                value={precio}
                onChange={onInputchange}
                />
            </div>
            <button type="submit" className="btn btn-primary create-account__button mt-4">Crear Tour</button>
            </form>
        </div>
            <div id='errorMsg' className='text-center' ></div>
    
    </>
  )
}
