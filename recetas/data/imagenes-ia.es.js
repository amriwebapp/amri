(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: imágenes con IA, gratis",
meta:["⏱ 30 min aprox.", "👩‍🍳 Sin saber dibujar", "💶 0 € para empezar", "🍽 Resultado: imágenes listas para usar"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué quieres preparar?",
ph:"Describe la imagen con tus palabras. Ejemplo: una ilustración de mi perro como astronauta para una camiseta",
yn:"¿La imagen tiene que llevar texto escrito?",
yntip:"Si dudas, elige «Sí»: te enseñamos la herramienta que mejor escribe letras. Si al final no lleva texto, funciona igual.",
fin:"Ya tienes tus imágenes. Guarda los prompts que mejor te han salido: son tus recetas secretas para repetir el estilo cuando quieras. Más abajo tienes dos extras: crear una serie coherente y usar las imágenes con tranquilidad.",
R:{key:"receta-img",def:"ilustra",empty:"[describe aquí tu imagen, arriba]",
apps:{
 ilustra:{n:"Ilustración",db:false,d:"una ilustración colorida de un zorro leyendo un libro en un bosque otoñal"},
 producto:{n:"Foto de producto",db:false,d:"una foto de producto de una taza de cerámica artesanal sobre una mesa de madera, luz de mañana"},
 redes:{n:"Post para redes",db:false,d:"una imagen para Instagram que anuncia la apertura de mi cafetería, ambiente acogedor"},
 cartel:{n:"Cartel con texto",db:true,d:"un cartel para un concierto de jazz con el texto «Jazz en la terraza · 12 de julio»"},
 avatar:{n:"Avatar / perfil",db:false,d:"un avatar estilo 3D amable de una persona sonriente con gafas, fondo liso"},
 portada:{n:"Portada con título",db:true,d:"la portada de un ebook de recetas veganas con el título «Verde y fácil»"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el jefe de cocina. Convierte tu idea en un buen prompt.</li><li><b>Bing Image Creator</b>: el horno. Genera las imágenes gratis.</li>${DB()?`<li><b>Ideogram</b>: el pastelero. El que mejor escribe letras dentro de una imagen.</li>`:""}<li><b>Canva</b>: el emplatado. Recorta, retoca y exporta.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · crear cuentas",b:()=>`<p class="what">Vas a crear ${DB()?"cuatro":"tres"} cuentas gratuitas. Con una cuenta de Microsoft o Google entras en casi todas.</p><h3>Pasos</h3><ol>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Entra en <a href="https://www.bing.com/images/create" target="_blank" rel="noopener">Bing Image Creator</a> con una cuenta de Microsoft.</li>
${DB()?`<li>Crea tu cuenta en <a href="https://ideogram.ai" target="_blank" rel="noopener">Ideogram</a> (botón «Continue with Google»).</li>`:""}
<li>Crea tu cuenta en <a href="https://www.canva.com" target="_blank" rel="noopener">Canva</a>.</li></ol>${ok(`tienes las ${DB()?"cuatro":"tres"} pestañas abiertas y has entrado en todas.`)}`},
{t:"Pídele el prompt a Claude",s:"5 min · la receta de la imagen",b:()=>`<p class="what">Un <b>prompt</b> es la descripción que le das a la IA. Cuanto más concreto, mejor sale. Claude te lo escribe por ti.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Quiero crear ${D()}.\n\nEscríbeme 3 prompts distintos para un generador de imágenes con IA. Cada uno debe describir: el sujeto, el estilo (por ejemplo acuarela, 3D, fotografía), la luz, los colores y el encuadre.${DB()?" La imagen lleva texto: pon el texto exacto entre comillas y dime dónde colocarlo.":""} Escríbelos en inglés, que funciona mejor, y explícame en español qué cambia entre uno y otro.`)}
${det("¿Qué significa cada parte del mensaje?",["<b>«Quiero crear…»</b>: tu idea. Cámbiala por la tuya.","<b>Sujeto, estilo, luz, colores, encuadre</b>: los cinco ingredientes de un buen prompt.",...(DB()?["<b>Texto entre comillas</b>: así la IA sabe qué letras escribir exactamente."]:[]),"<b>En inglés</b>: los generadores entienden mejor el inglés, pero te lo explica en español."])}
${tip("Describe lo que SÍ quieres. La IA entiende mal los «no»: en vez de «sin gente» escribe «una calle vacía».")}${ok("Claude te ha dado tres prompts y entiendes la diferencia entre ellos.")}`},
{t:"Hornea las primeras imágenes",s:"5 min · generar",b:()=>`<p class="what">Pegas el prompt en el generador y en unos segundos te da varias versiones.</p><h3>Pasos</h3><ol>
<li>Abre ${DB()?"<b>Ideogram</b>":"<b>Bing Image Creator</b>"}.</li>
<li>Pega el primer prompt de Claude y pulsa <b>${DB()?"Generate":"Crear"}</b>.</li>
<li>Repite con los otros dos prompts.</li>
<li>Descarga las que más te gusten.</li></ol>
${tip("Cada generación tarda unos segundos. Si hay cola, espera un poco: no hace falta pulsar otra vez.")}
${det("No me deja generar o me da error",["Algunas palabras están bloqueadas (violencia, famosos, marcas). Reformula con palabras neutras.","Si has gastado tus créditos del día, prueba mañana o usa la otra herramienta.","Revisa los límites gratuitos actuales en la página de cada herramienta."])}${ok("tienes al menos 3 imágenes descargadas en tu ordenador o móvil.")}`},
{t:"Ajusta la sazón",s:"5 min · mejorar el resultado",b:()=>`<p class="what">Casi nunca sale perfecta a la primera. Elige la mejor y pídele a Claude que la mejore contigo.</p><h3>Pasos</h3><ol><li>Vuelve al mismo chat de Claude.</li><li>Pega este mensaje (puedes adjuntar la imagen):</li></ol>${cb("Esta es la imagen que me ha salido con el prompt [pega el prompt]. Me gusta [lo que te gusta], pero quiero cambiar [lo que no te gusta]. Reescribe el prompt para corregirlo sin perder lo bueno.")}
${tip("Cambia una sola cosa cada vez. Si cambias cinco a la vez, no sabrás cuál ha funcionado.")}${ok("tienes una imagen que te gusta de verdad.")}`},
{db:1,t:"Revisa las letras",s:"5 min · que el texto se lea bien",b:()=>`<p class="what">Las IAs a veces escriben letras raras o con faltas. Hay que revisarlo con lupa.</p><h3>Pasos</h3><ol>
<li>Lee el texto de la imagen letra por letra.</li>
<li>Si hay un error pequeño, en Ideogram usa <b>Remix</b> con el mismo prompt y el texto entre comillas.</li>
<li>Si sigue fallando, genera la imagen <b>sin texto</b> y añádelo después en Canva con la herramienta <b>Texto</b>.</li></ol>
${tip("El truco profesional: fondo con IA y letras en Canva. Queda perfecto y puedes cambiar el texto cuando quieras.")}${ok("el texto se lee bien y no tiene faltas.")}`},
{t:"Emplata y sirve",s:"5 min · retocar y exportar",b:()=>`<p class="what">Canva te permite recortar, ajustar el tamaño para cada red y exportar en el formato correcto.</p><h3>Pasos</h3><ol>
<li>En Canva pulsa <b>Crear diseño</b> y elige el tamaño (post de Instagram, historia, A4…).</li>
<li>Pulsa <b>Subir</b> y arrastra tu imagen.</li>
<li>Ajusta brillo y contraste en <b>Editar foto</b> si hace falta.</li>
<li>Pulsa <b>Compartir → Descargar</b>: <b>PNG</b> para gráficos y <b>JPG</b> para fotos.</li></ol>${ok("tienes tu imagen final descargada con el tamaño correcto.")}`},
{x:1,t:"Crea una serie con el mismo estilo",s:"15 min · opcional",b:()=>`<p class="what">Si necesitas varias imágenes que parezcan de la misma familia (para una web o una campaña), reutiliza tu receta.</p><h3>Pasos</h3><ol><li>Guarda en una nota el prompt que mejor te salió.</li><li>Pídele a Claude:</li></ol>${cb("Este es mi prompt ganador: [pega el prompt]. Hazme 5 variaciones con sujetos distintos ([sujeto 1], [sujeto 2]...) pero manteniendo exactamente el mismo estilo, luz y colores.")}
${tip("Usa siempre las mismas palabras de estilo. Cambiar «acuarela» por «pintura» ya cambia el resultado.")}`},
{x:1,t:"Úsalas con tranquilidad",s:"Siempre · consejos",b:()=>`<p class="what">Unas reglas sencillas para no llevarte sustos.</p><ol>
<li><b>Revisa las condiciones</b> de cada herramienta antes de un uso comercial: cambian con el tiempo.</li>
<li><b>No imites a personas reales</b> ni marcas registradas.</li>
<li><b>Revisa manos, ojos y detalles</b>: es donde la IA más se equivoca.</li>
<li><b>Guarda tus prompts</b> en una carpeta: son tu recetario personal.</li></ol>
${det("💡 Ideas para seguir cocinando",["Fondos para tu web o presentaciones.","Ilustraciones para un cuento infantil.","Mockups de producto antes de fabricarlo.","Iconos para tu app con el mismo estilo."])}`}
]}};
