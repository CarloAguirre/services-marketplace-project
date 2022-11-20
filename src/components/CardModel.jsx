import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AdvancedImage} from '@cloudinary/react';

import '../assets/css/card.css'

const CardModel = ({img})=>{

    // const path = `../src/assets/imgs/${img}.jpg`

  
    return (
        <div className='card-wrapper my-5 mx-2'>
            <Card style={{ width: '100%', marginBottom: '1.5rem'}} className = 'card-style '>
                <AdvancedImage cldImg={img} />
                {/* <Card.Img variant="top" src={ path } className = 'card-image'/> */}
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
    );
}

export default CardModel;