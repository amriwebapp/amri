(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: empieza aquí, conoce a Claude",
intro:"El primer libro para quien nunca ha usado Claude. Creas tu cuenta y después, receta a receta, aprendes a hablar con Claude, a pedirle bien las cosas, a darle tus archivos y a saber dónde usarlo.",
meta:["📕 5 recetas", "💶 Gratis", "🍽 Resultado: sabes usar Claude y entiendes todo lo demás"],
ing:"Ingredientes (todos gratuitos)",
fin:"Ya tienes tu cuenta. Empieza por «Tu primera conversación» y sigue en el orden que quieras.",
R:{key:"libro-empieza",
ing:()=>`<li><b>Claude</b>: tu ayudante. Entiende lo que le pides con palabras normales.</li><li><b>Un correo electrónico</b>: para crear tu cuenta.</li><li><b>Algo real que hacer</b>: aprenderás más con una tarea de verdad que con una prueba.</li>`,
steps:[
{t:"Crea tu cuenta",s:"gratis",b:()=>`<p class="what">Claude es una inteligencia artificial: un programa con el que hablas como con una persona y que te ayuda a escribir, pensar, aprender y crear.</p><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>.</li>
<li>Crea tu cuenta con tu correo o con tu cuenta de Google.</li>
<li>Elige el plan gratuito. No hace falta tarjeta.</li></ol>
${tip("El plan gratuito tiene un límite de mensajes. Si llegas a él, espera unas horas y podrás seguir. Para aprender, es suficiente.")}${ok("ves una caja para escribir que te pregunta en qué puede ayudarte.")}`},
{t:"Llévalo contigo",s:"móvil y ordenador",b:()=>`<p class="what">Tus conversaciones son las mismas en todas partes: empiezas en el móvil y sigues en el ordenador. Este paso es opcional, pero muy cómodo.</p><ol>
<li><b>Móvil:</b> busca «Claude» en la App Store o en Google Play. Comprueba que el autor es <b>Anthropic</b>.</li>
<li><b>Ordenador:</b> descarga la app desde <a href="https://claude.ai/download" target="_blank" rel="noopener">claude.ai/download</a>.</li>
<li>Entra con la misma cuenta.</li></ol>
${ok("ves tus conversaciones en la app, o has decidido usar solo el navegador.")}`}
,
{x:1,t:"Usa Claude con cabeza",s:"Siempre · lo básico",b:()=>`<ol><li>Claude acierta mucho, pero a veces se equivoca y lo dice muy seguro. Con temas de salud, dinero o leyes, contrasta siempre.</li><li>No le des contraseñas, números de tarjeta ni datos privados de otras personas.</li><li>Tú tienes la última palabra en todo lo que publiques o envíes.</li></ol>`}
]},
recetas:[
{s:"primera-conversacion",t:"Tu primera conversación",d:"Háblale como a una persona y consigue algo útil en 5 minutos.",
meta:["👩‍🍳 Muy fácil", "💬 Chat", "🍽 Resultado: tu primera tarea hecha con Claude"],
q:"¿Qué te gustaría probar?",ph:"Cuéntalo con tus palabras. Ejemplo: ayudarme a escribir una carta para mi casero",
fin:"Ya has hablado con Claude. Sigue con «Pide mejor»: con cuatro trucos, sus respuestas mejoran muchísimo.",
def:"escribir",empty:"[escribe aquí lo que quieres probar, arriba]",
apps:{
 escribir:{n:"Escribir y resumir",db:true,d:"escribir un correo difícil y resumir un texto largo"},
 aprender:{n:"Aprender algo",db:true,d:"entender un tema que me cuesta, con ejemplos sencillos y preguntas para comprobar que lo he entendido"},
 organizar:{n:"Organizar mi semana",db:true,d:"organizar mi semana con mis tareas, mis citas y algún rato libre"},
 ideas:{n:"Tener ideas",db:true,d:"darme ideas para un proyecto personal y ayudarme a elegir la mejor"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"El primer mensaje",s:"a probar",b:()=>`<p class="what">No hace falta usar palabras especiales: escribe como hablas.</p>${cb(`Hola, Claude. Es la primera vez que te uso. Quiero que me ayudes a ${D()}.\n\nAntes de empezar, hazme 3 preguntas cortas para entender bien lo que necesito. Después hazlo y explícame qué has hecho.`)}${ok("Claude te ha hecho preguntas y te ha dado un resultado.")}`},
{t:"Pide cambios",s:"a tu gusto",b:()=>`<p class="what">Lo primero que te da Claude es un borrador. Dile qué cambiar, con tus palabras:</p><ul><li>«Más corto».</li><li>«Más cercano, menos formal».</li><li>«Ponlo en una lista».</li><li>«Sin emojis».</li></ul>${tip("Puedes pedir cambios todas las veces que quieras. No se cansa.")}${ok("el resultado está como querías.")}`},
{t:"Comprueba lo importante",s:"con cabeza",b:()=>`${cb("¿Hay algo en tu respuesta de lo que no estés seguro? Dime qué debería comprobar yo.")}${ok("sabes qué partes conviene revisar antes de usarlo.")}`}
]},
{s:"pide-mejor",t:"Pide mejor: el mensaje perfecto",d:"Cuatro ingredientes que hacen que Claude acierte a la primera.",
meta:["👩‍🍳 Fácil", "✍️ Mensajes", "🍽 Resultado: tu plantilla de mensaje para cualquier tarea"],
q:"¿Para qué lo quieres practicar?",ph:"Una tarea real. Ejemplo: preparar una reunión con un cliente nuevo",
fin:"Ya tienes tu plantilla. Guárdala en una nota del móvil: te servirá para casi todo.",
def:"trabajo",empty:"[escribe aquí la tarea, arriba]",
apps:{
 trabajo:{n:"Una tarea del trabajo",db:true,d:"preparar una reunión importante del trabajo"},
 casa:{n:"Algo de casa",db:true,d:"organizar una mudanza"},
 estudios:{n:"Estudios",db:true,d:"preparar un examen"},
 otra:{n:"✏️ Otra tarea",db:true,d:""}
},
steps:[
{t:"Los cuatro ingredientes",s:"la idea",b:()=>`<p class="what">Un buen mensaje tiene cuatro partes. No hace falta que sean largas:</p><ol><li><b>Quién es Claude</b>: «Actúa como un profesor paciente».</li><li><b>Contexto</b>: para quién es, qué sabes ya, qué te preocupa.</li><li><b>La tarea</b>: qué quieres exactamente.</li><li><b>La forma</b>: «en 5 puntos», «en una tabla», «en un correo de 100 palabras».</li></ol>${ok("sabrías decir los cuatro ingredientes.")}`},
{t:"Pruébalo con una tarea real",s:"práctica",b:()=>`${cb(`Actúa como [quién quieres que sea].\n\nContexto: quiero ${D()}. [Para quién es, qué sé ya, qué me preocupa.]\n\nTarea: [qué quieres exactamente].\n\nForma: [cómo lo quieres: lista, tabla, correo, cuánto de largo].`)}${ok("la respuesta encaja mucho mejor que con un mensaje corto.")}`},
{t:"Que Claude mejore tu mensaje",s:"el truco",b:()=>`<p class="what">Si no sabes cómo pedir algo, pídele a Claude que te ayude a pedirlo.</p>${cb("Quiero pedirte esto: [explícalo como te salga]. Antes de hacerlo, escríbeme el mensaje perfecto para pedírtelo, con quién eres, contexto, tarea y forma. Después hazlo.")}${ok("tienes un mensaje bien escrito y su resultado.")}`}
]},
{s:"archivos",t:"Dale tus archivos: PDF, fotos y capturas",d:"Sube un documento, una foto o una captura de pantalla y pregúntale lo que quieras.",
meta:["👩‍🍳 Muy fácil", "📎 Archivos", "🍽 Resultado: un documento entendido en minutos"],
q:"¿Qué quieres subir?",ph:"Di qué archivo tienes. Ejemplo: el contrato del alquiler en PDF",
fin:"Ya sabes darle archivos a Claude. Es una de las cosas que más tiempo ahorra.",
def:"pdf",empty:"[di qué archivo tienes, arriba]",
apps:{
 pdf:{n:"Un documento largo",db:true,d:"un documento largo en PDF"},
 foto:{n:"Una foto",db:true,d:"la foto de un papel, una etiqueta o un menú"},
 captura:{n:"Una captura de pantalla",db:true,d:"una captura de pantalla de un error o de una web que no entiendo"},
 otra:{n:"✏️ Otro archivo",db:true,d:""}
},
steps:[
{t:"Súbelo",s:"el clip",b:()=>`<ol><li>En un chat, pulsa el <b>+</b> o el clip 📎, o arrastra el archivo a la ventana.</li><li>En el móvil también puedes hacer una foto directamente.</li></ol>${tip("⚠️ No subas documentos con contraseñas, datos bancarios o datos personales de otras personas.")}${ok("ves el archivo en el chat.")}`},
{t:"Pregúntale",s:"entenderlo",b:()=>`${cb(`Te he subido ${D()}. Explícamelo con palabras sencillas: de qué trata, qué es lo más importante y si hay algo que debería revisar con cuidado. Cita la parte del documento de la que sacas cada cosa.`)}${ok("entiendes el archivo y sabes dónde está cada cosa.")}`},
{t:"Haz algo con él",s:"usarlo",b:()=>`<p class="what">Ahora que lo entiende, pídele trabajo:</p><ul><li>«Hazme una lista de las fechas y plazos».</li><li>«Escribe una respuesta a este correo».</li><li>«Pasa esta tabla de la foto a una hoja de cálculo».</li></ul>${ok("tienes algo útil hecho a partir de tu archivo.")}`}
]},
{s:"mapa",off:1,t:"El mapa de Claude: seis palabras",d:"Chat, proyecto, conector, Skill, plugin y agente, explicados sin jerga y con su receta.",
meta:["👩‍🍳 Muy fácil", "🗺 Conceptos", "🍽 Resultado: entiendes todo lo que verás en AMRI"],
q:"¿Qué te interesa más?",ph:"Di qué quieres conseguir. Ejemplo: que Claude use mi Gmail",
fin:"Ya conoces el mapa. Elige el siguiente libro según lo que quieras conseguir.",
def:"todo",empty:"[di qué quieres conseguir, arriba]",
apps:{
 todo:{n:"Quiero entenderlo todo",db:true,d:"entender todas las piezas"},
 apps:{n:"Que use mis apps",db:true,d:"que Claude trabaje dentro de mis apps"},
 solo:{n:"Que trabaje solo",db:true,d:"que Claude haga tareas largas por mí"},
 otra:{n:"✏️ Otra cosa",db:true,d:""}
},
steps:[
{t:"Las seis palabras",s:"el mapa",b:()=>`<ul>
<li><b>💬 Chat</b>: una conversación con Claude.</li>
<li><b>📁 Proyecto</b>: una carpeta con tus instrucciones y documentos. Todos los chats de dentro los tienen en cuenta. <a href="asistente-ia.html">Libro: tu asistente personal</a>.</li>
<li><b>🔌 Conector</b>: un permiso para que Claude use otra app por ti, como Gmail, Canva o Notion. Lo quitas cuando quieras. <a href="gmail-calendario.html">Libro: Gmail y Calendar</a>.</li>
<li><b>📖 Skill</b>: una ficha con tu forma de hacer algo. Claude la usa sola cuando toca. <a href="skills-propias.html">Libro: Skills</a>.</li>
<li><b>📦 Plugin</b>: un paquete con varias Skills (y a veces conectores) que se instala de una vez. <a href="../plugin.html">El plugin de AMRI</a>.</li>
<li><b>🤖 Agente</b>: Claude trabajando por su cuenta en una tarea de varios pasos. <a href="primer-agente.html">Libro: tu primer agente</a>.</li></ul>
${ok("sabrías explicar qué es un conector y qué es un agente.")}`},
{t:"Pregúntale a Claude",s:"tu caso",b:()=>`${cb(`Quiero ${D()}. Explícame, sin tecnicismos, cuál de estas piezas necesito (chat, proyecto, conector, Skill, plugin o agente) y por qué.`)}${ok("sabes qué pieza necesitas.")}`},
{t:"Elige tu siguiente libro",s:"¿y ahora?",b:()=>`<ul><li>Que Claude te conozca → <a href="asistente-ia.html">Tu asistente personal</a>.</li><li>Que trabaje en tus apps → <a href="gmail-calendario.html">Gmail y Calendar</a>, <a href="canva-diseno.html">Canva</a> o <a href="notion-cerebro.html">Notion</a>.</li><li>Crear algo para internet → <a href="webapp-gratis.html">Tu web online y gratis</a>.</li><li>Que haga tareas largas → <a href="primer-agente.html">Tu primer agente</a>.</li><li>¿Tienes un proyecto? Cuéntalo en <a href="../index.html#construir">«¿Qué quieres construir?»</a>.</li></ul>${ok("has elegido tu siguiente libro.")}`}
]},
{s:"planes",t:"Dónde usar Claude, planes y privacidad",d:"Web, móvil, escritorio, Chrome y Claude Code; qué es gratis y cómo cuidar tus datos.",
meta:["👩‍🍳 Muy fácil", "⚙️ Ajustes", "🍽 Resultado: Claude configurado a tu gusto"],
q:"¿Qué te preocupa?",ph:"Di tu duda. Ejemplo: si mis conversaciones son privadas",
fin:"Ya sabes dónde usar Claude, qué cuesta y cómo cuidar tu privacidad.",
def:"privacidad",empty:"[escribe tu duda, arriba]",
apps:{
 privacidad:{n:"Mi privacidad",db:true,d:"qué pasa con mis conversaciones"},
 pago:{n:"Si me merece la pena pagar",db:true,d:"si me merece la pena un plan de pago"},
 donde:{n:"Dónde usarlo",db:true,d:"en qué sitio me conviene usar Claude"},
 otra:{n:"✏️ Otra duda",db:true,d:""}
},
steps:[
{t:"Dónde usar Claude",s:"cada sitio",b:()=>`<ul><li><b>Web (claude.ai)</b>: todo lo básico, desde cualquier navegador.</li><li><b>Móvil</b>: chats, fotos y voz.</li><li><b>App de escritorio</b>: además, Cowork y Claude Code, para trabajar con los archivos de tu ordenador.</li><li><b>Claude in Chrome</b>: una extensión con la que Claude usa webs por ti.</li></ul>${ok("sabes dónde te conviene usarlo.")}`},
{t:"Los planes, sin letra pequeña",s:"qué es gratis",b:()=>`<ul><li><b>Gratis</b>: chats, proyectos y la mayoría de libros básicos de AMRI. Tiene un límite de mensajes.</li><li><b>De pago (Pro o superior)</b>: más mensajes y funciones como Claude Code, Cowork o la extensión de Chrome.</li></ul>${tip("Los precios cambian: míralos en <a href=\"https://claude.ai/pricing\" target=\"_blank\" rel=\"noopener\">claude.ai/pricing</a>. Cada tarjeta de AMRI dice si el libro es gratis o depende de tu plan.")}${ok("sabes si te basta el plan gratuito.")}`},
{t:"Tu privacidad",s:"ajustes",b:()=>`<ol><li>En los ajustes de Claude, en <b>Privacidad</b>, decides si tus conversaciones se pueden usar para mejorar Claude.</li><li>Puedes borrar cualquier conversación cuando quieras.</li><li>Regla sencilla: no escribas nada que no pondrías en un correo a alguien de confianza.</li></ol>${ok("has revisado tus ajustes de privacidad.")}`}
]}
]};
