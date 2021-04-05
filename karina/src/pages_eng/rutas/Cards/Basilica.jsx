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
                        Mexico City
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
                <Modal.Title>Basílica de Santa María de Guadalupe, Mexico City</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={AntropologiaI} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">This is a shrine of the Catholic church dedicated to the Virgin Mary of Guadalupe located at the foot of the Cerro del Tepeyac, is open from 8:45am to 17:45am has a wide schedule of masses in which you can choose the schedule of your preference, recommended to people who like baroque and contemporary colonial architecture.</p>
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
 
export default Basilica;