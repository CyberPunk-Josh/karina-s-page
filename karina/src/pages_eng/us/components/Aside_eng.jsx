import React from 'react';

import {Carousel} from 'react-bootstrap';

import ruta2 from '../../../img/ruta2.webp';
import teotihuacan from '../../../img/teotihuacan.webp';
import mexico1 from '../../../img/mexico1.webp';

const Aside = () => {
    return ( 
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={ruta2}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 class="text-uppercase">Travel all over Mexico</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={teotihuacan}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3 class="text-uppercase">Meet Our Culture</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={mexico1}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 class="text-uppercase">Enjoy Our Traditions</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
     );
}
 
export default Aside;