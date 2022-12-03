import FormData from 'form-data'
import Cookies from 'universal-cookie'

export const cargarImagen = async(archivo, id)=>{

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
    

    await fetch(`https://server-modelo.herokuapp.com/api/uploads/productos/${id}`, requestOptions)
    .then(response => {
        response.text()
        console.log(response)
        cookies.set('id', idtour);
        cookies.set('nombre', nombreUser);
        // alert(`${nombreUser} haz crado correctamente tu tour`)
        window.location.href = "./upload-service-imag2"
    })
    .catch(error => console.log( error));
                 
    }

