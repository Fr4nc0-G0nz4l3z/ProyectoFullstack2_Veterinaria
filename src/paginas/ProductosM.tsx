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
                    id={3}
                    titulo="Metrobay 250mg"
                    descripcion="Metronidazol"
                    precio={1500}
                    imagen="/public/img/metronidazol.jpg"
                
                />
            </div>
            <br/>
            <h1>Juguetes de mascotas</h1>
                <div className="d-sm-flex p-2 gap-3">
                    <CardProducto
                        id={101}
                        titulo="Pack 3 ratones"
                        descripcion=""
                        precio={5000}
                        imagen="/public/img/ratones.jpg"

                    />

                    <CardProducto
                        id={102}
                        titulo=""
                        descripcion=""
                        precio={0}
                        imagen="/public/img/hueso.jpg"

                    />
                
                    <CardProducto
                        id={103}
                        titulo=""
                        descripcion=""
                        precio={0}
                        imagen="/public/img/pelota.jpg"

                    />
                
                    <CardProducto
                        id={104}
                        titulo=""
                        descripcion=""
                        precio={2450}
                        imagen="/public/img/abejita.jpg"

                    />
            </div>
        </div>
    )
}

export default ProductosM