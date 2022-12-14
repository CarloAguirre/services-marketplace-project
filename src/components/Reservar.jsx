import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/reservar.css'

export const Reservar = () => {
  return (
    <>
    <div className="d-flex principal">
    <Row className=""> 
        <Col sm={1} lg={3} className="col-responsiveSmall__contacto">
            <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669835616/reservar_qwoyww.png" alt="Logo de Cabra del Valle" className="img-position img-pc"/>
            <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669835646/contacto_w9ht21.png" alt="Logo de Cabra del Valle" className="img-position img-responsive__contacto"/>
        </Col>
        <Col className='contact-col'>
        
            <div className="btn-custom">
                <h1 className="text-light text-light__custom">Contact us</h1>
                <div className='d-flex mt-4'>
                  <a href="https://wa.me/+99999999" target='_blank'><button type="button" className="btn btn-success btn-lg ">Whatsapp</button></a>                
                  <div className='ms-3'>
                   <a href="mailto:reservations@yuremail"><button type="button" className="btn btn-primary btn-lg ">E-mail</button></a>
                  </div>
                </div>
                <p className='mt-5 text-light'>Address: Street #215 Las Vegas, United States.</p>
            </div>
      
        </Col>
    </Row>
    </div>

    </>

  )
}
