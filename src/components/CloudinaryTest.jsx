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
import { NavModel } from './NavModel';

import * as ReactDOMServer from 'react-dom/server';



export const CloudinaryTest = () => {


  const [imageIdArray, setImageIdArray] = useState([])
  
  
  useEffect(() => {
    const getImagesID = async()=>{
      
      await productInfoFetch()
      .then(response =>{
        
        setImageIdArray(response);

        
      })
    };
    getImagesID()
  }, [imageIdArray.length])

  

 
    
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dubwhwd1w'
      }
    }); 
    
    let imagenes = {
    myImage1 :cld.image(`${imageIdArray[2]}`), 
    myImage2 :cld.image(`${imageIdArray[3]}`), 
    myImage3 :cld.image(`${imageIdArray[4]}`), 
    myImage4 :cld.image(`${imageIdArray[5]}`), 
    myImage5 :cld.image(`${imageIdArray[6]}`), 
    myImage6 :cld.image(`${imageIdArray[7]}`), 
    
  }
  

  
  
  
  // console.log(imagenes.myImage1)
  
  const [page, setPage] = useState(imagenes)
  
  const onClick = (event)=>{
    
  
      // console.log(page.myImage1)
      
      imagenes = setPage(
        {
          myImage1 :cld.image(`${imageIdArray[8]}`), 
          myImage2 :cld.image(`${imageIdArray[9]}`), 
          myImage3 :cld.image(`${imageIdArray[10]}`), 
          myImage4 :cld.image(`${imageIdArray[11]}`), 
          myImage5 :cld.image(`${imageIdArray[12]}`), 
          myImage6 :cld.image(`${imageIdArray[12]}`), 
          
        }
        )
        // console.log(page.myImage1)     
      
    }

    
    return (
<> 

    <header>
      {<NavModel name ={name} />}
    </header>

      <div id='cards'></div>
      <div className=' mx-5'>
      <Container>
        <Row>
          <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage1} />} </Col>
          <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage2} />} </Col>
          <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage3} />} </Col>
          <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage4} />} </Col>
          <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage5} />} </Col>
          <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage6} />} </Col>
        </Row>
      </Container>
      <button onClick={onClick}>Pagina siguiente</button>
      <hr className=' container' />
      <p className='text-center'>© Cabra del valle 2022 - todos los derechos reservados</p>
      </div>
</>

   
  
  );
}
