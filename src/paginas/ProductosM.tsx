import CardProducto from "../componentes/moleculas/CardProductoM";

function ProductosM(){
    return(
        <div>
            <h1>Productos de mascotas</h1>

            <div className="d-flex gap-3">
                <CardProducto
                    id={1}
                    titulo="Amoxibay 250mg"
                    descripcion="Amoxicilina"
                    precio={1000}
                    imagen="/public/img/amoxibay.jpg"
                
                />

                <CardProducto
                    id={2}
                    titulo="Enrox 50mg"
                    descripcion="Enrofloxacino"
                    precio={3590}
                    imagen="/public/img/enrox.jpg"
                
                />
                
                <CardProducto
                    id={4}
                    titulo="Metrobay 250mg"
                    descripcion="Metronidazol"
                    precio={1500}
                    imagen="/public/img/metronidazol.jpg"
                
                />
            </div>
        </div>
    )
}

export default ProductosM