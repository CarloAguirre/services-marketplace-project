import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import '../css/Login.css'


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

            var data = JSON.stringify({
                "nombre": formState.name,
                "password": formState.password,
                "correo": formState.email,
                "rol": "USER_ROLE"
              });
              
              var config = {
                method: 'post',
                url: baseUrl,
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              await axios(config)
              .then(({data}) => {
              // console.log(data.correo);

                cookies.set('name', data.nombre, {"path": "/"});
                cookies.set('email', data.correo, {"path": "/"});
                cookies.set('uid', data.uid, {"path": "/"});
                alert(`${data.nombre} haz tu cuenta correctamente, ahora puede iniciar sesión`)
                window.location.href = "./"
                  
              })
              .catch((error) =>{
                console.log(JSON.parse(error.request.response));

                const arr = JSON.parse(error.request.response);

                const errorArray = arr.errors[0]

                const {msg} = errorArray
  
                document.getElementById('errorMsg').innerHTML = `
                <p>
                    ${msg}
                </p>`  
              });      

            }

    return (
        <>
        <div className='form-wrapper'>
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
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary create-account__button">Crear Cuenta</button>
            </form>
        </div>
        <div id='errorMsg' className='text-center mt-4' ></div>
        </>
      )
    }
