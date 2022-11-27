import axios from 'axios'
import Cookies from 'universal-cookie'

export const createProducto = async(nombre, categoria, precio, descripcion, ciudad, token, itinerario, requisitos, altura, dificultad, distancia, tiempo, incluye1, incluye2, incluye3, incluye4, incluye5, incluye6, incluye7, incluye8, incluye9, incluye10, incluye11, incluye12, incluye13, incluye14, incluye15, noIncluye1, noIncluye2, noIncluye3, noIncluye4, noIncluye5, noIncluye6, necesario1, necesario2, necesario3, necesario4, necesario5, necesario6, necesario7, necesario8, necesario9, necesario10, necesario11, necesario12, necesario13, necesario14, necesario15, necesario16, necesario17, necesario18, necesario19, necesario20, necesario21 )=>{
    const cookies = new Cookies();
    
    var data = JSON.stringify({
        "nombre": nombre,
        "categoria": categoria,
        "precio": precio,
        "descripcion": descripcion,
        "ciudad": ciudad,
        "itinerario": itinerario,
        "requisitos": requisitos,
        "altura": altura,
        "dificultad": dificultad,
        "distancia": distancia,
        "tiempo": tiempo,
        "incluye1": incluye1,
        "incluye2": incluye2,
        "incluye3": incluye3,
        "incluye4": incluye4,
        "incluye5": incluye5,
        "incluye6": incluye6,
        "incluye7": incluye7,
        "incluye8": incluye8,
        "incluye9": incluye9,
        "incluye10": incluye10,
        "incluye11": incluye11,
        "incluye12": incluye12,
        "incluye13": incluye13,
        "incluye14": incluye14,
        "incluye15": incluye15,
        "noIncluye1": noIncluye1,
        "noIncluye2": noIncluye2,
        "noIncluye3": noIncluye3,
        "noIncluye4": noIncluye4,
        "noIncluye5": noIncluye5,
        "noIncluye6": noIncluye6,
        "necesario1": necesario1,
        "necesario2": necesario2,
        "necesario3": necesario3,
        "necesario4": necesario4,
        "necesario5": necesario5,
        "necesario6": necesario6,
        "necesario7": necesario7,
        "necesario8": necesario8,
        "necesario9": necesario9,
        "necesario10": necesario10,
        "necesario11": necesario11,
        "necesario12": necesario12,
        "necesario13": necesario13,
        "necesario14": necesario14,
        "necesario16": necesario16,
        "necesario17": necesario17,
        "necesario18": necesario18,
        "necesario19": necesario19,
        "necesario20": necesario20,
        "necesario21": necesario21
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
        console.log(response.data)

        if(response.data.msg){
            let msg1 = response.data.msg;
            document.getElementById('errorMsg').innerHTML = `
            <p>
                ${msg1}
            </p>` 
            return;
        }

        let msg2 =response.data.errors[0].msg        

        
        document.getElementById('errorMsg').innerHTML = `
        <p>
            ${msg2}
        </p>`   
    
    });
}