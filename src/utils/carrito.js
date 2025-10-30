// Inicializar carrito desde localStorage o vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio, cantidad: 1, };

    // Verificar si ya está en el carrito
    const existente = carrito.find(item => item.nombre === nombre);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push(producto);
    }

    // Guardar en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
    position: "top",
    icon: "success",
    title: `${nombre} agregado al carrito`,
    text: `Valor: $${precio} CLP`,
    showConfirmButton: false,
    timer: 2500
}).then(() => {
                    window.location.href='../views/carrito.html' // Enviar el formulario después de cerrar la alerta
                });;
}