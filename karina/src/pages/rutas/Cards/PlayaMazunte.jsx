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
                    <Card.Title>Playa Mazunte</Card.Title>
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
                    <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow}>Ver Viaje</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Playa Mazunte, Oaxaca</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">Esta playa situada en la costa del Océano Pacífico del estado de Oaxaca al sureste de México, a 264 km de la capital oaxaqueña. Mazunte en dialecto náhuatl significa “déjame verte desovar”, y esto se refiere a que en las playas de este sitio da lugar a la anidación de las tortugas marinas, desde 1960 las playas de Mazunte son visitadas por cientos de tortugas de la especie Golfina que desovaba por las noches en ciertas etapas lunares. Así como esta hermosa playa hay otras bastante interesantes donde puedes convivir con los animales marinos!.</p>
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
 
export default PlayaMazunte;