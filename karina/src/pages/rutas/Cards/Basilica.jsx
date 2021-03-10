import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import AntropologiaI from '../../../img/basilica.webp';


const Basilica = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={AntropologiaI} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Basílica de Santa María de Guadalupe</Card.Title>
                    <Card.Text>
                        Ciudad de México
                    </Card.Text>
                    <Card.Text>
                        <ul className="card-description list-unstyled d-flex justify-content-around">
                            <li><i className="fas fa-users mr-3"></i>3</li>
                            <li><i className="fas fa-money-bill-alt mr-3"></i>200</li>
                            <li><i className="fas fa-route mr-3"></i>Tour</li>
                        </ul>
                    </Card.Text>
                    <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow}>Ver Viaje</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Basílica de Santa María de Guadalupe, Ciudad de México.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={AntropologiaI} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">Este es un santuario de la iglesia católica dedicado a la Virgen María de Guadalupe ubicado al pie del Cerro del Tepeyac, está abierto de 8:45am a 17:45am  posee un amplio horario de misas en el cual se podrá escoger el horario de tu preferencia, recomendado a personas que gusten de la arquitectura colonial barroca y contemporánea.</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
     );
}
 
export default Basilica;