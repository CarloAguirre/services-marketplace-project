import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavModel } from '../components/NavModel';
// import { ListGroup } from 'react-bootstrap';
import { List } from '../components/List';

import '../assets/css/tabs.css'
import { Itinerario } from '../components/Itinerario';
import { useEffect, useState } from 'react';


export const TourDetails = () => {

    const valores = window.location.search;

        
        let id = valores.substr(1); 

        const [producto, setProducto] = useState('')
        
        const productoFetch = async()=>{
            let data = JSON.stringify({
                "nombre": "cabaña para 4",
                "categoria": "CABAÑAS",
                "precio": "100000"
            });
            
            let config = {
                method: 'get',
                url: `https://restserver-crud-avanzado.herokuapp.com/api/productos/${id}`,
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
            
            await axios(config)
            .then((response) => {
           const {producto} = response.data
           console.log(producto)
           
           setProducto(producto)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        productoFetch()
    }, [id])

    
    
  return (
    <>
    {
        (valores)?
        <div id='container' >
    
        <header>
            {<NavModel name={name} />}
        </header>
        <div className=''>
            <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
            >
                <Tab eventKey="profile" title="Itinerario" className='tab tabs-bg'> 
                {
                
                (producto)?<Itinerario nombre={producto.nombre} img={producto.img}/>
                :null
                }
                    
                </Tab>
                <Tab eventKey="home" title="Requerimientos" className='tab tabs-bg'>
                 <List /> 
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab" className='tab tabs-bg'>
                    
                </Tab>
                <Tab eventKey="contact" title="Contact" className='tab tabs-bg'>
                    
                </Tab>
            </Tabs>
            </div>
        </div>
        : <p>Error 404</p>
    }
    </>
  )
}
