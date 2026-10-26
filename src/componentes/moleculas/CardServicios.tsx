// src/componentes/moleculas/CardServicios.tsx

function CardServicios() {
  return (
    <div className="card-group gap-3 mt-4">

      <div className="card shadow-sm">
        <img
          src="/img/consulta.avif"
          className="card-img-top mt-3"
          alt="animales en consulta veterinaria"
          // EL CAMBIO ESTÁ AQUÍ: width 100% en lugar de 400px
          style={{ height: "250px", width: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Cita Veterinaria</h5>
          <p className="card-text">
            Programa una cita con nuestro equipo veterinario para el cuidado de tu mascota.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Última actualización: 3 minutos atrás</small>
          </p>
        </div>
      </div>

      <div className="card shadow-sm">
        <img
          src="/img/desparasitacion_perro.webp"
          className="card-img-top mt-3"
          alt="perro en desparasitación"
          style={{ height: "250px", width: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Desparasitación</h5>
          <p className="card-text">
            Mantén a tu mascota libre de parásitos con nuestros servicios de desparasitación.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Última actualización: 3 minutos atrás</small>
          </p>
        </div>
      </div>

      <div className="card shadow-sm">
        <img
          src="/img/vacuna.png"
          className="card-img-top mt-3"
          alt="vacuna para mascotas"
          style={{ height: "250px", width: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Vacuna disponible</h5>
          <p className="card-text">
            Tenemos disponible la vacuna contra la rabia para perros y gatos.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Última actualización: 3 minutos atrás</small>
          </p>
        </div>
      </div>

    </div>
  );
}

export default CardServicios;