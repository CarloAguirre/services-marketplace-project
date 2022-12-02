import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import '../assets/css/login.css'
import { NavModel } from '../components/NavModel'
import { createAccountFetch } from '../../helpers/createAccountFetch'


export const CreateAccount = () => {

    const baseUrl = `https://restserver-crud-avanzado.herokuapp.com/api/usuarios/`

    const cookies = new Cookies();


    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
      })
    
      const {email, password, name} = formState;
    
      const onInputchange = async({target})=>{
        const {name, value} = target;
        await setFormState({
                ...formState,
                [name]: value       
        }) 
      }


      const onSubmit = async(event)=>{
        event.preventDefault();

          createAccountFetch(name, password, email)
      }

    return (
      <div className='pb-5 body-bg mb-1'>
        <header>
          {<NavModel name ={name} />}
        </header>
        <h3 className='text-center mb-5'>Crea tu usuario</h3>
        <div className='form-wrapper '>
            <form 
            className='login-form'
            onSubmit={onSubmit}
            >
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Tu nombre' 
                name='name'
                value={name}
                onChange={onInputchange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                placeholder='Correo electronico' 
                name='email'
                value={email}
                onChange={onInputchange}
                />
                <div id="emailHelp" className="form-text">No compartas esta información con nadie.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Constraseña</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                placeholder='Tu clave'
                name='password'
                value = {password}
                onChange = {onInputchange}
                
                />
            </div>
            <button type="submit" className="btn btn-primary create-account__button">Crear Cuenta</button>
            </form>
        </div>
            <div id='errorMsg' className='text-center mb-3' ></div>
        </div>
      )
    }
