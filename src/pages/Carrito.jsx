import "../css/allinone.css"

import { Link, useNavigate } from "react-router-dom";
function Carrito() {
    return (
        <main>

            <div className="body-div-carrito">
                <h3 style={{color:"white", textAlign:"center", marginBottom:"30px"}}>Listado de productos</h3>
                <div>
                    <table>
                        <thead>
                            <tr style={{ backgroundColor: "rgba(151, 107, 45, 0.7)", color: "white", fontSize: "18px" }}>
                                <th style={{ width: "11%" }}>Producto</th>
                                <th style={{ width: "6%" }}>Cantidad</th>
                                <th style={{ width: "8%" }}>Precio Unitario</th>
                                <th style={{ width: "5%" }}>Subtotal</th>
                                <th style={{ width: "10%" }}>Eliminar</th>
                            </tr>
                        </thead>

                    </table>
                </div>

                <div id="carrito-lista"></div>
                <p style={{ color: "white", textAlign: "right", fontSize: "22px" }}>Total: $<span id="total"></span></p>


                <hr style={{ margin: "30px 0", borderColor: "white" }} />

                <div style={{ textAlign: "right", marginTop: "20px" }}>
                    <button  >
                        <Link to="/pagos" style={{ textDecoration: "none", color: "#fff" }}>Finalizar Compra </Link>
                    </button>

                    <button>
                        <Link to="/productos" style={{ textDecoration: "none", color: "#fff" }}>Seguir Comprando </Link>
                    </button>


                </div>



            </div>
        </main>
    )
}

export default Carrito;