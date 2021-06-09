/* prompts de información personal */
const nombre = prompt("Ingresa tu nombre: ");
const apellido = prompt("Ingresa tu apellido: ");
const carrera = prompt("Hola, " + nombre + " " + apellido + ". Ingresa tu carrera: ");

/* prompts notas html | +prompt -> transforma el prompt a number y no es necesario usar parseInt*/
const notas_1 = prompt("Ingresa el nombre de tu primer ramo: ");
const ramo1_1 = +prompt("Ingresa la Nota 1 de [" + notas_1 + "]: ");
const ramo1_2 = +prompt("Ingresa la Nota 2 de [" + notas_1 + "]: ");
const ramo1_3 = +prompt("Ingresa la Nota 3 de [" + notas_1 + "]: ");

/* prompts notas css */
const notas_2 = prompt("Ahora ingresa el nombre tu segundo ramo: ");
const ramo2_1 = +prompt("Ingresa la Nota 1 de [" + notas_2 + "]: ");
const ramo2_2 = +prompt("Ingresa la Nota 2 de [" + notas_2 + "]: ");
const ramo2_3 = +prompt("Ingresa la Nota 3 de [" + notas_2 + "]: ");

/* prompts notas JS */
const notas_3 = prompt("Ahora ingresa el nombre tu tercer ramo: ");
const ramo3_1 = +prompt("Ingresa la Nota 1 de [" + notas_3 + "]: ");
const ramo3_2 = +prompt("Ingresa la Nota 2 de [" + notas_3 + "]: ");

/* prompts nota maxima y nota aprobación */
const nota_maxima = +prompt("Ingresa la nota MÁXIMA de [" + notas_1 + "], [" + notas_2 + "], [" + notas_3 + "]: ");
const exigencia = +prompt("Ingresa la nota APROBACIÓN de [" + notas_1 + "], [" + notas_2 + "], [" + notas_3 + "]: ");

/* alert para dar mensaje de termino */
alert("Gracias. Aquí encontrarás el detalle de tus notas.");

/* Promedio HTML */
const pro_ramo1 = (ramo1_1 + ramo1_2 + ramo1_3) / (3);

/* Promedio CSS */
const pro_ramo2 = (ramo2_1 + ramo2_2 + ramo2_3) / (3);

/* nota necesaria para aprobar JS */
const nota_aprobacion = (exigencia * 3) - (ramo3_1 + ramo3_2);
let mensaje_aprobacion;

/* mensaje nota de aprobacion */
if ((exigencia * 3) - (ramo3_1 + ramo3_2) < 0) {
    mensaje_aprobacion = "El ramo [" + notas_3.bold() + "] se aprueba con nota " + exigencia.toFixed(1).bold() + ", pero con tus calificaciones actuales aprobarás [" + notas_3.bold() + "] sin importar tu calificación en la Nota 3.";
} else if (((exigencia * 3) - ramo3_1 - ramo3_2) > nota_maxima) {
    mensaje_aprobacion = "El ramo [" + notas_3.bold() + "] se aprueba con nota " + exigencia.toFixed(1).bold() + ", pero sin importar tu calificación en la Nota 3, no podrás aprobar [" + notas_3.bold() + "].";
} else {
    mensaje_aprobacion = "Para aprobar el ramo [" + notas_3.bold() + "] con nota " + exigencia.toFixed(1).bold() + ", necesitas obtener un " + nota_aprobacion.toFixed(1).bold() + " en la Nota 3.";
}

document.write("<header class='ps-3'>");
document.write("<div class='container-fluid my-2'>");
document.write("<div class='row'>");
document.write("<div class='col-6 fw-bold'><h1>Notas finales</h1></div>");
document.write("<div class='col-6 text-end'><img src='assets/img/logo1.png' alt='logo_desafío'></div>");
document.write("</div>");
document.write("</div>");
document.write("</header>");

/* Información del estudiante - nombre */
document.write("<section class='pb-3 ps-3'>");
document.write("<div class='container-fluid my-2'>");
document.write("<div class='row'>");
document.write("<div class='col-2 fw-bold'>Nombre:</div>");
document.write("<div class='col-10'>" + nombre + " " + apellido + "</div>");
document.write("</div>");
document.write("</div>");

/* Información del estudiante - carrera*/
document.write("<div class='container-fluid my-2'>");
document.write("<div class='row'>");
document.write("<div class='col-2 fw-bold'>Carrera:</div>");
document.write("<div class='col-10'>" + carrera + " </div>");
document.write("</div>");
document.write("</div>");
document.write("</section>");


/* inicio de la tabla */
document.write("<section class='px-4'>");
document.write("<table class='table fw-bold'>");

/* head de la tabla */
document.write("<thead class='table-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");

/* body de la tabla */
document.write("<tbody>");

/* primera fila */
document.write("<tr class='table-active'>");
document.write("<th scope='row'>" + notas_1 + "</th>");
document.write("<td>" + ramo1_1.toFixed(1) + "</td>");
document.write("<td>" + ramo1_2.toFixed(1) + "</td>");
document.write("<td>" + ramo1_3.toFixed(1) + "</td>");
document.write("<td>" + pro_ramo1.toFixed(2) + "</td>");
document.write("</tr>");

/* segunda fila */
document.write("<tr>");
document.write("<th scope='row'>" + notas_2 + "</th>");
document.write("<td>" + ramo2_1.toFixed(1) + "</td>");
document.write("<td>" + ramo2_2.toFixed(1) + "</td>");
document.write("<td>" + ramo2_3.toFixed(1) + "</td>");
document.write("<td>" + pro_ramo2.toFixed(2) + "</td>");
document.write("</tr>");

/* tercera fila */
document.write("<tr class='table-active'>");
document.write("<th scope='row'>" + notas_3 + "</th>");
document.write("<td>" + ramo3_1.toFixed(1) + "</td>");
document.write("<td>" + ramo3_2.toFixed(1) + "</td>");
document.write("<td> - </td>");
document.write("<td> - </td>");
document.write("</tr>");

/* fin de la tabla */
document.write("</tbody>");
document.write("</table>");
document.write("</section>");

/* información ultima nota JS */
document.write("<div class='ps-4 container-fluid'><span>" + mensaje_aprobacion + "</span></div>");