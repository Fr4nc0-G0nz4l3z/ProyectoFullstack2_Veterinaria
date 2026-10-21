
import CarouselInicio from "../componentes/moleculas/CarouselInicio"

function Inicio(){
    return(
        <div className="container mt-4">
            <h1>Bienvenido a Veterinaria</h1>

            <CarouselInicio/>

            <section className="mt-5">
                <h2>Nuestros servicios</h2>

                <div className="et_pb_text_inner">

                <p>
                    Clínica Veterinaria San Marcos. Somos el principal centro de Urgencias veterinarias,
                    capaz de gestionar los nuevos retos que la sociedad demanda las 24 horas del día.
                    Nuestra responsabilidad está con una sociedad cada vez más intercomunicada con los animales, 
                    brindando para ello una atención especializada en las más variadas áreas clínicas. 
                    Nuestra identidad viene reflejada por un marcado trabajo interdisciplinario, 
                    combinando conocimientos relativos a los animales junto a otras áreas relacionadas, como la Psicología, 
                    Farmacia, Etología, Tecnología, Nutrición, Tenencia responsable de animales, entre otros.
                </p>
                </div>
            </section>
        </div>

        

    )
}

export default Inicio