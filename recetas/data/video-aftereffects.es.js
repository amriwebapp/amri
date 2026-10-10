(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: edita vídeo con Claude y After Effects",
intro:"Conecta Claude con After Effects una vez y después pídele en español intros, títulos, vídeos verticales y anuncios animados. Claude crea las capas y las animaciones dentro de tu proyecto; tú previsualizas, ajustas y exportas.",
meta:["📕 4 recetas","💶 After Effects es de pago","🍽 Resultado: vídeos animados en MP4"],
ing:"Ingredientes (todos gratuitos)",
fin:"After Effects está conectado con Claude. Elige qué vídeo quieres hacer.",
R:{key:"libro-ae",
ing:()=>`<li><b>Claude Desktop</b>: el jefe de cocina. Escribe las órdenes para After Effects.</li><li><b>After Effects</b>: el horno. Donde se crea la animación. Es de pago (Adobe ofrece prueba gratuita).</li><li><b>Node.js</b>: la llave de paso. Un programa gratuito que hace falta para conectar todo.</li><li><b>Conector MCP de After Effects</b>: el camarero. Lleva los pedidos de Claude al horno. Gratuito, hecho por la comunidad.</li><li><b>Adobe Media Encoder</b>: el emplatado. Exporta tu MP4 (viene con la suscripción de Adobe).</li>`,
steps:[
{t:"Prepara los ingredientes",s:"instalar programas",b:()=>`<p class="what">Necesitas tres programas en el mismo ordenador. El conector solo funciona si todo está en la misma máquina.</p><h3>Pasos</h3><ol>
<li>Instala <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> e inicia sesión.</li>
<li>Instala <b>After Effects</b> (versión 2024, 2025 o 2026) desde Creative Cloud. Si no lo tienes, Adobe ofrece una <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener">prueba gratuita</a>.</li>
<li>Instala <a href="https://nodejs.org" target="_blank" rel="noopener">Node.js</a>: descarga la versión <b>LTS</b> y comprueba que sea la <b>24 o superior</b>.</li>
<li>Abre una terminal (Mac: <b>Terminal</b>; Windows: <b>PowerShell</b>) y escribe esto para comprobarlo:</li></ol>${cb("node --version")}${ok("la terminal responde con un número que empieza por v24 o más.")}`},
{t:"Da permiso a After Effects",s:"un ajuste",b:()=>`<p class="what">Para que Claude pueda mover cosas dentro del programa, After Effects tiene que permitir scripts.</p><h3>Pasos</h3><ol>
<li>Abre After Effects.</li>
<li>Windows: <b>Edit → Preferences → Scripting &amp; Expressions</b>. Mac: <b>After Effects → Settings → Scripting &amp; Expressions</b>.</li>
<li>Marca <b>«Allow Scripts to Write Files and Access Network»</b> y pulsa <b>OK</b>.</li></ol>${tip("Si tu After Effects está en español, los menús se llaman parecido. El proyecto del conector puede pedir algún ajuste más: míralo en su "+`<a href="https://github.com/kumoproductions/mcp-aftereffects" target="_blank" rel="noopener">página oficial</a>.`)}${ok("has marcado la casilla y guardado las preferencias.")}`},
{t:"Conecta Claude con After Effects",s:"el archivo de configuración",b:()=>`<p class="what">Aquí le dices a Claude Desktop que existe el conector. Es el paso más técnico, pero solo se hace una vez.</p><h3>Pasos</h3><ol>
<li>En Claude Desktop abre <b>Settings → Developer → Edit Config</b>. Se abre una carpeta con el archivo <b>claude_desktop_config.json</b>.</li>
<li>Ábrelo con el Bloc de notas (Windows) o TextEdit (Mac).</li>
<li>Si el archivo está vacío, pega esto tal cual:</li></ol>${cb(`{
  "mcpServers": {
    "aftereffects": {
      "command": "npx",
      "args": ["-y", "@kumoproductions/mcp-aftereffects"]
    }
  }
}`)}<ol start="4"><li>Si el archivo ya tenía otros conectores, no lo borres: añade solo el bloque <b>«aftereffects»</b> dentro de la lista <b>mcpServers</b> que ya existe.</li><li>Guarda, <b>cierra Claude Desktop del todo</b> y ábrelo otra vez.</li></ol>
${det("¿Qué significa cada parte?",["<b>mcpServers</b>: la lista de conectores de Claude.","<b>npx</b>: un comando de Node.js que descarga y ejecuta el conector solo.","<b>@kumoproductions/mcp-aftereffects</b>: el nombre del conector."])}
${tip("Es un proyecto de la comunidad, no de Adobe ni de Anthropic. Úsalo con tus propios proyectos y guarda siempre una copia antes de probar. Puede cambiar con el tiempo: si algo no coincide, mira su página en GitHub.")}${ok("al abrir un chat nuevo en Claude Desktop no sale ningún error y el conector aparece entre las herramientas.")}`},
{t:"Abre After Effects y guarda el proyecto",s:"el proyecto de trabajo",b:()=>`<p class="what">El conector trabaja sobre el proyecto que tengas abierto, así que primero tiene que existir.</p><h3>Pasos</h3><ol>
<li>Abre After Effects.</li>
<li><b>File → New → New Project</b>.</li>
<li><b>File → Save As</b> y guárdalo con un nombre claro en una carpeta, por ejemplo <b>mi-video.aep</b>.</li>
<li>Si vas a usar un proyecto que ya tenías, haz antes una <b>copia</b> y trabaja sobre la copia.</li></ol>${ok("After Effects está abierto y el proyecto tiene nombre.")}`},
{x:1,t:"Deja una plantilla reutilizable",s:"opcional",b:()=>`<p class="what">Si vas a repetir este vídeo con otros textos, pídele a Claude que lo deje preparado.</p><h3>Pasos</h3><ol><li>Guarda el proyecto y pídele a Claude:</li></ol>${cb("Reorganiza este proyecto para que pueda reutilizarlo: deja los textos y los colores principales fáciles de cambiar, ordena las capas y explícame paso a paso cómo cambiar el texto y exportar de nuevo.")}${tip("Guarda una copia del proyecto con el nombre «plantilla» y trabaja siempre sobre copias.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<p class="what">Casi todos los fallos vienen de una de estas cosas.</p><ol>
<li><b>After Effects tiene que estar abierto</b> con un proyecto antes de pedirle nada a Claude.</li>
<li><b>Cierra y abre Claude Desktop</b> del todo tras cambiar el archivo de configuración.</li>
<li>Revisa que el archivo de configuración esté bien copiado: una coma o una llave de más lo rompe.</li>
<li>Repite <b>node --version</b> en la terminal: debe ser la 24 o superior.</li>
<li>Comprueba que marcaste el permiso de scripts en las preferencias.</li>
<li>Mira la página del conector en GitHub: ahí explican los cambios y los errores conocidos.</li></ol>${det("💡 Ideas para seguir cocinando",["Títulos animados para todos tus vídeos.","Una cortinilla de final con tu web y tus redes.","Anuncios cortos para Instagram y TikTok.","Una animación de tu logo para la firma de vídeo."])}`},
{x:1,t:"Usa material con permiso",s:"Siempre · consejos",b:()=>`<p class="what">Antes de publicar, unas reglas sencillas.</p><ol>
<li><b>Música:</b> usa solo canciones que tengan licencia para tu uso.</li>
<li><b>Tipografías:</b> revisa que la fuente se pueda usar en proyectos comerciales.</li>
<li><b>Clips e imágenes:</b> usa solo los tuyos o los que tengan licencia.</li>
<li><b>Guarda el proyecto .aep y el .mp4</b> en la misma carpeta, para poder retocarlo dentro de meses.</li></ol>`}
]},
recetas:[
{s:"intro-logo",t:"Una intro con tu logo",d:"Tu logo apareciendo con un brillo, 5 segundos en horizontal, para el principio de tus vídeos.",
meta:["👩‍🍳 Media","🎬 Intro","🍽 Resultado: tu intro en MP4 (1920×1080)"],
q:"¿Qué estilo de intro?",ph:"Describe cómo quieres que aparezca tu logo. Ejemplo: que se dibuje solo y termine con un destello dorado",
fin:"Tu intro está lista. Pégala al principio de tus vídeos en cualquier editor.",
def:"intro",empty:"[describe tu intro, arriba]",
apps:{intro:{n:"Brillo elegante",db:true,d:"una intro de 5 segundos en la que aparece mi logo con un efecto de brillo, en formato horizontal 16:9"},
 rebote:{n:"Entrada con rebote",db:true,d:"una intro de 4 segundos en la que mi logo cae, rebota un poco y se queda en el centro, con un fondo de mi color"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Importa tu logo",s:"el material",b:()=>`<ol><li>Ten tu logo como <b>PNG con fondo transparente</b> (o SVG/AI si lo tienes).</li><li>En After Effects: <b>File → Import → File…</b> y elige el logo.</li><li>Comprueba que aparece en el panel <b>Project</b> con un nombre sin espacios ni acentos, por ejemplo <code>logo.png</code>.</li></ol>${tip("¿No tienes logo transparente? Mira el libro <a href=\"logo-ia.html\">Diseña tu logo con IA</a>.")}${ok("el logo está en el panel Project.")}`},
{t:"Pide la intro",s:"Claude anima",b:()=>`${cb(`Tienes acceso a mi After Effects a través del conector. Quiero ${D()}.\n\nUsa el archivo logo.png del panel Project. Crea una composición de 1920×1080, 30 fps. Fondo de color liso [tu color]. El logo entra suave (escala de 80 % a 100 % y opacidad de 0 a 100 en 1 segundo), luego un brillo lo recorre de izquierda a derecha y se queda quieto al final. Deja 1 segundo quieto al final para cortar sin prisas.\n\nAntes de tocar nada, dime el plan en pasos cortos. Pon nombres claros a las capas.`)}${ok("en After Effects hay una composición nueva con el logo animado.")}`},
{t:"Revísala con la barra espaciadora",s:"pulir",b:()=>`<ol><li>Abre la composición y pulsa la <b>barra espaciadora</b>.</li><li>Pide cambios de uno en uno:</li></ol>${cb("Haz la entrada del logo más lenta (1,5 segundos) y el brillo más sutil. Cambia solo eso.")}${tip("Una intro buena es corta: si pasa de 6 segundos, la gente la salta.")}${ok("la intro dura unos 5 segundos y te gusta.")}`},
{t:"Exporta a MP4",s:"Media Encoder",b:()=>`<ol><li>Selecciona la composición y elige <b>Composition → Add to Adobe Media Encoder Queue</b>.</li><li>Formato <b>H.264</b>, preset <b>«Match Source - High bitrate»</b>.</li><li>Pulsa el botón verde de <b>Play</b>.</li></ol>${ok("tienes intro.mp4 y se ve igual que en After Effects.")}`}
]},
{s:"titulos",t:"Títulos y rótulos animados",d:"El título de tu canal y un rótulo con tu nombre y cargo, con fondo transparente para ponerlos encima de tus vídeos.",
meta:["👩‍🍳 Media","🔤 Títulos","🍽 Resultado: títulos con fondo transparente (.mov)"],
q:"¿Qué títulos necesitas?",ph:"Escribe los textos. Ejemplo: «Recetas de la abuela» y «Lola Martín · Cocinera»",
fin:"Tus títulos están listos. Arrástralos encima de tus vídeos en el editor que uses.",
def:"titulos",empty:"[escribe tus textos, arriba]",
apps:{titulos:{n:"Título y rótulo",db:false,d:"un título animado que dice «Mi canal» y un rótulo con mi nombre y cargo que aparece abajo a la izquierda, para poner sobre mis vídeos"},
 subtitulo:{n:"Rótulo de sección",db:false,d:"un rótulo de sección que aparece en una esquina con el nombre de cada parte del vídeo"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Decide textos y colores",s:"antes",b:()=>`<p class="what">Ten a mano los textos exactos y el color de tu marca. Los títulos tienen que leerse en el móvil en menos de 2 segundos.</p>${ok("tienes los textos y el color.")}`},
{t:"Pide los títulos",s:"Claude anima",b:()=>`${cb(`Tienes acceso a mi After Effects a través del conector. Quiero ${D()}. Textos: [tus textos].\n\nCrea una composición de 1920×1080, 30 fps, de 6 segundos, SIN fondo (transparente). El rótulo entra deslizándose desde la izquierda en 0,6 s con una barra de color [tu color] detrás del texto, se queda 4 segundos y sale igual. Letra grande y legible, con un poco de sombra para que se lea sobre cualquier imagen. Deja los textos en capas separadas y con nombre para poder cambiarlos.\n\nDime el plan antes de empezar.`)}${ok("hay una composición con los títulos y sin fondo.")}`},
{t:"Pruébalo sobre un vídeo",s:"legibilidad",b:()=>`<ol><li>Arrastra uno de tus vídeos debajo de los títulos en la composición, solo para probar.</li><li>Comprueba que se lee bien. Después borra esa capa.</li></ol>${cb("El texto se lee mal sobre fondos claros. Haz la barra un poco más opaca. Cambia solo eso.")}${ok("los títulos se leen bien sobre tu vídeo.")}`},
{t:"Exporta con fondo transparente",s:"Media Encoder",b:()=>`<ol><li><b>Composition → Add to Adobe Media Encoder Queue</b>.</li><li>Formato <b>QuickTime</b>, códec <b>Apple ProRes 4444</b>, y en el vídeo activa el canal <b>alfa</b> (RGB + Alpha).</li><li>Pulsa <b>Play</b>.</li></ol>${tip("Un MP4 no guarda transparencia: por eso aquí se usa .mov. Tu editor lo pondrá encima de tus vídeos sin fondo negro.")}${cb("¿Cómo exporto esta composición con fondo transparente desde Media Encoder? Dime exactamente qué elegir en cada desplegable.")}${ok("al poner el .mov sobre un vídeo, no aparece fondo negro.")}`}
]},
{s:"vertical",t:"Vídeo vertical con texto animado",d:"15 segundos en 9:16 con tu clip de fondo y un texto grande que se mueve, para Reels, TikTok o Shorts.",
meta:["👩‍🍳 Media","📱 Vertical","🍽 Resultado: un vídeo vertical en MP4 (1080×1920)"],
q:"¿Qué vídeo quieres?",ph:"Describe el clip y el texto. Ejemplo: mi clip amasando pan con el texto «Pan de verdad, cada mañana»",
fin:"Tu vídeo vertical está listo para subirlo desde el móvil.",
def:"vertical",empty:"[describe tu vídeo, arriba]",
apps:{vertical:{n:"Clip con texto",db:true,d:"un vídeo vertical 9:16 de 15 segundos con un clip mío de fondo y un texto grande animado encima"},
 tres:{n:"3 frases que van apareciendo",db:true,d:"un vídeo vertical de 15 segundos con mi clip de fondo y 3 frases cortas que aparecen una detrás de otra"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Importa tu clip",s:"el material",b:()=>`<ol><li>Graba o elige un clip vertical de al menos 15 segundos.</li><li><b>File → Import → File…</b> y llámalo <code>clip.mp4</code> en el panel Project.</li></ol>${ok("el clip está en el panel Project.")}`},
{t:"Pide el vídeo",s:"Claude anima",b:()=>`${cb(`Tienes acceso a mi After Effects a través del conector. Quiero ${D()}. Texto: [tu texto].\n\nComposición de 1080×1920, 30 fps, 15 segundos, con clip.mp4 de fondo ajustado al tamaño. Los textos, grandes y en el centro, dentro de la zona segura (sin tocar los 250 px de arriba ni los 400 de abajo, donde las redes ponen sus botones). Cada texto entra con un pequeño salto y se queda el tiempo suficiente para leerlo. Oscurece un poco el clip para que el texto se lea.\n\nDime el plan antes de empezar.`)}${ok("hay una composición vertical con tu clip y los textos.")}`},
{t:"Revísalo como en el móvil",s:"pulir",b:()=>`<ol><li>Reprodúcelo a tamaño pequeño, como lo verías en el móvil.</li><li>¿Se lee cada texto sin pausar? Si no:</li></ol>${cb("El segundo texto desaparece antes de poder leerlo. Déjalo 1 segundo más y adelanta el tercero. Cambia solo eso.")}${ok("cada texto se lee sin pausar el vídeo.")}`},
{t:"Exporta para redes",s:"Media Encoder",b:()=>`<ol><li><b>Composition → Add to Adobe Media Encoder Queue</b>.</li><li>Formato <b>H.264</b>, preset <b>«Match Source - High bitrate»</b> (mantiene el 1080×1920).</li><li>Pulsa <b>Play</b> y pásalo al móvil.</li></ol>${ok("tienes el MP4 vertical y se ve bien en tu móvil.")}`}
]},
{s:"anuncio",t:"Anuncio animado de producto",d:"10 segundos con fondo de color, el nombre de tu producto entrando con movimiento y el precio al final.",
meta:["👩‍🍳 Media","🛍 Anuncio","🍽 Resultado: un anuncio en MP4, cuadrado y vertical"],
q:"¿Qué producto?",ph:"Nombre, precio y una ventaja. Ejemplo: «Vela Lavanda», 18 €, dura 40 horas",
fin:"Tu anuncio está listo en dos formatos. Pruébalo en redes con dos colores de fondo distintos.",
def:"anuncio",empty:"[escribe tu producto, arriba]",
apps:{anuncio:{n:"Nombre y precio",db:true,d:"un anuncio de 10 segundos con fondo de color, el nombre de mi producto que entra con movimiento y el precio que aparece después"},
 oferta:{n:"Oferta con fecha",db:true,d:"un anuncio de 8 segundos que anuncia una oferta con el descuento muy grande y la fecha de fin"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Tu material",s:"producto",b:()=>`<ol><li>Importa una foto de tu producto con fondo transparente (<code>producto.png</code>) y tu logo.</li><li>Ten claros el nombre, el precio y una sola ventaja.</li></ol>${tip("¿Foto sin fondo? En el libro <a href=\"logo-ia.html\">del logo</a> te enseñamos a quitarlo con remove.bg.")}${ok("producto y logo están en el panel Project.")}`},
{t:"Pide el anuncio",s:"Claude anima",b:()=>`${cb(`Tienes acceso a mi After Effects a través del conector. Quiero ${D()}. Producto: [nombre], precio: [precio], ventaja: [una frase].\n\nComposición de 1080×1080, 30 fps. Segundo 0-2: el producto entra con un pequeño giro sobre fondo [tu color]. Segundo 2-5: el nombre entra letra a letra. Segundo 5-8: la ventaja. Segundo 8-10: el precio grande y el logo abajo. Movimientos suaves, letra grande.\n\nDime el plan antes de empezar.`)}${ok("tienes el anuncio cuadrado.")}`},
{t:"La versión vertical",s:"reaprovechar",b:()=>`${cb("Duplica la composición en 1080×1920 y recoloca los elementos para el formato vertical, respetando la zona segura de arriba y abajo. No cambies los tiempos.")}${ok("tienes el anuncio también en vertical.")}`},
{t:"Exporta las dos",s:"Media Encoder",b:()=>`<ol><li>Añade las dos composiciones a la cola de Media Encoder.</li><li>Formato <b>H.264</b>, «Match Source - High bitrate», y <b>Play</b>.</li></ol>${ok("tienes anuncio-cuadrado.mp4 y anuncio-vertical.mp4.")}`}
]}
]};
