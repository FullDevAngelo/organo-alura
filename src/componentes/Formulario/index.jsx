import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault(); {/* ELE FALA PRO NAVEGADOR: "DEIXA QUE É EU QUE MANDO AQUI", ELE PREVINE O COMPORTAMENTO PADRÃO DO NAVEGADOR */}
        props.aoColaboradorCadastrado({
            nome: nome, 
            cargo: cargo, 
            imagem: imagem, 
            time: time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}> {/* O SUBMIT SERVE PARA VALIDAR O FORMULÁRIO, ELE VAI VERIFICAR SE TUDO FOI PREENCHIDO DE ACORDO COM AS REQUISIÇÕES */}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                /> 
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                /> 
                <CampoTexto  
                    label="Imagem" 
                    placeholder="Digite o endereço de sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao> 
            </form>
        </section>
    );
}

export default Formulario;