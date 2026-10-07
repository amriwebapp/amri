(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: Claude en tu Slack",
intro:"Con el conector de Slack, Claude lee los canales a los que tú tienes acceso: te pone al día, encuentra decisiones y redacta mensajes. Conecta Slack una vez y elige la receta. Publicar, siempre con tu permiso.",
meta:["📕 5 recetas", "⏱ 10-15 min cada una", "💶 Gratis si tu plan de Claude incluye conectores", "🍽 Resultado: tu equipo al día sin leer cien mensajes"],
ing:"Ingredientes",
fin:"Slack está conectado. Elige qué quieres hacer.",
R:{key:"libro-slack",
ing:()=>`<li><b>Claude</b>: lee, resume y redacta.</li><li><b>Slack</b>: donde trabaja tu equipo.</li><li><b>El conector de Slack</b>: busca mensajes, canales, hilos y canvases.</li>`,
steps:[
{t:"Conecta Slack con Claude",s:"5 min · el conector",b:()=>`<ol><li>En Claude abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Pulsa <b>Explorar conectores</b>, busca «Slack» y pulsa <b>Conectar</b>.</li><li>Elige tu espacio de trabajo, revisa los permisos y pulsa <b>Permitir</b>.</li></ol>
${det("¿Qué puede ver Claude?",["Solo lo que tu usuario ya puede ver en Slack.","No ve canales privados ni mensajes directos a los que no tienes acceso.","Puedes desconectarlo cuando quieras."])}
${tip("En empresas, puede que un administrador de Slack tenga que aprobar la conexión.")}${ok("Slack aparece activado en tus conectores.")}`},
{t:"Tu cinturón de seguridad",s:"1 min · una frase",b:()=>`<p class="what">Cuando pidas a Claude que escriba algo en Slack, añade siempre: <b>«No envíes nada hasta que yo diga "publícalo"»</b>.</p>${ok("te acordarás de decirlo.")}`}
,
{x:1,t:"Reglas de privacidad",s:"Siempre · consejos",b:()=>`<ol><li>⚠️ <b>Ojo con los mensajes trampa</b>: un mensaje de Slack puede llevar instrucciones escondidas para engañar a Claude. Claude solo lee y propone; enviar o compartir lo decides tú.</li><li>No pidas a Claude que comparta fuera de Slack información confidencial del equipo.</li><li>Sigue las normas de tu empresa sobre IA y datos.</li></ol>`},
{x:1,t:"Claude dentro de Slack",s:"Opcional",b:()=>`<p class="what">Además del conector, Claude tiene una app para Slack: puedes escribirle por mensaje directo o mencionarlo en un hilo. Búscala en el directorio de apps de Slack. Puede que tu empresa tenga que aprobarla.</p>`}
]},
recetas:[
{s:"ponerse-al-dia",t:"Ponte al día en un minuto",d:"Lo importante de tus canales, lo que te piden a ti y los enlaces clave.",
meta:["⏱ 10 min", "👩‍🍳 Muy fácil", "📰 Resumen", "🍽 Resultado: sabes qué ha pasado"],
q:"¿Qué periodo?",ph:"Di cuál. Ejemplo: mis dos semanas de vacaciones",
fin:"Al día. Guarda el mensaje para el próximo lunes.",
def:"semana",empty:"[di qué periodo, arriba]",
apps:{
 semana:{n:"Esta semana",db:true,d:"los últimos 7 días"},
 vacaciones:{n:"Vuelta de vacaciones",db:true,d:"el tiempo que he estado fuera"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El resumen",s:"5 min · leer por ti",b:()=>`${cb(`Usa el conector de Slack. Mira los canales donde participo durante ${D()}. Dame:\n1) Lo importante en 5 puntos.\n2) Lo que me mencionan o me piden a mí.\n3) Enlaces a los mensajes clave.`)}${tip("Si tienes muchos canales, nómbralos: «solo #proyecto-web y #marketing».")}${ok("sabes qué ha pasado sin leerlo todo.")}`},
{t:"Lo que te toca",s:"5 min · tus tareas",b:()=>`${cb("De todo eso, hazme una lista de lo que tengo que hacer yo, con fecha si la hay.")}${ok("tienes tu lista de tareas.")}`}
]},
{s:"decisiones",t:"Encuentra qué se decidió",d:"La decisión, quién la tomó, cuándo y el enlace al mensaje.",
meta:["⏱ 10 min", "👩‍🍳 Muy fácil", "🔎 Buscar", "🍽 Resultado: la decisión con su enlace"],
q:"¿Sobre qué tema?",ph:"Di el tema. Ejemplo: el precio del plan anual",
fin:"Encontrado. Comprueba siempre el enlace antes de citarlo.",
def:"tema",empty:"[di el tema, arriba]",
apps:{
 tema:{n:"Un tema concreto",db:true,d:"un tema concreto"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Búscalo",s:"10 min · la memoria del equipo",b:()=>`${cb("Busca en Slack qué se decidió sobre [tema]. Dime la decisión, quién la tomó, la fecha y el enlace al mensaje. Si hay opiniones distintas, resúmelas.")}${ok("tienes la decisión con su enlace.")}`}
]},
{s:"anuncio",t:"Redacta y publica un anuncio",d:"Claude escribe, tú lo apruebas y él lo publica en el canal adecuado.",
meta:["⏱ 10 min", "👩‍🍳 Fácil", "📣 Publicar", "🍽 Resultado: un anuncio claro en Slack"],
q:"¿Qué anuncias?",ph:"Di qué. Ejemplo: cambio de horario de las reuniones de los lunes",
fin:"Publicado tal y como lo aprobaste.",
def:"cambio",empty:"[di qué anuncias, arriba]",
apps:{
 cambio:{n:"Un cambio",db:true,d:"un cambio que afecta al equipo"},
 logro:{n:"Un logro",db:true,d:"un logro del equipo"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El borrador",s:"5 min · escribir",b:()=>`${cb(`Redacta un mensaje para el equipo sobre ${D()}: [detalles]. Claro, amable y corto. Enséñamelo y dime en qué canal lo publicarías. No envíes nada hasta que yo diga «publícalo».`)}${ok("tienes el borrador.")}`},
{t:"Publícalo",s:"5 min · con tu OK",b:()=>`${cb("Publícalo.")}${tip("Si prefieres, cópialo y publícalo tú desde Slack.")}${ok("el mensaje está en el canal.")}`}
]},
{s:"canvas",t:"El canvas de los viernes",d:"Una página en Slack con las decisiones, lo pendiente y los hilos importantes de la semana.",
meta:["⏱ 15 min", "👩‍🍳 Fácil", "🗒 Canvas", "🍽 Resultado: un canvas para todo el equipo"],
q:"¿Para qué equipo?",ph:"Di cuál. Ejemplo: el equipo de producto",
fin:"Tu canvas está en Slack. Repítelo cada viernes.",
def:"equipo",empty:"[di qué equipo, arriba]",
apps:{
 equipo:{n:"Mi equipo",db:true,d:"mi equipo"},
 proyecto:{n:"Un proyecto",db:true,d:"un proyecto concreto"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Créalo",s:"15 min · el resumen",b:()=>`<p class="what">Un canvas es una página dentro de Slack.</p>${cb(`Crea un canvas en Slack llamado «Resumen semana [fecha]» para ${D()}, con: decisiones de la semana, tareas pendientes con responsable y enlaces a los hilos importantes. Enséñamelo antes de compartirlo.`)}${ok("el canvas está en Slack.")}`}
]},
{s:"preparar-reunion",t:"Prepara una reunión leyendo el hilo",d:"Claude lee el hilo o el canal del proyecto y te deja un resumen para la reunión.",
meta:["⏱ 10 min", "👩‍🍳 Muy fácil", "🗓 Reuniones", "🍽 Resultado: la reunión preparada"],
q:"¿Qué reunión?",ph:"Di cuál y el canal. Ejemplo: la revisión del rediseño, en #web",
fin:"Llegas preparado.",
def:"proyecto",empty:"[di qué reunión y canal, arriba]",
apps:{
 proyecto:{n:"De proyecto",db:true,d:"una reunión de seguimiento de proyecto"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"El resumen",s:"10 min · leer",b:()=>`${cb(`Prepárame ${D()}: lee [canal o hilo] de las últimas semanas y dime en qué punto está, qué está bloqueado, qué opiniones hay y 3 preguntas que debería llevar.`)}${ok("tienes la reunión preparada.")}`}
]}
]};
