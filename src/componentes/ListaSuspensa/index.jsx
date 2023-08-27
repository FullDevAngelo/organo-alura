import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {/* PARA CADA ITEM, O MAP IRÁ RETORNAR UMA OPTION */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;