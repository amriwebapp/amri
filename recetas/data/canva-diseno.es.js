(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: diseña en Canva hablando con Claude",
intro:"Con el conector de Canva, Claude crea diseños directamente en tu cuenta: posts, presentaciones, carteles, currículums y tarjetas, con tu marca. Conecta Canva una vez y elige qué diseñar.",
meta:["📕 6 recetas", "⏱ 15-25 min cada una", "💶 Gratis si tu plan de Claude incluye conectores", "🍽 Resultado: diseños editables en tu Canva"],
ing:"Ingredientes",
fin:"Canva está conectado y Claude conoce tu marca. Elige qué quieres diseñar.",
R:{key:"libro-canva",
ing:()=>`<li><b>Claude</b>: el diseñador jefe. Decide textos, estructura y estilo.</li><li><b>Canva</b>: el taller. Donde se crean y guardan los diseños. Plan gratuito.</li><li><b>El conector de Canva</b>: el aprendiz. Crea, busca y exporta diseños en tu cuenta.</li>`,
steps:[
{t:"Crea tus cuentas",s:"3 min · cuentas",b:()=>`<ol><li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li><li>Crea tu cuenta gratuita en <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a> si no la tienes.</li></ol>${ok("puedes entrar en las dos.")}`},
{t:"Conecta Canva con Claude",s:"3 min · el conector",b:()=>`<ol><li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Pulsa <b>Explorar conectores</b>, busca «Canva» y pulsa <b>Conectar</b>.</li><li>Inicia sesión en Canva y pulsa <b>Permitir</b>.</li><li>En un chat nuevo, pulsa <b>+ → Conectores</b> y comprueba que Canva está activado.</li></ol>
${tip("Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la ayuda de Claude.")}${ok("Canva aparece activado.")}`},
{t:"Presenta tu marca",s:"5 min · el sello",b:()=>`<ol><li>En Canva, pulsa <b>Subidos → Subir archivos</b> y sube tu logo (mejor PNG sin fondo).</li><li>En Claude, crea un proyecto <b>Mis diseños</b> y pega en sus instrucciones:</li></ol>${cb("Diseño en Canva a través del conector.\nMi marca: colores [#D2561F y #FBF6EE], tipografía [la que uses], tono [cercano y tranquilo].\nMi logo está subido en Canva con el nombre [nombre del archivo].\nAntes de diseñar, propón siempre los textos y espera mi OK.")}
${tip("¿No tienes logo ni colores? Mira el libro <a href=\"logo-ia.html\">Diseña tu logo con IA</a>, o pide a Claude una paleta de 3 colores.")}${ok("tienes el proyecto «Mis diseños» con tu marca.")}`}
,
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude dibuja en vez de usar Canva</b>: empieza el mensaje con «Usa el conector de Canva».</li><li><b>No encuentra tu logo</b>: dile el nombre exacto del archivo subido.</li><li>Algunas funciones son de <b>Canva Pro</b> (kit de marca, quitar fondos); el resto funciona con el plan gratuito.</li></ol>`}
]},
recetas:[
{s:"posts",t:"Posts para Instagram",d:"Tres posts con tu marca, listos para publicar o retocar.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "📱 Redes", "🍽 Resultado: 3 posts en tu Canva"],
q:"¿Qué quieres anunciar?",ph:"Di qué. Ejemplo: mi nuevo pan de centeno, que sale los viernes",
fin:"Tus posts están en Canva. Para el texto que acompaña a cada post, mira el libro de redes sociales.",
def:"producto",empty:"[di qué quieres anunciar, arriba]",
apps:{
 producto:{n:"Un producto nuevo",db:true,d:"tres posts cuadrados para Instagram que anuncien mi nuevo producto, con un titular corto y mucho aire"},
 consejos:{n:"Consejos",db:true,d:"tres posts con un consejo útil de mi sector cada uno"},
 oferta:{n:"Una oferta",db:true,d:"tres posts para una oferta de tiempo limitado"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"Primero los textos",s:"5 min · lo que dice",b:()=>`${cb(`Usa Canva para crear ${D()}. Antes de diseñar, propón los textos de cada post y espera mi OK.`)}${ok("has aprobado los textos.")}`},
{t:"El diseño",s:"10 min · Claude diseña",b:()=>`${cb("OK. Crea los diseños con mi marca y dame los enlaces para abrirlos en Canva.")}${ok("tienes los enlaces a 3 diseños nuevos en tu Canva.")}`},
{t:"Retoca y descarga",s:"5 min · tu toque",b:()=>`<ol><li>Abre los enlaces y cambia lo que quieras a mano.</li><li>O pídeselo a Claude, un cambio cada vez: «haz el titular más grande en el segundo».</li><li>Descarga en <b>PNG</b> desde <b>Compartir → Descargar</b>.</li></ol>${ok("tienes los 3 posts descargados.")}`}
]},
{s:"presentacion",t:"Una presentación",d:"Diapositivas claras y visuales para explicar tu proyecto o tu clase.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "📊 Presentación", "🍽 Resultado: una presentación en tu Canva"],
q:"¿Para qué es?",ph:"Di para qué y para quién. Ejemplo: presentar mi servicio a una empresa",
fin:"Tu presentación está en Canva. Ensáyala en voz alta una vez con el cronómetro.",
def:"clientes",empty:"[di para qué y para quién, arriba]",
apps:{
 clientes:{n:"Para clientes",db:true,d:"una presentación de 8 diapositivas, clara y visual, para explicar mi proyecto a posibles clientes"},
 clase:{n:"Para una clase",db:true,d:"una presentación de 10 diapositivas para una clase, con poco texto y ejemplos"},
 interna:{n:"Para mi equipo",db:true,d:"una presentación corta con los resultados del mes para mi equipo"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"El guion",s:"10 min · la estructura",b:()=>`${cb(`Quiero ${D()}. Propón el guion: título de cada diapositiva y una o dos frases. Una idea por diapositiva. Espera mi OK.`)}${ok("has aprobado el guion.")}`},
{t:"El diseño",s:"10 min · en Canva",b:()=>`${cb("Crea la presentación en Canva con mi marca, siguiendo el guion. Poco texto y letra grande. Dame el enlace.")}${ok("tienes la presentación en tu Canva.")}`},
{t:"Las notas para hablar",s:"5 min · el discurso",b:()=>`${cb("Escríbeme lo que diría en cada diapositiva, en frases cortas, para no leer la pantalla.")}${ok("tienes tus notas.")}`}
]},
{s:"cartel",t:"Cartel o flyer para imprimir",d:"Un cartel A4 para un evento, con la fecha y el lugar bien visibles.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "🖨 Impresión", "🍽 Resultado: un cartel en PDF listo para imprimir"],
q:"¿Qué evento?",ph:"Qué, cuándo y dónde. Ejemplo: mercadillo del barrio, sábado 12, plaza mayor",
fin:"Tu cartel está listo para imprimir. Imprime una prueba antes de hacer muchas copias.",
def:"evento",empty:"[di qué, cuándo y dónde, arriba]",
apps:{
 evento:{n:"Evento",db:true,d:"un cartel A4 para un evento, con título grande, fecha, hora y lugar bien visibles"},
 negocio:{n:"Mi negocio",db:true,d:"un flyer A5 para repartir que presente mi negocio y su horario"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Los textos",s:"5 min · lo esencial",b:()=>`${cb(`Usa Canva para crear ${D()}. Antes, propón los textos: lo que se tiene que leer desde lejos y lo que va en pequeño.`)}${ok("has aprobado los textos.")}`},
{t:"El diseño",s:"10 min · en Canva",b:()=>`${cb("Crea el diseño en Canva con mi marca. Que el título se lea a 3 metros. Dame el enlace.")}${ok("tienes el cartel en tu Canva.")}`},
{t:"Exporta para imprimir",s:"5 min · PDF",b:()=>`${cb("Exporta el diseño como PDF para imprimir y dame el enlace de descarga.")}${tip("También puedes hacerlo desde Canva: <b>Compartir → Descargar → PDF para imprimir</b>.")}${ok("tienes el PDF.")}`}
]},
{s:"cv",t:"Tu currículum",d:"Un currículum de una página, limpio y moderno, con tu experiencia bien contada.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "📄 CV", "🍽 Resultado: tu CV en PDF"],
q:"¿Para qué puesto?",ph:"Di el puesto. Ejemplo: recepcionista de hotel",
fin:"Tu currículum está listo. Adáptalo un poco a cada oferta: Claude te ayuda en un minuto.",
def:"general",empty:"[di el puesto, arriba]",
apps:{
 general:{n:"Un puesto concreto",db:false,d:"un currículum de una página, limpio y moderno, para el puesto que busco"},
 cambio:{n:"Cambio de sector",db:false,d:"un currículum que destaque lo que me sirve para cambiar de sector"},
 otra:{n:"✏️ Otro",db:false,d:""}
},
steps:[
{t:"Cuéntale tu experiencia",s:"10 min · el contenido",b:()=>`${cb(`Quiero ${D()}. Esta es mi experiencia, sin orden: [pégala o sube tu CV antiguo]. Escríbela de forma clara y concreta, con logros y no solo tareas. No inventes nada.`)}${ok("tienes los textos del CV.")}`},
{t:"El diseño",s:"10 min · en Canva",b:()=>`${cb("Crea el currículum en Canva, en una página, limpio y fácil de leer. Dame el enlace.")}${ok("tienes el CV en tu Canva.")}`},
{t:"Revisa y descarga",s:"5 min · PDF",b:()=>`<ol><li>Revisa fechas, nombres y tu teléfono.</li><li>Descárgalo en <b>PDF</b>.</li></ol>${ok("tienes tu CV en PDF.")}`}
]},
{s:"tarjetas",t:"Tarjetas de visita",d:"Tarjetas con tu logo y tus datos, listas para imprimir.",
meta:["⏱ 15 min", "👩‍🍳 Fácil", "💳 Impresión", "🍽 Resultado: tus tarjetas en PDF"],
q:"¿Qué datos llevan?",ph:"Nombre, a qué te dedicas y contacto",
fin:"Tus tarjetas están listas. Pide una prueba a la imprenta antes del pedido grande.",
def:"profesional",empty:"[escribe tus datos, arriba]",
apps:{
 profesional:{n:"Profesional",db:false,d:"tarjetas de visita sobrias con mi logo, nombre, profesión, teléfono y web"},
 creativa:{n:"Creativa",db:false,d:"tarjetas de visita con mucho color y un código QR a mi web"},
 otra:{n:"✏️ Otra",db:false,d:""}
},
steps:[
{t:"Diseña las tarjetas",s:"10 min · en Canva",b:()=>`${cb(`Usa Canva para crear ${D()}. Mis datos: [escríbelos]. Haz la cara y el dorso. Dame el enlace.`)}${ok("tienes las tarjetas en tu Canva.")}`},
{t:"Revisa y exporta",s:"5 min · PDF",b:()=>`<ol><li>Comprueba cada dato letra por letra.</li><li>Pide: «Exporta como PDF para imprimir».</li></ol>${ok("tienes el PDF para la imprenta.")}`}
]},
{s:"reutilizar",t:"Actualiza un diseño que ya tienes",d:"Claude busca en tus diseños antiguos y hace una versión nueva con los cambios.",
meta:["⏱ 10 min", "👩‍🍳 Muy fácil", "♻️ Reutilizar", "🍽 Resultado: tu diseño actualizado"],
q:"¿Qué diseño?",ph:"Di cuál y qué cambia. Ejemplo: el cartel del mercadillo del año pasado, con la fecha nueva",
fin:"Diseño actualizado sin empezar de cero.",
def:"fecha",empty:"[di qué diseño y qué cambia, arriba]",
apps:{
 fecha:{n:"Cambiar la fecha",db:false,d:"crear una versión nueva con la fecha actualizada"},
 formato:{n:"Otro formato",db:false,d:"crear una versión en formato historia vertical"},
 otra:{n:"✏️ Otro cambio",db:false,d:""}
},
steps:[
{t:"Búscalo",s:"5 min · en tu Canva",b:()=>`${cb(`Busca en mi Canva los diseños de [evento o tema] y enséñame cuáles has encontrado.`)}${ok("Claude ha encontrado el diseño.")}`},
{t:"La versión nueva",s:"5 min · el cambio",b:()=>`${cb(`Con ese diseño, quiero ${D()}: [detalla]. Deja el original como está y dame el enlace del nuevo.`)}${ok("tienes el diseño nuevo y el original intacto.")}`}
]}
]};
