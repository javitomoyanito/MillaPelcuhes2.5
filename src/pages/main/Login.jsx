import React, { useState } from 'react';

function Login() {
    const [usuario, setUsuario] = useState(''); 
    const [contrasena, setContrasena] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Iniciando sesión con:');
        console.log('Usuario:', usuario);
        console.log('Contraseña:', contrasena);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-50 font-sans">
            
            <form 
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
                    Iniciar sesión
                </h2>
                
                <div className="mb-4">
                    <input
                        type="text"
                        id="usuario"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        id="contrasena"
                        placeholder="Contraseña" 
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
                >
                    Entrar
                </button>

                <div className="text-center mt-6 text-gray-600 text-sm">
                    ¿No tienes cuenta?{' '}
                    <a href="/register" className="text-orange-500 hover:underline">
                        Regístrate
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;