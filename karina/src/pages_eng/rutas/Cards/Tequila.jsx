import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/TEQUILAJ3.png';


const Tequila = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Tequila</Card.Title>
                    <Card.Text>
                    Jalisco
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
                <Modal.Title>Tequila, Jalisco </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">As its name says, this city is where tequila is distilled and produced from the vast fields of agave. This process begins when the producer cuts the agave from the ground and begins the cutting of more than 200 very sharp blades that protect the inner core or heart. It starts a tour of the ovens, the fermentation tanks and finally, the distillation area where you can taste a wide variety of tequilas for the most demanding palates!</p>
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
 
export default Tequila;