(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: Claude navega por ti con Chrome",
intro:"Con la extensión Claude in Chrome, Claude usa webs por ti mientras miras: compara precios, investiga, rellena formularios y revisa tu web. Instala la extensión una vez y elige la tarea. Comprar, pagar y enviar, siempre tú.",
meta:["📕 5 recetas", "💶 Requiere un plan de pago de Claude", "🍽 Resultado: tareas web hechas mientras miras"],
ing:"Ingredientes",
fin:"La extensión está lista. Empieza con tareas pequeñas y ve dándole confianza poco a poco.",
R:{key:"libro-chrome",
ing:()=>`<li><b>Google Chrome</b>: el navegador donde trabajará Claude.</li><li><b>Claude in Chrome</b>: una extensión oficial que ve la página, hace clic y escribe.</li><li><b>Un plan de pago de Claude</b>: la extensión no está en el plan gratuito.</li>`,
steps:[
{t:"Instala la extensión",s:"el pinche",b:()=>`<p class="what">Una extensión es un pequeño añadido para tu navegador.</p><ol>
<li>Abre Chrome y busca <b>«Claude»</b> en la <a href="https://chromewebstore.google.com" target="_blank" rel="noopener">Chrome Web Store</a>.</li>
<li>Pulsa <b>Añadir a Chrome</b>.</li>
<li>Pulsa el icono del puzle 🧩 y fija Claude con la chincheta.</li>
<li>Ábrela e inicia sesión con tu cuenta de Claude.</li></ol>${tip("Comprueba que el autor es Anthropic. Hay extensiones de imitación.")}${ok("al pulsar el icono, se abre Claude en un panel lateral.")}`},
{t:"Decide los permisos",s:"reglas de la casa",b:()=>`<ol><li>Cuando te pida permiso para un sitio, léelo con calma.</li><li>Al principio, elige la opción de que <b>te pregunte antes de actuar</b>.</li><li>No le des acceso a tu banco ni a webs con datos muy sensibles.</li></ol>${ok("sabes dónde se aprueban y se quitan los permisos.")}`},
{t:"Tu mensaje de seguridad",s:"para siempre",b:()=>`<p class="what">Añade esto al final de cada tarea que le pidas:</p>${cb("Antes de empezar, dime tu plan en pasos cortos. Pídeme permiso antes de pulsar cualquier botón de enviar, reservar, comprar o pagar. Al terminar, dime de dónde has sacado cada dato, con su enlace.")}${ok("lo tienes guardado en una nota.")}`}
,
{x:1,t:"Seguridad: ojo con las trampas",s:"Siempre · importante",b:()=>`<p class="what">Algunas webs esconden instrucciones para engañar a los asistentes de IA.</p><ol><li>Si Claude hace algo que no le pediste, <b>páralo</b> con el botón de detener.</li><li>Usa la extensión en webs de confianza.</li><li>Nunca le des contraseñas, números de tarjeta ni códigos de verificación.</li><li>Compras y pagos, siempre tú.</li></ol>`}
]},
recetas:[
{s:"comparar",t:"Compara precios en varias tiendas",d:"Una tabla con precio, envío y valoraciones de un producto en 4 tiendas.",
meta:["👩‍🍳 Fácil", "🛒 Compras", "🍽 Resultado: una tabla comparativa con enlaces"],
q:"¿Qué producto?",ph:"Di cuál. Ejemplo: una freidora de aire de 5 litros",
fin:"Ya sabes dónde comprarlo. La compra, tú.",
def:"producto",empty:"[di qué producto, arriba]",
apps:{
 producto:{n:"Un producto",db:false,d:"comparar el precio de un producto en 4 tiendas online y hacerme una tabla con precio, envío y valoraciones"},
 seguro:{n:"Seguros o tarifas",db:false,d:"comparar 4 tarifas de móvil e internet y hacerme una tabla con lo que incluye cada una"},
 otra:{n:"✏️ Otra",db:false,d:""}
},
steps:[
{t:"Dale la tarea",s:"mira cómo trabaja",b:()=>`${cb(`Quiero ${D()}: [qué exactamente]. Antes de empezar, dime tu plan en pasos cortos. No compres ni añadas nada al carrito. Al terminar, dame la tabla con enlaces.`)}${ok("tienes la tabla.")}`},
{t:"Comprueba dos datos",s:"con lupa",b:()=>`<p class="what">Abre dos enlaces y comprueba el precio. La IA puede equivocarse al leer una web.</p>${ok("los precios comprobados coinciden.")}`}
]},
{s:"investigar",t:"Investiga un tema con fuentes",d:"Lee las mejores fuentes sobre un tema y te resume lo importante, con enlaces.",
meta:["👩‍🍳 Fácil", "🔎 Investigar", "🍽 Resultado: un resumen con sus fuentes"],
q:"¿Qué tema?",ph:"Di cuál. Ejemplo: ayudas para autónomos que empiezan en Andalucía",
fin:"Tienes tu resumen. Para decisiones importantes, lee tú las fuentes originales.",
def:"tema",empty:"[di qué tema, arriba]",
apps:{
 tema:{n:"Un tema",db:false,d:"leer las 5 mejores fuentes sobre un tema y resumirme lo importante con los enlaces"},
 ayudas:{n:"Ayudas o convocatorias",db:false,d:"buscar ayudas o convocatorias abiertas y resumir requisitos, plazos y enlaces"},
 otra:{n:"✏️ Otra",db:false,d:""}
},
steps:[
{t:"Dale la tarea",s:"leer por ti",b:()=>`${cb(`Quiero ${D()}: [el tema]. Usa fuentes fiables (oficiales cuando las haya). Antes de empezar, dime tu plan. Al terminar, resume en 10 puntos con el enlace de cada dato.`)}${ok("tienes el resumen con enlaces.")}`},
{t:"Revisa las fuentes",s:"confianza",b:()=>`${cb("¿Cuáles de esas fuentes son oficiales y cuáles no? ¿Hay algo en lo que se contradigan?")}${ok("sabes qué fuentes son fiables.")}`}
]},
{s:"formulario",t:"Rellena un formulario largo (sin enviarlo)",d:"Claude rellena con tus datos y tú revisas y pulsas enviar.",
meta:["👩‍🍳 Fácil", "📝 Formularios", "🍽 Resultado: un formulario relleno, listo para que lo envíes"],
q:"¿Qué formulario?",ph:"Di cuál. Ejemplo: la inscripción a un curso",
fin:"El formulario está listo. El botón de enviar lo pulsas tú.",
def:"inscripcion",empty:"[di qué formulario, arriba]",
apps:{
 inscripcion:{n:"Inscripción",db:true,d:"rellenar un formulario largo de inscripción"},
 solicitud:{n:"Solicitud",db:true,d:"rellenar una solicitud"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Solo los datos necesarios",s:"la regla de oro",b:()=>`<ol><li>Escribe en el chat solo los datos que pide el formulario.</li><li><b>Nunca</b> le des contraseñas, números de tarjeta ni códigos de verificación.</li></ol>${ok("tienes tus datos preparados.")}`},
{t:"Que lo rellene",s:"sin enviar",b:()=>`${cb(`Quiero ${D()} en esta página. Mis datos: [los imprescindibles]. Rellénalo, pero NO lo envíes. Cuando termines, avísame para que lo revise y lo envíe yo.`)}${ok("el formulario está relleno y el botón de enviar lo pulsas tú.")}`}
]},
{s:"viaje",off:1,t:"Planea un viaje (sin reservar)",d:"Opciones de alojamiento y transporte en una tabla, para que decidas tú.",
meta:["👩‍🍳 Fácil", "✈️ Viajes", "🍽 Resultado: opciones comparadas con enlaces"],
q:"¿Qué viaje?",ph:"Dónde, cuándo y cuántos. Ejemplo: casa rural en Asturias para 4 personas en mayo",
fin:"Tienes tus opciones. La reserva y el pago, tú.",
def:"rural",empty:"[di dónde, cuándo y cuántos, arriba]",
apps:{
 rural:{n:"Alojamiento",db:false,d:"buscar 5 alojamientos y hacerme una tabla con precio, valoraciones y condiciones de cancelación"},
 transporte:{n:"Transporte",db:false,d:"comparar tren, avión y coche para el viaje, con precio y duración"},
 otra:{n:"✏️ Otro",db:false,d:""}
},
steps:[
{t:"Dale la tarea",s:"buscar",b:()=>`${cb(`Para este viaje: [dónde, cuándo, cuántos], quiero ${D()}. No reserves ni pagues nada. Antes de empezar, dime tu plan. Al terminar, dame la tabla con enlaces.`)}${ok("tienes las opciones en una tabla.")}`},
{t:"Decide tú",s:"elegir",b:()=>`${cb("De estas opciones, ¿cuál me recomiendas y por qué? Dime también qué letra pequeña debería revisar.")}${ok("has elegido y sabes qué revisar antes de reservar.")}`}
]},
{s:"tu-web",t:"Revisa tu propia web",d:"Comprueba enlaces rotos, textos confusos y cómo se ve desde fuera.",
meta:["👩‍🍳 Fácil", "🧪 Revisión", "🍽 Resultado: una lista de mejoras de tu web"],
q:"¿Qué web?",ph:"Pega la dirección. Ejemplo: tunombre.com",
fin:"Tienes tu lista de mejoras. Para cambiarlas, mira el libro de la web.",
def:"revision",empty:"[pega la dirección, arriba]",
apps:{
 revision:{n:"Revisión general",db:false,d:"revisar mi web: enlaces rotos, textos confusos, faltas y cosas que no se entienden"},
 cliente:{n:"Como un cliente",db:false,d:"usar mi web como lo haría un cliente nuevo y decirme dónde se atasca"},
 otra:{n:"✏️ Otra",db:false,d:""}
},
steps:[
{t:"Dale la tarea",s:"recorrerla",b:()=>`${cb(`Abre mi web [dirección] y quiero ${D()}. No envíes ningún formulario. Al terminar, dame una lista ordenada de lo más grave a lo menos.`)}${ok("tienes la lista de mejoras.")}`},
{t:"Arréglalo",s:"siguiente paso",b:()=>`<p class="what">Usa la receta <a href="webapp-gratis--cambios.html">Cambia tu web sin romperla</a> para corregir lo más grave primero.</p>${ok("sabes por dónde empezar.")}`}
]}
]};
