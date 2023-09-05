import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {

    // let valor = 'Yan Nicolas';

    //HOOK = GANCHO => É O QUE O REACT ENTREGA, PARA CONSEGUIR MANTER UM ESTADO NA FUNÇÃO
    //USE = HOOK QUE VAI FAZER ALGUMA COISA
    //USE STATE = HOOK DO ESTADO
    
    const aoDigitar = (evento) => {
        {/* TARGET = EVENTO DO JS */}
        props.aoAlterado(evento.target.value);
        
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            {/* CADA VEZ QUE O USUÁRIO DIGITAR ALGO, VAI SER ATIVADO UMA FUNÇÃO = ONCHANGE*/}
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )   
}

export default CampoTexto;