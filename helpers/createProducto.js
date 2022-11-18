import axios from 'axios'
import Cookies from 'universal-cookie'

export const createProducto = async(nombre, categoria, precio, token)=>{
    const cookies = new Cookies();
    
    var data = JSON.stringify({
        "nombre": nombre,
        "categoria": categoria,
        "precio": precio
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
        console.log(response)
        const {msg} = response.data.errors[0];
    
        document.getElementById('errorMsg').innerHTML = `
        <p>
            ${msg}
        </p>`     
    
    });
}