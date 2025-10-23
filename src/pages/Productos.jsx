import "../css/allinone.css"
// import { verDetalle } from "../js/detalle.js";
function Productos() {
    return (
        <main className="subBack subtitulos">

            <section>
                <p>Los peluches más tiernos para regalar y disfrutar 💖</p>
            </section>

            <section className="card">
                <h2>Productos Destacados</h2>
                <div>

                    <article className="card" >
                        <img src="../img/productos/oso1.jpg" alt="Oso pequeño"  className="article-img"/>
                        <h3 className="article-h3">Oso Pequeño</h3>
                        <p className="article-p">$10.000 CLP</p>
                        <button onClick={() => verDetalle(1)} className="mi-boton">Ver detalle</button>

                    </article>

                    <article className="card">
                        <img src="../img/productos/oso2.jpg" alt="Oso mediano"  className="article-img"/>
                        <h3 className="article-h3">Oso Mediano</h3>
                        <p className="article-p">$18.000 CLP</p>
                        <button onClick={() => verDetalle(2)} className="mi-boton">Ver detalle</button>

                    </article>

                    <article className="card">
                        <img src="../img/productos/oso3.jpg" alt="Oso gigante" className="article-img" />
                        <h3 className="article-h3">Oso Gigante</h3>
                        <p className="article-p">$25.000 CLP</p>
                        <button onClick={() => verDetalle(3)} className="mi-boton" >Ver detalle</button>

                    </article>

                    <article className="card">
                        <img src="../img/productos/oson.jpg" alt="Oso gigante"  className="article-img"/>
                        <h3 className="article-h3">Oso Triste</h3>
                        <p className="article-p">$15.000 CLP</p>
                        <button onClick={() => verDetalle(4)} className="mi-boton" >Ver detalle</button>

                    </article>


                    <article className="card">
                        <img src="../img/productos/osodrip.jpg" alt="Oso gigante" className="article-img" />
                        <h3 className="article-h3">Oso Drip</h3>
                        <p className="article-p">$19.000 CLP</p>
                        <button onClick={() => verDetalle(5)} className="mi-boton" >Ver detalle</button>

                    </article>


                    <article className="card">
                        <img src="../img/productos/ted.jpg" alt="Oso gigante"  className="article-img"/>
                        <h3 className="article-h3">Oso ted</h3>
                        <p className="article-p">$14.000 CLP</p>
                        <button onClick={() => verDetalle(6)} className="mi-boton" >Ver detalle</button>
                    </article>


                    <article className="card">
                        <img src="../img/productos/osoRepartidor.jpg" alt="Oso gigante" className="article-img"/>
                        <h3 className="article-h3">Oso Parada militar</h3>
                        <p className="article-p">$39.000 CLP</p>
                        <button onClick={() => verDetalle(7)} className="mi-boton" >Ver detalle</button>

                    </article>
                </div>


            </section>
        </main>
    )
}

export default Productos;