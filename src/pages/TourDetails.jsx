
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
    let itinerario = params.get('itinerarioDetail');
    let requisitos = params.get('requisitosDetail');
    let altura = params.get('alturaDetail');
    let dificultad = params.get('dificultadDetail');
    let distancia = params.get('distanciaDetail');
    let tiempo = params.get('tiempoDetail');
    let incluye1 = params.get('incluye1Detail');
    let incluye2 = params.get('incluye2Detail');
    let incluye3 = params.get('incluye3Detail');
    let incluye4 = params.get('incluye4Detail');
    let incluye5 = params.get('incluye5Detail');
    let incluye6 = params.get('incluye6Detail');
    let incluye7 = params.get('incluye7Detail');
    let incluye8 = params.get('incluye8Detail');
    let incluye9 = params.get('incluye9Detail');
    let incluye10 = params.get('incluye10Detail');
    let incluye11 = params.get('incluye11Detail');
    let incluye12 = params.get('incluye12Detail');
    let incluye13 = params.get('incluye13Detail');
    let incluye14 = params.get('incluye14Detail');
    let incluye15 = params.get('incluye15Detail');
    let noIncluye1 = params.get('noIncluye1Detail');
    let noIncluye2 = params.get('noIncluye2Detail');
    let noIncluye3 = params.get('noIncluye3Detail');
    let noIncluye4 = params.get('noIncluye4Detail');
    let noIncluye5 = params.get('noIncluye5Detail');
    let noIncluye6 = params.get('noIncluye6Detail');
    let necesario1 = params.get('necesario1Detail');
    let necesario2 = params.get('necesario2Detail');
    let necesario3 = params.get('necesario3Detail');
    let necesario4 = params.get('necesario4Detail');
    let necesario5 = params.get('necesario5Detail');
    let necesario6 = params.get('necesario6Detail');
    let necesario7 = params.get('necesario7Detail');
    let necesario8 = params.get('necesario8Detail');
    let necesario9 = params.get('necesario9Detail');
    let necesario10 = params.get('necesario10Detail');
    let necesario11 = params.get('necesario11Detail');
    let necesario12 = params.get('necesario12Detail');
    let necesario13 = params.get('necesario13Detail');
    let necesario14 = params.get('necesario14Detail');
    let necesario15 = params.get('necesario15Detail');
    let necesario16 = params.get('necesario16Detail');
    let necesario17 = params.get('necesario17Detail');
    let necesario18 = params.get('necesario18Detail');
    let necesario19 = params.get('necesario19Detail');
    let necesario20 = params.get('necesario20Detail');
    let necesario21 = params.get('necesario21Detail');
    let img2 = params.get('img2Detail');   

    
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
                (title)?<Itinerario nombre={title} img={img} desc={desc} itinerario={itinerario} altura={altura} distancia={distancia} dificultad={dificultad} tiempo={tiempo} img2={img2}/>
                :null
                }
                    
                </Tab>
                <Tab eventKey="home" title="Requerimientos" className='tab tabs-bg'>
                 <List incluye1={incluye1} incluye2={incluye2} incluye3={incluye3} incluye4={incluye4} incluye5={incluye5} incluye6={incluye6} incluye7={incluye7} incluye8={incluye8} incluye9={incluye9} incluye10={incluye10} incluye11={incluye11} incluye12={incluye12} incluye13={incluye13} incluye14={incluye14} incluye15={incluye15} noIncluye1={noIncluye1} noIncluye2={noIncluye2} noIncluye3={noIncluye3} noIncluye4={noIncluye4} noIncluye5={noIncluye5} noIncluye6={noIncluye6} necesario1={necesario1} necesario2={necesario2} necesario3={necesario3} necesario4={necesario4} necesario5={necesario5} necesario6={necesario6} necesario7={necesario7} necesario8={necesario8} necesario9={necesario9}necesario10={necesario10} necesario11={necesario11} necesario12={necesario12} necesario13={necesario13} necesario14={necesario14} necesario15={necesario15} necesario16={necesario16} necesario17={necesario17} necesario18={necesario18} necesario19={necesario19} necesario20={necesario20} necesario21={necesario21}  /> 
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
