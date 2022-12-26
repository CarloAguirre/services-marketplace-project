import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../assets/css/tabs.css'
import '../assets/css/card.css'
import { Footer } from './Footer';


export const Itinerario = ({nombre, img, desc, itinerario, altura, distancia, dificultad, tiempo, img2, requisitos}) => {
 

    
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'dubwhwd1w'
    }
    }); 

    const myImage = cld.image(`${img}`);


    const myImage2 = cld.image(`${img2}`);
  return (

    <div>
        <h1 className="pt-5 mx-2 mb-5 text-light text-center">{nombre}</h1>
        <div className="d-flex justify-content-center container">
        <Row className="d-flex justify-content-center filter__shadow py-4 mx-2">      
            <Col sm={12} lg={6}> <AdvancedImage cldImg={myImage} style={{ maxWidth: '90vw'}} className="container"/></Col>
            <Col sm={12} lg={6}>
                <p style={{ color: 'white', marginTop: '6rem', maxWidth: '90vw', fontWeight: 'bold' }}  className="ps-2">"{desc}"</p>
                <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669835715/monta%C3%B1as_nl4ebb.png"  alt="montañas" style={{ maxWidth: '90vw', marginTop: '4rem' }} className="ps-2 container" />
            </Col>
                   
        </Row>
        </div>
        <div className='container'>
            <h3 className="mt-5 mx-2 px-5 text-light">Itinerary:</h3>
            <p className="mt-3 px-5 mx-2"  style={{fontWeight: 'bold', fontSize: 'larger'}}>{itinerario}</p>


            <h3 className="mt-5 mx-2 px-5 text-light text-center">Specs:</h3>
            <div className=' lista-pc mb-5'>
                <ul className="list-group list-group-horizontal justify-content-center mt-5">
                    {
                        (altura === "")
                            ? <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Height (mt):</strong> Not applicable </li>
                            : <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Height (mt):</strong> {altura} </li>
                    }
                    {
                        (dificultad === "")
                            ? <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Difficulty:</strong> Not applicable </li>
                            : <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Difficulty:</strong> {dificultad} </li>
                    }
                    {
                        (distancia=== "")
                            ? <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Distance:</strong> Not applicable </li>
                            : <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Distance:</strong> {distancia} </li>
                    }
                    {
                        (tiempo === "")
                            ? <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Time:</strong> Not applicable </li>
                            : <li className="list-group-item text-center lista-custom" style={{ minWidth: '20%' }}><strong>Time:</strong> {tiempo} </li>
                    }
                </ul>
            </div>


            <div className='pb-5 lista-responsive'>
                <ul className="list-group justify-content-center mt-5">
                    {
                        (altura === "")
                            ? <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Height:</strong> Not applicable </li>
                            : <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Height:</strong> {altura} </li>
                    }
                    {
                        (dificultad === "")
                            ? <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Difficulty:</strong> Not applicable </li>
                            : <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Difficulty:</strong> {dificultad} </li>
                    }
                    {
                        (distancia=== "")
                            ? <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Distance:</strong> Not applicable </li>
                            : <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Distance:</strong> {distancia} </li>
                    }
                    {
                        (tiempo === "")
                            ? <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Time:</strong> Not applicable </li>
                            : <li className="list-group-item text-center" style={{ minWidth: '20%' }}><strong>Time:</strong> {tiempo} </li>
                    }
                </ul>
            </div>
        </div>
        <Row className="d-flex justify-content-center ">
        <Col sm={12} lg={8} xl={6}><AdvancedImage cldImg={myImage2}className="container d-flex image2 justify-content-center"/></Col>
        </Row>
        <div className='pb-3 mx-2'>
                <ul className='list-group list-group-horizontal justify-content-center mt-5'>
                    {
                        (requisitos === "")
                            ? <li className="list-group-item text-center lista-custom text-danger" style={{ minWidth: '20%', fontSize: 'larger' }}><strong>Requirements:</strong> Not applicable </li>
                            : <li className="list-group-item text-center lista-custom text-danger" style={{ minWidth: '20%',fontSize: 'larger' }}><strong>Requirements:</strong> {requisitos} </li>
                    }

                </ul>
            </div>
        {<Footer />}
    </div>

  )
}
