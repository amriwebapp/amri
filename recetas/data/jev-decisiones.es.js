(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: decisiones automáticas con Jev",
meta:["⏱ 50 min aprox.", "👩‍🍳 Sin saber programar: Claude Code escribe el código", "💶 Jev es de pago por uso y está en acceso anticipado", "🍽 Resultado: un clasificador que decide en milisegundos y te avisa cuando duda"],
ing:"Ingredientes",
q:"¿Qué decisión quieres automatizar?",
ph:"Describe qué tiene que decidir y entre qué opciones. Ejemplo: decidir si un mensaje de mi web es una reserva, una duda o una queja",
yn:"¿Quieres conectarlo a tu web o a tus apps?",
yntip:"Si eliges «Sí», el último paso convierte el clasificador en un servicio al que tu formulario o tus apps pueden enviar mensajes. Si no, lo usarás sobre una hoja de cálculo cuando quieras.",
fin:"Ya tienes un clasificador con Jev que decide en milisegundos, te dice cuánta confianza tiene y te pasa a ti los casos dudosos. Revísalo cada mes con casos nuevos: tus criterios mejoran con el uso.",
R:{key:"receta-jev",def:"correo",empty:"[cuenta aquí la decisión, arriba]",
apps:{
 correo:{n:"Clasificar mensajes",db:true,d:"clasificar los mensajes de mi formulario de contacto en: presupuesto, soporte, factura o spam"},
 urgencia:{n:"Prioridad de incidencias",db:true,d:"decidir si una incidencia de un cliente es urgente, normal o puede esperar"},
 leads:{n:"Puntuar contactos",db:true,d:"puntuar de 0 a 10 la probabilidad de que un contacto del formulario se convierta en cliente"},
 resenas:{n:"Reseñas",db:false,d:"decidir si una reseña es positiva, negativa o mixta, y si necesita una respuesta mía"},
 moderar:{n:"Moderar comentarios",db:true,d:"decidir si un comentario de mi web se publica directamente o lo reviso yo antes"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
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
{t:"Cocina tu clasificador",s:"10 min · el plato principal",b:()=>`<p class="what">Ahora Claude Code escribe un pequeño programa que envía cada caso a Jev y guarda su decisión.</p>${cb(`Usa la skill de TypeSafe. Quiero un pequeño programa en Python que use Jev para ${D()}.\n\n- Lee la llave de TYPESAFE_API_KEY desde .env.\n- Elige la pregunta adecuada (Choice, Score o Noul) y explícame por qué.\n- Escribe criterios claros para cada opción, como se los explicarías a una persona nueva.\n- Crea ejemplos.csv con 20 casos inventados pero realistas, incluidos algunos difíciles.\n- Ejecútalo y guarda en resultados.csv: el caso, la decisión, las probabilidades y la confianza.\n\nExplícame cada paso antes de ejecutarlo.`)}
${det("¿Qué son los «criterios»?",["Son las descripciones de cada opción. Jev decide comparando el texto con ellas.","Ejemplo: «soporte: el cliente tiene un problema técnico con algo que ya ha comprado».","Unos criterios claros importan más que el código: es donde está tu conocimiento."])}${ok("existe resultados.csv con una decisión y una confianza para cada ejemplo.")}`},
{t:"Prueba y lee la confianza",s:"10 min · probar antes de servir",b:()=>`<p class="what">Antes de fiarte, compara lo que decide Jev con lo que decidirías tú.</p>${cb("Muéstrame resultados.csv como tabla, ordenada de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribir los criterios. No cambies el código, solo los criterios.")}
<ol><li>Marca los casos en los que no estás de acuerdo.</li><li>Pide a Claude Code que ajuste los criterios y vuelva a ejecutarlo.</li><li>Añade a <code>ejemplos.csv</code> casos reales (sin nombres ni datos personales).</li></ol>
${tip("Fíjate en la confianza: una decisión correcta con poca confianza te dice que los criterios aún no están claros.")}${ok("estás de acuerdo con Jev en casi todos los casos con confianza alta.")}`},
{t:"Si duda, que te pregunte",s:"5 min · una persona al mando",b:()=>`<p class="what">El truco profesional: Jev decide solo cuando está seguro y te pasa a ti los casos dudosos. Así automatizas la mayoría sin arriesgarte con el resto.</p>${cb("Añade un umbral de confianza de 0,8. Si la confianza es mayor, aplica la decisión. Si es menor, guarda el caso en revisar.csv con la decisión propuesta para que yo lo revise. Al final, dime qué porcentaje se ha decidido solo y cuántos quedan para mí.")}
${tip("Empieza con un umbral alto (0,9) y bájalo poco a poco cuando veas que acierta. Mejor revisar de más al principio.")}${ok("los casos dudosos llegan a revisar.csv y el resto se decide solo.")}`},
{db:1,t:"Conéctalo a tu web o tus apps",s:"10 min · servirlo",b:()=>`<p class="what">Convierte el clasificador en un servicio en internet al que tu formulario o tus apps envían cada mensaje nuevo.</p>${cb("Convierte el clasificador en un Cloudflare Worker que reciba un texto por POST y devuelva la decisión, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Añade una clave propia para que solo mi web pueda llamarlo y explícame cómo conectarlo a mi formulario.")}
${tip("¿Quieres un aviso cuando algo necesite revisión? Con la receta «Claude en tu Slack» puedes enviar los casos dudosos a un canal.")}${ok("al enviar un mensaje de prueba desde tu formulario, recibes la decisión en menos de un segundo.")}`},
{x:1,t:"Jev y Claude, el mejor equipo",s:"Opcional · ahorrar y responder mejor",b:()=>`<p class="what">Un patrón muy útil: Jev clasifica cada mensaje al instante y solo los que necesitan pensar llegan a Claude, que redacta la respuesta.</p>${cb("Amplía el programa: si Jev decide que el mensaje es [tipo], pásalo a Claude con mis instrucciones para que redacte un borrador de respuesta. Los demás, solo clasifícalos. Guarda los borradores para que yo los revise antes de enviarlos.")}`},
{x:1,t:"Úsalo con responsabilidad",s:"Siempre · consejos",b:()=>`<p class="what">Decidir rápido no es lo mismo que decidir bien. Unas reglas sencillas:</p><ol>
<li><b>Decisiones que afectan a personas</b> (contratar, conceder un préstamo, sancionar): siempre con revisión humana.</li>
<li><b>Datos personales</b>: envía solo lo necesario y cumple la protección de datos (RGPD en Europa).</li>
<li><b>Guarda un registro</b> de las decisiones para poder revisarlas y corregirlas.</li>
<li><b>Sé transparente</b>: si un sistema automático decide algo, dilo.</li></ol>`}
]}};
