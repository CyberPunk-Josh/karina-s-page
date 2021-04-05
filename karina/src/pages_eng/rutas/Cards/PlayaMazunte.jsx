import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/MAZUNTE2.png';


const PlayaMazunte = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Mazunte Beach</Card.Title>
                    <Card.Text>
                    Oaxaca
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
                <Modal.Title>Mazunte Beach, Oaxaca</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">This beach is located on the coast of the Pacific Ocean of the state of Oaxaca, southeast of Mexico, 264 km from the Oaxacan capital. Mazunte in Nahuatl dialect means "let me see you spawn", and this refers to the fact that on the beaches of this site gives rise to the nesting of sea turtles, Since 1960 the beaches of Mazunte are visited by hundreds of turtles of the species Golfina that spawned at night in certain lunar stages. As well as this beautiful beach there are other quite interesting where you can coexist with marine animals!.</p>
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
 
export default PlayaMazunte;