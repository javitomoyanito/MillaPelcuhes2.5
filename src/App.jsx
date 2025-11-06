import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Outlet renderiza el componente de la ruta actual */}
        <Outlet /> 
      </main>
    </div>
  );
}