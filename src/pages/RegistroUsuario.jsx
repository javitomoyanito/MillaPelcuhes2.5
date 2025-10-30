
import "../css/allinone.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateRegistro, getComunas, saveUsuario } from "../utils/registro";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


function RegistroUsuario() {
    // campos del formulario como state controlado
    const [run, setRun] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [direccion, setDireccion] = useState("");
    const [region, setRegion] = useState("");
    const [comuna, setComuna] = useState("");
    const [comunasOptions, setComunasOptions] = useState([]);
    const [dtFecNac, setDtFecNac] = useState("");

    // ahora usamos el mapa desde ../utils/registro.js y la función getComunas

    useEffect(() => {
        // actualizar opciones de comuna cuando cambia la region (delegado a util)
        setComunasOptions(getComunas(region));
        setComuna("");
    }, [region]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // delegar validaciones al util
        const { valido, mensajes } = validateRegistro({ run, nombre, apellido, email, password, confirmPassword, direccion });

        if (!valido) {
            // usar Swal importado (personalizado). Si falla, caer al alert nativo.
            try {
                Swal.fire({ icon: "error", title: "Oops...", color: "black", background: "#f8d7da", html: mensajes.join("<br>") });
            } catch (err) {
                alert(mensajes.join("\n"));
            }
            return;
        }

        // si es valido, guardar en localStorage a través del util
        const usuario = { run, nombre, apellido, email, password, direccion, dtFecNac };
        saveUsuario(usuario);

        try {
            Swal.fire({ title: "Registro Exitoso", icon: "success", confirmButtonText: "OK" }).then(() => {
                // limpiar formulario
                setRun("");
                setNombre("");
                setApellido("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setDireccion("");
                setRegion("");
                setComuna("");
                setDtFecNac("");
            });
        } catch (err) {
            alert("Registro Exitoso");
            setRun("");
            setNombre("");
            setApellido("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setDireccion("");
            setRegion("");
            setComuna("");
            setDtFecNac("");
        }
    };

    return (
        <main>
            <div className="body-div-registroUsuario">
                <form onSubmit={handleSubmit} className="registro_form LetrasForm" id="registro_form" >
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> RUN: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>
                                    <input value={run} onChange={e => setRun(e.target.value)} type="text" name="txtRun" id="txtRun" placeholder="-- Ingrese RUN --" className="LetrasForm2" required />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> Nombres: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>
                                    <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" name="txtNombre" id="txtNombre" placeholder="-- Ingrese Nombres --" className="LetrasForm2" required />
                                </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Apellidos: </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>
                                    <input value={apellido} onChange={e => setApellido(e.target.value)} type="text" name="txtApellidos" id="txtApellidos" placeholder="-- Ingrese Apellidos --" className="LetrasForm2" required />
                                </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Correo: </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>
                                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="emCorreo" id="emCorreo" placeholder="-- Ingrese Correo --" className="LetrasForm2" required />
                                </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Contraseña: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>
                                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="passContraseña" id="passContraseña" placeholder="-- Ingrese Contraseña --" className="LetrasForm2" required />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Confirmar Contraseña: </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>
                                    <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" name="passConfirmarContraseña" id="passConfirmarContraseña" placeholder="-- Confirme Contraseña --" className="LetrasForm2" required />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }} >Fecha de Nacimiento: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>
                                    <input value={dtFecNac} onChange={e => setDtFecNac(e.target.value)} type="date" name="dtFecNac" id="dtFecNac" />
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> Direccion: </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "right", paddingRight: "1.5%" }} >
                                    <select value={region} onChange={e => setRegion(e.target.value)} name="cmbRegion" id="cmbRegion" required>
                                        <option value="">-- Seleccione Region --</option>
                                        <option value="Ayp">Arica y Parinacota</option>
                                        <option value="Trp">Tarapacá</option>
                                        <option value="Ant">Antofagasta</option>
                                        <option value="Ata">Atacama</option>
                                        <option value="Cqm">Coquimbo</option>
                                        <option value="Vlp">Valparaiso</option>
                                        <option value="Boh">Gral. Bernardo O'Higgins</option>
                                        <option value="Mau">Maule</option>
                                        <option value="Ñbl">Ñuble</option>
                                        <option value="Bio">BioBío</option>
                                        <option value="Ara">Araucania</option>
                                        <option value="Lri">Los Ríos</option>
                                        <option value="Llg">Los Lagos</option>
                                        <option value="Ais">Aisén</option>
                                        <option value="Mga">Magallanes y Antartica</option>
                                        <option value="Mtr">Metropolitana de Santiago</option>
                                    </select>
                                </td>
                                <td style={{ textAlign: "left", paddingLeft: "1.6%" }}>
                                    <select value={comuna} onChange={e => setComuna(e.target.value)} name="cmbComuna" id="cmbComuna" required>
                                        <option value="">-- Seleccione Comuna --</option>
                                        {comunasOptions.map((c, idx) => (
                                            <option key={idx} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> <input value={direccion} onChange={e => setDireccion(e.target.value)} type="text" name="txtDireccion" id="txtDireccion" placeholder="-- Ingrese Direccion --" className="LetrasForm2" /></td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "right", paddingRight: "8%", paddingTop: "10%" }}><button type="submit" className="btn"> Guardar </button></td>
                                <td style={{ textAlign: "left", paddingLeft: "8%", paddingTop: "10%" }}> <button  className="btn"type="reset" onClick={() => {
                                    setRun(""); setNombre(""); setApellido(""); setEmail(""); setPassword(""); setConfirmPassword(""); setDireccion(""); setRegion(""); setComuna(""); setDtFecNac("");
                                }}> Limpiar </button></td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ textAlign: "center" }}>
                        ¿tienes cuenta? <Link to="/login">Inicia sesion</Link>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default RegistroUsuario;