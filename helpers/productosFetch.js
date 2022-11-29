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
  let itinerarioArray = [];
  let requisitosArray = [];
  let alturaArray = [];
  let dificultadArray = [];
  let distanciaArray =[];
  let tiempoArray =[];
  let incluye1Array =[];
  let incluye2Array =[];
  let incluye3Array =[];
  let incluye4Array =[];
  let incluye5Array =[];
  let incluye6Array =[];
  let incluye7Array =[];
  let incluye8Array =[];
  let incluye9Array =[];
  let incluye10Array =[];
  let incluye11Array =[];
  let incluye12Array =[];
  let incluye13Array =[];
  let incluye14Array =[];
  let incluye15Array =[];
  let noIncluye1Array =[];
  let noIncluye2Array =[];
  let noIncluye3Array =[];
  let noIncluye4Array =[];
  let noIncluye5Array =[];
  let noIncluye6Array =[];
  let necesario1Array =[];
  let necesario2Array =[];
  let necesario3Array =[];
  let necesario4Array =[];
  let necesario5Array =[];
  let necesario6Array =[];
  let necesario7Array =[];
  let necesario8Array =[];
  let necesario9Array =[];
  let necesario10Array =[];
  let necesario11Array =[];
  let necesario12Array =[];
  let necesario13Array =[];
  let necesario14Array =[];
  let necesario15Array =[];
  let necesario16Array =[];
  let necesario17Array =[];
  let necesario18Array=[];
  let necesario19Array =[];
  let necesario20Array =[];
  let necesario21Array =[];
  let img2Array =[];



  let data = '';

    
  let config = {
    method: 'get',
    url: 'https://restserver-crud-avanzado.herokuapp.com/api/productos?limite=10000',
    headers: { },
    data : data
  };

 await axios(config)
  .then((response) => {

    const {productos} = response.data;

    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dubwhwd1w'
      }
    }); 

    let i = '';

    for(i=0; i<productos.length; i ++){

      if(productos[i].img){
        let img = productos[i].img;
  
        let imgSplit = img.split('/');
  
        let imgSplitted = imgSplit[imgSplit.length-1];
  
        let imgIdUndotted = imgSplitted.split('.')
  
        let imgId = imgIdUndotted[imgIdUndotted.length-2]

        imgIdArray.push(imgId);
  
      }else{
        let imgId = "placeholder_ek6jcb"
        imgIdArray.push(imgId);
      }

      if(productos[i].img2){
        let img2 = productos[i].img2;
  
        let img2Split = img2.split('/');
  
        let img2Splitted = img2Split[img2Split.length-1];
  
        let img2IdUndotted = img2Splitted.split('.')
  
        let img2Id = img2IdUndotted[img2IdUndotted.length-2]

        img2Array.push(img2Id);

  
      }else{
        let img2Id = "placeholder_ek6jcb"
        img2Array.push(img2Id);
      }
    

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

      let allItinerario = productos[i].itinerario
      itinerarioArray.push(allItinerario)

      let allRequisitos = productos[i].requisitos
      requisitosArray.push(allRequisitos)
      
      let allIAltura = productos[i].altura
      alturaArray.push(allIAltura)

      let allDificultad = productos[i].dificultad
      dificultadArray.push(allDificultad)

      let allDistancia = productos[i].distancia
      distanciaArray.push(allDistancia)

      let allTiempo = productos[i].tiempo
      tiempoArray.push(allTiempo)

      let allIncluye1 = productos[i].incluye1
      incluye1Array.push(allIncluye1)

      let allIncluye2 = productos[i].incluye2
      incluye2Array.push(allIncluye1)

      let allIncluye3 = productos[i].incluye3
      incluye3Array.push(allIncluye3)

      let allIncluye4 = productos[i].incluye4
      incluye4Array.push(allIncluye4)

      let allIncluye5 = productos[i].incluye5
      incluye5Array.push(allIncluye5)

      let allIncluye6 = productos[i].incluye6
      incluye6Array.push(allIncluye6)

      let allIncluye7 = productos[i].incluye7
      incluye7Array.push(allIncluye7)

      let allIncluye8 = productos[i].incluye8
      incluye8Array.push(allIncluye8)

      let allIncluye9 = productos[i].incluye9
      incluye9Array.push(allIncluye9)

      let allIncluye10 = productos[i].incluye10
      incluye10Array.push(allIncluye10)

      let allIncluye11 = productos[i].incluye11
      incluye11Array.push(allIncluye11)

      let allIncluye12 = productos[i].incluye12
      incluye12Array.push(allIncluye12)

      let allIncluye13 = productos[i].incluye13
      incluye13Array.push(allIncluye13)

      let allIncluye14 = productos[i].incluye14
      incluye14Array.push(allIncluye14)

      let allIncluye15 = productos[i].incluye15
      incluye15Array.push(allIncluye15)
      
      let allnoIncluye1 = productos[i].noIncluye1
      noIncluye1Array.push(allnoIncluye1)

      let allnoIncluye2 = productos[i].noIncluye2
      noIncluye2Array.push(allnoIncluye2)

      let allnoIncluye3 = productos[i].noIncluye3
      noIncluye3Array.push(allnoIncluye3)

      let allnoIncluye4 = productos[i].noIncluye4
      noIncluye4Array.push(allnoIncluye4)

      let allnoIncluye5 = productos[i].noIncluye5
      noIncluye5Array.push(allnoIncluye5)

      let allnoIncluye6 = productos[i].noIncluye6
      noIncluye6Array.push(allnoIncluye6)

      let allNecesario1 = productos[i].necesario1
      necesario1Array.push(allNecesario1)

      let allNecesario2 = productos[i].necesario2
      necesario2Array.push(allNecesario2)

      let allNecesario3 = productos[i].necesario3
      necesario3Array.push(allNecesario3)

      let allNecesario4 = productos[i].necesario4
      necesario4Array.push(allNecesario4)

      let allNecesario5 = productos[i].necesario5
      necesario5Array.push(allNecesario5)

      let allNecesario6 = productos[i].necesario6
      necesario6Array.push(allNecesario6)

      let allNecesario7 = productos[i].necesario7
      necesario7Array.push(allNecesario7)

      let allNecesario8 = productos[i].necesario8
      necesario8Array.push(allNecesario8)

      let allNecesario9 = productos[i].necesario9
      necesario9Array.push(allNecesario9)

      let allNecesario10 = productos[i].necesario10
      necesario10Array.push(allNecesario10)

      let allNecesario11 = productos[i].necesario11
      necesario11Array.push(allNecesario11)

      let allNecesario12 = productos[i].necesario12
      necesario12Array.push(allNecesario12)

      let allNecesario13 = productos[i].necesario13
      necesario13Array.push(allNecesario13)

      let allNecesario14 = productos[i].necesario14
      necesario14Array.push(allNecesario14)

      let allNecesario15 = productos[i].necesario15
      necesario15Array.push(allNecesario15)

      let allNecesario16 = productos[i].necesario16
      necesario16Array.push(allNecesario16)

      let allNecesario17 = productos[i].necesario17
      necesario17Array.push(allNecesario17)

      let allNecesario18 = productos[i].necesario18
      necesario18Array.push(allNecesario18)

      let allNecesario19 = productos[i].necesario19
      necesario19Array.push(allNecesario19)

      let allNecesario20 = productos[i].necesario20
      necesario20Array.push(allNecesario20)

      let allNecesario21 = productos[i].necesario21
      necesario21Array.push(allNecesario21)


      // let img2 = productos[i].img2;

      // let img2Split = img2.split('/');

      // let img2Splitted = img2Split[img2Split.length-1];

      // let img2IdUndotted = img2Splitted.split('.')

      // let img2Id = img2IdUndotted[img2IdUndotted.length-2]

      // img2Array.push(img2Id);


    }

  })
  .catch((error) => {
    console.log(error);
  });
  return [imgIdArray, names, prices, users, descripciones, ciudades, ids, itinerarioArray, requisitosArray, alturaArray, dificultadArray, distanciaArray, tiempoArray, incluye1Array, incluye2Array, incluye3Array, incluye4Array, incluye5Array, incluye6Array, incluye7Array, incluye8Array, incluye9Array, incluye10Array, incluye11Array, incluye12Array, incluye13Array, incluye14Array, incluye15Array, noIncluye1Array, noIncluye2Array, noIncluye3Array, noIncluye4Array, noIncluye5Array, noIncluye6Array, necesario1Array, necesario2Array, necesario3Array, necesario4Array, necesario5Array, necesario6Array, necesario7Array, necesario8Array, necesario9Array, necesario10Array, necesario11Array, necesario12Array, necesario13Array, necesario14Array, necesario15Array, necesario16Array, necesario17Array, necesario18Array, necesario19Array, necesario20Array, necesario21Array, img2Array];
}