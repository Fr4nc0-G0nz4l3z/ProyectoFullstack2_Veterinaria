const novedades = [
    {
        id: 1,
        titulo: "Campaña de vacunación",
        descripcion: "Mantén a tus mascotas protegidas con sus vacunas al día.",
        imagen: "/img/vacuna.png"
    },

    {
        id: 2,
        titulo: "Cortes de uñas",
        descripcion: "Descubre los mejores consejos para mantener las uñas de tus mascotas en perfecto estado.",
        imagen: "/img/corte_de_uña.png"
    },

    {
        id: 3,
        titulo: "Desparasitación",
        descripcion: "Descubre los mejores consejos para mantener a tus mascotas libres de parásitos.",
        imagen: "/img/desparasitar.png"
    },

    {
        id: 4,
        titulo: "Ecografía",
        descripcion: "Ecografía para mascotas: una herramienta esencial para el diagnóstico y cuidado de la salud de tus animales.",
        imagen: "/img/ecografia.png"
    },

    {
        id: 5,
        titulo: "Alimentación saludable",
        descripcion: "Aprende a proporcionar una dieta equilibrada y nutritiva para tus mascotas.",
        imagen: "/img/alimentacion.png"
    },

    
    {
        id: 6,
        titulo: "Adopción responsable",
        descripcion: "Dale una segunda oportunidad a una mascota y descubre los beneficios de adoptar.",
        imagen: "/img/adopcion.png"
    },
    {
        id: 7,
        titulo: "Salud dental",
        descripcion: "Cuida los dientes de tus mascotas y previene enfermedades bucales.",
        imagen: "/img/dental.png"
    },
    {
        id: 8,
        titulo: "Chequeos veterinarios",
        descripcion: "Los controles periódicos ayudan a mantener saludables a tus mascotas.",
        imagen: "/img/chequeo.png"
    },
    
    {
        id: 9,
        titulo: "Prevención de la obesidad",
        descripcion: "Aprende a prevenir el sobrepeso en tus mascotas mediante una alimentación equilibrada, ejercicio y controles veterinarios.",
        imagen: "/img/obecidad.png"
    },
    {
        id: 10,
        titulo: "Cuidado de ojos y oídos",
        descripcion: "Descubre cómo mantener saludables los ojos y oídos de tus mascotas y prevenir posibles infecciones.",
        imagen: "/img/ojos_y_oidos.png"
    }


];

function Novedades() {
  return (
    <div className="container-fluid mt-5 mb-5 mb-5 px-4" >
      <h1 className="text-center mb-3">
        Novedades
      </h1>

      <p className="text-center mb-5">
        Conoce las últimas noticias y consejos
        para el cuidado de tus mascotas.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
        {novedades.map((novedad) => (
          <div
            className="col"
            key={novedad.id}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={novedad.imagen}
                className="card-img-top"
                alt={novedad.titulo}
                style={{
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {novedad.titulo}
                </h5>

                <p className="card-text">
                  {novedad.descripcion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Novedades;