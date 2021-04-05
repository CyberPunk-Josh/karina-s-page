import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/tula.webp';


const Tula = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Atlantes de Tula</Card.Title>
                    <Card.Text>
                    Hidalgo
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
                <Modal.Title>Los Atlantes de Tula, Hidalgo </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">El nombre de Tula proveniente de la palabra náhuatl “tolan”, que significa “lugar de tules o juncos”. El sitio está constituido por 7 edificios, la pirámide de Tlahuizcalpantecuhtli donde se encuentran los famosos “atlantes de Tula”, el Palacio Quemado, el Altar Central, el Coatepantli o Muro de las Serpientes, los Juegos de Pelotas y el Tzompantli. Recomendado personas gustosas por culturas prehispánicas.</p>
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
 
export default Tula;