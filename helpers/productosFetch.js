import axios from "axios";
import {Cloudinary} from "@cloudinary/url-gen";



export const productInfoFetch = async()=>{
  
  let imgIdArray = [];
  let names = [];
  let prices = [];
  let users = [];
  let descripciones = [];
  let ciudades = [];
  let ids = [];

  let data = '';

    
  let config = {
    method: 'get',
    url: 'https://restserver-crud-avanzado.herokuapp.com/api/productos?limite=10000',
    headers: { },
    data : data
  };

 await axios(config)
  .then((response) => {
    // console.log(response.data.productos)
    const {productos} = response.data;

    console.log(productos)

    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dubwhwd1w'
      }
    }); 

    let i = '';

    for(i=0; i<productos.length; i ++){
      let img = productos[i].img;

      let imgSplit = img.split('/');

      let imgSplitted = imgSplit[imgSplit.length-1];

      let imgIdUndotted = imgSplitted.split('.')

      let imgId = imgIdUndotted[imgIdUndotted.length-2]

      imgIdArray.push(imgId);

      let nombre = productos[i].nombre
      names.push(nombre)

      let precio = productos[i].precio
      prices.push(precio)

      let usuario = productos[i].usuario.nombre
      users.push(usuario)

      let descripcion = productos[i].descripcion
      descripciones.push(descripcion)

      let ciudad = productos[i].ciudad
      ciudades.push(ciudad)

      let id = productos[i]._id
      ids.push(id)

      // let myImage = cld.image(`'${imgId}'`);

      // document.getElementById('cards').innerHTML = `<p>hola mundo</p>` s

    }

  })
  .catch((error) => {
    console.log(error);
  });
  return [imgIdArray, names, prices, users, descripciones, ciudades, ids];
}