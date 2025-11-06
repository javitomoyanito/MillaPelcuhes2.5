import { NavLink, useNavigate } from 'react-router-dom';
import logo from '/images/LOGO.png';

export default function AdminSidebar({ sideBarOpen, setSideBarOpen }) {
  const nav = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    nav('/login');
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-orange-300/60 font-medium text-orange-900'
        : 'text-gray-700 hover:bg-orange-200'
    }`;

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-64 min-h-screen bg-orange-100 border-r border-orange-200 p-4
        transform transition-transform duration-300 ease-in-out
        ${sideBarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Millapeluche" className="w-10 h-10" />
          <span className="font-bold text-xl text-orange-900">Millapeluche</span>
        </div>
        
        <button
          onClick={() => setSideBarOpen(false)}
          className="lg:hidden text-orange-800 p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/admin" end className={linkClass}>🏠 Dashboard</NavLink>
        <NavLink to="/admin/productos" className={linkClass}>🧸 Productos</NavLink>
        <NavLink to="/admin/usuarios" className={linkClass}>👥 Usuarios</NavLink>
        <NavLink to="/admin/ventas" className={linkClass}>💳 Ventas</NavLink>
        <NavLink to="/admin/informes" className={linkClass}>📊 Informes</NavLink>
        <NavLink to="/admin/comentarios" className={linkClass}>💬 Comentarios</NavLink>
        <NavLink to="/admin/usuarios-activos" className={linkClass}>🟢 Usuarios Activos</NavLink>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={logout}
          className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition font-medium"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}