import CardProducto from "../componentes/moleculas/CardProductoM";

function ProductosM(){
    return(
        <div>
            <h1>Productos de mascotas</h1>
            <div className="d-sm-flex">
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
                    titulo="Metronidazol 250mg"
                    descripcion="Metronidazol"
                    precio={1500}
                    imagen="/public/img/metronidazol.jpg"
                />
                <CardProducto
                    id={4}
                    titulo="Doxiciclina 100mg"
                    descripcion="Doxiciclina"
                    precio={2000}
                    imagen="/public/img/doxiciclina.jpg"
                />
                <CardProducto
                    id={5}
                    titulo="Ivermectina 1%"
                    descripcion="Ivermectina"
                    precio={2500}
                    imagen="/public/img/ivermectina.jpg"
                />
            </div>
            <br/>
            <h1>Juguetes de mascotas</h1>
                <div className="d-sm-flex">
                    <CardProducto
                        id={101}
                        titulo="Pack 3 ratones"
                        descripcion="Pack de 3 ratones para gatos"
                        precio={5000}
                        imagen="/public/img/ratones.jpg"
                    />

                    <CardProducto
                        id={102}
                        titulo="Hueso de goma"
                        descripcion="Hueso de goma para perros"
                        precio={2000}
                        imagen="/public/img/hueso.jpg"
                    />

                    <CardProducto
                        id={103}
                        titulo="Pelota de goma"
                        descripcion="Pelota de goma para perros"
                        precio={2500}
                        imagen="/public/img/pelota.jpg"
                    />

                    <CardProducto
                        id={104}
                        titulo="Abejita de látex"
                        descripcion="Abejita de látex para gatos"
                        precio={2450}
                        imagen="/public/img/abejita.jpg"
                    />
            </div>
        </div>
    )
}

export default ProductosM