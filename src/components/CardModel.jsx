import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AdvancedImage} from '@cloudinary/react';

import '../assets/css/card.css'

const CardModel = ({img, title, price, user})=>{

    // const path = `../src/assets/imgs/${img}.jpg`

  
    return (
        <div className='card-wrapper my-5 mx-2'>
            <Card style={{ width: '100%', marginBottom: '1.5rem'}} className = 'card-style'>
                <AdvancedImage cldImg={img} className='card-image'/>
                {/* <Card.Img variant="top" src={ path } className = 'card-image'/> */}
                <Card.Body className = 'card-style bg-light'>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='text-dark text-opacity-50 fw-semibold'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className="text-dark text-opacity-50 fw-semibold d-flex justify-content-between">
                        <span><i className="fa-solid fa-location-dot me-2"></i>City, Country.</span>
                    <p className="text-dark text-opacity-50 me-3 fw-semibold">Usuario: {user}</p>
                    </div>
                <hr />
                <Button variant="primary" 
                className='btn btn-light btn-outline-success p-3'
                style={{float: "left"}}
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