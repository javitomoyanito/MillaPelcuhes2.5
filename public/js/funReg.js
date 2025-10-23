// === VALIDACIONES REGISTRO USUARIO ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registro_form"); // el id del form en RegistroUsuario.html
  const run = document.getElementById("txtRun");
  const nombre = document.getElementById("txtNombre");
  const apellido = document.getElementById("txtApellidos");
  const email = document.getElementById("emCorreo");
  const password = document.getElementById("passContraseña");
  const confirmPassword = document.getElementById("passConfirmarContraseña");
  const direccion = document.getElementById("txtDireccion");

    form.addEventListener("submit", function (event) {
        let valido = true;
        let mensajes = [];

        //  Validar RUN con formato correcto y dígito verificador
        if (run.value.length < 7 || run.value.length > 9) {
        valido = false;
        mensajes.push("\n El RUN debe tener entre 8 y 9 caracteres.");
        }
        if (run.value.length == 7) {
            valido = false;
            mensajes.push("\n falta digito verificador");
        }
        if (run.value.length == 8) {
        run.value = "0" + run.value; // Agregar cero a la izquierda si tiene 8 caracteres
        }
        
        let factor = 3;
        let suma = 0;
        for (let i = 0; i < 8; i++) {
        let caracter = run.value.slice(i, i + 1);
        suma = suma + (caracter * factor);
        factor--;
        if (factor == 1) factor = 7;
        }
        var dvRun= 11 - (suma % 11);
        if (dvRun == 11) dvRun = 0;
        if (dvRun == 10) dvRun = "K";
        let dvInput = run.value.slice(-1).toUpperCase();
        if (dvRun != dvInput) {
        valido = false;
        mensajes.push("\n Rut Invalido ");
        }
        
            
        //  Validar nombre (máximo 50 caracteres)
        if (nombre.value.length > 50) {
        valido = false;
        mensajes.push("\n El nombre debe tener maximo 50 caracteres.");
        }
        //validar apellidos (máximo 100 caracteres)
        if (apellido.value.length > 100 ){
        valido = false;
        mensajes.push("\n Los apellidos deben tener maximo 100 caracteres.");
        }

        //  Validar correo con dominio permitido
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl)$/;
        if (!emailRegex.test(email.value)) {
        valido = false;
        mensajes.push("\n El correo debe ser @gmail.com o @duoc.cl o @profesor.duoc.cl");
        }
        if (email.value.length > 100) {
        valido = false;
        mensajes.push("\n El correo debe tener maximo 100 caracteres.");
        }

        //  Validar contraseñas iguales
        if (password.value !== confirmPassword.value) {
        valido = false;
        mensajes.push("\n Las contraseñas no coinciden.");
        }
        
        //validar dirección (maximo 300 caracteres)
        if( direccion.value.length > 300 ){
            valido = false;
            mensajes.push("\n La direccion debe tener maximo 300 caracteres.");
        }

        // Mostrar mensajes de error y evitar envío
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
        if (valido) {
            event.preventDefault();

    // Crear objeto usuario
            const usuario = {
                run: run.value,
                nombre: nombre.value,
                apellido: apellido.value,
                email: email.value,
                password: password.value,
                direccion: direccion.value,
                // Puedes agregar más campos si lo deseas
            };

            // Obtener usuarios existentes o array vacío
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            Swal.fire({
                title: "Registro Exitoso",
                icon: "success",
                confirmButtonText: "OK"
            }).then(() => {
                form.reset(); // Limpiar el formulario
            });
        }
    });
});