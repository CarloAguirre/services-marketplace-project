import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/css/tabs.css'

export const List = ({incluye1, incluye2, incluye3, incluye4, incluye5, incluye6, incluye7, incluye8, incluye9, incluye10, incluye11, incluye12, incluye13,     incluye14, incluye15, noIncluye1, noIncluye2, noIncluye3, noIncluye4, noIncluye5, noIncluye6, necesario1, necesario2, necesario3, necesario4, necesario5, necesario6, necesario7, necesario8, necesario9, necesario10, necesario11, necesario12, necesario13, necesario14, necesario15, necesario16, necesario17, necesario18, necesario19, necesario20, necesario21})=> {
  return (
    <>
    <div className='pb-5'>

    <div className='d-flex justify-content-evenly pt-4'>
        <div>
          <Row>
            <ListGroup variant="flush">
              <h3 className='mt-3 text-center text-light'>Incluye:</h3>
              {
                (incluye1 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye1}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye2 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye2}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye3 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye3}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye4 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye4}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye5 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye5}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye6 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye6}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye7 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye7}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye8 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye8}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye9 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye9}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye10 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye10}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye11 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye11}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye12 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye12}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye13 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye13}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye14 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye14}</p> </ListGroup.Item>} </Col>
              }
              {
                (incluye15 === "")
                        ? null
                        : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✔ {incluye15}</p> </ListGroup.Item>} </Col>
              }
              
            </ListGroup>
          </Row>
        </div>
        <div>
          <Row>
          <ListGroup variant="flush">
          <h3 className='mt-3 text-center text-light'>No Incluye:</h3>
              {
                    (noIncluye1 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✘ {noIncluye1}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye2 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✘ {noIncluye2}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye3 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✘ {noIncluye3}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye4 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✘ {noIncluye4}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye5 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✘ {noIncluye5}</p> </ListGroup.Item>} </Col>
              }
              {
                    (noIncluye6 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>✘ {noIncluye6}</p> </ListGroup.Item>} </Col>
              }

            </ListGroup>
          </Row>
        </div>
    </div>
    <div className='d-flex justify-content-center'>
        <Row className='pb-5'>
          <ListGroup variant="flush">
          <h3 className='mt-5 mx-2 text-center text-light'>Importante que cada pasajero lleve:</h3>
            
            {
                    (necesario1 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario1}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario2 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario2}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario3 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario3}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario4 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario4}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario5 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario5}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario6 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario6}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario7 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario7}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario8 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario8}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario9 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario9}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario10 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario10}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario11 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario11}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario12 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario12}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario13 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario13}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario14 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario14}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario15 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario15}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario16 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario16}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario17 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario17}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario18 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario18}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario19 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario19}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario20 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario20}</p> </ListGroup.Item>} </Col>
            }
            {
                    (necesario21 === "")
                            ? null
                            : <Col xs={12} md={12} > {<ListGroup.Item style={{backgroundColor: '#c84614', minWidth: '45vw'}} className='text-center list-label'> <p   className='list-label'>➕ {necesario1}</p> </ListGroup.Item>} </Col>
            }
            
            </ListGroup>
          </Row>
    </div>

    </div>

    </>
  )
}

