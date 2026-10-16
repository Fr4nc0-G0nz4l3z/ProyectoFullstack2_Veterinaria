function Nosotros(){

  return (
    <div className="container mt-5 nosotros">
      <h1 className="text-center display-4">Sobre Nosotros</h1>
      <h2 className="text-center text-primary">VETERINARIA SAN MARCOS</h2>
      
      <div className="text-center my-4">
        <img 
          src="/public/img/logo.png" 
          alt="Logo Veterinaria San Marcos" 
          width="180" 
          height="180" 
          className="rounded-circle shadow"
        />
      </div>

      <section className="my-5">
        <h3 className="text-center mb-4">¿Quiénes Somos?</h3>
        <p className="text-justify">
          Somos <strong>Veterinaria San Marcos</strong>, una clínica veterinaria dedicada a brindar cuidado integral a tus mascotas. Nuestra clínica está ubicada en Rancagua, Región de O'Higgins, nos dedicamos al cuidado y bienestar de las mascotas. Nuestro equipo de profesionales altamente capacitados se compromete a ofrecer servicios de calidad, desde consultas médicas, cirugías hasta tratamientos especializados.
        </p>
        <p className="text-justify">
          Nuestro objetivo es ofrecer servicios de salud veterinaria que ayuden a prevenir enfermedades, tratar problemas de salud y mejorar la calidad de vida de nuestros queridos compañeros.
        </p>
      </section>

      <section className="my-5 text-center">
        <h3 className="mb-4">NUESTRA MISIÓN</h3>
        <p className="mb-4">
          Brindar atención veterinaria de calidad, promoviendo la salud, prevención y bienestar de las mascotas mediante un servicio cercano y responsable.
        </p>
        <ul className="list-unstyled">
          <li>✅ Consulta general</li>
          <li>✅ Vacunación</li>
          <li>✅ Desparasitación</li>
          <li>✅ Control de peso</li>
          <li>✅ Cirugía menor</li>
        </ul>
      </section>

      <section className="my-5">
        <h3 className="text-center mb-4">INFORMACIÓN DE LA VETERINARIA</h3>
        <table className="table table-bordered table-striped text-center">
          <thead className="table-primary">
            <tr>
              <th>Ubicación</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rancagua, Región de O'Higgins</td>
              <td>Atención de mascotas</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="my-5 text-center">
        <h3 className="mb-4">EQUIPO DESARROLLADOR</h3>
        <p>Este sitio web fue desarrollado por estudiantes de Desarrollo Fullstack II.</p>
        <ul className="list-unstyled">
          <li>👨‍💻 Franco Gonzalez</li>
          <li>👨‍💻 Juan Ortega</li>
          <li>👨‍💻 Mathias Caceres</li>
        </ul>
      </section>
    </div>
  );
}

export default Nosotros