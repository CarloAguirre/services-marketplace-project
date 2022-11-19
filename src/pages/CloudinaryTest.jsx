import React from 'react'
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


export const CloudinaryTest = () => {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dubwhwd1w'
    }
  }); 

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('yzpvtotlmfoha9ltmwze');

  // Apply the transformation.
  myImage
  // .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image.
  // .roundCorners(byRadius(20))    // Round the corners.
  // .effect(sepia())  // Apply a sepia effect.
  // .overlay(   // Overlay the Cloudinary logo.
  //   source(
  //     image('cloudinary_icon_blue')
  //       .transformation(new Transformation()
  //       .resize(scale(50)) // Resize the logo.
  //         .adjust(opacity(60))  // Adjust the opacity of the logo.
  //       .adjust(brightness(200)))  // Adjust the brightness of the logo.       
  //   )
  //   .position(new Position().gravity(compass('south_east')).offsetX(5).offsetY(5))   // Position the logo.
  // )
  // .rotate(byAngle(10))  // Rotate the result.
  // .format('png');   // Deliver as PNG. */

  // Render the transformed image in a React component.
  return (
 <>
      


      <div className='card-wrapper my-5 mx-2'>
      <Card style={{ width: '40%', marginBottom: '1.5rem'}} className = 'card-style '>
          {/* <Card.Img variant="top" src={ } className = 'card-image'/> */}
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
    </>
  )
};