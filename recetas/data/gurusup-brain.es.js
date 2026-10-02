(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: el cerebro de tu empresa con GuruSup y Claude",
meta:["⏱ 30 min aprox.","👩‍🍳 Dificultad media","💶 GuruSup es de pago (pide demo)","🍽 Resultado: Claude responde con lo que sabe tu empresa"],
ing:"Ingredientes",
q:"¿Para qué lo quieres usar?",
ph:"Describe tu caso. Ejemplo: que cualquier persona nueva del equipo sepa cómo gestionamos las devoluciones",
yn:"¿Tu empresa ya tiene información en otras apps (Notion, Drive, Slack, HubSpot…)?",
yntip:"Si dudas, elige «Sí»: te enseñamos a conectar esas fuentes al Brain para que Claude las use.",
fin:"Claude ya consulta el cerebro de tu empresa antes de responder. Menos preguntas repetidas y respuestas con la versión buena de las cosas. Más abajo tienes extras: usarlo en Claude Code y cuidar los permisos.",
R:{key:"receta-gurusup",def:"equipo",empty:"[describe aquí tu caso, arriba]",
apps:{
 equipo:{n:"Dudas del equipo",db:true,d:"responder las dudas internas del equipo: procesos, políticas, herramientas y a quién preguntar"},
 clientes:{n:"Atención al cliente",db:true,d:"preparar respuestas a clientes usando nuestras condiciones, precios y casos resueltos"},
 onboarding:{n:"Onboarding",db:true,d:"crear una guía de bienvenida para una persona nueva con todo lo que necesita saber de la empresa"},
 ventas:{n:"Propuestas de venta",db:false,d:"preparar propuestas comerciales con nuestros servicios, casos de éxito y precios actualizados"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el jefe de cocina. Razona, redacta y responde.</li><li><b>GuruSup Brain</b>: la memoria de la empresa. Reúne el conocimiento de tus herramientas y de tu equipo.</li><li><b>Conector de GuruSup Brain</b>: el camarero. Lleva las preguntas de Claude al Brain y trae las respuestas.</li>${DB()?`<li><b>Tus apps de empresa</b>: la despensa. Notion, Drive, Slack, HubSpot… lo que el Brain leerá.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · cuentas",b:()=>`<p class="what">Necesitas una cuenta de GuruSup con el Brain activado y tu cuenta de Claude.</p><ol>
<li>Entra en <a href="https://gurusup.com" target="_blank" rel="noopener">GuruSup</a>. Si tu empresa aún no lo usa, pide una demo: es un servicio de pago para empresas.</li>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${tip("GuruSup es una empresa española: la configuración y el soporte están en español.")}${ok("puedes entrar en GuruSup y en Claude.")}`},
{db:1,t:"Alimenta el Brain",s:"10 min · la despensa",b:()=>`<p class="what">El Brain aprende de las herramientas que ya usa tu empresa. Cuanto mejor lo alimentes, mejores respuestas.</p><ol>
<li>En GuruSup, busca la sección de <b>integraciones</b> del Brain.</li>
<li>Conecta las fuentes donde vive el conocimiento: Notion, Google Drive, Slack, tu CRM…</li>
<li>Empieza por lo más útil: procesos, preguntas frecuentes, políticas y precios.</li></ol>${tip("Cuando al Brain le falta algo, pregunta a la persona que lo sabe y lo guarda. Así se completa con el uso.")}${ok("el Brain muestra tus fuentes conectadas.")}`},
{t:"Conecta el Brain con Claude",s:"3 min · conector personalizado",b:()=>`<p class="what">GuruSup ofrece un conector (MCP) para su Brain. Se añade pegando una dirección.</p><h3>Pasos</h3><ol>
<li>En Claude abre <b>Personalizar → Conectores</b> (<i>Customize → Connectors</i>).</li>
<li>Pulsa <b>+</b> → <b>Añadir conector personalizado</b>.</li>
<li>Nombre: <b>GuruSup Brain</b>. Dirección (URL):</li></ol>${cb("https://mcp.brain.gurusup.com/mcp")}<ol start="4"><li>Pulsa <b>Añadir</b> y después <b>Conectar</b>. Inicia sesión con tu cuenta de GuruSup.</li></ol>
${det("¿Qué puede ver Claude?",["Solo la información a la que tu usuario de GuruSup tiene permiso.","Todo pasa en los servidores de GuruSup: no se instala nada en tu ordenador.","Puedes desconectarlo cuando quieras."])}${ok("GuruSup Brain aparece activado en tus conectores.")}`},
{t:"Tu primera pregunta",s:"5 min · probar",b:()=>`<p class="what">Haz una pregunta cuya respuesta conozcas. Así compruebas que responde con la versión buena.</p>${cb(`Consulta primero GuruSup Brain. Quiero ${D()}.\n\nEmpieza por esta pregunta: [escribe una duda real]. Dime de qué fuente sale la respuesta y si falta información.`)}
${tip("Pide siempre la fuente. Si Claude no la da, desconfía y compruébalo.")}${ok("la respuesta coincide con lo que tú sabes y cita su fuente.")}`},
{t:"Hazlo costumbre con un proyecto",s:"5 min · las reglas",b:()=>`<p class="what">Un proyecto de Claude guarda la regla de consultar el Brain siempre.</p><ol><li>En Claude: <b>Proyectos → Crear proyecto</b>, llámalo <b>Mi empresa</b>.</li><li>En <b>Instrucciones</b>, pega:</li></ol>${cb("Antes de responder cualquier cosa sobre la empresa, consulta GuruSup Brain. Cita siempre la fuente. Si no está en el Brain, dilo claramente y no lo inventes. Responde breve y en el tono de la empresa.")}${ok("en los chats del proyecto, Claude consulta el Brain sin que se lo pidas.")}`},
{t:"Rellena los huecos",s:"5 min · mejorar",b:()=>`<p class="what">Cada «no lo sé» es una oportunidad: la información que falta se añade una vez y sirve para siempre.</p>${cb("Hazme una lista de las preguntas de hoy que el Brain no pudo responder bien, y dime qué persona o documento podría completarlas.")}${ok("tienes una lista de huecos y a quién preguntar.")}`},
{x:1,t:"Úsalo en Claude Code",s:"Opcional · nivel pro",b:()=>`<p class="what">Si tu equipo programa con Claude Code, GuruSup tiene un plugin que añade el conector y una Skill que le dice a Claude que consulte el Brain primero.</p>${cb("/plugin marketplace add gurusup/gurusup-brain-plugin\n/plugin install gurusup-brain@gurusup")}${tip("La primera consulta abrirá el navegador para iniciar sesión en GuruSup.")}`},
{x:1,t:"Permisos y confianza",s:"Siempre · consejos",b:()=>`<ol><li>Revisa quién puede ver qué dentro de GuruSup: Claude respeta esos permisos.</li><li>No conectes fuentes con datos personales sensibles si no hace falta.</li><li>Lee la política de privacidad de GuruSup y las normas de tu empresa sobre IA.</li></ol>${det("💡 Ideas para seguir",["Un asistente de onboarding para cada puesto.","Respuestas a clientes revisadas por una persona antes de enviarse.","Documentar procesos que hoy solo están en la cabeza de alguien."])}`}
]}};
