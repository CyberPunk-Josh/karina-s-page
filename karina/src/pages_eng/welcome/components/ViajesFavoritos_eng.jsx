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
            <h2 className="text-center mb-5">Our Favorite Trips</h2>
            <div className="row">
                <div className="col-md-4 order-2 d-flex justify-content-center">
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
                        <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow}>See More</Button>
                    </Card.Body>
                    </Card>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Murales Urbanos, Ciudad de México</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={CDMX3} alt="Ciudad de mexico" className='img-fluid'/>
                            <p className="mt-3">These murals can be found in different parts of Mexico City, some in remote places, others in the sight of large numbers of people, many of them have to do with the culture and traditions prehispanic and current that we follow the Mexican families, animals considered sacred or great revolutionary heroes without leaving out many other free topics.</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="col-md-4 order-1 d-flex justify-content-center">
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
                                    <li><i className="fas fa-money-bill-alt mr-3"></i>1520</li>
                                    <li><i className="fas fa-route mr-3"></i>Tour</li>
                                </ul>
                            </Card.Text>
                            <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow2}>See More</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                        <Modal.Title>Playa Mazunte, Oaxaca</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={MAZUNTE2} alt="Playa Mazunte" className='img-fluid'/>
                            <p className="mt-3">This beach is located on the coast of the Pacific Ocean of the state of Oaxaca, southeast of Mexico, 264 km from the Oaxacan capital. Mazunte in Nahuatl dialect means "let me see you spawn", and this refers to the fact that on the beaches of this site gives rise to the nesting of sea turtles, Since 1960 the beaches of Mazunte are visited by hundreds of turtles of the species Golfina that spawned at night in certain lunar stages. As well as this beautiful beach there are other quite interesting where you can coexist with marine animals!.</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="col-md-4 order-3 d-flex justify-content-center">
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
                                    <li><i className="fas fa-money-bill-alt mr-3"></i>2760</li>
                                    <li><i className="fas fa-route mr-3"></i>Tour</li>
                                </ul>
                            </Card.Text>
                            <Button className='btn btn-warning d-block py-2 text-uppercase' onClick={handleShow3}>See More</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show3} onHide={handleClose3}>
                        <Modal.Header closeButton>
                        <Modal.Title>Playa Mazunte, Oaxaca</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={SCRISTOBAL2} alt="Playa Mazunte" className='img-fluid'/>
                            <p className="mt-3">Through the walk through the city center you can see different churches full of color and history. An example is the church of Guadalupe where, you can admire a beautiful panoramic view of the city, its square is full of light and tranquility that you can go to enjoy at any time of the day. If you like to appreciate the styles of the main altarpieces, pulpits and paintings of these churches and their various elements of neoclassical architecture, Baroque and Art Nouveau this place is for you!</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </section>
     );
}
 
export default ViajesFavoritos;