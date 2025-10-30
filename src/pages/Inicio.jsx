import "../css/allinone.css"


function Inicio() {
    return (
            <main>
        <section className="hero" >
        <div className="hero-texto">
        <h1>Bienvenidos a Milla Peluches</h1>
        <p>El lugar donde la ternura cobra vida 💕</p>
        <a href="#Nuevo" className="btn-principal">Ver Catálogo</a>
        </div>
        
        <img src="../img/backgrounds/inicio.png" alt="Peluches tiernos " className="hero-img"/>
 
        <hr/>
    </section>
    <section className="hero" style={{marginTop: "20px" }}>
        <div className="hero-texto">
        <h1>¡Pueden ser tuyos!</h1>
        <p>Donde la ternura cobra vida 🧸💖
    Encuentra el compañero perfecto para regalar, abrazar y compartir momentos inolvidables.
    Cada peluche está hecho para transmitir cariño, alegría y un poquito de magia.</p>
        </div>

        <img src="../img/productos/Inicio.png" alt="Peluches tiernos" className="hero-img"/>

    </section>
        
        <section>

            <article className="tarjetas-secundarias" style={{marginTop: "20px" }} id="Nuevo">
                <section className="tarjeta-interno">
                    <h2>¡Nuevos Lanzamientos!</h2>
                    <img className="article-img"src="../img/productos/oso2.jpg" alt="Producto 2"/>
                    <h3>¡Novedad!</h3>
                    <p>10.000</p>
                    <button onClick={() => navigate ("verDetalle(2)")} className="mi-boton">Ver detalle</button>
                </section>
                
            </article>
            <article className="tarjetas-secundarias" style={{marginTop: "20px" }}>
                <section className="tarjeta-interno">
                    <h2>¡Nuevos Lanzamientos!</h2>
                    <img className="article-img"src="../img/productos/oso3.jpg" alt="Producto 3"/>
                    <h3>¡Novedad!</h3>
                    <p>25.000</p>
                    <button onClick={() => navigate ("verDetalle(3)")} className="mi-boton">Ver detalle</button>
                </section>
            </article>

            <article className="tarjetas-secundarias" style={{marginTop: "20px" }}>
                <section className="tarjeta-interno">
                    <h2>¡Nuevos Lanzamientos!</h2>
                    <img className="article-img"src="../img/productos/oso1.jpg" alt="Producto 3"/>
                    <h3>¡Novedad!</h3>
                    <p>18.000</p>
                    <button onClick={() => navigate ("verDetalle(1)")} className="mi-boton">Ver detalle</button>
                </section>
            </article>
            <article className="tarjetas-secundarias" style={{marginTop: "20px" }}>
                <section className="tarjeta-interno">
                    <h2>¡Nuevos Lanzamientos!</h2>
                    <img className="article-img"src="../img/productos/oson.jpg" alt="Producto 3"/>
                    <h3>¡Novedad!</h3>
                    <p>15.000</p>
                    <button onClick={() => navigate ("verDetalle()")} className="mi-boton">Ver detalle</button>
                </section>
            </article>
        </section>
        {/* <script>
            function verDetalle(id) {
              //esto sirve para redeireccionar a la pagina de detalle del producto 
              //  asi no hace falta crear multiples paginas
                window.location.href = 'producto.html?id=' + id;
            }
          </script> */}
    </main>
    )
}
export default Inicio;