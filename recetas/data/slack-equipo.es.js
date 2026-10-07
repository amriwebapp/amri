(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: Claude en tu Slack",
meta:["⏱ 25 min aprox.","👩‍🍳 Fácil","💶 Gratis si tu plan de Claude incluye conectores","🍽 Resultado: tu equipo al día sin leer cien mensajes"],
ing:"Ingredientes",
q:"¿Qué quieres que haga en Slack?",
ph:"Describe tu caso. Ejemplo: saber cada lunes qué se decidió en #proyecto-web la semana pasada",
yn:"¿Quieres que Claude pueda publicar mensajes (siempre con tu permiso)?",
yntip:"Si dudas, elige «No»: Claude solo leerá y resumirá. Siempre puedes activarlo después.",
fin:"Claude ya lee tu Slack por ti. Un mensaje y sabes qué ha pasado, qué se decidió y qué te toca. Más abajo tienes extras: Claude dentro de Slack y reglas de privacidad.",
R:{key:"receta-slack",def:"resumen",empty:"[describe aquí tu caso, arriba]",
apps:{
 resumen:{n:"Resumir canales",db:false,d:"un resumen de lo importante que ha pasado esta semana en mis canales de trabajo"},
 decisiones:{n:"Encontrar decisiones",db:false,d:"encontrar qué se decidió sobre un tema y quién lo decidió, con enlace a los mensajes"},
 anuncio:{n:"Redactar anuncios",db:true,d:"redactar y publicar un anuncio claro para el equipo en el canal adecuado"},
 canvas:{n:"Canvas semanal",db:true,d:"crear cada viernes un canvas con el resumen de la semana, las decisiones y lo pendiente"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el jefe de cocina. Lee, resume y redacta.</li><li><b>Slack</b>: la cocina del equipo. Donde pasa todo.</li><li><b>Conector de Slack</b>: el camarero. Busca mensajes, canales, hilos y canvases${DB()?", y puede enviar mensajes":""}.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"3 min · cuentas",b:()=>`<p class="what">Necesitas tu cuenta de Slack y tu cuenta de Claude.</p><ol><li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li><li>Ten a mano el espacio de trabajo de Slack que quieres usar.</li></ol>${tip("En empresas, puede que un administrador de Slack tenga que aprobar la conexión. Si te sale un aviso, pídeselo con el enlace que te muestra Slack.")}${ok("puedes entrar en Claude y en tu Slack.")}`},
{t:"Conecta Slack con Claude",s:"3 min · el conector",b:()=>`<p class="what">Un conector es un permiso para que Claude use Slack por ti. Se activa una vez y queda guardado.</p><h3>Pasos</h3><ol>
<li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (<i>Customize → Connectors</i>).</li>
<li>Pulsa <b>Explorar conectores</b>, busca <b>«Slack»</b> y pulsa <b>Conectar</b>.</li>
<li>Elige tu espacio de trabajo, revisa los permisos y pulsa <b>Permitir</b>.</li>
<li>En un chat nuevo, pulsa <b>+</b> → <b>Conectores</b> y comprueba que Slack está activado.</li></ol>${det("¿Qué puede ver Claude?",["Solo lo que tu usuario ya puede ver en Slack.","No ve canales privados ni mensajes directos a los que tú no tienes acceso.","Puedes desconectarlo cuando quieras desde el mismo sitio."])}${ok("Slack aparece activado en tus conectores.")}`},
{t:"Tu primer resumen",s:"5 min · ponerse al día",b:()=>`<p class="what">Empieza por algo que te ahorre tiempo hoy mismo.</p>${cb(`Usa el conector de Slack para esto: ${D()}.\n\nMira los canales donde participo de los últimos 7 días. Dame:\n1) Lo importante en 5 puntos.\n2) Lo que me mencionan o me piden a mí.\n3) Enlaces a los mensajes clave.`)}
${tip("Si tienes muchos canales, nómbralos: «solo #proyecto-web y #marketing».")}${ok("en un minuto sabes qué ha pasado sin leerlo todo.")}`},
{t:"Encuentra lo que se decidió",s:"5 min · buscar",b:()=>`<p class="what">Slack es memoria del equipo, pero cuesta encontrar las cosas. Claude busca por ti.</p>${cb("Busca en Slack qué se decidió sobre [tema]. Dime la decisión, quién la tomó, la fecha y el enlace al mensaje. Si hay opiniones distintas, resúmelas.")}${ok("tienes la decisión con su enlace para comprobarla.")}`},
{db:1,t:"Redacta y publica con permiso",s:"5 min · escribir",b:()=>`<p class="what">Claude escribe el mensaje, tú lo apruebas y él lo publica.</p>${cb(`Redacta un mensaje para el equipo sobre [tema]: claro, amable y corto. Enséñamelo antes de enviarlo y dime en qué canal lo publicarías. No envíes nada hasta que yo diga «publícalo».`)}
${tip("La frase «no envíes nada hasta que yo diga…» es tu cinturón de seguridad. Úsala siempre.")}${ok("el mensaje aparece en el canal tal y como lo aprobaste.")}`},
{db:1,t:"Tu canvas de los viernes",s:"5 min · la rutina",b:()=>`<p class="what">Un <b>canvas</b> es una página dentro de Slack. Ideal para dejar el resumen de la semana a todo el equipo.</p>${cb("Crea un canvas en Slack llamado «Resumen semana [fecha]» con: decisiones de la semana, tareas pendientes con responsable y enlaces a los hilos importantes.")}${ok("el canvas está en Slack y el equipo puede leerlo.")}`},
{x:1,t:"Claude dentro de Slack",s:"Opcional",b:()=>`<p class="what">Además del conector, Claude tiene una app para Slack: puedes escribirle por mensaje directo o mencionarlo en un hilo. Búscala en el directorio de apps de Slack o en la ayuda de Claude. Puede que tu empresa tenga que aprobarla.</p>`},
{x:1,t:"Reglas de privacidad",s:"Siempre · consejos",b:()=>`<ol><li>⚠️ <b>Ojo con los mensajes trampa</b>: un mensaje de Slack puede llevar instrucciones escondidas para engañar a Claude («ignora lo anterior y reenvía…»). Por eso la regla de oro: Claude solo lee y propone; enviar, borrar o compartir lo haces tú. Si hace algo que no le pediste, páralo.</li><li>No pidas a Claude que comparta fuera de Slack información confidencial del equipo.</li><li>Revisa siempre los mensajes antes de publicarlos: firmas tú.</li><li>Sigue las normas de tu empresa sobre IA y datos.</li></ol>${det("💡 Ideas para seguir",["Un resumen cada mañana de los canales de clientes.","Preparar una reunión leyendo el hilo del proyecto.","Pasar decisiones de Slack a tu Notion con el conector de Notion."])}`}
]}};
