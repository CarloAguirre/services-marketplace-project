
import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import '../css/Login.css'


export const Login = () => {

    const baseUrl = `https://restserver-crud-avanzado.herokuapp.com/api/auth/login`


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
                "nombre": "user2",
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
                console.log(response.data)
                return response.data;
              })
              .then((response) => {

                /*TODO: 
                VALIDAR LA INFORMACION/ERROR
                CREAR COOKIES */

              })
              .catch((error) =>{
                console.log(error);
              });      

            }
            
            

  return (
    <>
    <div className='form-position'>
        <form 
        className='login-form'
        onSubmit={onSubmit}
        >
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            name='email'
            value={email}
            onChange={onInputchange}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1"
            name='password'
            value = {password}
            onChange = {onInputchange}
            
            />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}
