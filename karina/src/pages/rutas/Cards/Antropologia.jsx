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
                    <Card.Title>Museo de Antropología e Historia</Card.Title>
                    <Card.Text>
                        Ciudad de México
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
                <Modal.Title>Museo de Antropología e Historia Ciudad de México</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={AntropologiaI} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">Todas las culturas en un solo lugar, cuenta con 24 salas de exhibición, de las cuales 22 son permanentes y 2 salas para las exposiciones temporales, en las que se pueden observar piezas arqueológicas originales y de diversas culturas prehispánicas mesoamericanas. Aquí podrás observar la cultura que desees sin salir de la ciudad.  Pregunta por la disponibilidad ya que los horarios han cambiado a partir de la contingencia COVID-19.</p>
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
 
export default Antropologia;