import { Link } from "react-router-dom";


function Navbar() {


    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgb(7, 90, 185)"}}>

            <a className="navbar-brand"></a>

            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">
                    <img src="/public/img/logo.png" alt="Logo" className="d-inline-block align-text-middle" style={{width: '60px'}} />
                <span className="ms-3">Veterinaria San Marcos</span>
                </Link>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">

                        <Link className="nav-link text-white" to="/inicio">
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
            </div>
        </nav>

    )
}

export default Navbar