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
                <h1 className="text-light align-text-bottom">¿Por que preferirnos?</h1>
            </div>
        </Col>
        <Col sm={12} lg={6}>
            <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669835805/logo2_fsepes.png" alt="Logo de Cabra del Valle" className="mt-5" style={{ maxWidth: '90vw'}}/>
        </Col>
    </Row>
    </div>
    <p className="container mt-4 px-4" style={{fontWeight: 'bolder', fontSize: 'larger'}}>
        Nuestros guías llevan años explorando esta región de Chile, siempre manteniéndose al día en las diferentes técnicas necesarias para cada tour, lo que da un valor único al guiado.
        <br />
        <br />
        Cada expedición busca tener un máximo de cupos de 6 personas para que la experiencia sea realmente personalizada y de calidad. Además del guía certificado, desde la media montaña nos acompañara un ayudante (en proceso de formación para ser guía profesional) de esta forma podremos tener mayor seguridad y respaldo técnico al momento de realizar la actividad.
        <br />
        <br />
        Nuestro propósito es ser un aporte a la comunidad por lo que tratamos de incluir servicios locales en casi todas nuestras ‘salidas’, generando así una red de apoyo pionera en la región.
        <br />
        <br />
        Todos los guías reciben formación en el manejo y ejecución de técnicas que representen un mínimo impacto para la naturaleza, las cuales se buscaran traspasar a los pasajeros en cada guiado.
    </p>
    <div className="d-flex justify-content-center">
    <img src="https://res.cloudinary.com/dubwhwd1w/image/upload/v1669835715/monta%C3%B1as_nl4ebb.png"  alt="montañas" style={{ maxWidth: '40vw', minWidth: '40%', marginTop: '4rem' }} className="container-fluid mb-5" />

    </div>
    {<Footer />}
    </>

  )
}
