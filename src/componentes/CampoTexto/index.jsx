import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {

    // let valor = 'Yan Nicolas';

    //HOOK = GANCHO => É O QUE O REACT ENTREGA, PARA CONSEGUIR MANTER UM ESTADO NA FUNÇÃO
    //USE = HOOK QUE VAI FAZER ALGUMA COISA
    //USE STATE = HOOK DO ESTADO
    //O USESTATE É UM RECURSO QUE PERMITE ARMAZENAR DADOS DENTRO DE UM COMPONENTE, SEM PRECISAR DE UMA API OU FONTE EXTERNA. COM ELE,
    //POR EXEMPLO, PODE-SE ARMAZENAR DADOS DA TELA DE FORMULÁRIO E ENVIAR O ESTADO PARA FAZER UMA API PARA SALVÁ-LOS OU PARA FAZER A VALIDAÇÃO  
    
    const aoDigitar = (evento) => {
        {/* TARGET = EVENTO DO JS */}
        props.aoAlterado(evento.target.value); //ESTOU PEGANDO O VALOR QUE ESTÁ SENDO DIGITADO 
        
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