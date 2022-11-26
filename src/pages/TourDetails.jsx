
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
    
  return (
    <>
    {
        (id)?
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
                (title)?<Itinerario nombre={title} img={img} desc={desc}/>
                :null
                }
                    
                </Tab>
                <Tab eventKey="home" title="Requerimientos" className='tab tabs-bg'>
                 <List /> 
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab" className='tab tabs-bg'>
                    <Preference />
                    
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
