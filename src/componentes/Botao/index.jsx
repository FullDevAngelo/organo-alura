import './Botao.css'

const Botao = (props) => {
    return (
        //O CHILDREN SERVE PARA QUE SE O MEU BOTÃO FOR UMA IMAGEM, OU TEXTO, OU ANIMAÇÃO, QUALQUER COISA ELE SE ADAPTA
        <button className='botao'>{props.children}</button>
    )
}

export default Botao