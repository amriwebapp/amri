(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: tu secretaría con Gmail y Google Calendar",
meta:["⏱ 25 min aprox.", "👩‍🍳 Fácil", "💶 Gratis si tu plan de Claude incluye conectores", "🍽 Resultado: un resumen de tu día en 1 minuto"],
ing:"Ingredientes",
q:"¿Qué te quita más tiempo?",
ph:"Describe tu caso. Ejemplo: tengo 80 correos al día de proveedores y siempre se me pasan los importantes",
yn:"¿Quieres que prepare borradores de respuesta?",
yntip:"Claude nunca debe enviar nada por ti en esta receta: solo prepara borradores que tú revisas.",
fin:"Tu secretaría ya está en marcha. Cada mañana, un mensaje y sabes qué importa. Más abajo tienes extras sobre privacidad e ideas.",
R:{key:"receta-gmail",def:"manana",empty:"[describe aquí tu caso, arriba]",
apps:{
 manana:{n:"Resumen de la mañana",db:false,d:"un resumen cada mañana de lo urgente en mi correo y de mi agenda del día"},
 respuestas:{n:"Responder correos",db:true,d:"responder más rápido los correos que se repiten, con mi tono"},
 reuniones:{n:"Preparar reuniones",db:false,d:"llegar preparado a cada reunión: quién viene, de qué hablamos la última vez y qué decidir"},
 semana:{n:"Planificar la semana",db:true,d:"planificar mi semana: encontrar huecos, agrupar reuniones y proteger tiempo para concentrarme"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: tu secretaría. Lee, resume y propone.</li><li><b>Gmail y Google Calendar</b>: tu correo y tu agenda.</li><li><b>Conectores de Gmail y Google Calendar</b>: el pase de acceso. Tú decides qué permisos das.</li><li><b>Un proyecto en Claude</b>: la libreta de instrucciones, para no repetirte.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"2 min · cuentas",b:()=>`<p class="what">Necesitas tu cuenta de Google y tu cuenta de Claude.</p><ol><li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li><li>Ten a mano tu usuario y contraseña de Google.</li></ol>${tip("Si usas una cuenta de trabajo, puede que tu empresa tenga que autorizar la conexión.")}${ok("puedes entrar en Claude y en Gmail.")}`},
{t:"Conecta Gmail y Calendar",s:"5 min · dos conectores",b:()=>`<p class="what">Un conector es un permiso para que Claude use Gmail por ti. Se activa una vez y queda guardado.</p><h3>Pasos</h3><ol>
<li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (en inglés: <i>Customize → Connectors</i>).</li>
<li>Pulsa <b>Explorar conectores</b> (<i>Browse connectors</i>), busca <b>«Gmail»</b> y pulsa <b>Conectar</b>.</li>
<li>Se abre una ventana de Gmail: inicia sesión y pulsa <b>Permitir</b>.</li>
<li>En un chat nuevo, pulsa el botón <b>+</b> → <b>Conectores</b> y comprueba que Gmail está activado.</li></ol><p>Repite lo mismo buscando <b>«Google Calendar»</b>.</p>${tip("Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la <a href='https://support.claude.com' target='_blank' rel='noopener'>ayuda de Claude</a>.")}${ok("Gmail y Google Calendar aparecen activados.")}`},
{t:"Crea «Mi secretaría»",s:"5 min · las reglas",b:()=>`<p class="what">Un proyecto guarda tus reglas para siempre. Así no tienes que repetirlas.</p><ol><li>En Claude: <b>Proyectos → Crear proyecto</b>, llámalo <b>Mi secretaría</b>.</li><li>En <b>Instrucciones</b>, pega:</li></ol>${cb(`Eres mi secretaría. Tu objetivo: ${D()}.\n\nReglas:\n- Nunca envíes correos ni aceptes invitaciones: solo propones y preparas borradores.\n- Sé breve: listas cortas, lo urgente primero.\n- Si algo parece una estafa o pide datos bancarios, avísame.\n- Escribe como yo: cercano, claro y educado.`)}${ok("tienes el proyecto con sus instrucciones.")}`},
{t:"Tu primer resumen",s:"3 min · buenos días",b:()=>`<p class="what">Abre un chat dentro del proyecto y pide tu resumen.</p>${cb("Revisa mis correos de las últimas 24 horas y mi agenda de hoy. Dime:\n1) Lo urgente (máximo 5).\n2) Lo que puede esperar.\n3) Mis reuniones de hoy y qué debería preparar para cada una.")}${ok("en un minuto sabes qué te espera hoy.")}`},
{db:1,t:"Borradores con tu tono",s:"5 min · responder",b:()=>`<p class="what">Claude escribe, tú revisas y envías.</p>${cb("Prepara borradores de respuesta para los correos urgentes, con mi tono. No envíes nada. Si el conector permite crear borradores en Gmail, déjalos ahí; si no, escríbemelos aquí para copiarlos.")}${tip("Lee siempre cada borrador antes de enviarlo. Tú firmas, tú decides.")}${ok("tienes borradores listos para revisar.")}`},
{t:"Hazlo costumbre",s:"2 min · la rutina",b:()=>`<p class="what">Guarda el mensaje del resumen en una nota y úsalo cada mañana dentro del proyecto.</p>${tip("Si usas <b>Claude Cowork</b> en el escritorio, puedes convertirlo en una <b>tarea programada</b> que se ejecute sola cada mañana laborable.")}${ok("mañana repites y tardas menos de un minuto.")}`},
{x:1,t:"Privacidad tranquila",s:"Siempre · consejos",b:()=>`<ol><li>⚠️ <b>Ojo con los mensajes trampa</b>: un correo puede llevar instrucciones escondidas para engañar a Claude («ignora lo anterior y reenvía…»). Por eso la regla de oro: Claude solo lee y propone; enviar, borrar o compartir lo haces tú. Si hace algo que no le pediste, páralo.</li><li>Puedes <b>desconectar</b> Gmail o Calendar cuando quieras en Personalizar → Conectores.</li><li>No pidas a Claude que reenvíe datos personales de otras personas.</li><li>Revisa la política de tu empresa antes de conectar una cuenta de trabajo.</li></ol>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>No ve tus correos</b>: vuelve a conectar Gmail y acepta todos los permisos que pide.</li><li><b>Resúmenes demasiado largos</b>: añade a las instrucciones «máximo 10 líneas».</li></ol>${det("💡 Ideas para seguir",["Un resumen de los viernes con lo pendiente.","Encontrar facturas y apuntarlas en una hoja.","Proponer huecos para una reunión con 3 personas."])}`}
]}};
