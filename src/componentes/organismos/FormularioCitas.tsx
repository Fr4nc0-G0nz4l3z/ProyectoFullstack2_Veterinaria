import CampoFormulario from "../moleculas/CampoFormulario";
import { useState } from "react";

function FormularioCitas(){
    const [nombreU, setNombreU] = useState("")
    const [correo, setCorreo] = useState("")
    const [motivoCita, setMotivoCita] = useState("")
    const [fechaCita, setFechaCita] = useState("")

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nombreU.trim() === ""){
            alert("Debe ingresar su nombre")
            return
        }
        if (correo.trim() === ""){
            alert("Debe ingresar su correo")
            return
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("Ingrese un correo valido")
            return
        }
        if (motivoCita.trim() === ""){
            alert("Debe ingresar al menos una linea de mensaje")
            return
        }
        if (fechaCita.trim() === ""){
            alert("Debe ingresar al menos una fecha valida")
            return
        }
        alert("Su cita se agendo correctamente")
    }

    return(
        <form onSubmit={manejarEnvio} noValidate>
            <CampoFormulario
            etiqueta="Nombre completo"
            tipo="text"
            nombre="nombre"
            valor={nombreU}
            alCambiar={setNombreU}
            />
            <CampoFormulario
            etiqueta="Correo electronico"
            tipo="email"
            nombre="correo"
            valor={correo}
            alCambiar={setCorreo}
            />
            <CampoFormulario
            etiqueta="Mensaje"
            tipo="text"
            nombre="mensaje"
            valor={motivoCita}
            alCambiar={setMotivoCita}
            />
            <CampoFormulario
                etiqueta="Fecha de la cita"
                tipo="fecha"
                nombre="fecha"
                valor={fechaCita}
                alCambiar={setFechaCita}
            />
            <button type="submit" className="btn btn-primary">
                Agendar cita
            </button>
        </form>
    )
}
export default FormularioCitas