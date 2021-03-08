import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import CDMX3 from '../../../img/CDMX3.png';
import MAZUNTE2 from '../../../img/MAZUNTE2.png';
import SCRISTOBAL2 from '../../../img/SCRISTOBAL2.png';


const ViajesFavoritos = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return ( 
        <section className="container anuncios mt-5">
            <h2 className="text-center mb-5">Nuestros Viajes Favoritos</h2>
            <div className="row">
                <div className="col-md-4 order-2">
                    <Card style={{ width: '18rem' }} border="warning">
                    <Card.Img variant="top" src={CDMX3} className='img-fluid'/>
                    <Card.Body>
                        <Card.Title>Murales Urbanos</Card.Title>
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
                        <Modal.Title>Murales Urbanos, Ciudad de México</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={CDMX3} alt="Ciudad de mexico" className='img-fluid'/>
                            <p className="mt-3">Estos Murales los puedes encontrar en distintos puntos de la Ciudad de México, algunos en lugares recónditos, otros a la vista de gran cantidad de personas, muchos de ellos tienen que ver con la cultura y tradiciones prehispánicas y actuales que seguimos las familias Mexicanas, animales considerados sagrados o grandes héroes revolucionarios sin dejar afuera muchos otros temas libres.</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="col-md-4 order-1">
                    <Card style={{ width: '18rem' }} border="warning">
                        <Card.Img variant="top" src={MAZUNTE2} className='img-fluid'/>
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
                            <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow2}>Ver Viaje</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                        <Modal.Title>Playa Mazunte, Oaxaca</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={MAZUNTE2} alt="Playa Mazunte" className='img-fluid'/>
                            <p className="mt-3">Esta playa situada en la costa del Océano Pacífico del estado de Oaxaca al sureste de México, a 264 km de la capital oaxaqueña. Mazunte en dialecto náhuatl significa “déjame verte desovar”, y esto se refiere a que en las playas de este sitio da lugar a la anidación de las tortugas marinas, desde 1960 las playas de Mazunte son visitadas por cientos de tortugas de la especie Golfina que desovaba por las noches en ciertas etapas lunares. Así como esta hermosa playa hay otras bastante interesantes donde puedes convivir con los animales marinos!.</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Cerrar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="col-md-4 order-3">
                    <Card style={{ width: '18rem' }} border="warning">
                        <Card.Img variant="top" src={SCRISTOBAL2} className='img-fluid'/>
                        <Card.Body>
                            <Card.Title>San Cristóbal de las Casas</Card.Title>
                            <Card.Text>
                                Chiapas
                            </Card.Text>
                            <Card.Text>
                                <ul className="card-description list-unstyled d-flex justify-content-around">
                                    <li><i className="fas fa-users mr-3"></i>3</li>
                                    <li><i className="fas fa-money-bill-alt mr-3"></i>200</li>
                                    <li><i className="fas fa-route mr-3"></i>Tour</li>
                                </ul>
                            </Card.Text>
                            <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow3}>Ver Viaje</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show3} onHide={handleClose3}>
                        <Modal.Header closeButton>
                        <Modal.Title>Playa Mazunte, Oaxaca</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={SCRISTOBAL2} alt="Playa Mazunte" className='img-fluid'/>
                            <p className="mt-3">A través de la caminata por el centro de la ciudad puedes ver distintas iglesias llenas de color e historia. Un ejemplo es la iglesia de Guadalupe donde, se puede admirar una hermosa vista panorámica de la ciudad, su plaza está llena de luz y tranquilidad que puedes ir a disfrutar a cualquier hora del día. Si te gusta apreciar los estilos de los retablos principales, púlpitos y pinturas de estas iglesias y sus diversos elementos de arquitectura neoclásica, Barroca y Art Nouveau este lugar es para ti!</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Cerrar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </section>
     );
}
 
export default ViajesFavoritos;