(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: tu asistente personal con IA",
intro:"Un asistente que te conoce: sabe a qué te dedicas, cómo escribes y qué necesitas. Lo preparas una vez (Claude te entrevista y guarda tus instrucciones en un proyecto) y después lo usas para correos, documentos, estudios o tu semana.",
meta:["📕 6 recetas", "💶 Gratis", "🍽 Resultado: un ayudante que te conoce"],
ing:"Ingredientes (todos gratuitos)",
fin:"Tu asistente ya te conoce. Abre cada receta dentro de tu proyecto «Mi asistente».",
R:{key:"libro-asistente",
ing:()=>`<li><b>Claude</b>: tu asistente.</li><li><b>Un proyecto de Claude</b>: el cuaderno donde guarda sus instrucciones para siempre.</li><li><b>Una nota en tu móvil</b>: para guardar tus mensajes favoritos.</li>`,
steps:[
{t:"Que Claude te entreviste",s:"tu ficha",b:()=>`<p class="what">En vez de escribir tú las instrucciones, deja que Claude te haga preguntas y las escriba por ti.</p>${cb("Quiero que seas mi asistente personal.\n\nHazme 8 preguntas, de una en una, para conocerme: a qué me dedico, cómo escribo, qué tareas repito, qué me cuesta y cómo me gusta recibir las respuestas. Cuando termines, escríbeme unas instrucciones claras para que te comportes siempre así.")}
${tip("Responde con naturalidad, como si hablaras con alguien nuevo en tu equipo.")}${ok("Claude te ha dado un texto con tus instrucciones personales.")}`},
{t:"Crea el proyecto «Mi asistente»",s:"su cuaderno",b:()=>`<ol><li>En Claude, en el menú lateral, pulsa <b>Proyectos → Crear proyecto</b> y llámalo <b>Mi asistente</b>.</li><li>Pulsa <b>Instrucciones del proyecto</b> y pega el texto del paso anterior.</li></ol>
${det("No veo la opción de Proyectos",["Tu plan puede tener límites. Alternativa: guarda las instrucciones en una nota.","Pégalas al principio de cada chat nuevo. Funciona igual."])}${ok("tienes un proyecto con tus instrucciones.")}`},
{t:"Pruébalo",s:"primera tarea",b:()=>`${cb("Ayúdame con esto: [pega un correo, una duda o una tarea real de hoy]. Respóndeme como lo haría yo.")}${tip("Si algo no te gusta, díselo y luego pide: «añade esto a tus instrucciones».")}${ok("la respuesta te sirve casi sin tocarla.")}`}
,
{x:1,t:"Conéctalo con tus apps",s:"Opcional · conectores",b:()=>`<p class="what">Con los conectores, tu asistente puede leer tu correo, tu calendario o tus documentos sin copiar y pegar.</p><ol><li>En Claude abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Conecta la app que quieras y autoriza.</li></ol>${tip("Conecta solo lo que necesites. Mira el libro <a href=\"gmail-calendario.html\">Gmail y Calendar</a>.")}`},
{x:1,t:"Mantenlo al día",s:"Cada mes",b:()=>`${cb("Revisa tus instrucciones y propón mejoras según nuestras últimas conversaciones. Dime qué cambiarías y por qué.")}`}
]},
recetas:[
{s:"correos",t:"Responde correos difíciles",d:"Un cliente enfadado, un no educado o un recordatorio incómodo, con tu tono.",
meta:["👩‍🍳 Muy fácil", "✉️ Correo", "🍽 Resultado: un correo listo para enviar"],
q:"¿Qué correo?",ph:"Di qué pasa. Ejemplo: un cliente se queja de que el pedido llegó tarde",
fin:"Listo. Guarda el mensaje que mejor te ha funcionado como atajo.",
def:"queja",empty:"[di qué pasa, arriba]",
apps:{
 queja:{n:"Responder una queja",db:true,d:"responder a una queja de un cliente con calma y una solución"},
 no:{n:"Decir que no",db:true,d:"decir que no a una petición sin quedar mal"},
 recordatorio:{n:"Reclamar un pago",db:true,d:"recordar a un cliente un pago pendiente con educación y firmeza"},
 otra:{n:"✏️ Otro correo",db:true,d:""}
},
steps:[
{t:"Pega el contexto",s:"qué pasa",b:()=>`${cb(`Quiero ${D()}. Este es el correo que he recibido (o la situación): [pégalo].\n\nLo que quiero conseguir: [qué]. Lo que no quiero: [qué].`)}${ok("Claude tiene toda la información.")}`},
{t:"Dos versiones",s:"elegir",b:()=>`${cb("Escribe 2 versiones con mi tono: una más cálida y otra más directa. Que no pasen de 120 palabras.")}${ok("tienes dos versiones para elegir.")}`},
{t:"Repásalo y envíalo tú",s:"enviar",b:()=>`<ol><li>Lee el correo en voz alta.</li><li>Cambia lo que no dirías tú.</li><li>Envíalo desde tu correo.</li></ol>${ok("el correo está enviado.")}`}
]},
{s:"documentos",t:"Resume documentos largos",d:"Sube un PDF, un contrato o un informe y quédate con lo importante en 5 puntos.",
meta:["👩‍🍳 Muy fácil", "📄 Documentos", "🍽 Resultado: lo importante de un documento, con citas"],
q:"¿Qué documento?",ph:"Di qué es. Ejemplo: el contrato de una nueva tarifa de luz",
fin:"Ya tienes lo importante. Para documentos que uses a menudo, súbelos al proyecto: así no tendrás que subirlos cada vez.",
def:"contrato",empty:"[di qué documento es, arriba]",
apps:{
 contrato:{n:"Un contrato",db:true,d:"un contrato"},
 informe:{n:"Un informe del trabajo",db:true,d:"un informe largo del trabajo"},
 normativa:{n:"Una normativa",db:true,d:"una normativa o unas bases"},
 otra:{n:"✏️ Otro documento",db:true,d:""}
},
steps:[
{t:"Súbelo",s:"el clip",b:()=>`<ol><li>Abre un chat dentro de <b>Mi asistente</b> y arrastra el documento (o pulsa 📎).</li></ol>${tip("⚠️ No subas documentos con contraseñas, datos bancarios o datos de otras personas que no hagan falta.")}${ok("ves el documento en el chat.")}`},
{t:"Pide el resumen",s:"lo importante",b:()=>`${cb(`Te he subido ${D()}. Resúmelo en 5 puntos, con palabras sencillas. Después dime: plazos y fechas, lo que me obliga a hacer, lo que me puede costar dinero y lo que deberías mirar con lupa. Cita la parte del documento de cada cosa.`)}${ok("tienes el resumen con las citas.")}`},
{t:"Pregunta tus dudas",s:"lo tuyo",b:()=>`${cb("En mi caso, [explica tu situación]. ¿Qué parte del documento me afecta más y qué me recomiendas preguntar?")}${tip("Para decisiones legales o de dinero importantes, consulta además con un profesional.")}${ok("sabes qué te afecta y qué preguntar.")}`}
]},
{s:"estudiar",t:"Estudia con Claude: resúmenes y test",d:"Sube tus apuntes y Claude te hace resúmenes, preguntas tipo test y te explica lo que no entiendes.",
meta:["👩‍🍳 Fácil", "🎓 Estudios", "🍽 Resultado: resumen, test y dudas resueltas"],
q:"¿Qué estudias?",ph:"Di la asignatura y el tema. Ejemplo: Historia, la Revolución francesa",
fin:"Repite el test dentro de dos días: lo que se repasa espaciado se recuerda mucho mejor.",
def:"examen",empty:"[di la asignatura y el tema, arriba]",
apps:{
 examen:{n:"Preparar un examen",db:true,d:"preparar un examen"},
 entender:{n:"Entender un tema difícil",db:true,d:"entender un tema que me cuesta"},
 idioma:{n:"Practicar un idioma",db:true,d:"practicar un idioma conversando"},
 otra:{n:"✏️ Otra cosa",db:true,d:""}
},
steps:[
{t:"Sube tus apuntes",s:"tu material",b:()=>`<ol><li>Sube tus apuntes o el tema (PDF, fotos de tus apuntes o texto).</li></ol>${ok("Claude tiene tus apuntes.")}`},
{t:"Resumen y test",s:"estudiar",b:()=>`${cb(`Quiero ${D()}. Con mis apuntes:\n1) Resúmelo en una página.\n2) Hazme 10 preguntas tipo test, de una en una. Espera mi respuesta antes de decirme si he acertado y por qué.\nUsa solo lo que está en mis apuntes.`)}${ok("has hecho el test y sabes en qué fallas.")}`},
{t:"Lo que no entiendes",s:"dudas",b:()=>`${cb("No entiendo [qué]. Explícamelo como a alguien de 12 años, con un ejemplo de la vida real. Después hazme una pregunta para ver si lo he entendido.")}${ok("entiendes lo que antes no.")}`}
]},
{s:"semana",t:"Organiza tu semana",d:"Tareas, citas y descansos en un plan realista que cabe en tu semana.",
meta:["👩‍🍳 Muy fácil", "📅 Organización", "🍽 Resultado: tu semana planificada en una tabla"],
q:"¿Qué semana tienes?",ph:"Di cómo es. Ejemplo: mucho trabajo, dos médicos y quiero hacer deporte",
fin:"Tu semana tiene un plan. El viernes, cuéntale cómo ha ido y ajusta la siguiente.",
def:"trabajo",empty:"[di cómo es tu semana, arriba]",
apps:{
 trabajo:{n:"Semana de trabajo",db:true,d:"una semana con mucho trabajo"},
 familia:{n:"Casa y familia",db:true,d:"una semana con la casa, los niños y los recados"},
 comidas:{n:"Comidas y compra",db:true,d:"el menú de la semana y la lista de la compra"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"Vacía la cabeza",s:"todo lo pendiente",b:()=>`${cb(`Ayúdame a organizar ${D()}. Esto es todo lo que tengo pendiente, sin orden: [escríbelo todo]. Mis horarios fijos son: [cuáles].`)}${ok("Claude tiene todo lo pendiente.")}`},
{t:"El plan",s:"una tabla",b:()=>`${cb("Hazme un plan realista en una tabla, día a día. Primero lo urgente, deja huecos libres y avísame si no cabe todo.")}${ok("tienes la semana en una tabla.")}`},
{t:"Llévalo a tu agenda",s:"donde lo veas",b:()=>`<ul><li>Cópialo en tu agenda o en una nota.</li><li>Con el libro <a href="gmail-calendario.html">Gmail y Calendar</a>, Claude puede apuntarlo en tu calendario.</li></ul>${ok("el plan está donde lo vas a ver.")}`}
]},
{s:"clientes",off:1,t:"Responde dudas de clientes con tus documentos",d:"Sube tus precios, horarios y condiciones, y tu asistente contesta con tu información, sin inventar.",
meta:["👩‍🍳 Fácil", "🏪 Negocio", "🍽 Resultado: respuestas a clientes basadas en tus documentos"],
q:"¿Qué negocio tienes?",ph:"Descríbelo. Ejemplo: una academia de inglés con clases para niños y adultos",
fin:"Tu asistente responde con tu información. Si quieres que lo haga solo en tu web, mira el libro «Un chatbot para tu web».",
def:"tienda",empty:"[describe tu negocio, arriba]",
apps:{
 tienda:{n:"Tienda",db:true,d:"una tienda"},
 servicios:{n:"Servicios",db:true,d:"un negocio de servicios con citas"},
 formacion:{n:"Clases o cursos",db:true,d:"una academia o unos cursos"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Sube tus documentos al proyecto",s:"la despensa",b:()=>`<ol><li>Reúne precios, horarios, condiciones y preguntas frecuentes. Mejor pocos y claros.</li><li>En <b>Mi asistente</b>, pulsa <b>Añadir contenido</b> y súbelos.</li></ol>${ok("los documentos están en el proyecto.")}`},
{t:"Comprueba que lo entiende",s:"el examen",b:()=>`${cb(`Tengo ${D()}. Lee los documentos del proyecto y dime en 5 puntos qué has entendido. Si algo es confuso o falta, dímelo. A partir de ahora, si no encuentras algo en mis documentos, dilo en vez de inventarlo.`)}${ok("Claude resume bien tu negocio.")}`},
{t:"Responde una duda real",s:"probar",b:()=>`${cb("Un cliente me pregunta esto: [pega la pregunta]. Respóndele con mi tono usando solo mis documentos. Si no está, dime qué información falta.")}${ok("la respuesta es correcta y no inventa nada.")}`}
]},
{s:"atajos",off:1,t:"Tu libreta de atajos",d:"Los mensajes que repites cada semana, listos para pegar en un segundo.",
meta:["👩‍🍳 Muy fácil", "⚡ Atajos", "🍽 Resultado: 5 mensajes listos para usar a diario"],
q:"¿Para qué los quieres?",ph:"Di qué haces a menudo. Ejemplo: resumir reuniones y escribir presupuestos",
fin:"Tienes tus atajos. Cuantos más uses, más tiempo ahorras.",
def:"trabajo",empty:"[di qué haces a menudo, arriba]",
apps:{
 trabajo:{n:"Trabajo",db:true,d:"mi trabajo"},
 casa:{n:"Casa",db:true,d:"mi vida diaria"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Pide tus atajos",s:"a medida",b:()=>`${cb(`Según lo que sabes de mí, dame 5 mensajes cortos que podría usar a diario contigo para ahorrar tiempo en ${D()}. Déjalos listos para copiar, con [huecos] donde tenga que poner lo mío.`)}${ok("tienes 5 mensajes.")}`},
{t:"Guárdalos",s:"a mano",b:()=>`<ol><li>Cópialos en una nota del móvil llamada «Atajos de Claude».</li><li>Añade los que ya te han funcionado en otras recetas.</li></ol>${ok("tienes tus atajos guardados.")}`}
]}
]};
