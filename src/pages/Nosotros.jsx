import "../css/allinone.css"

function Nosotros(){
    return(
        <main className="FondoCompleto">
            <div className="FondoLetras Letras">
                Haz que cada momento sea eterno con un abrazo. En nuestra pyme, transformamos peluches adorables en tesoros con voz, grabando ese mensaje especial, una risa o una canción directamente en el corazón de tu nuevo compañero. Regala más que un juguete; regala emociones, recuerdos que se pueden escuchar y un lazo inquebrantable para esa persona tan importante. ¡Un detalle único y personal que hablará por ti!
                </div>
                <section id="¿Quienes somos?">
                    <h2 className="EstiloTitulos FondoTitulos">¿Quienes somos?</h2>
                    <div className="in-flex">
                        <tr className="FondoLetras Letras">En nuestro emprendimiento, convertimos un simple peluche en un recuerdo inolvidable y tangible. Lo que hacemos es darle vida a esos tiernos compañeros al grabar mensajes personalizados directamente en ellos. Imaginamos la alegría de tus seres queridos al escuchar tu voz, esa risa contagiosa o un mensaje lleno de amor, reproducido directamente desde el corazón de un adorable peluche. No solo vendemos un juguete, entregamos emociones, cercanía y un pedacito de ti que perdura en el tiempo, ideal para cualquier ocasión especial, desde un cumpleaños hasta una despedida o un "te extraño"</tr>
                    </div>
                    <br/>
                    {/* <!-- Carrusel --> */}
                    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1000">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{width: "100% "}}  >
                                <img src="../img/productos/oso1.jpg" className="d-block w-100 img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item" style={{width: "100% "}}     >
                                <img src="../img/productos/oso2.jpg" className="d-block w-100 img-fluid" alt="..."/>
                            </div>
                            <div className="carousel-item" style={{width: "100% "}}     >
                                <img src="../img/productos/oso3.jpg" className="d-block w-100 img-fluid" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* <!-- Fin Carrusel --> */}
                </section>
                <section id="Ubicacion">
                    <h2 className="EstiloTitulos FondoTitulos">Estamos ubicados en</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.002626770043!2d-70.65959252332745!3d-33.39709567341072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c6709fe91597%3A0x4d93deb8d64d9901!2sCerro%20Tupahue%201156%2C%20Recoleta%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1755304251133!5m2!1ses-419!2scl" width="800" height="600" style={{border:"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
        </main>
    )
}

export default Nosotros;