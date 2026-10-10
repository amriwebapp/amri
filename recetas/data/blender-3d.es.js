(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: crea 3D con Claude y Blender",
intro:"Conecta Claude con Blender una vez y después crea en 3D sin saber modelar: un objeto, una escena, tu logo o un producto girando. Tú describes; Claude construye la escena dentro de Blender.",
meta:["📕 5 recetas","💶 Gratis","🍽 Resultado: imágenes y vídeos en 3D"],
ing:"Ingredientes (todos gratuitos)",
fin:"Blender está conectado con Claude. Elige qué quieres crear.",
R:{key:"libro-blender",
ing:()=>`<li><b>Claude Desktop</b>: el jefe de cocina. Da las órdenes a Blender.</li><li><b>Blender</b>: el horno. El programa de 3D, gratuito y de código abierto.</li><li><b>Conector de Blender</b>: el camarero. Lleva los pedidos de Claude al horno. Gratuito y oficial.</li>${DB()?`<li><b>El propio Blender</b>: también exporta el vídeo final en MP4.</li>`:`<li><b>El propio Blender</b>: también genera la imagen final.</li>`}`,
steps:[
{t:"Prepara los ingredientes",s:"instalar programas",b:()=>`<p class="what">Necesitas dos programas gratuitos en el mismo ordenador.</p><h3>Pasos</h3><ol>
<li>Instala <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> e inicia sesión. Vale cualquier plan, también el gratuito.</li>
<li>Instala <a href="https://www.blender.org/download/" target="_blank" rel="noopener">Blender</a> en su <b>versión 4.2 o superior</b>.</li>
<li>Abre Blender una vez para comprobar que funciona.</li></ol>${tip("Para escenas sencillas basta con un ordenador reciente. Los renders largos y los vídeos tardan más en equipos antiguos.")}${ok("Blender se abre y ves el cubo, la luz y la cámara de la escena inicial.")}`},
{t:"Añade el conector a Claude Desktop",s:"el camarero",b:()=>`<p class="what">Blender tiene un conector oficial que se añade desde el directorio de Claude.</p><h3>Pasos</h3><ol>
<li>En Claude Desktop, ve a <b>Customize → Connectors</b>.</li>
<li>Busca <b>Blender</b> y pulsa <b>Add</b>.</li></ol>${tip("Los nombres de los menús pueden cambiar un poco con las actualizaciones. Si no lo encuentras, busca «Connectors» en los ajustes.")}${ok("el conector de Blender aparece en tu lista de conectores.")}`},
{t:"Instala el complemento en Blender",s:"una sola vez",b:()=>`<p class="what">El conector necesita un complemento dentro de Blender para poder hablar con él.</p><h3>Pasos</h3><ol>
<li>Abre la página <a href="https://www.blender.org/lab/mcp-server/" target="_blank" rel="noopener">Blender MCP Server</a> en el navegador, con Blender abierto al lado.</li>
<li>Arrastra el <b>enlace de instalación</b> de esa página hasta la ventana de Blender.</li>
<li>Blender te pedirá añadir el repositorio <b>«lab»</b>: acepta.</li>
<li>Arrastra <b>el mismo enlace una segunda vez</b> para instalar el complemento.</li></ol>${tip("Es el complemento oficial de Blender. Instala solo el de la página de blender.org: este complemento ejecuta órdenes dentro de tu programa.")}${ok("Blender te avisa de que se ha instalado el complemento.")}`},
{t:"Enciende la conexión",s:"cada vez que trabajes",b:()=>`<p class="what">La conexión hay que encenderla desde Blender cada vez que empieces a trabajar.</p><h3>Pasos</h3><ol>
<li>Abre Blender y guarda el proyecto: <b>File → Save</b>, con un nombre claro.</li>
<li>Pasa el ratón por la vista 3D y pulsa la tecla <b>N</b> para abrir el panel lateral.</li>
<li>Busca la pestaña <b>BlenderMCP</b> y pulsa <b>Start MCP server</b>.</li>
<li>En Claude Desktop, abre un chat nuevo y pega este mensaje:</li></ol>${cb("¿Estás conectado a Blender? Dime qué objetos hay ahora mismo en la escena.")}${ok("Claude te contesta que ve un cubo, una cámara y una luz.")}`},
{x:1,t:"Guarda y protege tu trabajo",s:"Siempre · consejos",b:()=>`<p class="what">Claude ejecuta órdenes dentro de Blender, y algunos cambios grandes no se deshacen con un solo Ctrl+Z.</p><ol>
<li><b>Guarda antes</b> de cada petición grande: <b>File → Save</b>.</li>
<li>Usa <b>File → Save Incremental</b> para guardar versiones (v1, v2, v3…) sin perder las anteriores.</li>
<li>Prueba primero en un proyecto vacío, no en uno importante.</li>
<li>Pídele cosas concretas: cuanto más claro, menos riesgo de sorpresas.</li></ol>`},
{x:1,t:"Llévalo a tu web",s:"opcional",b:()=>`<p class="what">Puedes mostrar tu objeto 3D en una página web para que lo giren tus visitantes.</p><h3>Pasos</h3><ol>
<li>En Blender: <b>File → Export → glTF 2.0 (.glb)</b> y guárdalo.</li>
<li>Sigue la receta <a href="webapp-gratis.html">Tu webapp online y gratis</a> y, cuando Claude te pida el contenido, pídele:</li></ol>${cb("Quiero mostrar mi modelo 3D (archivo .glb) en la web para que los visitantes lo puedan girar con el ratón. Explícame paso a paso cómo añadirlo.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<p class="what">Casi todos los fallos vienen de una de estas cosas.</p><ol>
<li>Blender tiene que estar <b>abierto</b> con la conexión encendida: pestaña BlenderMCP → <b>Start MCP server</b>.</li>
<li>Comprueba que el conector de Blender está añadido en Claude Desktop.</li>
<li>Cierra y abre Claude Desktop, y vuelve a encender la conexión en Blender.</li>
<li>Comprueba que usas Blender 4.2 o superior.</li>
<li>Repite el mensaje de comprobación: «¿Estás conectado a Blender?».</li></ol>${det("💡 Ideas para seguir cocinando",["Un logo en 3D para la intro de tus vídeos.","Un mockup de tu producto antes de fabricarlo.","Un personaje mascota para tu marca.","Fondos 3D para tus posts y miniaturas."])}`}
]},
recetas:[
{s:"objeto",t:"Un objeto en 3D",d:"Una taza, una lámpara o lo que quieras, con su material, su luz y una imagen final.",
meta:["👩‍🍳 Fácil","🧊 Objeto","🍽 Resultado: una imagen PNG de tu objeto (1920×1080)"],
q:"¿Qué objeto?",ph:"Descríbelo. Ejemplo: una taza de cerámica azul sobre una mesa de madera",
fin:"Tienes tu primer objeto en 3D. Guarda el archivo .blend: podrás cambiarlo cuando quieras.",
def:"objeto",empty:"[describe el objeto, arriba]",
apps:{objeto:{n:"Taza",db:false,d:"una taza de cerámica azul sobre una mesa de madera, con luz cálida de mañana"},
 lampara:{n:"Lámpara",db:false,d:"una lámpara de mesa moderna encendida, sobre un escritorio de madera clara"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Pide el objeto",s:"Claude modela",b:()=>`${cb(`Estás conectado a mi Blender. Quiero crear ${D()}.\n\nDime primero el plan en pasos cortos. Después: borra el cubo inicial, modela el objeto con proporciones reales (en centímetros), ponle un material creíble, una superficie debajo, una luz principal suave y una cámara a la altura de los ojos con el objeto centrado. Nombra cada objeto.`)}${ok("ves el objeto en la vista 3D.")}`},
{t:"Míralo con luz de verdad",s:"Rendered",b:()=>`<ol><li>Pasa el ratón por la vista 3D, pulsa <b>Z</b> y elige <b>Rendered</b>.</li><li>Pide cambios de uno en uno:</li></ol>${cb("Haz que la cerámica sea más brillante y la luz más cálida. Cambia solo eso.")}${tip("Usa comparaciones: «como madera de roble», «como metal cepillado».")}${ok("el objeto se ve como lo imaginabas.")}`},
{t:"Saca la imagen",s:"render",b:()=>`${cb("Configura el render a 1920×1080 con el motor EEVEE, que es rápido.")}<ol><li>Pulsa <b>F12</b>.</li><li>En la ventana de la imagen: <b>Image → Save As</b> y guárdala como PNG.</li><li>Guarda también el proyecto: <b>File → Save</b>.</li></ol>${ok("tienes la imagen PNG y el archivo .blend guardados.")}`}
]},
{s:"escena",t:"Una escena completa",d:"Una habitación o un rincón con varios objetos y luz de atardecer.",
meta:["👩‍🍳 Media","🏠 Escena","🍽 Resultado: una imagen de tu escena"],
q:"¿Qué escena?",ph:"Descríbela. Ejemplo: un rincón de lectura con sillón, lámpara y estantería",
fin:"Tienes tu escena. Prueba a cambiar la hora del día pidiendo otra luz.",
def:"escena",empty:"[describe la escena, arriba]",
apps:{escena:{n:"Habitación acogedora",db:false,d:"una habitación pequeña y acogedora con un escritorio, una lámpara encendida y una planta, con luz de atardecer"},
 tienda:{n:"Mi tienda o local",db:false,d:"el mostrador de una pequeña tienda con estanterías, productos y luz natural"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Primero, el plano",s:"organizar",b:()=>`${cb(`Quiero crear ${D()}. Antes de construir nada, dame una lista de los objetos, dónde va cada uno y desde dónde mira la cámara. Espera mi OK.`)}${ok("has aprobado la lista de objetos.")}`},
{t:"Construye por partes",s:"Claude modela",b:()=>`${cb("OK. Construye primero la habitación (suelo y paredes), después los muebles grandes y al final los detalles. Enséñamelo después de cada parte. Pon nombres claros y agrupa los objetos en colecciones.")}${tip("Por partes es más fácil corregir: si algo no te gusta, lo dices antes de seguir.")}${ok("la escena tiene todos sus objetos.")}`},
{t:"La luz de atardecer",s:"ambiente",b:()=>`${cb("Pon luz de atardecer entrando por una ventana, cálida y con sombras largas, y una luz de relleno suave para que no quede muy oscuro.")}<p class="what">Mírala en modo <b>Rendered</b> (tecla Z).</p>${ok("la escena tiene ambiente.")}`},
{t:"Saca la imagen",s:"render",b:()=>`${cb("Configura el render a 1920×1080 con EEVEE y encuadra la cámara para que se vea toda la escena.")}<ol><li>Pulsa <b>F12</b> y guárdala con <b>Image → Save As</b>.</li></ol>${ok("tienes la imagen de tu escena.")}`}
]},
{s:"logo-3d",t:"Tu logo en 3D",d:"Tu logo en relieve, con material dorado, girando despacio.",
meta:["👩‍🍳 Media","✨ Logo","🍽 Resultado: tu logo 3D en imagen y en vídeo"],
q:"¿Qué acabado?",ph:"Describe el material. Ejemplo: dorado brillante sobre fondo negro",
fin:"Tu logo en 3D está listo. Úsalo como intro de tus vídeos o en tu web.",
def:"logo3d",empty:"[describe el acabado, arriba]",
apps:{logo3d:{n:"Dorado girando",db:true,d:"mi logo en 3D, en relieve y material dorado, girando despacio sobre un fondo liso"},
 cristal:{n:"Cristal",db:true,d:"mi logo en 3D de cristal, con reflejos, sobre un fondo de degradado"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Importa tu logo en SVG",s:"el material",b:()=>`<ol><li>Necesitas tu logo en <b>SVG</b> (formato vectorial).</li><li>En Blender: <b>File → Import → Scalable Vector Graphics (.svg)</b>.</li></ol>${tip("¿Solo tienes PNG? Mira «Tu logo en todos los formatos» en el libro <a href=\"logo-ia--formatos.html\">del logo</a>.")}${ok("ves las curvas de tu logo en la escena (muy pequeñas: es normal).")}`},
{t:"Dale volumen",s:"Claude modela",b:()=>`${cb(`Estás conectado a mi Blender. He importado mi logo en SVG. Quiero ${D()}.\n\nUne las curvas, escálalo a un tamaño cómodo, dale grosor (extrusión) y bisel suave en los bordes, y colócalo de pie en el centro. Pon el material, una luz de estudio y una cámara de frente. Dime el plan antes.`)}${ok("tu logo tiene volumen y se reconoce.")}`},
{t:"Que gire en bucle",s:"animación",b:()=>`${cb("Anímalo: que gire una vuelta completa sobre sí mismo en 5 segundos (120 fotogramas a 24 fps), con un movimiento constante para que el bucle no se note.")}<p class="what">Pulsa la barra espaciadora para verlo.</p>${ok("gira suave y el final enlaza con el principio.")}`},
{t:"Renderiza imagen y vídeo",s:"render",b:()=>`${cb("Configura el render para exportar un vídeo MP4 en 1080p con EEVEE y dime dónde se guardará.")}<ol><li><b>Render → Render Animation</b> (Ctrl+F12).</li><li>Para una imagen fija, ve a un fotograma bonito y pulsa <b>F12</b>.</li></ol>${ok("tienes el vídeo y una imagen de tu logo.")}`}
]},
{s:"producto",t:"Tu producto girando",d:"Tu producto sobre un pedestal, con la cámara girando alrededor en bucle, como en una tienda online.",
meta:["👩‍🍳 Media","🔄 Producto","🍽 Resultado: un vídeo en bucle de tu producto"],
q:"¿Qué producto?",ph:"Descríbelo con medidas. Ejemplo: un frasco de perfume de 12 cm, cristal y tapón dorado",
fin:"Tu producto gira como en un anuncio. Úsalo en tu tienda o en redes.",
def:"producto",empty:"[describe tu producto, arriba]",
apps:{producto:{n:"Botella o frasco",db:true,d:"una botella de perfume sobre un pedestal blanco, con la cámara girando alrededor en un bucle suave"},
 caja:{n:"Caja o paquete",db:true,d:"la caja de mi producto sobre un pedestal, con la cámara girando alrededor en un bucle suave"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Describe tu producto con medidas",s:"precisión",b:()=>`<p class="what">Cuanto más precisa la descripción (medidas, materiales, colores), más se parecerá. Si tienes fotos, súbelas al chat como referencia.</p>${ok("tienes la descripción y alguna foto.")}`},
{t:"Modela el producto y el pedestal",s:"Claude modela",b:()=>`${cb(`Estás conectado a mi Blender. Quiero ${D()}. Mi producto: [descripción con medidas]. Te adjunto fotos de referencia.\n\nModélalo con proporciones reales, ponle materiales creíbles, colócalo sobre un pedestal cilíndrico blanco y usa una luz de estudio suave con fondo liso. Dime el plan antes.`)}${ok("tu producto se reconoce en la escena.")}`},
{t:"Cámara que gira en bucle",s:"animación",b:()=>`${cb("Haz que la cámara gire alrededor del producto una vuelta completa en 6 segundos (144 fotogramas a 24 fps), siempre mirando al producto, a velocidad constante para que el bucle sea perfecto.")}${ok("el giro es suave y el bucle no se nota.")}`},
{t:"Renderiza en cuadrado y vertical",s:"render",b:()=>`${cb("Exporta el vídeo en MP4 con EEVEE, primero en 1080×1080 y después en 1080×1920, sin cambiar la animación.")}<ol><li><b>Render → Render Animation</b> para cada formato.</li></ol>${ok("tienes los dos vídeos.")}`}
]},
{s:"personaje",off:1,t:"Un personaje simpático",d:"Un personaje hecho con formas simples que saluda con la mano.",
meta:["👩‍🍳 Media","🙂 Personaje","🍽 Resultado: tu personaje saludando en vídeo"],
q:"¿Qué personaje?",ph:"Descríbelo. Ejemplo: una nube azul con ojos grandes y brazos cortos",
fin:"Tu personaje saluda. Puedes usarlo como mascota en tus redes.",
def:"personaje",empty:"[describe el personaje, arriba]",
apps:{personaje:{n:"Formas simples",db:true,d:"un personaje simpático hecho con formas simples (una esfera con ojos y brazos) que saluda"},
 mascota:{n:"Mascota de mi marca",db:true,d:"la mascota de mi marca, con mis colores, hecha con formas simples, que saluda"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Constrúyelo con formas",s:"Claude modela",b:()=>`${cb(`Estás conectado a mi Blender. Quiero ${D()}.\n\nHazlo con formas sencillas (esferas, cilindros), con ojos grandes y amables, colores alegres y materiales mate. Pon cada parte con su nombre (cuerpo, ojo_izq, brazo_der…) y emparenta los brazos al cuerpo. Dime el plan antes.`)}${tip("Formas simples = más simpático y más fácil de animar.")}${ok("ves a tu personaje en la escena.")}`},
{t:"Que salude",s:"animación",b:()=>`${cb("Anima el brazo derecho para que salude: sube en 0,5 s, se mueve de lado a lado tres veces y baja. Que el cuerpo se balancee un poco a la vez. 4 segundos en total a 24 fps.")}<p class="what">Reprodúcelo con la barra espaciadora.</p>${ok("tu personaje saluda con un movimiento natural.")}`},
{t:"Ajusta la expresión",s:"carácter",b:()=>`${cb("Hazle parpadear una vez en el segundo 2 y que sonría un poco más. Cambia solo eso.")}${ok("tiene la expresión que querías.")}`},
{t:"Renderiza el saludo",s:"render",b:()=>`${cb("Exporta el vídeo en MP4 1080p con EEVEE, con fondo de un color liso [tu color].")}<ol><li><b>Render → Render Animation</b>.</li></ol>${ok("tienes el vídeo de tu personaje saludando.")}`}
]}
]};
