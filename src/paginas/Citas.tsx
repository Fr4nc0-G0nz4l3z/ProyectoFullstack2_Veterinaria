import FormularioCitas from "../componentes/organismos/FormularioCitas"
function Citas(){
    return(
        <div className="container mt-4">
            <h1>Agendar una cita</h1>
            
            <p>¿Desea agendar una cita? Rellene el siguiente formulario</p>

            <FormularioCitas />
                
            
        </div>
    )
}

export default Citas