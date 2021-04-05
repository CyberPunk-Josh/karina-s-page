import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import AntropologiaI from '../../../img/ANTROPOLOGIA3.png';


const Antropologia = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={AntropologiaI} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Museum of Anthropology and History</Card.Title>
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
                <Modal.Title>Museum of Anthropology and History, Mexico City</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={AntropologiaI} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">All cultures in one place, has 24 exhibition rooms, of which 22 are permanent and 2 rooms for temporary exhibitions, in which you can observe original archaeological pieces and various pre-Hispanic Mesoamerican cultures. Here you can observe the culture you want without leaving the city.  Ask for availability as schedules have changed since COVID-19 contingency.</p>
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
 
export default Antropologia;