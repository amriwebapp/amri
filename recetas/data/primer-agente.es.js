(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: tu primer agente, Claude trabaja por ti",
intro:"Un agente es Claude trabajando por su cuenta en una tarea de varios pasos: hace un plan, abre y crea archivos, comprueba el resultado y te pide permiso antes de lo importante. Prepara la app y tu carpeta de prueba una vez, y después elige qué tarea le das.",
meta:["📕 6 recetas", "💶 Necesita un plan de pago de Claude", "🍽 Resultado: tareas largas hechas por Claude, con tu permiso"],
ing:"Ingredientes",
fin:"Tu cocina está lista. Empieza por «Tu primera tarea» y después elige la receta que quieras.",
R:{key:"libro-agentes",
ing:()=>`<li><b>Claude con un plan de pago</b> (Pro o superior): el agente. Los modos que trabajan con tus archivos no están en el plan gratuito.</li><li><b>La app de escritorio de Claude</b>: donde trabaja. Mac o Windows.</li><li><b>Una carpeta de prueba</b>: el único sitio donde le dejarás trabajar al principio.</li>`,
steps:[
{t:"Qué es un agente",s:"la idea",b:()=>`<p class="what">Hasta ahora has usado Claude como un chat: tú preguntas, él responde y tú haces el resto. Un <b>agente</b> hace el trabajo: planifica, abre y crea archivos, comprueba si ha salido bien, corrige y te avisa al terminar.</p>
${det("La diferencia, con un ejemplo",["<b>Chat</b>: te explica cómo ordenar tu carpeta de descargas.","<b>Agente</b>: la ordena, te enseña el resultado y te pregunta antes de borrar nada."])}${ok("sabrías explicar la diferencia entre un chat y un agente.")}`},
{t:"Instala la app y crea tu carpeta",s:"la cocina",b:()=>`<ol><li>Descarga la app de escritorio desde <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a> e inicia sesión con tu cuenta de pago.</li><li>Crea en tu escritorio una carpeta llamada <b>prueba-agente</b>.</li><li>Copia dentro unos cuantos archivos para practicar. <b>Copias, no los originales.</b></li></ol>
${tip("Trabajar con copias es la mejor red de seguridad: si algo sale mal, borras la carpeta y vuelves a empezar.")}${ok("tienes la app abierta y la carpeta prueba-agente con archivos de prueba.")}`},
{t:"Los dos modos: Cowork y Code",s:"cuál usar",b:()=>`<ul><li><b>Cowork</b>: para tareas con tus documentos: ordenar, resumir, preparar informes u hojas de cálculo.</li><li><b>Code</b> (Claude Code): para crear webs, pequeños programas o automatizaciones.</li></ul>
${tip("Los nombres de los menús cambian de vez en cuando. Si no ves Cowork ni Code, actualiza la app y comprueba que tu plan es de pago.")}${ok("ves Cowork y Code en la app.")}`},
{t:"Tu mensaje de seguridad",s:"para siempre",b:()=>`<p class="what">Guarda este mensaje en una nota. Lo pegarás al principio de cada tarea, cambiando solo la primera línea.</p>${cb("Quiero que hagas esto: [la tarea].\n\nTrabaja solo dentro de la carpeta [nombre].\nAntes de hacer nada, dime tu plan en pasos cortos y espera mi OK.\nNo borres ni sobrescribas ningún archivo sin preguntarme.\nAl terminar, resúmeme qué has cambiado.")}${ok("tienes el mensaje guardado en una nota.")}`}
,
{x:1,t:"Reglas de la casa",s:"Siempre · seguridad",b:()=>`<ol><li>Dale acceso solo a la carpeta que necesita.</li><li>Nunca le escribas contraseñas ni datos bancarios.</li><li>Ojo con las trampas: una web o un documento pueden esconder instrucciones para engañar a Claude. Si hace algo que no le pediste, páralo.</li><li>Antes de publicar, enviar o borrar algo, revisa tú.</li></ol>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>No veo Cowork ni Code</b>: actualiza la app y comprueba que tu plan es de pago.</li><li><b>Se para a mitad</b>: escríbele «sigue por donde ibas».</li><li><b>Hace más de lo que pedí</b>: vuelve a empezar pidiendo el plan primero y di qué no debe tocar.</li></ol>`}
]},
recetas:[
{s:"primera-tarea",t:"Tu primera tarea: ordena una carpeta",d:"La tarea perfecta para empezar: Claude ordena archivos y tú apruebas cada paso.",
meta:["👩‍🍳 Fácil", "🗂 Cowork", "🍽 Resultado: una carpeta ordenada por Claude"],
q:"¿Qué carpeta quieres ordenar?",ph:"Di qué hay dentro. Ejemplo: las fotos del viaje mezcladas con documentos",
fin:"Tu primera tarea con un agente: objetivo, plan, permiso y revisión. Ese es el método para todo.",
def:"descargas",empty:"[di qué hay en la carpeta, arriba]",
apps:{
 descargas:{n:"Descargas",db:false,d:"ordenar los archivos de la carpeta en subcarpetas por tipo y darme una lista de lo que hay"},
 fotos:{n:"Fotos",db:false,d:"ordenar las fotos de la carpeta en subcarpetas por fecha y renombrarlas con la fecha y el lugar si aparece"},
 facturas:{n:"Facturas",db:false,d:"renombrar las facturas de la carpeta con la fecha, la empresa y el importe, y hacerme una lista"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Abre Cowork en tu carpeta",s:"empezar",b:()=>`<ol><li>En la app, abre <b>Cowork</b>.</li><li>Cuando te pregunte con qué carpeta trabajar, elige <b>prueba-agente</b>. Solo esa.</li></ol>${ok("Claude tiene acceso a tu carpeta de prueba y a nada más.")}`},
{t:"Pide el plan",s:"la orden",b:()=>`${cb(`Quiero que hagas esto: ${D()}.\n\nTrabaja solo dentro de la carpeta prueba-agente.\nAntes de hacer nada, dime tu plan en pasos cortos y espera mi OK.\nNo borres ni sobrescribas ningún archivo sin preguntarme.\nAl terminar, resúmeme qué has cambiado.`)}${ok("Claude te ha enseñado un plan que entiendes.")}`},
{t:"Déjale trabajar",s:"aprueba con calma",b:()=>`<ol><li>Si el plan te parece bien, responde <b>«OK, adelante»</b>. Si no, corrígelo.</li><li>Cuando te pida permiso (crear, mover o borrar archivos), lee qué es y decide.</li></ol>${tip("Al principio, da los permisos de uno en uno.")}${ok("Claude ha terminado y te ha dado un resumen.")}`},
{t:"Revisa y deshaz si hace falta",s:"tú decides",b:()=>`<p class="what">Abre la carpeta y mira el resultado. Si algo no te convence:</p>${cb("Deshaz el último cambio y explícame qué habías hecho y por qué.")}${ok("la carpeta está como querías.")}`}
]},
{s:"informe",t:"Un informe con tus documentos",d:"Claude lee varios documentos de una carpeta y te prepara un informe de una página.",
meta:["👩‍🍳 Fácil", "📄 Cowork", "🍽 Resultado: un informe en un documento nuevo"],
q:"¿Qué documentos?",ph:"Di qué son. Ejemplo: las actas de las reuniones del último trimestre",
fin:"Tienes tu informe. Guarda el mensaje: el mes que viene solo cambias la carpeta.",
def:"reuniones",empty:"[di qué documentos son, arriba]",
apps:{
 reuniones:{n:"Actas de reuniones",db:false,d:"leer las actas de reunión de la carpeta y hacerme un informe con las decisiones, los pendientes y quién se encarga de cada uno"},
 presupuestos:{n:"Presupuestos",db:false,d:"leer los presupuestos de la carpeta y hacerme una tabla comparativa con precio, plazo y condiciones"},
 estudios:{n:"Apuntes",db:false,d:"leer mis apuntes de la carpeta y hacerme un resumen de una página con lo más importante para el examen"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Prepara la carpeta",s:"solo lo necesario",b:()=>`<ol><li>Copia los documentos a <b>prueba-agente</b> (o a una carpeta nueva solo para esto).</li><li>Quita los que no tengan que ver.</li></ol>${tip("⚠️ Si hay datos personales de otras personas, piensa si de verdad hacen falta.")}${ok("la carpeta tiene solo los documentos del informe.")}`},
{t:"Pide el informe",s:"la orden",b:()=>`${cb(`Quiero que hagas esto: ${D()}.\n\nTrabaja solo dentro de la carpeta [nombre]. Antes de empezar, dime qué documentos has encontrado y tu plan. Guarda el informe como un documento nuevo, sin tocar los originales. Indica de qué documento sale cada dato.`)}${ok("Claude ha creado el informe en un documento nuevo.")}`},
{t:"Comprueba tres datos",s:"con lupa",b:()=>`<p class="what">Elige tres datos del informe al azar y búscalos en los documentos originales.</p>${cb("Este dato no coincide con el documento: [cuál]. Revísalo y corrige el informe.")}${ok("los datos que has comprobado coinciden.")}`}
]},
{s:"hoja",off:1,t:"Limpia y resume una hoja de cálculo",d:"Claude revisa un Excel o CSV, corrige errores evidentes y te hace un resumen con totales.",
meta:["👩‍🍳 Media", "📊 Cowork", "🍽 Resultado: tu hoja limpia y un resumen"],
q:"¿Qué hoja?",ph:"Di qué contiene. Ejemplo: los gastos del año, con fechas mal escritas",
fin:"Tu hoja está limpia y resumida. Revisa siempre los totales antes de usarlos para algo importante.",
def:"gastos",empty:"[di qué contiene la hoja, arriba]",
apps:{
 gastos:{n:"Gastos",db:false,d:"revisar la hoja de gastos, unificar el formato de fechas y categorías, y hacerme un resumen por mes y por categoría"},
 clientes:{n:"Lista de clientes",db:false,d:"revisar la lista de clientes, quitar duplicados y marcar los datos que falten"},
 ventas:{n:"Ventas",db:false,d:"revisar la hoja de ventas y hacerme un resumen con los productos que más y menos se venden"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Copia la hoja",s:"una copia",b:()=>`<ol><li>Copia la hoja a tu carpeta de prueba. <b>Una copia</b>: el original no se toca.</li></ol>${ok("la copia está en la carpeta.")}`},
{t:"Pide la revisión",s:"la orden",b:()=>`${cb(`Quiero que hagas esto: ${D()}.\n\nTrabaja solo con la copia de la carpeta [nombre]. Antes de cambiar nada, dime qué errores has encontrado y qué propones. Guarda el resultado en un archivo nuevo y el resumen aparte.`)}${ok("tienes la hoja limpia en un archivo nuevo y el resumen.")}`},
{t:"Comprueba los totales",s:"con calma",b:()=>`<p class="what">Suma tú una columna o un mes a mano y compáralo con el resumen.</p>${cb("Explícame cómo has calculado este total: [cuál]. ¿Has quitado o cambiado alguna fila?")}${ok("los totales que has comprobado cuadran.")}`}
]},
{s:"web",t:"Una web sencilla con Claude Code",d:"Claude crea una web de una página, la abre en el navegador y la mejora contigo.",
meta:["👩‍🍳 Media", "💻 Claude Code", "🍽 Resultado: una web en tu ordenador"],
q:"¿Qué web?",ph:"Descríbela. Ejemplo: una página para presentarme como fotógrafa",
fin:"Tienes tu web en tu ordenador. Para publicarla gratis, sigue el libro «Tu web online y gratis».",
def:"personal",empty:"[describe la web, arriba]",
apps:{
 personal:{n:"Presentación personal",db:false,d:"crear una web de una página para presentarme, abrirla en el navegador y mejorarla hasta que quede bien"},
 evento:{n:"Un evento",db:false,d:"crear una web de una página para un evento, con fecha, lugar y programa"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Abre Code en una carpeta nueva",s:"empezar",b:()=>`<ol><li>Crea una carpeta <b>mi-web</b>.</li><li>En la app, abre <b>Code</b> y elige esa carpeta.</li></ol>${ok("Claude Code está abierto en mi-web.")}`},
{t:"Pídela",s:"Claude trabaja",b:()=>`${cb(`Quiero que hagas esto: ${D()}.\n\nTrabaja solo en esta carpeta. Antes de empezar, dime tu plan. Hazla con HTML, CSS y JavaScript sencillos, que se vea bien en el móvil. Cuando acabes, ábrela en el navegador para que la vea.`)}${ok("ves tu web en el navegador.")}`},
{t:"Mejórala con frases cortas",s:"a tu gusto",b:()=>`<ul><li>«Pon los colores más cálidos».</li><li>«Añade una sección de contacto».</li><li>«Que el título sea más grande en el móvil».</li></ul>${tip("Un cambio cada vez. Si algo se rompe, pide «vuelve a como estaba antes».")}${ok("la web está como querías.")}`}
]},
{s:"terminal",off:1,t:"Claude Code en la terminal",d:"Instálalo, ábrelo en tu carpeta y aprende los cuatro trucos que te dan control.",
meta:["👩‍🍳 Media", "⌨️ Terminal", "🍽 Resultado: Claude Code funcionando en la terminal"],
q:"¿Qué ordenador tienes?",ph:"Mac o Windows",
fin:"Ya usas Claude Code como los programadores. Desde aquí puedes instalar el plugin de AMRI.",
def:"mac",empty:"[di qué ordenador tienes, arriba]",
apps:{
 mac:{n:"Mac",db:false,d:"Mac"},
 windows:{n:"Windows",db:true,d:"Windows"},
 otra:{n:"✏️ Otro",db:false,d:""}
},
steps:[
{t:"Instálalo",s:"una línea",b:()=>`<p class="what">La terminal es una ventana donde das órdenes al ordenador escribiendo.</p>${DB()?`<ol><li>Abre <b>PowerShell</b> y pega:</li></ol>${cb("irm https://claude.ai/install.ps1 | iex")}`:`<ol><li>Abre la app <b>Terminal</b> y pega:</li></ol>${cb("curl -fsSL https://claude.ai/install.sh | bash")}`}
${tip("¿Sale «command not found» después? Cierra la terminal del todo y vuelve a abrirla.")}${ok("la instalación ha terminado sin errores.")}`},
{t:"Ábrelo en tu carpeta",s:"empezar",b:()=>`${cb("cd Desktop/prueba-agente\nclaude")}<ol><li>Inicia sesión cuando te lo pida.</li><li>Pega tu mensaje de seguridad con una tarea pequeña.</li></ol>${ok("Claude Code te responde dentro de la terminal.")}`},
{t:"Cuatro trucos",s:"control",b:()=>`<ul><li><b>Mayús + Tab</b>: cambia de modo. En el <b>modo plan</b>, Claude solo propone y no toca nada.</li><li><b>/rewind</b> (o <b>Esc</b> dos veces): vuelve a un punto anterior y deshace los cambios.</li><li><b>/init</b>: crea un archivo CLAUDE.md con notas de tu proyecto, que leerá cada vez.</li><li><b>/help</b>: todo lo que puedes hacer.</li></ul>${ok("has probado el modo plan y sabes cómo deshacer.")}`}
]},
{s:"equipo",t:"Agentes en equipo: tu primer subagente",d:"Crea un ayudante especializado (por ejemplo, un revisor) al que Claude le pasa parte del trabajo.",
meta:["👩‍🍳 Avanzada", "🧑‍🤝‍🧑 Claude Code", "🍽 Resultado: un subagente revisor que Claude usa solo"],
q:"¿Qué ayudante quieres?",ph:"Di qué haría. Ejemplo: un corrector que revise faltas y tono antes de entregar",
fin:"Ya tienes tu primer subagente. Puedes crear más, pero empieza con pocos y muy concretos.",
def:"revisor",empty:"[di qué haría el ayudante, arriba]",
apps:{
 revisor:{n:"Revisor de textos",db:false,d:"un revisor que comprueba faltas, tono y datos inventados antes de entregar un texto"},
 investigador:{n:"Investigador",db:false,d:"un investigador que busca información y la devuelve resumida con sus fuentes"},
 otra:{n:"✏️ Otro ayudante",db:false,d:""}
},
steps:[
{t:"Qué es un subagente",s:"la idea",b:()=>`<p class="what">En tareas grandes, Claude puede repartir el trabajo entre ayudantes especializados, llamados <b>subagentes</b>. Cada uno tiene sus propias instrucciones. Antes de llegar aquí, haz varias tareas con un solo agente.</p>${ok("sabes para qué sirve un subagente.")}`},
{t:"Créalo con /agents",s:"en Claude Code",b:()=>`<ol><li>En Claude Code, escribe <code>/agents</code> y elige crear uno nuevo.</li><li>Cuando te pida describirlo, pega:</li></ol>${cb(`Quiero ${D()}. Que actúe solo cuando se lo pidan, que explique qué ha encontrado en una lista corta y que nunca cambie archivos sin permiso.`)}${ok("el subagente aparece en la lista de /agents.")}`},
{t:"Ponlo a trabajar",s:"probar",b:()=>`${cb("Escribe un texto corto de presentación para mi web y, antes de dármelo, pásaselo a mi subagente para que lo revise. Dime qué ha corregido.")}${ok("Claude ha usado el subagente y te dice qué ha cambiado.")}`}
]}
]};
