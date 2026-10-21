import CardServicios from "../componentes/moleculas/CardServicios"

function Servicios(){
    return(
        <div className="container mt-5">
            <h2 className="text-center">Nuestros Servicios</h2>

            <CardServicios/>

            <h2>Estos son los principales servicios que nuestra Veterinaria San Marcos puede ofrecer 
                en este momento.
            </h2>

        </div>
    )
}
export default Servicios