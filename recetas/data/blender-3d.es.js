(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: crea 3D con Claude y Blender",
meta:["⏱ 45 min aprox.", "👩‍🍳 Sin saber modelar", "💶 0 € para empezar", "🍽 Resultado: una imagen o un vídeo en 3D"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué quieres preparar?",
ph:"Describe tu escena 3D con tus palabras. Ejemplo: una nave espacial pequeña sobre un planeta rojo, con luz de atardecer",
yn:"¿Quieres que se mueva (animación en vídeo)?",
yntip:"Si dudas, elige «No»: sacas una imagen fija, que es más rápido. Si luego quieres animarla, vuelve aquí y cambia a «Sí».",
fin:"Ya tienes tu resultado en 3D. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otras ideas. Más abajo tienes extras: cómo proteger tu trabajo, cómo llevarlo a una web y qué hacer si algo falla.",
R:{key:"receta-blender",def:"objeto",empty:"[describe aquí tu escena 3D, arriba]",
apps:{
 objeto:{n:"Un objeto",db:false,d:"una taza de cerámica azul sobre una mesa de madera, con luz cálida de mañana"},
 escena:{n:"Una escena",db:false,d:"una habitación pequeña y acogedora con un escritorio, una lámpara encendida y una planta, con luz de atardecer"},
 logo3d:{n:"Mi logo en 3D",db:true,d:"un logo sencillo en 3D, con forma de letra A en relieve y material dorado, girando despacio sobre un fondo liso"},
 producto:{n:"Producto girando",db:true,d:"una botella de perfume sobre un pedestal blanco, con la cámara girando alrededor en un bucle suave"},
 personaje:{n:"Personaje simpático",db:true,d:"un personaje simpático hecho con formas simples (una esfera con ojos y brazos) que saluda"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude Desktop</b>: el jefe de cocina. Da las órdenes a Blender.</li><li><b>Blender</b>: el horno. El programa de 3D, gratuito y de código abierto.</li><li><b>Conector de Blender</b>: el camarero. Lleva los pedidos de Claude al horno. Gratuito y oficial.</li>${DB()?`<li><b>El propio Blender</b>: también exporta el vídeo final en MP4.</li>`:`<li><b>El propio Blender</b>: también genera la imagen final.</li>`}`,
steps:[
{t:"Prepara los ingredientes",s:"10 min · instalar programas",b:()=>`<p class="what">Necesitas dos programas gratuitos en el mismo ordenador.</p><h3>Pasos</h3><ol>
<li>Instala <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> e inicia sesión. Vale cualquier plan, también el gratuito.</li>
<li>Instala <a href="https://www.blender.org/download/" target="_blank" rel="noopener">Blender</a> en su <b>versión 4.2 o superior</b>.</li>
<li>Abre Blender una vez para comprobar que funciona.</li></ol>${tip("Para escenas sencillas basta con un ordenador reciente. Los renders largos y los vídeos tardan más en equipos antiguos.")}${ok("Blender se abre y ves el cubo, la luz y la cámara de la escena inicial.")}`},
{t:"Añade el conector a Claude Desktop",s:"3 min · el camarero",b:()=>`<p class="what">Blender tiene un conector oficial que se añade desde el directorio de Claude.</p><h3>Pasos</h3><ol>
<li>En Claude Desktop, ve a <b>Customize → Connectors</b>.</li>
<li>Busca <b>Blender</b> y pulsa <b>Add</b>.</li></ol>${tip("Los nombres de los menús pueden cambiar un poco con las actualizaciones. Si no lo encuentras, busca «Connectors» en los ajustes.")}${ok("el conector de Blender aparece en tu lista de conectores.")}`},
{t:"Instala el complemento en Blender",s:"10 min · una sola vez",b:()=>`<p class="what">El conector necesita un complemento dentro de Blender para poder hablar con él.</p><h3>Pasos</h3><ol>
<li>Abre la página <a href="https://www.blender.org/lab/mcp-server/" target="_blank" rel="noopener">Blender MCP Server</a> en el navegador, con Blender abierto al lado.</li>
<li>Arrastra el <b>enlace de instalación</b> de esa página hasta la ventana de Blender.</li>
<li>Blender te pedirá añadir el repositorio <b>«lab»</b>: acepta.</li>
<li>Arrastra <b>el mismo enlace una segunda vez</b> para instalar el complemento.</li></ol>${tip("Es el complemento oficial de Blender. Instala solo el de la página de blender.org: este complemento ejecuta órdenes dentro de tu programa.")}${ok("Blender te avisa de que se ha instalado el complemento.")}`},
{t:"Enciende la conexión",s:"3 min · cada vez que trabajes",b:()=>`<p class="what">La conexión hay que encenderla desde Blender cada vez que empieces a trabajar.</p><h3>Pasos</h3><ol>
<li>Abre Blender y guarda el proyecto: <b>File → Save</b>, con un nombre claro.</li>
<li>Pasa el ratón por la vista 3D y pulsa la tecla <b>N</b> para abrir el panel lateral.</li>
<li>Busca la pestaña <b>BlenderMCP</b> y pulsa <b>Start MCP server</b>.</li>
<li>En Claude Desktop, abre un chat nuevo y pega este mensaje:</li></ol>${cb("¿Estás conectado a Blender? Dime qué objetos hay ahora mismo en la escena.")}${ok("Claude te contesta que ve un cubo, una cámara y una luz.")}`},
{t:"Pídele la escena a Claude",s:"10 min · la orden",b:()=>`<p class="what">Claude construye la escena escribiendo órdenes dentro de Blender. Tú verás cómo aparecen los objetos.</p><h3>Pasos</h3><ol><li>En el mismo chat de Claude, copia este mensaje y pégalo:</li></ol>${cb(`Estás conectado a mi Blender. Quiero crear ${D()}.\n\nDime primero el plan en pasos cortos. Después constrúyelo en mi escena: borra el cubo inicial, crea los objetos con formas y proporciones creíbles, ponles materiales, coloca una luz y una cámara con un buen encuadre, y ponles nombres claros.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero crear…»</b>: tu idea. Cámbiala por la tuya.","<b>Dime primero el plan</b>: así puedes corregirlo antes de que toque tu escena.","<b>Materiales</b>: el aspecto de cada superficie (madera, metal, cerámica…).","<b>Luz y cámara</b>: lo que hace que la escena se vea bien, igual que en una foto."])}
${tip("Empieza con algo simple: un objeto o una escena pequeña. Cuando funcione, añade cosas poco a poco.")}${ok("en Blender ves aparecer los objetos y Claude te explica lo que ha hecho.")}`},
{t:"Ajusta materiales y luz",s:"10 min · pulir el resultado",b:()=>`<p class="what">El primer intento casi nunca es el definitivo. Pide cambios pequeños, de uno en uno.</p><h3>Pasos</h3><ol>
<li>Pasa el ratón por la vista 3D y pulsa la tecla <b>Z</b>. En el menú circular elige <b>Rendered</b>: así ves la luz y los materiales de verdad.</li>
<li>Gira la vista arrastrando con la <b>rueda del ratón</b> pulsada.</li>
<li>Pídele a Claude un cambio cada vez:</li></ol>${cb("Haz que la luz sea más cálida y suave, y que el material de [objeto] parezca más [brillante / mate / rugoso]. Cambia solo eso y no toques lo demás.")}${tip("Si no sabes cómo describir algo, usa comparaciones: «como madera de roble», «como un metal cepillado».")}${ok("la vista Rendered se parece a lo que tenías en mente.")}`},
{db:1,t:"Ponle movimiento",s:"10 min · la animación",b:()=>`<p class="what">Una animación son muchos dibujos seguidos. Claude coloca los puntos clave del movimiento y Blender rellena el resto.</p><h3>Pasos</h3><ol><li>Pídele a Claude:</li></ol>${cb("Anímalo durante 5 segundos a 24 fotogramas por segundo, es decir, 120 fotogramas. Que [la cámara gire alrededor del objeto / el objeto gire sobre sí mismo] con un movimiento suave que se pueda repetir en bucle. Ajusta la línea de tiempo.")}<ol start="2"><li>Pulsa la <b>barra espaciadora</b> en Blender para reproducirla.</li></ol>${ok("al reproducir, el movimiento es suave y termina donde empieza.")}`},
{t:"Renderiza y guarda",s:"5-20 min · el emplatado",b:()=>DB()?`<p class="what">Renderizar es que Blender calcule cada imagen final. Le pedimos a Claude que lo deje configurado para sacar un vídeo.</p><h3>Pasos</h3><ol><li>Pídele a Claude:</li></ol>${cb("Configura el render para exportar un vídeo MP4 en 1080p con el motor EEVEE, que es más rápido, y dime dónde se guardará.")}<ol start="2"><li>En Blender: <b>Render → Render Animation</b> (o <b>Ctrl+F12</b>).</li><li>Espera a que termine: verás cada fotograma calculándose.</li></ol>${tip("Si tarda demasiado, pídele a Claude «baja la calidad a 720p para probar». Cuando te guste, vuelve a 1080p.")}${ok("tienes un archivo .mp4 que se ve como tu animación.")}`:`<p class="what">Renderizar es que Blender calcule la imagen final.</p><h3>Pasos</h3><ol><li>Pídele a Claude:</li></ol>${cb("Configura el render para una imagen de 1920×1080 con el motor EEVEE, que es más rápido.")}<ol start="2"><li>En Blender pulsa <b>F12</b> (o <b>Render → Render Image</b>).</li><li>Cuando termine, en la ventana de la imagen: <b>Image → Save As</b> y guárdala como <b>PNG</b>.</li></ol>${ok("tienes una imagen PNG de tu escena en tu carpeta.")}`},
{x:1,t:"Guarda y protege tu trabajo",s:"Siempre · consejos",b:()=>`<p class="what">Claude ejecuta órdenes dentro de Blender, y algunos cambios grandes no se deshacen con un solo Ctrl+Z.</p><ol>
<li><b>Guarda antes</b> de cada petición grande: <b>File → Save</b>.</li>
<li>Usa <b>File → Save Incremental</b> para guardar versiones (v1, v2, v3…) sin perder las anteriores.</li>
<li>Prueba primero en un proyecto vacío, no en uno importante.</li>
<li>Pídele cosas concretas: cuanto más claro, menos riesgo de sorpresas.</li></ol>`},
{x:1,t:"Llévalo a tu web",s:"10 min · opcional",b:()=>`<p class="what">Puedes mostrar tu objeto 3D en una página web para que lo giren tus visitantes.</p><h3>Pasos</h3><ol>
<li>En Blender: <b>File → Export → glTF 2.0 (.glb)</b> y guárdalo.</li>
<li>Sigue la receta <a href="webapp-gratis.html">Tu webapp online y gratis</a> y, cuando Claude te pida el contenido, pídele:</li></ol>${cb("Quiero mostrar mi modelo 3D (archivo .glb) en la web para que los visitantes lo puedan girar con el ratón. Explícame paso a paso cómo añadirlo.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<p class="what">Casi todos los fallos vienen de una de estas cosas.</p><ol>
<li>Blender tiene que estar <b>abierto</b> con la conexión encendida: pestaña BlenderMCP → <b>Start MCP server</b>.</li>
<li>Comprueba que el conector de Blender está añadido en Claude Desktop.</li>
<li>Cierra y abre Claude Desktop, y vuelve a encender la conexión en Blender.</li>
<li>Comprueba que usas Blender 4.2 o superior.</li>
<li>Repite el mensaje de comprobación: «¿Estás conectado a Blender?».</li></ol>${det("💡 Ideas para seguir cocinando",["Un logo en 3D para la intro de tus vídeos.","Un mockup de tu producto antes de fabricarlo.","Un personaje mascota para tu marca.","Fondos 3D para tus posts y miniaturas."])}`}
]}};
