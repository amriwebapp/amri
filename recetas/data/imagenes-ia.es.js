(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: imágenes con IA, gratis",
intro:"Ilustraciones, fotos de producto, carteles con texto, ediciones e iconos con herramientas gratuitas. Claude escribe la descripción perfecta (el «prompt») y el generador hace la imagen. Prepara las herramientas una vez y elige la receta.",
meta:["📕 7 recetas", "💶 Gratis", "🍽 Resultado: imágenes listas para usar"],
ing:"Ingredientes (todos gratuitos)",
fin:"Tu cocina está lista. Elige la imagen que quieres hacer.",
R:{key:"libro-imagenes",
ing:()=>`<li><b>Claude</b>: el jefe de cocina. Convierte tu idea en una buena descripción.</li><li><b>Bing Image Creator</b>: el horno. Genera las imágenes gratis.</li><li><b>Ideogram</b>: el pastelero. El que mejor escribe letras dentro de una imagen.</li><li><b>Canva</b>: el emplatado. Recorta, retoca y exporta.</li>`,
steps:[
{t:"Crea tus cuentas",s:"cuentas gratis",b:()=>`<ol>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Entra en <a href="https://www.bing.com/images/create" target="_blank" rel="noopener">Bing Image Creator</a> con una cuenta de Microsoft.</li>
<li>Crea tu cuenta en <a href="https://ideogram.ai" target="_blank" rel="noopener">Ideogram</a>.</li>
<li>Crea tu cuenta en <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a>.</li></ol>
${tip("Los límites gratuitos de cada herramienta cambian. Si te quedas sin créditos en una, prueba con la otra o espera al día siguiente.")}${ok("has entrado en todas.")}`},
{t:"La fórmula de una buena descripción",s:"cinco ingredientes",b:()=>`<p class="what">A la descripción que le das a la IA se le llama <b>prompt</b>. Una buena tiene cinco ingredientes:</p><ol><li><b>Sujeto</b>: qué sale.</li><li><b>Estilo</b>: acuarela, 3D, fotografía…</li><li><b>Luz</b>: suave, de atardecer, de estudio.</li><li><b>Colores</b>.</li><li><b>Encuadre</b>: de cerca, desde arriba, de cuerpo entero.</li></ol>
${tip("Describe lo que SÍ quieres. La IA entiende mal los «no»: en vez de «sin gente», escribe «una calle vacía».")}${ok("sabrías decir los cinco ingredientes.")}`},
{t:"Crea el proyecto «Mis imágenes»",s:"las reglas",b:()=>`<ol><li>En Claude crea un proyecto llamado <b>Mis imágenes</b>.</li><li>En sus instrucciones, pega:</li></ol>${cb("Me ayudas a crear imágenes con generadores de IA gratuitos (Bing Image Creator e Ideogram).\n\nCuando te pida una imagen, escríbeme 3 prompts en inglés con sujeto, estilo, luz, colores y encuadre, y explícame en español qué cambia entre ellos. Si lleva texto, pon el texto exacto entre comillas. Cuando algo funcione, guárdalo en un bloque para reutilizarlo.")}${ok("tienes el proyecto con sus instrucciones.")}`}
,
{x:1,t:"Tu chuleta de estilos",s:"Opcional",b:()=>`${cb("Hazme una chuleta de 12 estilos para generadores de imágenes, en una tabla: nombre del estilo en inglés, qué aspecto da, para qué lo usaría y 3 palabras clave que lo provocan.")}`},
{x:1,t:"Úsalas con tranquilidad",s:"Siempre · consejos",b:()=>`<ol><li>Revisa las condiciones de cada herramienta antes de un uso comercial: cambian con el tiempo.</li><li>No imites a personas reales ni marcas registradas.</li><li>Revisa manos, ojos y detalles: es donde la IA más se equivoca.</li><li>Guarda tus prompts: son tu recetario personal.</li></ol>`}
]},
recetas:[
{s:"ilustracion",t:"Una ilustración con tu estilo",d:"Para una camiseta, un cuento, tu web o una tarjeta.",
meta:["👩‍🍳 Fácil", "🎨 Ilustración", "🍽 Resultado: una ilustración que te gusta"],
q:"¿Qué ilustración?",ph:"Descríbela. Ejemplo: mi perro como astronauta para una camiseta",
fin:"Tienes tu ilustración. Guarda el prompt ganador para repetir el estilo.",
def:"cuento",empty:"[describe la ilustración, arriba]",
apps:{
 cuento:{n:"Cuento",db:false,d:"una ilustración de cuento, colorida y amable, de un zorro leyendo en un bosque de otoño"},
 camiseta:{n:"Camiseta",db:false,d:"una ilustración sencilla y con fondo liso para estampar en una camiseta"},
 web:{n:"Para mi web",db:false,d:"una ilustración plana y limpia para la portada de mi web"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Tres prompts",s:"Claude escribe",b:()=>`${cb(`Quiero ${D()}. Dame 3 prompts con estilos distintos.`)}${ok("tienes 3 prompts y entiendes la diferencia.")}`},
{t:"Genera",s:"el horno",b:()=>`<ol><li>Abre <b>Bing Image Creator</b>, pega el primer prompt y pulsa <b>Crear</b>.</li><li>Repite con los otros dos.</li><li>Descarga la que más te guste.</li></ol>${tip("Si te da error, puede que alguna palabra esté bloqueada (famosos, marcas). Reformula.")}${ok("tienes una imagen favorita.")}`},
{t:"Ajusta",s:"un cambio cada vez",b:()=>`${cb("Me ha salido esto con el prompt [pégalo]. Me gusta [qué], pero quiero cambiar [qué]. Reescribe el prompt cambiando solo eso.")}${ok("tienes la ilustración como querías.")}`}
]},
{s:"producto",t:"Foto de producto realista",d:"Tu producto en una escena bonita, como de catálogo.",
meta:["👩‍🍳 Fácil", "📸 Producto", "🍽 Resultado: una foto de producto para tu tienda o redes"],
q:"¿Qué producto?",ph:"Descríbelo. Ejemplo: una taza de cerámica artesanal azul",
fin:"Tienes tu foto. Si necesitas que sea tu producto exacto, mira el libro de Higgsfield: trabaja con tu foto de referencia.",
def:"mesa",empty:"[describe tu producto, arriba]",
apps:{
 mesa:{n:"Sobre una mesa",db:false,d:"una foto de producto de mi taza de cerámica sobre una mesa de madera, con luz de mañana"},
 blanco:{n:"Fondo blanco",db:false,d:"una foto de producto sobre fondo blanco puro, centrada y bien iluminada"},
 ambiente:{n:"En uso",db:false,d:"una foto de mi producto mientras alguien lo usa, en un ambiente acogedor"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Describe tu producto con detalle",s:"Claude escribe",b:()=>`${cb(`Quiero ${D()}. Mi producto es: [forma, tamaño, color, material]. Dame 3 prompts de fotografía de producto realista, con la luz y el encuadre de un catálogo profesional.`)}${ok("tienes 3 prompts.")}`},
{t:"Genera y elige",s:"el horno",b:()=>`<ol><li>Genera los 3 prompts en Bing Image Creator.</li><li>Elige la más realista y descárgala.</li></ol>${tip("Una IA gratuita no puede copiar exactamente tu producto. Sirve para ideas, fondos y redes; para tu producto exacto, usa una foto de referencia (libro de Higgsfield).")}${ok("tienes una foto que encaja con tu producto.")}`},
{t:"Ajusta el tamaño en Canva",s:"emplatar",b:()=>`<ol><li>En Canva, crea un diseño del tamaño que necesites y sube la imagen.</li><li>Descarga: <b>JPG</b> para fotos.</li></ol>${ok("tienes la foto en el tamaño justo.")}`}
]},
{s:"con-texto",t:"Una imagen con texto: cartel o portada",d:"Carteles, portadas y anuncios con letras que se leen bien.",
meta:["👩‍🍳 Fácil", "🔤 Texto", "🍽 Resultado: un cartel o una portada sin faltas"],
q:"¿Qué quieres hacer?",ph:"Di qué y con qué texto. Ejemplo: un cartel para un concierto con «Jazz en la terraza · 12 de julio»",
fin:"Tu imagen con texto está lista y se lee perfecta.",
def:"cartel",empty:"[di qué y con qué texto, arriba]",
apps:{
 cartel:{n:"Cartel",db:false,d:"un cartel para un concierto de jazz con el texto «Jazz en la terraza · 12 de julio»"},
 portada:{n:"Portada",db:false,d:"la portada de un ebook de recetas veganas con el título «Verde y fácil»"},
 anuncio:{n:"Anuncio",db:false,d:"un anuncio para redes con el texto «Nueva colección»"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"El prompt con el texto entre comillas",s:"Claude escribe",b:()=>`${cb(`Quiero ${D()}. Dame 3 prompts para Ideogram, con el texto exacto entre comillas y dónde colocarlo.`)}${ok("tienes 3 prompts con el texto entre comillas.")}`},
{t:"Genera en Ideogram",s:"el pastelero",b:()=>`<ol><li>Abre <b>Ideogram</b>, pega el prompt y genera.</li><li>Lee el texto letra por letra.</li><li>Si hay un error, usa <b>Remix</b> con el mismo prompt.</li></ol>${ok("el texto se lee bien.")}`},
{t:"Si las letras siguen fallando",s:"el truco profesional",b:()=>`<p class="what">Genera la imagen <b>sin texto</b> y añade las letras en Canva. Queda perfecto y lo puedes cambiar cuando quieras.</p>${cb("Recomiéndame 2 tipografías gratuitas de Canva que encajen con esta imagen y dónde poner el texto.")}${ok("tienes la imagen final con el texto perfecto.")}`}
]},
{s:"serie",off:1,t:"Una serie con el mismo estilo",d:"Varias imágenes que parecen de la misma familia, para tu web o una campaña.",
meta:["👩‍🍳 Media", "🖼 Serie", "🍽 Resultado: 5 imágenes con el mismo estilo"],
q:"¿Para qué la serie?",ph:"Di para qué. Ejemplo: las 5 secciones de mi web",
fin:"Tu serie es coherente. Guarda el prompt base: es el «sello» de tu marca.",
def:"web",empty:"[di para qué es la serie, arriba]",
apps:{
 web:{n:"Secciones de mi web",db:false,d:"las secciones de mi web"},
 campana:{n:"Una campaña",db:false,d:"una campaña de redes de 5 publicaciones"},
 otra:{n:"✏️ Otra",db:false,d:""}
},
steps:[
{t:"Tu prompt ganador",s:"el estilo",b:()=>`<p class="what">Parte de una imagen que ya te guste (de la receta «Una ilustración con tu estilo», por ejemplo).</p>${ok("tienes el prompt de esa imagen.")}`},
{t:"Las variaciones",s:"Claude escribe",b:()=>`${cb(`Este es mi prompt ganador: [pégalo]. Quiero una serie para ${D()}: hazme 5 variaciones con sujetos distintos ([sujeto 1], [sujeto 2]…), manteniendo exactamente el mismo estilo, luz y colores, palabra por palabra.`)}${ok("tienes 5 prompts con el mismo estilo.")}`},
{t:"Genera y compara juntas",s:"coherencia",b:()=>`<ol><li>Genera las 5.</li><li>Ponlas juntas (en Canva, por ejemplo) y descarta la que desentone.</li></ol>${ok("las 5 parecen de la misma familia.")}`}
]},
{s:"personaje",off:1,t:"El mismo personaje en varias imágenes",d:"Una mascota de marca o el protagonista de un cuento, reconocible en cada escena.",
meta:["👩‍🍳 Media", "🧸 Personaje", "🍽 Resultado: tu personaje en 3 escenas"],
q:"¿Qué personaje?",ph:"Descríbelo. Ejemplo: una erizo panadera con delantal amarillo",
fin:"Tu personaje se reconoce. Guarda su ficha en el proyecto «Mis imágenes».",
def:"mascota",empty:"[describe el personaje, arriba]",
apps:{
 mascota:{n:"Mascota de marca",db:false,d:"la mascota de mi marca"},
 cuento:{n:"Protagonista de cuento",db:false,d:"el protagonista de un cuento infantil"},
 otra:{n:"✏️ Otro",db:false,d:""}
},
steps:[
{t:"La ficha del personaje",s:"fijar rasgos",b:()=>`${cb(`Quiero crear ${D()}: [descríbelo]. Escríbeme una ficha de personaje en inglés para generadores de imágenes: rasgos, pelo o pelaje, ropa con colores exactos, proporciones y estilo de dibujo. Después dame 3 prompts que reutilicen la ficha palabra por palabra, cada uno en una escena distinta.`)}${ok("tienes la ficha y 3 prompts.")}`},
{t:"La imagen de referencia",s:"la buena",b:()=>`<ol><li>Genera la primera escena varias veces y quédate con la mejor: será tu <b>referencia</b>.</li></ol>${ok("tienes la imagen de referencia.")}`},
{t:"Las demás escenas",s:"coherencia",b:()=>`<ol><li>En las siguientes, pega la ficha completa sin cambiar ni una palabra.</li><li>Si tu herramienta deja subir una imagen de referencia, sube la buena.</li></ol>${tip("Para un personaje que salga siempre idéntico en vídeo, mira la receta «Un personaje que siempre sale igual» del libro de Higgsfield.")}${ok("se reconoce al mismo personaje en las 3 escenas.")}`}
]},
{s:"editar",t:"Edita una foto que ya tienes",d:"Quita el fondo, borra un objeto o amplía el encuadre de una foto tuya.",
meta:["👩‍🍳 Fácil", "✂️ Edición", "🍽 Resultado: tu foto editada"],
q:"¿Qué quieres cambiar?",ph:"Di qué. Ejemplo: quitar a la gente del fondo de mi foto de la playa",
fin:"Tu foto está editada. Guarda siempre la original aparte.",
def:"fondo",empty:"[di qué quieres cambiar, arriba]",
apps:{
 fondo:{n:"Quitar el fondo",db:false,d:"quitar el fondo"},
 objeto:{n:"Borrar un objeto",db:false,d:"borrar un objeto o una persona del fondo"},
 ampliar:{n:"Ampliar el encuadre",db:false,d:"ampliar el encuadre a lo ancho"},
 otra:{n:"✏️ Otro cambio",db:false,d:""}
},
steps:[
{t:"Pregunta qué herramienta usar",s:"el camino",b:()=>`${cb(`Te adjunto una foto. Quiero ${D()}. Dime qué herramienta gratuita me conviene (Canva o Ideogram), los pasos y, si hace falta, el texto exacto en inglés para la zona que voy a cambiar.`)}${ok("sabes qué herramienta usar y cómo.")}`},
{t:"Edita",s:"manos a la obra",b:()=>`<ul><li><b>Quitar el fondo o borrar un objeto</b>: en Canva, sube la foto y abre <b>Editar</b>. Algunas funciones son solo de Canva Pro.</li><li><b>Ampliar o cambiar una zona</b>: en Ideogram, sube la imagen y usa sus herramientas de edición.</li></ul>
${tip("Edita solo fotos tuyas o con permiso. Nunca cambies la cara de una persona real ni hagas que parezca que dijo o hizo algo que no ocurrió.")}${ok("tienes la versión editada y la original guardadas por separado.")}`}
]},
{s:"iconos",t:"Iconos y gráficos dibujados por Claude",d:"Claude dibuja con código (SVG): iconos y gráficos nítidos a cualquier tamaño.",
meta:["👩‍🍳 Fácil", "🔷 SVG", "🍽 Resultado: un set de iconos coherentes"],
q:"¿Qué iconos?",ph:"Di para qué. Ejemplo: 6 iconos para los servicios de mi peluquería",
fin:"Tus iconos se ven nítidos a cualquier tamaño y puedes cambiarles el color cuando quieras.",
def:"web",empty:"[di para qué son los iconos, arriba]",
apps:{
 web:{n:"Iconos para mi web",db:false,d:"6 iconos para las secciones de mi web"},
 diagrama:{n:"Un diagrama",db:false,d:"un diagrama sencillo que explique cómo funciona mi servicio en 4 pasos"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Pídelos",s:"Claude dibuja",b:()=>`${cb(`Dibújame en SVG ${D()}. Estilo de línea, trazo redondeado de 2 px, todos coherentes. Muéstramelos juntos y dame el código de cada uno por separado.`)}${ok("ves los iconos en el chat.")}`},
{t:"Ajusta y guarda",s:"a tu gusto",b:()=>`<ol><li>Pide cambios con palabras: «más grueso», «esquinas redondas», «usa mi color #E07A5F».</li><li>Copia el código de cada uno y guárdalo como <code>icono.svg</code>. Canva y casi cualquier web lo aceptan.</li></ol>${ok("tienes tus iconos en SVG.")}`}
]}
]};
