import FormData from 'form-data'

export const cargarImagen = async(archivo, id)=>{

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
    redirect: 'follow'
    };

    await fetch(`https://restserver-crud-avanzado.herokuapp.com/api/uploads/productos/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log( error));
                 
    }

