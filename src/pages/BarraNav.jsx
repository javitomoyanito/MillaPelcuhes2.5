
import "../css/allinone.css"

import { Link, useNavigate } from "react-router-dom";
function BarraNav() {
    const navigate = useNavigate();
    return (
        <header className="navbar">
            <div className="logo">
                <img src="/img/otro/LOGO.png" alt="" onClick={() => navigate('/')} />
            </div>
            <nav >
                
                <Link to="/productos">Productos</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/login">Login</Link>
                <Link to="/blogs">Blog</Link>
            </nav>
            <div className="acciones">
                <input type="text" placeholder="Buscar..." />
                <button className="btn-carrito" onClick={() => navigate('/carrito')}>🛒</button>
            </div>
        </header>
        
    )
}
export default BarraNav;
