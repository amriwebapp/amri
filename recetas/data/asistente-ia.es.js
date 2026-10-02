(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: tu asistente personal con IA",
meta:["⏱ 20 min aprox.", "👩‍🍳 Sin saber programar", "💶 0 € para empezar", "🍽 Resultado: un ayudante que te conoce"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Para qué lo quieres?",
ph:"Describe en qué te ayudaría. Ejemplo: responder correos de clientes de mi tienda de bicis y preparar presupuestos",
yn:"¿Tiene que conocer tus documentos (catálogo, apuntes, normas…)?",
yntip:"Si dudas, elige «Sí»: te enseñamos a darle tus documentos. Si no los necesitas, puedes saltarte ese paso.",
fin:"Tu asistente ya te conoce. Cada vez que abras un chat dentro de su proyecto, recordará tus instrucciones. Más abajo tienes dos extras: conectarlo con tus apps y mantenerlo al día.",
R:{key:"receta-asis",def:"trabajo",empty:"[escribe aquí para qué lo quieres, arriba]",
apps:{
 trabajo:{n:"Correos y trabajo",db:false,d:"responder correos, preparar reuniones y resumir documentos largos de mi trabajo"},
 estudios:{n:"Estudios",db:true,d:"estudiar mis apuntes: hacerme resúmenes, preguntas tipo test y explicarme lo que no entiendo"},
 negocio:{n:"Mi negocio",db:true,d:"responder dudas de clientes de mi negocio usando mis precios, horarios y condiciones"},
 contenido:{n:"Escribir contenido",db:false,d:"escribir publicaciones para redes sociales y newsletters con mi estilo"},
 personal:{n:"Organización personal",db:false,d:"organizar mi semana, planificar comidas y hacer listas de la compra"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el cocinero. Será tu asistente.</li><li><b>Proyectos de Claude</b>: el recetario. Guarda sus instrucciones para siempre.</li>${DB()?`<li><b>Tus documentos</b>: la despensa. Lo que tu asistente necesita saber.</li>`:""}<li><b>Una nota en tu móvil</b>: la libreta. Para guardar tus mejores mensajes.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"3 min · crear la cuenta",b:()=>`<p class="what">Solo necesitas una cuenta gratuita en Claude${DB()?" y tener a mano tus documentos":""}.</p><h3>Pasos</h3><ol>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
${DB()?"<li>Reúne en una carpeta los documentos que usará (PDF, Word o texto). Mejor pocos y claros que muchos.</li>":""}
<li>Abre una nota vacía en tu móvil u ordenador.</li></ol>${ok("has entrado en Claude"+(DB()?" y tienes tus documentos en una carpeta.":"."))}`},
{t:"Que Claude te entreviste",s:"5 min · tu ficha personal",b:()=>`<p class="what">En vez de escribir tú las instrucciones, deja que Claude te haga preguntas y las escriba por ti.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Quiero que seas mi asistente personal para ${D()}.\n\nHazme 8 preguntas, de una en una, para conocerme: a qué me dedico, cómo escribo, qué tareas repito y cómo me gusta recibir las respuestas. Cuando termines, escríbeme unas instrucciones claras para que te comportes siempre así.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero que seas…»</b>: el trabajo de tu asistente. Cámbialo por el tuyo.","<b>«De una en una»</b>: así es una conversación, no un formulario.","<b>«Escríbeme unas instrucciones»</b>: el resultado que guardarás en el siguiente paso."])}
${tip("Responde con naturalidad, como si hablaras con alguien nuevo en tu equipo. Cuanto más concreto, mejor.")}${ok("Claude te ha dado un texto con tus instrucciones personales.")}`},
{t:"Crea su cocina propia",s:"5 min · el proyecto",b:()=>`<p class="what">Un <b>Proyecto</b> es un espacio en Claude con sus propias instrucciones. Todos los chats que abras dentro las recordarán.</p><h3>Pasos</h3><ol>
<li>En Claude, en el menú lateral, pulsa <b>Proyectos → Crear proyecto</b>.</li>
<li>Ponle un nombre, por ejemplo <b>Mi asistente</b>.</li>
<li>Pulsa <b>Instrucciones del proyecto</b> y pega el texto del paso anterior.</li></ol>
${det("No veo la opción de Proyectos",["Tu plan puede tener límites. Alternativa: guarda las instrucciones en tu nota del móvil.","Pégalas al principio de cada chat nuevo. Funciona igual, solo es un paso más."])}${ok("tienes un proyecto con tus instrucciones guardadas.")}`},
{db:1,t:"Llena la despensa",s:"5 min · subir tus documentos",b:()=>`<p class="what">Tu asistente responderá usando tus documentos, no información inventada.</p><h3>Pasos</h3><ol>
<li>Dentro del proyecto, pulsa <b>Añadir contenido</b> (o el botón <b>+</b> de archivos).</li>
<li>Sube tus documentos.</li>
<li>Abre un chat dentro del proyecto y pega:</li></ol>${cb("Lee los documentos del proyecto y dime en 5 puntos qué has entendido. Si algo es confuso o falta información, dímelo. A partir de ahora, si no encuentras algo en mis documentos, dilo en vez de inventarlo.")}
${tip("⚠️ No subas contraseñas, datos bancarios ni datos personales de otras personas.")}${ok("Claude te resume bien lo que hay en tus documentos.")}`},
{t:"Pruébalo con una tarea real",s:"5 min · primera prueba",b:()=>`<p class="what">Dale algo que harías hoy de verdad. Así ves si necesita ajustes.</p><h3>Ejemplo</h3>${cb(`${APPS[app].db?"Usando mis documentos, ":""}ayúdame con esto: [pega aquí un correo, una duda o una tarea real]. Respóndeme como lo haría yo.`)}
${tip("Si algo no te gusta, díselo: «más corto», «más formal», «sin emojis». Y luego pídele: «añade esto a tus instrucciones».")}${ok("la respuesta te sirve casi sin tocarla.")}`},
{t:"Guarda tus atajos",s:"3 min · tu libreta de mensajes",b:()=>`<p class="what">Los mensajes que repites a menudo son oro. Guárdalos para pegarlos en un segundo.</p><h3>Pasos</h3><ol><li>Copia en tu nota los mensajes que mejor te han funcionado.</li><li>Pídele a Claude que te sugiera más:</li></ol>${cb("Según lo que sabes de mí, dame 5 mensajes cortos que podría usar a diario contigo para ahorrar tiempo. Déjalos listos para copiar.")}${ok("tienes al menos 5 atajos guardados en tu nota.")}`},
{x:1,t:"Conéctalo con tus apps",s:"10 min · opcional",b:()=>`<p class="what">Con los <b>conectores</b>, Claude puede leer tu correo, tu calendario o tus documentos de Google sin copiar y pegar.</p><h3>Pasos</h3><ol>
<li>En Claude ve a <b>Ajustes → Conectores</b>.</li>
<li>Pulsa <b>Conectar</b> junto a la app que quieras y autoriza.</li>
<li>Prueba: «¿Qué tengo en el calendario mañana?».</li></ol>
${tip("Conecta solo lo que necesites. Puedes desconectar cualquier app cuando quieras desde el mismo sitio.")}`},
{x:1,t:"Mantenlo al día",s:"Siempre · rutina",b:()=>`<p class="what">Un asistente mejora contigo. Dedícale cinco minutos al mes.</p><ol>
<li><b>Cada mes:</b> revisa sus instrucciones y quita lo que ya no aplique.</li>
${DB()?"<li><b>Cuando cambie algo</b> (precios, temario, normas): sustituye el documento viejo por el nuevo.</li>":""}
<li><b>Si se equivoca siempre en lo mismo:</b> añade una regla a las instrucciones.</li></ol>${cb("Revisa tus instrucciones y propón mejoras según nuestras últimas conversaciones. Dime qué cambiarías y por qué.")}
${det("💡 Ideas para seguir cocinando",["Un segundo proyecto solo para un cliente o asignatura.","Plantillas de correo para situaciones típicas.","Un resumen semanal de tus tareas pendientes."])}`}
]}};
