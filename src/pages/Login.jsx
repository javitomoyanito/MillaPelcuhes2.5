import "../css/allinone.css"

function Login() {
    return (
        <main>
            <div className="body-div-login">

                <form action="#" method="POST" className=".body_div_registroUsuario LetrasForm" id="login_form">
                    <table style={{ width: "60%", marginLeft: "20%" }}>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: "center" }} > Correo electrónico:
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <input  className="LetrasForm2" type="email" name="emEmailLogin" id="emEmailLogin" placeholder="Ingresa tu correo " required />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}> Contraseña: </td>
                            </tr>
                            <tr>
                                <td >
                                    <input className="LetrasForm2" type="password" name="passPasswordLogin" id="passPasswordLogin" placeholder="Ingresa tu contraseña" required />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>
                                    <button type="submit" className="btn"> Ingresar </button>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}> ¿No tienes cuenta?
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center"}} >
                                    <a  href="/RegistroUsuario">Registrarse</a>

                                </td>
                            </tr>
                            <tr>
                                <td><a href="/Admin">.</a></td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        </main>
    )
}
export default Login;