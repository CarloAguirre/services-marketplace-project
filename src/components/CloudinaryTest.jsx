import React, { useEffect } from 'react'
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

const imageIdArray = [];

const getImagesID = async()=>{

  const imagesIdArrayFetch = await productInfoFetch();

  let i = ''
  for(i=0; i<imagesIdArrayFetch.length; i++){
    imageIdArray.push(imagesIdArrayFetch[i]);
  }
} ;
getImagesID();

console.log(imageIdArray);


    
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dubwhwd1w'
    }
  }); 
   
  
    // Use the image with public ID.
    // const cardCreator = ()=>{

    //   let i = '';
    //   for(i=0; i<imageIdArray.length; i ++){
        
    //     console.log(imageIdArray[0])
        
    let myImage = cld.image('ozzn0o2fe1nmpbii39t0');
        
    //     // document.getElementById('cards').innerHTML = `<Col xs={12} md={6} xl={4} > {<CardModel img={1} />} </Col>`  
        
    //     // Apply the transformation.
    //     myImage
    //     .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image.
    //     .roundCorners(byRadius(20))    // Round the corners.
    //     .effect(sepia())  // Apply a sepia effect.
    //     .overlay(   // Overlay the Cloudinary logo.
    //       source(
    //           image('cloudinary_icon_blue')
    //             .transformation(new Transformation()
    //             .resize(scale(50)) // Resize the logo.
    //             .adjust(opacity(60))  // Adjust the opacity of the logo.
    //           .adjust(brightness(200)))  // Adjust the brightness of the logo.       
    //       )
    //       .position(new Position().gravity(compass('south_east')).offsetX(5).offsetY(5))   // Position the logo.
    //     )
    //     .rotate(byAngle(10))  // Rotate the result.
    //     .format('png');   // Deliver as PNG. */
        
    //     // Render the transformed image in a React component.
  
    //   }
    // }

    // cardCreator();


  return (
   
      <div className='card-wrapper my-5 mx-2'>
          <Card style={{ width: '100%', marginBottom: '1.5rem'}} className = 'card-style '>
          <AdvancedImage cldImg={myImage} />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className='text-dark text-opacity-50 fw-semibold'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <p className="text-dark text-opacity-50 fw-semibold">
                      <span><i className="fa-solid fa-location-dot me-2"></i></span>
                      City, Country.
                  </p>
              <hr />
              <Button variant="primary" 
              className='btn btn-light btn-outline-success p-3'
              style={{float: "left"}}
              >Reservar</Button>
              <div className="d-flex justify-content-end">
                  <p className="text-dark text-opacity-50 me-3 fw-semibold">$45.000</p>
                  <p className="text-success ms-4 fw-bold fs-5">$180.000</p>
              </div>
              </Card.Body>
          </Card>
      </div>
  )
};