(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: Claude navega por ti con Chrome",
meta:["⏱ 20 min aprox.", "👩‍🍳 Fácil", "💶 Requiere un plan de pago de Claude", "🍽 Resultado: tareas web hechas mientras miras"],
ing:"Ingredientes",
q:"¿Qué quieres que haga por ti?",
ph:"Describe la tarea. Ejemplo: buscar 5 casas rurales en Asturias para 4 personas en mayo, con precio y valoración",
yn:"¿La tarea necesita tus datos personales (nombre, dirección, teléfono…)?",
yntip:"Si dudas, elige «Sí»: te explicamos qué datos dar y cuáles nunca.",
fin:"Claude ya sabe moverse por la web contigo. Empieza con tareas pequeñas y ve dándole más confianza poco a poco.",
R:{key:"receta-chrome",def:"comparar",empty:"[describe aquí la tarea, arriba]",
apps:{
 comparar:{n:"Comparar precios",db:false,d:"comparar el precio de un producto en 4 tiendas online y hacerme una tabla con precio, envío y valoraciones"},
 investigar:{n:"Investigar un tema",db:false,d:"leer las 5 mejores fuentes sobre un tema y resumirme lo importante con los enlaces"},
 formulario:{n:"Rellenar formularios",db:true,d:"rellenar un formulario largo de inscripción con mis datos, dejándolo listo para que yo lo envíe"},
 viaje:{n:"Planear un viaje",db:false,d:"buscar opciones de alojamiento y transporte para un viaje, sin reservar ni pagar nada"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Google Chrome</b>: la cocina. El navegador donde trabajará Claude.</li><li><b>Claude in Chrome</b>: el pinche. Una extensión oficial que ve la página, hace clic y escribe.</li><li><b>Un plan de pago de Claude</b>: la extensión no está en el plan gratuito.</li>${DB()?`<li><b>Tus datos básicos</b>: solo los imprescindibles para la tarea.</li>`:""}`,
steps:[
{t:"Instala la extensión",s:"5 min · el pinche",b:()=>`<p class="what">Claude in Chrome es una extensión: un pequeño añadido para tu navegador.</p><ol>
<li>Abre Chrome y busca <b>«Claude»</b> en la <a href="https://chromewebstore.google.com" target="_blank" rel="noopener">Chrome Web Store</a> (la oficial, de Anthropic).</li>
<li>Pulsa <b>Añadir a Chrome</b>.</li>
<li>Pulsa el icono del puzle 🧩 y fija Claude con la chincheta.</li>
<li>Ábrela e inicia sesión con tu cuenta de Claude.</li></ol>${tip("Comprueba que el autor es Anthropic. Hay extensiones de imitación.")}${ok("al pulsar el icono, se abre Claude en un panel lateral.")}`},
{t:"Decide los permisos",s:"2 min · reglas de la casa",b:()=>`<p class="what">La extensión te pregunta antes de actuar en cada web. Empieza siendo prudente.</p><ol><li>Cuando te pida permiso para un sitio, léelo con calma.</li><li>Al principio, elige la opción de que <b>te pregunte antes de actuar</b>.</li><li>No le des acceso a tu banco ni a webs con datos muy sensibles.</li></ol>${ok("sabes dónde se aprueban y se quitan los permisos.")}`},
{t:"Tu primera tarea",s:"5 min · a mirar",b:()=>`<p class="what">Abre el panel de Claude y dale la tarea. Mira cómo trabaja: es fascinante y tranquilizador.</p>${cb(`Quiero ${D()}.\n\nAntes de empezar, dime tu plan en pasos cortos. Pídeme permiso antes de pulsar cualquier botón de enviar, reservar, comprar o pagar. Al terminar, dame el resultado en una tabla con enlaces.`)}
${det("¿Por qué pedir el plan antes?",["Ves qué va a hacer antes de que lo haga.","Puedes corregirle si se va por otro camino.","Aprendes cómo razona."])}${ok("Claude te enseña su plan y empieza a navegar.")}`},
{db:1,t:"Tus datos, con cuidado",s:"3 min · la regla de oro",b:()=>`<p class="what">Da solo lo imprescindible, y el botón final lo pulsas tú.</p><ol><li>Escribe en el chat solo los datos que pide el formulario.</li><li><b>Nunca</b> le des contraseñas, números de tarjeta ni códigos de verificación.</li><li>Pide:</li></ol>${cb("Rellena el formulario con estos datos, pero NO lo envíes. Cuando termines, avísame para que lo revise y lo envíe yo.")}${ok("el formulario está relleno y el botón de enviar lo pulsas tú.")}`},
{t:"Revisa el resultado",s:"5 min · probar",b:()=>`<p class="what">Comprueba dos o tres datos al azar. La IA puede equivocarse al leer una web.</p>${cb("Dime de dónde has sacado cada dato de la tabla, con el enlace exacto.")}${ok("los datos que has comprobado coinciden con las webs.")}`},
{x:1,t:"Seguridad: ojo con las trampas",s:"Siempre · importante",b:()=>`<p class="what">Algunas webs esconden instrucciones para engañar a los asistentes de IA (se llama <i>prompt injection</i>).</p><ol><li>Si Claude hace algo que no le pediste, <b>páralo</b> con el botón de detener.</li><li>Usa la extensión en webs de confianza.</li><li>Mantén la regla: compras y pagos, siempre tú.</li></ol>`},
{x:1,t:"Ideas para seguir",s:"Opcional",b:()=>`${det("💡 Tareas que funcionan bien",["Rellenar una hoja de cálculo con datos de varias webs.","Revisar si los enlaces de tu web funcionan.","Buscar convocatorias o ayudas y resumir los requisitos.","Ordenar tus pestañas abiertas por tema."])}`}
]}};
