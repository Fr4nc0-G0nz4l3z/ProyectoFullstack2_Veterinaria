function Inicio(){
    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/public/img/imagen1.jpeg" className="d-block w-100" height="750" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/public/img/imagen2.webp" className="d-block w-100" height="750" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/public/img/imagen3.jpeg" className="d-block w-100" height="750" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    )
}

export default Inicio