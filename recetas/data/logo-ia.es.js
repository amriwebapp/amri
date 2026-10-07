(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: diseña tu logo con IA",
intro:"Tu logo y tu marca sin saber diseñar. Primero defines con Claude la personalidad de tu marca; después eliges la receta: logo con nombre, símbolo, iniciales, todos los formatos, tu kit de marca y cómo protegerlo.",
meta:["📕 6 recetas", "⏱ 15-40 min cada una", "💶 Gratis", "🍽 Resultado: tu logo en todos los formatos y tu marca definida"],
ing:"Ingredientes (todos gratuitos)",
fin:"Tu marca tiene personalidad. Elige qué tipo de logo quieres hacer.",
R:{key:"libro-logo",
ing:()=>`<li><b>Claude</b>: el diseñador. Define el estilo y escribe las descripciones.</li><li><b>Ideogram</b>: el horno. Genera las propuestas y escribe bien las letras.</li><li><b>remove.bg</b>: el colador. Quita el fondo en un clic.</li><li><b>Canva</b>: el emplatado. Retoca y prepara los formatos.</li>`,
steps:[
{t:"Crea tus cuentas",s:"5 min · gratis",b:()=>`<ol><li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li><li>Crea tu cuenta en <a href="https://ideogram.ai" target="_blank" rel="noopener">Ideogram</a>.</li><li>Crea tu cuenta en <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a>.</li><li>Guarda en favoritos <a href="https://www.remove.bg" target="_blank" rel="noopener">remove.bg</a> (no hace falta cuenta).</li></ol>${ok("has entrado en todas.")}`},
{t:"La personalidad de tu marca",s:"10 min · con Claude",b:()=>`<p class="what">Un buen logo empieza por saber qué quiere transmitir. Crea un proyecto en Claude llamado <b>Mi marca</b> y, dentro, pega:</p>${cb("Quiero crear la identidad de mi marca. Hazme 6 preguntas, de una en una: qué hago, para quién, qué me diferencia, qué tres palabras me describen, qué marcas me gustan y cuáles no.\n\nAl final, escribe una ficha de marca de media página: personalidad, tono, 3 colores con su código y por qué.")}
<ol><li>Copia la ficha en las <b>instrucciones del proyecto</b>.</li></ol>${ok("tienes la ficha de tu marca guardada en el proyecto «Mi marca».")}`}
,
{x:1,t:"Antes de imprimir",s:"Siempre · consejos",b:()=>`<ol><li>Un buen logo funciona en pequeño: si tiene muchos detalles, pide «más simple».</li><li>Enséñaselo a alguien sin decirle cuál te gusta. Su primera reacción vale oro.</li></ol>`}
]},
recetas:[
{s:"con-nombre",t:"Logo con el nombre",d:"El nombre de tu marca con un estilo propio, que se lee perfecto.",
meta:["⏱ 30 min", "👩‍🍳 Fácil", "🔤 Logotipo", "🍽 Resultado: tu logo con nombre"],
q:"¿Qué marca?",ph:"Nombre y de qué va. Ejemplo: «La Tostadora», una cafetería de barrio cálida",
fin:"Tu logo con nombre está listo. Sigue con «Tu logo en todos los formatos».",
def:"cafe",empty:"[escribe el nombre y de qué va, arriba]",
apps:{
 cafe:{n:"Cafetería o restaurante",db:true,d:"una cafetería de barrio llamada «La Tostadora», cálida y artesanal"},
 tienda:{n:"Tienda o marca",db:true,d:"una marca de cosmética natural llamada «Brote», cercana y fresca"},
 app:{n:"App o startup",db:true,d:"una app de finanzas personales llamada «Hucha», moderna y de confianza"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"Tres estilos",s:"10 min · propuestas",b:()=>`${cb(`Quiero un logo para ${D()}. Con mi ficha de marca, propón 3 estilos distintos (por ejemplo: minimalista, ilustrado, tipográfico) y escribe un prompt en inglés para Ideogram de cada uno, con fondo blanco liso, diseño plano y el nombre exacto entre comillas.`)}${ok("tienes 3 estilos con sus prompts.")}`},
{t:"Genera en Ideogram",s:"10 min · el horno",b:()=>`<ol><li>Pega cada prompt en Ideogram. Si ves la opción <b>Design</b> o <b>Typography</b>, actívala.</li><li>Descarga tus favoritos.</li><li>Lee el nombre letra por letra, en voz alta.</li></ol>${ok("tienes un favorito con el nombre bien escrito.")}`},
{t:"Si las letras fallan",s:"10 min · el truco",b:()=>`<p class="what">Quédate con el <b>símbolo sin texto</b> y escribe el nombre en Canva con una tipografía bonita. Es lo que hacen muchos diseñadores.</p>${cb("Recomiéndame 3 tipografías gratuitas de Canva que combinen con este logo y explícame por qué.")}${ok("el nombre se lee perfecto.")}`}
]},
{s:"simbolo",t:"Un símbolo o icono",d:"Un dibujo sencillo que se reconoce sin letras, para tu perfil o tu app.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "🔷 Símbolo", "🍽 Resultado: tu símbolo, sin texto"],
q:"¿Para qué es?",ph:"Di de qué va. Ejemplo: una comunidad de senderismo",
fin:"Tu símbolo está listo. Combínalo con tu nombre en Canva cuando lo necesites.",
def:"comunidad",empty:"[di de qué va, arriba]",
apps:{
 comunidad:{n:"Comunidad o club",db:false,d:"un icono para mi comunidad de senderismo, sencillo y reconocible"},
 app:{n:"Icono de app",db:false,d:"el icono de una app, que se vea bien muy pequeño"},
 otra:{n:"✏️ Otro",db:false,d:""}
},
steps:[
{t:"Las ideas",s:"10 min · símbolos",b:()=>`${cb(`Quiero ${D()}. Con mi ficha de marca, propón 5 ideas de símbolo (qué dibujo y por qué) y escribe un prompt en inglés para cada una: diseño plano, sin texto, fondo blanco liso, que funcione en tamaño muy pequeño.`)}${ok("tienes 5 ideas con sus prompts.")}`},
{t:"Genera y prueba en pequeño",s:"15 min · elegir",b:()=>`<ol><li>Genera en Ideogram o Bing Image Creator.</li><li>Reduce tus favoritos al tamaño de un icono del móvil: ¿se sigue entendiendo?</li></ol>${cb("Este es mi favorito [adjúntalo]. Hazlo más simple, con menos elementos y líneas más gruesas. Reescribe el prompt.")}${ok("tu símbolo se entiende en pequeño.")}`}
]},
{s:"iniciales",t:"Logo con tus iniciales",d:"Un monograma elegante para tu marca personal.",
meta:["⏱ 25 min", "👩‍🍳 Fácil", "✒️ Monograma", "🍽 Resultado: tu monograma"],
q:"¿Qué iniciales?",ph:"Tus iniciales y a qué te dedicas. Ejemplo: «LM», fotógrafa",
fin:"Tu monograma está listo. Queda muy bien en tu firma de correo y tu web.",
def:"elegante",empty:"[escribe tus iniciales y a qué te dedicas, arriba]",
apps:{
 elegante:{n:"Elegante",db:true,d:"mi marca personal como fotógrafa, con mis iniciales «LM», elegante y minimalista"},
 moderno:{n:"Moderno",db:true,d:"mis iniciales en un monograma moderno y geométrico"},
 otra:{n:"✏️ Otro estilo",db:true,d:""}
},
steps:[
{t:"Propuestas",s:"10 min · estilos",b:()=>`${cb(`Quiero un monograma para ${D()}. Propón 3 estilos y escribe un prompt en inglés para Ideogram de cada uno, con las letras exactas entre comillas, fondo blanco liso y diseño plano.`)}${ok("tienes 3 prompts.")}`},
{t:"Genera y revisa",s:"15 min · elegir",b:()=>`<ol><li>Genera en Ideogram.</li><li>Comprueba que las letras son exactamente las tuyas y se leen bien.</li></ol>${ok("tienes tu monograma elegido.")}`}
]},
{s:"formatos",t:"Tu logo en todos los formatos",d:"Sin fondo, en blanco, foto de perfil y para documentos.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "🗂 Formatos", "🍽 Resultado: una carpeta con todas las versiones"],
q:"¿Dónde lo vas a usar?",ph:"Di dónde. Ejemplo: Instagram, mi web y facturas",
fin:"Tienes tu carpeta de logos. Guárdala con el nombre de tu marca para tenerla siempre a mano.",
def:"todo",empty:"[di dónde lo vas a usar, arriba]",
apps:{
 todo:{n:"En todas partes",db:false,d:"redes, web, documentos e impresión"},
 redes:{n:"Sobre todo en redes",db:false,d:"redes sociales"},
 otra:{n:"✏️ Otro uso",db:false,d:""}
},
steps:[
{t:"Quita el fondo",s:"3 min · transparente",b:()=>`<ol><li>Abre <b>remove.bg</b> y sube tu logo.</li><li>Descárgalo y comprueba que los bordes están limpios.</li></ol>${ok("tienes un PNG con fondo transparente (se ve a cuadros en el editor).")}`},
{t:"Las versiones",s:"12 min · en Canva",b:()=>`<ol><li>En Canva, crea un diseño de 1000 × 1000 px y sube tu logo.</li><li>Descarga: <b>PNG transparente</b> (web y redes) y <b>JPG con fondo blanco</b> (documentos).</li><li>Haz una versión en <b>blanco</b> para fondos oscuros.</li><li>Crea un diseño de 500 × 500 px con el logo sobre tu color: tu <b>foto de perfil</b>.</li></ol>${ok("tienes al menos 4 versiones.")}`},
{t:"¿Y para imprimir en grande?",s:"5 min · vectorial",b:()=>`<p class="what">Para imprimir en grande hace falta un formato <b>vectorial</b> (SVG), que se amplía sin perder calidad.</p><ul><li>Herramientas como vectorizer.ai convierten tu PNG a SVG. Revisa sus condiciones antes.</li><li>Si tu logo es sencillo, Claude puede redibujarlo en SVG: «Redibuja este logo en SVG, lo más fiel posible».</li></ul>${ok("sabes cómo conseguir la versión para imprimir.")}`}
]},
{s:"kit",t:"Tu kit de marca",d:"Colores, tipografías y reglas para que todo lo que hagas se vea coherente.",
meta:["⏱ 15 min", "👩‍🍳 Fácil", "🎨 Marca", "🍽 Resultado: una página con tu kit de marca"],
q:"¿Qué necesitas?",ph:"Di para qué. Ejemplo: que mis posts y mi web tengan el mismo estilo",
fin:"Tu kit de marca está listo. Úsalo en el libro de Canva para que todo salga con tu estilo.",
def:"basico",empty:"[di para qué, arriba]",
apps:{
 basico:{n:"Kit básico",db:false,d:"un kit de marca sencillo"},
 completo:{n:"Guía completa",db:false,d:"una guía de marca de 3 páginas"},
 otra:{n:"✏️ Otro",db:false,d:""}
},
steps:[
{t:"Pídelo",s:"10 min · con tu logo",b:()=>`${cb(`Con este logo [adjúntalo] y mi ficha de marca, hazme ${D()}: 3 colores con su código, 2 tipografías gratuitas y 5 reglas de uso (tamaño mínimo, qué no hacer…). Déjalo en una página que pueda imprimir.`)}${ok("tienes tu kit de marca.")}`},
{t:"Guárdalo en Canva",s:"5 min · a mano",b:()=>`<ol><li>En Canva, guarda tus colores y tu logo en <b>Marca</b> o <b>Kit de marca</b>, si tu plan lo permite.</li><li>Si no, crea un diseño «Mi marca» con los colores y cópialos cuando los necesites.</li></ol>${ok("tienes tus colores a mano en Canva.")}`}
]},
{s:"proteger",t:"Comprueba y protege tu logo",d:"Que no se parezca a otro, que puedas usarlo comercialmente y, si vas en serio, registrarlo.",
meta:["⏱ 20 min", "👩‍🍳 Fácil", "🛡 Protección", "🍽 Resultado: tu logo comprobado"],
q:"¿Qué te preocupa?",ph:"Di qué. Ejemplo: que se parezca a otra marca",
fin:"Has comprobado tu logo. Para dudas legales importantes, consulta con un profesional.",
def:"parecido",empty:"[di qué te preocupa, arriba]",
apps:{
 parecido:{n:"Que se parezca a otro",db:false,d:"que se parezca a otro logo"},
 registro:{n:"Registrarlo",db:false,d:"registrar mi marca"},
 otra:{n:"✏️ Otra duda",db:false,d:""}
},
steps:[
{t:"Busca parecidos",s:"5 min · Google",b:()=>`<ol><li>Haz una búsqueda por imagen en Google con tu logo.</li><li>Si aparece algo muy parecido de tu sector, cambia el diseño.</li></ol>${ok("no has encontrado logos demasiado parecidos.")}`},
{t:"Uso comercial",s:"5 min · condiciones",b:()=>`<p class="what">Revisa las condiciones de la herramienta de IA que usaste sobre uso comercial: cambian con el tiempo.</p>${ok("sabes si puedes usarlo para tu negocio.")}`},
{t:"Registro de marca",s:"10 min · si vas en serio",b:()=>`<p class="what">Si quieres protegerlo, el registro se hace en la <a href="https://www.oepm.es" target="_blank" rel="noopener">OEPM</a> (España) o en la <a href="https://www.euipo.europa.eu" target="_blank" rel="noopener">EUIPO</a> (Unión Europea).</p>${cb(`Explícame con palabras sencillas cómo funciona ${D()} en España: pasos, cuánto cuesta más o menos y qué debo comprobar antes. Dime dónde confirmar los precios actuales.`)}${ok("sabes qué pasos seguir.")}`}
]}
]};
