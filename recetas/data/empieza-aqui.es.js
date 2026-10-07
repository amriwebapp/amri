(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: empieza aquí, conoce a Claude",
meta:["⏱ 15 min aprox.", "👩‍🍳 Muy fácil", "💶 Gratis", "🍽 Resultado: tu primera conversación y un mapa de todo lo demás"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué te gustaría probar primero?",
ph:"Cuéntalo con tus palabras. Ejemplo: ayudarme a escribir una carta para mi casero",
yn:"¿Quieres tener Claude también en el móvil o en el ordenador?",
yntip:"Si dudas, elige «Sí». Si prefieres no instalar nada, funciona igual desde el navegador.",
fin:"Ya conoces a Claude y sabes qué es cada cosa. A partir de aquí, elige la receta que te apetezca: todas se pueden hacer solas.",
R:{key:"receta-empieza",def:"escribir",empty:"[escribe aquí lo que quieres probar, arriba]",
apps:{
 escribir:{n:"Escribir y resumir",db:true,d:"escribir un correo difícil y resumir un texto largo"},
 aprender:{n:"Aprender algo",db:true,d:"entender un tema que me cuesta, con ejemplos sencillos y preguntas para comprobar que lo he entendido"},
 organizar:{n:"Organizar mi semana",db:true,d:"organizar mi semana con mis tareas, mis citas y algún rato libre"},
 ideas:{n:"Tener ideas",db:true,d:"darme ideas para un proyecto personal y ayudarme a elegir la mejor"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: tu ayudante. Entiende lo que le pides con palabras normales.</li><li><b>Un correo electrónico</b>: para crear tu cuenta.</li>${DB()?`<li><b>Tu móvil u ordenador</b>: para llevar a Claude contigo.</li>`:""}<li><b>Algo real que hacer</b>: aprenderás más con una tarea de verdad que con una prueba.</li>`,
steps:[
{t:"Crea tu cuenta",s:"3 min · gratis",b:()=>`<p class="what">Claude es una inteligencia artificial: un programa con el que hablas como con una persona y que te ayuda a escribir, pensar, aprender y crear.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>.</li>
<li>Crea tu cuenta con tu correo o con tu cuenta de Google.</li>
<li>Elige el plan gratuito. No hace falta tarjeta.</li></ol>
${tip("El plan gratuito tiene un límite de mensajes. Si llegas a él, espera unas horas y podrás seguir. Para aprender, es suficiente.")}${ok("ves una caja para escribir que te pregunta en qué puede ayudarte.")}`},
{db:1,t:"Llévalo contigo",s:"3 min · móvil y ordenador",b:()=>`<p class="what">Tus conversaciones son las mismas en todas partes: empiezas en el móvil y sigues en el ordenador.</p><h3>Pasos</h3><ol>
<li><b>Móvil:</b> busca «Claude» en la App Store o en Google Play. Comprueba que el autor es <b>Anthropic</b>.</li>
<li><b>Ordenador:</b> descarga la app desde <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a>.</li>
<li>Entra con la misma cuenta.</li></ol>
${tip("En el móvil puedes hablarle en voz alta: pulsa el micrófono.")}${ok("ves tus conversaciones en la app.")}`},
{t:"Tu primera conversación",s:"5 min · a probar",b:()=>`<p class="what">Háblale como a una persona. No hace falta usar palabras especiales.</p><h3>Copia este mensaje y pégalo</h3>${cb(`Hola, Claude. Es la primera vez que te uso. Quiero que me ayudes a ${D()}.\n\nAntes de empezar, hazme 3 preguntas cortas para entender bien lo que necesito. Después hazlo y explícame qué has hecho.`)}
${det("Trucos para que te entienda mejor",["Dile <b>para quién</b> es y <b>para qué</b>.","Pide la forma que quieres: «en 5 puntos», «en una tabla», «más corto».","Si algo no te gusta, díselo: «más cercano», «sin emojis». Puedes pedir cambios todas las veces que quieras."])}
${ok("Claude te ha hecho preguntas y te ha dado un resultado que te sirve.")}`},
{t:"Comprueba lo importante",s:"3 min · con cabeza",b:()=>`<p class="what">Claude acierta mucho, pero a veces se equivoca y lo dice con mucha seguridad. Tú tienes la última palabra.</p><h3>Pregúntale</h3>${cb("¿Hay algo en tu respuesta de lo que no estés seguro? Dime qué debería comprobar yo.")}
${tip("Con temas de salud, dinero o leyes, compara siempre con una fuente fiable o con un profesional.")}
${tip("⚠️ No le des contraseñas, números de tarjeta ni datos privados de otras personas.")}${ok("sabes qué partes de la respuesta conviene revisar.")}`},
{t:"El mapa de Claude",s:"5 min · seis palabras",b:()=>`<p class="what">En AMRI verás seis palabras una y otra vez. Esto es lo que significan, sin tecnicismos:</p><ul>
<li><b>💬 Chat</b>: una conversación con Claude. Es lo que acabas de hacer.</li>
<li><b>📁 Proyecto</b>: una carpeta con tus instrucciones y documentos. Todos los chats que abras dentro los tienen en cuenta. <a href="asistente-ia.html">Receta: tu asistente personal</a>.</li>
<li><b>🔌 Conector</b>: un permiso para que Claude use otra app por ti, como Gmail, Canva o Notion. Lo quitas cuando quieras. <a href="gmail-calendario.html">Receta: Gmail y Calendar</a>.</li>
<li><b>📖 Skill</b>: una ficha con tu forma de hacer algo. Claude la usa sola cuando toca. <a href="skills-propias.html">Receta: enséñale tu método</a>.</li>
<li><b>📦 Plugin</b>: un paquete con varias Skills (y a veces conectores) que se instala de una vez. <a href="../plugin.html">El plugin de AMRI</a>.</li>
<li><b>🤖 Agente</b>: Claude trabajando por su cuenta en una tarea de varios pasos. Hace un plan, lo ejecuta, comprueba el resultado y te pide permiso antes de lo importante. <a href="primer-agente.html">Receta: tu primer agente</a>.</li></ul>
${tip("No hace falta aprenderlo de memoria: en las recetas, las palabras subrayadas tienen su explicación.")}${ok("sabrías explicar con tus palabras qué es un conector y qué es un agente.")}`},
{t:"Elige tu camino",s:"2 min · ¿y ahora?",b:()=>`<p class="what">Cada receta se puede hacer sola. Elige según lo que quieras conseguir:</p><ul>
<li>Que Claude te conozca y te ayude cada día → <a href="asistente-ia.html">Tu asistente personal</a>.</li>
<li>Que trabaje dentro de tus apps → <a href="gmail-calendario.html">Gmail y Calendar</a>, <a href="canva-diseno.html">Canva</a> o <a href="notion-cerebro.html">Notion</a>.</li>
<li>Crear algo para internet → <a href="webapp-gratis.html">Tu web online y gratis</a>.</li>
<li>Que haga tareas largas por ti → <a href="primer-agente.html">Tu primer agente</a>.</li>
<li>¿Tienes un proyecto en mente? Cuéntalo en <a href="../index.html#construir">«¿Qué quieres construir?»</a> y te proponemos las recetas en orden.</li></ul>
${ok("has elegido tu próxima receta.")}`}
,
{x:1,t:"Dónde usar Claude",s:"Opcional · cada sitio, para qué",b:()=>`<ul>
<li><b>Web (claude.ai)</b>: todo lo básico, desde cualquier navegador.</li>
<li><b>Móvil</b>: chats, fotos y voz cuando no estás en el ordenador.</li>
<li><b>App de escritorio</b>: lo mismo que la web y, además, Cowork y Claude Code, para que Claude trabaje con los archivos de tu ordenador.</li>
<li><b>Claude in Chrome</b>: una extensión con la que Claude usa webs por ti. <a href="navegador-chrome.html">Receta</a>.</li>
<li><b>Claude Code</b>: para crear webs y programas en tu ordenador, desde la app de escritorio o desde la terminal. <a href="primer-agente.html">Receta</a>.</li></ul>`},
{x:1,t:"Los planes, sin letra pequeña",s:"Opcional · qué es gratis",b:()=>`<ul>
<li><b>Gratis</b>: chats, proyectos y la mayoría de recetas básicas de AMRI. Tiene un límite de mensajes.</li>
<li><b>De pago (Pro o superior)</b>: más mensajes y funciones como Claude Code, Cowork o la extensión de Chrome.</li>
<li>Algunas funciones, como ciertos conectores o las Skills, dependen del plan. Si no las ves, la receta te da otro camino.</li></ul>
${tip("Los precios cambian: consúltalos en <a href=\"https://claude.ai/pricing\" target=\"_blank\" rel=\"noopener\">claude.ai/pricing</a>. En cada tarjeta de AMRI verás si la receta es gratis, depende de tu plan o es de pago.")}`},
{x:1,t:"Tu privacidad",s:"Siempre · ajustes",b:()=>`<ul>
<li>En los ajustes de Claude, en <b>Privacidad</b>, decides si tus conversaciones se pueden usar para mejorar Claude.</li>
<li>Puedes borrar cualquier conversación cuando quieras.</li>
<li>Regla sencilla: no escribas nada que no pondrías en un correo a alguien de confianza.</li></ul>`}
]}};
