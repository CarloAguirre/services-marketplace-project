import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AdvancedImage} from '@cloudinary/react';

import '../assets/css/card.css'

const CardModel = ({img, title, price, user, desc, city, id, itinerario, requisitos, altura, dificultad, distancia, tiempo, incluye1, incluye2, incluye3, incluye4, incluye5, incluye6, incluye7, incluye8, incluye9, incluye10, incluye11, incluye12, incluye13, incluye14, incluye15, noIncluye1, noIncluye2, 
noIncluye3, noIncluye4, noIncluye5, noIncluye6, necesario1, necesario2, necesario3, necesario4, necesario5, necesario6, necesario7, necesario8, necesario9,necesario10, necesario11, necesario12, necesario13, necesario14, necesario15, necesario16, necesario17, necesario18, necesario19, necesario20, necesario21, img2 })=>{

    let idImg = img.publicID    
    // const path = `../src/assets/imgs/${img}.jpg`

    const onClickHandle = async()=>{  
    window.location.href = `./tour-details?id=${id}&img=${idImg}&title=${title}&price=${price}&user=${user}&desc=${desc}&itinerarioDetail=${itinerario}&requisitosDetail=${requisitos}&alturaDetail=${altura}&dificultadDetail=${dificultad}&distanciaDetail=${distancia}&tiempoDetail=${tiempo}&incluye1Detail=${incluye1}&incluye2Detail=${incluye2}&incluye3Detail=${incluye3}&incluye4Detail=${incluye4}&incluye5Detail=${incluye5}&incluye6Detail=${incluye6}&incluye7Detail=${incluye7}&incluye8Detail=${incluye8}&incluye9Detail=${incluye9}&incluye10Detail=${incluye10}&incluye11Detail=${incluye11}&incluye12Detail=${incluye12}&incluye13Detail=${incluye13}&incluye14Detail=${incluye14}&incluye15Detail=${incluye15}&noIncluye1Detail=${noIncluye1}&noIncluye2Detail=${noIncluye2}&noIncluye3Detail=${noIncluye3}&noIncluye4Detail=${noIncluye4}&noIncluye5Detail=${noIncluye5}&noIncluye6Detail=${noIncluye6}&necesario1Detail=${necesario1}&necesario2Detail=${necesario2}&necesario3Detail=${necesario3}&necesario4Detail=${necesario4}&necesario5Detail=${necesario5}&necesario6Detail=${necesario6}&necesario7Detail=${necesario7}&necesario8Detail=${necesario8}&necesario9Detail=${necesario9}&ecesario10Detail=${necesario10}&necesario11Detail=${necesario11}&necesario12Detail=${necesario12}&necesario13Detail=${necesario13}&necesario14Detail=${necesario14}&necesario15Detail=${necesario15}&necesario16Detail=${necesario16}&necesario17Detail=${necesario17}&necesario18Detail=${necesario18}&necesario19Detail=${necesario19}&necesario20Detail=${necesario20}&necesario21Detail=${necesario21}&img2Detail=${img2}`
    }
  
    return (
        <div className='card-wrapper my-5 mx-2'>
            <Card style={{ width: '100%', marginBottom: '1.5rem', borderTopLeftRadius: '5%', borderTopRightRadius: '5%', border: 'none'}}>
                <AdvancedImage cldImg={img} className='card-image'/>
                {/* <Card.Img variant="top" src={ path } className = 'card-image'/> */}
                <Card.Body className = 'bg-light card-style'>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='text-dark text-opacity-50 fw-semibold'>
                   {desc}
                </Card.Text>
                <div className="text-dark text-opacity-50 fw-semibold d-flex justify-content-between">
                        <span><i className="fa-solid fa-location-dot me-2"></i>{city}, Chile.</span>
                    <p className="text-dark text-opacity-50 me-3 fw-semibold">Guía: {user}</p>
                    </div>
                <hr />
                <Button variant="primary" 
                className='btn btn-light btn-outline-success p-3'
                style={{float: "left"}}
                onClick ={onClickHandle}
                >Reservar</Button>
                <div className="d-flex justify-content-end">
                   
                    <p className="text-success me-4 fw-bold fs-5">${price}</p>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardModel;