import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';
import emailjs from 'emailjs-com';


const Formulario = () => {

    const[enviado, guardarEnviado] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_rnbb5u5', 'template_sw5e838', e.target, 'user_P8xKmSfP8gn66l8t8wWOF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
            guardarEnviado(true);
            e.target.reset();
            setTimeout(() => {
                guardarEnviado(false);
            }, 4000);
      }

    return ( 
        <div class="container pt-4">
            { enviado ? 
                <Alert variant="success">
                <Alert.Heading className='text-center'>Hey, tu mensaje ha sido enviado con exito!</Alert.Heading>
                <p className='text-center'>
                    En breve nos comunicaremos contigo!
                </p>
                </Alert> : null}
            <div class="row justify-content-center">
                    <main class="col-lg-8">
                        <h2 class="text-center text-uppercase">
                            Contacta con Nosotros
                        </h2>
                        <form class="p-5 mt-5 formulario-contacto" onSubmit={sendEmail}>
                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" name="nombre" placeholder="Tu Nombre" required />
                            </div>
                            <div class="form-group">
                                <label for="email">E-Mail:</label>
                                <input type="email" class="form-control" name="email" placeholder="Tu Correo" required />
                            </div>
                            <div class="form-group">
                            <label for="mensaje">Mensaje:</label>
                            <textarea name="mensaje" class="form-control"  required></textarea>
                        </div>
                        <input type="submit" class="btn btn-warning text-uppercase" value="Enviar" />
                        </form>
                    </main>
            </div>
        </div>
     );
}
 
export default Formulario;