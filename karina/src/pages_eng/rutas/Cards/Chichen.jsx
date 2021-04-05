import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/CHIAPAS4.png';


const Chichen = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Chichen Itza</Card.Title>
                    <Card.Text>
                    Yucatán
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
                <Modal.Title>Chichen Itza, Yucatán</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">One of the best preserved archaeological sites of the Mayan civilization. Chichen Itza means "mouth of the well of the Itza", in allusion to the cenote located north of the pyramid and that was considered a sacred territory, in addition to a source of fresh water essential for that city. The pyramid of Kukulcán in the middle of an esplanade that a thousand years ago was the political, religious and cultural center of the Mayan empire.</p>
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
 
export default Chichen;