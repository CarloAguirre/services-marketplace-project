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
        ciudad: '',
        itinerario: '',
        requisitos: '',
        altura: '',
        dificultad: '',
        distancia: '',
        tiempo: '',
        incluye1: '',
        incluye2: '',
        incluye3: '',
        incluye4: '',
        incluye5: '',
        incluye6: '',
        noIncluye1: '',
        noIncluye2: '',
        noIncluye3: '',
        noIncluye4: '',
        noIncluye5: '',
        noIncluye6: '',
        noIncluye7: '',
        noIncluye8: '',
        noIncluye9: '',
        noIncluye10: '',
        noIncluye11: '',
        noIncluye12: '',
        noIncluye13: '',
        noIncluye14: '',
        noIncluye15: '',
        necesario1: '',
        necesario2: '',
        necesario3: '',
        necesario4: '',
        necesario5: '',
        necesario6: '',
        necesario7: '',
        necesario8: '',
        necesario9: '',
        necesario10: '',
        necesario11: '',
        necesario12: '',
        necesario13: '',
        necesario14: '',
        necesario16: '',
        necesario17: '',
        necesario18: '',
        necesario19: '',
        necesario20: '',
        necesario21: '',
    })

    const onSubmit = async(event)=>{
        event.preventDefault();

        try {
            createProducto(nombre, categoria, precio, descripcion, ciudad, token, itinerario, requisitos, altura, dificultad, distancia, tiempo, incluye1, incluye2, incluye3, incluye4, incluye5, incluye6, incluye7, incluye8, incluye9, incluye10, incluye11, incluye12, incluye13, incluye14, incluye15, incluye15, noIncluye1, noIncluye2, noIncluye3, noIncluye4, noIncluye5, noIncluye6, necesario1, necesario2, necesario3, necesario4, necesario5, necesario6, necesario7, necesario8, necesario9, necesario10, necesario11, necesario12, necesario13, necesario14, necesario15, necesario16, necesario17, necesario18, necesario19, necesario20, necesario21 )
            
        } catch (error) {
            console.log(error)
        }
    }

    const {nombre, categoria, precio, descripcion, ciudad, itinerario, requisitos, altura, dificultad, distancia, tiempo, incluye1, incluye2, incluye3, incluye4, incluye5, incluye6, noIncluye1, noIncluye2, noIncluye3, noIncluye4, noIncluye5, noIncluye6, incluye7, incluye8, incluye9, incluye10, incluye11, incluye12, incluye13, incluye14, incluye15, necesario1, necesario2, necesario3, necesario4, necesario5, necesario6, necesario7, necesario8, necesario9, necesario10, necesario11, necesario12, necesario13, necesario14, necesario15, necesario16, necesario17, necesario18, necesario19, necesario20, necesario21} = formstate;

    const onInputchange = async({target})=>{
        const {name, value} = target;
        await setFormState({
            ...formstate,
            [name]: value
        })

        console.log(formstate)
    }



  return (

    <div className='pb-5 body-bg'>

    
    <header>
        {<NavModel name={name} />}
    </header>
    <h3 className='text-center mt-5'>Ingresa la información del Tour</h3>
    <div className='form-wrapper__tour'>
            <form 
            className='login-form'
            onSubmit={onSubmit}
            >
            <div className="mb-3">
                <label className="form-label">Nombre del Tour (max: 30 caracteres)</label>
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
            <hr />

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
            <hr />

            <div className="form-floating filter-custom">
                <select 
                className="form-select" 
                id="floatingSelect" 
                aria-label="Floating label select example"
                name='ciudad'
                value={ciudad}
                onChange={onInputchange}
                >
                    <option>Pueblo</option>
                    <option>Vicuña</option>
                    <option>La Serena</option>
                    <option>Diaguitas</option>
                    <option>Quebrada de Talca</option>
                    <option>Quebrada El Arrayan</option>
                    <option>Marqueza</option>
                    <option>Pelicana</option>
                    <option>El Molle</option>
                    <option>El Almendral</option>
                    <option>Puclaro</option>
                    <option>El Tambo</option>
                    <option>Rivadavia</option>
                    <option>San Isidro</option>
                    <option>Paiguano</option>
                    <option>Peralillo</option>
                    <option>Varillar</option>
                    <option>Chapilca</option>
                    <option>Guanta</option>
                    <option>Monte Grande</option>
                    <option>Pisco Elqui</option>
                    <option>Cochiguaz</option>
                    <option>El Cepo</option>
                    <option>Alcohuaz</option>
                    <option>Horcón</option>
                </select>
                <label htmlFor="floatingSelect">Ciudad</label>
            </div>
            <hr />
            
            {/* descripcion */}
            <label htmlFor="floatingTextarea2">Descripcíon (max: 80 caracteres)</label>
            <div className="form-floating mb-3">
                <textarea 
                className="form-control" 
                id="floatingTextarea2" 
                maxLength="80"
                name='descripcion'
                value ={descripcion}
                onChange={onInputchange}

                ></textarea>
            </div>
            <hr />

            <label htmlFor="floatingTextarea2">Itinerario</label>
            <div className="form-floating mb-3">
                <textarea 
                className="form-control" 
                id="floatingTextarea2" 
                // maxLength="70"
                name='itinerario'
                value ={itinerario}
                onChange={onInputchange}

                ></textarea>
            </div>
            <hr />

            <div className="mb-3">
                <label className="form-label">Requisitos</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Bloqueador solar, experiencia en...' 
                name='requisitos'
                value={requisitos}
                onChange={onInputchange}
                />
            </div>
            <hr />

            {/* altura */}
            <label htmlFor="floatingTextarea2">Altura</label>
            <input className="form-control" name='altura' value={altura} onChange={onInputchange} type="text" placeholder="4.000 metros" aria-label="default input example"></input>
            <hr />

            {/* dificultad */}
            <label htmlFor="floatingTextarea2">Dificultad</label>
            <input className="form-control" name='dificultad' value={dificultad} onChange={onInputchange} type="text" placeholder="Media" aria-label="default input example"></input>
            <hr />

            {/* Distancia */}
            <label htmlFor="floatingTextarea2">Distancia</label>
            <input className="form-control" name='distancia' value={distancia} onChange={onInputchange} type="text" placeholder="3 kilometros" aria-label="default input example"></input>
            <hr />

            {/* Tiempo */}
            <label htmlFor="floatingTextarea2">Tiempo</label>
            <input className="form-control" name='tiempo' value={tiempo} onChange={onInputchange} type="text" placeholder="3 horas" aria-label="default input example"></input>
            <hr /> 

            {/* incluye */}
            <label htmlFor="floatingTextarea2">Incluye</label>
            <input className="form-control" name='incluye1' value={incluye1} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye2' value={incluye2} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye3' value={incluye3} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye4' value={incluye4} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye5' value={incluye5} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye6' value={incluye6} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye7' value={incluye7} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye8' value={incluye8} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye9' value={incluye9} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye10' value={incluye10} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye11' value={incluye11} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye12' value={incluye12} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye13' value={incluye13} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye14' value={incluye14} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='incluye15' value={incluye15} onChange={onInputchange} type="text" placeholder="Incluye..." aria-label="default input example"></input><br />
            <hr />

            {/* no incluye */}
            <label htmlFor="floatingTextarea2">No Incluye</label>
            <input className="form-control" name='noIncluye1' value={noIncluye1} onChange={onInputchange} type="text" placeholder="No incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='noIncluye2' value={noIncluye2} onChange={onInputchange} type="text" placeholder="No incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='noIncluye3' value={noIncluye3} onChange={onInputchange} type="text" placeholder="No incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='noIncluye4' value={noIncluye4} onChange={onInputchange} type="text" placeholder="No incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='noIncluye5' value={noIncluye5} onChange={onInputchange} type="text" placeholder="No incluye..." aria-label="default input example"></input><br />
            <input className="form-control" name='noIncluye6' value={noIncluye6} onChange={onInputchange} type="text" placeholder="No incluye..." aria-label="default input example"></input><br />
            <hr />

            {/* Cesesario traer */}
            <label htmlFor="floatingTextarea2">Cada pasajero debe traer:</label>
            <input className="form-control" name='necesario1' value={necesario1} onChange={onInputchange} type="text" placeholder="item 1" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario2' value={necesario2} onChange={onInputchange} type="text" placeholder="item 2" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario3' value={necesario3} onChange={onInputchange} type="text" placeholder="item 3" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario4' value={necesario4} onChange={onInputchange} type="text" placeholder="item 4" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario5' value={necesario5} onChange={onInputchange} type="text" placeholder="item 5" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario6' value={necesario6} onChange={onInputchange} type="text" placeholder="item 6" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario7' value={necesario7} onChange={onInputchange} type="text" placeholder="item 7" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario8' value={necesario8} onChange={onInputchange} type="text" placeholder="item 8" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario9' value={necesario9} onChange={onInputchange} type="text" placeholder="item 9" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario10' value={necesario10} onChange={onInputchange} type="text" placeholder="item 10" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario11' value={necesario11} onChange={onInputchange} type="text" placeholder="item 11" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario12' value={necesario12} onChange={onInputchange} type="text" placeholder="item 12" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario13' value={necesario13} onChange={onInputchange} type="text" placeholder="item 13" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario14' value={necesario14} onChange={onInputchange} type="text" placeholder="item 14" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario15' value={necesario15} onChange={onInputchange} type="text" placeholder="item 15" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario16' value={necesario16} onChange={onInputchange} type="text" placeholder="item 16" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario17' value={necesario17} onChange={onInputchange} type="text" placeholder="item 17" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario18' value={necesario18} onChange={onInputchange} type="text" placeholder="item 18" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario19' value={necesario19} onChange={onInputchange} type="text" placeholder="item 19" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario20' value={necesario20} onChange={onInputchange} type="text" placeholder="item 20" aria-label="default input example"></input><br />
            <input className="form-control" name='necesario21' value={necesario21} onChange={onInputchange} type="text" placeholder="item 21" aria-label="default input example"></input><br />
            <hr />

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
            <div id='errorMsg' className='text-center mb-5' ></div>

    </div>

  )
}
