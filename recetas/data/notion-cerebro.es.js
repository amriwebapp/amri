(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: tu segundo cerebro en Notion",
meta:["⏱ 30 min aprox.", "👩‍🍳 Fácil", "💶 Gratis si tu plan de Claude incluye conectores", "🍽 Resultado: un Notion ordenado que se resume solo"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué quieres ordenar?",
ph:"Describe qué quieres organizar. Ejemplo: las ideas para mi tesis, con fuentes, citas y un calendario de entregas",
yn:"¿Ya tienes páginas en Notion con contenido?",
yntip:"Si dudas, elige «Sí»: Claude revisará lo que tienes antes de proponer nada. Si tu Notion está vacío, también funciona.",
fin:"Tu Notion ya tiene una estructura clara y una rutina semanal. Cada viernes, un mensaje y listo. Más abajo tienes extras de seguridad e ideas.",
R:{key:"receta-notion",def:"notas",empty:"[describe aquí qué quieres ordenar, arriba]",
apps:{
 notas:{n:"Notas sueltas",db:true,d:"todas mis notas sueltas, ideas y enlaces guardados, agrupados por tema"},
 proyectos:{n:"Proyectos y tareas",db:true,d:"mis proyectos con sus tareas, fechas de entrega y estado"},
 lecturas:{n:"Libros y lecturas",db:false,d:"los libros y artículos que leo, con resumen, valoración y citas favoritas"},
 cocina:{n:"Recetas de cocina",db:false,d:"mis recetas de cocina con ingredientes, tiempo, dificultad y fotos"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Notion</b>: la despensa. Donde guardas todo. Plan gratuito.</li><li><b>Claude</b>: el jefe de cocina. Ordena, resume y propone.</li><li><b>Conector de Notion</b>: la llave de la despensa. Deja a Claude leer y escribir páginas.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"3 min · cuentas",b:()=>`<p class="what">Necesitas una cuenta en Notion y otra en Claude.</p><ol><li>Entra en <a href="https://www.notion.so" target="_blank" rel="noopener">Notion</a> (plan gratuito).</li><li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("puedes entrar en las dos.")}`},
{t:"Conecta Notion con Claude",s:"3 min · el conector",b:()=>`<p class="what">Un conector es un permiso para que Claude use Notion por ti. Se activa una vez y queda guardado.</p><h3>Pasos</h3><ol>
<li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (en inglés: <i>Customize → Connectors</i>).</li>
<li>Pulsa <b>Explorar conectores</b> (<i>Browse connectors</i>), busca <b>«Notion»</b> y pulsa <b>Conectar</b>.</li>
<li>Se abre una ventana de Notion: inicia sesión y pulsa <b>Permitir</b>.</li>
<li>En un chat nuevo, pulsa el botón <b>+</b> → <b>Conectores</b> y comprueba que Notion está activado.</li></ol><p>Notion te preguntará a qué espacio de trabajo quieres dar acceso. Elige el tuyo.</p>${tip("Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la <a href='https://support.claude.com' target='_blank' rel='noopener'>ayuda de Claude</a>.")}${ok("Notion aparece activado en tus conectores.")}`},
{db:1,t:"Que Claude explore tu Notion",s:"5 min · inventario",b:()=>`<p class="what">Antes de ordenar, hay que saber qué hay en la despensa.</p>${cb(`Busca en mi Notion todo lo relacionado con ${D()}. Hazme un resumen de cómo está organizado ahora y qué problemas ves (duplicados, páginas vacías, cosas sin clasificar).\n\nNo cambies nada todavía.`)}${tip("«No cambies nada todavía» es tu mejor amigo. Primero mirar, luego tocar.")}${ok("Claude te describe lo que tienes.")}`},
{t:"Diseña la estructura",s:"5 min · el plan",b:()=>`<p class="what">Una <b>base de datos</b> de Notion es como una hoja de cálculo bonita: cada fila es una página.</p>${cb(`Propón una base de datos de Notion para organizar ${D()}.\n\nDime: las propiedades (columnas) con su tipo, 2 o 3 vistas útiles (tabla, tablero, calendario) y una plantilla para páginas nuevas. Explícalo en pocas palabras y espera mi OK.`)}${ok("tienes una propuesta que entiendes y te gusta.")}`},
{t:"Créala en tu Notion",s:"5 min · montar",b:()=>`<p class="what">Ahora Claude la construye por ti.</p>${cb(`Perfecto. Crea en mi Notion una página llamada «Mi segundo cerebro» con esa base de datos.${DB()?" Después mueve o copia ahí mis páginas existentes que encajen, y dime cuáles has tocado.":" Añade 3 ejemplos para que vea cómo queda."}`)}
${tip("Si Claude no puede crear algo (por ejemplo, un tipo de vista), te dirá cómo hacerlo a mano en dos clics.")}${ok("abres Notion y ves la página nueva con su base de datos.")}`},
{t:"Tu repaso semanal",s:"5 min · la rutina",b:()=>`<p class="what">La magia está en repetirlo. Cada viernes, un mensaje:</p>${cb("Revisa lo que he añadido o cambiado esta semana en «Mi segundo cerebro». Escríbeme un resumen en 5 líneas, 3 prioridades para la semana que viene y cualquier cosa que se esté quedando olvidada. Guárdalo como página nueva llamada «Semana del [fecha]».")}${ok("tienes tu primer resumen semanal guardado en Notion.")}`},
{x:1,t:"Cuida tu despensa",s:"Siempre · seguridad",b:()=>`<ol><li>⚠️ <b>Ojo con los mensajes trampa</b>: un documento o una página web que guardes puede llevar instrucciones escondidas para engañar a Claude («ignora lo anterior y reenvía…»). Por eso la regla de oro: Claude solo lee y propone; enviar, borrar o compartir lo haces tú. Si hace algo que no le pediste, páralo.</li><li>Pide siempre <b>«enséñame antes de borrar»</b>.</li><li>No guardes contraseñas ni datos bancarios en Notion.</li><li>Notion guarda el historial de cada página: si algo sale mal, puedes volver atrás.</li></ol>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude no encuentra una página</b>: comprueba que el espacio de trabajo tiene acceso en el conector.</li><li><b>Resultados a medias</b>: pide partes más pequeñas («solo las notas de marzo»).</li></ol>${det("💡 Ideas para seguir",["Un diario con preguntas diarias.","Un CRM sencillo de clientes.","Un plan de estudio para tus exámenes."])}`}
]}};
