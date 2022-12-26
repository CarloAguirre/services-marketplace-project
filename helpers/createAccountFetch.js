import axios from 'axios'
import Cookies from 'universal-cookie'
import { serverPath } from './serverPath';

export const createAccountFetch = async(name, password, email)=>{

    const baseUrl = serverPath + `api/usuarios/`

    const cookies = new Cookies();

    var data = JSON.stringify({
        "nombre": name,
        "password": password,
        "correo": email,
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
        alert(`${data.nombre} haz creado tu cuenta correctamente, ahora puede iniciar sesión.`)
        window.location.href = "./login"
          
      })
      .catch(({response}) =>{
        console.log(response.data.errors[0])
        const{msg} = response.data.errors[0]

        document.getElementById('errorMsg').innerHTML = `
        <p>
            ${msg}
        </p>`  
      });   
}