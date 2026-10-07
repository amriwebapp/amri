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
{s:"informes",t:"Informes siempre con tu formato",d:"Tu estructura, tu tono y tus gráficos, en cada informe.",
meta:["⏱ 30 min","👩‍🍳 Media","📊 Informes","🍽 Resultado: una Skill de informes"],
q:"¿Qué quieres enseñarle?",ph:"Describe la tarea que repites. Ejemplo: preparar el acta de las reuniones de mi asociación siempre con el mismo formato",yn:"¿Tienes un ejemplo o una plantilla que ya uses?",yntip:"Si dudas, elige «Sí»: un buen ejemplo vale más que mil explicaciones.",
fin:"Claude ya conoce tu método. A partir de ahora lo aplicará solo cuando lo necesite. Y si quieres, compártelo: puede ser una receta de AMRI.",
def:"informes",empty:"[describe aquí tu método, arriba]",
apps:{"informes":{"n":"Informes con mi formato","db":true,"d":"escribir informes mensuales siempre con la misma estructura, tono y gráficos"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{t:"Que Claude te entreviste",s:"10 min · tu método",b:()=>`<p class="what">Tú sabes hacerlo; Claude sabe escribirlo. Deja que te pregunte.</p>${cb(`Quiero crear una Skill para ${D()}.\n\nEntrevístame con preguntas de una en una para entender mi método: cuándo lo uso, qué pasos sigo, qué errores evito y cómo sé que ha quedado bien. Máximo 8 preguntas.`)}${ok("has respondido a todas las preguntas.")}`},
{db:1,t:"Dale tu plato de muestra",s:"3 min · el ejemplo",b:()=>`<ol><li>Adjunta tu ejemplo o plantilla al chat (📎).</li><li>Escribe:</li></ol>${cb("Este es un ejemplo de cómo me gusta que quede. Inclúyelo en la Skill como referencia y explica qué tiene de bueno.")}${tip("Quita datos personales o confidenciales del ejemplo antes de subirlo.")}${ok("Claude ha entendido tu ejemplo.")}`},
{t:"Que Claude escriba la Skill",s:"5 min · redactar",b:()=>`${cb("Ahora escribe la Skill. Crea una carpeta con un archivo SKILL.md que tenga: un nombre corto, una descripción clara de CUÁNDO usarla, y las instrucciones paso a paso. Si hace falta, añade plantillas o ejemplos en archivos aparte. Empaquétala en un .zip para que pueda descargarla.")}
${det("Una buena descripción…",["Dice cuándo usarla: «Úsala cuando el usuario pida el acta de una reunión».","Usa las palabras que tú usarías al pedirlo.","Es corta: una o dos frases."])}${ok("tienes un archivo .zip descargado.")}`},
{t:"Instálala",s:"2 min · al cajón",b:()=>`<ol><li>Vuelve a la sección de <b>Skills</b> de los ajustes.</li><li>Pulsa <b>Subir Skill</b> (<i>Upload skill</i>) y elige tu .zip.</li><li>Comprueba que aparece activada.</li></ol>${ok("tu Skill aparece en la lista.")}`},
{t:"Pruébala sin nombrarla",s:"5 min · el examen",b:()=>`<p class="what">La prueba de fuego: pedir la tarea sin mencionar la Skill.</p>${cb("[Pide la tarea como la pedirías normalmente, sin decir «usa la Skill»]")}${tip("Si Claude no la usa, mejora la descripción: añade las palabras exactas con las que la pides.")}${ok("Claude aplica tu método sin que se lo recuerdes.")}`}
]},
{s:"correos",t:"Correos con tu estilo",d:"Tu tono, tu firma y tus respuestas habituales, en cada correo a clientes.",
meta:["⏱ 25 min","👩‍🍳 Media","✉️ Correos","🍽 Resultado: una Skill de correos"],
q:"¿Qué quieres enseñarle?",ph:"Describe la tarea que repites. Ejemplo: preparar el acta de las reuniones de mi asociación siempre con el mismo formato",yn:"¿Tienes un ejemplo o una plantilla que ya uses?",yntip:"Si dudas, elige «Sí»: un buen ejemplo vale más que mil explicaciones.",
fin:"Claude ya conoce tu método. A partir de ahora lo aplicará solo cuando lo necesite. Y si quieres, compártelo: puede ser una receta de AMRI.",
def:"correos",empty:"[describe aquí tu método, arriba]",
apps:{"correos":{"n":"Correos con mi estilo","db":true,"d":"responder correos de clientes con mi tono, mis firmas y mis respuestas habituales"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{t:"Que Claude te entreviste",s:"10 min · tu método",b:()=>`<p class="what">Tú sabes hacerlo; Claude sabe escribirlo. Deja que te pregunte.</p>${cb(`Quiero crear una Skill para ${D()}.\n\nEntrevístame con preguntas de una en una para entender mi método: cuándo lo uso, qué pasos sigo, qué errores evito y cómo sé que ha quedado bien. Máximo 8 preguntas.`)}${ok("has respondido a todas las preguntas.")}`},
{db:1,t:"Dale tu plato de muestra",s:"3 min · el ejemplo",b:()=>`<ol><li>Adjunta tu ejemplo o plantilla al chat (📎).</li><li>Escribe:</li></ol>${cb("Este es un ejemplo de cómo me gusta que quede. Inclúyelo en la Skill como referencia y explica qué tiene de bueno.")}${tip("Quita datos personales o confidenciales del ejemplo antes de subirlo.")}${ok("Claude ha entendido tu ejemplo.")}`},
{t:"Que Claude escriba la Skill",s:"5 min · redactar",b:()=>`${cb("Ahora escribe la Skill. Crea una carpeta con un archivo SKILL.md que tenga: un nombre corto, una descripción clara de CUÁNDO usarla, y las instrucciones paso a paso. Si hace falta, añade plantillas o ejemplos en archivos aparte. Empaquétala en un .zip para que pueda descargarla.")}
${det("Una buena descripción…",["Dice cuándo usarla: «Úsala cuando el usuario pida el acta de una reunión».","Usa las palabras que tú usarías al pedirlo.","Es corta: una o dos frases."])}${ok("tienes un archivo .zip descargado.")}`},
{t:"Instálala",s:"2 min · al cajón",b:()=>`<ol><li>Vuelve a la sección de <b>Skills</b> de los ajustes.</li><li>Pulsa <b>Subir Skill</b> (<i>Upload skill</i>) y elige tu .zip.</li><li>Comprueba que aparece activada.</li></ol>${ok("tu Skill aparece en la lista.")}`},
{t:"Pruébala sin nombrarla",s:"5 min · el examen",b:()=>`<p class="what">La prueba de fuego: pedir la tarea sin mencionar la Skill.</p>${cb("[Pide la tarea como la pedirías normalmente, sin decir «usa la Skill»]")}${tip("Si Claude no la usa, mejora la descripción: añade las palabras exactas con las que la pides.")}${ok("Claude aplica tu método sin que se lo recuerdes.")}`}
]},
{s:"fichas",t:"Fichas de producto",d:"Título, descripción, ventajas y medidas, siempre igual de completas.",
meta:["⏱ 25 min","👩‍🍳 Media","🏷 Tienda","🍽 Resultado: una Skill de fichas de producto"],
q:"¿Qué quieres enseñarle?",ph:"Describe la tarea que repites. Ejemplo: preparar el acta de las reuniones de mi asociación siempre con el mismo formato",yn:"¿Tienes un ejemplo o una plantilla que ya uses?",yntip:"Si dudas, elige «Sí»: un buen ejemplo vale más que mil explicaciones.",
fin:"Claude ya conoce tu método. A partir de ahora lo aplicará solo cuando lo necesite. Y si quieres, compártelo: puede ser una receta de AMRI.",
def:"fichas",empty:"[describe aquí tu método, arriba]",
apps:{"fichas":{"n":"Fichas de producto","db":true,"d":"escribir fichas de producto para mi tienda con título, descripción, ventajas y medidas"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{t:"Que Claude te entreviste",s:"10 min · tu método",b:()=>`<p class="what">Tú sabes hacerlo; Claude sabe escribirlo. Deja que te pregunte.</p>${cb(`Quiero crear una Skill para ${D()}.\n\nEntrevístame con preguntas de una en una para entender mi método: cuándo lo uso, qué pasos sigo, qué errores evito y cómo sé que ha quedado bien. Máximo 8 preguntas.`)}${ok("has respondido a todas las preguntas.")}`},
{db:1,t:"Dale tu plato de muestra",s:"3 min · el ejemplo",b:()=>`<ol><li>Adjunta tu ejemplo o plantilla al chat (📎).</li><li>Escribe:</li></ol>${cb("Este es un ejemplo de cómo me gusta que quede. Inclúyelo en la Skill como referencia y explica qué tiene de bueno.")}${tip("Quita datos personales o confidenciales del ejemplo antes de subirlo.")}${ok("Claude ha entendido tu ejemplo.")}`},
{t:"Que Claude escriba la Skill",s:"5 min · redactar",b:()=>`${cb("Ahora escribe la Skill. Crea una carpeta con un archivo SKILL.md que tenga: un nombre corto, una descripción clara de CUÁNDO usarla, y las instrucciones paso a paso. Si hace falta, añade plantillas o ejemplos en archivos aparte. Empaquétala en un .zip para que pueda descargarla.")}
${det("Una buena descripción…",["Dice cuándo usarla: «Úsala cuando el usuario pida el acta de una reunión».","Usa las palabras que tú usarías al pedirlo.","Es corta: una o dos frases."])}${ok("tienes un archivo .zip descargado.")}`},
{t:"Instálala",s:"2 min · al cajón",b:()=>`<ol><li>Vuelve a la sección de <b>Skills</b> de los ajustes.</li><li>Pulsa <b>Subir Skill</b> (<i>Upload skill</i>) y elige tu .zip.</li><li>Comprueba que aparece activada.</li></ol>${ok("tu Skill aparece en la lista.")}`},
{t:"Pruébala sin nombrarla",s:"5 min · el examen",b:()=>`<p class="what">La prueba de fuego: pedir la tarea sin mencionar la Skill.</p>${cb("[Pide la tarea como la pedirías normalmente, sin decir «usa la Skill»]")}${tip("Si Claude no la usa, mejora la descripción: añade las palabras exactas con las que la pides.")}${ok("Claude aplica tu método sin que se lo recuerdes.")}`}
]},
{s:"clases",t:"Material de clase",d:"Fichas de ejercicios con nivel, objetivos y soluciones.",
meta:["⏱ 25 min","👩‍🍳 Media","🎓 Clases","🍽 Resultado: una Skill de material de clase"],
q:"¿Qué quieres enseñarle?",ph:"Describe la tarea que repites. Ejemplo: preparar el acta de las reuniones de mi asociación siempre con el mismo formato",yn:"¿Tienes un ejemplo o una plantilla que ya uses?",yntip:"Si dudas, elige «Sí»: un buen ejemplo vale más que mil explicaciones.",
fin:"Claude ya conoce tu método. A partir de ahora lo aplicará solo cuando lo necesite. Y si quieres, compártelo: puede ser una receta de AMRI.",
def:"clases",empty:"[describe aquí tu método, arriba]",
apps:{"clases":{"n":"Material de clase","db":false,"d":"preparar fichas de ejercicios para mis alumnos con nivel, objetivos y soluciones"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{t:"Que Claude te entreviste",s:"10 min · tu método",b:()=>`<p class="what">Tú sabes hacerlo; Claude sabe escribirlo. Deja que te pregunte.</p>${cb(`Quiero crear una Skill para ${D()}.\n\nEntrevístame con preguntas de una en una para entender mi método: cuándo lo uso, qué pasos sigo, qué errores evito y cómo sé que ha quedado bien. Máximo 8 preguntas.`)}${ok("has respondido a todas las preguntas.")}`},
{db:1,t:"Dale tu plato de muestra",s:"3 min · el ejemplo",b:()=>`<ol><li>Adjunta tu ejemplo o plantilla al chat (📎).</li><li>Escribe:</li></ol>${cb("Este es un ejemplo de cómo me gusta que quede. Inclúyelo en la Skill como referencia y explica qué tiene de bueno.")}${tip("Quita datos personales o confidenciales del ejemplo antes de subirlo.")}${ok("Claude ha entendido tu ejemplo.")}`},
{t:"Que Claude escriba la Skill",s:"5 min · redactar",b:()=>`${cb("Ahora escribe la Skill. Crea una carpeta con un archivo SKILL.md que tenga: un nombre corto, una descripción clara de CUÁNDO usarla, y las instrucciones paso a paso. Si hace falta, añade plantillas o ejemplos en archivos aparte. Empaquétala en un .zip para que pueda descargarla.")}
${det("Una buena descripción…",["Dice cuándo usarla: «Úsala cuando el usuario pida el acta de una reunión».","Usa las palabras que tú usarías al pedirlo.","Es corta: una o dos frases."])}${ok("tienes un archivo .zip descargado.")}`},
{t:"Instálala",s:"2 min · al cajón",b:()=>`<ol><li>Vuelve a la sección de <b>Skills</b> de los ajustes.</li><li>Pulsa <b>Subir Skill</b> (<i>Upload skill</i>) y elige tu .zip.</li><li>Comprueba que aparece activada.</li></ol>${ok("tu Skill aparece en la lista.")}`},
{t:"Pruébala sin nombrarla",s:"5 min · el examen",b:()=>`<p class="what">La prueba de fuego: pedir la tarea sin mencionar la Skill.</p>${cb("[Pide la tarea como la pedirías normalmente, sin decir «usa la Skill»]")}${tip("Si Claude no la usa, mejora la descripción: añade las palabras exactas con las que la pides.")}${ok("Claude aplica tu método sin que se lo recuerdes.")}`}
]}
]};
