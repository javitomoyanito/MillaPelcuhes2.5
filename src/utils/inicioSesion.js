const password = document.getElementById("passContraseña");
const email = document.getElementById("emCorreo");
const confirmPassword = document.getElementById("passConfirmarContraseña");        

form.addEventListener("submit", function (event) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|profesor\.duoc\.cl|duocuc\.cl)$/;
    if (!emailRegex.test(email.value)) {
    valido = false;
    }
    if (email.value.length > 100) {
    valido = false;
    }

    if (password.value !== confirmPassword.value) {
    valido = false;
    }

});