import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const List = ()=> {
  return (
    <>
    <div className='d-flex justify-content-evenly'>
        <div>
          <Row>
            <ListGroup variant="flush">
              <h3 className='mt-3 text-center text-light'>Incluye:</h3>
              <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
              <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
              <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
              <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
              <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
              <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            </ListGroup>
          </Row>
        </div>
        <div>
          <Row>
          <ListGroup variant="flush">
          <h3 className='mt-3 text-center text-light'>No Incluye:</h3>
            <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            </ListGroup>
          </Row>
        </div>
    </div>
    <div className='d-flex justify-content-center'>
        <Row>
          <ListGroup variant="flush">
          <h3 className='mt-5 mx-2 text-center text-light'>Importante que cada pasajero lleve:</h3>
            <Col xs={12}> {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12}> {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12}> {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12}> {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12}> {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            <Col xs={12}> {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center'> Dapibus ac facilisis in</ListGroup.Item>} </Col>
            </ListGroup>
          </Row>
    </div>

    </>
  )
}

