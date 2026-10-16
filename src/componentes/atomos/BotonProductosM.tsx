import { Link } from 'react-router-dom'
function BotonProductosM(){
    return(
        <Link
            to={`/productos/`}
            className="btn btn-secondary"
        >
            Volver a productos
        </Link>
    )
}
export default BotonProductosM