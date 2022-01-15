

const Input = ({saludar}) => {
    return (
        <div>
            <p>Mariano</p>
            <input placeholder='Ingresar Texto' />
            <button onClick = {saludar}>Ejecutar</button> 
        </div>
    )
}

export default Input