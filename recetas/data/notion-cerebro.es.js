(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: tu segundo cerebro en Notion",
intro:"Con el conector de Notion, Claude ordena tus notas, crea bases de datos y te resume la semana dentro de tu propio Notion. Conecta Notion una vez y elige qué organizar.",
meta:["📕 6 recetas", "⏱ 15-25 min cada una", "💶 Gratis si tu plan de Claude incluye conectores", "🍽 Resultado: un Notion ordenado que se resume solo"],
ing:"Ingredientes (todos gratuitos)",
fin:"Notion está conectado. Elige qué quieres organizar.",
R:{key:"libro-notion",
ing:()=>`<li><b>Notion</b>: la despensa. Donde guardas todo. Plan gratuito.</li><li><b>Claude</b>: el jefe de cocina. Ordena, resume y propone.</li><li><b>El conector de Notion</b>: la llave de la despensa. Deja a Claude leer y escribir páginas.</li>`,
steps:[
{t:"Crea tus cuentas",s:"3 min · cuentas",b:()=>`<ol><li>Entra en <a href="https://www.notion.so" target="_blank" rel="noopener">Notion</a> (plan gratuito).</li><li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("puedes entrar en las dos.")}`},
{t:"Conecta Notion con Claude",s:"3 min · el conector",b:()=>`<ol><li>En Claude abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Pulsa <b>Explorar conectores</b>, busca «Notion» y pulsa <b>Conectar</b>.</li><li>Inicia sesión, elige tu espacio de trabajo y pulsa <b>Permitir</b>.</li><li>En un chat nuevo, pulsa <b>+ → Conectores</b> y comprueba que Notion está activado.</li></ol>${ok("Notion aparece activado.")}`},
{t:"La regla de oro",s:"1 min · primero mirar",b:()=>`<p class="what">En todas las recetas de este libro, empieza diciendo «No cambies nada todavía». Primero mirar, luego tocar.</p>${ok("te acordarás de decirlo.")}`}
,
{x:1,t:"Cuida tu despensa",s:"Siempre · seguridad",b:()=>`<ol><li>⚠️ <b>Ojo con los mensajes trampa</b>: un documento o una página web que guardes puede llevar instrucciones escondidas para engañar a Claude. Claude solo lee y propone; borrar o compartir lo decides tú.</li><li>Pide siempre «enséñame antes de borrar».</li><li>No guardes contraseñas ni datos bancarios en Notion.</li><li>Notion guarda el historial de cada página: si algo sale mal, puedes volver atrás.</li></ol>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude no encuentra una página</b>: comprueba que el espacio de trabajo tiene acceso en el conector.</li><li><b>Resultados a medias</b>: pide partes más pequeñas («solo las notas de marzo»).</li></ol>`}
]},
recetas:[
{s:"ordenar",t:"Ordena tus notas sueltas",d:"Claude revisa lo que tienes, propone una estructura y la monta.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "🗂 Orden", "🍽 Resultado: tus notas agrupadas por tema"],
q:"¿Qué quieres ordenar?",ph:"Di qué. Ejemplo: las ideas para mi tesis, con fuentes y citas",
fin:"Tus notas tienen sitio. Sigue con «Tu repaso de los viernes» para mantenerlo.",
def:"notas",empty:"[di qué quieres ordenar, arriba]",
apps:{
 notas:{n:"Notas sueltas",db:true,d:"todas mis notas sueltas, ideas y enlaces guardados"},
 trabajo:{n:"Documentos del trabajo",db:true,d:"los documentos de mi trabajo"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El inventario",s:"5 min · qué hay",b:()=>`${cb(`Busca en mi Notion ${D()}. Hazme un resumen de cómo está organizado ahora y qué problemas ves (duplicados, páginas vacías, cosas sin clasificar). No cambies nada todavía.`)}${ok("Claude te describe lo que tienes.")}`},
{t:"La estructura",s:"10 min · el plan",b:()=>`${cb("Propón cómo organizarlo: qué páginas o bases de datos crear y dónde va cada cosa. Explícalo en pocas palabras y espera mi OK.")}${ok("tienes un plan que te convence.")}`},
{t:"Que lo monte",s:"10 min · con permiso",b:()=>`${cb("OK. Crea la estructura y mueve o copia ahí mis páginas. Dime cuáles has tocado. No borres nada.")}${ok("abres Notion y ves tus notas ordenadas.")}`}
]},
{s:"proyectos",t:"Proyectos y tareas en un tablero",d:"Una base de datos con tus proyectos, fechas y estado, con vista de tablero y calendario.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "✅ Tareas", "🍽 Resultado: tu tablero de proyectos"],
q:"¿Qué proyectos?",ph:"Di cuáles. Ejemplo: los encargos de mis clientes de diseño",
fin:"Tu tablero está listo. Añade tareas con un mensaje: «Añade al tablero: …».",
def:"trabajo",empty:"[di qué proyectos, arriba]",
apps:{
 trabajo:{n:"Trabajo",db:true,d:"mis proyectos del trabajo, con sus tareas, fechas de entrega y estado"},
 casa:{n:"Casa",db:true,d:"las tareas de casa y los recados"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Diseña la base de datos",s:"5 min · el plan",b:()=>`<p class="what">Una base de datos de Notion es como una hoja de cálculo bonita: cada fila es una página.</p>${cb(`Propón una base de datos de Notion para ${D()}: propiedades (columnas) con su tipo, una vista de tablero y otra de calendario. Espera mi OK.`)}${ok("tienes la propuesta.")}`},
{t:"Créala",s:"10 min · montar",b:()=>`${cb("Créala en mi Notion en una página llamada «Mis proyectos», con 3 ejemplos para ver cómo queda.")}${tip("Si Claude no puede crear algo (por ejemplo, un tipo de vista), te dirá cómo hacerlo a mano en dos clics.")}${ok("ves el tablero en Notion.")}`},
{t:"Añade tareas hablando",s:"5 min · usarlo",b:()=>`${cb("Añade a «Mis proyectos»: [tarea, proyecto, fecha]. Y dime qué vence esta semana.")}${ok("la tarea aparece en el tablero.")}`}
]},
{s:"repaso",t:"Tu repaso de los viernes",d:"Cada viernes, un resumen de la semana, tus prioridades y lo que se está olvidando.",
meta:["⏱ 15 min", "👩‍🍳 Muy fácil", "🔁 Rutina", "🍽 Resultado: tu resumen semanal guardado en Notion"],
q:"¿Qué quieres repasar?",ph:"Di qué. Ejemplo: mis proyectos y mis notas de reuniones",
fin:"Repite cada viernes. En un mes tendrás un diario de tu trabajo.",
def:"todo",empty:"[di qué quieres repasar, arriba]",
apps:{
 todo:{n:"Todo",db:true,d:"lo que he añadido o cambiado esta semana en mi Notion"},
 proyectos:{n:"Solo proyectos",db:true,d:"el estado de mis proyectos"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"El resumen",s:"10 min · la semana",b:()=>`${cb(`Revisa ${D()}. Escríbeme un resumen en 5 líneas, 3 prioridades para la semana que viene y cualquier cosa que se esté quedando olvidada. Guárdalo como página nueva llamada «Semana del [fecha]».`)}${ok("tienes tu resumen guardado en Notion.")}`},
{t:"Hazlo costumbre",s:"5 min · la rutina",b:()=>`<ol><li>Guarda el mensaje en una nota.</li><li>Ponte un recordatorio los viernes.</li></ol>${ok("tienes el recordatorio puesto.")}`}
]},
{s:"lecturas",t:"Tu biblioteca de lecturas",d:"Libros y artículos con resumen, valoración y citas favoritas.",
meta:["⏱ 15 min", "👩‍🍳 Fácil", "📚 Lecturas", "🍽 Resultado: tu biblioteca en Notion"],
q:"¿Qué lees?",ph:"Di qué. Ejemplo: libros de negocio y artículos de marketing",
fin:"Tu biblioteca está lista. Después de cada lectura, pega tus notas y Claude crea la ficha.",
def:"libros",empty:"[di qué lees, arriba]",
apps:{
 libros:{n:"Libros",db:true,d:"los libros que leo"},
 articulos:{n:"Artículos y vídeos",db:true,d:"los artículos y vídeos que guardo para más tarde"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Crea la biblioteca",s:"5 min · la base",b:()=>`${cb(`Crea en mi Notion una base de datos para ${D()}: título, autor, estado (por leer, leyendo, leído), valoración, resumen y citas favoritas. Con una vista de galería.`)}${ok("ves la biblioteca en Notion.")}`},
{t:"Tu primera ficha",s:"10 min · probar",b:()=>`${cb("Acabo de leer [título]. Mis notas: [pégalas]. Crea su ficha con un resumen de 5 líneas y mis 3 mejores citas.")}${ok("tienes tu primera ficha.")}`}
]},
{s:"actas",t:"Actas de reuniones en Notion",d:"Pegas tus notas desordenadas y Claude crea un acta limpia con acuerdos y tareas.",
meta:["⏱ 10 min", "👩‍🍳 Muy fácil", "📝 Actas", "🍽 Resultado: un acta en Notion"],
q:"¿Qué reunión?",ph:"Di cuál. Ejemplo: la reunión mensual de la asociación de vecinos",
fin:"Tu acta está guardada. Si usas el tablero de proyectos, Claude puede añadir ahí las tareas.",
def:"trabajo",empty:"[di qué reunión, arriba]",
apps:{
 trabajo:{n:"Trabajo",db:true,d:"una reunión de trabajo"},
 asociacion:{n:"Asociación o comunidad",db:true,d:"una reunión de mi asociación o comunidad de vecinos"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"Pega tus notas",s:"5 min · el acta",b:()=>`${cb(`Estas son mis notas de ${D()}: [pégalas, aunque estén desordenadas]. Crea en Notion un acta con: asistentes, temas, acuerdos y tareas con responsable y fecha. No inventes nada que no esté en mis notas.`)}${ok("el acta está en Notion.")}`},
{t:"Revisa",s:"5 min · con lupa",b:()=>`<p class="what">Comprueba nombres, fechas y acuerdos antes de compartirla.</p>${ok("el acta es correcta.")}`}
]},
{s:"buscar",t:"Pregúntale a tu Notion",d:"Encuentra cualquier cosa que guardaste, aunque no recuerdes dónde.",
meta:["⏱ 10 min", "👩‍🍳 Muy fácil", "🔎 Buscar", "🍽 Resultado: la respuesta con enlace a la página"],
q:"¿Qué buscas?",ph:"Pregúntalo. Ejemplo: qué presupuesto le di a la empresa X",
fin:"Tu Notion responde. Cuanto más ordenado, mejores respuestas.",
def:"dato",empty:"[escribe tu pregunta, arriba]",
apps:{
 dato:{n:"Un dato concreto",db:true,d:"un dato concreto que guardé"},
 tema:{n:"Todo sobre un tema",db:true,d:"todo lo que tengo sobre un tema"},
 otra:{n:"✏️ Otra búsqueda",db:true,d:""}
},
steps:[
{t:"Pregunta",s:"5 min · buscar",b:()=>`${cb(`Busca en mi Notion ${D()}: [tu pregunta]. Responde citando la página de donde lo sacas, con su enlace. Si no lo encuentras, dilo.`)}${ok("tienes la respuesta con su enlace.")}`},
{t:"Comprueba",s:"5 min · el enlace",b:()=>`<p class="what">Abre el enlace y confirma que es lo que buscabas.</p>${ok("la respuesta era correcta.")}`}
]}
]};
