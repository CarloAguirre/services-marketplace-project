import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/tabs.css'
import { Footer } from './Footer';

export const List = ({incluye1, incluye2, incluye3, incluye4, incluye5, incluye6, incluye7, incluye8, incluye9, incluye10, incluye11, incluye12, incluye13,     incluye14, incluye15, noIncluye1, noIncluye2, noIncluye3, noIncluye4, noIncluye5, noIncluye6, necesario1, necesario2, necesario3, necesario4, necesario5, necesario6, necesario7, necesario8, necesario9, necesario10, necesario11, necesario12, necesario13, necesario14, necesario15, necesario16, necesario17, necesario18, necesario19, necesario20, necesario21})=> {
  return (
    <>
    <div className='pb-5'>

    <div className='d-flex justify-content-evenly pt-4 list-container '>
        <div>
          <Row >
            <ListGroup variant="flush" className='ms-1'>
              <h3 className='mt-3 text-center text-light'>Incluye:</h3>
              {
                (incluye1 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem', margin: '1rem'}} className='text-center list-label card card'> <p   className='list-label mt-3 mt-3'>✔ {incluye1}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye2 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye2}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye3 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye3}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye4 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye4}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye5 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye5}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye6 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye6}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye7 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye7}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye8 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye8}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye9 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye9}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye10 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye10}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye11 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye11}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye12 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye12}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye13 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye13}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye14 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye14}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye15 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✔ {incluye15}</p> </ListGroup.Item>} </Col>
              }
              
            </ListGroup>
          </Row>
        </div>
        <div>
          <Row>
          <ListGroup variant="flush">
          <h3 className='mt-3 text-center text-light'>Necesario traer:</h3>

            {
                    (necesario1 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario1}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario2 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario2}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario3 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario3}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario4 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario4}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario5 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario5}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario6 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario6}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario7 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario7}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario8 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario8}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario9 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario9}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario10 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario10}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario11 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario11}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario12 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario12}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario13 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario13}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario14 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario14}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario15 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario15}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario16 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario16}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario17 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario17}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario18 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario18}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario19 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario19}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario20 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario20}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario21 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>➕ {necesario1}</p> </ListGroup.Item>} </Col>
            }

            </ListGroup>
          </Row>
        </div>
    </div>
    <div className='d-flex justify-content-center'>
        <Row className='pb-5'>
          <ListGroup variant="flush">
          <h3 className='mt-5 mx-2 text-center text-light'>No incluye:</h3>
            
          {
                    (noIncluye1 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✘ {noIncluye1}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye2 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✘ {noIncluye2}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye3 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✘ {noIncluye3}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye4 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✘ {noIncluye4}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye5 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✘ {noIncluye5}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye6 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw', margin: '1rem'}} className='text-center list-label card'> <p   className='list-label mt-3'>✘ {noIncluye6}</p> </ListGroup.Item>} </Col>
              }
            
            </ListGroup>
          </Row>
    </div>

    </div>
          {<Footer />}

    </>
  )
}

