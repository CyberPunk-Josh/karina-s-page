import React, {useState, Fragment} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import imagen from '../../../img/CENOTE3.png';


const Cenotes = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Fragment>
            <Card style={{ width: '18rem' }} border="warning">
                <Card.Img variant="top" src={imagen} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>Cenotes de Agua</Card.Title>
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
                    <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow}>Ver Viaje</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Cenotes de Agua, Yucatán</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imagen} alt="Ciudad de mexico" className='img-fluid'/>
                    <p className="mt-3">La palabra Cenote es un término proveniente  de la palabra maya “dzonot”, cuyo significado es “abismo” considerados lugares sagrados. Estos son pozos naturales de agua dulce que se encuentran en cavernas abiertas que fueron formadas por años de erosión en piedra caliza. Existen tres tipos de Cenotes, abiertos, semi-abiertos o subterráneos. Estos pozos subterráneos son amplios y despejados con paredes suaves y porosas en los que puedes nadar y así despejarte del estrés del trabajo y la ciudad porque son un destino ideal de relajación.</p>
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
 
export default Cenotes;