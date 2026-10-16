import { Link } from "react-router-dom";


function Navbar() {


    return (
        <nav className="navbar navbar-expand bg-info">

            <div className="container">
            <img src="/public/img/logo.png" alt="Logo" className="navbar-brand" style={{width: '60px'}} />
            <Link className="navbar-brand text-white" to="/Veterinaria San Marcos">
                Veterinaria San Marcos
            </Link>

                <div className="navbar-nav">

                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/nosotros">
                        Nosotros
                    </Link>

                    <Link className="nav-link text-white" to="/servicios">
                        Servicios
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>

                    <Link className="nav-link text-white" to="/novedades">
                        Novedades
                    </Link>

                    <Link className="nav-link text-white" to="/citas">
                        Citas
                    </Link>

                    <Link className="nav-link text-white" to="/contacto">
                        Contacto
                    </Link>

                    <Link className="nav-link text-white" to="/login">
                        Login
                    </Link>

                </div>
            </div>
        </nav>

    )
}

export default Navbar