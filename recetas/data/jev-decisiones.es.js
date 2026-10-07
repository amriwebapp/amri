(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: decisiones automáticas con Jev",
intro:"Jev decide en milisegundos, te dice cuánta confianza tiene y te pasa lo dudoso. Consigue tu llave y prepara Claude Code una vez; después monta el clasificador que necesites: mensajes, urgencias, contactos, reseñas o comentarios.",
meta:["📕 5 recetas","⏱ 30-40 min cada una","💶 Jev es de pago por uso y está en acceso anticipado","🍽 Resultado: decisiones automáticas con una persona al mando"],
ing:"Ingredientes",
fin:"Tu cocina está lista. Elige qué quieres que Jev decida.",
R:{key:"libro-jev",
ing:()=>`<li><b>Jev</b>, de TypeSafe AI: el catador. Mira un texto y decide en milisegundos, diciendo cuánta seguridad tiene.</li><li><b>Claude Code</b>: el jefe de cocina. Escribe y ejecuta el código por ti en tu ordenador.</li><li><b>La skill de TypeSafe</b>: el manual de Jev para Claude Code, gratis.</li><li><b>Unos ejemplos reales</b>: 20 o 30 casos como los que quieres clasificar (sin datos personales).</li>${DB()?`<li><b>Cloudflare</b> (gratis): para poner tu clasificador en internet.</li>`:""}`,
steps:[
{t:"Conoce el ingrediente: qué es Jev",s:"5 min · entenderlo",b:()=>`<p class="what"><b>Jev</b> es el primer modelo «System One» de TypeSafe AI. No escribe textos ni charla: <b>decide</b>. Le das un texto y unas preguntas, y en 70–500 milisegundos te devuelve una respuesta con su <b>probabilidad</b> y su <b>confianza</b>.</p>
${det("Las tres preguntas que sabe responder",["<b>Choice</b> (elegir): ¿cuál de estas opciones? Por ejemplo, presupuesto, soporte o factura.","<b>Score</b> (puntuar): ¿cuánto, en una escala? Por ejemplo, de 0 a 10.","<b>Noul</b> (sí o no): ¿se cumple esto? Por ejemplo, «el mensaje es urgente»."])}
${det("¿Por qué no usar Claude para esto?",["Claude piensa y escribe: es ideal para responder, redactar o razonar.","Jev decide rápido y barato, y te dice cuánta seguridad tiene. Es ideal para miles de decisiones pequeñas.","Juntos: Jev reparte el trabajo y Claude se encarga de lo que necesita pensar."])}
${tip("Piensa en Jev como el catador de la cocina: prueba y dice «sí» o «no» al momento. El chef sigue siendo Claude.")}${ok("sabes explicar con tus palabras si tu decisión es elegir, puntuar o sí/no.")}`},
{t:"Consigue tu llave",s:"5 min · acceso anticipado",b:()=>`<p class="what">Jev está en <b>acceso anticipado</b> desde septiembre de 2026: puede que tengas que apuntarte a la lista de espera.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://typesafe.ai" target="_blank" rel="noopener">typesafe.ai</a> y pide acceso.</li>
<li>Cuando lo tengas, ve a <a href="https://console.typesafe.ai/keys" target="_blank" rel="noopener">console.typesafe.ai/keys</a> y crea una <b>API key</b> (tu llave).</li>
<li>Cópiala y guárdala de momento en un lugar seguro, como tu gestor de contraseñas.</li></ol>
${det("¿Cuánto cuesta?",["Pagas por el texto que le envías: unos <b>0,042 $ por millón de tokens</b>. Las respuestas no se cobran.","Ejemplo: 1.000 mensajes de 500 palabras son unos 650.000 tokens, menos de 3 céntimos.","No se menciona un plan gratuito. Revisa el precio actual en su web antes de empezar."])}
${tip("Una API key es como la llave de tu casa: quien la tenga puede gastar a tu nombre. Nunca la pegues en un chat, en un correo ni en GitHub.")}${ok("tienes tu API key guardada en un lugar seguro.")}`},
{t:"Prepara la cocina",s:"5 min · carpeta y llave",b:()=>`<p class="what">Vas a crear una carpeta para el proyecto y guardar la llave en un archivo que nunca se sube a internet.</p><h3>Pasos</h3><ol>
<li>Crea una carpeta llamada <code>mi-jev</code> y ábrela en <b>Claude Code</b>.</li>
<li>Pega esto:</li></ol>${cb("Crea en esta carpeta un archivo .env con la línea TYPESAFE_API_KEY= (vacía) y un .gitignore que excluya .env. No me pidas la llave: la pegaré yo a mano.")}
<ol start="3"><li>Abre <code>.env</code> con un editor de texto, pega tu llave después del <code>=</code> y guarda.</li></ol>
${tip("El punto delante de .env hace que el archivo esté oculto. En Mac, pulsa Cmd + Mayús + . en el Finder para verlo.")}${ok("el archivo .env tiene tu llave y .gitignore lo excluye.")}`},
{t:"Dale a Claude Code el manual de Jev",s:"2 min · la skill de TypeSafe",b:()=>`<p class="what">TypeSafe publica una <b>skill</b> gratuita: un manual que enseña a Claude Code a usar Jev correctamente. Así no tiene que adivinar.</p><ol><li>En Claude Code, pega:</li></ol>${cb("/plugin marketplace add typesafe-ai/skills")}${cb("/plugin install typesafe@typesafe-ai")}
<ol start="2"><li>Reinicia Claude Code si te lo pide.</li></ol>
${tip("Si prefieres la terminal: claude plugin marketplace add typesafe-ai/skills y después claude plugin install typesafe@typesafe-ai.")}${ok("al escribir /plugin ves «typesafe» entre tus plugins instalados.")}`},
{x:1,t:"Jev y Claude, el mejor equipo",s:"Opcional · ahorrar y responder mejor",b:()=>`<p class="what">Un patrón muy útil: Jev clasifica cada mensaje al instante y solo los que necesitan pensar llegan a Claude, que redacta la respuesta.</p>${cb("Amplía el programa: si Jev decide que el mensaje es [tipo], pásalo a Claude con mis instrucciones para que redacte un borrador de respuesta. Los demás, solo clasifícalos. Guarda los borradores para que yo los revise antes de enviarlos.")}`},
{x:1,t:"Úsalo con responsabilidad",s:"Siempre · consejos",b:()=>`<p class="what">Decidir rápido no es lo mismo que decidir bien. Unas reglas sencillas:</p><ol>
<li><b>Decisiones que afectan a personas</b> (contratar, conceder un préstamo, sancionar): siempre con revisión humana.</li>
<li><b>Datos personales</b>: envía solo lo necesario y cumple la protección de datos (RGPD en Europa).</li>
<li><b>Guarda un registro</b> de las decisiones para poder revisarlas y corregirlas.</li>
<li><b>Sé transparente</b>: si un sistema automático decide algo, dilo.</li></ol>`}
]},
recetas:[
{s:"mensajes",t:"Clasifica los mensajes de tu formulario",d:"Presupuesto, soporte, factura o spam, en milisegundos, y lo dudoso para ti.",
meta:["⏱ 35 min","👩‍🍳 Media","📨 Mensajes","🍽 Resultado: tus mensajes clasificados automáticamente"],
q:"¿Qué categorías necesitas?",ph:"Escríbelas. Ejemplo: presupuesto, soporte, factura, spam",
fin:"Tus mensajes llegan ya clasificados. Revisa revisar.csv cada día unos minutos.",
def:"correo",empty:"[escribe tus categorías, arriba]",
apps:{correo:{n:"Formulario de contacto",db:true,d:"clasificar los mensajes de mi formulario de contacto en: presupuesto, soporte, factura o spam"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Escribe los criterios",s:"10 min · tu conocimiento",b:()=>`<p class="what">Jev decide comparando cada mensaje con la descripción de cada opción. Escríbelas como se las explicarías a una persona nueva.</p>${cb(`Quiero ${D()}. Ayúdame a escribir un criterio de una o dos frases para cada categoría, con lo que SÍ es y lo que NO es. Ejemplo: «soporte: el cliente tiene un problema con algo que ya ha comprado; no incluye preguntas de precio».`)}${ok("tienes un criterio claro para cada categoría.")}`},
{t:"Cocina el clasificador",s:"10 min · Claude Code",b:()=>`<p class="what">En Claude Code, en tu carpeta con el archivo <code>.env</code>, pega:</p>${cb("Usa la skill de TypeSafe. Crea un programa en Python que use una pregunta Choice de Jev con estas categorías y criterios: [pega tus criterios]. Lee la llave de TYPESAFE_API_KEY en .env. Crea ejemplos.csv con 20 mensajes realistas, incluidos algunos difíciles (un cliente enfadado que también pide factura, spam que parece presupuesto). Ejecútalo y guarda en resultados.csv: mensaje, categoría, probabilidades y confianza. Explícame cada paso antes de ejecutarlo.")}${ok("existe resultados.csv con una decisión por mensaje.")}`},
{t:"Prueba y ajusta los criterios",s:"10 min · probar",b:()=>`${cb("Muéstrame resultados.csv ordenado de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribirlo. No cambies el código, solo los criterios.")}${ok("estás de acuerdo con Jev en casi todos los casos con confianza alta.")}`},
{t:"Lo dudoso, para ti",s:"5 min · umbral",b:()=>`${cb("Añade un umbral de confianza de 0,85: por encima, aplica la categoría; por debajo, guarda el mensaje en revisar.csv con la categoría propuesta. Dime qué porcentaje se decide solo.")}${tip("Empieza con un umbral alto y bájalo poco a poco cuando veas que acierta.")}${ok("los dudosos van a revisar.csv.")}`},
{db:1,t:"Conéctalo a tu formulario",s:"10 min · servirlo",b:()=>`${cb("Convierte el clasificador en un Cloudflare Worker que reciba el mensaje del formulario por POST y devuelva la categoría, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Explícame cómo conectarlo a mi formulario.")}${ok("al enviar un mensaje de prueba desde tu formulario, recibes la categoría en menos de un segundo.")}`}
]},
{s:"urgencias",t:"Prioriza incidencias",d:"Urgente, normal o puede esperar, para atender primero lo que importa.",
meta:["⏱ 35 min","👩‍🍳 Media","🚨 Incidencias","🍽 Resultado: incidencias ordenadas por prioridad"],
q:"¿Qué incidencias recibes?",ph:"Describe tu caso. Ejemplo: avisos de clientes de mi app de reservas",
fin:"Tus incidencias llegan ordenadas. Lo urgente, lo primero.",
def:"urgencia",empty:"[describe tus incidencias, arriba]",
apps:{urgencia:{n:"Urgente, normal o espera",db:true,d:"decidir si una incidencia de un cliente es urgente, normal o puede esperar"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Define qué es urgente",s:"10 min · tu criterio",b:()=>`${cb(`Quiero ${D()}. Hazme preguntas para definir qué es urgente en mi negocio (dinero perdido, clientes bloqueados, datos en riesgo…) y escribe un criterio de dos frases para cada nivel, con ejemplos.`)}${tip("Si todo es urgente, nada lo es. Que «urgente» sea de verdad excepcional.")}${ok("tienes los tres criterios.")}`},
{t:"Cocina el priorizador",s:"10 min · Claude Code",b:()=>`${cb("Usa la skill de TypeSafe. Crea un programa en Python con una pregunta Choice de Jev con los niveles urgente, normal y puede esperar, y estos criterios: [pégalos]. Llave en TYPESAFE_API_KEY (.env). Crea ejemplos.csv con 20 incidencias realistas (algunas que parecen urgentes y no lo son). Guarda resultados.csv con nivel, probabilidades y confianza.")}${ok("existe resultados.csv.")}`},
{t:"El error que no te puedes permitir",s:"10 min · probar",b:()=>`<p class="what">Aquí el peor error es marcar como «puede esperar» algo urgente.</p>${cb("Busca en resultados.csv incidencias urgentes que Jev haya puesto en otro nivel. Ajusta los criterios para que eso no pase, aunque marque alguna normal como urgente.")}${ok("ninguna incidencia urgente queda abajo.")}`},
{t:"Lo dudoso, para ti",s:"5 min · umbral",b:()=>`${cb("Si la confianza es menor de 0,9 o si duda entre urgente y otro nivel, trátala como urgente y guárdala en revisar.csv.")}${ok("ante la duda, sube de prioridad.")}`},
{db:1,t:"Avisa al equipo",s:"10 min · servirlo",b:()=>`${cb("Convierte el priorizador en un Cloudflare Worker (llave como secreto) y, cuando una incidencia sea urgente, envía un aviso a mi canal de Slack con un webhook guardado como secreto. Explícame cómo conectarlo.")}${ok("una incidencia urgente de prueba avisa en Slack.")}`}
]},
{s:"contactos",t:"Puntúa tus contactos",d:"La probabilidad de que un contacto se convierta en cliente, de 0 a 10, para llamar primero a los mejores.",
meta:["⏱ 35 min","👩‍🍳 Media","🎯 Contactos","🍽 Resultado: tus contactos ordenados por interés"],
q:"¿Qué es un buen contacto para ti?",ph:"Descríbelo. Ejemplo: empresa de más de 10 personas que pide demo y tiene presupuesto",
fin:"Ya sabes a quién llamar primero.",
def:"leads",empty:"[describe un buen contacto, arriba]",
apps:{leads:{n:"Del formulario",db:true,d:"puntuar de 0 a 10 la probabilidad de que un contacto del formulario se convierta en cliente"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Tu cliente ideal",s:"10 min · el criterio",b:()=>`${cb(`Quiero ${D()}. Ayúdame a describir mi cliente ideal y las señales que suben o bajan la puntuación (tamaño, urgencia, presupuesto, cómo escribe). Hazlo en un criterio de 5 líneas.`)}${ok("tienes el criterio de tu cliente ideal.")}`},
{t:"Cocina el puntuador",s:"10 min · Claude Code",b:()=>`${cb("Usa la skill de TypeSafe. Crea un programa en Python con una pregunta Score de Jev (0 a 10) y este criterio: [pégalo]. Llave en TYPESAFE_API_KEY (.env). Usa contactos.csv (te paso uno sin datos personales, o inventa 20 realistas). Guarda resultados.csv ordenado de mayor a menor puntuación, con la confianza.")}${ok("tienes tus contactos ordenados.")}`},
{t:"Compara con tu intuición",s:"10 min · probar",b:()=>`<p class="what">Mira los 5 primeros y los 5 últimos. ¿Tú los ordenarías igual?</p>${cb("Estos contactos los pondría yo más arriba: [cuáles]. Ajusta el criterio para reflejarlo, sin cambiar el código.")}${ok("el orden se parece al tuyo.")}`},
{db:1,t:"Que se puntúen solos",s:"10 min · servirlo",b:()=>`${cb("Convierte el puntuador en un Cloudflare Worker (llave como secreto) que reciba cada contacto nuevo del formulario, lo puntúe y lo añada a mi hoja de Google Sheets con su puntuación. Explícame los pasos.")}${tip("⚠️ La puntuación ayuda a ordenar, no a descartar a nadie. Contesta a todos.")}${ok("un contacto de prueba aparece en tu hoja con su puntuación.")}`}
]},
{s:"resenas",t:"Lee tus reseñas",d:"Positiva, negativa o mixta, y si necesita una respuesta tuya.",
meta:["⏱ 30 min","👩‍🍳 Media","⭐ Reseñas","🍽 Resultado: tus reseñas clasificadas y las que necesitan respuesta"],
q:"¿De dónde salen tus reseñas?",ph:"Di de dónde. Ejemplo: Google Maps de mi restaurante",
fin:"Ya sabes qué reseñas responder primero. Las respuestas, escríbelas tú (o con Claude) y revísalas.",
def:"resenas",empty:"[di de dónde salen, arriba]",
apps:{resenas:{n:"Reseñas de clientes",db:true,d:"decidir si una reseña es positiva, negativa o mixta, y si necesita una respuesta mía"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Reúne tus reseñas",s:"5 min · los datos",b:()=>`<p class="what">Copia tus últimas reseñas (texto y estrellas) en <code>resenas.csv</code>, sin nombres de clientes.</p>${ok("tienes resenas.csv.")}`},
{t:"Cocina el lector",s:"10 min · Claude Code",b:()=>`${cb(`Usa la skill de TypeSafe. Quiero ${D()}. Crea un programa en Python con dos preguntas a Jev por reseña: una Choice (positiva, negativa, mixta) y una Noul («¿necesita una respuesta del dueño? Sí si hay una queja concreta, una pregunta o un malentendido»). Llave en TYPESAFE_API_KEY (.env). Lee resenas.csv y guarda resultados.csv con las dos decisiones y su confianza.`)}${ok("existe resultados.csv.")}`},
{t:"Revisa las mixtas",s:"10 min · probar",b:()=>`${cb("Muéstrame las reseñas mixtas y las que necesitan respuesta, de menor a mayor confianza. ¿Hay alguna mal clasificada? Propón cómo afinar las preguntas.")}${ok("estás de acuerdo con la clasificación.")}`},
{t:"Respuestas con Claude",s:"5 min · responder",b:()=>`${cb("Para las reseñas que necesitan respuesta, escribe un borrador corto y amable para cada una, sin prometer nada que no pueda cumplir. No publiques nada.")}${ok("tienes borradores para revisar y publicar tú.")}`}
]},
{s:"comentarios",t:"Modera comentarios",d:"Si un comentario se publica directamente o lo revisas tú antes.",
meta:["⏱ 30 min","👩‍🍳 Media","💬 Moderación","🍽 Resultado: comentarios moderados con tu supervisión"],
q:"¿Dónde recibes comentarios?",ph:"Di dónde. Ejemplo: el blog de mi web",
fin:"Tus comentarios se moderan solos y lo dudoso lo decides tú.",
def:"moderar",empty:"[di dónde, arriba]",
apps:{moderar:{n:"Comentarios de mi web",db:true,d:"decidir si un comentario de mi web se publica directamente o lo reviso yo antes"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Tus normas",s:"10 min · el criterio",b:()=>`${cb(`Quiero ${D()}. Ayúdame a escribir mis normas de comentarios en 5 puntos (respeto, spam, enlaces, datos personales, temas fuera de lugar) y convierte la decisión en una pregunta de sí o no: «¿Se puede publicar sin revisar?».`)}${ok("tienes tus normas y la pregunta.")}`},
{t:"Cocina el moderador",s:"10 min · Claude Code",b:()=>`${cb("Usa la skill de TypeSafe. Crea un programa en Python con una pregunta Noul de Jev: «¿Se puede publicar sin revisar según estas normas? [pega tus normas]». Llave en TYPESAFE_API_KEY (.env). Crea comentarios.csv con 20 ejemplos (normales, críticos pero respetuosos, spam, insultos). Guarda resultados.csv con la decisión y la confianza.")}${tip("Una crítica respetuosa no es motivo para ocultar un comentario. Asegúrate de que tus normas lo dicen.")}${ok("existe resultados.csv.")}`},
{t:"Prueba los dos errores",s:"10 min · probar",b:()=>`${cb("Muéstrame los comentarios que se publicarían y no deberían, y los que se frenarían siendo correctos. Ajusta las normas para corregir ambos.")}${ok("no se cuela spam ni se frenan críticas respetuosas.")}`},
{db:1,t:"Conéctalo a tu web",s:"10 min · servirlo",b:()=>`${cb("Convierte el moderador en un Cloudflare Worker (llave como secreto) que reciba cada comentario nuevo y devuelva publicar o revisar. Si la confianza es baja, que siempre sea revisar. Explícame cómo conectarlo a mi web.")}${ok("un comentario de prueba queda publicado o en revisión según tus normas.")}`}
]}
]};
