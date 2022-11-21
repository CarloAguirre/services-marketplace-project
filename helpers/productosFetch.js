import axios from "axios";

import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import required qualifiers.
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import CardModel from "../src/components/CardModel";


export const productInfoFetch = async()=>{
  
  let imgIdArray = []

  let data = '';

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dubwhwd1w'
  //   }
  // }); 
    
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
      // let myImage = cld.image(`'${imgId}'`);

      // document.getElementById('cards').innerHTML = `<p>hola mundo</p>`

    }

  })
  .catch((error) => {
    console.log(error);
  });

  // console.log(imgIdArray)
  return imgIdArray;
}