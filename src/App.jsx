import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BarraNav from './pages/BarraNav.jsx'
import Footer from './pages/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Contacto from './pages/Contacto.jsx'
import Carrito from './pages/Carrito.jsx'
import Login from './pages/Login.jsx'
import Productos from './pages/Productos.jsx'
import RegistroUsuario from './pages/RegistroUsuario.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Blogs from './pages/Blogs.jsx'
import Producto from './pages/Producto.jsx'
import BlogDetalle from './pages/BlogDetalle.jsx'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <BarraNav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/producto" elemente={<Producto />} />
        <Route path="/blogDetalle" elemente={<BlogDetalle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
