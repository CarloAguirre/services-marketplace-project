
import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import '../css/Login.css'



export const Login = () => {

    const baseUrl = `https://restserver-crud-avanzado.herokuapp.com/api/auth/login`

    const cookies = new Cookies();



    const [formState, setFormState] = useState({

        email: '',
        password: ''
      })
    
      const {email, password} = formState;
    
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
                "password": formState.password,
                "correo": formState.email
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
              .then((response) => {

                const {data} = response;
                console.log(data.usuario);

                cookies.set('name', data.usuario.nombre, {"path": "/"});
                cookies.set('email', data.usuario.correo, {"path": "/"});
                cookies.set('uid', data.usuario.uid, {"path": "/"});
                cookies.set('token', data.token, {"path": "/"});
                alert(`${data.usuario.nombre} haz iniciado sesión correctamente`)
                window.location.href = "./home"
                  
              })
              .catch(({request}) =>{
                console.log(JSON.parse(request.response));
                const badRequest = JSON.parse(request.response);
                const errorMsg = badRequest.msg;             
                
                document.getElementById('errorMsg').innerHTML = `
                <p>
                    ${errorMsg}
                </p>`    
              });      

            }
            
            

  return (
    <>
    <div className='form-wrapper'>
        <form 
        className='login-form'
        >
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
        <button type="submit" className="btn btn-primary button-width" onClick={onSubmit}>Iniciar sesión</button>
        <hr />
        </form>
        <div>
          <a href="/create-account">
          <button className="btn btn-success mb-4">Crear Cuenta</button>
          </a>
        </div>
    </div>
    <div id='errorMsg' className='text-center mt-4' ></div>
    </>
  )
}
