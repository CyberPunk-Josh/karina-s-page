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
                    <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow}>See More</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Callón del Sumidero, Chiapas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">El cañón del sumidero is a formation,  product of the separation of land layers by a geological fault that opened about twelve million years ago in the Sierra Norte de Chiapas has a cliff whose height goes a little beyond 1,000 meters above sea level and rises on the bed of the Grijalva River, which has a depth of more than 250 meters. This place is located 5 km from Tuxtla Gutiérrez capital of the state of Chiapas, Mexico; within the municipality of Chiapa de Corzo.</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
     );
}
 
export default Callon;