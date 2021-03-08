import React from 'react';
import {Carousel} from 'react-bootstrap';

import yue from '../../../img/yue.webp';
import chichen2 from '../../../img/chichen2.webp';

const NuestraExperiencia = () => {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="text-center mb-5">Nuestra Experiencia</h2>
                    <div className="row entrada mb-4">
                        <div className="col-md-5">
                            <img src={yue} alt="logo empresa" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3 className="my-2">Empresa 100% Mexicana</h3>
                            <p className="meta">
                                Conoce Nuestra Historia...
                            </p>
                            <p>Las mejores experiencias en recorridos y transportación terrestre en toda la Ciudad de México y república mexicana con VIKA, turismo y transporte.</p>
                            <a href="nosotros.html" className="btn btn-warning text-uppercase py-2 mt-4">Nosotros</a>
                        </div>
                    </div>
                    <div className="row entrada mb-4">
                        <div className="col-md-5">
                            <img src={chichen2} alt="experiencia de viaje" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                            <h3 className="my-2">1000+ viajes</h3>
                            <p className="meta">
                                Conoce Nuestras Rutas... 
                            </p>
                            <p>Pregunta por nuestros descuentos y promociones para nacionales y extranjeros.</p>
                            <a href="rutas.html" className="btn btn-warning text-uppercase py-2 mt-4">Rutas</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center mb-5">Testimoniales</h2>
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