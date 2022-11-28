import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"
import {fill} from "@cloudinary/url-gen/actions/resize";

// Import required qualifiers.
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

import '../assets/css/tabs.css'


export const Itinerario = ({nombre, img, desc, itinerario, altura, distancia, dificultad, tiempo}) => {
 

    const cld = new Cloudinary({
    cloud: {
        cloudName: 'dubwhwd1w'
    }
    }); 

    const myImage = cld.image(`${img}`);
    myImage
    .resize(fill().width(350).height(350))  // Crop the image.
    .roundCorners(byRadius(10))    // Round the corners.
    //   .effect(sepia())  // Apply a sepia effect.
    // .rotate(byAngle(3))  // Rotate the result.
    .format('png');   // Deliver as PNG. */

  return (

    <div>
        <h1 className="pt-5 mx-2 mb-5 text-light text-center">{nombre}</h1>
        <div className="d-flex justify-content-center container">
        <Row className="d-flex justify-content-center">      
            <Col sm={12} lg={6}> <AdvancedImage cldImg={myImage} style={{ maxWidth: '90vw' }} className="container"/></Col>
            <Col sm={12} lg={6}>
                <p style={{ color: 'white', marginTop: '6rem', maxWidth: '90vw', fontWeight: 'bold' }} className="ps-2">"{desc}"</p>
                <img src="../public/montañas.png"  alt="montañas" style={{ maxWidth: '90vw', marginTop: '4rem' }} className="ps-2" />
            </Col>
                   
        </Row>
        </div>
        <div className='container'>
            <h3 className="mt-5 mx-2 px-5 text-light">Itinerario:</h3>
            <p className="mt-3 px-5 mx-2"  style={{fontWeight: 'bold', fontSize: 'larger'}}>{itinerario}</p>


            <h3 className="mt-5 mx-2 px-5 text-light text-center">Especificaciones:</h3>
            <div className='pb-5'>
                <ul className="list-group list-group-horizontal justify-content-center my-5">
                    {
                        (altura === "")
                            ? <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Altura:</strong> No aplica </li>
                            :<li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Altura:</strong> {altura} </li>
                    }
                    {
                        (dificultad === "")
                            ?<li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Dificultad:</strong> No aplica </li>
                            :<li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Dificultad:</strong> {dificultad} </li>
                    }
                    {
                        (distancia=== "")
                            ?<li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Distancia:</strong> No aplica </li>
                            :<li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Distancia:</strong> {distancia} </li>
                    }
                    {
                        (tiempo === "")
                            ? <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Tiempo:</strong> No aplica </li>
                            : <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Tiempo:</strong> {tiempo} </li>
                    }
                </ul>
            </div>
        </div>
    </div>

  )
}
