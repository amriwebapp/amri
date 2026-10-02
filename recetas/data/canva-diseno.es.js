(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: diseña en Canva hablando con Claude",
meta:["⏱ 25 min aprox.", "👩‍🍳 Fácil", "💶 0 € (Canva gratis)", "🍽 Resultado: diseños editables en tu Canva"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué quieres diseñar?",
ph:"Describe tu diseño. Ejemplo: un cartel A4 para el mercadillo de mi barrio del sábado 12, con horario y dirección",
yn:"¿Tienes logo o colores de marca que quieras usar?",
yntip:"Si dudas, elige «Sí»: te enseñamos a darle tu marca a Claude. Si no tienes, él te propone una paleta.",
fin:"Tus diseños ya están en tu cuenta de Canva, listos para retocar a mano o publicar. Más abajo tienes extras: reutilizar diseños y qué hacer si algo falla.",
R:{key:"receta-canva",def:"posts",empty:"[describe aquí tu diseño, arriba]",
apps:{
 posts:{n:"Posts para Instagram",db:true,d:"tres posts cuadrados para Instagram que anuncien mi nuevo producto, con un titular corto y mucho aire"},
 presentacion:{n:"Presentación",db:false,d:"una presentación de 8 diapositivas, clara y visual, para explicar mi proyecto a posibles clientes"},
 cartel:{n:"Cartel o flyer",db:true,d:"un cartel A4 para un evento, con título grande, fecha, hora y lugar bien visibles"},
 cv:{n:"Currículum",db:false,d:"un currículum de una página, limpio y moderno, con mi experiencia y mis habilidades"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el diseñador jefe. Decide textos, estructura y estilo.</li><li><b>Canva</b>: el taller. Donde se crean y guardan los diseños. Plan gratuito.</li><li><b>Conector de Canva</b>: el aprendiz. Crea, busca y exporta diseños en tu cuenta.</li>${DB()?`<li><b>Tu logo y tus colores</b>: el sello de la casa.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"3 min · cuentas",b:()=>`<p class="what">Solo necesitas una cuenta en Claude y otra en Canva.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Crea tu cuenta gratuita en <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a> si no la tienes.</li></ol>${ok("puedes entrar en las dos.")}`},
{t:"Conecta Canva con Claude",s:"3 min · el conector",b:()=>`<p class="what">Un conector es un permiso para que Claude use Canva por ti. Se activa una vez y queda guardado.</p><h3>Pasos</h3><ol>
<li>En Claude (web o app de escritorio) abre <b>Personalizar → Conectores</b> (en inglés: <i>Customize → Connectors</i>).</li>
<li>Pulsa <b>Explorar conectores</b> (<i>Browse connectors</i>), busca <b>«Canva»</b> y pulsa <b>Conectar</b>.</li>
<li>Se abre una ventana de Canva: inicia sesión y pulsa <b>Permitir</b>.</li>
<li>En un chat nuevo, pulsa el botón <b>+</b> → <b>Conectores</b> y comprueba que Canva está activado.</li></ol>${tip("Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la <a href='https://support.claude.com' target='_blank' rel='noopener'>ayuda de Claude</a>.")}${ok("Canva aparece activado en tus conectores.")}`},
{db:1,t:"Presenta tu marca",s:"5 min · el sello",b:()=>`<p class="what">Para que todo salga con tu estilo, primero sube tu logo a Canva y cuéntale a Claude tus colores.</p><h3>Pasos</h3><ol>
<li>En Canva, pulsa <b>Subidos → Subir archivos</b> y sube tu logo (mejor PNG con fondo transparente).</li>
<li>En Claude, escribe:</li></ol>${cb("Mi marca: colores principales [#D2561F y #FBF6EE], tipografía [la que uses], tono [cercano y tranquilo]. Mi logo está subido en Canva con el nombre [nombre del archivo]. Úsalo en todo lo que diseñes hoy.")}
${tip("¿No sabes el código de tus colores? Pregúntale a Claude: «Propón una paleta de 3 colores para una marca de [lo tuyo]».")}${ok("Claude te repite tu marca con sus palabras.")}`},
{t:"Pide tu diseño",s:"5 min · la orden",b:()=>`<p class="what">Primero los textos, luego el diseño. Así no pierdes tiempo con versiones que no te gustan.</p><h3>Pasos</h3><ol><li>Pega esto en el chat:</li></ol>${cb(`Usa Canva para crear ${D()}.\n\nAntes de diseñar, propón los textos de cada pieza y espera mi OK. Cuando te lo dé, crea el diseño${DB()?" con mi marca":""} y dame el enlace para abrirlo en Canva.`)}
${det("¿Qué significa cada parte?",["<b>«Usa Canva»</b>: le dice a Claude que use el conector, no que lo dibuje él.","<b>Primero los textos</b>: lo más importante de un diseño es lo que dice.","<b>El enlace</b>: para abrirlo y retocarlo tú."])}${ok("Claude te da uno o varios enlaces a diseños nuevos en tu Canva.")}`},
{t:"Retoca a mano en Canva",s:"5 min · tu toque",b:()=>`<p class="what">La IA hace el 80 %. El último toque es tuyo.</p><h3>Pasos</h3><ol>
<li>Abre el enlace. El diseño está en tu cuenta, en <b>Proyectos</b>.</li>
<li>Cambia lo que quieras: textos, fotos, colores.</li>
<li>¿Prefieres que lo haga Claude? Pídeselo en el chat, un cambio cada vez:</li></ol>${cb("En el diseño que acabas de crear, haz el titular más grande y cambia la foto de fondo por algo más luminoso. No toques lo demás.")}${ok("el diseño está como tú querías.")}`},
{t:"Exporta y publica",s:"2 min · servir",b:()=>`<p class="what">Descárgalo en el formato que necesites.</p>${cb("Exporta el diseño como PNG para redes y también como PDF para imprimir. Dame los enlaces de descarga.")}${tip("También puedes exportar desde Canva con el botón <b>Compartir → Descargar</b>.")}${ok("tienes los archivos descargados.")}`},
{x:1,t:"Reutiliza lo que ya tienes",s:"Opcional",b:()=>`<p class="what">Claude también puede buscar en tus diseños antiguos.</p>${cb("Busca en mi Canva los diseños que hice para [evento o tema] y crea una versión nueva con la fecha actualizada.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>Claude dibuja en vez de usar Canva</b>: empieza el mensaje con «Usa el conector de Canva».</li><li><b>No encuentra tu logo</b>: dile el nombre exacto del archivo subido.</li><li><b>Alguna función es de Canva Pro</b> (kit de marca, quitar fondos): el resto funciona con el plan gratuito.</li></ol>${det("💡 Ideas para seguir diseñando",["Un calendario de contenido para todo el mes.","Tarjetas de visita.","Menús para tu restaurante.","Miniaturas para YouTube."])}`}
]}};
