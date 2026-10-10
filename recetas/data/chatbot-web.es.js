(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: un chatbot para tu web",
intro:"Un asistente que responde a tus visitantes a cualquier hora, con tu información y sin inventar. Preparas su «chuleta» una vez con Claude y después: lo montas, lo pones en tu web, recoges contactos y lo mejoras cada semana.",
meta:["📕 5 recetas", "💶 Gratis (con los límites del plan gratuito de Chatbase)", "🍽 Resultado: un asistente 24/7 en tu web"],
ing:"Ingredientes (todos gratuitos)",
fin:"Tu chuleta está lista. Empieza por «Monta tu chatbot».",
R:{key:"libro-chatbot",
ing:()=>`<li><b>Claude</b>: te prepara todo lo que el bot debe saber.</li><li><b>Chatbase</b>: atiende a tus visitantes en la web.</li><li><b>Tu web</b>: donde vive el chat (sirve la del libro <a href="webapp-gratis.html">Tu web online y gratis</a>).</li>`,
steps:[
{t:"Crea tus cuentas",s:"gratis",b:()=>`<ol><li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li><li>Crea tu cuenta en <a href="https://www.chatbase.co" target="_blank" rel="noopener">Chatbase</a> (botón «Sign in with Google»).</li><li>Ten a mano la dirección de tu web.</li></ol>${tip("¿Aún no tienes web? Haz primero «Tu primera web» y vuelve aquí.")}${ok("has entrado en Claude y en Chatbase.")}`},
{t:"Escribe la chuleta con Claude",s:"lo que debe saber",b:()=>`<p class="what">Tu bot solo sabe lo que tú le enseñas. Claude te ayuda a escribir una «chuleta» con todo lo importante.</p>${cb("Voy a crear un chatbot para mi negocio: [descríbelo].\n\nHazme preguntas, de una en una, para reunir toda la información que necesita: qué ofrezco, precios, horarios, condiciones, cómo contactar y lo que me preguntan siempre. Cuando terminemos, escribe un documento de preguntas frecuentes con respuestas claras y cortas, listo para copiar.")}
${tip("Incluye lo que te preguntan siempre por teléfono o WhatsApp. Esas son las preguntas de oro.")}${ok("tienes un documento con al menos 15 preguntas y respuestas.")}`}
,
{x:1,t:"Cuida la privacidad",s:"Siempre · consejos",b:()=>`<ol><li>No subas datos privados a la chuleta: ni de clientes ni contraseñas.</li><li>Avisa de que es un asistente automático en el mensaje de bienvenida.</li><li>Revisa los límites gratuitos de Chatbase de vez en cuando.</li></ol>`}
]},
recetas:[
{s:"montar",t:"Monta tu chatbot",d:"Sube la chuleta, dale personalidad y comprueba que no inventa.",
meta:["👩‍🍳 Fácil", "🤖 Chatbase", "🍽 Resultado: un chatbot que responde bien"],
q:"¿Qué negocio?",ph:"Descríbelo. Ejemplo: una autoescuela en Valencia",
fin:"Tu chatbot responde bien. Sigue con «Ponlo en tu web».",
def:"tienda",empty:"[describe tu negocio, arriba]",
apps:{
 tienda:{n:"Tienda online",db:true,d:"una tienda online: envíos, devoluciones, tallas y métodos de pago"},
 restaurante:{n:"Restaurante",db:true,d:"un restaurante: carta, horarios, alérgenos, reservas y cómo llegar"},
 servicios:{n:"Servicios",db:true,d:"un negocio de servicios: qué ofrezco, precios orientativos y cómo pedir cita"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Sube la chuleta",s:"aprender",b:()=>`<ol><li>En Chatbase pulsa <b>New AI agent</b> (o <b>Create</b>).</li><li>Elige <b>Text</b> y pega la chuleta. Si tu web ya tiene información, añade también <b>Website</b>.</li><li>Pulsa <b>Create agent</b> y espera un minuto.</li></ol>${ok("en la ventana de prueba responde bien a una pregunta de tu negocio.")}`},
{t:"Dale personalidad",s:"cómo habla",b:()=>`<p class="what">En Chatbase abre <b>Settings → AI</b> (o <b>Instructions</b>) y pega, cambiando lo que está entre corchetes:</p>${cb(`Eres el asistente de [nombre], ${D()}. Respondes siempre en español, de forma breve, amable y cercana. Usa solo la información que te he dado. Si no sabes algo, dilo con naturalidad y ofrece contactar en [tu correo o teléfono]. Nunca inventes precios, fechas ni condiciones.`)}${tip("«Nunca inventes» es la frase más importante.")}${ok("le preguntas algo que no está en la chuleta y te remite a tu contacto.")}`},
{t:"Intenta liarlo",s:"prueba de fuego",b:()=>`<ul><li>«¿Me haces un descuento del 90%?» → no debe prometer nada.</li><li>«¿Abrís el día de Navidad?» (si no está en la chuleta) → debe remitirte a tu contacto.</li></ul>${tip("Para una protección más fuerte, mira el libro <a href=\"jev-decisiones--chatbot.html\">Guardián para el chatbot de tu web</a>.")}${ok("no promete ni inventa nada.")}`}
]},
{s:"en-tu-web",t:"Ponlo en tu web",d:"Pega un pequeño código y aparece la burbuja del chat.",
meta:["👩‍🍳 Fácil", "🌐 Web", "🍽 Resultado: el chat en tu web"],
q:"¿Dónde está tu web?",ph:"Di dónde. Ejemplo: la hice con el libro de AMRI y está en GitHub",
fin:"Tu web ya tiene asistente.",
def:"amri",empty:"[di dónde está tu web, arriba]",
apps:{
 amri:{n:"Hecha con AMRI (GitHub)",db:true,d:"mi web, que está en GitHub y publicada en Cloudflare"},
 plataforma:{n:"WordPress, Wix u otra",db:false,d:"mi web, hecha con otra plataforma"}
},
steps:[
{t:"Copia el código",s:"Chatbase",b:()=>`<ol><li>En Chatbase abre <b>Deploy → Chat widget</b> y copia el código.</li></ol>${ok("tienes el código copiado.")}`},
{t:"Pégalo",s:"instalar",b:()=>`${DB()?`<ol><li>Pide a Claude: «Pega este código en mi web, justo antes de &lt;/body&gt;, y súbelo a mi repositorio» (o hazlo a mano en <code>index.html</code>).</li><li>Cloudflare publica el cambio en 1-2 minutos.</li></ol>`:`<ol><li>Busca en Chatbase las instrucciones para tu plataforma.</li><li>Suele haber un apartado de «código personalizado» o un plugin.</li></ol>`}${ok("abres tu web y aparece la burbuja del chat.")}`}
]},
{s:"contactos",t:"Recoge los contactos de interesados",d:"El bot pide nombre y correo a quien está interesado, y tú los recibes.",
meta:["👩‍🍳 Fácil", "📇 Contactos", "🍽 Resultado: contactos de clientes potenciales"],
q:"¿Qué datos necesitas?",ph:"Di cuáles. Ejemplo: nombre y teléfono para llamar",
fin:"Ya no pierdes clientes. Responde pronto a cada contacto.",
def:"correo",empty:"[di qué datos necesitas, arriba]",
apps:{
 correo:{n:"Nombre y correo",db:true,d:"nombre y correo"},
 telefono:{n:"Nombre y teléfono",db:true,d:"nombre y teléfono"},
 otra:{n:"✏️ Otros",db:true,d:""}
},
steps:[
{t:"Actívalo",s:"Chatbase",b:()=>`<ol><li>En Chatbase busca <b>Actions</b> o <b>Leads</b> y activa la recogida de contactos.</li><li>Pide solo ${D()}: no más de lo necesario.</li><li>Añade a las instrucciones: «Cuando alguien muestre interés, pídele amablemente sus datos para que podamos contactarle».</li></ol>${ok("está activado.")}`},
{t:"Privacidad",s:"obligatorio",b:()=>`${cb("Escríbeme un texto corto de privacidad para mi web: qué datos recoge el chatbot, para qué, cuánto tiempo los guardo y cómo pedir que se borren.")}${tip("⚠️ Si recoges datos personales, tu web necesita una política de privacidad. Para dudas legales, consulta con un profesional.")}${ok("haces una prueba, dejas tus datos y aparecen en <b>Activity → Leads</b>.")}`}
]},
{s:"mejorar",t:"Mejóralo cada semana",d:"Lee las conversaciones, encuentra lo que falta y añádelo a la chuleta.",
meta:["👩‍🍳 Muy fácil", "🔁 Rutina", "🍽 Resultado: un bot que responde mejor cada semana"],
q:"¿Qué falla?",ph:"Di qué. Ejemplo: no sabe responder sobre envíos internacionales",
fin:"Tu bot ha aprendido. Repite cada semana.",
def:"semana",empty:"[di qué falla, arriba]",
apps:{
 semana:{n:"Revisión semanal",db:true,d:"la revisión de esta semana"},
 otra:{n:"✏️ Un fallo concreto",db:true,d:""}
},
steps:[
{t:"Lee las conversaciones",s:"aprender",b:()=>`<ol><li>En Chatbase abre <b>Activity → Chat logs</b>.</li><li>Copia las preguntas con respuestas flojas o sin respuesta.</li></ol>${ok("tienes las preguntas a mejorar.")}`},
{t:"Respuestas nuevas",s:"Claude escribe",b:()=>`${cb("Estas son preguntas que mi chatbot no ha sabido responder bien: [pégalas]. Escríbeme respuestas cortas y claras para añadirlas a su chuleta. Si te falta información, pregúntame.")}<ol><li>Añádelas en Chatbase y pulsa <b>Retrain</b>.</li></ol>${ok("el bot responde bien esas preguntas.")}`}
]},
{s:"bienvenida",off:1,t:"Bienvenida y preguntas sugeridas",d:"Un saludo claro, botones con las preguntas típicas y los colores de tu marca.",
meta:["👩‍🍳 Muy fácil", "🎨 Aspecto", "🍽 Resultado: un chat que invita a preguntar"],
q:"¿Qué tono?",ph:"Di cómo. Ejemplo: cercano y con un poco de humor",
fin:"Tu chat invita a preguntar.",
def:"cercano",empty:"[di qué tono, arriba]",
apps:{
 cercano:{n:"Cercano",db:true,d:"cercano"},
 formal:{n:"Formal",db:true,d:"formal"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El saludo y las sugerencias",s:"Claude escribe",b:()=>`${cb(`Escribe un mensaje de bienvenida para mi chatbot con tono ${D()}, que diga que es un asistente automático, y 4 preguntas sugeridas cortas con lo que más me preguntan.`)}${ok("tienes el saludo y las preguntas.")}`},
{t:"Ponlo en Chatbase",s:"ajustes",b:()=>`<ol><li>En los ajustes del chat (<b>Chat interface</b> o similar), pega el saludo y las preguntas sugeridas.</li><li>Pon tus colores y tu logo.</li></ol>${ok("el chat se ve con tu marca y sus sugerencias.")}`}
]}
]};
