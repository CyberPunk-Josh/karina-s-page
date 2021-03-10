import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/COSMOV8.png';


const Vitral = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Cosmovitral Jardín Botánico</Card.Title>
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
                <Modal.Title>Cosmovitral Jardín Botánico, Estado de México </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">Esta construcción se encuentra en las afueras de la ciudad en Toluca, Estado de México, está basada en vitrales que son un conjunto de vidrios soplados policromados, es decir, de colores que se colocan por medio de estructura metálica. Este lugar está conformado por 71 módulos vitrales que rodean la fachada del jardín, y que representa diversos aspectos  de la humanidad ante el interminable ciclo cósmico. Excelente lugar recomendado para toda la familia.</p>
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
 
export default Vitral;