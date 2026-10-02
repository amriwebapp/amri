(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: diseña tu logo con IA",
meta:["⏱ 40 min aprox.", "👩‍🍳 Sin saber diseñar", "💶 0 € para empezar", "🍽 Resultado: tu logo en todos los formatos"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Para qué es el logo?",
ph:"Describe tu proyecto con tus palabras. Ejemplo: una peluquería canina en Sevilla, alegre y moderna",
yn:"¿El logo tiene que llevar el nombre escrito?",
yntip:"Si dudas, elige «Sí»: te enseñamos a que las letras queden perfectas. Siempre puedes quedarte solo con el símbolo.",
fin:"Tu logo está listo en todos los formatos. Guárdalo en una carpeta con el nombre de tu proyecto para tenerlo siempre a mano. Más abajo tienes dos extras: tu kit de marca y cómo protegerlo.",
R:{key:"receta-logo",def:"marca",empty:"[describe aquí tu proyecto, arriba]",
apps:{
 marca:{n:"Tienda / marca",db:true,d:"una marca de cosmética natural llamada «Brote», cercana y fresca"},
 tech:{n:"App / startup",db:true,d:"una app de finanzas personales llamada «Hucha», moderna y de confianza"},
 cafe:{n:"Cafetería / restaurante",db:true,d:"una cafetería de barrio llamada «La Tostadora», cálida y artesanal"},
 personal:{n:"Marca personal",db:true,d:"mi marca personal como fotógrafa, con mis iniciales «LM», elegante y minimalista"},
 simbolo:{n:"Solo símbolo / icono",db:false,d:"un icono para mi comunidad de senderismo, sencillo y reconocible"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el jefe de cocina. Define el estilo y escribe los prompts.</li><li><b>${DB()?"Ideogram":"Bing Image Creator"}</b>: el horno. Genera las propuestas${DB()?" y escribe bien las letras":""}.</li><li><b>remove.bg</b>: el colador. Quita el fondo en un clic.</li><li><b>Canva</b>: el emplatado. Retoca y prepara los formatos.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · crear cuentas",b:()=>`<p class="what">Vas a crear tres cuentas gratuitas. Con tu cuenta de Google entras en todas.</p><h3>Pasos</h3><ol>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>${DB()?`Crea tu cuenta en <a href="https://ideogram.ai" target="_blank" rel="noopener">Ideogram</a>.`:`Entra en <a href="https://www.bing.com/images/create" target="_blank" rel="noopener">Bing Image Creator</a> con una cuenta de Microsoft.`}</li>
<li>Crea tu cuenta en <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a>.</li>
<li>Guarda en favoritos <a href="https://www.remove.bg" target="_blank" rel="noopener">remove.bg</a> (no hace falta cuenta).</li></ol>${ok("has entrado en todas las herramientas.")}`},
{t:"Pídele el briefing a Claude",s:"10 min · la personalidad",b:()=>`<p class="what">Un buen logo empieza por saber qué quiere transmitir. Claude te hace de diseñador y te propone estilos.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Quiero un logo para ${D()}.\n\nHazme 4 preguntas para entender mi proyecto. Después propónme 3 estilos de logo distintos (por ejemplo: minimalista, ilustrado, tipográfico), con colores y el porqué de cada uno. Para cada estilo, escríbeme un prompt en inglés para un generador de imágenes con IA, con fondo blanco liso y diseño plano.${DB()?" El logo lleva el nombre escrito: ponlo entre comillas en el prompt.":" El logo es solo un símbolo, sin texto."}`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero un logo para…»</b>: tu proyecto. Cámbialo por el tuyo.","<b>3 estilos</b>: para que compares antes de decidir.","<b>Fondo blanco liso y diseño plano</b>: así es fácil recortarlo y queda profesional.",...(DB()?["<b>Nombre entre comillas</b>: así la IA sabe qué letras escribir."]:[])])}${ok("tienes 3 estilos con sus colores y sus prompts.")}`},
{t:"Hornea las propuestas",s:"10 min · generar opciones",b:()=>`<p class="what">Pegas cada prompt en el generador y te da varias versiones de cada estilo.</p><h3>Pasos</h3><ol>
<li>Abre <b>${DB()?"Ideogram":"Bing Image Creator"}</b>.</li>
<li>Pega el primer prompt y genera.${DB()?" Si ves la opción <b>Design</b> o <b>Typography</b>, actívala.":""}</li>
<li>Repite con los otros dos estilos.</li>
<li>Descarga tus 3-4 favoritos.</li></ol>
${tip("Enséñaselos a alguien de confianza sin decirle cuál te gusta. Su primera reacción vale oro.")}${ok("tienes varias propuestas descargadas y un favorito.")}`},
{t:"Afina el ganador",s:"5 min · pulir detalles",b:()=>`<p class="what">Tu favorito seguramente tiene algún detalle que mejorar. Pídeselo a Claude.</p><h3>Pasos</h3><ol><li>Vuelve al mismo chat y adjunta la imagen.</li><li>Pega este mensaje:</li></ol>${cb("Este es mi logo favorito, hecho con el prompt [pega el prompt]. Quiero que sea más [simple / grueso / redondeado...] y cambiar [lo que no te gusta]. Reescribe el prompt manteniendo lo que funciona.")}
${tip("Un buen logo funciona en pequeño. Si tiene muchos detalles, pide «más simple, menos elementos».")}${ok("tienes una versión que te encanta.")}`},
{db:1,t:"Revisa las letras",s:"5 min · el nombre perfecto",b:()=>`<p class="what">Las IAs a veces cambian letras o las deforman. En un logo tiene que estar perfecto.</p><h3>Pasos</h3><ol>
<li>Lee el nombre letra por letra, en voz alta.</li>
<li>Si falla alguna, genera de nuevo con el nombre entre comillas.</li>
<li>Si sigue fallando: quédate con el <b>símbolo sin texto</b> y escribe el nombre en Canva con una tipografía bonita.</li></ol>${cb("Recomiéndame 3 tipografías gratuitas de Canva que combinen con este logo y explícame por qué.")}
${tip("Símbolo con IA + nombre en Canva es lo que hacen muchos diseñadores: el texto queda perfecto y lo puedes cambiar cuando quieras.")}${ok("el nombre se lee perfecto, sin letras raras.")}`},
{t:"Quita el fondo",s:"3 min · fondo transparente",b:()=>`<p class="what">Un logo sin fondo se puede poner encima de cualquier color o foto.</p><h3>Pasos</h3><ol>
<li>Abre <b>remove.bg</b> y sube tu logo.</li>
<li>Espera unos segundos y pulsa <b>Descargar</b>.</li>
<li>Comprueba que los bordes están limpios.</li></ol>
${tip("Si los bordes quedan raros, pide en el generador un logo con «fondo blanco liso» y vuelve a probar: cuanto más limpio el fondo, mejor el recorte.")}${ok("tienes un PNG con fondo transparente (se ve a cuadros en el editor).")}`},
{t:"Prepara los platos",s:"5 min · los formatos",b:()=>`<p class="what">Necesitas varias versiones para usar tu logo en cualquier sitio.</p><h3>Pasos</h3><ol>
<li>En Canva crea un diseño cuadrado de 1000 × 1000 px y sube tu logo.</li>
<li>Descarga: <b>PNG transparente</b> (web y redes) y <b>JPG con fondo blanco</b> (documentos).</li>
<li>Haz una versión en <b>blanco</b> para fondos oscuros.</li>
<li>Crea un diseño de 500 × 500 px con el logo centrado sobre tu color: tu <b>foto de perfil</b>.</li></ol>
${det("¿Y el formato SVG?",["El SVG es un formato «vectorial»: se puede ampliar sin perder calidad (ideal para imprimir en grande).","Herramientas como vectorizer.ai convierten tu PNG a SVG. Revisa sus condiciones actuales antes de usarlo."])}${ok("tienes una carpeta con al menos 4 versiones de tu logo.")}`},
{x:1,t:"Tu kit de marca",s:"15 min · opcional",b:()=>`<p class="what">Colores, tipografías y reglas para que todo lo que hagas se vea coherente.</p><h3>Pasos</h3><ol><li>Pídele a Claude:</li></ol>${cb("Con este logo [adjúntalo], hazme un kit de marca sencillo: 3 colores con su código HEX, 2 tipografías gratuitas, y 5 reglas de uso (tamaño mínimo, qué no hacer...). Déjalo en una página que pueda imprimir.")}
<ol start="2"><li>Guarda los colores en Canva, en <b>Marca → Kit de marca</b>, si tu plan lo permite.</li></ol>`},
{x:1,t:"Protege tu logo",s:"Siempre · consejos",b:()=>`<p class="what">Antes de imprimir tarjetas o rotular una tienda, unas comprobaciones sencillas.</p><ol>
<li><b>Busca que no se parezca</b> a otro logo conocido: haz una búsqueda por imagen en Google.</li>
<li><b>Revisa las condiciones</b> de la herramienta de IA sobre uso comercial.</li>
<li><b>Si vas en serio</b>, consulta el registro de marcas en la <a href="https://www.oepm.es" target="_blank" rel="noopener">OEPM</a> (España) o la <a href="https://www.euipo.europa.eu" target="_blank" rel="noopener">EUIPO</a> (UE).</li></ol>
${det("💡 Dónde usar tu logo",["Foto de perfil en todas tus redes.","Icono de la pestaña de tu web (favicon).","Firma de correo y facturas.","Pegatinas, tazas o camisetas."])}`}
]}};
