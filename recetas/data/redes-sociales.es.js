(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: tus redes sociales con Claude",
intro:"Instagram, TikTok, LinkedIn, X o Threads, con tu propia voz. Primero le enseñas a Claude cómo hablas y de qué vas a hablar; después eliges la receta: una biografía, un reel, un carrusel, un mes planificado… Claude escribe; tú decides y publicas.",
meta:["📕 8 recetas", "⏱ 15-30 min cada una", "💶 Gratis", "🍽 Resultado: contenido que suena a ti, cada semana"],
ing:"Ingredientes",
fin:"Claude ya conoce tu voz y tus temas. Ahora elige una receta del libro: todas parten de aquí.",
R:{key:"libro-redes",
ing:()=>`<li><b>Claude</b>: tu equipo de contenido. Escribe, adapta y planifica contigo.</li><li><b>Un proyecto de Claude</b>: la libreta. Guarda tu voz para que Claude la recuerde en cada chat.</li><li><b>Tus redes</b>: mejor con perfil profesional (de creador o de empresa), para ver tus estadísticas.</li>`,
steps:[
{t:"Elige tus redes y pásalas a profesional",s:"5 min · antes de nada",b:()=>`<p class="what">Claude escribe y tú decides qué publicas. Nada se publica solo: así cumples las normas de cada red y no arriesgas tu cuenta.</p><ol>
<li>Elige <b>una o dos redes</b> para empezar. Mejor hacerlo bien en dos que a medias en cinco.</li>
<li>Cambia tus perfiles a <b>cuenta profesional</b> (de creador o de empresa). Es gratis y te da estadísticas.</li></ol>
${ok("tus perfiles son profesionales.")}`},
{t:"Crea el proyecto «Mis redes»",s:"3 min · la libreta",b:()=>`<p class="what">Un proyecto de Claude es una carpeta con memoria: lo que guardes en sus instrucciones, Claude lo tiene en cuenta en todos los chats de dentro.</p><ol>
<li>En Claude pulsa <b>Proyectos → Crear proyecto</b> y llámalo <b>Mis redes</b>.</li>
<li>Abre todos los chats de este libro <b>dentro de ese proyecto</b>.</li></ol>
${ok("tienes el proyecto «Mis redes».")}`},
{t:"Enséñale tu voz",s:"10 min · el paso más importante",b:()=>`<p class="what">Si Claude no conoce tu voz, todo sonará a «escrito por IA». Este paso lo evita.</p><ol><li>Dentro del proyecto, abre un chat y pega este mensaje. Si ya tienes publicaciones, añade tres al final:</li></ol>${cb("Ayúdame a definir mi voz para redes sociales.\n\nHazme las preguntas de una en una: de qué va mi cuenta, a quién hablo, qué ofrezco, qué palabras uso y cuáles nunca diría, qué opino distinto a los demás y qué temas no toco.\n\nAl final, escribe una «guía de voz» de una página que pueda pegar en las instrucciones del proyecto. Incluye esta regla: nunca inventes datos, cifras ni testimonios.\n\n[Si tienes publicaciones tuyas, pega aquí tres]")}
<ol start="2"><li>Copia la guía y pégala en las <b>instrucciones del proyecto</b>.</li></ol>
${det("¿Qué lleva una buena guía de voz?",["<b>A quién hablas</b>, muy concreto: «oficinistas con dolor de espalda», no «gente».","<b>Palabras tuyas</b> y palabras prohibidas.","<b>Tus opiniones</b>: tres ideas en las que crees y otros no. De ahí salen los mejores contenidos.","<b>Pruebas reales</b>: datos y casos tuyos."])}
${ok("la guía de voz está en las instrucciones del proyecto y, al leerla, suena a ti.")}`},
{t:"Elige tus temas fijos",s:"5 min · de qué vas a hablar",b:()=>`<p class="what">Tus temas fijos (los creadores los llaman <b>pilares</b>) son 3 o 4 asuntos sobre los que siempre hablas. Te ahorran el «¿hoy qué publico?».</p>${cb("Con mi guía de voz, propón 4 temas fijos para mis redes. Para cada uno: qué problema resuelve a mi público, 5 ideas de publicación y en qué formato funciona mejor (vídeo corto, carrusel o texto).")}
<ol><li>Cuando te gusten, pide: «Añade estos temas a mi guía de voz» y actualiza las instrucciones del proyecto.</li></ol>
${ok("tienes 3 o 4 temas fijos guardados en el proyecto.")}`}
,
{x:1,t:"Quita el tono de IA (úsalo siempre)",s:"Siempre · antes de publicar",b:()=>`<p class="what">Antes de publicar cualquier cosa, pásala por aquí:</p>${cb("Revisa este texto con mi guía de voz. Quita frases hechas, signos raros, exceso de emojis y todo lo que suene a «escrito por IA». Léelo como si fuera a decirlo en voz alta y dime qué has cambiado.\n\n[pega tu texto]")}`},
{x:1,t:"Instagram a fondo con Claude Code",s:"Opcional · plugin de Instagram",b:()=>`<p class="what">Si usas Claude Code, el plugin <b>Instagram Agent</b> (gratis y de código abierto, creado por <a href="https://github.com/Jakeschincariol/instagram-agent-skill" target="_blank" rel="noopener">Jake Schincariol</a>) añade 13 recetas de Instagram que empiezan por <code>/ig-</code>. No publica nada por ti ni te pide la contraseña.</p>${cb("/plugin marketplace add Jakeschincariol/instagram-agent-skill")}${cb("/plugin install instagram-agent")}
${tip("Antes de instalar un plugin de otra persona, echa un vistazo a su repositorio.")}`},
{x:1,t:"Reglas de la casa",s:"Siempre · para no tener problemas",b:()=>`<ol><li>No compres seguidores ni uses programas que publiquen o comenten solos: las redes lo detectan y pueden cerrarte la cuenta.</li><li>Si es una colaboración pagada, márcala como <b>publicidad</b> con la opción de cada red.</li><li>Si una imagen o un vídeo realista está hecho con IA, márcalo como <b>contenido de IA</b>.</li><li>No inventes testimonios ni resultados de clientes.</li></ol>`}
]},
recetas:[
/* ---------------------------------------------------------------- */
{s:"biografia",t:"Una biografía que hace que te sigan",d:"En tres segundos alguien decide si te sigue. Tu biografía tiene que decir qué haces, para quién y por qué seguirte.",
meta:["⏱ 15 min", "👩‍🍳 Fácil", "👤 Perfil", "🍽 Resultado: tu biografía nueva en cada red"],
q:"¿En qué red?",ph:"Pega tu biografía actual o di qué haces. Ejemplo: soy fisioterapeuta en Valencia y hablo de postura",
fin:"Tu perfil ya dice qué haces y para quién. Repite la receta en cada red: no es lo mismo una biografía de LinkedIn que una de TikTok.",
def:"instagram",empty:"[pega aquí tu biografía actual o di qué haces, arriba]",
apps:{
 instagram:{n:"Instagram",db:true,d:"mi biografía de Instagram"},
 tiktok:{n:"TikTok",db:true,d:"mi biografía de TikTok"},
 linkedin:{n:"LinkedIn",db:true,d:"mi titular y mi sección «Acerca de» de LinkedIn"},
 x:{n:"X / Threads",db:true,d:"mi biografía de X y de Threads"},
 otra:{n:"✏️ Otra red",db:true,d:""}
},
steps:[
{t:"Pide tres versiones",s:"5 min · escribir",b:()=>`${cb(`Quiero mejorar ${D()}. Esta es la actual: [pégala, o escribe «no tengo»].\n\nEscribe 3 versiones respetando el límite de caracteres de esa red. Cada una debe decir qué hago, para quién y qué gana quien me sigue, y terminar con una invitación a mi enlace.`)}${ok("tienes 3 versiones para elegir.")}`},
{t:"Elige y ajusta",s:"3 min · con tu voz",b:()=>`${cb("Me quedo con la versión [número]. Hazla más [corta / cercana / concreta] y comprueba que suena a mi guía de voz.")}${ok("tienes una biografía que te convence.")}`},
{t:"Foto, nombre y enlace",s:"5 min · el resto del perfil",b:()=>`${cb("Revisa el resto de mi perfil: mi nombre visible es [nombre], mi foto es [descríbela] y mi enlace va a [dónde]. Dime qué cambiarías para que se entienda a qué me dedico en tres segundos.")}
${tip("En el nombre visible puedes añadir a qué te dedicas («Ana · Fisio de oficina»): ayuda a que te encuentren al buscar.")}${ok("sabes qué cambiar en tu foto, nombre y enlace.")}`},
{t:"Cámbialo en la red",s:"2 min · publicar",b:()=>`<ol><li>Abre tu perfil en la app de la red y pulsa <b>Editar perfil</b>.</li><li>Pega la biografía nueva y guarda.</li><li>Mira tu perfil como lo vería alguien nuevo: ¿se entiende qué haces?</li></ol>${ok("tu perfil nuevo está publicado.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"reel",t:"Un reel o TikTok que engancha",d:"Gancho para el primer segundo, guion de 30 segundos, qué grabar y los subtítulos.",
meta:["⏱ 30 min", "👩‍🍳 Fácil", "🎥 Vídeo corto", "🍽 Resultado: un vídeo corto listo para grabar y publicar"],
q:"¿De qué tipo?",ph:"Di de qué va el vídeo. Ejemplo: 3 errores al sentarte delante del ordenador",
fin:"Tienes tu vídeo corto. Publica y, dentro de una semana, mira la receta «Mide y mejora» para saber si el gancho funcionó.",
def:"consejo",empty:"[di de qué va el vídeo, arriba]",
apps:{
 consejo:{n:"Consejo útil",db:true,d:"un consejo práctico de mi tema, en 30 segundos"},
 error:{n:"Errores comunes",db:true,d:"los 3 errores más comunes de mi público y cómo evitarlos"},
 historia:{n:"Una historia",db:true,d:"una historia real mía o de mi negocio, con un aprendizaje al final"},
 detras:{n:"Detrás de las cámaras",db:true,d:"cómo es un día de trabajo o cómo se hace mi producto"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"Cinco ganchos",s:"5 min · el primer segundo",b:()=>`<p class="what">En TikTok, Reels y Shorts, el primer segundo decide si la gente se queda. Por eso empezamos por ahí.</p>${cb(`Quiero un vídeo corto sobre ${D()}.\n\nDame 5 ganchos para el primer segundo: la frase que digo y lo que se ve en pantalla. Que cada uno use una técnica distinta (pregunta, dato, error, promesa, opinión contraria). Con mi guía de voz.`)}
${ok("has elegido un gancho.")}`},
{t:"El guion de 30 segundos",s:"5 min · lo que dices",b:()=>`${cb("Con el gancho [número], escribe el guion completo de 30 segundos, frase a frase, como lo diría yo hablando. Marca dónde cambiar de plano. Termina con una invitación a seguirme o a guardar el vídeo.")}
${tip("Léelo en voz alta con el cronómetro del móvil. Si pasa de 35 segundos, pide: «Recórtalo a 30 sin perder lo importante».")}${ok("tienes un guion que dura unos 30 segundos.")}`},
{t:"Qué grabar",s:"5 min · la lista de planos",b:()=>`${cb("Dame una lista de planos para grabar este guion con el móvil: qué se ve en cada frase, desde dónde grabo y si salgo yo o solo mis manos. Cosas sencillas que pueda hacer en casa o en mi trabajo.")}${ok("sabes qué grabar en cada momento.")}`},
{t:"Graba y pon subtítulos",s:"10 min · rodaje",b:()=>`<ol><li>Graba en vertical, con luz de ventana de frente.</li><li>Edítalo en la app de la red o en CapCut: corta los silencios.</li><li>Activa los <b>subtítulos automáticos</b> y revísalos: mucha gente ve los vídeos sin sonido.</li></ol>${ok("tienes el vídeo editado con subtítulos.")}`},
{t:"El texto de la publicación",s:"3 min · descripción",b:()=>`${cb("Escribe el texto de la publicación: una primera línea que complemente el gancho, dos frases de valor y una pregunta para que comenten. Sin exceso de emojis ni etiquetas.")}${ok("el vídeo está publicado con su texto.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"carrusel",t:"Un carrusel que la gente guarda",d:"Diapositivas con una idea cada una, para Instagram o LinkedIn. Si tienes Canva conectado, Claude lo diseña.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "🖼 Carrusel", "🍽 Resultado: un carrusel de 7 diapositivas"],
q:"¿Qué tipo de carrusel?",ph:"Di de qué va. Ejemplo: 5 ejercicios para la espalda que puedes hacer en la oficina",
fin:"Tu carrusel está listo. Los carruseles útiles se guardan mucho: es una señal que las redes valoran.",
def:"guia",empty:"[di de qué va el carrusel, arriba]",
apps:{
 guia:{n:"Guía paso a paso",db:true,d:"una guía paso a paso de mi tema"},
 lista:{n:"Lista o recopilación",db:true,d:"una lista de recursos, consejos o herramientas de mi tema"},
 mito:{n:"Mitos y verdades",db:true,d:"los mitos más comunes de mi tema y la verdad sobre cada uno"},
 antes:{n:"Antes y después",db:true,d:"un antes y después de un caso real mío (con permiso del cliente)"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"Los textos, diapositiva a diapositiva",s:"10 min · escribir",b:()=>`${cb(`Quiero un carrusel de 7 diapositivas: ${D()}.\n\n1) Portada con un título que haga parar.\n2 a 6) Una idea por diapositiva, con un título corto y una o dos frases.\n7) Cierre con una invitación a guardarlo o a seguirme.\n\nCon mi guía de voz. Textos cortos: se leen en el móvil.`)}${ok("tienes los textos de las 7 diapositivas.")}`},
{t:"Diséñalo",s:"10 min · aspecto",b:()=>`<p class="what">Dos caminos, el que te resulte más cómodo:</p><ul>
<li><b>Con Canva conectado</b> (receta <a href="canva-diseno.html">Diseña en Canva</a>): pide a Claude «Crea este carrusel en Canva, formato 4:5, con mis colores».</li>
<li><b>A mano</b>: en Canva o en la app que uses, busca una plantilla de carrusel y pega los textos.</li></ul>
${tip("Letra grande, poco texto y el mismo estilo en todas las diapositivas. La portada es la que más importa.")}${ok("tienes las 7 diapositivas diseñadas.")}`},
{t:"El texto y la publicación",s:"5 min · publicar",b:()=>`${cb("Escribe el texto de la publicación del carrusel: una primera línea que invite a deslizar, un resumen en dos frases y una pregunta al final.")}${ok("el carrusel está publicado.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"linkedin",t:"Una publicación de LinkedIn que no suena a anuncio",d:"Una historia o un aprendizaje real contado con tu voz, con una primera línea que invita a leer.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "💼 LinkedIn", "🍽 Resultado: una publicación lista"],
q:"¿Sobre qué?",ph:"Cuenta lo que pasó. Ejemplo: este mes perdí un cliente grande y aprendí a cobrar por adelantado",
fin:"Publicada. En LinkedIn ayuda mucho responder a los comentarios durante la primera hora.",
def:"aprendizaje",empty:"[cuenta aquí lo que pasó, arriba]",
apps:{
 aprendizaje:{n:"Un aprendizaje",db:true,d:"algo que aprendí trabajando esta semana"},
 logro:{n:"Un logro, sin presumir",db:true,d:"un logro reciente, contado con humildad y con lo que hay detrás"},
 opinion:{n:"Una opinión",db:true,d:"una opinión sobre mi sector que no todo el mundo comparte"},
 consejo:{n:"Un consejo práctico",db:true,d:"un consejo práctico para quien empieza en mi profesión"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"Cuéntaselo como a un amigo",s:"5 min · la materia prima",b:()=>`<p class="what">Escribe lo que pasó con tus palabras, sin cuidar la forma. Lo real es lo que engancha en LinkedIn.</p>${cb(`Quiero una publicación de LinkedIn sobre ${D()}. Esto es lo que pasó, contado sin cuidar la forma:\n\n[escríbelo aquí]\n\nHazme 2 preguntas si te falta algo importante.`)}${ok("Claude tiene la historia completa.")}`},
{t:"La publicación",s:"5 min · escribir",b:()=>`${cb("Escribe la publicación con mi guía de voz: una primera línea que invite a pulsar «ver más», frases cortas, la historia y un aprendizaje claro al final. Sin emojis de lista, sin etiquetas y sin vender. Dame 2 primeras líneas alternativas.")}${ok("tienes la publicación y dos primeras líneas para elegir.")}`},
{t:"Quítale el tono de anuncio",s:"3 min · repaso",b:()=>`${cb("Léela como un lector escéptico. ¿Hay algo que suene a presumir, a vender o a frase hecha? Corrígelo y dime qué has cambiado.")}${ok("al leerla en voz alta, suena a ti.")}`},
{t:"Publica y responde",s:"5 min · conversación",b:()=>`<ol><li>Publícala desde LinkedIn.</li><li>Durante la primera hora, responde a cada comentario con algo más que «gracias».</li></ol>${tip("Si te cuesta responder, pega los comentarios en el proyecto y pide ideas. La respuesta la escribes y la envías tú.")}${ok("está publicada y has respondido a los primeros comentarios.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"una-idea",t:"Una idea, todas tus redes",d:"El truco de los creadores: una buena idea convertida en vídeo corto, carrusel y texto, cada uno con el formato de su red.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "♻️ Reutilizar", "🍽 Resultado: la misma idea lista para 3 formatos"],
q:"¿Qué idea?",ph:"Escribe la idea. Ejemplo: por qué no deberías estirar en frío",
fin:"Una idea, tres publicaciones. Repártelas a lo largo de la semana.",
def:"varias",empty:"[escribe aquí la idea, arriba]",
apps:{
 varias:{n:"Instagram, TikTok y LinkedIn",db:true,d:"Instagram, TikTok y LinkedIn"},
 visual:{n:"Solo redes de vídeo",db:true,d:"TikTok, Reels y YouTube Shorts"},
 texto:{n:"Solo redes de texto",db:true,d:"LinkedIn, X y Threads"},
 otra:{n:"✏️ Otras redes",db:true,d:""}
},
steps:[
{t:"Adapta la idea",s:"10 min · tres formatos",b:()=>`${cb(`Coge esta idea: [escribe tu idea].\n\nAdáptala para ${D()}:\n- Vídeo corto: 3 ganchos y un guion de 30 segundos.\n- Carrusel: 7 diapositivas, una idea por diapositiva.\n- Texto: una publicación con una primera línea que enganche.\n\nCon mi guía de voz. Si falta un dato, deja [dato] en lugar de inventarlo.`)}
${det("Lo que funciona en cada red",["<b>TikTok y Shorts</b>: el primer segundo lo es todo. Ve al grano.","<b>Instagram</b>: reels para llegar a gente nueva; carruseles para que te guarden.","<b>LinkedIn</b>: historias reales y aprendizajes; menos venta.","<b>X y Threads</b>: frases cortas y opiniones claras."])}${ok("tienes la idea en los tres formatos.")}`},
{t:"Reparte la semana",s:"5 min · cuándo",b:()=>`${cb("Propón en qué día publico cada pieza esta semana para no repetir la misma idea dos días seguidos en la misma red.")}${ok("sabes qué publicar cada día.")}`},
{t:"Termina cada pieza",s:"10 min · con las otras recetas",b:()=>`<p class="what">Para grabar y diseñar cada formato, usa las recetas del libro:</p><ul><li><a href="redes-sociales--reel.html">Un reel o TikTok que engancha</a></li><li><a href="redes-sociales--carrusel.html">Un carrusel que la gente guarda</a></li><li><a href="redes-sociales--linkedin.html">Una publicación de LinkedIn</a></li></ul>${ok("las tres piezas están listas o programadas.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"largo-a-corto",t:"De un contenido largo a una semana de redes",d:"Un vídeo largo, un pódcast, un artículo o una charla tienen material para una semana entera.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "♻️ Reutilizar", "🍽 Resultado: 10 piezas sacadas de un solo contenido"],
q:"¿Qué contenido largo tienes?",ph:"Di qué es. Ejemplo: la charla de 40 minutos que di en un congreso",
fin:"De un contenido has sacado una semana. Guarda las piezas que no uses: sirven para más adelante.",
def:"video",empty:"[di qué contenido largo tienes, arriba]",
apps:{
 video:{n:"Vídeo de YouTube",db:true,d:"mi vídeo largo de YouTube"},
 podcast:{n:"Pódcast",db:true,d:"un episodio de mi pódcast"},
 articulo:{n:"Artículo o newsletter",db:true,d:"un artículo de mi blog o mi newsletter"},
 charla:{n:"Charla o clase",db:true,d:"una charla o una clase que he dado"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Consigue el texto",s:"5 min · la transcripción",b:()=>`<ul><li><b>Vídeo de YouTube</b>: debajo del vídeo, pulsa <b>Más → Mostrar transcripción</b> y cópiala.</li><li><b>Pódcast, vídeo o charla</b>: si tienes el audio, súbelo al chat y pide la transcripción, o usa la transcripción automática de tu app de grabación.</li><li><b>Artículo</b>: copia el texto.</li></ul>${ok("tienes el texto completo.")}`},
{t:"Saca las piezas",s:"10 min · cortar",b:()=>`${cb(`Este es el texto de ${D()}: [pégalo].\n\nSácame:\n- 5 vídeos cortos (gancho + guion de 30 s), cada uno con una idea distinta.\n- 2 carruseles de 7 diapositivas.\n- 3 publicaciones de texto.\n\nCada pieza tiene que entenderse sola, sin haber visto el original. Con mi guía de voz.`)}${ok("tienes 10 piezas.")}`},
{t:"Elige y ordena",s:"5 min · la semana",b:()=>`${cb("Ordena las 10 piezas de mejor a peor según lo útil que es cada una para mi público, y propón cuáles publico esta semana.")}${ok("sabes qué publicar esta semana.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"calendario",t:"Tu mes planificado",d:"Un calendario realista de publicaciones para 4 semanas, con tus temas fijos.",
meta:["⏱ 15 min", "👩‍🍳 Fácil", "📅 Plan", "🍽 Resultado: un mes de publicaciones en una tabla"],
q:"¿Cuánto quieres publicar?",ph:"Di cuánto tiempo tienes. Ejemplo: solo tengo 2 horas a la semana",
fin:"Tienes el mes planificado. Publicar con constancia importa más que publicar mucho.",
def:"tres",empty:"[di cuánto tiempo tienes, arriba]",
apps:{
 dos:{n:"2 veces por semana",db:true,d:"2 publicaciones por semana"},
 tres:{n:"3 veces por semana",db:true,d:"3 publicaciones por semana"},
 diario:{n:"Casi cada día",db:true,d:"5 publicaciones por semana"},
 otra:{n:"✏️ A mi ritmo",db:true,d:""}
},
steps:[
{t:"El calendario",s:"5 min · la tabla",b:()=>`${cb(`Hazme un calendario de publicaciones para las próximas 4 semanas en mis redes, en una tabla: día, red, tema fijo, formato, idea y gancho. Ritmo: ${D()}. Que sea realista y que alterne los formatos.`)}${ok("tienes la tabla del mes.")}`},
{t:"Fechas que importan",s:"3 min · repasar",b:()=>`${cb("¿Hay fechas este mes que encajen con mi tema (días mundiales, temporadas, fiestas)? Si las hay, cambia alguna idea para aprovecharlas.")}${ok("el calendario tiene en cuenta las fechas del mes.")}`},
{t:"Guárdalo donde lo veas",s:"5 min · a la vista",b:()=>`<ul><li>Copia la tabla en una hoja de cálculo o en tus notas.</li><li>Con la receta <a href="gmail-calendario.html">Gmail y Calendar</a>, Claude puede pasarla a tu agenda.</li><li>Con <a href="notion-cerebro.html">Tu segundo cerebro en Notion</a>, a una base de datos de Notion.</li></ul>
${tip("Graba o escribe varias piezas el mismo día: es más rápido que hacer una cada día.")}${ok("el calendario está donde lo vas a ver cada semana.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"medir",t:"Mide y mejora cada semana",d:"Con tus datos reales, Claude te dice qué funcionó, qué repetir y cómo responder a tu comunidad.",
meta:["⏱ 15 min", "👩‍🍳 Fácil", "📈 Datos", "🍽 Resultado: qué repetir la semana que viene"],
q:"¿Qué quieres revisar?",ph:"Di qué te preocupa. Ejemplo: mis reels tienen visitas pero nadie me sigue",
fin:"Ya sabes qué repetir. Haz esta receta cada semana: en un mes notarás la diferencia.",
def:"semana",empty:"[di qué te preocupa, arriba]",
apps:{
 semana:{n:"Resumen de la semana",db:true,d:"qué funcionó mejor esta semana y por qué"},
 seguidores:{n:"Por qué no crezco",db:true,d:"por qué mis publicaciones tienen visitas pero no consigo seguidores"},
 comentarios:{n:"Responder a mi comunidad",db:true,d:"cómo responder a los comentarios y mensajes de esta semana"},
 otra:{n:"✏️ Otra duda",db:true,d:""}
},
steps:[
{t:"Copia tus datos",s:"5 min · las estadísticas",b:()=>`<p class="what">En cada red, abre las estadísticas de tus publicaciones de la semana y apunta para cada una: alcance (cuánta gente la vio), guardados, compartidos, comentarios y seguidores nuevos.</p>${tip("Puedes hacer capturas de pantalla de las estadísticas y subirlas directamente al chat.")}${ok("tienes los datos de la semana.")}`},
{t:"Que Claude los lea",s:"5 min · análisis",b:()=>`${cb(`Estos son los datos de mis publicaciones de esta semana: [pégalos o sube las capturas].\n\nQuiero saber ${D()}. Dime qué patrón ves y 3 cosas concretas que haría distinto la semana que viene. No inventes datos que no te he dado.`)}${ok("sabes qué funcionó y qué vas a cambiar.")}`},
{t:"Responde a tu comunidad",s:"5 min · conversación",b:()=>`${cb("Estos son los comentarios y mensajes de esta semana: [pégalos]. Propón una respuesta corta para cada uno, con mi voz. Marca los que debería responder yo en persona.")}${tip("Revisa cada respuesta antes de enviarla: la envías tú.")}${ok("has respondido a tu comunidad.")}`}
]}
]};
