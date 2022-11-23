import React, { memo, useEffect, useState } from 'react'
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
import { IsLoading } from './IsLoading';





export const CardGrid = () => {


  const [imageIdArray, setImageIdArray] = useState([[], [], [], [], [], []])
  
  const getImagesID = async()=>{
    
    await productInfoFetch()
    .then(response =>{
      console.log(response)
      setImageIdArray(response);
    })
  };

  useEffect(() => {
    getImagesID()
  }, [setImageIdArray])


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dubwhwd1w'
    }
  }); 
  
  let imagenes = {
    myImage1 :cld.image(`${imageIdArray[0][0]}`), 
    myImage2 :cld.image(`${imageIdArray[0][1]}`), 
    myImage3 :cld.image(`${imageIdArray[0][2]}`), 
    myImage4 :cld.image(`${imageIdArray[0][3]}`), 
    myImage5 :cld.image(`${imageIdArray[0][4]}`), 
    myImage6 :cld.image(`${imageIdArray[0][5]}`), 
    
  }

  let names = {
   name1: imageIdArray[1][0],
   name2: imageIdArray[1][1],
   name3: imageIdArray[1][2],
   name4: imageIdArray[1][3],
   name5: imageIdArray[1][4],
   name6: imageIdArray[1][5]
  }

  let prices = {
    price1: imageIdArray[2][0],
    price2: imageIdArray[2][1],
    price3: imageIdArray[2][2],
    price4: imageIdArray[2][3],
    price5: imageIdArray[2][4],
    price6: imageIdArray[2][5]
   }

   let users = {
    user1: imageIdArray[3][0],
    user2: imageIdArray[3][1],
    user3: imageIdArray[3][2],
    user4: imageIdArray[3][3],
    user5: imageIdArray[3][4],
    user6: imageIdArray[3][5]
   }

   let descripciones = {
    descripcion1: imageIdArray[4][0],
    descripcion2: imageIdArray[4][1],
    descripcion3: imageIdArray[4][2],
    descripcion4: imageIdArray[4][3],
    descripcion5: imageIdArray[4][4],
    descripcion6: imageIdArray[4][5]
   }

   let ciudades = {
    ciudad1: imageIdArray[5][0],
    ciudad2: imageIdArray[5][1],
    ciudad3: imageIdArray[5][2],
    ciudad4: imageIdArray[5][3],
    ciudad5: imageIdArray[5][4],
    ciudad6: imageIdArray[5][5]
   }



const onClickNextPage = ({target})=>{
  
  let newPages = []
  let newNames = []
  let newPrices = []
  let newUsers = []
  let newDesc = []
  let newCity = []
  
  if(target.name === 'next'){

    console.log('next')
    let i = '';
    
    for(i=6; i<imageIdArray[0].length; i++){
      
      newPages.push(imageIdArray[0][i])
      newNames.push(imageIdArray[1][i])
      newPrices.push(imageIdArray[2][i])
      newUsers.push(imageIdArray[3][i])
      newDesc.push(imageIdArray[4][i])
      newCity.push(imageIdArray[5][i])
    }
    setImageIdArray([newPages, newNames, newPrices, newUsers, newDesc, newCity])
  }

  if(target.name === 'prev'){

    console.log('prev')
    getImagesID();
  }
};
   
    return (
<> 

      <div className=' mx-5'>
      <Container>
        <Row>
          
          {
        
            (imageIdArray[0][0])
                    ?
          
        
            [(imageIdArray[0][0])
                    ? <Col xs={12} md={6} xl={4} key = 'col1'> {<CardModel img={imagenes.myImage1} title={names.name1} price={prices.price1} user={users.user1} desc={descripciones.descripcion1} city={ciudades.ciudad1}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][1])
                    ? <Col xs={12} md={6} xl={4} key = 'col2' > {<CardModel img={imagenes.myImage2} title={names.name2} price={prices.price2} user={users.user2} desc={descripciones.descripcion2} city={ciudades.ciudad2}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][2])
                    ? <Col xs={12} md={6} xl={4} key = 'col3'> {<CardModel img={imagenes.myImage3} title={names.name3} price={prices.price3} user={users.user3} desc={descripciones.descripcion3} city={ciudades.ciudad3}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][3])
                    ? <Col xs={12} md={6} xl={4} key = 'col4'> {<CardModel img={imagenes.myImage4} title={names.name4} price={prices.price4} user={users.user4} desc={descripciones.descripcion4} city={ciudades.ciudad4} />} </Col>
                    : null,
          
          
            (imageIdArray[0][4])
                    ? <Col xs={12} md={6} xl={4} key = 'col5'> {<CardModel img={imagenes.myImage5} title={names.name5} price={prices.price5} user={users.user5} desc={descripciones.descripcion5} city={ciudades.ciudad5}/>} </Col>
                    : null,
          
          
            (imageIdArray[0][5])
                    ? <Col xs={12} md={6} xl={4} key = 'col6'> {<CardModel img={imagenes.myImage6} title={names.name6} price={prices.price6} user={users.user6} desc={descripciones.descripcion6} city={ciudades.ciudad6}/>} </Col>
                    : null]

                    :<IsLoading />
                  }
          
        </Row>
      </Container>
      
      {
            (imageIdArray[0][5] && imageIdArray[0][6])
                    ?  <div className='text-center m-3 mb-5'><button onClick={onClickNextPage} name = 'next' type="button" className="btn btn-outline-success btn-lg text-center"> VER MAS </button></div>
                    :  <div className='text-center m-3 mb-5'><button onClick={onClickNextPage} name = 'prev' type="button" className="btn btn-outline-success btn-lg text-center"> VER MAS </button></div>
          }
      
      
      </div>
</>

   
  
  );
}
