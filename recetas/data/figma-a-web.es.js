(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: de Figma a web real",
meta:["⏱ 1 hora aprox.", "👩‍🍳 Dificultad media", "💶 0 € para empezar", "🍽 Resultado: tu diseño convertido en web"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué diseño tienes?",
ph:"Describe qué hay en tu diseño. Ejemplo: la página de inicio de mi estudio de yoga, con horarios y un botón para reservar",
yn:"¿Quieres publicarla en internet al terminar?",
yntip:"Si dudas, elige «Sí»: te enlazamos la receta de publicar gratis. Puedes dejarlo para otro día.",
fin:"Tu diseño ya es una web que funciona. Guarda el archivo y la conversación: si cambias el diseño en Figma, puedes pedirle a Claude que actualice solo esa parte.",
R:{key:"receta-figma",def:"landing",empty:"[describe aquí tu diseño, arriba]",
apps:{
 landing:{n:"Página de inicio",db:true,d:"una página de inicio con cabecera, sección de servicios, opiniones y un pie con contacto"},
 portfolio:{n:"Portfolio",db:true,d:"un portfolio con mi presentación, una galería de proyectos y un formulario de contacto"},
 componente:{n:"Un componente",db:false,d:"una tarjeta de producto con imagen, precio y botón, en sus estados normal y al pasar el ratón"},
 app:{n:"Pantalla de app",db:false,d:"la pantalla principal de una app móvil con menú inferior y una lista de tarjetas"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Figma</b>: el plano de la cocina. Donde está tu diseño. Plan gratuito.</li><li><b>Claude</b>: el constructor. Lee el diseño y escribe la web.</li><li><b>Conector de Figma</b>: las gafas de Claude. Le deja ver capas, colores, textos y medidas.</li><li><b>Tu navegador</b>: la mesa. Para probar la web en tu ordenador.</li>${DB()?`<li><b>GitHub y Cloudflare</b>: el reparto a domicilio. Para publicarla gratis.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · cuentas",b:()=>`<p class="what">Necesitas un diseño en Figma. Si no tienes uno, usa una plantilla de la comunidad.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://www.figma.com" target="_blank" rel="noopener">Figma</a> con una cuenta gratuita.</li>
<li>Si no tienes diseño, busca en <b>Figma Community</b> una plantilla gratuita de página web y pulsa <b>Open in Figma</b>.</li>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li></ol>${ok("tienes un diseño abierto en Figma.")}`},
{t:"Ordena el diseño",s:"10 min · mise en place",b:()=>`<p class="what">Un diseño ordenado se convierte en una web mucho mejor. Es como cortar los ingredientes antes de cocinar.</p><h3>Pasos</h3><ol>
<li>Pon cada pantalla en su propio <b>frame</b> (marco) con un nombre claro: «Inicio», «Contacto».</li>
<li>Nombra las capas importantes: «Cabecera», «Botón reservar», «Foto principal».</li>
<li>Si sabes usar <b>Auto layout</b>, úsalo: Claude entenderá mejor cómo se ordena todo.</li></ol>${tip("No hace falta que sea perfecto. Con que los nombres tengan sentido, ya ayuda mucho.")}${ok("tu frame principal tiene nombre y sus capas se entienden.")}`},
{t:"Conecta Figma con Claude",s:"3 min · el conector",b:()=>`<p class="what">Un conector es un permiso para que Claude use Figma por ti. Se activa una vez y queda guardado.</p><h3>Pasos</h3><ol>
<li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (en inglés: <i>Customize → Connectors</i>).</li>
<li>Pulsa <b>Explorar conectores</b> (<i>Browse connectors</i>), busca <b>«Figma»</b> y pulsa <b>Conectar</b>.</li>
<li>Se abre una ventana de Figma: inicia sesión y pulsa <b>Permitir</b>.</li>
<li>En un chat nuevo, pulsa el botón <b>+</b> → <b>Conectores</b> y comprueba que Figma está activado.</li></ol>${tip("Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la <a href='https://support.claude.com' target='_blank' rel='noopener'>ayuda de Claude</a>.")}${ok("Figma aparece activado en tus conectores.")}`},
{t:"Copia el enlace del frame",s:"1 min · señala el plato",b:()=>`<p class="what">Claude necesita saber qué parte del diseño tiene que construir.</p><h3>Pasos</h3><ol>
<li>En Figma, haz clic en tu frame principal.</li>
<li>Clic derecho → <b>Copy/Paste as → Copy link to selection</b> (Copiar enlace a la selección).</li></ol>${ok("tienes un enlace que empieza por figma.com/design/…")}`},
{t:"Pide tu web",s:"10 min · la orden",b:()=>`<p class="what">Claude lee el diseño y lo convierte en una web real.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo y pega (cambia el enlace por el tuyo):</li></ol>${cb(`Este es el enlace a un frame de Figma: [pega aquí tu enlace]\n\nUsa el conector de Figma para leerlo. Es ${D()}.\n\nConviértelo en una web en un único archivo index.html con HTML y CSS. Respeta colores, tipografías, tamaños y espacios. Que se vea bien en móvil. Usa textos reales del diseño, no «lorem ipsum». Al final dime qué partes no has podido copiar exactamente.`)}
${det("¿Qué significa cada parte?",["<b>Un único archivo</b>: más fácil de probar y publicar.","<b>Que se vea bien en móvil</b>: la mayoría de tus visitas vendrán del teléfono.","<b>Qué no has podido copiar</b>: así sabes qué revisar."])}${ok("Claude te da un archivo index.html para descargar o copiar.")}`},
{t:"Pruébala y compara",s:"10 min · probar la sal",b:()=>`<p class="what">Abre la web al lado del diseño y busca diferencias.</p><h3>Pasos</h3><ol>
<li>Guarda el archivo como <b>index.html</b> en una carpeta y ábrelo con doble clic.</li>
<li>Ponlo al lado de Figma y compara.</li>
<li>Pide los ajustes de uno en uno:</li></ol>${cb("En la web, el espacio entre la cabecera y la sección de servicios es más grande que en Figma. Ajústalo para que sea igual y no cambies nada más.")}
${tip("Para ver cómo queda en móvil: en el navegador pulsa F12 y el icono del teléfono.")}${ok("la web y el diseño se parecen como dos gotas de agua.")}`},
{db:1,t:"Publícala gratis",s:"15 min · servir",b:()=>`<p class="what">Tu archivo ya está listo para salir a internet.</p><ol><li>Sigue desde el paso de GitHub de la receta <a href="webapp-gratis.html">Tu webapp online y gratis</a>.</li><li>Sube tu <b>index.html</b> en lugar de crear uno nuevo.</li></ol>${ok("tienes una dirección web que puedes abrir desde el móvil.")}`},
{x:1,t:"Tus colores como variables",s:"Opcional · nivel pro",b:()=>`<p class="what">Si usas variables o estilos en Figma, pide que se conviertan en variables CSS. Así cambiar un color cambia toda la web.</p>${cb("Lee los estilos y variables de color y texto de mi archivo de Figma y conviértelos en variables CSS al principio del archivo. Usa esas variables en toda la web.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude no puede leer el enlace</b>: comprueba que el conector está activado y que tu cuenta de Figma tiene acceso al archivo.</li><li><b>Fuentes distintas</b>: pide que use Google Fonts con la misma tipografía o la más parecida.</li><li><b>Imágenes que faltan</b>: expórtalas desde Figma y ponlas en la misma carpeta; dile a Claude sus nombres.</li></ol>`}
]}};
