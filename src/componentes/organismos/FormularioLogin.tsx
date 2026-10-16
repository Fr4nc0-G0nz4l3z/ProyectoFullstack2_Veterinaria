import { useState } from "react";
import CampoFormulario from "../moleculas/CampoFormulario";

function FormularioLogin(){

    const [correo, setCorreo] = useState("")
    const [contrasenna, setContrasenna] = useState("")



    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (correo.trim() === ""){
            alert("Debe ingresar su correo")
            return
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("Ingrese un correo valido")
            return
        }
        if (contrasenna.trim() === ""){
            alert("Debe ingresar una contraseña")
            return
        }
        if (contrasenna.length < 8){
            alert("La contraseña deber tener por lo menos 8 caracteres")
            return
        }
        alert("Cuenta creada correctamente")
    }



    return(
        <form onSubmit={manejarEnvio} noValidate>
            <CampoFormulario
            etiqueta="Correo electronico"
            tipo="email"
            nombre="correo"
            valor={correo}
            alCambiar={setCorreo}
            />
            <CampoFormulario
            etiqueta="Contraseña"
            tipo="text"
            nombre="contraseña"
            valor={contrasenna}
            alCambiar={setContrasenna}
            />
            <button type="submit" className="btn btn-primary">
                Crear cuenta
            </button>
        </form>
    )
}
export default FormularioLogin