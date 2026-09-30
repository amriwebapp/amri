"""Genera las recetas nuevas de AMRI a partir de la plantilla de una receta existente.
Uso: python3 tools/recetas_nuevas.py
Cada receta usa el mismo motor interactivo (pasos, progreso guardado, copiar prompts).
"""
import os, re
HERE = os.path.dirname(os.path.abspath(__file__))
RDIR = os.path.join(HERE, "..", "recetas")
tpl = open(os.path.join(RDIR, "asistente-ia.html"), encoding="utf-8").read()
HEAD = tpl[:tpl.index("<main>")]
ENGINE = tpl[tpl.index("<script>\nconst KEY=R.key"):tpl.index('<script src="../i18n.js"></script>')]

CONECTA = lambda name, extra="": f'''<p class="what">Un conector es un permiso para que Claude use {name} por ti. Se activa una vez y queda guardado.</p><h3>Pasos</h3><ol>
<li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (en inglés: <i>Customize → Connectors</i>).</li>
<li>Pulsa <b>Explorar conectores</b> (<i>Browse connectors</i>), busca <b>«{name}»</b> y pulsa <b>Conectar</b>.</li>
<li>Se abre una ventana de {name}: inicia sesión y pulsa <b>Permitir</b>.</li>
<li>En un chat nuevo, pulsa el botón <b>+</b> → <b>Conectores</b> y comprueba que {name} está activado.</li></ol>{extra}${{tip("Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la <a href='https://support.claude.com' target='_blank' rel='noopener'>ayuda de Claude</a>.")}}'''

R = []

# ---------------------------------------------------------------- 1. HIGGSFIELD
R.append(dict(slug="higgsfield-cine", title="Receta: imágenes y vídeos de cine con Higgsfield",
meta=["⏱ 30 min aprox.","👩‍🍳 Fácil","💶 Higgsfield usa créditos (hay prueba)","🍽 Resultado: imágenes y clips listos para publicar"],
ing="Ingredientes", q="¿Qué quieres rodar?",
ph="Describe tu imagen o vídeo. Ejemplo: un clip de 8 segundos de una taza de café humeante en una cocina con luz de mañana",
yn="¿Vas a usar una foto tuya como referencia (tu producto, tu logo, tu local)?",
yntip="Si dudas, elige «Sí»: te enseñamos a subir tu foto. Si no la usas, la receta funciona igual.",
fin="Ya tienes tus primeras piezas generadas con Higgsfield desde Claude. Guarda la conversación: es tu receta para repetirlo con otros productos. Más abajo tienes extras: pasar de imagen a vídeo y cómo usarlo con responsabilidad.",
js=r'''const R={key:"receta-higgs",def:"producto",empty:"[describe aquí tu imagen o vídeo, arriba]",
apps:{
 producto:{n:"Foto de producto",db:true,d:"tres fotos de estudio de mi producto, con luz suave, fondo color crema y sombras delicadas"},
 anuncio:{n:"Anuncio en vídeo",db:true,d:"un anuncio vertical 9:16 de 8 segundos para redes, con mi producto girando despacio bajo una luz cálida"},
 personaje:{n:"Personaje de marca",db:false,d:"un personaje ilustrado y amable que represente a mi marca, en tres poses diferentes"},
 escena:{n:"Escena de cine",db:false,d:"un plano cinematográfico de 8 segundos: amanecer en una cocina tranquila, con la cámara avanzando muy despacio"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el director. Entiende tu idea y escribe las indicaciones.</li><li><b>Higgsfield</b>: el estudio de rodaje. Genera imágenes y vídeos con varios modelos de IA. Funciona con créditos.</li><li><b>Conector de Higgsfield</b>: el ayudante de dirección. Lleva las órdenes de Claude al estudio.</li>${DB()?`<li><b>Tu foto de referencia</b>: el atrezo. Una imagen clara de tu producto o logo.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · cuentas",b:()=>`<p class="what">Necesitas dos cuentas: una en Claude y otra en Higgsfield.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> (web o app de escritorio).</li>
<li>Crea una cuenta en <a href="https://higgsfield.ai" target="_blank" rel="noopener">Higgsfield</a>.</li>
<li>Mira qué créditos o prueba gratuita tienes: cada imagen o vídeo gasta créditos, y el vídeo gasta más que la imagen.</li></ol>
${tip("Las ofertas y los planes de Higgsfield cambian a menudo. Revisa su web antes de empezar para no llevarte sorpresas.")}${ok("puedes entrar en las dos cuentas.")}`},
{t:"Conecta Higgsfield con Claude",s:"3 min · conector personalizado",b:()=>`<p class="what">Higgsfield tiene su propio conector. Se añade pegando una dirección web.</p><h3>Pasos</h3><ol>
<li>En Claude abre <b>Personalizar → Conectores</b> (<i>Customize → Connectors</i>).</li>
<li>Pulsa <b>+</b> → <b>Añadir conector personalizado</b> (<i>Add custom connector</i>).</li>
<li>Nombre: <b>Higgsfield</b>. Dirección (URL): copia esta:</li></ol>${cb("https://mcp.higgsfield.ai/mcp")}<ol start="4"><li>Pulsa <b>Añadir</b> y después <b>Conectar</b>. Inicia sesión con tu cuenta de Higgsfield y acepta.</li></ol>
${det("¿Qué es esa dirección?",["Es el «teléfono» del conector: Claude llama ahí cuando necesita generar algo.","No tienes que instalar nada: todo pasa en internet.","En el plan gratuito de Claude puedes añadir <b>un</b> conector personalizado."])}
${ok("en un chat nuevo, al pulsar <b>+ → Conectores</b>, ves Higgsfield activado.")}`},
{t:"Escribe el guion con Claude",s:"5 min · la idea",b:()=>`<p class="what">Antes de gastar créditos, deja que Claude te ayude a afinar la idea. Es gratis y mejora mucho el resultado.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo y pega:</li></ol>${cb(`Actúa como director de fotografía. Quiero crear ${D()}.\n\nAntes de generar nada, hazme 4 preguntas cortas sobre estilo, colores, encuadre y formato. Después propón 2 ideas en una frase cada una y espera a que yo elija.`)}
${det("¿Por qué no generar directamente?",["Cada generación gasta créditos: mejor acertar a la primera.","Claude traduce tus palabras a indicaciones técnicas (luz, lente, movimiento).","Tú decides antes de que se gaste nada."])}${ok("tienes una idea elegida y clara.")}`},
{db:1,t:"Sube tu foto de referencia",s:"3 min · el atrezo",b:()=>`<p class="what">Con una referencia, el resultado se parece a tu producto de verdad.</p><h3>Pasos</h3><ol>
<li>Haz una foto de tu producto con buena luz, de frente y sobre un fondo liso.</li>
<li>Arrástrala al chat de Claude (o pulsa el clip 📎).</li>
<li>Escribe:</li></ol>${cb("Usa esta foto como referencia. El producto tiene que verse igual: misma forma, mismos colores y mismo logo. Cambia solo el fondo, la luz y el encuadre.")}
${tip("Usa solo imágenes tuyas o con permiso. No subas fotos de otras personas sin su consentimiento.")}${ok("Claude ha visto tu foto y te confirma qué va a mantener.")}`},
{t:"Genera la primera versión",s:"5 min · ¡acción!",b:()=>`<p class="what">Ahora sí: Claude le pide a Higgsfield que lo genere.</p><h3>Pasos</h3><ol><li>En el mismo chat, pega:</li></ol>${cb(`Perfecto. Usa Higgsfield para generar ${D()}.${DB()?" Usa mi foto de referencia.":""}\n\nElige tú el modelo más adecuado y dime cuál has usado y por qué. Empieza con una sola versión para no gastar créditos de más.`)}
${tip("Si pides vídeo, puede tardar uno o dos minutos. Respira: es normal.")}${ok("ves la imagen o el vídeo en el chat, con un enlace para abrirlo.")}`},
{t:"Ajusta con cambios pequeños",s:"5 min · pulir",b:()=>`<p class="what">Igual que en cocina: se prueba y se ajusta la sal. Un cambio cada vez.</p><h3>Pasos</h3><ol><li>Pide cambios concretos:</li></ol>${cb("Mantén todo igual, pero haz la luz un poco más cálida y acerca la cámara al producto. Cambia solo eso.")}
${det("Palabras que ayudan",["<b>Luz</b>: suave, dorada, de ventana, de estudio.","<b>Cámara</b>: plano cenital, primer plano, travelling lento.","<b>Ambiente</b>: tranquilo, minimalista, acogedor, de película de los 70."])}${ok("la nueva versión se parece más a lo que tenías en la cabeza.")}`},
{t:"Descarga y guarda tu receta",s:"2 min · emplatar",b:()=>`<p class="what">Guarda el resultado y también las palabras que lo crearon.</p><h3>Pasos</h3><ol>
<li>Abre el enlace del resultado y descárgalo (también lo tienes en tu biblioteca de Higgsfield).</li>
<li>Pide a Claude:</li></ol>${cb("Escríbeme en un solo bloque la indicación final que ha funcionado, para poder reutilizarla con otros productos.")}${ok("tienes el archivo descargado y tu indicación guardada en una nota.")}`},
{x:1,t:"De imagen a vídeo",s:"10 min · opcional",b:()=>`<p class="what">Una buena imagen puede convertirse en un clip corto con movimiento.</p>${cb("Anima la última imagen: movimiento de cámara muy lento hacia delante, vapor suave y luz que cambia un poco. 8 segundos, formato vertical 9:16.")}${tip("Pide primero una versión corta. Si te gusta, pide variantes.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>El conector no aparece</b>: revisa que la URL esté bien copiada y vuelve a pulsar Conectar.</li><li><b>Pide iniciar sesión otra vez</b>: es normal de vez en cuando; vuelve a conectar.</li><li><b>Se queda sin créditos</b>: mira tu saldo en Higgsfield.</li><li><b>El resultado no se parece</b>: da una referencia más clara y pide un solo cambio cada vez.</li></ol>`},
{x:1,t:"Úsalo con responsabilidad",s:"Siempre · consejos",b:()=>`<ol><li>No crees imágenes de <b>personas reales</b> sin su permiso.</li><li>No imites <b>marcas ni personajes</b> que no son tuyos.</li><li>Si publicas anuncios, indica que el contenido está <b>generado con IA</b> cuando la plataforma lo pida.</li><li>Revisa los términos de uso comercial de tu plan.</li></ol>`}
]};'''))

# ---------------------------------------------------------------- 2. CANVA
R.append(dict(slug="canva-diseno", title="Receta: diseña en Canva hablando con Claude",
meta=["⏱ 25 min aprox.","👩‍🍳 Fácil","💶 0 € (Canva gratis)","🍽 Resultado: diseños editables en tu Canva"],
ing="Ingredientes (todos gratuitos)", q="¿Qué quieres diseñar?",
ph="Describe tu diseño. Ejemplo: un cartel A4 para el mercadillo de mi barrio del sábado 12, con horario y dirección",
yn="¿Tienes logo o colores de marca que quieras usar?",
yntip="Si dudas, elige «Sí»: te enseñamos a darle tu marca a Claude. Si no tienes, él te propone una paleta.",
fin="Tus diseños ya están en tu cuenta de Canva, listos para retocar a mano o publicar. Más abajo tienes extras: reutilizar diseños y qué hacer si algo falla.",
js=r'''const R={key:"receta-canva",def:"posts",empty:"[describe aquí tu diseño, arriba]",
apps:{
 posts:{n:"Posts para Instagram",db:true,d:"tres posts cuadrados para Instagram que anuncien mi nuevo producto, con un titular corto y mucho aire"},
 presentacion:{n:"Presentación",db:false,d:"una presentación de 8 diapositivas, clara y visual, para explicar mi proyecto a posibles clientes"},
 cartel:{n:"Cartel o flyer",db:true,d:"un cartel A4 para un evento, con título grande, fecha, hora y lugar bien visibles"},
 cv:{n:"Currículum",db:false,d:"un currículum de una página, limpio y moderno, con mi experiencia y mis habilidades"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el diseñador jefe. Decide textos, estructura y estilo.</li><li><b>Canva</b>: el taller. Donde se crean y guardan los diseños. Plan gratuito.</li><li><b>Conector de Canva</b>: el aprendiz. Crea, busca y exporta diseños en tu cuenta.</li>${DB()?`<li><b>Tu logo y tus colores</b>: el sello de la casa.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"3 min · cuentas",b:()=>`<p class="what">Solo necesitas una cuenta en Claude y otra en Canva.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Crea tu cuenta gratuita en <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a> si no la tienes.</li></ol>${ok("puedes entrar en las dos.")}`},
{t:"Conecta Canva con Claude",s:"3 min · el conector",b:()=>`''' + CONECTA("Canva") + r'''${ok("Canva aparece activado en tus conectores.")}`},
{db:1,t:"Presenta tu marca",s:"5 min · el sello",b:()=>`<p class="what">Para que todo salga con tu estilo, primero sube tu logo a Canva y cuéntale a Claude tus colores.</p><h3>Pasos</h3><ol>
<li>En Canva, pulsa <b>Subidos → Subir archivos</b> y sube tu logo (mejor PNG con fondo transparente).</li>
<li>En Claude, escribe:</li></ol>${cb("Mi marca: colores principales [#D2561F y #FBF6EE], tipografía [la que uses], tono [cercano y tranquilo]. Mi logo está subido en Canva con el nombre [nombre del archivo]. Úsalo en todo lo que diseñes hoy.")}
${tip("¿No sabes el código de tus colores? Pregúntale a Claude: «Propón una paleta de 3 colores para una marca de [lo tuyo]».")}${ok("Claude te repite tu marca con sus palabras.")}`},
{t:"Pide tu diseño",s:"5 min · la orden",b:()=>`<p class="what">Primero los textos, luego el diseño. Así no pierdes tiempo con versiones que no te gustan.</p><h3>Pasos</h3><ol><li>Pega esto en el chat:</li></ol>${cb(`Usa Canva para crear ${D()}.\n\nAntes de diseñar, propón los textos de cada pieza y espera mi OK. Cuando te lo dé, crea el diseño${DB()?" con mi marca":""} y dame el enlace para abrirlo en Canva.`)}
${det("¿Qué significa cada parte?",["<b>«Usa Canva»</b>: le dice a Claude que use el conector, no que lo dibuje él.","<b>Primero los textos</b>: lo más importante de un diseño es lo que dice.","<b>El enlace</b>: para abrirlo y retocarlo tú."])}${ok("Claude te da uno o varios enlaces a diseños nuevos en tu Canva.")}`},
{t:"Retoca a mano en Canva",s:"5 min · tu toque",b:()=>`<p class="what">La IA hace el 80 %. El último toque es tuyo.</p><h3>Pasos</h3><ol>
<li>Abre el enlace. El diseño está en tu cuenta, en <b>Proyectos</b>.</li>
<li>Cambia lo que quieras: textos, fotos, colores.</li>
<li>¿Prefieres que lo haga Claude? Pídeselo en el chat, un cambio cada vez:</li></ol>${cb("En el diseño que acabas de crear, haz el titular más grande y cambia la foto de fondo por algo más luminoso. No toques lo demás.")}${ok("el diseño está como tú querías.")}`},
{t:"Exporta y publica",s:"2 min · servir",b:()=>`<p class="what">Descárgalo en el formato que necesites.</p>${cb("Exporta el diseño como PNG para redes y también como PDF para imprimir. Dame los enlaces de descarga.")}${tip("También puedes exportar desde Canva con el botón <b>Compartir → Descargar</b>.")}${ok("tienes los archivos descargados.")}`},
{x:1,t:"Reutiliza lo que ya tienes",s:"Opcional",b:()=>`<p class="what">Claude también puede buscar en tus diseños antiguos.</p>${cb("Busca en mi Canva los diseños que hice para [evento o tema] y crea una versión nueva con la fecha actualizada.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude dibuja en vez de usar Canva</b>: empieza el mensaje con «Usa el conector de Canva».</li><li><b>No encuentra tu logo</b>: dile el nombre exacto del archivo subido.</li><li><b>Alguna función es de Canva Pro</b> (kit de marca, quitar fondos): el resto funciona con el plan gratuito.</li></ol>${det("💡 Ideas para seguir diseñando",["Un calendario de contenido para todo el mes.","Tarjetas de visita.","Menús para tu restaurante.","Miniaturas para YouTube."])}`}
]};'''))

# ---------------------------------------------------------------- 3. FIGMA
R.append(dict(slug="figma-a-web", title="Receta: de Figma a web real",
meta=["⏱ 1 hora aprox.","👩‍🍳 Dificultad media","💶 0 € para empezar","🍽 Resultado: tu diseño convertido en web"],
ing="Ingredientes (todos gratuitos)", q="¿Qué diseño tienes?",
ph="Describe qué hay en tu diseño. Ejemplo: la página de inicio de mi estudio de yoga, con horarios y un botón para reservar",
yn="¿Quieres publicarla en internet al terminar?",
yntip="Si dudas, elige «Sí»: te enlazamos la receta de publicar gratis. Puedes dejarlo para otro día.",
fin="Tu diseño ya es una web que funciona. Guarda el archivo y la conversación: si cambias el diseño en Figma, puedes pedirle a Claude que actualice solo esa parte.",
js=r'''const R={key:"receta-figma",def:"landing",empty:"[describe aquí tu diseño, arriba]",
apps:{
 landing:{n:"Página de inicio",db:true,d:"una página de inicio con cabecera, sección de servicios, opiniones y un pie con contacto"},
 portfolio:{n:"Portfolio",db:true,d:"un portfolio con mi presentación, una galería de proyectos y un formulario de contacto"},
 componente:{n:"Un componente",db:false,d:"una tarjeta de producto con imagen, precio y botón, en sus estados normal y al pasar el ratón"},
 app:{n:"Pantalla de app",db:false,d:"la pantalla principal de una app móvil con menú inferior y una lista de tarjetas"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Figma</b>: el plano de la cocina. Donde está tu diseño. Plan gratuito.</li><li><b>Claude</b>: el constructor. Lee el diseño y escribe la web.</li><li><b>Conector de Figma</b>: las gafas de Claude. Le deja ver capas, colores, textos y medidas.</li><li><b>Tu navegador</b>: la mesa. Para probar la web en tu ordenador.</li>${DB()?`<li><b>GitHub y Cloudflare</b>: el reparto a domicilio. Para publicarla gratis.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · cuentas",b:()=>`<p class="what">Necesitas un diseño en Figma. Si no tienes uno, usa una plantilla de la comunidad.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://www.figma.com" target="_blank" rel="noopener">Figma</a> con una cuenta gratuita.</li>
<li>Si no tienes diseño, busca en <b>Figma Community</b> una plantilla gratuita de página web y pulsa <b>Open in Figma</b>.</li>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("tienes un diseño abierto en Figma.")}`},
{t:"Ordena el diseño",s:"10 min · mise en place",b:()=>`<p class="what">Un diseño ordenado se convierte en una web mucho mejor. Es como cortar los ingredientes antes de cocinar.</p><h3>Pasos</h3><ol>
<li>Pon cada pantalla en su propio <b>frame</b> (marco) con un nombre claro: «Inicio», «Contacto».</li>
<li>Nombra las capas importantes: «Cabecera», «Botón reservar», «Foto principal».</li>
<li>Si sabes usar <b>Auto layout</b>, úsalo: Claude entenderá mejor cómo se ordena todo.</li></ol>${tip("No hace falta que sea perfecto. Con que los nombres tengan sentido, ya ayuda mucho.")}${ok("tu frame principal tiene nombre y sus capas se entienden.")}`},
{t:"Conecta Figma con Claude",s:"3 min · el conector",b:()=>`''' + CONECTA("Figma") + r'''${ok("Figma aparece activado en tus conectores.")}`},
{t:"Copia el enlace del frame",s:"1 min · señala el plato",b:()=>`<p class="what">Claude necesita saber qué parte del diseño tiene que construir.</p><h3>Pasos</h3><ol>
<li>En Figma, haz clic en tu frame principal.</li>
<li>Clic derecho → <b>Copy/Paste as → Copy link to selection</b> (Copiar enlace a la selección).</li></ol>${ok("tienes un enlace que empieza por figma.com/design/…")}`},
{t:"Pide tu web",s:"10 min · la orden",b:()=>`<p class="what">Claude lee el diseño y lo convierte en una web real.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo y pega (cambia el enlace por el tuyo):</li></ol>${cb(`Este es el enlace a un frame de Figma: [pega aquí tu enlace]\n\nUsa el conector de Figma para leerlo. Es ${D()}.\n\nConviértelo en una web en un único archivo index.html con HTML y CSS. Respeta colores, tipografías, tamaños y espacios. Que se vea bien en móvil. Usa textos reales del diseño, no «lorem ipsum». Al final dime qué partes no has podido copiar exactamente.`)}
${det("¿Qué significa cada parte?",["<b>Un único archivo</b>: más fácil de probar y publicar.","<b>Que se vea bien en móvil</b>: la mayoría de tus visitas vendrán del teléfono.","<b>Qué no has podido copiar</b>: así sabes qué revisar."])}${ok("Claude te da un archivo index.html para descargar o copiar.")}`},
{t:"Pruébala y compara",s:"10 min · probar la sal",b:()=>`<p class="what">Abre la web al lado del diseño y busca diferencias.</p><h3>Pasos</h3><ol>
<li>Guarda el archivo como <b>index.html</b> en una carpeta y ábrelo con doble clic.</li>
<li>Ponlo al lado de Figma y compara.</li>
<li>Pide los ajustes de uno en uno:</li></ol>${cb("En la web, el espacio entre la cabecera y la sección de servicios es más grande que en Figma. Ajústalo para que sea igual y no cambies nada más.")}
${tip("Para ver cómo queda en móvil: en el navegador pulsa F12 y el icono del teléfono.")}${ok("la web y el diseño se parecen como dos gotas de agua.")}`},
{db:1,t:"Publícala gratis",s:"15 min · servir",b:()=>`<p class="what">Tu archivo ya está listo para salir a internet.</p><ol><li>Sigue desde el paso de GitHub de la receta <a href="webapp-gratis.html">Tu webapp online y gratis</a>.</li><li>Sube tu <b>index.html</b> en lugar de crear uno nuevo.</li></ol>${ok("tienes una dirección web que puedes abrir desde el móvil.")}`},
{x:1,t:"Tus colores como variables",s:"Opcional · nivel pro",b:()=>`<p class="what">Si usas variables o estilos en Figma, pide que se conviertan en variables CSS. Así cambiar un color cambia toda la web.</p>${cb("Lee los estilos y variables de color y texto de mi archivo de Figma y conviértelos en variables CSS al principio del archivo. Usa esas variables en toda la web.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude no puede leer el enlace</b>: comprueba que el conector está activado y que tu cuenta de Figma tiene acceso al archivo.</li><li><b>Fuentes distintas</b>: pide que use Google Fonts con la misma tipografía o la más parecida.</li><li><b>Imágenes que faltan</b>: expórtalas desde Figma y ponlas en la misma carpeta; dile a Claude sus nombres.</li></ol>`}
]};'''))

# ---------------------------------------------------------------- 4. NOTION
R.append(dict(slug="notion-cerebro", title="Receta: tu segundo cerebro en Notion",
meta=["⏱ 30 min aprox.","👩‍🍳 Fácil","💶 0 € (Notion gratis)","🍽 Resultado: un Notion ordenado que se resume solo"],
ing="Ingredientes (todos gratuitos)", q="¿Qué quieres ordenar?",
ph="Describe qué quieres organizar. Ejemplo: las ideas para mi tesis, con fuentes, citas y un calendario de entregas",
yn="¿Ya tienes páginas en Notion con contenido?",
yntip="Si dudas, elige «Sí»: Claude revisará lo que tienes antes de proponer nada. Si tu Notion está vacío, también funciona.",
fin="Tu Notion ya tiene una estructura clara y una rutina semanal. Cada viernes, un mensaje y listo. Más abajo tienes extras de seguridad e ideas.",
js=r'''const R={key:"receta-notion",def:"notas",empty:"[describe aquí qué quieres ordenar, arriba]",
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
{t:"Conecta Notion con Claude",s:"3 min · el conector",b:()=>`''' + CONECTA("Notion", '<p>Notion te preguntará a qué espacio de trabajo quieres dar acceso. Elige el tuyo.</p>') + r'''${ok("Notion aparece activado en tus conectores.")}`},
{db:1,t:"Que Claude explore tu Notion",s:"5 min · inventario",b:()=>`<p class="what">Antes de ordenar, hay que saber qué hay en la despensa.</p>${cb(`Busca en mi Notion todo lo relacionado con ${D()}. Hazme un resumen de cómo está organizado ahora y qué problemas ves (duplicados, páginas vacías, cosas sin clasificar).\n\nNo cambies nada todavía.`)}${tip("«No cambies nada todavía» es tu mejor amigo. Primero mirar, luego tocar.")}${ok("Claude te describe lo que tienes.")}`},
{t:"Diseña la estructura",s:"5 min · el plan",b:()=>`<p class="what">Una <b>base de datos</b> de Notion es como una hoja de cálculo bonita: cada fila es una página.</p>${cb(`Propón una base de datos de Notion para organizar ${D()}.\n\nDime: las propiedades (columnas) con su tipo, 2 o 3 vistas útiles (tabla, tablero, calendario) y una plantilla para páginas nuevas. Explícalo en pocas palabras y espera mi OK.`)}${ok("tienes una propuesta que entiendes y te gusta.")}`},
{t:"Créala en tu Notion",s:"5 min · montar",b:()=>`<p class="what">Ahora Claude la construye por ti.</p>${cb(`Perfecto. Crea en mi Notion una página llamada «Mi segundo cerebro» con esa base de datos.${DB()?" Después mueve o copia ahí mis páginas existentes que encajen, y dime cuáles has tocado.":" Añade 3 ejemplos para que vea cómo queda."}`)}
${tip("Si Claude no puede crear algo (por ejemplo, un tipo de vista), te dirá cómo hacerlo a mano en dos clics.")}${ok("abres Notion y ves la página nueva con su base de datos.")}`},
{t:"Tu repaso semanal",s:"5 min · la rutina",b:()=>`<p class="what">La magia está en repetirlo. Cada viernes, un mensaje:</p>${cb("Revisa lo que he añadido o cambiado esta semana en «Mi segundo cerebro». Escríbeme un resumen en 5 líneas, 3 prioridades para la semana que viene y cualquier cosa que se esté quedando olvidada. Guárdalo como página nueva llamada «Semana del [fecha]».")}${ok("tienes tu primer resumen semanal guardado en Notion.")}`},
{x:1,t:"Cuida tu despensa",s:"Siempre · seguridad",b:()=>`<ol><li>Pide siempre <b>«enséñame antes de borrar»</b>.</li><li>No guardes contraseñas ni datos bancarios en Notion.</li><li>Notion guarda el historial de cada página: si algo sale mal, puedes volver atrás.</li></ol>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude no encuentra una página</b>: comprueba que el espacio de trabajo tiene acceso en el conector.</li><li><b>Resultados a medias</b>: pide partes más pequeñas («solo las notas de marzo»).</li></ol>${det("💡 Ideas para seguir",["Un diario con preguntas diarias.","Un CRM sencillo de clientes.","Un plan de estudio para tus exámenes."])}`}
]};'''))

# ---------------------------------------------------------------- 5. GMAIL + CALENDAR
R.append(dict(slug="gmail-calendario", title="Receta: tu secretaría con Gmail y Google Calendar",
meta=["⏱ 25 min aprox.","👩‍🍳 Fácil","💶 0 € para empezar","🍽 Resultado: un resumen de tu día en 1 minuto"],
ing="Ingredientes", q="¿Qué te quita más tiempo?",
ph="Describe tu caso. Ejemplo: tengo 80 correos al día de proveedores y siempre se me pasan los importantes",
yn="¿Quieres que prepare borradores de respuesta?",
yntip="Claude nunca debe enviar nada por ti en esta receta: solo prepara borradores que tú revisas.",
fin="Tu secretaría ya está en marcha. Cada mañana, un mensaje y sabes qué importa. Más abajo tienes extras sobre privacidad e ideas.",
js=r'''const R={key:"receta-gmail",def:"manana",empty:"[describe aquí tu caso, arriba]",
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
{t:"Conecta Gmail y Calendar",s:"5 min · dos conectores",b:()=>`''' + CONECTA("Gmail", '<p>Repite lo mismo buscando <b>«Google Calendar»</b>.</p>') + r'''${ok("Gmail y Google Calendar aparecen activados.")}`},
{t:"Crea «Mi secretaría»",s:"5 min · las reglas",b:()=>`<p class="what">Un proyecto guarda tus reglas para siempre. Así no tienes que repetirlas.</p><ol><li>En Claude: <b>Proyectos → Crear proyecto</b>, llámalo <b>Mi secretaría</b>.</li><li>En <b>Instrucciones</b>, pega:</li></ol>${cb(`Eres mi secretaría. Tu objetivo: ${D()}.\n\nReglas:\n- Nunca envíes correos ni aceptes invitaciones: solo propones y preparas borradores.\n- Sé breve: listas cortas, lo urgente primero.\n- Si algo parece una estafa o pide datos bancarios, avísame.\n- Escribe como yo: cercano, claro y educado.`)}${ok("tienes el proyecto con sus instrucciones.")}`},
{t:"Tu primer resumen",s:"3 min · buenos días",b:()=>`<p class="what">Abre un chat dentro del proyecto y pide tu resumen.</p>${cb("Revisa mis correos de las últimas 24 horas y mi agenda de hoy. Dime:\n1) Lo urgente (máximo 5).\n2) Lo que puede esperar.\n3) Mis reuniones de hoy y qué debería preparar para cada una.")}${ok("en un minuto sabes qué te espera hoy.")}`},
{db:1,t:"Borradores con tu tono",s:"5 min · responder",b:()=>`<p class="what">Claude escribe, tú revisas y envías.</p>${cb("Prepara borradores de respuesta para los correos urgentes, con mi tono. No envíes nada. Si el conector permite crear borradores en Gmail, déjalos ahí; si no, escríbemelos aquí para copiarlos.")}${tip("Lee siempre cada borrador antes de enviarlo. Tú firmas, tú decides.")}${ok("tienes borradores listos para revisar.")}`},
{t:"Hazlo costumbre",s:"2 min · la rutina",b:()=>`<p class="what">Guarda el mensaje del resumen en una nota y úsalo cada mañana dentro del proyecto.</p>${tip("Si usas <b>Claude Cowork</b> en el escritorio, puedes convertirlo en una <b>tarea programada</b> que se ejecute sola cada mañana laborable.")}${ok("mañana repites y tardas menos de un minuto.")}`},
{x:1,t:"Privacidad tranquila",s:"Siempre · consejos",b:()=>`<ol><li>Puedes <b>desconectar</b> Gmail o Calendar cuando quieras en Personalizar → Conectores.</li><li>No pidas a Claude que reenvíe datos personales de otras personas.</li><li>Revisa la política de tu empresa antes de conectar una cuenta de trabajo.</li></ol>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>No ve tus correos</b>: vuelve a conectar Gmail y acepta todos los permisos que pide.</li><li><b>Resúmenes demasiado largos</b>: añade a las instrucciones «máximo 10 líneas».</li></ol>${det("💡 Ideas para seguir",["Un resumen de los viernes con lo pendiente.","Encontrar facturas y apuntarlas en una hoja.","Proponer huecos para una reunión con 3 personas."])}`}
]};'''))

# ---------------------------------------------------------------- 6. CLAUDE IN CHROME
R.append(dict(slug="claude-chrome", title="Receta: Claude navega por ti con Chrome",
meta=["⏱ 20 min aprox.","👩‍🍳 Fácil","💶 Requiere un plan de pago de Claude","🍽 Resultado: tareas web hechas mientras miras"],
ing="Ingredientes", q="¿Qué quieres que haga por ti?",
ph="Describe la tarea. Ejemplo: buscar 5 casas rurales en Asturias para 4 personas en mayo, con precio y valoración",
yn="¿La tarea necesita tus datos personales (nombre, dirección, teléfono…)?",
yntip="Si dudas, elige «Sí»: te explicamos qué datos dar y cuáles nunca.",
fin="Claude ya sabe moverse por la web contigo. Empieza con tareas pequeñas y ve dándole más confianza poco a poco.",
js=r'''const R={key:"receta-chrome",def:"comparar",empty:"[describe aquí la tarea, arriba]",
apps:{
 comparar:{n:"Comparar precios",db:false,d:"comparar el precio de un producto en 4 tiendas online y hacerme una tabla con precio, envío y valoraciones"},
 investigar:{n:"Investigar un tema",db:false,d:"leer las 5 mejores fuentes sobre un tema y resumirme lo importante con los enlaces"},
 formulario:{n:"Rellenar formularios",db:true,d:"rellenar un formulario largo de inscripción con mis datos, dejándolo listo para que yo lo envíe"},
 viaje:{n:"Planear un viaje",db:false,d:"buscar opciones de alojamiento y transporte para un viaje, sin reservar ni pagar nada"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Google Chrome</b>: la cocina. El navegador donde trabajará Claude.</li><li><b>Claude in Chrome</b>: el pinche. Una extensión oficial que ve la página, hace clic y escribe.</li><li><b>Un plan de pago de Claude</b>: la extensión no está en el plan gratuito.</li>${DB()?`<li><b>Tus datos básicos</b>: solo los imprescindibles para la tarea.</li>`:""}`,
steps:[
{t:"Instala la extensión",s:"5 min · el pinche",b:()=>`<p class="what">Claude in Chrome es una extensión: un pequeño añadido para tu navegador.</p><ol>
<li>Abre Chrome y busca <b>«Claude»</b> en la <a href="https://chromewebstore.google.com" target="_blank" rel="noopener">Chrome Web Store</a> (la oficial, de Anthropic).</li>
<li>Pulsa <b>Añadir a Chrome</b>.</li>
<li>Pulsa el icono del puzle 🧩 y fija Claude con la chincheta.</li>
<li>Ábrela e inicia sesión con tu cuenta de Claude.</li></ol>${tip("Comprueba que el autor es Anthropic. Hay extensiones de imitación.")}${ok("al pulsar el icono, se abre Claude en un panel lateral.")}`},
{t:"Decide los permisos",s:"2 min · reglas de la casa",b:()=>`<p class="what">La extensión te pregunta antes de actuar en cada web. Empieza siendo prudente.</p><ol><li>Cuando te pida permiso para un sitio, léelo con calma.</li><li>Al principio, elige la opción de que <b>te pregunte antes de actuar</b>.</li><li>No le des acceso a tu banco ni a webs con datos muy sensibles.</li></ol>${ok("sabes dónde se aprueban y se quitan los permisos.")}`},
{t:"Tu primera tarea",s:"5 min · a mirar",b:()=>`<p class="what">Abre el panel de Claude y dale la tarea. Mira cómo trabaja: es fascinante y tranquilizador.</p>${cb(`Quiero ${D()}.\n\nAntes de empezar, dime tu plan en pasos cortos. Pídeme permiso antes de pulsar cualquier botón de enviar, reservar, comprar o pagar. Al terminar, dame el resultado en una tabla con enlaces.`)}
${det("¿Por qué pedir el plan antes?",["Ves qué va a hacer antes de que lo haga.","Puedes corregirle si se va por otro camino.","Aprendes cómo razona."])}${ok("Claude te enseña su plan y empieza a navegar.")}`},
{db:1,t:"Tus datos, con cuidado",s:"3 min · la regla de oro",b:()=>`<p class="what">Da solo lo imprescindible, y el botón final lo pulsas tú.</p><ol><li>Escribe en el chat solo los datos que pide el formulario.</li><li><b>Nunca</b> le des contraseñas, números de tarjeta ni códigos de verificación.</li><li>Pide:</li></ol>${cb("Rellena el formulario con estos datos, pero NO lo envíes. Cuando termines, avísame para que lo revise y lo envíe yo.")}${ok("el formulario está relleno y el botón de enviar lo pulsas tú.")}`},
{t:"Revisa el resultado",s:"5 min · probar",b:()=>`<p class="what">Comprueba dos o tres datos al azar. La IA puede equivocarse al leer una web.</p>${cb("Dime de dónde has sacado cada dato de la tabla, con el enlace exacto.")}${ok("los datos que has comprobado coinciden con las webs.")}`},
{x:1,t:"Seguridad: ojo con las trampas",s:"Siempre · importante",b:()=>`<p class="what">Algunas webs esconden instrucciones para engañar a los asistentes de IA (se llama <i>prompt injection</i>).</p><ol><li>Si Claude hace algo que no le pediste, <b>páralo</b> con el botón de detener.</li><li>Usa la extensión en webs de confianza.</li><li>Mantén la regla: compras y pagos, siempre tú.</li></ol>`},
{x:1,t:"Ideas para seguir",s:"Opcional",b:()=>`${det("💡 Tareas que funcionan bien",["Rellenar una hoja de cálculo con datos de varias webs.","Revisar si los enlaces de tu web funcionan.","Buscar convocatorias o ayudas y resumir los requisitos.","Ordenar tus pestañas abiertas por tema."])}`}
]};'''))

# ---------------------------------------------------------------- 7. SKILLS
R.append(dict(slug="skills-claude", title="Receta: enséñale tu método con Skills",
meta=["⏱ 30 min aprox.","👩‍🍳 Dificultad media","💶 0 € para empezar","🍽 Resultado: una Skill que Claude usa sola"],
ing="Ingredientes", q="¿Qué quieres enseñarle?",
ph="Describe la tarea que repites. Ejemplo: preparar el acta de las reuniones de mi asociación siempre con el mismo formato",
yn="¿Tienes un ejemplo o una plantilla que ya uses?",
yntip="Si dudas, elige «Sí»: un buen ejemplo vale más que mil explicaciones.",
fin="Claude ya conoce tu método. A partir de ahora lo aplicará solo cuando lo necesite. Y si quieres, compártelo: puede ser una receta de AMRI.",
js=r'''const R={key:"receta-skills",def:"informes",empty:"[describe aquí tu método, arriba]",
apps:{
 informes:{n:"Informes con mi formato",db:true,d:"escribir informes mensuales siempre con la misma estructura, tono y gráficos"},
 correos:{n:"Correos con mi estilo",db:true,d:"responder correos de clientes con mi tono, mis firmas y mis respuestas habituales"},
 fichas:{n:"Fichas de producto",db:true,d:"escribir fichas de producto para mi tienda con título, descripción, ventajas y medidas"},
 clases:{n:"Material de clase",db:false,d:"preparar fichas de ejercicios para mis alumnos con nivel, objetivos y soluciones"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el alumno aplicado.</li><li><b>Una Skill</b>: tu receta escrita. Una carpeta con un archivo <b>SKILL.md</b> que explica cómo hacer algo.</li>${DB()?`<li><b>Tu ejemplo o plantilla</b>: el plato de muestra.</li>`:""}<li><b>Ejecución de código activada</b>: la encimera. Las Skills la necesitan.</li>`,
steps:[
{t:"Entiende qué es una Skill",s:"3 min · la idea",b:()=>`<p class="what">Una Skill es como una ficha de receta que Claude guarda en su cajón. No la usa siempre: la saca solo cuando la tarea encaja con su descripción.</p><ul><li><b>Nombre</b>: cómo se llama.</li><li><b>Descripción</b>: cuándo usarla. Es lo más importante.</li><li><b>Instrucciones</b>: el paso a paso, ejemplos y plantillas.</li></ul>${ok("sabrías explicar a alguien qué es una Skill en una frase.")}`},
{t:"Activa las Skills",s:"2 min · ajustes",b:()=>`<ol><li>En Claude, abre los ajustes y busca <b>Capacidades</b> (<i>Capabilities</i>) o <b>Personalizar → Skills</b>.</li><li>Activa la <b>ejecución de código</b> (<i>Code execution</i>) si te lo pide.</li><li>Comprueba que aparece la sección de <b>Skills</b>.</li></ol>${tip("Según tu plan o tu empresa, algunas opciones pueden estar en otro sitio o desactivadas. Mira la ayuda de Claude si no lo ves.")}${ok("ves la sección de Skills.")}`},
{t:"Que Claude te entreviste",s:"10 min · tu método",b:()=>`<p class="what">Tú sabes hacerlo; Claude sabe escribirlo. Deja que te pregunte.</p>${cb(`Quiero crear una Skill para ${D()}.\n\nEntrevístame con preguntas de una en una para entender mi método: cuándo lo uso, qué pasos sigo, qué errores evito y cómo sé que ha quedado bien. Máximo 8 preguntas.`)}${ok("has respondido a todas las preguntas.")}`},
{db:1,t:"Dale tu plato de muestra",s:"3 min · el ejemplo",b:()=>`<ol><li>Adjunta tu ejemplo o plantilla al chat (📎).</li><li>Escribe:</li></ol>${cb("Este es un ejemplo de cómo me gusta que quede. Inclúyelo en la Skill como referencia y explica qué tiene de bueno.")}${tip("Quita datos personales o confidenciales del ejemplo antes de subirlo.")}${ok("Claude ha entendido tu ejemplo.")}`},
{t:"Que Claude escriba la Skill",s:"5 min · redactar",b:()=>`${cb("Ahora escribe la Skill. Crea una carpeta con un archivo SKILL.md que tenga: un nombre corto, una descripción clara de CUÁNDO usarla, y las instrucciones paso a paso. Si hace falta, añade plantillas o ejemplos en archivos aparte. Empaquétala en un .zip para que pueda descargarla.")}
${det("Una buena descripción…",["Dice cuándo usarla: «Úsala cuando el usuario pida el acta de una reunión».","Usa las palabras que tú usarías al pedirlo.","Es corta: una o dos frases."])}${ok("tienes un archivo .zip descargado.")}`},
{t:"Instálala",s:"2 min · al cajón",b:()=>`<ol><li>Vuelve a la sección de <b>Skills</b> de los ajustes.</li><li>Pulsa <b>Subir Skill</b> (<i>Upload skill</i>) y elige tu .zip.</li><li>Comprueba que aparece activada.</li></ol>${ok("tu Skill aparece en la lista.")}`},
{t:"Pruébala sin nombrarla",s:"5 min · el examen",b:()=>`<p class="what">La prueba de fuego: pedir la tarea sin mencionar la Skill.</p>${cb("[Pide la tarea como la pedirías normalmente, sin decir «usa la Skill»]")}${tip("Si Claude no la usa, mejora la descripción: añade las palabras exactas con las que la pides.")}${ok("Claude aplica tu método sin que se lo recuerdes.")}`},
{x:1,t:"Compártela con AMRI",s:"Opcional · open source",b:()=>`<p class="what">Si tu Skill puede ayudar a otras personas, súmala a la academia: AMRI es abierta. Abre una propuesta en nuestro repositorio de GitHub con tu carpeta y una frase de para qué sirve.</p>`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>No se instala</b>: el .zip debe contener la carpeta con el SKILL.md dentro.</li><li><b>No se usa sola</b>: la descripción es demasiado vaga. Hazla más concreta.</li><li><b>Hace cosas raras</b>: pide a Claude que revise la Skill y la simplifique.</li></ol>`}
]};'''))

# ---------------------------------------------------------------- 8. MCP PROPIO
R.append(dict(slug="conector-propio", title="Receta: cocina tu propio conector MCP",
meta=["⏱ 1 hora aprox.","👩‍🍳 Dificultad avanzada","💶 0 €","🍽 Resultado: Claude usando tus propios datos"],
ing="Ingredientes (todos gratuitos)", q="¿Qué quieres que Claude pueda usar?",
ph="Describe tus datos o tu app. Ejemplo: un Excel con los socios de mi club: nombre, cuota y fecha de alta",
yn="¿Tus datos están en un archivo de tu ordenador (CSV, Excel, carpeta)?",
yntip="Si dudas, elige «Sí»: es la forma más sencilla de empezar.",
fin="Has cocinado tu propio conector: Claude ya puede usar tus datos con herramientas que tú has definido. Esto es exactamente lo que hay detrás de Canva, Notion o Higgsfield.",
js=r'''const R={key:"receta-mcp",def:"csv",empty:"[describe aquí tus datos, arriba]",
apps:{
 csv:{n:"Mi hoja de datos",db:true,d:"consultar una hoja de cálculo (CSV) con mis clientes: buscar por nombre, filtrar y sumar importes"},
 notas:{n:"Mi carpeta de notas",db:true,d:"buscar y leer mis notas en archivos de texto de una carpeta de mi ordenador"},
 recetas:{n:"Mi recetario",db:true,d:"buscar recetas en mi recetario (un archivo JSON) por ingrediente y tiempo"},
 tiempo:{n:"Una API pública",db:false,d:"consultar el tiempo de cualquier ciudad usando la API gratuita de Open-Meteo, sin clave"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude Desktop</b>: el jefe de cocina. La app de escritorio.</li><li><b>Node.js</b>: el fogón. Programa gratuito para ejecutar tu conector.</li><li><b>El SDK de MCP</b>: la receta base oficial para crear conectores.</li>${DB()?`<li><b>Tus datos</b>: la despensa. Un archivo o carpeta de tu ordenador.</li>`:""}<li><b>Un editor de texto</b>: el cuchillo. Sirve el Bloc de notas; mejor VS Code.</li>`,
steps:[
{t:"Entiende cómo funciona",s:"3 min · la idea",b:()=>`<p class="what">MCP (Model Context Protocol) es un idioma común para que Claude hable con otras apps. Un conector es un pequeño programa que ofrece <b>herramientas</b>.</p><ul><li>Cada herramienta tiene un <b>nombre</b>, una <b>descripción</b> y unos <b>datos de entrada</b>.</li><li>Claude lee las descripciones y decide cuándo usarlas.</li><li>Tu conector hace el trabajo y devuelve el resultado.</li></ul>${ok("sabrías explicar qué es una herramienta MCP.")}`},
{t:"Prepara los ingredientes",s:"10 min · instalar",b:()=>`<ol><li>Instala <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> e inicia sesión.</li><li>Instala <a href="https://nodejs.org" target="_blank" rel="noopener">Node.js</a> (versión <b>LTS</b>).</li><li>Crea una carpeta llamada <b>mi-conector</b> en tu carpeta de usuario.</li><li>Abre una terminal (Mac: Terminal; Windows: PowerShell) y comprueba:</li></ol>${cb("node --version")}${ok("la terminal responde con un número de versión.")}`},
{t:"Pide el código a Claude",s:"10 min · la receta",b:()=>`<p class="what">Tú describes; Claude programa.</p>${cb(`Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo, sin TypeScript) usando el SDK oficial @modelcontextprotocol/sdk, con transporte stdio.\n\nObjetivo: ${D()}.\n\nDame:\n1) package.json\n2) server.js con 2 o 3 herramientas pequeñas, con descripciones muy claras\n3) los comandos exactos para instalarlo\n4) el bloque para claude_desktop_config.json\n\nExplícame cada archivo en una frase. Soy principiante.`)}
${det("¿Por qué pocas herramientas?",["Cada herramienta hace una cosa bien.","Descripciones claras = Claude acierta cuándo usarlas.","Siempre puedes añadir más después."])}${ok("Claude te ha dado los archivos y las instrucciones.")}`},
{t:"Guarda e instala",s:"5 min · montar",b:()=>`<ol><li>Guarda <b>package.json</b> y <b>server.js</b> dentro de <b>mi-conector</b>.</li><li>En la terminal, entra en la carpeta e instala:</li></ol>${cb("cd mi-conector\nnpm install")}${tip("Si sale algún error en rojo, cópialo entero y pégaselo a Claude. Es la forma más rápida de arreglarlo.")}${ok("aparece una carpeta node_modules dentro de mi-conector.")}`},
{db:1,t:"Pon tus datos en la despensa",s:"3 min · los datos",b:()=>`<ol><li>Copia tu archivo de datos dentro de <b>mi-conector</b> (por ejemplo, <b>datos.csv</b>).</li><li>Si es un Excel, guárdalo como <b>CSV</b> (Archivo → Guardar como → CSV).</li><li>Comprueba que el nombre coincide con el que usa server.js.</li></ol>${tip("Empieza con una copia de tus datos, no con el original.")}${ok("el archivo está en la carpeta con el nombre correcto.")}`},
{t:"Conéctalo a Claude Desktop",s:"5 min · el enchufe",b:()=>`<ol><li>En Claude Desktop: <b>Settings → Developer → Edit Config</b>.</li><li>Abre <b>claude_desktop_config.json</b> y añade tu conector (cambia la ruta por la tuya completa):</li></ol>${cb(`{\n  "mcpServers": {\n    "mi-conector": {\n      "command": "node",\n      "args": ["/ruta/completa/a/mi-conector/server.js"]\n    }\n  }\n}`)}<ol start="3"><li>Si ya había otros conectores, añade solo el bloque <b>«mi-conector»</b> dentro de <b>mcpServers</b>.</li><li>Guarda y <b>cierra Claude Desktop del todo</b>. Vuelve a abrirlo.</li></ol>
${det("¿Cómo sé la ruta completa?",["Mac: arrastra server.js a la Terminal y se escribe solo.","Windows: mantén Mayús, clic derecho en server.js → «Copiar como ruta». Usa barras dobles \\\\ o barras /."])}${ok("en un chat nuevo, tu conector aparece en la lista de herramientas.")}`},
{t:"Pruébalo",s:"5 min · a probar",b:()=>`${cb("¿Qué herramientas tienes de «mi-conector»? Usa una de ellas con un ejemplo sencillo y explícame qué ha pasado.")}${ok("Claude usa tu herramienta y te da un resultado con tus datos.")}`},
{x:1,t:"Depúralo con el Inspector",s:"Opcional · nivel pro",b:()=>`<p class="what">El Inspector oficial de MCP te deja probar las herramientas sin Claude.</p>${cb("npx @modelcontextprotocol/inspector node server.js")}${tip("Se abre una web local donde ves cada herramienta y puedes probarla a mano.")}`},
{x:1,t:"Llévalo a internet",s:"Opcional · siguiente nivel",b:()=>`<p class="what">Un conector local solo funciona en tu ordenador. Para usarlo desde la web o el móvil hay que publicarlo como <b>conector remoto</b> (por ejemplo, en Cloudflare Workers) y añadirlo en <b>Personalizar → Conectores → Añadir conector personalizado</b>, como hicimos con Higgsfield.</p>${cb("Quiero convertir mi servidor MCP en un conector remoto en Cloudflare Workers. Explícame los pasos para principiantes y qué debo tener en cuenta de seguridad.")}`},
{x:1,t:"Seguridad",s:"Siempre · importante",b:()=>`<ol><li>Empieza con herramientas de <b>solo lectura</b>.</li><li>No pongas contraseñas ni claves dentro del código: usa variables de entorno.</li><li>Instala solo conectores de fuentes en las que confíes.</li></ol>`}
]};'''))

LINK = '<link rel="stylesheet" href="../assets/receta.css">\n'

def page(r):
    head = HEAD
    head = re.sub(r"<title>.*?</title>", f"<title>{r['title']} · AMRI</title>", head)
    head = head.replace("</head>", LINK + "</head>")
    meta = "".join(f"<span>{m}</span>" for m in r["meta"])
    body = f'''<main>
<a class="abrand" href="../index.html"><span class="logo">A</span> AMRI <span class="sub">Academia de IA</span></a>
<a class="back" href="../index.html">← Volver a la academia</a>
<h1>{r['title']}</h1>
<div class="meta">{meta}</div>

<div class="ing"><h2>{r['ing']}</h2><ul id="ing"></ul></div>

<p style="margin:0 0 6px"><b>{r['q']}</b></p>
<div class="pick" role="group" aria-label="Tipo"></div>
<div class="custom" id="cu"><textarea id="cx" aria-label="Tu idea" placeholder="{r['ph']}"></textarea>
<div class="yn"><span>{r['yn']}</span><button class="chip" data-yn="1">Sí</button><button class="chip" data-yn="0">No</button></div>
<div class="tip">{r['yntip']}</div></div>

<div class="prog"><div class="bar"><i id="bar"></i></div><div class="pl" id="pt"></div></div>
<div id="steps"></div>
<div class="fin" id="fin"><h2>🎉 ¡Listo, a la mesa!</h2><p>{r['fin']}</p></div>
<h2 class="xt">Extras: después de servir</h2><p class="xs">Opcionales. No cuentan en tu progreso.</p><div id="extras"></div>
<div class="foot"><a class="back" href="../index.html" style="margin:18px 0 0">← Volver a la academia</a><button class="reset" id="reset">Empezar de nuevo</button></div>
<div class="afoot"><a href="../index.html">AMRI</a> · Academia abierta de IA · © 2026 AMRI</div>
</main>

<script>
{r['js']}
</script>
{ENGINE}<script src="../i18n.js"></script>
<script src="../assets/receta.js"></script>
</body>
</html>
'''
    return head + body

for r in R:
    open(os.path.join(RDIR, r["slug"] + ".html"), "w", encoding="utf-8").write(page(r))
    print("ok", r["slug"])
