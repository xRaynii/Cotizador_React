import React from 'react';
import { primerLetraMayuscula } from '../helper';
import PropTypes from 'prop-types';


import styled from 'styled-components';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const { marca, year, plan } = datos;

    if(marca === '' || year === '' || plan === '') return null;


    return ( 

        <ContenedorResumen>

            <h2> Resumen de cotización </h2>

            <ul>
                <li>Marca: { primerLetraMayuscula(marca) } </li>
                <li>Plan: { primerLetraMayuscula(plan) } </li>
                <li>Año del vehiculo: { year } </li>
            </ul>

        </ContenedorResumen>

     );
}

Resumen.propTypes = {

    datos: PropTypes.object.isRequired
    
}
 
export default Resumen;