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
  let itinerario = [];
  let requisitos = [];
  let altura = [];
  let dificultad = [];
  let distancia =[];
  let tiempo =[];
  let incluye1 =[];
  let incluye2 =[];
  let incluye3 =[];
  let incluye4 =[];
  let incluye5 =[];
  let incluye6 =[];
  let incluye7 =[];
  let incluye8 =[];
  let incluye9 =[];
  let incluye10 =[];
  let incluye11 =[];
  let incluye12 =[];
  let incluye13 =[];
  let incluye14 =[];
  let incluye15 =[];
  let noIncluye1 =[];
  let noIncluye2 =[];
  let noIncluye3 =[];
  let noIncluye4 =[];
  let noIncluye5 =[];
  let noIncluye6 =[];
  let necesario1 =[];
  let necesario2 =[];
  let necesario3 =[];
  let necesario4 =[];
  let necesario5 =[];
  let necesario6 =[];
  let necesario7 =[];
  let necesario8 =[];
  let necesario9 =[];
  let necesario10 =[];
  let necesario11 =[];
  let necesario12 =[];
  let necesario13 =[];
  let necesario14 =[];
  let necesario15 =[];
  let necesario16 =[];
  let necesario17 =[];
  let necesario18=[];
  let necesario19 =[];
  let necesario20 =[];
  let necesario21 =[];



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

      let allItinerario = productos[i].itinerario
      itinerario.push(allItinerario)

      let allRequisitos = productos[i].requisitos
      requisitos.push(allRequisitos)
      
      let allIAltura = productos[i].altura
      altura.push(allIAltura)

      let allDificultad = productos[i].dificultad
      dificultad.push(allDificultad)

      let allDistancia = productos[i].distancia
      distancia.push(allDistancia)

      let allTiempo = productos[i].tiempo
      tiempo.push(allTiempo)

      let allIncluye1 = productos[i].incluye1
      incluye1.push(allIncluye1)

      let allIncluye2 = productos[i].incluye2
      incluye2.push(allIncluye1)

      let allIncluye3 = productos[i].incluye3
      incluye3.push(allIncluye3)

      let allIncluye4 = productos[i].incluye4
      incluye4.push(allIncluye4)

      let allIncluye5 = productos[i].incluye5
      incluye5.push(allIncluye5)

      let allIncluye6 = productos[i].incluye6
      incluye6.push(allIncluye6)

      let allIncluye7 = productos[i].incluye7
      incluye7.push(allIncluye7)

      let allIncluye8 = productos[i].incluye8
      incluye8.push(allIncluye8)

      let allIncluye9 = productos[i].incluye9
      incluye9.push(allIncluye9)

      let allIncluye10 = productos[i].incluye10
      incluye10.push(allIncluye10)

      let allIncluye11 = productos[i].incluye11
      incluye11.push(allIncluye11)

      let allIncluye12 = productos[i].incluye12
      incluye12.push(allIncluye12)

      let allIncluye13 = productos[i].incluye13
      incluye13.push(allIncluye13)

      let allIncluye14 = productos[i].incluye14
      incluye14.push(allIncluye14)

      let allIncluye15 = productos[i].incluye15
      incluye15.push(allIncluye15)
      
      let allnoIncluye1 = productos[i].noIncluye1
      noIncluye1.push(allnoIncluye1)

      let allnoIncluye2 = productos[i].noIncluye2
      noIncluye2.push(allnoIncluye2)

      let allnoIncluye3 = productos[i].noIncluye3
      noIncluye3.push(allnoIncluye3)

      let allnoIncluye4 = productos[i].noIncluye4
      noIncluye4.push(allnoIncluye4)

      let allnoIncluye5 = productos[i].noIncluye5
      noIncluye5.push(allnoIncluye5)

      let allnoIncluye6 = productos[i].noIncluye6
      noIncluye6.push(allnoIncluye6)

      let allNecesario1 = productos[i].necesario1
      necesario1.push(allNecesario1)

      let allNecesario2 = productos[i].necesario2
      necesario2.push(allNecesario2)

      let allNecesario3 = productos[i].necesario3
      necesario3.push(allNecesario3)

      let allNecesario4 = productos[i].necesario4
      necesario4.push(allNecesario4)

      let allNecesario5 = productos[i].necesario5
      necesario5.push(allNecesario5)

      let allNecesario6 = productos[i].necesario6
      necesario6.push(allNecesario6)

      let allNecesario7 = productos[i].necesario7
      necesario7.push(allNecesario7)

      let allNecesario8 = productos[i].necesario8
      necesario8.push(allNecesario8)

      let allNecesario9 = productos[i].necesario9
      necesario9.push(allNecesario9)

      let allNecesario10 = productos[i].necesario10
      necesario10.push(allNecesario10)

      let allNecesario11 = productos[i].necesario11
      necesario11.push(allNecesario11)

      let allNecesario12 = productos[i].necesario12
      necesario12.push(allNecesario12)

      let allNecesario13 = productos[i].necesario13
      necesario13.push(allNecesario13)

      let allNecesario14 = productos[i].necesario14
      necesario14.push(allNecesario14)

      let allNecesario15 = productos[i].necesario15
      necesario15.push(allNecesario15)

      let allNecesario16 = productos[i].necesario16
      necesario16.push(allNecesario16)

      let allNecesario17 = productos[i].necesario17
      necesario17.push(allNecesario17)

      let allNecesario18 = productos[i].necesario18
      necesario18.push(allNecesario18)

      let allNecesario19 = productos[i].necesario19
      necesario19.push(allNecesario19)

      let allNecesario20 = productos[i].necesario20
      necesario20.push(allNecesario20)

      let allNecesario21 = productos[i].necesario21
      necesario21.push(allNecesario21)
    }

  })
  .catch((error) => {
    console.log(error);
  });
  return [imgIdArray, names, prices, users, descripciones, ciudades, ids, itinerario, requisitos, altura, dificultad, distancia, tiempo, incluye1, incluye2, incluye3, incluye4, incluye5, incluye6, incluye7, incluye8, incluye9, incluye10, incluye11, incluye12, incluye13, incluye14, incluye15, noIncluye1, noIncluye2, noIncluye3, noIncluye4, noIncluye5, noIncluye6, necesario1, necesario2, necesario3, necesario4, necesario5, necesario6, necesario7, necesario8, necesario9, necesario10, necesario11, necesario12, necesario13, necesario14, necesario15, necesario16, necesario17, necesario18, necesario19, necesario20, necesario21];
}