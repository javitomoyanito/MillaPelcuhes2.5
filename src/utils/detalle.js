// Obtener el ID del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Datos de ejemplo de productos (en un caso real, esto vendría de una base de datos)
const productos = {
    1: { nombre: 'Oso Pequeño', precio: 10000, descripcion: 'Un tierno oso pequeño para abrazar.', imagen: '../img/productos/oso1.jpg' },
    2: { nombre: 'Oso Mediano', precio: 18000, descripcion: 'Un adorable oso mediano para regalar.', imagen: '../img/productos/oso2.jpg' },
    3: { nombre: 'Oso Gigante', precio: 25000, descripcion: 'Un enorme oso gigante para los más grandes abrazos.', imagen: '../img/productos/oso3.jpg' },
    4: { nombre: 'Oso Triste', precio: 15000, descripcion: 'Un oso gigante con una expresión triste pero adorable.', imagen: '../img/productos/oson.jpg' },
    5: { nombre: 'Oso Drip', precio: 19000, descripcion: 'Un oso gigante con estilo y swag.', imagen: '../img/productos/osodrip.jpg' },
    6: { nombre: 'Oso ted', precio: 14000, descripcion: 'Un oso gigante que expresa sin filtro', imagen: '../img/productos/ted.jpg' },
    7: { nombre: 'Oso Parada militar', precio: 39000, descripcion: 'Un oso gigante que transmite leyes y respeto.', imagen: '../img/productos/osoRepartidor.jpg' },
};

// Mostrar los detalles del producto
function mostrarDetalle() {
    const detalleDiv = document.getElementById('detalle');
    if (productos[productId]) {
        const producto = productos[productId];
        detalleDiv.innerHTML = 
        `
            <div class="tarjeta">
                <div class="tarjeta-contenido tarjeta-detalle">
                    <h1>${producto.nombre}</h1>
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <p>${producto.descripcion}</p>
                    <h4>Precio: $${producto.precio} CLP</h4>
                    <a class="mi-boton" <button  onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button></a>
                    <a href="inicio.html" class="mi-boton">Volver</a>
                </div>
            </div>       
        `;
    } else {
        detalleDiv.innerHTML = `
        <div>
            <p>Producto no encontrado.</p> 
            <a href="inicio.html" class="mi-boton">Volver</a>
        </div>
        `
                                ;
    }
}

function agregarAlCarrito(nombre, precio) {
    // alert(`Agregado al carrito: ${nombre} por $${precio} CLP`);
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

window.onload = mostrarDetalle;