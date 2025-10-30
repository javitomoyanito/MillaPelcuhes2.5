document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contacto_form"); // el id del form en login.html
    const email = document.getElementById("emEmailContacto");
    
  
      form.addEventListener("submit", function (event) {
          let valido = true;
          let mensajes = [];
          
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
          
          if (valido) {
              event.preventDefault();
              Swal.fire({
                  title: "Gracias por tu Contribucion",
                  icon: "success",
                  
                  allowOutsideClick: false,
                  
                  }).then(() => {
                      window.location.href='../views/contacto.html' // Enviar el formulario después de cerrar la alerta
                  });
          }
          
      });
  });