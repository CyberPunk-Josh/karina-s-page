import React, {useState} from 'react';
import {Card, Form} from 'react-bootstrap';
import JsonData from '../../../Viajes.json';

import styled from 'styled-components';

const Contenedor = styled.div`
    margin: 0 auto;
    width: 80%;
`;



const Buscador = () => {

    const [searchTherm, setsearchTherm] = useState("");

    return ( 
        <Contenedor>
            <h1 className='text-center mt-4'>Travel Search Engine</h1>
            <form className='text-center'>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter your destination</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Example: Guerrero" 
                    onChange={(event) =>{
                        setsearchTherm(event.target.value);
                    }}
                />
                <Form.Text className="text-muted">
                You can search by destination or by state
                </Form.Text>
            </Form.Group>
            </form>
            <div className="resultados">
                {/* eslint-disable-next-line */}
                {JsonData.filter((val) => {
                    if (searchTherm === ''){
                    return val
                    } else if (val.estado.toLowerCase().includes(searchTherm.toLowerCase()) || val.destino.toLowerCase().includes(searchTherm.toLowerCase())){
                    return val
                    }
                }).map( (val, key) =>{
                    return (
                    <div key={key}>
                        <Card style={{ width: '18rem' }} bg='warning' border='success' className='mt-3'>
                        <Card.Body>
                            <Card.Title>{val.destino}</Card.Title>
                            <Card.Subtitle className="mb-2">{val.estado}</Card.Subtitle>
                            <Card.Text>
                                <i className="fas fa-users mr-3"></i> {val.personas}
                            </Card.Text>
                            <Card.Text>
                                <i className="fas fa-money-bill-alt mr-3"></i>  {val.precio} USD
                            </Card.Text>
                            <Card.Link href="/en/contact" className='btn btn-primary'>Contact</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                    );
                })}
            </div>
        </Contenedor>
     );
}
 
export default Buscador;