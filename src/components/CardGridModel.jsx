import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardModel from './CardModel';

const CardGrid = ()=> {


  return (
    <Container>
    <Row>
      <Col xs={12} md={6} xl={4} > {<CardModel img={1} />} </Col>
      <Col xs={12} md={6} xl={4} > {<CardModel img={2} />} </Col>
      <Col xs={12} md={6} xl={4} > {<CardModel img={3} />} </Col>
      <Col xs={12} md={6} xl={4} > {<CardModel img={4} />} </Col>
      <Col xs={12} md={6} xl={4} > {<CardModel img={5} />} </Col>
      <Col xs={12} md={6} xl={4} > {<CardModel img={6} />} </Col>
    </Row>
  </Container>
);
}

export default CardGrid;