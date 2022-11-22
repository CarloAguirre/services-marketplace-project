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





export const CloudinaryTest = () => {


  const [imageIdArray, setImageIdArray] = useState([])
  
  const getImagesID = async()=>{
    
    await productInfoFetch()
    .then(response =>{
      
      setImageIdArray(response);
    })
  };

  useEffect(() => {
    getImagesID()
  }, [])

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dubwhwd1w'
    }
  }); 
  
  let imagenes = {
  myImage1 :cld.image(`${imageIdArray[0]}`), 
  myImage2 :cld.image(`${imageIdArray[1]}`), 
  myImage3 :cld.image(`${imageIdArray[2]}`), 
  myImage4 :cld.image(`${imageIdArray[3]}`), 
  myImage5 :cld.image(`${imageIdArray[4]}`), 
  myImage6 :cld.image(`${imageIdArray[5]}`), 
}

 const onClickNextPage = ({target})=>{

  console.log(target.name)

  let newPages = [];
  
  if(target.name === 'prev'){
    let prevPages = [imageIdArray[0], imageIdArray[1], imageIdArray[2], imageIdArray[3], imageIdArray[4], imageIdArray[5]]
    setImageIdArray(prevPages)
    console.log(imageIdArray)
  }

  if(target.name === 'next'){
    let i = '';
  
    for(i=6; i<imageIdArray.length; i++){
  
      newPages.push(imageIdArray[i])
  }
  setImageIdArray(newPages)
  console.log(imageIdArray)
  }

};

   
    return (
<> 

    <header>
      {<NavModel name ={name} />}
    </header>

      <div id='cards'></div>
      <div className=' mx-5'>
      <Container>
        <Row>
        {
            (imageIdArray[0])
                    ? <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage1} />} </Col>
                    : null
          }
          {
            (imageIdArray[1])
                    ? <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage2} />} </Col>
                    : null
          }
          {
            (imageIdArray[2])
                    ? <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage3} />} </Col>
                    : null
          }
          {
            (imageIdArray[3])
                    ? <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage4} />} </Col>
                    : null
          }
          {
            (imageIdArray[4])
                    ? <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage5} />} </Col>
                    : null
          }
          {
            (imageIdArray[5])
                    ? <Col xs={12} md={6} xl={4} > {<CardModel img={imagenes.myImage6} />} </Col>
                    : null
          }
          
        </Row>
      </Container>
      <button onClick={onClickNextPage} name = 'prev' >Pagina anterior</button>
      {
            (imageIdArray[5])
                    ? <button onClick={onClickNextPage} name = 'next' >Pagina siguiente</button>
                    : null
          }
      <hr className=' container' />
      <p className='text-center'>© Cabra del valle 2022 - todos los derechos reservados</p>
      </div>
</>

   
  
  );
}
