import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/TEOTIHUACAN3.png';


const Teotihuacan = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Teotihuacán</Card.Title>
                    <Card.Text>
                    Estado de México 
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
                <Modal.Title>Teotihuacán, Estado de México  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">Es un sitio arqueológico situado a solo 1.30hrs a las afueras de la Ciudad de México, cuenta con edificios considerados sagrados que fueron edificados a partir del año 250 d. C. aproximadamente; los monumentos más representativos de la zona arqueológica son los siguientes: la Pirámide del Sol, la Pirámide de la Luna y la Pirámide o Templo de Quetzalcóatl. Construido utilizando bloques de piedras, también aquí se pueden encontrar magníficas pinturas murales que destacan diferentes aspectos religiosos, ilustrando templos y tumbas.</p>
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
 
export default Teotihuacan;