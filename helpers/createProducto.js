import axios from 'axios'
import Cookies from 'universal-cookie'

export const createProducto = async(nombre, categoria, precio, descripcion, ciudad, token)=>{
    const cookies = new Cookies();
    
    var data = JSON.stringify({
        "nombre": nombre,
        "categoria": categoria,
        "precio": precio,
        "descripcion": descripcion,
        "ciudad": ciudad
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

        
        window.location.href = "./upload-service-image"
    })
    .catch(function ({response}) {
        // console.log(response)
        let msg1 = response.data.msg;
        let msg2 =response.data.errors[0].msg  

        console.log(msg2)       

        document.getElementById('errorMsg').innerHTML = `
        <p>
            ${msg1}
        </p>` 
        
        document.getElementById('errorMsg').innerHTML = `
        <p>
            ${msg2}
        </p>`   
    
    });
}