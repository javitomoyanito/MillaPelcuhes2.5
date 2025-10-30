import "../css/allinone.css"
import { Link } from "react-router-dom";

function Blogs() {
    return (
        <main>
            <section className="blog-container">
                <div className="blog-header">
                    <h1>Curiosidades</h1>
                    <p>Noticias, novedades y curiosidades sobre peluches</p>
                </div>
                <div className="blog-list">
                    <div className="blog-card">
                        <img className="blog-card-img" src="../img/otro/blog1.jpg" alt="Imagen de la noticia" style={{ width: "100%", height: "auto", objectFit: "cover", maxHeight: "300px" }} />
                        <div className="blog-card-content">
                            <div className="blog-card-title">Procedencia</div>
                            <div className="blog-card-desc">Desde la creación de los primeros osos de peluche (que buscaban imitar la forma de los oseznos reales), los peluches han variado enormemente en forma, estilo, color y material.</div>
                            <div className="blog-card-footer">
                                <div className="author">
                                    <img src="../img/otro/Logo.jpg" alt="Autor" />
                                    <span>Milla Peluches</span>
                                </div>
                                <span className="date">06/02/1903</span>
                            </div>
                            <Link to="/blogDetalle">Leer más</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-container">
                <div className="blog-header">
                    <h1>Proximante</h1>
                    <p>Nuevos lanzamientos, ofertas y mas</p>
                </div>
                <div className="blog-list">
                    <div className="blog-card">
                        <img className="blog-card-img" src="../img/otro/fotococa.jpg" alt="Imagen de la noticia" style={{ width: "100%", height: "auto", objectFit: "cover", maxHeight: "300px" }} />
                        <div className="blog-card-content">
                            <div className="blog-card-title">!Por el dia del niño¡ No te lo pierdas</div>
                            <div className="blog-card-desc">Todos los peluches pequeños y medio a un 45% de descuento.</div>
                            <div className="blog-card-footer">
                                <div className="author">
                                    <img src="../img/otro/Logo.jpg" alt="Autor" />
                                    <span>Milla Peluches</span>
                                </div>
                                <span className="date">06/02/1903</span>
                            </div>
                            <Link to="/blogDetalle">Leer más</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Blogs;