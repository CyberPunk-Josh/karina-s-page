import React from 'react';

import Aside from './Aside_eng';

import {Accordion, Card, Button} from 'react-bootstrap';

const Acordion = () => {
    return ( 
        
        <div className="container pt-4">
            <div className="row">
                <main className='col-lg-8 contenido-principal'>
                    <h2 className="d-block d-md-none text-uppercase text-center">
                        Our Services
                    </h2>
                    <Accordion defaultActiveKey="0" id='servicios'>
                    <Card>
                        <Card.Header className='card-header'>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className='btn-link'>
                            CULTURAL WALKS
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Our services are planned on the needs of our clients managing their time for their maximum benefit, we have a wide catalog of possibilities to visit, to swim, to know, to taste, shopping among many other attractive activities for our visitors. 
                        Ask for more information via whatsapp or on our facebook profile and one of our agent will give you a personalized service. 
                        We offer visits to all museums in Mexico City and the metropolitan area.
                        This service consists on a car transfer to the places you are interest on, expert Guide at all time who will let you know all the information  must know during the service, tickets to archaeological zones,  museums. Don't forget that during the transfer there a lot to be seeing. Due México city is a unique world heritage site protected by UNESCO.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            TRASNFERS
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>We offer solutions to your needs of mobility from 1 to 20 people depending on the your requirement, we have  the vehicle you need.
                        Having a capacity to move 80 pax at once using different vehicles. 
                        In Vika tours we offer different rates to be more competitive you  choose hourly with a minimum of 4 hours or daily rate including 8 hours service per day. 
                        Our program of hygiene and sanitation was improved much  before  COVID-19 times and is here to štay in VIKA TOURS your health is always our concern. 
                        All our vehicles are under control of the smallest detail, and we warrantee the highest mechanical maintenance of our vehicles to give you  comfort and tranquility during the day service. Put yourself on our hands and will pick you up anywhere and take anywhere in Mexican boundaries 
                        Business or pleasure trips will be more productive just give us your travel plan and always we will advise you on the best way possible to give you a whole experience.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            BUSINESS OR PLEASURE TRANSPORTATION
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Our service consists of waiting time where the client's activity itinerary is followed, that is, transport for business meetings or other events where it can be from 4 hours onwards and even days of transport with days of 8 hours per day.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </main>
                <aside className='col-lg-4 pt-4 pt-lg-0'>
                    <Aside />
                </aside>
            </div>
        </div>
        
     );
}
 
export default Acordion;