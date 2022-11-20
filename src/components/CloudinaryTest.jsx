import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productInfoFetch } from '../../helpers/productosFetch';
import CardModel from './CardModel';



export const CloudinaryTest = () => {


  const [imageIdArray, setImageIdArray] = useState([])

  useEffect(() => {
    const getImagesID = async()=>{
  
      await productInfoFetch()
      .then(response =>{
        
        setImageIdArray(response)
        })
    
      };
      getImagesID()
      
  }, [])
  
  
    
    // Create and configure your Cloudinary instance

    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dubwhwd1w'
      }
    }); 
    let myImage = cld.image(`${imageIdArray[2]}`); 
    
    
    console.log(imageIdArray[2]) 

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  
  );
}
