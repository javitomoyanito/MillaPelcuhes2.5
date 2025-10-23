import "../css/allinone.css"



function Contacto() {
    return (
        <main>
            <div className="body-div-contacto">
                <form action="#" method="post" className="contacto_form" id="contacto_form">
                    <table style={{width: "100%"}}>
                        <tr>
                            <td colSpan={2} style={{ textAlign: "center" }}>Nombre:</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>  <input type="text" name="txtNomContacto" id="txtNomContacto" placeholder="-- Ingrese Nombre --" required /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: "center" }}>Correo:</td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <input type="email" name="emEmailContacto" id="emEmailContacto" placeholder="-- Ingrese Correo --" required /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: "center" }}>Asunto:</td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <select name="selAsunto" id="selAsunto" required>
                                <option value="sug">Sugerenecia</option>
                                <option value="rec">Reclamo</option>
                                <option value="con">Consulta</option>
                                <option value="otro">Otro</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: "center" }}>Mensaje:</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <textarea name="txtaMensaje" id="txtaMensaje" cols="50" rows="10" placeholder="Escriba su Mensaje..." required></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td > <button type="reset" > Limpiar </button></td>
                            <td ><button type="submit"> Guardar </button></td>
                        </tr>

                    </table>

                </form>
            </div>
        </main>
    )
}

export default Contacto;