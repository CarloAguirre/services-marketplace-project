
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavModel } from '../components/NavModel';
// import { ListGroup } from 'react-bootstrap';
import { List } from '../components/List';

import '../assets/css/tabs.css'
import { Itinerario } from '../components/Itinerario';
import { useEffect, useState } from 'react';
import { Preference } from '../components/Preference';


export const TourDetails = () => {

    let params = new URLSearchParams(document.location.search);
    let id = params.get("id"); 
    let img = params.get("img"); 
    let title = params.get("title"); 
    let price = params.get("price"); 
    let user = params.get("user"); 
    let desc = params.get("desc"); 
    let city = params.get("city"); 
    let itinerario = params.get('itinerario');
    let requisitos = params.get('requisitos');
    let altura = params.get('altura');
    let dificultad = params.get('dificultad');
    let distancia = params.get('distancia');
    let tiempo = params.get('tiempo');
    let incluye1 = params.get('incluye1');
    let incluye2 = params.get('incluye2');
    let incluye3 = params.get('incluye3');
    let incluye4 = params.get('incluye4');
    let incluye5 = params.get('incluye5');
    let incluye6 = params.get('incluye6');
    let noIncluye1 = params.get('noIncluye1');
    let noIncluye2 = params.get('noIncluye2');
    let noIncluye3 = params.get('noIncluye3');
    let noIncluye4 = params.get('noIncluye4');
    let noIncluye5 = params.get('noIncluye5');
    let noIncluye6 = params.get('noIncluye6');
    let noIncluye7 = params.get('noIncluye7');
    let noIncluye8 = params.get('noIncluye8');
    let noIncluye9 = params.get('noIncluye9');
    let noIncluye10 = params.get('noIncluye10');
    let noIncluye11 = params.get('noIncluye11');
    let noIncluye12 = params.get('noIncluye12');
    let noIncluye13 = params.get('noIncluye13');
    let noIncluye14 = params.get('noIncluye14');
    let noIncluye15 = params.get('noIncluye15');
    let necesario1 = params.get('necesario1');
    let necesario2 = params.get('necesario2');
    let necesario3 = params.get('necesario3');
    let necesario4 = params.get('necesario4');
    let necesario5 = params.get('necesario5');
    let necesario6 = params.get('necesario6');
    let necesario7 = params.get('necesario7');
    let necesario8 = params.get('necesario8');
    let necesario9 = params.get('necesario9');
    let necesario10 = params.get('necesario10');
    let necesario11 = params.get('necesario11');
    let necesario12 = params.get('necesario12');
    let necesario13 = params.get('necesario13');
    let necesario14 = params.get('necesario14');
    let necesario16 = params.get('necesario16');
    let necesario17 = params.get('necesario17');
    let necesario18 = params.get('necesario18');
    let necesario19 = params.get('necesario19');
    let necesario20 = params.get('necesario20');
    let necesario21 = params.get('necesario21');    
    
  return (
    <>
    {
        (id)?
        <div id='container' >
    
        <header>
            {<NavModel name={name} />}
        </header>
        <div>
            <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
            >
                <Tab eventKey="profile" title="Itinerario" className='tab tabs-bg'> 
                {               
                (title)?<Itinerario nombre={title} img={img} desc={desc}/>
                :null
                }
                    
                </Tab>
                <Tab eventKey="home" title="Requerimientos" className='tab tabs-bg'>
                 <List /> 
                </Tab>
                <Tab eventKey="longer-tab" title="Garantia" className='tab tabs-bg'>
                    <Preference />
                    
                </Tab>
                <Tab eventKey="contact" title="Reservar" className='tab tabs-bg'>
                    
                </Tab>
            </Tabs>
            </div>
        </div>
        : <p>Error 404</p>
    }
    </>
  )
}
