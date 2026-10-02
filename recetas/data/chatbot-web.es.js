(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: un chatbot para tu web",
meta:["⏱ 40 min aprox.", "👩‍🍳 Sin saber programar", "💶 0 € para empezar", "🍽 Resultado: un asistente 24/7 en tu web"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Para qué web es?",
ph:"Describe tu negocio con tus palabras. Ejemplo: una autoescuela en Valencia con clases teóricas y prácticas",
yn:"¿Quieres que recoja los datos de contacto de los visitantes?",
yntip:"Si dudas, elige «Sí»: es útil para no perder clientes. Recuerda avisar en tu web de cómo usas esos datos.",
fin:"Tu web ya tiene un asistente que responde a cualquier hora. Revisa las conversaciones cada semana para mejorarlo. Más abajo tienes dos extras: aprender de las conversaciones y cuidar la privacidad.",
R:{key:"receta-bot",def:"tienda",empty:"[describe aquí tu negocio, arriba]",
apps:{
 tienda:{n:"Tienda online",db:false,d:"una tienda online de ropa: envíos, devoluciones, tallas y métodos de pago"},
 restaurante:{n:"Restaurante / bar",db:true,d:"un restaurante: carta, horarios, alérgenos, reservas y cómo llegar"},
 servicios:{n:"Servicios profesionales",db:true,d:"un despacho de servicios profesionales: qué ofrezco, precios orientativos y cómo pedir cita"},
 academia:{n:"Academia / cursos",db:true,d:"una academia: cursos disponibles, horarios, precios y cómo inscribirse"},
 soporte:{n:"Soporte de producto",db:false,d:"una app: cómo empezar a usarla, preguntas frecuentes y cómo resolver problemas comunes"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el jefe de cocina. Te prepara todo lo que el bot debe saber.</li><li><b>Chatbase</b>: el camarero. Atiende a tus visitantes en la web.</li><li><b>Tu web</b>: el comedor. Donde vive el chat (sirve la de la receta de la webapp).</li>${DB()?`<li><b>Una hoja de contactos</b>: la libreta de reservas. Donde se guardan los datos que deja la gente.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · crear cuentas",b:()=>`<p class="what">Vas a crear dos cuentas gratuitas y tener a mano tu web.</p><h3>Pasos</h3><ol>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Crea tu cuenta en <a href="https://www.chatbase.co" target="_blank" rel="noopener">Chatbase</a> (botón «Sign in with Google»).</li>
<li>Ten a mano la dirección de tu web y, si puedes, acceso a sus archivos (por ejemplo en GitHub).</li></ol>
${tip("¿Aún no tienes web? Haz primero la <a href='webapp-gratis.html'>receta de la webapp</a> y vuelve aquí.")}${ok("has entrado en Claude y en Chatbase.")}`},
{t:"Escribe la chuleta con Claude",s:"10 min · lo que debe saber",b:()=>`<p class="what">Tu bot solo sabe lo que tú le enseñas. Claude te ayuda a escribir una «chuleta» con todo lo importante.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Voy a crear un chatbot para ${D()}.\n\nHazme preguntas, de una en una, para reunir toda la información que el chatbot necesita. Cuando terminemos, escribe un documento de preguntas frecuentes con respuestas claras y cortas, listo para copiar.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Voy a crear un chatbot para…»</b>: tu negocio. Cámbialo por el tuyo.","<b>«De una en una»</b>: así no se te olvida nada.","<b>«Documento de preguntas frecuentes»</b>: el material que subirás a Chatbase."])}
${tip("Incluye lo que te preguntan siempre por teléfono o WhatsApp. Esas son las preguntas de oro.")}${ok("tienes un documento con al menos 15 preguntas y respuestas.")}`},
{t:"Monta el chatbot",s:"5 min · subir la chuleta",b:()=>`<p class="what">Chatbase lee tu chuleta y aprende a responder con ella.</p><h3>Pasos</h3><ol>
<li>En Chatbase pulsa <b>New AI agent</b> (o <b>Create</b>).</li>
<li>Elige <b>Text</b> y pega el documento de Claude.</li>
<li>Si tu web ya tiene información, añade también <b>Website</b> y pega su dirección.</li>
<li>Pulsa <b>Create agent</b> y espera un minuto.</li></ol>${ok("en la ventana de prueba le preguntas algo de tu negocio y responde bien.")}`},
{t:"Dale personalidad",s:"5 min · cómo habla",b:()=>`<p class="what">Le dices cómo debe hablar y, muy importante, qué hacer cuando no sabe algo.</p><h3>Pasos</h3><ol><li>En Chatbase abre <b>Settings → AI</b> (o <b>Instructions</b>).</li><li>Pega estas instrucciones y cambia lo que está entre corchetes:</li></ol>${cb(`Eres el asistente de [nombre del negocio]. Respondes siempre en español, de forma breve, amable y cercana. Usa solo la información que te he dado. Si no sabes algo, dilo con naturalidad y ofrece contactar en [tu correo o teléfono]. Nunca inventes precios, fechas ni condiciones.${DB()?" Cuando alguien muestre interés, pídele amablemente su nombre y su correo para que podamos contactarle.":""}`)}
${tip("La frase «nunca inventes» es la más importante: evita que el bot prometa cosas que no ofreces.")}${ok("le preguntas algo que no está en la chuleta y te remite a tu contacto en vez de inventar.")}`},
{db:1,t:"Apunta los contactos",s:"5 min · no perder clientes",b:()=>`<p class="what">El bot puede pedir el nombre y el correo de quien esté interesado, y tú los recibes.</p><h3>Pasos</h3><ol>
<li>En Chatbase busca la sección <b>Actions</b> o <b>Leads</b> y activa la recogida de contactos.</li>
<li>Elige los campos: <b>nombre</b> y <b>correo</b> (no pidas más de lo necesario).</li>
<li>Revisa los contactos en la sección <b>Activity → Leads</b>.</li></ol>
${tip("⚠️ Si recoges datos personales, añade en tu web una política de privacidad que explique para qué los usas. Pídele a Claude un borrador adaptado a tu caso.")}${ok("haces una prueba, dejas tu correo y aparece en la lista de contactos.")}`},
{t:"Ponlo en la mesa",s:"5 min · instalarlo en tu web",b:()=>`<p class="what">Chatbase te da un pequeño código. Lo pegas en tu web y aparece la burbuja del chat.</p><h3>Pasos</h3><ol>
<li>En Chatbase abre <b>Deploy → Chat widget</b> y copia el código.</li>
<li>Abre tu <code>index.html</code> y pégalo justo antes de <code>&lt;/body&gt;</code>. Si no sabes dónde, pídele a Claude: «pega este código en mi web».</li>
<li>Sube el cambio a GitHub; Cloudflare publicará la web actualizada en 1-2 minutos.</li></ol>
${det("Mi web está en otra plataforma (WordPress, Wix…)",["Busca en Chatbase las instrucciones para tu plataforma.","Suele haber un apartado de «código personalizado» o un plugin."])}${ok("abres tu web y aparece la burbuja del chat en una esquina.")}`},
{t:"Prueba antes de servir",s:"5 min · revisión final",b:()=>`<p class="what">Ponte en la piel de un cliente y pon a prueba al bot.</p><h3>Pasos</h3><ol>
<li>Abre tu web desde el móvil y hazle 5 preguntas típicas.</li>
<li>Hazle una pregunta que no esté en la chuleta: debe remitirte a tu contacto.</li>
<li>Intenta liarlo: «¿me haces un descuento del 90%?». No debe prometer nada.</li></ol>${ok("responde bien las preguntas típicas y no inventa nada.")}`},
{x:1,t:"Aprende de las conversaciones",s:"10 min a la semana · opcional",b:()=>`<p class="what">Tus visitantes te dirán qué les falta. Chatbase guarda todas las conversaciones.</p><ol>
<li>Abre <b>Activity → Chat logs</b>.</li><li>Busca respuestas flojas o preguntas sin respuesta.</li><li>Pídele ayuda a Claude:</li></ol>${cb("Estas son preguntas que mi chatbot no ha sabido responder bien: [pega las preguntas]. Escríbeme respuestas cortas y claras para añadirlas a su chuleta.")}
<ol start="4"><li>Añádelas en Chatbase y pulsa <b>Retrain</b>.</li></ol>`},
{x:1,t:"Cuida la privacidad",s:"Siempre · consejos",b:()=>`<p class="what">Unas reglas sencillas para que el bot sea de confianza.</p><ol>
<li><b>No subas datos privados</b> a la chuleta: ni de clientes ni contraseñas.</li>
<li><b>Avisa de que es un asistente automático</b> en el mensaje de bienvenida.</li>
<li><b>Revisa los límites gratuitos</b> de Chatbase de vez en cuando en su página de precios.</li></ol>
${det("💡 Ideas para mejorar tu bot",["Botones de preguntas sugeridas en la bienvenida.","Los colores y el logo de tu marca en el chat.","Una versión en inglés para visitantes de fuera."])}`}
]}};
