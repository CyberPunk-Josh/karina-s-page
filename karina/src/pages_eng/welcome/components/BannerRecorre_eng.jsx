import React from 'react';
import {Link} from 'react-router-dom';

const BannerRecorre = () => {
    return ( 
        <section className="encuentra mt-5">
            <div className="container">
                <div className="row text-light align-items-center">
                    <div className="col">
                        <h3>Design your own  route through México</h3>
                        <p>Fill out the form and an advisor will contact you</p>
                        <Link to='/en/contact' className="btn btn-warning text-uppercase py-2 mt-4 text-dark">Contact</Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default BannerRecorre;