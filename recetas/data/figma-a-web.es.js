(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: de Figma a web real",
intro:"Con el conector de Figma, Claude lee tu diseño (capas, colores, textos y medidas) y lo convierte en una web que funciona. Conecta Figma y ordena tu diseño una vez; después elige qué convertir.",
meta:["📕 5 recetas", "💶 Gratis si tu plan de Claude incluye conectores", "🍽 Resultado: tu diseño convertido en web"],
ing:"Ingredientes (todos gratuitos)",
fin:"Figma está conectado y tu diseño ordenado. Elige qué convertir.",
R:{key:"libro-figma",
ing:()=>`<li><b>Figma</b>: el plano. Donde está tu diseño. Plan gratuito.</li><li><b>Claude</b>: el constructor. Lee el diseño y escribe la web.</li><li><b>El conector de Figma</b>: las gafas de Claude. Le deja ver capas, colores, textos y medidas.</li>`,
steps:[
{t:"Ten un diseño en Figma",s:"el plano",b:()=>`<ol><li>Entra en <a href="https://www.figma.com" target="_blank" rel="noopener">Figma</a> con una cuenta gratuita.</li><li>Si no tienes diseño, busca en <b>Figma Community</b> una plantilla gratuita de web y pulsa <b>Open in Figma</b>.</li></ol>${ok("tienes un diseño abierto en Figma.")}`},
{t:"Conecta Figma con Claude",s:"el conector",b:()=>`<ol><li>En Claude abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Pulsa <b>Explorar conectores</b>, busca «Figma» y pulsa <b>Conectar</b>.</li><li>Inicia sesión y pulsa <b>Permitir</b>.</li></ol>${ok("Figma aparece activado.")}`},
{t:"Ordena el diseño",s:"cortar los ingredientes",b:()=>`<p class="what">Un diseño ordenado se convierte en una web mucho mejor.</p><ol><li>Pon cada pantalla en su propio <b>frame</b> (marco) con un nombre claro: «Inicio», «Contacto».</li><li>Nombra las capas importantes: «Cabecera», «Botón reservar».</li><li>Si sabes usar <b>Auto layout</b>, úsalo.</li></ol>${ok("tu frame principal tiene nombre y sus capas se entienden.")}`},
{t:"Copiar el enlace de un frame",s:"señalar",b:()=>`<p class="what">En cada receta tendrás que darle a Claude el enlace de lo que quieres convertir:</p><ol><li>Haz clic en el frame o el elemento.</li><li>Clic derecho → <b>Copy/Paste as → Copy link to selection</b>.</li></ol>${ok("sabes copiar el enlace (empieza por figma.com/design/…).")}`}
,
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude no puede leer el enlace</b>: comprueba que el conector está activado y que tu cuenta tiene acceso al archivo.</li><li><b>Fuentes distintas</b>: pide que use Google Fonts con la misma tipografía o la más parecida.</li><li><b>Faltan imágenes</b>: expórtalas desde Figma, ponlas en la misma carpeta y dile a Claude sus nombres.</li></ol>`}
]},
recetas:[
{s:"pagina",t:"Una página completa",d:"Tu página de inicio o tu portfolio, convertidos en un index.html fiel al diseño.",
meta:["👩‍🍳 Media", "🖥 Página", "🍽 Resultado: tu página como web"],
q:"¿Qué página?",ph:"Di qué hay. Ejemplo: la página de inicio de mi estudio de yoga",
fin:"Tu diseño ya es una web. Para publicarla, mira «Publícala».",
def:"landing",empty:"[di qué hay en tu página, arriba]",
apps:{
 landing:{n:"Página de inicio",db:true,d:"una página de inicio con cabecera, servicios, opiniones y un pie con contacto"},
 portfolio:{n:"Portfolio",db:true,d:"un portfolio con mi presentación, una galería de proyectos y un formulario de contacto"},
 otra:{n:"✏️ Otra",db:true,d:""}
},
steps:[
{t:"Pide la web",s:"la orden",b:()=>`${cb(`Este es el enlace a un frame de Figma: [pega tu enlace]\n\nUsa el conector de Figma para leerlo. Es ${D()}.\n\nConviértelo en una web en un único archivo index.html con HTML y CSS. Respeta colores, tipografías, tamaños y espacios. Que se vea bien en móvil. Usa los textos reales del diseño. Al final dime qué partes no has podido copiar exactamente.`)}${ok("tienes el archivo index.html.")}`},
{t:"Compara al lado",s:"ajustar",b:()=>`<ol><li>Guarda el archivo y ábrelo con doble clic, al lado de Figma.</li><li>Pide los ajustes de uno en uno:</li></ol>${cb("El espacio entre la cabecera y la sección de servicios es más grande que en Figma. Ajústalo para que sea igual y no cambies nada más.")}${tip("Para verla como en el móvil: en el navegador pulsa F12 y el icono del teléfono.")}${ok("la web y el diseño se parecen mucho.")}`},
{t:"Guarda la versión buena",s:"copia",b:()=>`<p class="what">Guarda el archivo y la conversación: si cambias el diseño, pedirás solo esa parte.</p>${ok("tienes la versión final guardada.")}`}
]},
{s:"componente",t:"Un componente: botón, tarjeta o menú",d:"Una pieza suelta, con sus estados (normal, al pasar el ratón), lista para reutilizar.",
meta:["👩‍🍳 Fácil", "🧩 Componente", "🍽 Resultado: el código de un componente"],
q:"¿Qué componente?",ph:"Di cuál. Ejemplo: la tarjeta de producto con precio y botón",
fin:"Tu componente está listo para usarlo en cualquier página.",
def:"tarjeta",empty:"[di qué componente, arriba]",
apps:{
 tarjeta:{n:"Tarjeta de producto",db:false,d:"una tarjeta de producto con imagen, precio y botón, en sus estados normal y al pasar el ratón"},
 menu:{n:"Menú",db:false,d:"un menú de navegación que en el móvil se convierte en un botón desplegable"},
 otra:{n:"✏️ Otro",db:false,d:""}
},
steps:[
{t:"Pídelo",s:"la pieza",b:()=>`${cb(`Este es el enlace a un componente de Figma: [enlace]. Conviértelo en HTML y CSS: ${D()}. Dame una página de prueba con el componente y su código por separado para copiarlo.`)}${ok("ves el componente funcionando en la página de prueba.")}`},
{t:"Pruébalo",s:"estados",b:()=>`<p class="what">Pasa el ratón por encima, pulsa y míralo en el móvil.</p>${ok("se comporta como en el diseño.")}`}
]},
{s:"app",t:"Una pantalla de app móvil",d:"La pantalla principal de tu app, como web que se ve en el móvil.",
meta:["👩‍🍳 Media", "📱 App", "🍽 Resultado: tu pantalla de app funcionando en el navegador"],
q:"¿Qué pantalla?",ph:"Descríbela. Ejemplo: la pantalla de inicio con menú inferior y lista de tarjetas",
fin:"Tu pantalla funciona. Es un prototipo: para una app real hará falta más trabajo.",
def:"inicio",empty:"[describe la pantalla, arriba]",
apps:{
 inicio:{n:"Pantalla de inicio",db:false,d:"la pantalla principal de una app móvil con menú inferior y una lista de tarjetas"},
 perfil:{n:"Perfil",db:false,d:"la pantalla de perfil de usuario"},
 otra:{n:"✏️ Otra",db:false,d:""}
},
steps:[
{t:"Pídela",s:"la pantalla",b:()=>`${cb(`Este es el enlace al frame de Figma: [enlace]. Es ${D()}. Conviértelo en una web pensada para móvil, en un único index.html, que se pueda tocar (menú y botones). Fiel a colores, tamaños y espacios.`)}${ok("tienes el archivo.")}`},
{t:"Pruébala en tu móvil",s:"tocar",b:()=>`<ol><li>Ábrela en el navegador con el modo móvil (F12 e icono del teléfono).</li><li>Pide ajustes de uno en uno.</li></ol>${ok("se ve y se toca como en el diseño.")}`}
]},
{s:"variables",t:"Tus colores y letras como variables",d:"Convierte los estilos de Figma en variables CSS: cambias un color y cambia en toda la web.",
meta:["👩‍🍳 Media", "🎨 Estilos", "🍽 Resultado: tu web lista para cambiar de colores en un minuto"],
q:"¿Qué estilos tienes?",ph:"Di cuáles. Ejemplo: 4 colores y 2 tipografías en Figma",
fin:"Ahora cambiar la marca de tu web es cuestión de un minuto.",
def:"marca",empty:"[di qué estilos tienes, arriba]",
apps:{
 marca:{n:"Colores y textos",db:false,d:"los estilos y variables de color y texto"},
 otra:{n:"✏️ Otros",db:false,d:""}
},
steps:[
{t:"Conviértelos",s:"variables",b:()=>`${cb(`Lee ${D()} de mi archivo de Figma y conviértelos en variables CSS al principio de mi web. Usa esas variables en toda la web en lugar de los colores escritos a mano. Este es el código: [pégalo].`)}${ok("tu web usa variables.")}`},
{t:"Pruébalo",s:"un cambio",b:()=>`${cb("Cambia el color principal por [color] para ver cómo queda. Luego vuelve al original.")}${ok("toda la web cambia de color con un solo cambio.")}`}
]},
{s:"publicar",off:1,t:"Publícala en internet",d:"Tu index.html convertido en una web pública y gratuita.",
meta:["👩‍🍳 Fácil", "🚀 Publicar", "🍽 Resultado: tu diseño en una dirección web"],
q:"¿Tienes ya las cuentas?",ph:"Di si tienes GitHub y Cloudflare",
fin:"Tu diseño está en internet.",
def:"no",empty:"",
apps:{
 no:{n:"Aún no",db:false,d:""},
 si:{n:"Ya las tengo",db:false,d:""}
},
steps:[
{t:"Sigue el libro de la web",s:"publicar",b:()=>`<ol><li>Si no tienes cuentas, haz «Antes de empezar» del libro <a href="webapp-gratis.html">Tu web online y gratis</a>.</li><li>Después sigue <a href="webapp-gratis--primera-web.html">Tu primera web</a> desde el paso 3 («Guárdala en GitHub»), subiendo tu <code>index.html</code> y tus imágenes.</li></ol>${ok("tienes una dirección web que se abre desde el móvil.")}`}
]}
]};
