import './CampoTexto.css'

const CampoTexto = (props) => {
    return(
        <div className='campo-texto'>
            <label>{props.nome}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto