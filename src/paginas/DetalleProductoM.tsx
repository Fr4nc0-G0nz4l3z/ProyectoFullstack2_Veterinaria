import { useParams } from "react-router-dom"
import BotonProductosM from "../componentes/atomos/BotonProductosM"

const productosM= [
    {
        id: 1,
        titulo:"Amoxibay 250mg",
        descripcion:"Amoxicilina",
        precio:1000,
        imagen:"/public/img/amoxibay.jpg"
    },
    {
        id: 2,
        titulo:"Enrox 50mg",
        descripcion:"Enrofloxacino",
        precio:3590,
        imagen:"/public/img/enrox.jpg"
    },
    {
        id: 3,
        titulo:"Metrobay 250mg",
        descripcion:"Metronidazol",
        precio:1500,
        imagen:"/public/img/metronidazol.jpg"
    },
    // Los productos de mascotas se añaden desde el id 1 hasta
    // el id 100.

    // Los juguetes de mascotas van desde el id 101 hasta el
    // id 200 o mas

    // De ser necesario seguir añadiendo mas de 100 productos/medicamentos
    // Extender id y mover juguetes para impedir confusion
    {
        id: 101,
        titulo:"Amoxibay 250mg",
        descripcion:"Amoxicilina",
        precio:1000,
        imagen:"/public/img/amoxibay.jpg"
    },
    {
        id: 102,
        titulo:"Enrox 50mg",
        descripcion:"Enrofloxacino",
        precio:3590,
        imagen:"/public/img/enrox.jpg"
    },
    {
        id: 103,
        titulo:"Metrobay 250mg",
        descripcion:"Metronidazol",
        precio:1500,
        imagen:"/public/img/metronidazol.jpg"
    }
]

function DetalleProductoM(){

    const { id }= useParams()

    const productoM = productosM.find(
        productoM => productoM.id === Number(id)
    )

    return(
        <div>
            <h1>Detalle del Producto</h1>

            <img
                src={productoM?.imagen}
                alt={productoM?.titulo}
                style={{width: '300px'}}
            />

            <h2>{productoM?.titulo}</h2>

            <p>{productoM?.descripcion}</p>

            <p>${productoM?.precio}</p>

            <div className='mt-auto'>
                <BotonProductosM/>
            </div>
        </div>
    )

}

export default DetalleProductoM