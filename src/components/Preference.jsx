import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from './Footer';


export const Preference = () => {
  return (
    <>
    <div className="d-flex justify-content-center">
    <Row className="d-flex align-items-center"> 
        <Col sm={12} lg={6}>
            <div className="d-flex container justify-content-center mt-5">
                <h1 className="text-light align-text-bottom">Why prefer us?</h1>
            </div>
        </Col>
        <Col sm={12} lg={6}>
            <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669835805/logo2_fsepes.png" alt="Logo de Cabra del Valle" className="mt-5" style={{ maxWidth: '90vw'}}/>
        </Col>
    </Row>
    </div>
    <p className="container mt-4 px-4" style={{fontWeight: 'bolder', fontSize: 'larger'}}>
    Our guides have been exploring this region of Chile for years, always keeping up to date on the different techniques necessary for each tour, which gives a unique value to the guide.
        <br />
        <br />
        Each expedition seeks to have a maximum of 6 people so that the experience is truly personalized and of quality. In addition to the certified guide, an assistant will accompany us from the mid-mountain (in the process of training to be a professional guide) in this way we can have greater security and technical support when carrying out the activity.
        <br />
        <br />
        Our purpose is to be a contribution to the community, which is why we try to include local services in almost all our 'outings', thus generating a pioneering support network in the region.
        <br />
        <br />
        All the guides receive training in the management and execution of techniques that represent a minimum impact on nature, which will be sought to transfer to the passengers in each guided tour.
    </p>
    <div className="d-flex justify-content-center">
    <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669835715/monta%C3%B1as_nl4ebb.png"  alt="montañas" style={{ maxWidth: '40vw', minWidth: '40%', marginTop: '4rem' }} className="container-fluid mb-5" />

    </div>
    {<Footer />}
    </>

  )
}
