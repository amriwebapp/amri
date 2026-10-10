(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: el cerebro de tu empresa con GuruSup",
intro:"Conecta GuruSup Brain a Claude para que responda con el conocimiento real de tu empresa, citando la fuente. Alimenta el Brain y conéctalo una vez; después úsalo para responder a clientes, preparar bienvenidas o propuestas.",
meta:["📕 4 recetas","💶 GuruSup es de pago (pide demo)","🍽 Resultado: Claude responde con lo que sabe tu empresa"],
ing:"Ingredientes",
fin:"El Brain está conectado. Elige para qué lo quieres usar.",
R:{key:"libro-gurusup",
ing:()=>`<li><b>Claude</b>: el jefe de cocina. Razona, redacta y responde.</li><li><b>GuruSup Brain</b>: la memoria de la empresa. Reúne el conocimiento de tus herramientas y de tu equipo.</li><li><b>Conector de GuruSup Brain</b>: el camarero. Lleva las preguntas de Claude al Brain y trae las respuestas.</li>${DB()?`<li><b>Tus apps de empresa</b>: la despensa. Notion, Drive, Slack, HubSpot… lo que el Brain leerá.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"cuentas",b:()=>`<p class="what">Necesitas una cuenta de GuruSup con el Brain activado y tu cuenta de Claude.</p><ol>
<li>Entra en <a href="https://gurusup.com" target="_blank" rel="noopener">GuruSup</a>. Si tu empresa aún no lo usa, pide una demo: es un servicio de pago para empresas.</li>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${tip("GuruSup es una empresa española: la configuración y el soporte están en español.")}${ok("puedes entrar en GuruSup y en Claude.")}`},
{t:"Alimenta el Brain",s:"la despensa",b:()=>`<p class="what">El Brain aprende de las herramientas que ya usa tu empresa. Cuanto mejor lo alimentes, mejores respuestas.</p><ol>
<li>En GuruSup, busca la sección de <b>integraciones</b> del Brain.</li>
<li>Conecta las fuentes donde vive el conocimiento: Notion, Google Drive, Slack, tu CRM…</li>
<li>Empieza por lo más útil: procesos, preguntas frecuentes, políticas y precios.</li></ol>${tip("Cuando al Brain le falta algo, pregunta a la persona que lo sabe y lo guarda. Así se completa con el uso.")}${ok("el Brain muestra tus fuentes conectadas.")}`},
{t:"Conecta el Brain con Claude",s:"conector personalizado",b:()=>`<p class="what">GuruSup ofrece un conector (MCP) para su Brain. Se añade pegando una dirección.</p><h3>Pasos</h3><ol>
<li>En Claude abre <b>Personalizar → Conectores</b> (<i>Customize → Connectors</i>).</li>
<li>Pulsa <b>+</b> → <b>Añadir conector personalizado</b>.</li>
<li>Nombre: <b>GuruSup Brain</b>. Dirección (URL):</li></ol>${cb("https://mcp.brain.gurusup.com/mcp")}<ol start="4"><li>Pulsa <b>Añadir</b> y después <b>Conectar</b>. Inicia sesión con tu cuenta de GuruSup.</li></ol>
${det("¿Qué puede ver Claude?",["Solo la información a la que tu usuario de GuruSup tiene permiso.","Todo pasa en los servidores de GuruSup: no se instala nada en tu ordenador.","Puedes desconectarlo cuando quieras."])}${ok("GuruSup Brain aparece activado en tus conectores.")}`},
{t:"Hazlo costumbre con un proyecto",s:"las reglas",b:()=>`<p class="what">Un proyecto de Claude guarda la regla de consultar el Brain siempre.</p><ol><li>En Claude: <b>Proyectos → Crear proyecto</b>, llámalo <b>Mi empresa</b>.</li><li>En <b>Instrucciones</b>, pega:</li></ol>${cb("Antes de responder cualquier cosa sobre la empresa, consulta GuruSup Brain. Cita siempre la fuente. Si no está en el Brain, dilo claramente y no lo inventes. Responde breve y en el tono de la empresa.")}${ok("en los chats del proyecto, Claude consulta el Brain sin que se lo pidas.")}`},
{x:1,t:"Úsalo en Claude Code",s:"Opcional · nivel pro",b:()=>`<p class="what">Si tu equipo programa con Claude Code, GuruSup tiene un plugin que añade el conector y una Skill que le dice a Claude que consulte el Brain primero.</p>${cb("/plugin marketplace add gurusup/gurusup-brain-plugin\n/plugin install gurusup-brain@gurusup")}${tip("La primera consulta abrirá el navegador para iniciar sesión en GuruSup.")}`},
{x:1,t:"Permisos y confianza",s:"Siempre · consejos",b:()=>`<ol><li>Revisa quién puede ver qué dentro de GuruSup: Claude respeta esos permisos.</li><li>No conectes fuentes con datos personales sensibles si no hace falta.</li><li>Lee la política de privacidad de GuruSup y las normas de tu empresa sobre IA.</li></ol>${det("💡 Ideas para seguir",["Un asistente de onboarding para cada puesto.","Respuestas a clientes revisadas por una persona antes de enviarse.","Documentar procesos que hoy solo están en la cabeza de alguien."])}`}
]},
recetas:[
{s:"equipo",off:1,t:"Dudas del equipo",d:"Procesos, políticas, herramientas y a quién preguntar, respondido con vuestros documentos y su fuente.",
meta:["👩‍🍳 Fácil","👥 Equipo","🍽 Resultado: respuestas internas con su fuente y una lista de huecos"],
q:"¿Qué dudas son las más típicas?",ph:"Di algunas. Ejemplo: cómo pido vacaciones, dónde están las plantillas de factura",
fin:"Tu equipo tiene respuestas con fuente. Completa los huecos y cada semana responderá mejor.",
def:"equipo",empty:"[escribe las dudas típicas, arriba]",
apps:{equipo:{n:"Dudas internas",db:true,d:"responder las dudas internas del equipo: procesos, políticas, herramientas y a quién preguntar"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Una pregunta de control",s:"confianza",b:()=>`<p class="what">Empieza por una duda cuya respuesta conozcas: así compruebas que el Brain responde con la versión buena.</p>${cb(`Consulta primero GuruSup Brain. Quiero ${D()}. Pregunta: [una duda cuya respuesta sepas]. Dime de qué documento sale la respuesta y de qué fecha es.`)}${ok("la respuesta es correcta y cita su fuente.")}`},
{t:"Las 10 dudas de siempre",s:"el día a día",b:()=>`${cb("Responde con GuruSup Brain estas dudas típicas del equipo, una por una, con su fuente: [pega tus dudas]. Si alguna no está documentada, dilo claramente.")}${ok("tienes las respuestas y sabes cuáles faltan.")}`},
{t:"Rellena los huecos",s:"mejorar",b:()=>`${cb("Hazme una lista de las dudas que el Brain no pudo responder bien y dime qué persona o documento podría completarlas.")}${ok("tienes la lista de huecos y a quién preguntar.")}`}
]},
{s:"clientes",t:"Respuestas a clientes",d:"Borradores de respuesta basados en vuestras condiciones, precios y casos resueltos, sin prometer de más.",
meta:["👩‍🍳 Fácil","💬 Clientes","🍽 Resultado: respuestas a clientes con fuente"],
q:"¿Qué pregunta el cliente?",ph:"Pega una consulta real. Ejemplo: ¿puedo cambiar mi plan a mitad de mes?",
fin:"Tienes respuestas basadas en la información oficial. Revisa cada una antes de enviarla.",
def:"clientes",empty:"[pega la consulta, arriba]",
apps:{clientes:{n:"Consultas de clientes",db:true,d:"preparar respuestas a clientes usando nuestras condiciones, precios y casos resueltos"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"El borrador con fuente",s:"responder",b:()=>`${cb(`Consulta primero GuruSup Brain. Quiero ${D()}. El cliente pregunta: [pega la consulta, sin datos personales].\n\nEscribe un borrador amable y corto. Debajo, la fuente de cada dato. Si algo no está en nuestra información, no lo prometas: di que lo consultamos.`)}${ok("tienes el borrador con sus fuentes.")}`},
{t:"Comprueba lo delicado",s:"con lupa",b:()=>`<p class="what">Revisa a mano precios, plazos y condiciones: es lo que más problemas da si está desactualizado.</p>${cb("¿Alguna de las fuentes que has usado podría estar desactualizada? Dime la fecha de cada una.")}${ok("los datos delicados están comprobados.")}`},
{t:"Envíalo tú",s:"firmar",b:()=>`<ol><li>Ajusta el tono si hace falta y envíalo desde tu herramienta de soporte.</li><li>Si la consulta era nueva, añádela al Brain para la próxima vez.</li></ol>${ok("la respuesta está enviada.")}`}
]},
{s:"bienvenida",t:"Guía de bienvenida",d:"Todo lo que necesita saber una persona nueva, sacado de vuestra documentación.",
meta:["👩‍🍳 Fácil","👋 Onboarding","🍽 Resultado: una guía de bienvenida"],
q:"¿Para qué puesto?",ph:"Di cuál. Ejemplo: una persona nueva en atención al cliente",
fin:"La guía está lista. Pide a la persona nueva que te diga qué echó en falta.",
def:"onboarding",empty:"[di el puesto, arriba]",
apps:{onboarding:{n:"Persona nueva",db:true,d:"crear una guía de bienvenida para una persona nueva con todo lo que necesita saber de la empresa"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"El índice",s:"estructura",b:()=>`${cb(`Consulta primero GuruSup Brain. Quiero ${D()} para el puesto de [puesto]. Propón un índice: primer día, primera semana, primer mes, herramientas, normas y a quién preguntar cada cosa. Espera mi OK.`)}${ok("has aprobado el índice.")}`},
{t:"La guía",s:"contenido",b:()=>`${cb("Escribe la guía con ese índice usando solo nuestra documentación, con la fuente de cada sección. Marca con [FALTA] lo que no encuentres.")}${ok("tienes la guía, con los huecos marcados.")}`},
{t:"Completa y comparte",s:"cerrar",b:()=>`<ol><li>Rellena los [FALTA] con quien corresponda.</li><li>Comparte la guía con la persona nueva.</li></ol>${ok("la guía está completa y compartida.")}`}
]},
{s:"propuestas",t:"Propuestas de venta",d:"Servicios, casos de éxito y precios actualizados en una propuesta para un cliente concreto.",
meta:["👩‍🍳 Fácil","📈 Ventas","🍽 Resultado: una propuesta comercial"],
q:"¿Para qué cliente?",ph:"Describe al cliente y lo que necesita. Ejemplo: una cadena de 5 gimnasios que quiere automatizar reservas",
fin:"Tu propuesta está lista. Revisa los precios antes de enviarla.",
def:"ventas",empty:"[describe al cliente, arriba]",
apps:{ventas:{n:"Un cliente concreto",db:false,d:"preparar una propuesta comercial con nuestros servicios, casos de éxito y precios actualizados"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Entiende al cliente",s:"contexto",b:()=>`${cb(`Consulta primero GuruSup Brain. Quiero ${D()}. El cliente: [descripción]. ¿Qué servicios nuestros encajan y qué casos de éxito parecidos tenemos? Con fuente.`)}${ok("sabes qué ofrecer y con qué casos.")}`},
{t:"La propuesta",s:"escribirla",b:()=>`${cb("Escribe la propuesta: su problema, nuestra solución, un caso parecido, precio y siguientes pasos. Usa solo precios de nuestra documentación y di de qué fecha son.")}${ok("tienes la propuesta.")}`},
{t:"Revisa precios y envía",s:"con lupa",b:()=>`<p class="what">Comprueba con la persona responsable que los precios están vigentes antes de enviarla.</p>${ok("la propuesta está revisada.")}`}
]}
]};
