import axios from 'axios'
import Cookies from 'universal-cookie'

export const loginFetch = async(password, email)=>{

    const baseUrl = `https://server-modelo.herokuapp.com/api/auth/login`

    const cookies = new Cookies();

    var data = JSON.stringify({
        "password": password,
        "correo": email
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

        cookies.set('name', data.usuario.nombre, {"path": "/"});
        cookies.set('email', data.usuario.correo, {"path": "/"});
        cookies.set('uid', data.usuario.uid, {"path": "/"});
        cookies.set('token', data.token, {"path": "/"});
        // alert(`${data.usuario.nombre} haz iniciado sesión correctamente`)
        window.location.href = "./"
          
      })
      .catch(({response}) =>{
        // console.log(response.data.errors[0])
        if(response.data.errors){
          const{msg} = response.data.errors[0]
  
          document.getElementById('errorMsg').innerHTML = `
          <p>
              ${msg}
          </p>`
          return;               
        }
        const {msg} = response.data;
        document.getElementById('errorMsg').innerHTML = `
        <p>
            ${msg}
        </p>`

      });      

}