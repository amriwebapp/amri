(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: automatiza tareas aburridas con IA",
intro:"Con Zapier, una tarea se hace sola cada vez que pasa algo: llega un correo, alguien rellena un formulario… Claude te ayuda a montar cada automatización paso a paso. Prepara tu cuenta una vez y elige qué automatizar.",
meta:["📕 5 recetas", "⏱ 25-40 min cada una", "💶 Gratis (con los límites del plan gratuito de Zapier)", "🍽 Resultado: tareas que se hacen solas"],
ing:"Ingredientes (todos gratuitos)",
fin:"Tu cocina está lista. Elige la primera tarea que quieres quitarte de encima.",
R:{key:"libro-auto",
ing:()=>`<li><b>Zapier</b>: el robot de cocina. Hace la tarea solo, una y otra vez.</li><li><b>Tus apps</b> (Gmail, Google Drive, Sheets, Calendar…): donde pasan las cosas.</li><li><b>Claude</b>: el jefe de cocina. Te ayuda a planificar y a resolver dudas.</li>`,
steps:[
{t:"Crea tus cuentas",s:"5 min · gratis",b:()=>`<ol><li>Crea tu cuenta en <a href="https://zapier.com" target="_blank" rel="noopener">Zapier</a> (botón «Sign up with Google»).</li><li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("has entrado en Zapier y en Claude.")}`},
{t:"Cómo funciona una automatización",s:"3 min · la idea",b:()=>`<ul><li><b>Zap</b>: el nombre que Zapier da a cada automatización.</li><li><b>Disparador</b> (<i>trigger</i>): el momento en que empieza. Ejemplo: «llega un correo».</li><li><b>Acción</b> (<i>action</i>): lo que hace Zapier. Ejemplo: «añade una fila».</li><li><b>Paso de IA</b>: un ayudante que lee o escribe texto en medio.</li></ul>${ok("sabrías explicar qué es un disparador y una acción.")}`},
{t:"Tu ayudante para montar Zaps",s:"3 min · un proyecto",b:()=>`<ol><li>En Claude crea un proyecto <b>Mis automatizaciones</b>.</li><li>En sus instrucciones, pega:</li></ol>${cb("Me ayudas a montar automatizaciones en Zapier aunque nunca lo haya usado. Explícame cada paso con palabras simples: qué disparador elegir, qué acciones añadir y qué campos rellenar. Si algo falla, pídeme el mensaje de error.")}${ok("tienes el proyecto.")}`}
,
{x:1,t:"Si algo se quema",s:"Siempre · solucionar errores",b:()=>`<p class="what">Zapier te avisa por correo cuando algo falla y guarda el historial.</p><ol><li>Abre <b>Zap history</b> y pulsa la ejecución en rojo.</li><li>Copia el error y pégalo en Claude:</li></ol>${cb("Mi Zap da este error: [pega el error]. El Zap hace esto: [describe los pasos]. ¿Cómo lo arreglo? Explícamelo paso a paso.")}`},
{x:1,t:"Encadena más pasos",s:"Opcional",b:()=>`<ul><li><b>Filter</b>: que siga solo si se cumple una condición («urgente = sí»).</li><li><b>Aviso</b>: un correo o mensaje cuando pase algo importante.</li><li><b>Segunda acción</b>: además de apuntarlo, guardarlo en otra app.</li></ul>${tip("Un cambio cada vez. Prueba el Zap después de cada mejora.")}`},
{x:1,t:"Límites del plan gratuito",s:"Siempre · tenlo en cuenta",b:()=>`<p class="what">Los planes gratuitos de Zapier tienen un límite de tareas al mes y pueden tardar unos minutos en reaccionar. Revisa los límites actuales en su página de precios.</p>`}
]},
recetas:[
{s:"resumir-correos",t:"Correos importantes resumidos en una hoja",d:"Cuando llega un correo con una etiqueta, la IA lo resume en 3 puntos y lo apunta en Google Sheets.",
meta:["⏱ 40 min", "👩‍🍳 Media", "📧 Gmail + IA + Sheets", "🍽 Resultado: una hoja que se rellena sola"],
q:"¿Qué correos?",ph:"Di cuáles. Ejemplo: los de clientes que piden presupuesto",
fin:"Cada correo con la etiqueta se resume y se apunta solo.",
def:"clientes",empty:"[di qué correos, arriba]",
apps:{
 clientes:{n:"De clientes",db:true,d:"los correos de clientes"},
 proveedores:{n:"De proveedores",db:true,d:"los correos de proveedores"},
 otra:{n:"✏️ Otros",db:true,d:""}
},
steps:[
{t:"Prepara la etiqueta y la hoja",s:"5 min · antes",b:()=>`<ol><li>En Gmail, crea una etiqueta llamada <b>automatizar</b> y pónsela a un correo de ejemplo de ${D()}.</li><li>En Google Sheets, crea una hoja con estos títulos en la primera fila: <b>Fecha, De, Asunto, Resumen</b>.</li></ol>${ok("tienes la etiqueta con un correo de ejemplo y la hoja.")}`},
{t:"El disparador",s:"10 min · cuándo empieza",b:()=>`<ol><li>En Zapier pulsa <b>+ Create → Zaps</b>.</li><li>Pulsa <b>Trigger</b> y elige <b>Gmail → New Labeled Email</b> (o «New Email» con la etiqueta).</li><li>Conecta tu cuenta y elige la etiqueta <b>automatizar</b>.</li><li>Pulsa <b>Test trigger</b>.</li></ol>${ok("el test encuentra tu correo de ejemplo.")}`},
{t:"El paso de IA",s:"10 min · resumir",b:()=>`<ol><li>Pulsa <b>+</b> y busca <b>AI by Zapier</b>. Elige la opción de analizar o transformar texto.</li><li>En las instrucciones pega esto y, al final, inserta con <b>+</b> el campo <b>Body</b> del correo:</li></ol>${cb("Resume este correo en 3 puntos cortos, en español. Si aparece una fecha o un importe, inclúyelo. Correo: ")}
${det("No encuentro AI by Zapier",["Busca «Claude» o «ChatGPT» entre las apps: también sirven, aunque piden una clave propia.","Pregunta en tu proyecto de Claude qué opción de IA está disponible en tu plan."])}${ok("el test devuelve el resumen del ejemplo.")}`},
{t:"La acción y la prueba",s:"15 min · encender",b:()=>`<ol><li>Pulsa <b>+</b> y elige <b>Google Sheets → Create Spreadsheet Row</b>.</li><li>Elige tu hoja y rellena cada columna con <b>+</b>: fecha, remitente, asunto y el resumen de la IA.</li><li>Pulsa <b>Test step</b> y luego <b>Publish</b>.</li><li>Etiqueta un correo nuevo y espera unos minutos.</li></ol>${ok("aparece una fila nueva con el resumen, sin que hagas nada.")}`}
]},
{s:"facturas-drive",t:"Facturas adjuntas guardadas en Drive",d:"Cuando llega un correo con una factura adjunta, el archivo se guarda solo en una carpeta.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "🧾 Gmail + Drive", "🍽 Resultado: tus facturas en una carpeta, solas"],
q:"¿Qué facturas?",ph:"Di de quién. Ejemplo: las de mis proveedores de material",
fin:"Tus facturas se guardan solas. Revisa la carpeta a fin de mes.",
def:"todas",empty:"[di de quién, arriba]",
apps:{
 todas:{n:"Todas las facturas",db:true,d:"todas las facturas que llegan con la etiqueta"},
 proveedor:{n:"De un proveedor",db:true,d:"las facturas de un proveedor concreto"},
 otra:{n:"✏️ Otras",db:true,d:""}
},
steps:[
{t:"Prepara la etiqueta y la carpeta",s:"5 min · antes",b:()=>`<ol><li>En Gmail, crea un filtro que ponga la etiqueta <b>facturas</b> a ${D()} (pide ayuda a Claude si no sabes crear filtros).</li><li>En Google Drive, crea una carpeta <b>Facturas</b>.</li></ol>${ok("tienes la etiqueta y la carpeta.")}`},
{t:"El disparador",s:"10 min · cuándo",b:()=>`<ol><li>En Zapier crea un Zap con el disparador <b>Gmail → New Attachment</b>.</li><li>Elige la etiqueta <b>facturas</b> y pulsa <b>Test trigger</b>.</li></ol>${ok("el test encuentra un adjunto de ejemplo.")}`},
{t:"La acción y la prueba",s:"10 min · encender",b:()=>`<ol><li>Añade <b>Google Drive → Upload File</b>, elige la carpeta <b>Facturas</b> y, en el archivo, el adjunto del paso anterior.</li><li>Pulsa <b>Test step</b> y luego <b>Publish</b>.</li></ol>${ok("la factura de prueba aparece en la carpeta.")}`}
]},
{s:"citas-calendario",t:"Citas de los correos al calendario",d:"Cuando un correo menciona una cita con fecha y hora, la IA la extrae y crea el evento.",
meta:["⏱ 35 min", "👩‍🍳 Media", "📅 Gmail + IA + Calendar", "🍽 Resultado: eventos creados solos"],
q:"¿Qué citas?",ph:"Di cuáles. Ejemplo: las reservas que me mandan los clientes por correo",
fin:"Las citas llegan solas a tu calendario. Revísalas de vez en cuando: la IA puede equivocarse con una fecha.",
def:"clientes",empty:"[di qué citas, arriba]",
apps:{
 clientes:{n:"De clientes",db:true,d:"las citas que me piden los clientes"},
 medicos:{n:"Médicos y gestiones",db:true,d:"las confirmaciones de citas médicas y gestiones"},
 otra:{n:"✏️ Otras",db:true,d:""}
},
steps:[
{t:"El disparador",s:"10 min · cuándo",b:()=>`<ol><li>Pon la etiqueta <b>citas</b> a un correo de ejemplo de ${D()}.</li><li>En Zapier, disparador <b>Gmail → New Labeled Email</b> con esa etiqueta. Pulsa <b>Test trigger</b>.</li></ol>${ok("el test encuentra tu correo.")}`},
{t:"Que la IA saque la fecha",s:"10 min · leer",b:()=>`<ol><li>Añade <b>AI by Zapier</b> y pega estas instrucciones, insertando el <b>Body</b> al final:</li></ol>${cb("Del siguiente correo, extrae: título de la cita, fecha de inicio (formato AAAA-MM-DD HH:MM), duración en minutos y lugar. Si falta algo, deja el campo vacío. Correo: ")}${ok("el test devuelve los datos de la cita.")}`},
{t:"Crea el evento",s:"15 min · encender",b:()=>`<ol><li>Añade <b>Google Calendar → Create Detailed Event</b> y rellena título, inicio y lugar con los datos de la IA.</li><li>Pulsa <b>Test step</b> y luego <b>Publish</b>.</li></ol>${tip("Añade un <b>Filter</b> antes del evento: que siga solo si la IA ha encontrado fecha.")}${ok("el evento de prueba aparece en tu calendario.")}`}
]},
{s:"formulario-hoja",t:"Formulario a hoja, con aviso",d:"Cuando alguien rellena tu formulario, se apunta en una hoja y te llega un correo.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "📋 Forms + Sheets + Gmail", "🍽 Resultado: respuestas ordenadas y aviso al momento"],
q:"¿Qué formulario?",ph:"Di cuál. Ejemplo: el de inscripción a mi taller",
fin:"Cada respuesta se apunta sola y te avisa.",
def:"inscripcion",empty:"[di qué formulario, arriba]",
apps:{
 inscripcion:{n:"Inscripciones",db:true,d:"mi formulario de inscripción"},
 contacto:{n:"Contacto",db:true,d:"mi formulario de contacto"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El formulario",s:"5 min · Google Forms",b:()=>`<ol><li>Crea ${D()} en <a href="https://forms.google.com" target="_blank" rel="noopener">Google Forms</a> (pide a Claude las preguntas si no las tienes).</li><li>Respóndelo una vez tú para tener un ejemplo.</li></ol>${ok("tienes el formulario con una respuesta de prueba.")}`},
{t:"Disparador y hoja",s:"10 min · apuntar",b:()=>`<ol><li>En Zapier, disparador <b>Google Forms → New Form Response</b>. Test.</li><li>Acción <b>Google Sheets → Create Spreadsheet Row</b> con cada respuesta en su columna.</li></ol>${ok("la respuesta de prueba aparece en la hoja.")}`},
{t:"El aviso",s:"10 min · enterarte",b:()=>`<ol><li>Añade <b>Gmail → Send Email</b> a tu propio correo, con el nombre y la respuesta en el texto.</li><li>Pulsa <b>Publish</b> y rellena el formulario otra vez.</li></ol>${ok("te llega el correo de aviso y la fila nueva.")}`}
]},
{s:"clasificar",t:"Clasifica mensajes y avísame de lo urgente",d:"La IA lee cada correo de cliente, lo clasifica (duda, queja, pedido) y solo te avisa de lo urgente.",
meta:["⏱ 40 min", "👩‍🍳 Media", "⚖️ IA + filtro", "🍽 Resultado: solo te enteras de lo urgente"],
q:"¿Qué mensajes?",ph:"Di cuáles. Ejemplo: los correos que llegan a info@ de mi tienda",
fin:"Ya solo te llegan avisos de lo urgente. Para clasificar a gran escala, mira el libro de Jev.",
def:"clientes",empty:"[di qué mensajes, arriba]",
apps:{
 clientes:{n:"Correos de clientes",db:true,d:"los correos de clientes"},
 soporte:{n:"Soporte",db:true,d:"los correos de soporte"},
 otra:{n:"✏️ Otros",db:true,d:""}
},
steps:[
{t:"El disparador",s:"10 min · cuándo",b:()=>`<ol><li>Etiqueta como <b>clasificar</b> ${D()} (con un filtro de Gmail).</li><li>En Zapier, disparador <b>Gmail → New Labeled Email</b>. Test.</li></ol>${ok("el test encuentra un correo de ejemplo.")}`},
{t:"Que la IA clasifique",s:"10 min · decidir",b:()=>`<ol><li>Añade <b>AI by Zapier</b> con estas instrucciones (inserta el <b>Body</b> al final):</li></ol>${cb("Lee el correo y responde solo con: categoría (duda, queja, pedido u otro), urgente (sí/no) y un resumen de una frase. Es urgente si hay un problema con un pedido pagado o si el cliente está muy enfadado. Correo: ")}${ok("el test devuelve la categoría y si es urgente.")}`},
{t:"Filtro y aviso",s:"20 min · solo lo urgente",b:()=>`<ol><li>Añade <b>Filter</b>: que siga solo si «urgente» contiene «sí».</li><li>Añade <b>Gmail → Send Email</b> a ti con la categoría y el resumen.</li><li>Pulsa <b>Publish</b> y pruébalo con un correo urgente y otro que no lo sea.</li></ol>${ok("solo te llega el aviso del urgente.")}`}
]}
]};
