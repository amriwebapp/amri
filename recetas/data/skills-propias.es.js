(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: enséñale tu método con Skills",
intro:"Una Skill es una ficha con tu forma de hacer algo: Claude la saca sola cuando la tarea encaja. Activa las Skills una vez y después crea la que necesites: informes, correos, fichas de producto o material de clase.",
meta:["📕 4 recetas","⏱ 25-30 min cada una","💶 Gratis si tu plan de Claude incluye Skills","🍽 Resultado: Skills que Claude usa solo"],
ing:"Ingredientes",
fin:"Las Skills están activadas. Elige qué método quieres enseñarle.",
R:{key:"libro-skills",
ing:()=>`<li><b>Claude</b>: el alumno aplicado.</li><li><b>Una Skill</b>: tu receta escrita. Una carpeta con un archivo <b>SKILL.md</b> que explica cómo hacer algo.</li>${DB()?`<li><b>Tu ejemplo o plantilla</b>: el plato de muestra.</li>`:""}<li><b>Ejecución de código activada</b>: la encimera. Las Skills la necesitan.</li>`,
steps:[
{t:"Entiende qué es una Skill",s:"3 min · la idea",b:()=>`<p class="what">Una Skill es como una ficha de receta que Claude guarda en su cajón. No la usa siempre: la saca solo cuando la tarea encaja con su descripción.</p><ul><li><b>Nombre</b>: cómo se llama.</li><li><b>Descripción</b>: cuándo usarla. Es lo más importante.</li><li><b>Instrucciones</b>: el paso a paso, ejemplos y plantillas.</li></ul>${ok("sabrías explicar a alguien qué es una Skill en una frase.")}`},
{t:"Activa las Skills",s:"2 min · ajustes",b:()=>`<ol><li>En Claude, abre los ajustes y busca <b>Capacidades</b> (<i>Capabilities</i>) o <b>Personalizar → Skills</b>.</li><li>Activa la <b>ejecución de código</b> (<i>Code execution</i>) si te lo pide.</li><li>Comprueba que aparece la sección de <b>Skills</b>.</li></ol>${tip("Según tu plan o tu empresa, algunas opciones pueden estar en otro sitio o desactivadas. Mira la ayuda de Claude si no lo ves.")}${ok("ves la sección de Skills.")}`},
{x:1,t:"Compártela con AMRI",s:"Opcional · código abierto",b:()=>`<p class="what">Si tu Skill puede ayudar a otras personas, súmala a la plataforma: AMRI es abierta. Mándanos el .zip a <a href="mailto:contact@amri.es">contact@amri.es</a> con una frase de para qué sirve. Si usas GitHub, también puedes abrir una propuesta en el repositorio.</p>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>No se instala</b>: el .zip debe contener la carpeta con el SKILL.md dentro.</li><li><b>No se usa sola</b>: la descripción es demasiado vaga. Hazla más concreta.</li><li><b>Hace cosas raras</b>: pide a Claude que revise la Skill y la simplifique.</li></ol>`}
]},
recetas:[
{s:"informes",t:"Informes siempre con tu formato",d:"Tu estructura, tu tono y tus gráficos, en cada informe, sin repetir instrucciones.",
meta:["⏱ 30 min","👩‍🍳 Media","📊 Informes","🍽 Resultado: una Skill de informes instalada"],
q:"¿Qué informes haces?",ph:"Di cuáles. Ejemplo: el informe mensual de ventas para la dirección",
fin:"Claude ya hace tus informes a tu manera. Pídele uno sin nombrar la Skill y verás.",
def:"informes",empty:"[di qué informes haces, arriba]",
apps:{informes:{n:"Informe mensual",db:true,d:"escribir informes mensuales siempre con la misma estructura, tono y gráficos"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Que Claude te entreviste",s:"10 min · tu método",b:()=>`${cb(`Quiero crear una Skill para ${D()}.\n\nEntrevístame, de una en una, con estas preguntas y las que necesites: ¿para quién es el informe? ¿qué secciones lleva y en qué orden? ¿qué datos y de dónde salen? ¿qué gráficos uso? ¿qué tono y qué extensión? ¿qué errores no quiero ver nunca? Máximo 8 preguntas.`)}${ok("has respondido a todas las preguntas.")}`},
{t:"Dale un informe bueno",s:"3 min · el modelo",b:()=>`<ol><li>Adjunta un informe tuyo que te guste (sin datos confidenciales).</li></ol>${cb("Este es un informe que me gusta. Inclúyelo en la Skill como modelo de estructura y explica qué tiene de bueno.")}${ok("Claude ha entendido tu modelo.")}`},
{t:"Que escriba la Skill",s:"5 min · el archivo",b:()=>`${cb("Escribe la Skill: una carpeta con SKILL.md (nombre corto, descripción que diga cuándo usarla y las instrucciones paso a paso) y una plantilla del informe en un archivo aparte. La descripción debe empezar por: «Úsala cuando haya que preparar el informe mensual…». Empaquétala en un .zip.")}${ok("tienes el .zip descargado.")}`},
{t:"Instálala y pruébala sin nombrarla",s:"7 min · el examen",b:()=>`<ol><li>En la sección de Skills de los ajustes, pulsa <b>Subir Skill</b> y elige el .zip.</li><li>En un chat nuevo, pide:</li></ol>${cb("Prepárame el informe de este mes con estos datos: [pega tus datos].")}${tip("Si no usa tu formato, mejora la descripción con las palabras exactas que usas al pedirlo.")}${ok("el informe sale con tu estructura sin que se lo recuerdes.")}`}
]},
{s:"correos",t:"Correos con tu estilo",d:"Tu tono, tu firma y tus respuestas habituales, en cada correo a clientes.",
meta:["⏱ 25 min","👩‍🍳 Media","✉️ Correos","🍽 Resultado: una Skill de correos instalada"],
q:"¿Qué correos escribes?",ph:"Di cuáles. Ejemplo: respuestas a clientes que piden presupuesto",
fin:"Tus correos ya suenan a ti sin explicárselo cada vez.",
def:"correos",empty:"[di qué correos escribes, arriba]",
apps:{correos:{n:"Correos a clientes",db:true,d:"responder correos de clientes con mi tono, mis firmas y mis respuestas habituales"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Que Claude te entreviste",s:"8 min · tu estilo",b:()=>`${cb(`Quiero crear una Skill para ${D()}.\n\nPregúntame, de una en una: ¿tuteo o usted? ¿cómo saludo y cómo me despido? ¿cuál es mi firma? ¿qué respondo siempre a las 5 preguntas más típicas? ¿qué palabras no uso nunca? ¿qué no debo prometer? Máximo 8 preguntas.`)}${ok("has respondido a todo.")}`},
{t:"Pega tres correos tuyos",s:"3 min · tu voz",b:()=>`${cb("Estos son tres correos que escribí yo y me gustan: [pégalos, sin datos de clientes]. Úsalos en la Skill como ejemplo de mi tono.")}${ok("Claude ha visto tus correos.")}`},
{t:"Que escriba la Skill",s:"5 min · el archivo",b:()=>`${cb("Escribe la Skill: SKILL.md con nombre corto, una descripción que empiece por «Úsala cuando haya que responder a un cliente…», mis reglas de tono, mi firma y mis respuestas habituales en un archivo aparte. Empaquétala en un .zip.")}${ok("tienes el .zip.")}`},
{t:"Instálala y pruébala",s:"9 min · el examen",b:()=>`<ol><li>Súbela en <b>Subir Skill</b>.</li><li>En un chat nuevo, pega un correo real de un cliente (sin datos personales) y pide: «Respóndele».</li></ol>${ok("la respuesta suena a ti y lleva tu firma.")}`}
]},
{s:"fichas",t:"Fichas de producto",d:"Título, descripción, ventajas y medidas, siempre igual de completas.",
meta:["⏱ 25 min","👩‍🍳 Media","🏷 Tienda","🍽 Resultado: una Skill de fichas de producto instalada"],
q:"¿Qué vendes?",ph:"Di qué. Ejemplo: cerámica hecha a mano",
fin:"Cada producto nuevo tendrá su ficha completa en un minuto.",
def:"fichas",empty:"[di qué vendes, arriba]",
apps:{fichas:{n:"Mi tienda",db:true,d:"escribir fichas de producto para mi tienda con título, descripción, ventajas y medidas"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Que Claude te entreviste",s:"8 min · tu formato",b:()=>`${cb(`Quiero crear una Skill para ${D()}.\n\nPregúntame, de una en una: ¿qué secciones lleva cada ficha? ¿cuánto de largo el título y la descripción? ¿qué datos técnicos son obligatorios (medidas, material, cuidados)? ¿qué tono? ¿qué palabras usa mi cliente al buscar? ¿qué no debo afirmar nunca? Máximo 8 preguntas.`)}${ok("has respondido a todo.")}`},
{t:"Dale tu mejor ficha",s:"3 min · el modelo",b:()=>`${cb("Esta es la mejor ficha de mi tienda: [pégala]. Úsala como modelo en la Skill.")}${ok("Claude tiene tu modelo.")}`},
{t:"Que escriba la Skill",s:"5 min · el archivo",b:()=>`${cb("Escribe la Skill: SKILL.md con descripción que empiece por «Úsala cuando haya que escribir la ficha de un producto…», las reglas y una plantilla. Que nunca invente medidas ni materiales: si falta un dato, que lo pregunte. Empaquétala en un .zip.")}${ok("tienes el .zip.")}`},
{t:"Instálala y pruébala",s:"9 min · el examen",b:()=>`<ol><li>Súbela en <b>Subir Skill</b>.</li><li>Pide: «Ficha para este producto: [datos y una foto]».</li></ol>${ok("la ficha sale completa, con tu formato y sin datos inventados.")}`}
]},
{s:"clases",t:"Material de clase",d:"Fichas de ejercicios con nivel, objetivos y soluciones, siempre con tu estructura.",
meta:["⏱ 25 min","👩‍🍳 Media","🎓 Clases","🍽 Resultado: una Skill de material de clase instalada"],
q:"¿Qué enseñas?",ph:"Di qué y a quién. Ejemplo: matemáticas a 2.º de la ESO",
fin:"Ya tienes un ayudante que prepara material a tu manera.",
def:"clases",empty:"[di qué enseñas, arriba]",
apps:{clases:{n:"Fichas de ejercicios",db:false,d:"preparar fichas de ejercicios para mis alumnos con nivel, objetivos y soluciones"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Que Claude te entreviste",s:"8 min · tu método",b:()=>`${cb(`Quiero crear una Skill para ${D()}. Enseño [qué] a [quién].\n\nPregúntame, de una en una: ¿qué partes lleva cada ficha? ¿cómo ordeno los ejercicios por dificultad? ¿cómo escribo los objetivos? ¿cómo presento las soluciones? ¿qué adaptaciones hago para quien va más lento? Máximo 8 preguntas.`)}${ok("has respondido a todo.")}`},
{t:"Que escriba la Skill",s:"5 min · el archivo",b:()=>`${cb("Escribe la Skill: SKILL.md con descripción que empiece por «Úsala cuando haya que preparar una ficha de ejercicios…», la estructura, las reglas de dificultad y una plantilla. Empaquétala en un .zip.")}${ok("tienes el .zip.")}`},
{t:"Instálala y pruébala",s:"12 min · el examen",b:()=>`<ol><li>Súbela en <b>Subir Skill</b>.</li><li>Pide: «Prepárame una ficha sobre [tema] para la clase de mañana».</li><li>Resuelve tú dos ejercicios para comprobar las soluciones.</li></ol>${ok("la ficha sigue tu estructura y las soluciones son correctas.")}`}
]}
]};
