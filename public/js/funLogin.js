// validaciones Login

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login_form"); // el id del form en login.html
  const email = document.getElementById("emEmailLogin");
  const password = document.getElementById("passPasswordLogin");

    form.addEventListener("submit", function (event) {
        let valido = true;
        let mensajes = [];
        var adminEmail='admin@gmail.com';
        var adminPass='admin';
        //  Validar correo con dominio permitido y maximo 100 caracteres
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
        if (!emailRegex.test(email.value)) {
        valido = false;
        mensajes.push("\n El correo debe ser @gmail.com o @duoc.cl o @profesor.duoc.cl");
        }
        if (email.value.length > 100) {
        valido = false;
        mensajes.push("\n El correo debe tener maximo 100 caracteres.");
        }
        //  Validar contraseña (mínimo 4 caracteres y máximo 10 caracteres)
        if (password.value.length < 4 || password.value.length > 10) {
        valido = false;
        mensajes.push("\n La contraseña debe tener entre 4 y 10 caracteres.");
        }

        // Si no es válido, prevenir el envío del formulario y mostrar mensajes de error,
        //  de lo contrario permitir el envío
        if (!valido) {
        event.preventDefault();
        Swal.fire({
                icon: "error",
                title: "Oops...",
                color: "black",
                background: "#f8d7da ",
                
                html: mensajes.join("<br>"),
                })
        }
        if (valido && email.value === adminEmail && password.value === adminPass) {
            event.preventDefault();
            window.location.href='../../admin/view/indexAdmin.html';
            return;
        }

        if (valido) {
            event.preventDefault();
            Swal.fire({
                title: "Iniciando Sesion",
                icon: "success",
                showLoading: true,
                allowOutsideClick: false,
                timer: 2000,
                didOpen: () => {
                    Swal.showLoading();
                }
                }).then(() => {
                    window.location.href='../views/inicio.html' // Enviar el formulario después de cerrar la alerta
                });
        }
        
    });
});