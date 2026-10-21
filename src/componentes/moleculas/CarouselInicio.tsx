function CarouselInicio() {
  return (
    <div 
      id="carouselExampleAutoplaying" 
      className="carousel slide" 
      data-bs-ride="carousel"
      style={{ maxWidth: "1000px", margin: "0 auto" }} // Centra el carrusel y limita su ancho
    >
      {/* Indicadores (los puntitos abajo) */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Imágenes */}
      <div className="carousel-inner rounded-5"> {/* El rounded-5 va aquí para redondear todo el bloque */}
        
        <div className="carousel-item active">
          <img 
            src="/img/imagen1.jpeg" 
            className="d-block w-100" 
            alt="Imagen 1" 
            // Forzamos una altura fija y recortamos si sobra
            style={{ height: '400px', objectFit: 'cover' }} 
          />
        </div>

        <div className="carousel-item">
          <img 
            src="/img/imagen2.webp" 
            className="d-block w-100" 
            alt="Imagen 2" 
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>

        <div className="carousel-item">
          <img 
            src="/img/imagen3.jpeg" 
            className="d-block w-100" 
            alt="Imagen 3" 
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>

      </div>

      {/* Controles (Flechas) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default CarouselInicio;