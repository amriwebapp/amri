(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: tu secretaría con Gmail y Calendar",
intro:"Claude lee tu correo y tu agenda (solo con tu permiso) y te ayuda a ponerte al día, responder, preparar reuniones y ordenar tu bandeja. Conecta Gmail y Calendar una vez y elige la receta. Claude nunca envía nada por ti: solo prepara borradores.",
meta:["📕 6 recetas", "💶 Gratis si tu plan de Claude incluye conectores", "🍽 Resultado: tu correo y tu agenda en orden"],
ing:"Ingredientes",
fin:"Tu secretaría está conectada. Elige la receta que más tiempo te ahorre hoy.",
R:{key:"libro-gmail",
ing:()=>`<li><b>Claude</b>: tu secretaría. Lee, resume y propone.</li><li><b>Gmail y Google Calendar</b>: tu correo y tu agenda.</li><li><b>Los conectores de Gmail y Calendar</b>: el pase de acceso. Tú decides qué permisos das.</li>`,
steps:[
{t:"Conecta Gmail y Calendar",s:"dos conectores",b:()=>`<ol><li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Pulsa <b>Explorar conectores</b>, busca «Gmail» y pulsa <b>Conectar</b>. Inicia sesión y pulsa <b>Permitir</b>.</li><li>Repite buscando «Google Calendar».</li><li>En un chat nuevo, pulsa <b>+ → Conectores</b> y comprueba que los dos están activados.</li></ol>
${tip("Si usas una cuenta de trabajo, puede que tu empresa tenga que autorizar la conexión.")}${ok("Gmail y Google Calendar aparecen activados.")}`},
{t:"Crea «Mi secretaría»",s:"las reglas",b:()=>`<ol><li>En Claude: <b>Proyectos → Crear proyecto</b>, llámalo <b>Mi secretaría</b>.</li><li>En <b>Instrucciones</b>, pega:</li></ol>${cb("Eres mi secretaría y usas Gmail y Google Calendar.\n\nReglas:\n- Nunca envíes correos ni aceptes invitaciones: solo propones y preparas borradores.\n- Sé breve: listas cortas, lo urgente primero.\n- Si algo parece una estafa o pide datos bancarios, avísame.\n- Escribe como yo: cercano, claro y educado.")}${ok("tienes el proyecto con sus instrucciones.")}`}
,
{x:1,t:"Privacidad tranquila",s:"Siempre · consejos",b:()=>`<ol><li>⚠️ <b>Ojo con los mensajes trampa</b>: un correo puede llevar instrucciones escondidas para engañar a Claude («ignora lo anterior y reenvía…»). Por eso la regla de oro: Claude solo lee y propone; enviar, borrar o compartir lo haces tú.</li><li>Puedes desconectar Gmail o Calendar cuando quieras en <b>Personalizar → Conectores</b>.</li><li>Revisa la política de tu empresa antes de conectar una cuenta de trabajo.</li></ol>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>No ve tus correos</b>: vuelve a conectar Gmail y acepta todos los permisos.</li><li><b>Resúmenes demasiado largos</b>: añade a las instrucciones «máximo 10 líneas».</li></ol>`}
]},
recetas:[
{s:"buenos-dias",t:"Tu resumen de cada mañana",d:"En un minuto: lo urgente de tu correo y tus reuniones del día.",
meta:["👩‍🍳 Muy fácil", "☀️ Rutina", "🍽 Resultado: sabes qué te espera hoy"],
q:"¿Qué te preocupa más?",ph:"Di qué. Ejemplo: que se me pasen los correos de proveedores",
fin:"Guarda el mensaje en una nota y úsalo cada mañana dentro del proyecto.",
def:"general",empty:"[di qué te preocupa, arriba]",
apps:{
 general:{n:"Todo lo urgente",db:true,d:"lo urgente de todo mi correo"},
 clientes:{n:"Solo clientes",db:true,d:"solo los correos de clientes"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El mensaje de buenos días",s:"probar",b:()=>`<p class="what">Abre un chat dentro de <b>Mi secretaría</b> y pega:</p>${cb(`Revisa mis correos de las últimas 24 horas (fíjate sobre todo en ${D()}) y mi agenda de hoy. Dime:\n1) Lo urgente (máximo 5).\n2) Lo que puede esperar.\n3) Mis reuniones de hoy y qué debería preparar para cada una.`)}${ok("en un minuto sabes qué te espera hoy.")}`},
{t:"Hazlo costumbre",s:"la rutina",b:()=>`<ol><li>Guarda el mensaje en una nota.</li><li>Úsalo cada mañana dentro del proyecto.</li></ol>${tip("Si usas Cowork en la app de escritorio, puedes preguntarle si puede convertirlo en una tarea que se repita cada mañana laborable.")}${ok("mañana lo repites y tardas menos de un minuto.")}`}
]},
{s:"borradores",t:"Borradores de respuesta con tu tono",d:"Claude escribe; tú revisas y envías.",
meta:["👩‍🍳 Fácil", "✉️ Responder", "🍽 Resultado: borradores listos para enviar"],
q:"¿Qué correos?",ph:"Di cuáles. Ejemplo: los de clientes que preguntan precios",
fin:"Tienes los borradores. Lee cada uno antes de enviarlo: tú firmas, tú decides.",
def:"urgentes",empty:"[di qué correos, arriba]",
apps:{
 urgentes:{n:"Los urgentes",db:true,d:"los correos urgentes"},
 repetidos:{n:"Los que se repiten",db:true,d:"los correos que se repiten (precios, horarios, disponibilidad)"},
 otra:{n:"✏️ Otros",db:true,d:""}
},
steps:[
{t:"Pide los borradores",s:"Claude escribe",b:()=>`${cb(`Prepara borradores de respuesta para ${D()}, con mi tono. No envíes nada. Si el conector permite crear borradores en Gmail, déjalos ahí; si no, escríbemelos aquí para copiarlos.`)}${ok("tienes los borradores.")}`},
{t:"Revisa y envía tú",s:"firmar",b:()=>`<ol><li>Abre cada borrador en Gmail (o cópialo).</li><li>Cambia lo que no dirías tú.</li><li>Envíalo.</li></ol>${ok("has enviado las respuestas que querías.")}`}
]},
{s:"reuniones",t:"Prepara una reunión en 5 minutos",d:"Quién viene, de qué hablasteis la última vez y qué hay que decidir.",
meta:["👩‍🍳 Fácil", "🗓 Reuniones", "🍽 Resultado: una ficha de la reunión"],
q:"¿Qué reunión?",ph:"Di cuál. Ejemplo: la de mañana con el proveedor de envíos",
fin:"Llegas preparado. Después de la reunión, pide un correo de resumen.",
def:"proxima",empty:"[di qué reunión, arriba]",
apps:{
 proxima:{n:"La próxima",db:true,d:"mi próxima reunión"},
 cliente:{n:"Con un cliente",db:true,d:"mi reunión con un cliente"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"La ficha",s:"contexto",b:()=>`${cb(`Prepárame ${D()}: quién viene, qué nos hemos escrito últimamente, qué quedó pendiente y 3 cosas que debería decidir o preguntar. Una ficha corta.`)}${ok("tienes la ficha de la reunión.")}`},
{t:"Después: el resumen",s:"cerrar",b:()=>`${cb("Ya ha terminado la reunión. Mis notas: [pégalas]. Escribe un borrador de correo de resumen para los asistentes, con acuerdos y próximos pasos. No lo envíes.")}${ok("tienes el borrador del resumen.")}`}
]},
{s:"huecos",off:1,t:"Encuentra huecos y planifica la semana",d:"Huecos para una reunión, tiempo para concentrarte y tu semana ordenada.",
meta:["👩‍🍳 Fácil", "📅 Agenda", "🍽 Resultado: tu semana con huecos protegidos"],
q:"¿Qué necesitas?",ph:"Di qué. Ejemplo: encontrar 1 hora con dos compañeros esta semana",
fin:"Tu semana tiene sitio para lo importante. Los eventos los creas tú o los apruebas antes.",
def:"semana",empty:"[di qué necesitas, arriba]",
apps:{
 semana:{n:"Planificar la semana",db:true,d:"planificar mi semana: agrupar reuniones y proteger tiempo para concentrarme"},
 reunion:{n:"Hueco para reunión",db:true,d:"encontrar huecos libres para una reunión de 1 hora"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"Mira tu agenda",s:"huecos",b:()=>`${cb(`Mira mi agenda de esta semana y ayúdame a ${D()}. Propón opciones y no crees nada todavía.`)}${ok("tienes opciones de horarios.")}`},
{t:"Apúntalo",s:"con permiso",b:()=>`${cb("Me quedo con [opción]. Si el conector lo permite, crea los eventos en mi calendario y enséñamelos antes de guardarlos. Si no, dime cómo crearlos yo.")}${ok("los eventos están en tu calendario.")}`}
]},
{s:"facturas",off:1,t:"Encuentra facturas y pagos",d:"Busca facturas en tu correo y apúntalas en una tabla.",
meta:["👩‍🍳 Fácil", "🧾 Papeleo", "🍽 Resultado: una tabla con tus facturas del mes"],
q:"¿Qué necesitas?",ph:"Di qué. Ejemplo: las facturas de proveedores del trimestre",
fin:"Tienes tus facturas localizadas. Para que se guarden solas, mira el libro «Automatiza tareas aburridas».",
def:"mes",empty:"[di qué necesitas, arriba]",
apps:{
 mes:{n:"Las del mes",db:true,d:"las facturas del último mes"},
 trimestre:{n:"Las del trimestre",db:true,d:"las facturas del último trimestre"},
 otra:{n:"✏️ Otra búsqueda",db:true,d:""}
},
steps:[
{t:"Búscalas",s:"la tabla",b:()=>`${cb(`Busca en mi correo ${D()}. Hazme una tabla con fecha, empresa, concepto, importe y si trae el PDF adjunto. Si un dato no aparece, déjalo vacío: no lo inventes.`)}${ok("tienes la tabla.")}`},
{t:"Comprueba",s:"con lupa",b:()=>`<p class="what">Abre dos o tres correos al azar y compara el importe con la tabla.</p>${ok("los datos que has comprobado coinciden.")}`}
]},
{s:"limpiar",t:"Ordena tu bandeja de entrada",d:"Qué es newsletter, qué es importante y de qué te puedes dar de baja.",
meta:["👩‍🍳 Fácil", "🧹 Orden", "🍽 Resultado: un plan para vaciar tu bandeja"],
q:"¿Cómo está tu bandeja?",ph:"Di cómo. Ejemplo: 3.000 correos sin leer",
fin:"Tienes un plan. Las bajas y los borrados los haces tú, poco a poco.",
def:"lleno",empty:"[di cómo está tu bandeja, arriba]",
apps:{
 lleno:{n:"Llenísima",db:true,d:"una bandeja con miles de correos sin leer"},
 newsletters:{n:"Demasiadas newsletters",db:true,d:"demasiadas newsletters y publicidad"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El diagnóstico",s:"qué hay",b:()=>`${cb(`Tengo ${D()}. Mira mis correos de las últimas semanas y dime: quién me escribe más, qué newsletters no abro nunca y qué correos importantes llevan tiempo sin respuesta. No borres ni cambies nada.`)}${ok("sabes qué ocupa tu bandeja.")}`},
{t:"El plan",s:"poco a poco",b:()=>`${cb("Propón un plan en 3 pasos para vaciar mi bandeja: de qué me doy de baja, qué filtros o etiquetas creo en Gmail y qué respondo primero. Explícame cómo hacer cada cosa yo.")}${ok("tienes el plan y has empezado por el primer paso.")}`}
]}
]};
