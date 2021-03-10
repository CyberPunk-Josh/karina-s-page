import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/SCRISTOBAL2.png';


const SCristobal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>San Cristóbal de las Casas</Card.Title>
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
                <Modal.Title>San Cristóbal de las Casas, Chiapas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">A través de la caminata por el centro de la ciudad puedes ver distintas iglesias llenas de color e historia. Un ejemplo es la iglesia de Guadalupe donde, se puede admirar una hermosa vista panorámica de la ciudad, su plaza está llena de luz y tranquilidad que puedes ir a disfrutar a cualquier hora del día. Si te gusta apreciar los estilos de los retablos principales, púlpitos y pinturas de estas iglesias y sus diversos elementos de arquitectura neoclásica, Barroca y Art Nouveau este lugar es para ti! </p>
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
 
export default SCristobal;