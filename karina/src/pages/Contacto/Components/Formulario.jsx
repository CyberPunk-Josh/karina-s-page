import React from 'react';

const Formulario = () => {
    return ( 
        <div class="container pt-4">
            <div class="row justify-content-center">
                    <main class="col-lg-8">
                        <h2 class="text-center text-uppercase">
                            Contacta con Nosotros
                        </h2>
                        <form class="p-5 mt-5 formulario-contacto" novalidate>
                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Tu Nombre" required />
                            </div>
                            <div class="form-group">
                                <label for="email">E-Mail:</label>
                                <input type="email" class="form-control" id="email" placeholder="Tu Correo" required />
                            </div>
                            <div class="form-group">
                            <label for="mensaje">Mensaje:</label>
                            <textarea id="mensaje" class="form-control"  required></textarea>
                        </div>
                        <input type="submit" class="btn btn-warning text-uppercase" value="Enviar" />
                        </form>
                    </main>
            </div>
        </div>
     );
}
 
export default Formulario;