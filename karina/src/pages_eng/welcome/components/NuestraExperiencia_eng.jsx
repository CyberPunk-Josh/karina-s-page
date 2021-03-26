import React from 'react';
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap';

import yue from '../../../img/yue.webp';
import chichen2 from '../../../img/chichen2.webp';

const NuestraExperiencia = () => {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="text-center mb-5">Our Experience</h2>
                    <div className="row entrada mb-4">
                        <div className="col-md-5">
                            <img src={yue} alt="logo empresa" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3 className="my-2">Company 100% Mexican</h3>
                            <p className="meta">
                                Know Our History
                            </p>
                            <p>The best experiences in tours and ground transportation throughout Mexico City and the Mexican Republic, with Vika Turismo y Transporte</p>
                            <Link to='/en/us' className="btn btn-warning text-uppercase py-2 mt-4">Us</Link>
                        </div>
                    </div>
                    <div className="row entrada mb-4">
                        <div className="col-md-5">
                            <img src={chichen2} alt="experiencia de viaje" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3 className="my-2">1000+ trips</h3>
                            <p className="meta">
                                Know our Trips
                            </p>
                            <p>Rate according  to your service requested. Contact one of our agents and get your reservation.</p>
                            <Link to='/en/routes' className="btn btn-warning text-uppercase py-2 mt-4">Routes</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center mb-5">Testimonial</h2>
                    <div className="testimoniales p-5">
                        <Carousel  nextIcon="" nextLabel="" prevIcon="" indicators="false" controls="false" keyboard='false'>
                            <Carousel.Item>
                                <p className="testimonial-texto">
                                        Sin duda alguna, unas vacaciones inolvidables! y un servicio de primera, viajaremos con ellos el siguiente año!

                                        <span className="d-block text-right mt-4"> - Familia Martínez</span>
                                </p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p className="testimonial-texto">
                                        Sin duda alguna, unas vacaciones inolvidables! y un servicio de primera, viajaremos con ellos el siguiente año!

                                        <span className="d-block text-right mt-4"> - Familia Martínez</span>
                                </p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p className="testimonial-texto">
                                        Sin duda alguna, unas vacaciones inolvidables! y un servicio de primera, viajaremos con ellos el siguiente año!

                                        <span className="d-block text-right mt-4"> - Familia Martínez</span>
                                </p>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuestraExperiencia;