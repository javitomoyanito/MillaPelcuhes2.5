import { Link, useNavigate } from "react-router-dom";
import "../css/allinone.css"
function Producto() {
    const navigate = useNavigate();
    return (
        <main>
            <br />
            <div id="detalle"></div>
            <script src="../js/detalle.js"></script>
            <script src="../js/carrito.js"></script>
        </main>
    )
}
export default Producto;