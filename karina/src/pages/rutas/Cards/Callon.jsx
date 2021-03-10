import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/CAÑON2.png';


const Callon = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Callón del Sumidero</Card.Title>
                    <Card.Text>
                    Chiapas
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
                <Modal.Title>Callón del Sumidero, Chiapas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">El cañón del sumidero es una formación,  producto de la separación de capas terrestres por una falla geológica  que se abrió hace aproximadamente doce millones de años en la Sierra Norte de Chiapas tiene un acantilado cuya altura va un poco más allá de los 1,000 metros sobre nivel del mar  y se levanta sobre el cauce del río Grijalva, que tiene una profundidad de más de 250 metros. Este lugar está situado a 5 km de Tuxtla Gutiérrez capital del estado de Chiapas, México; dentro del municipio de Chiapa de Corzo.</p>
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
 
export default Callon;