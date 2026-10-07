(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: imágenes y vídeo de cine con Higgsfield",
intro:"Higgsfield es un estudio de imagen y vídeo con IA. Con su conector, se lo pides a Claude en español y Claude lo genera por ti. Prepara la cocina una vez y después elige la receta: foto de producto, vídeo realista, vídeo UGC, animación, personajes y anuncios.",
meta:["📕 7 recetas", "⏱ 20-40 min cada una", "💶 Higgsfield usa créditos (hay prueba)", "🍽 Resultado: imágenes y vídeos listos para publicar"],
ing:"Ingredientes",
fin:"Tu estudio está listo. Ahora elige una receta del libro: todas parten de aquí.",
R:{key:"libro-higgs",
ing:()=>`<li><b>Claude</b>: el director. Entiende tu idea y escribe las indicaciones técnicas.</li><li><b>Higgsfield</b>: el estudio de rodaje. Genera imágenes y vídeos con varios modelos de IA. Funciona con créditos.</li><li><b>El conector de Higgsfield</b>: el ayudante de dirección. Lleva las órdenes de Claude al estudio.</li>`,
steps:[
{t:"Crea tus cuentas",s:"5 min · cuentas",b:()=>`<p class="what">Necesitas dos cuentas: una en Claude y otra en Higgsfield.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> (web o app de escritorio).</li>
<li>Crea una cuenta en <a href="https://higgsfield.ai" target="_blank" rel="noopener">Higgsfield</a>.</li>
<li>Mira cuántos créditos tienes. Cada imagen gasta créditos, y el vídeo gasta bastantes más que la imagen.</li></ol>
${tip("Los planes y los precios de Higgsfield cambian a menudo. Míralos en su web antes de empezar para no llevarte sorpresas.")}${ok("puedes entrar en las dos cuentas.")}`},
{t:"Conecta Higgsfield con Claude",s:"3 min · el conector",b:()=>`<p class="what">Higgsfield tiene su propio conector. Se añade pegando una dirección web.</p><h3>Pasos</h3><ol>
<li>En Claude abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li>
<li>Pulsa <b>+</b> → <b>Añadir conector personalizado</b> (<i>Add custom connector</i>).</li>
<li>Nombre: <b>Higgsfield</b>. Dirección (URL): copia esta:</li></ol>${cb("https://mcp.higgsfield.ai/mcp")}<ol start="4"><li>Pulsa <b>Añadir</b> y después <b>Conectar</b>. Inicia sesión con tu cuenta de Higgsfield y acepta.</li></ol>
${det("¿Qué es esa dirección?",["Es el «teléfono» del conector: Claude llama ahí cuando necesita generar algo.","No tienes que instalar nada: todo pasa en internet.","En el plan gratuito de Claude puedes añadir <b>un</b> conector personalizado."])}
${ok("en un chat nuevo, al pulsar <b>+ → Conectores</b>, ves Higgsfield activado.")}`},
{t:"Crea tu estudio en Claude",s:"5 min · las reglas",b:()=>`<p class="what">Un proyecto de Claude guarda tus reglas para siempre. Así no gastas créditos sin querer y no repites lo mismo en cada receta.</p><h3>Pasos</h3><ol>
<li>En Claude pulsa <b>Proyectos → Crear proyecto</b> y llámalo <b>Mi estudio</b>.</li>
<li>En <b>Instrucciones</b>, pega:</li></ol>${cb("Eres mi director de fotografía y usas Higgsfield para generar imágenes y vídeos.\n\nReglas:\n- Antes de generar nada, dime qué vas a hacer, con qué modelo y cuántos créditos gastará más o menos. Espera mi OK.\n- Empieza siempre con una sola versión. Si me gusta, hacemos variantes.\n- Después de cada resultado, dime qué cambiarías para mejorarlo.\n- Cuando algo funcione, escríbeme la indicación final en un bloque para guardarla.\n- Háblame sin tecnicismos.")}
${tip("Abre siempre los chats de las recetas <b>dentro de este proyecto</b>. Así Claude recuerda estas reglas.")}${ok("tienes el proyecto «Mi estudio» con sus instrucciones.")}`},
{t:"Tu primera prueba",s:"3 min · barata",b:()=>`<p class="what">Una prueba pequeña para comprobar que todo funciona antes de gastar créditos en algo grande.</p><h3>Abre un chat en «Mi estudio» y pega</h3>${cb("Usa Higgsfield para generar una sola imagen de prueba: una taza de café sobre una mesa de madera, con luz suave de mañana. Dime qué modelo has usado y cuántos créditos ha gastado.")}
${tip("Si Claude no encuentra Higgsfield, vuelve al paso 2 y comprueba que el conector está activado en ese chat (<b>+ → Conectores</b>).")}${ok("ves la imagen en el chat y sabes cuánto ha costado.")}`}
,
{x:1,t:"Palabras de cine",s:"Siempre · chuleta",b:()=>`<p class="what">No hace falta saber de cine: Claude las usa por ti. Pero conocerlas te ayuda a pedir mejor.</p>
${det("Luz",["<b>Suave</b>: sin sombras duras, como un día nublado.","<b>Dorada</b>: la del amanecer o el atardecer.","<b>De ventana</b>: entra de lado, muy natural.","<b>De estudio</b>: limpia y controlada, para producto."])}
${det("Cámara",["<b>Primer plano</b>: muy cerca, se ven detalles.","<b>Plano general</b>: se ve todo el sitio.","<b>Cenital</b>: desde arriba, mirando hacia abajo.","<b>Travelling</b>: la cámara avanza o se desliza despacio.","<b>Órbita</b>: la cámara gira alrededor del objeto.","<b>Cámara en mano</b>: se mueve un poco, como grabado con el móvil."])}
${det("Formato",["<b>9:16</b>: vertical, para Reels, TikTok y Shorts.","<b>1:1</b>: cuadrado.","<b>4:5</b>: vertical corto, para publicaciones de Instagram.","<b>16:9</b>: horizontal, para YouTube o la web."])}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>El conector no aparece</b>: revisa que la dirección esté bien copiada y vuelve a pulsar Conectar.</li><li><b>Pide iniciar sesión otra vez</b>: es normal de vez en cuando; vuelve a conectar.</li><li><b>Se queda sin créditos</b>: mira tu saldo en Higgsfield.</li><li><b>Claude dice que no puede hacer algo</b>: pídele el texto exacto para pegarlo tú en la web de Higgsfield. Algunas funciones solo están en la web.</li><li><b>El resultado no se parece a lo que pedías</b>: da una referencia más clara y pide un solo cambio cada vez.</li></ol>`},
{x:1,t:"Úsalo con responsabilidad",s:"Siempre · importante",b:()=>`<ol><li>No crees imágenes ni vídeos de <b>personas reales</b> sin su permiso.</li><li>No imites <b>marcas, famosos ni personajes</b> que no son tuyos.</li><li>Si publicas contenido con personas o escenas realistas hechas con IA, <b>indícalo</b> («Hecho con IA»). Las normas europeas lo exigen en muchos casos, y las redes sociales tienen su propia etiqueta.</li><li>Revisa los términos de uso comercial de tu plan de Higgsfield.</li></ol>`}
]},
recetas:[
/* ---------------------------------------------------------------- */
{s:"foto-producto",t:"Foto de producto de estudio",d:"Fotos de tu producto que parecen hechas en un estudio profesional, a partir de una foto con el móvil.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "🖼 Imagen", "🍽 Resultado: 3 fotos de producto listas para tu tienda o redes"],
q:"¿Qué tipo de foto necesitas?",ph:"Describe tu producto y la foto. Ejemplo: mi vela de soja en un tarro de cristal, sobre mármol, con luz de tarde",
fin:"Ya tienes una serie de fotos de producto. Guarda la indicación final: la próxima vez solo tendrás que cambiar la foto de referencia.",
def:"estudio",empty:"[describe aquí tu producto y la foto, arriba]",
apps:{
 estudio:{n:"Fondo de estudio",db:true,d:"mi producto sobre un fondo liso color crema, con luz suave de estudio y una sombra delicada"},
 ambiente:{n:"En un ambiente real",db:true,d:"mi producto en una escena real y cuidada (por ejemplo, una cocina luminosa), como si alguien lo estuviera usando"},
 tienda:{n:"Fondo blanco para tienda online",db:true,d:"mi producto sobre fondo blanco puro, centrado y bien iluminado, como en un catálogo de tienda online"},
 creativa:{n:"Foto creativa",db:true,d:"mi producto flotando en el aire con elementos que lo rodean (gotas, hojas o ingredientes), con mucho color"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"Haz una buena foto de referencia",s:"5 min · con el móvil",b:()=>`<p class="what">La IA necesita ver tu producto de verdad para que salga igual. Una foto normal sirve, si está bien hecha.</p><ol>
<li>Pon el producto junto a una ventana, con luz de día.</li><li>Hazle una foto de frente, entera, sobre un fondo liso.</li><li>Que se lean bien el logo y la etiqueta.</li></ol>
${tip("Mejor 2 o 3 fotos: de frente, de lado y un detalle. Cuanto más clara la referencia, más fiel el resultado.")}${ok("tienes una foto nítida de tu producto.")}`},
{t:"Pide el plan al fotógrafo",s:"5 min · sin gastar",b:()=>`<p class="what">Abre un chat dentro de <b>Mi estudio</b>, arrastra tu foto al chat y pega:</p>${cb(`Esta es mi foto de producto. Quiero ${D()}.\n\nEl producto tiene que verse igual: misma forma, mismos colores, mismo logo. Cambia solo el fondo, la luz y el encuadre.\n\nAntes de generar, propón 3 ideas de foto en una frase cada una y espera a que elija.`)}
${ok("Claude te ha propuesto 3 ideas y has elegido una.")}`},
{t:"Genera la primera foto",s:"5 min · ¡clic!",b:()=>`${cb("Genera la idea que he elegido con Higgsfield, usando mi foto como referencia. Una sola versión.")}
${tip("Mira con lupa el logo y las letras: es donde la IA más se equivoca. Si salen mal, díselo: «el logo debe ser idéntico al de la foto».")}${ok("tienes una foto en la que tu producto se reconoce.")}`},
{t:"Ajusta y saca la serie",s:"5 min · tres fotos",b:()=>`<p class="what">Un cambio cada vez. Cuando la foto te guste, pide la serie con el mismo estilo.</p>${cb("Me gusta. Ahora haz dos más con la misma luz y el mismo fondo: una de cerca, mostrando un detalle, y otra un poco más abierta. Formato 4:5.")}
${ok("tienes 3 fotos que parecen de la misma sesión.")}`},
{t:"Descarga y guarda la receta",s:"2 min · emplatar",b:()=>`<ol><li>Descarga las fotos (también están en tu biblioteca de Higgsfield).</li><li>Pide a Claude:</li></ol>${cb("Escríbeme en un solo bloque la indicación final que ha funcionado, para repetirla con mis otros productos.")}${ok("tienes las fotos y tu indicación guardada.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"video-realista",t:"Vídeo realista de cine",d:"Un plano corto que parece rodado con una cámara de cine: paisaje, comida, ciudad o tu producto.",
meta:["⏱ 30 min", "👩‍🍳 Fácil", "🎥 Vídeo", "🍽 Resultado: un clip de 5 a 10 segundos"],
q:"¿Qué quieres rodar?",ph:"Describe la escena. Ejemplo: olas rompiendo contra unas rocas al atardecer, a cámara lenta",
fin:"Tienes tu plano de cine. Junta varios y ya tienes un vídeo: mira la receta «Anuncio vertical para redes».",
def:"comida",empty:"[describe aquí la escena, arriba]",
apps:{
 comida:{n:"Comida",db:false,d:"un plato recién hecho humeando sobre una mesa de madera, con la cámara acercándose muy despacio"},
 paisaje:{n:"Paisaje",db:false,d:"un amanecer sobre montañas con niebla, visto desde un dron que avanza despacio"},
 ciudad:{n:"Ciudad",db:false,d:"una calle de ciudad de noche con lluvia y luces de neón reflejadas en el suelo"},
 producto:{n:"Producto en escena",db:false,d:"mi producto sobre una mesa mientras la cámara gira despacio a su alrededor, con luz cálida"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Escribe el plano",s:"5 min · el guion",b:()=>`<p class="what">Un buen plano se describe en cuatro cosas: qué se ve, cómo se mueve la cámara, qué luz hay y cuánto dura.</p>${cb(`Quiero un plano de vídeo realista: ${D()}.\n\nEscríbelo como lo haría un director de fotografía: qué se ve, movimiento de cámara, luz, ambiente y duración (máximo 8 segundos). Propón 2 versiones y espera a que elija.`)}
${ok("tienes un plano descrito que te gusta.")}`},
{t:"Elige el movimiento",s:"2 min · la cámara",b:()=>`<p class="what">El movimiento de cámara es lo que hace que parezca cine. Elige <b>uno solo</b>:</p><ul><li><b>Acercarse despacio</b>: íntimo, para comida o producto.</li><li><b>Girar alrededor</b>: para enseñar un objeto.</li><li><b>Dron que avanza</b>: para paisajes.</li><li><b>Cámara fija</b>: para que lo que se mueva sea la escena.</li></ul>
${cb("Usa este movimiento de cámara: [el que elijas]. Que sea lento y suave.")}${ok("has elegido un movimiento.")}`},
{t:"Genera una versión corta",s:"5 min · ¡acción!",b:()=>`${cb("Genera el plano con Higgsfield. Elige el modelo de vídeo más realista para esto y dime cuál usas. Una sola versión, de unos 5 segundos.")}
${tip("El vídeo tarda más que la imagen: uno o dos minutos es normal.")}${ok("tienes un clip que puedes ver en el chat.")}`},
{t:"Revisa los fallos típicos",s:"5 min · con lupa",b:()=>`<p class="what">La IA suele fallar en lo mismo. Mira el clip dos veces fijándote en:</p><ul><li><b>Manos y caras</b>: dedos de más, gestos raros.</li><li><b>Letras</b>: carteles y etiquetas con texto inventado.</li><li><b>Física</b>: cosas que atraviesan otras o cambian de forma.</li></ul>
${cb("He visto este fallo: [descríbelo]. Corrígelo cambiando solo eso.")}
${tip("Si necesitas un texto en el vídeo (un precio, tu web), no lo pidas a la IA: añádelo después con Canva o CapCut.")}${ok("el clip no tiene fallos que distraigan.")}`},
{t:"Variantes y descarga",s:"3 min · emplatar",b:()=>`${cb("Me gusta. Haz una variante en formato vertical 9:16 para redes, igual en todo lo demás. Después escríbeme la indicación final en un bloque.")}${ok("tienes el clip en horizontal y en vertical, y la indicación guardada.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"video-ugc",t:"Vídeo UGC: alguien recomienda tu producto",d:"El estilo de vídeo de redes en el que una persona habla a cámara y enseña un producto, hecho con IA.",
meta:["⏱ 40 min", "👩‍🍳 Media", "🎥 Vídeo con voz", "🍽 Resultado: un vídeo vertical de 15 segundos"],
q:"¿Qué tipo de vídeo UGC quieres?",ph:"Describe tu producto y el vídeo. Ejemplo: una chica de 30 años enseña mi crema de manos en su baño y cuenta por qué le gusta",
fin:"Tienes tu vídeo UGC. Pruébalo con dos frases de inicio distintas y quédate con la que mejor funcione.",
def:"resena",empty:"[describe aquí tu producto y el vídeo, arriba]",
apps:{
 resena:{n:"Reseña a cámara",db:false,d:"una persona enseña mi producto a cámara, en su casa, y cuenta en 15 segundos qué problema le resuelve"},
 unboxing:{n:"Unboxing",db:false,d:"una persona abre la caja de mi producto sobre una mesa, lo saca y cuenta su primera impresión"},
 tutorial:{n:"Cómo se usa",db:false,d:"una persona enseña en 3 pasos rápidos cómo se usa mi producto"},
 probador:{n:"Probador de ropa",db:false,d:"una persona se prueba mi prenda frente al espejo y cuenta cómo le queda"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"El guion de 15 segundos",s:"10 min · lo que dice",b:()=>`<p class="what">Un vídeo UGC funciona si engancha en los primeros 2 segundos. Claude escribe el guion como habla la gente de verdad.</p>${cb(`Quiero un vídeo UGC vertical de 15 segundos: ${D()}.\n\nEscribe el guion hablado, en español natural y cercano, con esta estructura:\n1) Gancho (2 s): una frase que haga parar de deslizar.\n2) Problema (3 s).\n3) El producto y qué hace (6 s).\n4) Final con una invitación (4 s).\n\nDame 2 ganchos distintos para probar. Nada de promesas que el producto no cumpla.`)}
${ok("tienes un guion que suena a persona, no a anuncio de la tele.")}`},
{t:"Quién lo cuenta",s:"5 min · la persona",b:()=>`<p class="what">Describe a la persona: edad aproximada, estilo, dónde está. Claude la prepara.</p>${cb("Describe a la persona que lo cuenta: [edad, estilo, ropa, lugar]. Que sea una persona inventada, que no se parezca a nadie famoso. Genera con Higgsfield una imagen de ella en ese lugar, mirando a cámara, en vertical.")}
${tip("La persona debe encajar con quien compra tu producto. Si vendes a jubilados, no pongas a un adolescente.")}${tip("¿Prefieres salir tú o alguien real? Mira el extra «Si sale una persona real», al final de la receta.")}${ok("tienes la imagen de la persona que va a hablar.")}`},
{x:1,t:"Si sale una persona real",s:"Opcional · permiso y fotos",b:()=>`<ol><li>Pide permiso <b>por escrito</b> a la persona (un mensaje vale) para usar su cara y su voz con IA, y explica dónde se publicará.</li><li>Hazle 3 fotos claras: de frente, con buena luz y sin gafas de sol.</li><li>Sube las fotos al chat y pide a Claude que las use como referencia.</li></ol>
${tip("⚠️ Nunca uses la cara o la voz de alguien sin su permiso, aunque sea un amigo.")}${ok("tienes el permiso y las fotos.")}`},
{t:"Genera el vídeo",s:"10 min · ¡que hable!",b:()=>`${cb("Usa Higgsfield para crear el vídeo UGC: la persona de la imagen dice el guion con el gancho 1, mirando a cámara, en vertical 9:16, con un estilo natural como grabado con el móvil. Usa el flujo de UGC o de vídeo que hable que tengas disponible y dime cuál eliges.")}
${det("¿Y si Claude dice que no puede?",["Algunas funciones de vídeo que habla solo están en la web de Higgsfield.","Pide a Claude: «Dame el guion y la descripción listos para pegarlos en la web de Higgsfield».","En la web, busca la sección de <b>UGC</b> o de <b>Lipsync</b> (vídeo que habla), sube la imagen de la persona y pega el guion."])}
${ok("tienes un vídeo en el que la persona dice tu guion.")}`},
{t:"Revisa que se crea",s:"5 min · con lupa",b:()=>`<ul><li>¿La boca va a la vez que la voz?</li><li>¿Se pronuncian bien el nombre de tu marca y del producto?</li><li>¿El producto se ve igual que el de verdad?</li></ul>
${cb("He visto esto: [el fallo]. Corrígelo y deja todo lo demás igual.")}${tip("Si una palabra se pronuncia mal, escríbela como suena en el guion (por ejemplo, «Glouri» en lugar de «Glowry»).")}${ok("el vídeo se ve natural de principio a fin.")}`},
{t:"Etiquétalo y publícalo",s:"3 min · con honestidad",b:()=>`<p class="what">Un vídeo UGC hecho con IA es <b>publicidad</b>, no la opinión de un cliente real. Dilo claro:</p><ol><li>Marca la publicación como <b>contenido hecho con IA</b> con la opción de la red social.</li><li>Marca que es un <b>anuncio o colaboración</b> si la red lo pide.</li><li>No lo presentes como una reseña de un cliente real: eso es engañoso y en la Unión Europea está prohibido.</li></ol>
${ok("tu vídeo está publicado y etiquetado.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"video-animado",t:"Vídeo animado: ilustración, 3D o papel",d:"Una escena animada con el estilo que elijas, para contar una historia o explicar algo.",
meta:["⏱ 35 min", "👩‍🍳 Media", "🎞 Animación", "🍽 Resultado: 2 o 3 planos animados con el mismo estilo"],
q:"¿Qué estilo de animación quieres?",ph:"Describe la historia. Ejemplo: un zorro pequeño que busca su casa en un bosque de otoño",
fin:"Tienes tus planos animados con un estilo coherente. Únelos en CapCut o Canva y añade música.",
def:"ilustracion",empty:"[describe aquí tu historia, arriba]",
apps:{
 ilustracion:{n:"Ilustración 2D",db:false,d:"una escena animada en estilo ilustración de cuento, con colores suaves de acuarela"},
 tresd:{n:"3D de película",db:false,d:"una escena animada en 3D, con personajes redondeados y luz cálida, como una película de animación"},
 papel:{n:"Papel recortado",db:false,d:"una escena animada hecha con papel recortado, como un diorama, con textura de cartulina"},
 explicativo:{n:"Vídeo que explica algo",db:false,d:"un vídeo animado sencillo, con dibujos planos, que explica en 3 pasos cómo funciona mi servicio"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Elige el estilo con palabras",s:"5 min · el aspecto",b:()=>`<p class="what">Describe el estilo por sus rasgos, no con el nombre de un estudio de cine: así el resultado es tuyo y no una copia.</p>${cb(`Quiero ${D()}.\n\nDescribe el estilo visual en 5 rasgos (formas, colores, texturas, luz y tipo de movimiento) y propón un guion de 3 planos cortos. No uses nombres de estudios ni de películas.`)}
${ok("tienes el estilo descrito y un guion de 3 planos.")}`},
{t:"Crea el fotograma clave",s:"5 min · primero, imagen",b:()=>`<p class="what">Primero una imagen fija del plano 1. Es más barato que un vídeo y fija el estilo para los demás.</p>${cb("Genera con Higgsfield la imagen del plano 1 con ese estilo, en formato 16:9. Una sola versión.")}
${ok("tienes una imagen con el estilo que buscabas.")}`},
{t:"Anima el plano",s:"10 min · movimiento",b:()=>`${cb("Anima esa imagen: [qué se mueve: el personaje camina, las hojas caen…]. Movimiento suave, unos 5 segundos. Mantén el estilo exactamente igual.")}
${tip("Pide un solo movimiento por plano. Si pides muchos a la vez, la animación se vuelve rara.")}${ok("tienes el plano 1 animado.")}`},
{t:"Los demás planos, con el mismo estilo",s:"10 min · coherencia",b:()=>`${cb("Ahora haz los planos 2 y 3. Usa la imagen del plano 1 como referencia de estilo y de personaje, para que todo parezca de la misma película. Primero la imagen, después la animación.")}
${ok("tienes 3 planos que parecen del mismo vídeo.")}`},
{t:"Descarga y guarda el estilo",s:"2 min · emplatar",b:()=>`${cb("Escríbeme en un bloque la descripción del estilo y las indicaciones de los 3 planos, para seguir la historia otro día.")}${ok("tienes los vídeos y la ficha de estilo guardada.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"foto-a-video",t:"De foto a vídeo: dale vida a una imagen",d:"Convierte una foto que ya tienes en un clip corto con movimiento.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "🎥 Vídeo", "🍽 Resultado: un clip de 5 segundos a partir de tu foto"],
q:"¿Qué foto quieres animar?",ph:"Describe la foto y el movimiento. Ejemplo: la foto de mi terraza; que se muevan las plantas y pase una nube",
fin:"Tu foto ya se mueve. Prueba con un bucle para que se repita sin cortes en redes.",
def:"producto",empty:"[describe aquí la foto y el movimiento, arriba]",
apps:{
 producto:{n:"Foto de producto",db:false,d:"mi foto de producto, con un giro lento de cámara y un brillo de luz que pasa por encima"},
 lugar:{n:"Mi local o mi casa",db:false,d:"la foto de mi local, con gente que pasa difuminada y la luz cambiando un poco"},
 paisaje:{n:"Paisaje",db:false,d:"mi foto de paisaje, con nubes que se mueven y el agua o la hierba en movimiento"},
 ilustracion:{n:"Ilustración",db:false,d:"mi ilustración, con movimientos suaves: el pelo, el humo o las hojas se mueven"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Elige bien la foto",s:"3 min · la base",b:()=>`<ul><li>Nítida y con buena luz.</li><li>Que sea tuya o tengas permiso para usarla.</li><li>Si salen personas, que hayan dado su permiso.</li></ul>${ok("tienes la foto elegida.")}`},
{t:"Decide un solo movimiento",s:"3 min · menos es más",b:()=>`<p class="what">Sube la foto al chat dentro de <b>Mi estudio</b> y pega:</p>${cb(`Quiero animar esta foto: ${D()}.\n\nPropón 3 movimientos sencillos (uno de cámara y dos de cosas de la escena) y dime cuál quedará más natural.`)}
${ok("has elegido un movimiento.")}`},
{t:"Genera el clip",s:"5 min · ¡que se mueva!",b:()=>`${cb("Anima la foto con Higgsfield con el movimiento elegido. Unos 5 segundos, movimiento lento. Mantén la imagen igual: no cambies caras, textos ni colores.")}${ok("tienes un clip que empieza igual que tu foto.")}`},
{t:"Ajusta la velocidad",s:"5 min · pulir",b:()=>`${cb("Hazlo un poco más lento y suave. No cambies nada más.")}${tip("Si algo se deforma (una cara, un logo), pide que esa parte se quede quieta.")}${ok("el movimiento se ve natural.")}`},
{t:"Haz un bucle para redes",s:"4 min · opcional",b:()=>`${cb("Haz una versión en bucle: que el final enlace con el principio para que se repita sin cortes. Formato vertical 9:16.")}${ok("tienes el clip listo para publicar.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"personaje",t:"Un personaje que siempre sale igual",d:"Crea la mascota o el presentador de tu marca y úsalo en todas tus imágenes y vídeos.",
meta:["⏱ 40 min", "👩‍🍳 Media", "🧑‍🎨 Personaje", "🍽 Resultado: tu personaje en varias escenas, siempre reconocible"],
q:"¿Qué personaje quieres?",ph:"Describe tu personaje. Ejemplo: un erizo con delantal que es el panadero de mi marca",
fin:"Tu personaje ya tiene ficha y se reconoce en cada escena. Úsalo en las otras recetas del libro: anuncios, animación o vídeo UGC.",
def:"mascota",empty:"[describe aquí tu personaje, arriba]",
apps:{
 mascota:{n:"Mascota de marca",db:false,d:"una mascota amable que represente a mi marca, ilustrada, con colores de la marca"},
 presentador:{n:"Presentador realista",db:false,d:"una persona inventada y realista que presente los vídeos de mi marca, siempre con el mismo estilo"},
 cuento:{n:"Personaje de cuento",db:false,d:"el protagonista de un cuento infantil, con un rasgo especial que lo haga único"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"La ficha del personaje",s:"10 min · con Claude",b:()=>`<p class="what">Antes de dibujar, se escribe. La ficha es lo que hace que el personaje salga siempre igual.</p>${cb(`Quiero crear ${D()}.\n\nHazme 5 preguntas sobre su personalidad y su aspecto. Después escribe su ficha: nombre, rasgos físicos fijos (forma, colores, ropa, un detalle único) y cómo se mueve y habla. Que no se parezca a ningún personaje existente.`)}
${ok("tienes la ficha escrita.")}`},
{t:"Sus primeras imágenes",s:"10 min · 3 vistas",b:()=>`${cb("Con esa ficha, genera con Higgsfield 3 imágenes del personaje con el mismo estilo: de frente, de lado y de cuerpo entero, sobre fondo liso. Primero una, y si me gusta, las otras dos.")}
${tip("Elige la versión que más te guste y descarta las demás: a partir de aquí, esa es la «buena».")}${ok("tienes 3 imágenes en las que es claramente el mismo personaje.")}`},
{t:"Que Higgsfield lo recuerde",s:"10 min · fijarlo",b:()=>`<p class="what">Higgsfield puede guardar un personaje para que salga igual en todas las generaciones (se llama <b>Soul ID</b>). Necesita de 3 a 5 imágenes buenas.</p>${cb("¿Puedes crear un personaje guardado en Higgsfield con estas imágenes? Si no se puede desde aquí, explícame cómo hacerlo en la web, paso a paso.")}
${det("Si lo haces en la web",["Busca la opción de crear personaje (Soul ID).","Sube las 3 a 5 imágenes de tu personaje.","Ponle el nombre de la ficha. Crear el personaje gasta créditos."])}
${ok("tu personaje está guardado en Higgsfield, o tienes sus imágenes listas para usarlas de referencia.")}`},
{t:"Ponlo en escena",s:"8 min · a trabajar",b:()=>`${cb("Genera a mi personaje en esta escena: [dónde está y qué hace]. Que sea exactamente el mismo: usa el personaje guardado o las imágenes como referencia.")}${ok("el personaje se reconoce en una escena nueva.")}`},
{t:"Guarda la ficha en tu estudio",s:"2 min · para siempre",b:()=>`<ol><li>Copia la ficha del paso 1.</li><li>En el proyecto <b>Mi estudio</b>, pulsa <b>Añadir contenido</b> y pégala junto con las 3 imágenes.</li></ol>${ok("en cualquier chat del estudio, Claude sabe cómo es tu personaje.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"anuncio-redes",t:"Anuncio vertical para redes",d:"Un anuncio de 15 segundos para Reels, TikTok o Shorts, con 3 planos, tu logo y música.",
meta:["⏱ 40 min", "👩‍🍳 Media", "📱 Vídeo vertical", "🍽 Resultado: un anuncio de 15 segundos listo para publicar"],
q:"¿Qué quieres anunciar?",ph:"Describe qué anuncias y para quién. Ejemplo: el lanzamiento de mi nueva colección de tazas para gente que teletrabaja",
fin:"Tienes tu anuncio. Publica dos versiones con distinto principio y mira cuál funciona mejor.",
def:"lanzamiento",empty:"[describe aquí qué anuncias, arriba]",
apps:{
 lanzamiento:{n:"Lanzamiento",db:false,d:"el lanzamiento de mi nuevo producto, con un plano final con el producto y mi logo"},
 oferta:{n:"Oferta",db:false,d:"una oferta de tiempo limitado, que se entienda en los primeros 3 segundos"},
 marca:{n:"Marca personal",db:false,d:"un anuncio de mi servicio como profesional, cercano y que transmita confianza"},
 evento:{n:"Evento",db:false,d:"un evento con fecha y lugar, que dé ganas de ir"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Tres planos y un mensaje",s:"10 min · el guion",b:()=>`${cb(`Quiero un anuncio vertical de 15 segundos para redes: ${D()}.\n\nPropón un guion de 3 planos:\n1) Gancho visual (3 s): algo que haga parar de deslizar.\n2) El producto o el servicio en acción (8 s).\n3) Final con el producto y espacio para mi logo (4 s).\n\nDame también el texto corto que pondré encima de cada plano y 2 ganchos alternativos.`)}
${ok("tienes el guion de 3 planos y los textos.")}`},
{t:"Genera los 3 planos",s:"15 min · rodaje",b:()=>`${cb("Genera con Higgsfield los 3 planos en vertical 9:16, con la misma luz y los mismos colores para que parezcan del mismo anuncio. Uno a uno: enséñame cada plano antes de hacer el siguiente.")}
${tip("Si sale tu producto, sube su foto de referencia antes de empezar.")}${ok("tienes los 3 clips.")}`},
{t:"Texto, logo y música",s:"10 min · montaje",b:()=>`<p class="what">Los textos y la música se ponen fuera de Higgsfield, en una app de edición sencilla como CapCut o Canva.</p><ol><li>Une los 3 clips en orden.</li><li>Pon encima los textos que te dio Claude, grandes y en la parte central.</li><li>Pon tu logo en el último plano.</li><li>Añade música de la biblioteca de la app (así no tienes problemas de derechos).</li></ol>
${ok("tu anuncio dura unos 15 segundos y se entiende sin sonido.")}`},
{t:"Prueba dos versiones",s:"5 min · aprender",b:()=>`${cb("Genera otra versión solo del primer plano, con el gancho alternativo 2, para probar cuál funciona mejor.")}
${tip("Publica las dos versiones con unos días de diferencia y compara cuánta gente ve el vídeo hasta el final.")}${ok("tienes dos versiones del anuncio listas.")}`}
]}
]};
