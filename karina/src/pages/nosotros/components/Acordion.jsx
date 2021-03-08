import React from 'react';

import Aside from './Aside';

import {Accordion, Card, Button} from 'react-bootstrap';

const Acordion = () => {
    return ( 
        
        <div className="container pt-4">
            <div className="row">
                <main className='col-lg-8 contenido-principal'>
                    <h2 className="d-block d-md-none text-uppercase text-center">
                        Nuestros Servicios
                    </h2>
                    <Accordion defaultActiveKey="0" id='servicios'>
                    <Card>
                        <Card.Header className='card-header'>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className='btn-link'>
                            PASEOS CULTURALES
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Nuestros servicios están basados en las necesidades de nuestros clientes administrando  su tiempo para su máximo provecho, contamos con un amplio cátalo de posibilidades para visitar, nadar, conocer, degustar, comprar, entre otras muchas actividades atractivas para nuestros visitantes, pregunta via Whatsapp o Facebook para un servicio más personalizado. Ofrecemos visitas programadas en todos los museos de la Ciudad de México y área metropolitana. Este servicio consta de recorrido en auto hasta el lugar y caminatas culturales, dependiendo del paseo serán proporcionadas las entradas a zonas arqueológicas, museos nacionales y populares de los sitios o avistamiento de edificios de alta importancia arquitectónica o histórica.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            TRASLADOS
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Ofrecemos soluciones de transportación ya sea desde 1 hasta 20 personas, según sea el requerimiento, tenemos el auto ideal para ti. O bien si lo deseas, tenemos capacidad de transporte en distintos autos hasta 80 personas. Ya sea por concepto de horas o por día. Con la mejor experiencia en atención e higiene antes y después de tiempos de COVID-19, con control del detalle más pequeño,  manteniendo en todo momento la comodidad y tranquilidad de nuestros clientes. Este servicio es únicamente el traslado de un punto de la ciudad de México, a cualquier otro dentro de ella o de la república mexicana.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            TRANSPORTACION DE NEGOCIOS O PLACER
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>El servicio consta de tiempo de espera en donde se sigue el itinerario de actividades del cliente, es decir transporte reuniones de negocios u otros eventos donde puede ser de 4hrs en adelante e incluso días de transporte con jornadas de 8hrs por día.</Card.Body>
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