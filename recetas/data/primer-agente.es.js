(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: tu primer agente, Claude trabaja por ti",
meta:["⏱ 40 min aprox.", "👩‍🍳 Sin saber programar", "💶 Necesita un plan de pago de Claude", "🍽 Resultado: una tarea hecha por Claude de principio a fin"],
ing:"Ingredientes",
q:"¿Qué tarea quieres que haga por ti?",
ph:"Descríbela con tus palabras. Ejemplo: renombrar las fotos del viaje con la fecha y el lugar",
yn:"¿Te animas a probar también la terminal?",
yntip:"Si dudas, elige «No»: con la app de escritorio no la necesitas. Con «Sí» aprenderás a usar Claude Code desde la terminal, como hacen los programadores.",
fin:"Has trabajado con tu primer agente: le diste un objetivo, aprobaste su plan y revisaste el resultado. Ese es el método para cualquier tarea, pequeña o grande.",
R:{key:"receta-agente",def:"carpeta",empty:"[describe aquí la tarea, arriba]",
apps:{
 carpeta:{n:"Ordenar una carpeta",db:false,d:"ordenar los archivos de la carpeta en subcarpetas por tipo y darme una lista de lo que hay"},
 informe:{n:"Un informe con mis documentos",db:false,d:"leer los documentos de la carpeta y prepararme un informe de una página con lo más importante"},
 tabla:{n:"Limpiar una hoja de cálculo",db:false,d:"revisar la hoja de cálculo de la carpeta, corregir errores evidentes y hacerme un resumen con totales"},
 web:{n:"Una web sencilla",db:true,d:"crear una web de una página para presentarme, abrirla en el navegador y mejorarla hasta que quede bien"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude con un plan de pago</b> (Pro o superior): el agente. Los modos que trabajan con tus archivos no están en el plan gratuito.</li><li><b>La app de escritorio de Claude</b>: donde trabaja. Mac o Windows.</li><li><b>Una carpeta de prueba</b>: el único sitio donde le dejarás trabajar.</li>${DB()?`<li><b>La terminal</b>: una ventana donde se dan órdenes al ordenador escribiendo. Ya viene en tu ordenador.</li>`:""}`,
steps:[
{t:"Qué es un agente",s:"3 min · la idea",b:()=>`<p class="what">Hasta ahora has usado Claude como un chat: tú preguntas, él responde y tú haces el resto. Un <b>agente</b> es Claude trabajando por su cuenta en una tarea de varios pasos: hace un plan, abre y crea archivos, comprueba si ha salido bien, corrige y te avisa al terminar.</p>
${det("La diferencia, con un ejemplo",["<b>Chat</b>: te explica cómo ordenar tu carpeta de descargas.","<b>Agente</b>: la ordena, te enseña el resultado y te pregunta antes de borrar nada."])}
${tip("Tú pones el objetivo y los límites. Claude hace el trabajo. Lo importante siempre lo apruebas tú.")}${ok("sabrías explicar la diferencia entre un chat y un agente.")}`},
{t:"Prepara la cocina",s:"10 min · app y carpeta",b:()=>`<h3>Pasos</h3><ol>
<li>Descarga la app de escritorio desde <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a> e inicia sesión.</li>
<li>Crea en tu escritorio una carpeta llamada <b>prueba-agente</b>.</li>
<li>Copia dentro unos cuantos archivos para la tarea. <b>Copias, no los originales.</b></li></ol>
${tip("Trabajar con copias la primera vez es la mejor red de seguridad: si algo sale mal, borras la carpeta y vuelves a empezar.")}${ok("tienes la app abierta y la carpeta prueba-agente con archivos de prueba.")}`},
{t:"Abre el modo agente",s:"3 min · Cowork o Code",b:()=>`<p class="what">En la app de escritorio, Claude puede trabajar como agente de dos formas:</p><ul>
<li><b>Cowork</b>: para tareas con tus documentos: ordenar, resumir, preparar informes u hojas de cálculo.</li>
<li><b>Code</b> (Claude Code): para crear webs, pequeños programas o automatizaciones.</li></ul>
<h3>Pasos</h3><ol><li>Elige el que encaje con tu tarea.</li><li>Cuando te pregunte con qué carpeta trabajar, elige <b>prueba-agente</b>. Solo esa.</li></ol>
${tip("Los nombres de los menús cambian de vez en cuando. Si no ves Cowork ni Code, actualiza la app y comprueba que tu plan es de pago.")}${ok("Claude tiene acceso a tu carpeta de prueba, y a nada más.")}`},
{t:"Pídele un plan primero",s:"5 min · la orden",b:()=>`<h3>Copia este mensaje y pégalo</h3>${cb(`Quiero que hagas esto: ${D()}.\n\nTrabaja solo dentro de la carpeta prueba-agente.\nAntes de hacer nada, dime tu plan en pasos cortos y espera mi OK.\nNo borres ni sobrescribas ningún archivo sin preguntarme.\nAl terminar, resúmeme qué has cambiado.`)}
${det("¿Por qué cada parte?",["«Solo dentro de la carpeta»: decides dónde puede tocar.","«Dime tu plan»: ves qué va a hacer antes de que lo haga, y puedes corregirlo.","«No borres sin preguntarme»: lo que no tiene vuelta atrás lo decides tú."])}
${ok("Claude te ha enseñado un plan que entiendes.")}`},
{t:"Déjale trabajar",s:"10 min · aprueba con calma",b:()=>`<h3>Pasos</h3><ol>
<li>Si el plan te parece bien, responde <b>«OK, adelante»</b>. Si no, corrígelo con tus palabras.</li>
<li>Mientras trabaja, verás lo que va haciendo.</li>
<li>Cuando te pida permiso (crear, mover o borrar archivos, entrar en internet), lee qué es y decide.</li></ol>
${tip("Al principio, da los permisos de uno en uno. Cuando le cojas confianza, podrás darle más libertad.")}
${tip("Si hace algo que no querías, pulsa el botón de parar y explícale qué esperabas.")}${ok("Claude ha terminado y te ha dado un resumen de lo que ha hecho.")}`},
{t:"Revisa y deshaz si hace falta",s:"5 min · tú decides",b:()=>`<p class="what">Abre la carpeta y comprueba el resultado con tus ojos. Si algo no te convence, pídeselo:</p>${cb("Deshaz el último cambio y explícame qué habías hecho y por qué.")}
${tip("Para la próxima vez: guarda el mensaje del paso 4 en una nota. Te servirá para cualquier tarea, cambiando solo la primera línea.")}${ok("el resultado está como querías, o has deshecho lo que no te gustaba.")}`},
{db:1,t:"Claude Code en la terminal",s:"10 min · instalarlo",b:()=>`<p class="what">La terminal es una ventana donde das órdenes al ordenador escribiendo. Claude Code funciona ahí igual que en la app.</p><h3>Pasos</h3><ol>
<li><b>Mac:</b> abre la app <b>Terminal</b> y pega:</li></ol>${cb("curl -fsSL https://claude.ai/install.sh | bash")}
<ol start="2"><li><b>Windows:</b> abre <b>PowerShell</b> y pega:</li></ol>${cb("irm https://claude.ai/install.ps1 | iex")}
<ol start="3"><li>Cierra la ventana, ábrela de nuevo y entra en tu carpeta de prueba:</li></ol>${cb("cd Desktop/prueba-agente\nclaude")}
<ol start="4"><li>Inicia sesión cuando te lo pida y pega el mismo mensaje del paso 4.</li></ol>
${tip("¿Sale «command not found»? Cierra la terminal del todo y vuelve a abrirla.")}${ok("Claude Code te responde dentro de la terminal.")}`},
{db:1,t:"Cuatro trucos de la terminal",s:"5 min · con seguridad",b:()=>`<ul>
<li><b>Mayús + Tab</b>: cambia de modo. En el <b>modo plan</b>, Claude solo propone y no toca nada.</li>
<li><b>/rewind</b> (o pulsa <b>Esc</b> dos veces): vuelve a un punto anterior y deshace los cambios.</li>
<li><b>/init</b>: Claude crea un archivo CLAUDE.md con notas de tu proyecto, que leerá cada vez que vuelvas.</li>
<li><b>/help</b>: todo lo que puedes hacer.</li></ul>
${ok("has probado el modo plan y sabes cómo deshacer.")}`}
,
{x:1,t:"Agentes que trabajan en equipo",s:"Opcional · siguiente nivel",b:()=>`<p class="what">En tareas grandes, Claude puede repartir el trabajo entre varios ayudantes, llamados <b>subagentes</b>: uno investiga, otro escribe y otro revisa. En Claude Code puedes crear los tuyos con <b>/agents</b>.</p>
${tip("Antes de llegar aquí, haz varias tareas pequeñas con un solo agente. Así sabrás qué pedir y cómo revisar.")}`},
{x:1,t:"Recetas enteras con un comando",s:"Opcional · el plugin de AMRI",b:()=>`<p class="what">Con Claude Code puedes instalar el <a href="../plugin.html">plugin de AMRI</a>. Cada receta de esta web se convierte en un comando, y Claude la hace contigo de principio a fin.</p>${cb("/amri:chef una web para mi estudio de yoga con reservas")}`},
{x:1,t:"Reglas de la casa",s:"Siempre · seguridad",b:()=>`<ul>
<li>Dale acceso solo a la carpeta que necesita.</li>
<li>Nunca le escribas contraseñas ni datos bancarios.</li>
<li>Ojo con las trampas: una web o un documento pueden esconder instrucciones para engañar a Claude. Si hace algo que no le pediste, páralo.</li>
<li>Antes de publicar, enviar o borrar algo, revisa tú.</li></ul>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ul>
<li><b>No veo Cowork ni Code</b>: actualiza la app y comprueba que tu plan es de pago.</li>
<li><b>Se para a mitad</b>: escríbele «sigue por donde ibas».</li>
<li><b>Hace más de lo que pedí</b>: vuelve a empezar pidiendo el plan primero y di qué no debe tocar.</li></ul>`}
]}};
