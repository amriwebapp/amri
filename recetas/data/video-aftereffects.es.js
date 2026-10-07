(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: edita vídeo con Claude y After Effects",
intro:"Conecta Claude con After Effects una vez y después pídele en español intros, títulos, vídeos verticales y anuncios animados. Claude crea las capas y las animaciones dentro de tu proyecto; tú previsualizas, ajustas y exportas.",
meta:["📕 4 recetas","⏱ 25-30 min cada una","💶 After Effects es de pago","🍽 Resultado: vídeos animados en MP4"],
ing:"Ingredientes (todos gratuitos)",
fin:"After Effects está conectado con Claude. Elige qué vídeo quieres hacer.",
R:{key:"libro-ae",
ing:()=>`<li><b>Claude Desktop</b>: el jefe de cocina. Escribe las órdenes para After Effects.</li><li><b>After Effects</b>: el horno. Donde se crea la animación. Es de pago (Adobe ofrece prueba gratuita).</li><li><b>Node.js</b>: la llave de paso. Un programa gratuito que hace falta para conectar todo.</li><li><b>Conector MCP de After Effects</b>: el camarero. Lleva los pedidos de Claude al horno. Gratuito, hecho por la comunidad.</li><li><b>Adobe Media Encoder</b>: el emplatado. Exporta tu MP4 (viene con la suscripción de Adobe).</li>`,
steps:[
{t:"Prepara los ingredientes",s:"10 min · instalar programas",b:()=>`<p class="what">Necesitas tres programas en el mismo ordenador. El conector solo funciona si todo está en la misma máquina.</p><h3>Pasos</h3><ol>
<li>Instala <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> e inicia sesión.</li>
<li>Instala <b>After Effects</b> (versión 2024, 2025 o 2026) desde Creative Cloud. Si no lo tienes, Adobe ofrece una <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener">prueba gratuita</a>.</li>
<li>Instala <a href="https://nodejs.org" target="_blank" rel="noopener">Node.js</a>: descarga la versión <b>LTS</b> y comprueba que sea la <b>24 o superior</b>.</li>
<li>Abre una terminal (Mac: <b>Terminal</b>; Windows: <b>PowerShell</b>) y escribe esto para comprobarlo:</li></ol>${cb("node --version")}${ok("la terminal responde con un número que empieza por v24 o más.")}`},
{t:"Da permiso a After Effects",s:"2 min · un ajuste",b:()=>`<p class="what">Para que Claude pueda mover cosas dentro del programa, After Effects tiene que permitir scripts.</p><h3>Pasos</h3><ol>
<li>Abre After Effects.</li>
<li>Windows: <b>Edit → Preferences → Scripting &amp; Expressions</b>. Mac: <b>After Effects → Settings → Scripting &amp; Expressions</b>.</li>
<li>Marca <b>«Allow Scripts to Write Files and Access Network»</b> y pulsa <b>OK</b>.</li></ol>${tip("Si tu After Effects está en español, los menús se llaman parecido. El proyecto del conector puede pedir algún ajuste más: míralo en su "+`<a href="https://github.com/kumoproductions/mcp-aftereffects" target="_blank" rel="noopener">página oficial</a>.`)}${ok("has marcado la casilla y guardado las preferencias.")}`},
{t:"Conecta Claude con After Effects",s:"10 min · el archivo de configuración",b:()=>`<p class="what">Aquí le dices a Claude Desktop que existe el conector. Es el paso más técnico, pero solo se hace una vez.</p><h3>Pasos</h3><ol>
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
{t:"Abre After Effects y guarda el proyecto",s:"5 min · el proyecto de trabajo",b:()=>`<p class="what">El conector trabaja sobre el proyecto que tengas abierto, así que primero tiene que existir.</p><h3>Pasos</h3><ol>
<li>Abre After Effects.</li>
<li><b>File → New → New Project</b>.</li>
<li><b>File → Save As</b> y guárdalo con un nombre claro en una carpeta, por ejemplo <b>mi-video.aep</b>.</li>
<li>Si vas a usar un proyecto que ya tenías, haz antes una <b>copia</b> y trabaja sobre la copia.</li></ol>${ok("After Effects está abierto y el proyecto tiene nombre.")}`},
{x:1,t:"Deja una plantilla reutilizable",s:"15 min · opcional",b:()=>`<p class="what">Si vas a repetir este vídeo con otros textos, pídele a Claude que lo deje preparado.</p><h3>Pasos</h3><ol><li>Guarda el proyecto y pídele a Claude:</li></ol>${cb("Reorganiza este proyecto para que pueda reutilizarlo: deja los textos y los colores principales fáciles de cambiar, ordena las capas y explícame paso a paso cómo cambiar el texto y exportar de nuevo.")}${tip("Guarda una copia del proyecto con el nombre «plantilla» y trabaja siempre sobre copias.")}`},
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
{s:"intro-logo",t:"Una intro con tu logo",d:"Tu logo apareciendo con un efecto de brillo, 5 segundos, para el principio de tus vídeos.",
meta:["⏱ 25 min","👩‍🍳 Media","🎬 Intro","🍽 Resultado: tu intro en MP4"],
q:"¿Qué quieres preparar?",ph:"Describe el vídeo con tus palabras. Ejemplo: una intro de 5 segundos para mi canal de cocina con el nombre en letras grandes",yn:"¿Vas a usar tu propio logo o un clip tuyo?",yntip:"Si dudas, elige «Sí»: te enseñamos a importar tu material. Si al final no lo usas, funciona igual.",
fin:"Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.",
def:"intro",empty:"[describe aquí tu vídeo, arriba]",
apps:{"intro":{"n":"Intro con logo","db":true,"d":"una intro de 5 segundos en la que aparece mi logo con un efecto de brillo, en formato horizontal 16:9"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{db:1,t:"Prepara tu material",s:"5 min · logo o clip",b:()=>`<p class="what">Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.</p><h3>Pasos</h3><ol>
<li>Pon tu logo (mejor un <b>PNG con fondo transparente</b>) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.</li>
<li>En After Effects: <b>File → Import → File…</b> y elige tus archivos.</li>
<li>Comprueba que aparecen en el panel <b>Project</b>.</li></ol>${tip("Si no tienes logo transparente, mira la receta "+`<a href="logo-ia.html">Diseña un logo con IA</a>.`)}${ok("tu logo o tu clip se ve en el panel Project.")}`},
{t:"Pídele el vídeo a Claude",s:"10 min · la orden",b:()=>`<p class="what">Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude Desktop.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Tienes acceso a mi After Effects a través del conector. Quiero crear ${D()}.\n\nAntes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave.${DB()?" Usa el material que he importado en el panel Project.":""} Al terminar, dime qué has creado y cómo previsualizarlo.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero crear…»</b>: tu idea. Cámbiala por la tuya.","<b>Dime primero el plan</b>: así puedes corregirlo antes de que toque tu proyecto.","<b>Capas con nombres claros</b>: luego será fácil retocarlo a mano.","<b>Fotogramas clave</b>: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento."])}
${tip("Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.")}${ok("en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.")}`},
{t:"Previsualiza y ajusta",s:"10 min · pulir el resultado",b:()=>`<p class="what">Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.</p><h3>Pasos</h3><ol>
<li>Haz doble clic en la composición nueva del panel <b>Project</b>.</li>
<li>Pulsa la <b>barra espaciadora</b> para reproducirla.</li>
<li>Apunta lo que no te gusta y pídeselo a Claude, <b>un cambio cada vez</b>:</li></ol>${cb("Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.")}
${tip("Si un cambio sale mal, deshaz con <b>Ctrl+Z</b> (Windows) o <b>Cmd+Z</b> (Mac) en After Effects.")}${ok("al reproducirla, el movimiento, los textos y los colores son los que querías.")}`},
{t:"Exporta tu vídeo a MP4",s:"5 min · el emplatado",b:()=>`<p class="what">Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.</p><h3>Pasos</h3><ol>
<li>Selecciona la composición.</li>
<li>Menú <b>Composition → Add to Adobe Media Encoder Queue</b>.</li>
<li>En Media Encoder, en la columna <b>Format</b>, elige <b>H.264</b> y como preset <b>«Match Source - High bitrate»</b>.</li>
<li>Elige dónde guardarlo y pulsa el botón verde de <b>Play</b> (Start Queue).</li></ol>${ok("tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.")}`}
]},
{s:"titulos",t:"Títulos y rótulos animados",d:"Un título para tu canal y un rótulo con tu nombre y cargo, para poner sobre tus vídeos.",
meta:["⏱ 25 min","👩‍🍳 Media","🔤 Títulos","🍽 Resultado: títulos listos para tus vídeos"],
q:"¿Qué quieres preparar?",ph:"Describe el vídeo con tus palabras. Ejemplo: una intro de 5 segundos para mi canal de cocina con el nombre en letras grandes",yn:"¿Vas a usar tu propio logo o un clip tuyo?",yntip:"Si dudas, elige «Sí»: te enseñamos a importar tu material. Si al final no lo usas, funciona igual.",
fin:"Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.",
def:"titulos",empty:"[describe aquí tu vídeo, arriba]",
apps:{"titulos":{"n":"Títulos y rótulos","db":false,"d":"un título animado que dice «Mi canal» y un rótulo con mi nombre y cargo que aparece abajo a la izquierda, para poner sobre mis vídeos"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{db:1,t:"Prepara tu material",s:"5 min · logo o clip",b:()=>`<p class="what">Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.</p><h3>Pasos</h3><ol>
<li>Pon tu logo (mejor un <b>PNG con fondo transparente</b>) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.</li>
<li>En After Effects: <b>File → Import → File…</b> y elige tus archivos.</li>
<li>Comprueba que aparecen en el panel <b>Project</b>.</li></ol>${tip("Si no tienes logo transparente, mira la receta "+`<a href="logo-ia.html">Diseña un logo con IA</a>.`)}${ok("tu logo o tu clip se ve en el panel Project.")}`},
{t:"Pídele el vídeo a Claude",s:"10 min · la orden",b:()=>`<p class="what">Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude Desktop.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Tienes acceso a mi After Effects a través del conector. Quiero crear ${D()}.\n\nAntes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave.${DB()?" Usa el material que he importado en el panel Project.":""} Al terminar, dime qué has creado y cómo previsualizarlo.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero crear…»</b>: tu idea. Cámbiala por la tuya.","<b>Dime primero el plan</b>: así puedes corregirlo antes de que toque tu proyecto.","<b>Capas con nombres claros</b>: luego será fácil retocarlo a mano.","<b>Fotogramas clave</b>: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento."])}
${tip("Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.")}${ok("en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.")}`},
{t:"Previsualiza y ajusta",s:"10 min · pulir el resultado",b:()=>`<p class="what">Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.</p><h3>Pasos</h3><ol>
<li>Haz doble clic en la composición nueva del panel <b>Project</b>.</li>
<li>Pulsa la <b>barra espaciadora</b> para reproducirla.</li>
<li>Apunta lo que no te gusta y pídeselo a Claude, <b>un cambio cada vez</b>:</li></ol>${cb("Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.")}
${tip("Si un cambio sale mal, deshaz con <b>Ctrl+Z</b> (Windows) o <b>Cmd+Z</b> (Mac) en After Effects.")}${ok("al reproducirla, el movimiento, los textos y los colores son los que querías.")}`},
{t:"Exporta tu vídeo a MP4",s:"5 min · el emplatado",b:()=>`<p class="what">Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.</p><h3>Pasos</h3><ol>
<li>Selecciona la composición.</li>
<li>Menú <b>Composition → Add to Adobe Media Encoder Queue</b>.</li>
<li>En Media Encoder, en la columna <b>Format</b>, elige <b>H.264</b> y como preset <b>«Match Source - High bitrate»</b>.</li>
<li>Elige dónde guardarlo y pulsa el botón verde de <b>Play</b> (Start Queue).</li></ol>${ok("tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.")}`}
]},
{s:"vertical",t:"Vídeo vertical con texto animado",d:"15 segundos en 9:16 con tu clip de fondo y un texto grande que se mueve, para redes.",
meta:["⏱ 30 min","👩‍🍳 Media","📱 Vertical","🍽 Resultado: un vídeo vertical en MP4"],
q:"¿Qué quieres preparar?",ph:"Describe el vídeo con tus palabras. Ejemplo: una intro de 5 segundos para mi canal de cocina con el nombre en letras grandes",yn:"¿Vas a usar tu propio logo o un clip tuyo?",yntip:"Si dudas, elige «Sí»: te enseñamos a importar tu material. Si al final no lo usas, funciona igual.",
fin:"Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.",
def:"vertical",empty:"[describe aquí tu vídeo, arriba]",
apps:{"vertical":{"n":"Vídeo vertical","db":true,"d":"un vídeo vertical 9:16 de 15 segundos con un clip mío de fondo y un texto grande animado encima"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{db:1,t:"Prepara tu material",s:"5 min · logo o clip",b:()=>`<p class="what">Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.</p><h3>Pasos</h3><ol>
<li>Pon tu logo (mejor un <b>PNG con fondo transparente</b>) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.</li>
<li>En After Effects: <b>File → Import → File…</b> y elige tus archivos.</li>
<li>Comprueba que aparecen en el panel <b>Project</b>.</li></ol>${tip("Si no tienes logo transparente, mira la receta "+`<a href="logo-ia.html">Diseña un logo con IA</a>.`)}${ok("tu logo o tu clip se ve en el panel Project.")}`},
{t:"Pídele el vídeo a Claude",s:"10 min · la orden",b:()=>`<p class="what">Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude Desktop.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Tienes acceso a mi After Effects a través del conector. Quiero crear ${D()}.\n\nAntes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave.${DB()?" Usa el material que he importado en el panel Project.":""} Al terminar, dime qué has creado y cómo previsualizarlo.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero crear…»</b>: tu idea. Cámbiala por la tuya.","<b>Dime primero el plan</b>: así puedes corregirlo antes de que toque tu proyecto.","<b>Capas con nombres claros</b>: luego será fácil retocarlo a mano.","<b>Fotogramas clave</b>: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento."])}
${tip("Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.")}${ok("en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.")}`},
{t:"Previsualiza y ajusta",s:"10 min · pulir el resultado",b:()=>`<p class="what">Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.</p><h3>Pasos</h3><ol>
<li>Haz doble clic en la composición nueva del panel <b>Project</b>.</li>
<li>Pulsa la <b>barra espaciadora</b> para reproducirla.</li>
<li>Apunta lo que no te gusta y pídeselo a Claude, <b>un cambio cada vez</b>:</li></ol>${cb("Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.")}
${tip("Si un cambio sale mal, deshaz con <b>Ctrl+Z</b> (Windows) o <b>Cmd+Z</b> (Mac) en After Effects.")}${ok("al reproducirla, el movimiento, los textos y los colores son los que querías.")}`},
{t:"Exporta tu vídeo a MP4",s:"5 min · el emplatado",b:()=>`<p class="what">Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.</p><h3>Pasos</h3><ol>
<li>Selecciona la composición.</li>
<li>Menú <b>Composition → Add to Adobe Media Encoder Queue</b>.</li>
<li>En Media Encoder, en la columna <b>Format</b>, elige <b>H.264</b> y como preset <b>«Match Source - High bitrate»</b>.</li>
<li>Elige dónde guardarlo y pulsa el botón verde de <b>Play</b> (Start Queue).</li></ol>${ok("tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.")}`}
]},
{s:"anuncio",t:"Anuncio animado de producto",d:"10 segundos con fondo de color, el nombre de tu producto entrando con movimiento y el precio.",
meta:["⏱ 30 min","👩‍🍳 Media","🛍 Anuncio","🍽 Resultado: un anuncio en MP4"],
q:"¿Qué quieres preparar?",ph:"Describe el vídeo con tus palabras. Ejemplo: una intro de 5 segundos para mi canal de cocina con el nombre en letras grandes",yn:"¿Vas a usar tu propio logo o un clip tuyo?",yntip:"Si dudas, elige «Sí»: te enseñamos a importar tu material. Si al final no lo usas, funciona igual.",
fin:"Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.",
def:"anuncio",empty:"[describe aquí tu vídeo, arriba]",
apps:{"anuncio":{"n":"Anuncio de producto","db":false,"d":"un anuncio de 10 segundos con fondo de color, el nombre de mi producto que entra con movimiento y el precio que aparece después"},"otra":{"n":"✏️ A mi manera","db":true,"d":""}},
steps:[
{db:1,t:"Prepara tu material",s:"5 min · logo o clip",b:()=>`<p class="what">Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.</p><h3>Pasos</h3><ol>
<li>Pon tu logo (mejor un <b>PNG con fondo transparente</b>) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.</li>
<li>En After Effects: <b>File → Import → File…</b> y elige tus archivos.</li>
<li>Comprueba que aparecen en el panel <b>Project</b>.</li></ol>${tip("Si no tienes logo transparente, mira la receta "+`<a href="logo-ia.html">Diseña un logo con IA</a>.`)}${ok("tu logo o tu clip se ve en el panel Project.")}`},
{t:"Pídele el vídeo a Claude",s:"10 min · la orden",b:()=>`<p class="what">Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude Desktop.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Tienes acceso a mi After Effects a través del conector. Quiero crear ${D()}.\n\nAntes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave.${DB()?" Usa el material que he importado en el panel Project.":""} Al terminar, dime qué has creado y cómo previsualizarlo.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero crear…»</b>: tu idea. Cámbiala por la tuya.","<b>Dime primero el plan</b>: así puedes corregirlo antes de que toque tu proyecto.","<b>Capas con nombres claros</b>: luego será fácil retocarlo a mano.","<b>Fotogramas clave</b>: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento."])}
${tip("Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.")}${ok("en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.")}`},
{t:"Previsualiza y ajusta",s:"10 min · pulir el resultado",b:()=>`<p class="what">Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.</p><h3>Pasos</h3><ol>
<li>Haz doble clic en la composición nueva del panel <b>Project</b>.</li>
<li>Pulsa la <b>barra espaciadora</b> para reproducirla.</li>
<li>Apunta lo que no te gusta y pídeselo a Claude, <b>un cambio cada vez</b>:</li></ol>${cb("Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.")}
${tip("Si un cambio sale mal, deshaz con <b>Ctrl+Z</b> (Windows) o <b>Cmd+Z</b> (Mac) en After Effects.")}${ok("al reproducirla, el movimiento, los textos y los colores son los que querías.")}`},
{t:"Exporta tu vídeo a MP4",s:"5 min · el emplatado",b:()=>`<p class="what">Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.</p><h3>Pasos</h3><ol>
<li>Selecciona la composición.</li>
<li>Menú <b>Composition → Add to Adobe Media Encoder Queue</b>.</li>
<li>En Media Encoder, en la columna <b>Format</b>, elige <b>H.264</b> y como preset <b>«Match Source - High bitrate»</b>.</li>
<li>Elige dónde guardarlo y pulsa el botón verde de <b>Play</b> (Start Queue).</li></ol>${ok("tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.")}`}
]}
]};
