(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: animaciones con Claude Opus 5.5",
intro:"Claude Opus 5.5 anima con código: del guion a una animación que se mueve en tu navegador, con tu marca, y si quieres un vídeo MP4. Elige el modelo una vez y después la animación que quieres hacer.",
meta:["📕 5 recetas","💶 Mejor con un plan de pago de Claude","🍽 Resultado: animaciones en tu navegador o en MP4"],
ing:"Ingredientes",
fin:"Ya tienes a Opus como chef. Elige qué animación quieres.",
R:{key:"libro-anim",
ing:()=>`<li><b>Claude Opus 5.5</b>: el jefe de cocina. El modelo de Anthropic pensado para trabajos largos y con muchos detalles, como una animación.</li><li><b>Artefactos de Claude</b>: el horno. La animación se ve y se prueba al lado del chat.</li><li><b>Tu navegador</b>: el plato. Chrome, Safari o Firefox.</li>${DB()?`<li><b>Claude Code</b>: el ayudante de cocina. Convierte la animación en vídeo MP4 en tu ordenador (instala él mismo lo que haga falta).</li>`:""}`,
steps:[
{t:"Elige al chef: Claude Opus 5.5",s:"antes de empezar",b:()=>`<p class="what">Una animación tiene muchas piezas que deben encajar: tiempos, entradas, salidas y colores. Opus 5.5 es el modelo de Claude que mejor mantiene la coherencia en tareas largas como esta.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> y abre un chat nuevo.</li>
<li>Abre el <b>selector de modelo</b> (junto a la caja de texto) y elige <b>Claude Opus 5.5</b>.</li>
<li>Si no aparece en tu plan, usa <b>Claude Sonnet 5.5</b>: la receta funciona igual, solo necesitarás alguna ronda más de ajustes.</li></ol>
${tip("Haz toda la animación en el mismo chat. Así Claude recuerda el storyboard y cada cambio que le pidas.")}${ok("ves Claude Opus 5.5 (o Sonnet 5.5) en el selector del chat nuevo.")}`},



]},
recetas:[
{s:"logo",t:"Tu logo animado",d:"Tu logo apareciendo letra a letra con un brillo final, listo para tu web o tus vídeos.",
meta:["👩‍🍳 Fácil","✨ Logo","🍽 Resultado: tu logo animado en tu navegador"],
q:"¿Cómo quieres que aparezca?",ph:"Descríbelo. Ejemplo: que se dibuje como si alguien lo escribiera a mano",
fin:"Tu logo se mueve. Úsalo como intro de vídeos o al cargar tu web.",
def:"logo",empty:"[describe cómo aparece, arriba]",
apps:{logo:{n:"Letra a letra",db:false,d:"mi logo apareciendo letra a letra con un brillo final, 5 segundos, fondo crema"},
 trazo:{n:"Se dibuja solo",db:false,d:"mi logo dibujándose trazo a trazo, como si alguien lo escribiera, 4 segundos"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Dale tu logo",s:"el material",b:()=>`<p class="what">Funciona mejor con el logo en <b>SVG</b>. Si solo tienes PNG, súbelo igual: Claude puede redibujarlo en SVG.</p>${cb("Te adjunto mi logo. Si no es SVG, redibújalo en SVG lo más fiel posible y enséñamelo.")}${ok("Claude tiene tu logo en SVG.")}`},
{t:"El guion de 5 segundos",s:"storyboard",b:()=>`${cb(`Quiero ${D()}. Escribe el storyboard en una tabla: segundo, qué parte del logo se mueve y cómo. Deja 1 segundo quieto al final. No escribas código todavía.`)}${ok("has aprobado el storyboard.")}`},
{t:"Anímalo",s:"artefacto",b:()=>`${cb("Crea la animación como un artefacto HTML de una sola página, sin librerías externas, con el SVG del logo. Movimientos suaves (nada lineal). Abajo, un botón para volver a reproducirla.")}${ok("ves tu logo animado en el artefacto.")}`},
{t:"Ajusta y guarda",s:"pulir",b:()=>`${cb("En el segundo [x], [lo que pasa] → [lo que quiero]. Cambia solo eso.")}<ol><li>Cuando te guste, pide: «Dame el código para pegarlo en mi web» o descarga el archivo.</li></ol>${ok("tienes tu logo animado guardado.")}`}
]},
{s:"explicacion",t:"Una explicación animada",d:"30 segundos que explican cómo funciona tu servicio en 3 pasos, con iconos y textos grandes, en MP4.",
meta:["👩‍🍳 Media","💡 Explicar","🍽 Resultado: una animación explicativa en MP4"],
q:"¿Qué quieres explicar?",ph:"Escribe los 3 pasos. Ejemplo: eliges el menú, lo cocinamos, te llega a casa",
fin:"Tu explicación animada está lista. Ponla en tu web o en tus redes.",
def:"explica",empty:"[escribe los pasos, arriba]",
apps:{explica:{n:"Servicio en 3 pasos",db:true,d:"una animación de 30 segundos que explica cómo funciona mi servicio en 3 pasos, con iconos y textos grandes"},
 antes:{n:"Antes y después",db:true,d:"una animación de 20 segundos con el problema de mi cliente antes y cómo queda después de mi servicio"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"El guion",s:"storyboard",b:()=>`${cb(`Quiero ${D()}. Mis pasos: [escríbelos].\n\nEscribe el storyboard en una tabla: segundo de inicio y fin, qué se ve, qué icono, qué texto (máximo 6 palabras por pantalla) y cómo entra. Formato horizontal 16:9. Deja cada texto el tiempo de leerlo con calma. No escribas código todavía.`)}${ok("has aprobado el storyboard.")}`},
{t:"Anímala",s:"artefacto",b:()=>`${cb("Crea la animación como un artefacto HTML de una sola página, sin librerías externas, siguiendo el storyboard. Todo el movimiento depende de una función render(t) y una constante DUR. Abajo, play/pausa y una barra para saltar a cualquier segundo. Iconos dibujados en SVG.")}${det("¿Por qué render(t)?",["Para cada segundo hay un fotograma fijo: la barra te deja ir directo al segundo 7.","Es lo que permite convertirla en vídeo después."])}${ok("ves la animación con su barra.")}`},
{t:"Hazla tuya",s:"tu marca",b:()=>`${cb("Aplica mi marca: colores [#xxxxxx, #xxxxxx], tipografía [nombre de Google Fonts] y mi logo al final. Mantén los tiempos.")}${ok("se reconoce tu marca.")}`},
{t:"Conviértela en MP4",s:"Claude Code",b:()=>`<ol><li>Guarda el código como <code>animacion.html</code> en una carpeta nueva y ábrela en Claude Code.</li><li>Pega:</li></ol>${cb("En esta carpeta está animacion.html, con una función render(t) y una constante DUR. Crea un script que abra la página con Playwright (Chromium) a 1920×1080, llame a render(t) para cada fotograma a 30 fps, haga una captura y las una con ffmpeg en un MP4 H.264 (yuv420p). Instala lo que falte y explícame cada comando antes de ejecutarlo.")}${tip("Sin Claude Code, puedes grabar la pantalla mientras se reproduce: queda peor, pero sirve para probar.")}${ok("tienes animacion.mp4.")}`}
]},
{s:"reel",t:"Un reel vertical animado",d:"15 segundos en vertical con textos grandes que presentan tu oferta, en MP4 para redes.",
meta:["👩‍🍳 Media","📱 Reel","🍽 Resultado: un reel en MP4 (1080×1920)"],
q:"¿Qué quieres presentar?",ph:"Di qué. Ejemplo: mi oferta de verano: 3 clases de yoga por 30 €",
fin:"Tu reel está listo. Súbelo desde el móvil con una música de la biblioteca de la red.",
def:"reel",empty:"[di qué presentas, arriba]",
apps:{reel:{n:"Oferta",db:true,d:"un reel vertical de 15 segundos con textos grandes que presentan mi oferta de verano"},
 consejos:{n:"3 consejos",db:true,d:"un reel vertical de 15 segundos con 3 consejos cortos de mi sector, uno por pantalla"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"El guion vertical",s:"storyboard",b:()=>`${cb(`Quiero ${D()}. Escribe el storyboard: segundo, texto (máximo 5 palabras), cómo entra. El primer segundo tiene que enganchar. Formato 9:16. Deja los textos dentro de la zona segura (lejos de arriba y de abajo, donde las redes ponen sus botones). No escribas código todavía.`)}${ok("has aprobado el storyboard.")}`},
{t:"Anímalo",s:"artefacto",b:()=>`${cb("Crea la animación como un artefacto HTML vertical (1080×1920), sin librerías externas, con render(t) y DUR, play/pausa y barra de tiempo. Textos enormes y con buen contraste.")}${ok("ves el reel en el artefacto.")}`},
{t:"Revísalo en pequeño",s:"como en el móvil",b:()=>`<p class="what">Míralo a tamaño de móvil. ¿Se lee cada texto sin pausar?</p>${cb("En el segundo [x], el texto dura poco. Déjalo 1 segundo más y ajusta el resto. No cambies nada más.")}${ok("cada texto se lee sin pausar.")}`},
{t:"Conviértelo en MP4",s:"Claude Code",b:()=>`<ol><li>Guarda el código como <code>reel.html</code> en una carpeta y ábrela en Claude Code.</li></ol>${cb("En esta carpeta está reel.html con render(t) y DUR. Crea un script que lo grabe con Playwright a 1080×1920, 30 fps, y lo una con ffmpeg en un MP4 H.264 (yuv420p) compatible con Instagram y TikTok. Explícame cada comando antes de ejecutarlo.")}${ok("tienes reel.mp4 y se ve bien en tu móvil.")}`}
]},
{s:"datos",t:"Datos en movimiento",d:"Un gráfico que crece y cuenta una historia con tus números.",
meta:["👩‍🍳 Media","📊 Datos","🍽 Resultado: un gráfico animado"],
q:"¿Qué datos?",ph:"Pega tus números. Ejemplo: ventas de enero a diciembre",
fin:"Tus datos cuentan una historia. Ponlo en una presentación o en redes.",
def:"datos",empty:"[pega tus datos, arriba]",
apps:{datos:{n:"Barras que crecen",db:false,d:"un gráfico de barras que crece mes a mes mostrando las ventas del año, con el número final destacado"},
 comparar:{n:"Antes y ahora",db:false,d:"una comparación animada entre dos años, con el porcentaje de mejora destacado al final"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"La historia de tus números",s:"el mensaje",b:()=>`${cb(`Estos son mis datos: [pégalos]. Quiero ${D()}. ¿Cuál es la historia más interesante que cuentan? Propón el titular y el orden en que aparece cada dato. No escribas código todavía.`)}${tip("Un buen gráfico animado dice una sola cosa. Elige cuál.")}${ok("tienes el titular y el orden.")}`},
{t:"Anímalo",s:"artefacto",b:()=>`${cb("Crea la animación como artefacto HTML, sin librerías externas, con render(t), DUR, play/pausa y barra. Que los números cuenten hacia arriba mientras crecen las barras y que el titular aparezca al final. Usa exactamente mis datos.")}${ok("ves el gráfico animado.")}`},
{t:"Comprueba los números",s:"con lupa",b:()=>`<p class="what">Para el gráfico al final y compara cada número con tus datos originales.</p>${ok("todos los números coinciden.")}`},
{t:"Hazlo tuyo y guárdalo",s:"marca",b:()=>`${cb("Aplica mis colores [#xxxxxx, #xxxxxx] y mi tipografía. Después dame el código para guardarlo.")}${ok("tienes tu gráfico animado guardado.")}`}
]},
{s:"web",t:"Una animación para tu web",d:"Un fondo suave con formas que flotan para tu portada, que no distrae ni ralentiza.",
meta:["👩‍🍳 Fácil","🌐 Web","🍽 Resultado: una animación lista para pegar en tu web"],
q:"¿Dónde va?",ph:"Di dónde. Ejemplo: detrás del título de mi portada",
fin:"Tu web se mueve con calma. Revisa que sigue cargando rápido en el móvil.",
def:"web",empty:"[di dónde va, arriba]",
apps:{web:{n:"Fondo de portada",db:false,d:"un fondo suave con formas que flotan para la portada de mi web, que no distraiga del texto"},
 botones:{n:"Detalles al pasar el ratón",db:false,d:"pequeñas animaciones en mis botones y tarjetas al pasar el ratón"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Pídela pensada para web",s:"artefacto",b:()=>`${cb(`Quiero ${D()}. Hazla con CSS y, solo si hace falta, un poco de JavaScript, sin librerías. Requisitos: que no tape ni compita con el texto, que sea ligera para el móvil y que se pare si la persona tiene activado «reducir movimiento» en su sistema. Enséñamela en un artefacto con un texto de ejemplo encima.`)}${det("¿Qué es «reducir movimiento»?",["Una opción del móvil y del ordenador para personas a las que el movimiento marea.","Respetarla es accesible y educado."])}${ok("la ves en el artefacto y el texto se lee bien.")}`},
{t:"Hazla tuya",s:"marca",b:()=>`${cb("Usa mis colores [#xxxxxx, #xxxxxx] y hazla más lenta y sutil. Cambia solo eso.")}${ok("encaja con tu web.")}`},
{t:"Pégala en tu web",s:"instalar",b:()=>`${cb("Dame el código para pegar en mi web y dime exactamente dónde va. Este es mi index.html: [pégalo o dime el repositorio].")}${tip("Si tu web es del libro <a href=\"webapp-gratis.html\">Tu web online y gratis</a>, usa la receta «Cambia tu web sin romperla».")}${ok("la animación se ve en tu web publicada.")}`}
]}
]};
