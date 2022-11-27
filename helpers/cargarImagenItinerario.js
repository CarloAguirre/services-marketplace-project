import FormData from 'form-data'
import Cookies from 'universal-cookie'

export const cargarImagenItinerario = async(archivo, id)=>{

    const cookies = new Cookies();
    const idtour = cookies.get("id")
    const nombreUser = cookies.get('name');

    const { name } = archivo;

    const extensionesValidas = ['jpg', 'png', 'jpeg', 'gif']

        // validar la extension del archivo
        const nombreSplit = name.split('.')
        const extension = nombreSplit[nombreSplit.length-1]

        if(!extensionesValidas.includes(extension)){
            return document.getElementById('errorMsg').innerHTML = `
            <p>
                Los formatos de archivo permitidos son: ${extensionesValidas}
            </p>`;
        }

        

    var formdata = new FormData();
    formdata.append("archivo", archivo, "/path/to/file");

    var requestOptions = {
    method: 'PUT',
    body: formdata,
    redirect: 'follow',
    // headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data
   };
    

    await fetch(`https://restserver-crud-avanzado.herokuapp.com/api/uploads/productos/${id}`, requestOptions)
    .then(response => {
        response.text()
        alert(`${nombreUser} haz crado correctamente tu tour`)
        window.location.href = "./"
    })
    .catch(error => console.log( error));
                 
    }

