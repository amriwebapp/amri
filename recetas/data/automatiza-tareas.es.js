(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: automatiza tareas aburridas con IA",
meta:["⏱ 45 min aprox.", "👩‍🍳 Sin saber programar", "💶 0 € para empezar", "🍽 Resultado: una tarea que se hace sola"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué quieres automatizar?",
ph:"Describe la tarea con tus palabras. Ejemplo: cuando llega un pedido por correo, apuntarlo en una hoja de cálculo",
yn:"¿Necesita la IA para leer, resumir o escribir texto?",
yntip:"Si dudas, elige «Sí»: añadiremos un paso de IA. Si no hace falta, lo puedes quitar al final.",
fin:"Tu tarea ya se hace sola. Cada vez que ocurra el disparador, Zapier hará el trabajo por ti. Más abajo tienes dos extras: encadenar más pasos y qué hacer si algo falla.",
R:{key:"receta-auto",def:"correos",empty:"[describe aquí tu tarea, arriba]",
apps:{
 correos:{n:"Resumir correos",db:true,d:"cuando me llegue un correo importante, que se resuma en 3 puntos y se apunte en una hoja de cálculo",tr:"Gmail → New Email",ac:"Google Sheets → Create Spreadsheet Row"},
 facturas:{n:"Guardar facturas",db:false,d:"cuando me llegue un correo con una factura adjunta, que el archivo se guarde en una carpeta de Google Drive",tr:"Gmail → New Attachment",ac:"Google Drive → Upload File"},
 eventos:{n:"Eventos al calendario",db:true,d:"cuando un correo mencione una cita con fecha y hora, que se cree el evento en mi calendario",tr:"Gmail → New Email",ac:"Google Calendar → Create Detailed Event"},
 formulario:{n:"Formulario a hoja",db:false,d:"cuando alguien rellene mi formulario, que se apunte en una hoja y me llegue un aviso por correo",tr:"Google Forms → New Form Response",ac:"Gmail → Send Email"},
 clasificar:{n:"Clasificar mensajes",db:true,d:"cuando me llegue un correo de un cliente, que la IA lo clasifique (duda, queja, pedido) y me avise solo de los urgentes",tr:"Gmail → New Email",ac:"Gmail → Send Email"},
 otra:{n:"✏️ Otra idea",db:true,d:"",tr:"[la app donde empieza todo]",ac:"[la app donde acaba el resultado]"}
},
ing:()=>`<li><b>Zapier</b>: el robot de cocina. Hace la tarea solo, una y otra vez.</li><li><b>Tus apps</b> (Gmail, Google Drive, Sheets…): los fogones. Donde pasan las cosas.</li>${DB()?`<li><b>IA dentro de Zapier</b>: el cocinero. Lee y escribe el texto por ti.</li>`:""}<li><b>Claude</b>: el jefe de cocina. Te ayuda a planificar y a resolver dudas.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · crear cuentas",b:()=>`<p class="what">Vas a crear dos cuentas gratuitas. Con tu cuenta de Google entras en ambas.</p><h3>Pasos</h3><ol>
<li>Crea tu cuenta en <a href="https://zapier.com/sign-up" target="_blank" rel="noopener">Zapier</a> (botón «Sign up with Google»).</li>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Asegúrate de tener acceso a las apps que vas a usar (por ejemplo Gmail y Google Sheets).</li></ol>${ok("has entrado en Zapier y en Claude.")}`},
{t:"Pídele el plan a Claude",s:"5 min · diseñar la automatización",b:()=>`<p class="what">Toda automatización tiene un <b>disparador</b> (lo que pasa) y una o varias <b>acciones</b> (lo que se hace). Claude te lo dibuja paso a paso.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Quiero automatizar esto con Zapier: ${D()}.\n\nExplícame paso a paso cómo montar el Zap: qué disparador elegir, qué acciones añadir y qué campos rellenar en cada una.${DB()?" Incluye un paso de IA y escríbeme las instrucciones exactas que debo darle.":""} Explícamelo con palabras simples, como si nunca hubiera usado Zapier.`)}
${det("¿Qué significa cada palabra?",["<b>Zap</b>: el nombre que Zapier da a cada automatización.","<b>Disparador (trigger)</b>: el momento en que empieza. Ejemplo: «llega un correo».","<b>Acción (action)</b>: lo que hace Zapier. Ejemplo: «añade una fila».",...(DB()?["<b>Paso de IA</b>: un ayudante que lee o escribe texto en medio del proceso."]:[])])}
${ok("tienes un plan claro con el disparador y las acciones.")}`},
{t:"Enciende el fuego: el disparador",s:"10 min · cuándo empieza",b:()=>`<p class="what">Le dices a Zapier qué tiene que vigilar.</p><h3>Pasos</h3><ol>
<li>En Zapier pulsa <b>+ Create → Zaps</b>.</li>
<li>Pulsa <b>Trigger</b> y elige: <code>${APPS[app].tr}</code>.</li>
<li>Pulsa <b>Sign in</b> para conectar tu cuenta y autoriza.</li>
<li>Pulsa <b>Test trigger</b>: Zapier buscará un ejemplo real.</li></ol>
${tip("Para correos, crea antes una etiqueta en Gmail (por ejemplo «automatizar») y elige que solo vigile esa. Así controlas qué entra.")}${ok("el test encuentra un ejemplo real (un correo, una respuesta…).")}`},
{db:1,t:"Añade al cocinero: el paso de IA",s:"10 min · leer y escribir",b:()=>`<p class="what">La IA recibe el texto del disparador y lo transforma: resume, clasifica o extrae datos.</p><h3>Pasos</h3><ol>
<li>Pulsa <b>+</b> debajo del disparador y busca <b>AI by Zapier</b>.</li>
<li>Elige la opción para analizar o transformar texto.</li>
<li>En las instrucciones pega esto (y ajústalo a tu caso):</li></ol>${cb("Lee el siguiente texto y devuelve: 1) un resumen en 3 puntos, 2) la categoría (duda, queja, pedido u otro), 3) si es urgente (sí/no), 4) la fecha si aparece alguna. Texto: ")}
<ol start="4"><li>Al final del mensaje, pulsa el botón <b>+</b> para insertar el campo <b>Body</b> (el cuerpo del correo).</li><li>Pulsa <b>Test step</b>.</li></ol>
${det("No encuentro AI by Zapier",["Busca «ChatGPT» o «Claude» entre las apps: también sirven, aunque piden una clave propia.","Pregúntale a Claude qué opción de IA está disponible en tu plan de Zapier."])}${ok("el test te devuelve el resumen y la categoría del ejemplo.")}`},
{t:"Sirve el plato: la acción final",s:"5 min · qué se hace",b:()=>`<p class="what">Ahora dices dónde acaba el resultado.</p><h3>Pasos</h3><ol>
<li>Pulsa <b>+</b> y elige: <code>${APPS[app].ac}</code>.</li>
<li>Conecta tu cuenta si te lo pide.</li>
<li>Rellena cada campo pulsando <b>+</b> y eligiendo el dato de los pasos anteriores${DB()?" (por ejemplo, el resumen de la IA)":""}.</li>
<li>Pulsa <b>Test step</b>.</li></ol>
${tip("Si vas a usar una hoja de cálculo, créala antes con los títulos en la primera fila: Fecha, De, Resumen… Zapier los reconocerá.")}${ok("ves el resultado de prueba en su sitio (la fila, el archivo, el evento…).")}`},
{t:"Prueba antes de servir",s:"5 min · encender",b:()=>`<p class="what">Toca activarlo y probarlo con un caso real.</p><h3>Pasos</h3><ol>
<li>Pulsa <b>Publish</b> para activar el Zap.</li>
<li>Provoca el disparador de verdad (envíate un correo, rellena el formulario…).</li>
<li>Espera unos minutos y comprueba el resultado.</li>
<li>Revisa en <b>Zap history</b> que aparece en verde.</li></ol>
${tip("Los planes gratuitos tienen un límite de tareas al mes y pueden tardar unos minutos en reaccionar. Revisa los límites actuales en la página de precios de Zapier.")}${ok("el caso real llega solo a su sitio sin que hagas nada.")}`},
{x:1,t:"Encadena más pasos",s:"15 min · opcional",b:()=>`<p class="what">Cuando la primera funcione, puedes añadirle más cosas: filtros, avisos o más acciones.</p><h3>Ideas</h3><ol>
<li><b>Filter</b>: que siga solo si se cumple una condición (por ejemplo «urgente = sí»).</li>
<li><b>Aviso</b>: un correo o mensaje cuando pase algo importante.</li>
<li><b>Segunda acción</b>: además de apuntarlo, guardarlo en otra app.</li></ol>${cb("Tengo este Zap funcionando: [describe los pasos]. Quiero añadir: [tu mejora]. Dime exactamente qué pasos añadir y dónde.")}
${tip("Un cambio cada vez. Prueba el Zap después de cada mejora.")}`},
{x:1,t:"Si algo se quema",s:"Siempre · solucionar errores",b:()=>`<p class="what">No te asustes: Zapier te avisa por correo cuando algo falla y guarda el historial.</p><ol>
<li>Abre <b>Zap history</b> y pulsa sobre la ejecución en rojo.</li>
<li>Copia el mensaje de error.</li>
<li>Pídele ayuda a Claude:</li></ol>${cb("Mi Zap de Zapier da este error: [pega el error]. El Zap hace esto: [describe los pasos]. ¿Cómo lo arreglo? Explícamelo paso a paso.")}
${det("💡 Otras tareas que puedes automatizar",["Guardar en una hoja los nuevos suscriptores.","Recordatorios automáticos a clientes antes de una cita.","Publicar en redes cuando subes una entrada al blog.","Un resumen diario de tus correos importantes."])}`}
]}};
