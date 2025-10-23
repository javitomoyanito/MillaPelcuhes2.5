
import "../css/allinone.css"
import { Link } from "react-router-dom";
function RegistroUsuario() {
    return (
        <main>
            <div className="body-div-registroUsuario">
                <form action="#" method="post" className="registro_form" id="registro_form" >
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> RUN: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}><input type="text" name="txtRun" id="txtRun" placeholder="-- Ingrese RUN --" className="p" required /></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> Nombres: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}><input type="text" name="txtNombre" id="txtNombre" placeholder="-- Ingrese Nombres --" className="p" required /></td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Apellidos: </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}><input type="text" name="txtApellidos" id="txtApellidos" placeholder="-- Ingrese Apellidos --" className="p" required /></td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Correo: </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}><input type="email" name="emCorreo" id="emCorreo" placeholder="-- Ingrese Correo --" className="p" required /></td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Contraseña: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}><input type="password" name="passContraseña" id="passContraseña" placeholder="-- Ingrese Contraseña --" className="p" required /></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Confirmar Contraseña: </td>

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}><input type="password" name="passConfirmarContraseña" id="passConfirmarContraseña" placeholder="-- Confirme Contraseña --" className="p" required /></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}>Fecha de Nacimiento: </td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}><input type="date" name="dtFecNac" id="dtFecNac" /></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> Direccion: </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "right", paddingRight: "1.5%" }}><select name="cmbRegion" id="cmbRegion" required>
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
                                </select></td>
                                <td style={{ textAlign: "left", paddingLeft: "1.6%" }}><select name="cmbComuna" id="cmbComuna" required>
                                    <option value="">-- Seleccione Comuna --</option>
                                </select></td>

                                {/* <!-- Arreglo comuna por Region --> */}
                                {/* <script>
                                const comunasxregion = {
                                    Ayp: ["Arica", "Camarones", "Putre", "General Lagos"],
                                Trp: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
                                Ant: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
                                Ata: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
                                Cqm: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca",
                                "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
                                Vlp: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes",
                                "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas",
                                "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo","San Felipe", "Catemu",
                                "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
                                Boh: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo",
                                "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche",
                                "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla",
                                "Pumanque", "Santa Cruz"],
                                Mau: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes",
                                "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén",
                                "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
                                Ñbl: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo",
                                "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
                                Bio: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén",
                                "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete",
                                "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
                                Ara: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco",
                                "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla",
                                "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
                                Lri: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
                                Llg: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez",
                                "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue",
                                "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
                                Ais: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
                                Mga: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
                                Mtr: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida",
                                "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda",
                                "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón",
                                "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine",
                                "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
                            };
                                //capturamos el select de region y comuna
                                const regionSelect = document.getElementById("cmbRegion");
                                const comunaSelect = document.getElementById("cmbComuna");

                                regionSelect.addEventListener("change", function() {
                                const selectedRegion = this.value;
                                //limpiamos las comunas
                                comunaSelect.innerHTML = '<option value="">-- Seleccione Comuna --</option>';

                                if (selectedRegion && comunasxregion[selectedRegion]) {
                                    const comunas = comunasxregion[selectedRegion];
                                comunas.forEach(function(comuna) {
                                        const option = document.createElement("option");
                                option.value = comuna;
                                option.textContent = comuna;
                                comunaSelect.appendChild(option);
                                    });
                                }
                            });
                            </script> */}

                            </tr>
                            <tr>
                                <td colSpan={2} style={{ textAlign: "center" }}> <input type="text" name="txtDireccion" id="txtDireccion" placeholder="-- Ingrese Direccion --" className="p" /></td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "right", paddingRight: "8%", paddingTop: "10%" }}><button type="submit"> Guardar </button></td>
                                <td style={{ textAlign: "left", paddingLeft: "8%", paddingTop: "10%" }}> <button type="reset"> Limpiar </button></td>
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