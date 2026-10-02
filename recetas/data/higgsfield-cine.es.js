(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: imágenes y vídeos de cine con Higgsfield",
meta:["⏱ 30 min aprox.", "👩‍🍳 Fácil", "💶 Higgsfield usa créditos (hay prueba)", "🍽 Resultado: imágenes y clips listos para publicar"],
ing:"Ingredientes",
q:"¿Qué quieres rodar?",
ph:"Describe tu imagen o vídeo. Ejemplo: un clip de 8 segundos de una taza de café humeante en una cocina con luz de mañana",
yn:"¿Vas a usar una foto tuya como referencia (tu producto, tu logo, tu local)?",
yntip:"Si dudas, elige «Sí»: te enseñamos a subir tu foto. Si no la usas, la receta funciona igual.",
fin:"Ya tienes tus primeras piezas generadas con Higgsfield desde Claude. Guarda la conversación: es tu receta para repetirlo con otros productos. Más abajo tienes extras: pasar de imagen a vídeo y cómo usarlo con responsabilidad.",
R:{key:"receta-higgs",def:"producto",empty:"[describe aquí tu imagen o vídeo, arriba]",
apps:{
 producto:{n:"Foto de producto",db:true,d:"tres fotos de estudio de mi producto, con luz suave, fondo color crema y sombras delicadas"},
 anuncio:{n:"Anuncio en vídeo",db:true,d:"un anuncio vertical 9:16 de 8 segundos para redes, con mi producto girando despacio bajo una luz cálida"},
 personaje:{n:"Personaje de marca",db:false,d:"un personaje ilustrado y amable que represente a mi marca, en tres poses diferentes"},
 escena:{n:"Escena de cine",db:false,d:"un plano cinematográfico de 8 segundos: amanecer en una cocina tranquila, con la cámara avanzando muy despacio"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: el director. Entiende tu idea y escribe las indicaciones.</li><li><b>Higgsfield</b>: el estudio de rodaje. Genera imágenes y vídeos con varios modelos de IA. Funciona con créditos.</li><li><b>Conector de Higgsfield</b>: el ayudante de dirección. Lleva las órdenes de Claude al estudio.</li>${DB()?`<li><b>Tu foto de referencia</b>: el atrezo. Una imagen clara de tu producto o logo.</li>`:""}`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · cuentas",b:()=>`<p class="what">Necesitas dos cuentas: una en Claude y otra en Higgsfield.</p><h3>Pasos</h3><ol>
<li>Entra en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a> (web o app de escritorio).</li>
<li>Crea una cuenta en <a href="https://higgsfield.ai" target="_blank" rel="noopener">Higgsfield</a>.</li>
<li>Mira qué créditos o prueba gratuita tienes: cada imagen o vídeo gasta créditos, y el vídeo gasta más que la imagen.</li></ol>
${tip("Las ofertas y los planes de Higgsfield cambian a menudo. Revisa su web antes de empezar para no llevarte sorpresas.")}${ok("puedes entrar en las dos cuentas.")}`},
{t:"Conecta Higgsfield con Claude",s:"3 min · conector personalizado",b:()=>`<p class="what">Higgsfield tiene su propio conector. Se añade pegando una dirección web.</p><h3>Pasos</h3><ol>
<li>En Claude abre <b>Personalizar → Conectores</b> (<i>Customize → Connectors</i>).</li>
<li>Pulsa <b>+</b> → <b>Añadir conector personalizado</b> (<i>Add custom connector</i>).</li>
<li>Nombre: <b>Higgsfield</b>. Dirección (URL): copia esta:</li></ol>${cb("https://mcp.higgsfield.ai/mcp")}<ol start="4"><li>Pulsa <b>Añadir</b> y después <b>Conectar</b>. Inicia sesión con tu cuenta de Higgsfield y acepta.</li></ol>
${det("¿Qué es esa dirección?",["Es el «teléfono» del conector: Claude llama ahí cuando necesita generar algo.","No tienes que instalar nada: todo pasa en internet.","En el plan gratuito de Claude puedes añadir <b>un</b> conector personalizado."])}
${ok("en un chat nuevo, al pulsar <b>+ → Conectores</b>, ves Higgsfield activado.")}`},
{t:"Escribe el guion con Claude",s:"5 min · la idea",b:()=>`<p class="what">Antes de gastar créditos, deja que Claude te ayude a afinar la idea. Es gratis y mejora mucho el resultado.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo y pega:</li></ol>${cb(`Actúa como director de fotografía. Quiero crear ${D()}.\n\nAntes de generar nada, hazme 4 preguntas cortas sobre estilo, colores, encuadre y formato. Después propón 2 ideas en una frase cada una y espera a que yo elija.`)}
${det("¿Por qué no generar directamente?",["Cada generación gasta créditos: mejor acertar a la primera.","Claude traduce tus palabras a indicaciones técnicas (luz, lente, movimiento).","Tú decides antes de que se gaste nada."])}${ok("tienes una idea elegida y clara.")}`},
{db:1,t:"Sube tu foto de referencia",s:"3 min · el atrezo",b:()=>`<p class="what">Con una referencia, el resultado se parece a tu producto de verdad.</p><h3>Pasos</h3><ol>
<li>Haz una foto de tu producto con buena luz, de frente y sobre un fondo liso.</li>
<li>Arrástrala al chat de Claude (o pulsa el clip 📎).</li>
<li>Escribe:</li></ol>${cb("Usa esta foto como referencia. El producto tiene que verse igual: misma forma, mismos colores y mismo logo. Cambia solo el fondo, la luz y el encuadre.")}
${tip("Usa solo imágenes tuyas o con permiso. No subas fotos de otras personas sin su consentimiento.")}${ok("Claude ha visto tu foto y te confirma qué va a mantener.")}`},
{t:"Genera la primera versión",s:"5 min · ¡acción!",b:()=>`<p class="what">Ahora sí: Claude le pide a Higgsfield que lo genere.</p><h3>Pasos</h3><ol><li>En el mismo chat, pega:</li></ol>${cb(`Perfecto. Usa Higgsfield para generar ${D()}.${DB()?" Usa mi foto de referencia.":""}\n\nElige tú el modelo más adecuado y dime cuál has usado y por qué. Empieza con una sola versión para no gastar créditos de más.`)}
${tip("Si pides vídeo, puede tardar uno o dos minutos. Respira: es normal.")}${ok("ves la imagen o el vídeo en el chat, con un enlace para abrirlo.")}`},
{t:"Ajusta con cambios pequeños",s:"5 min · pulir",b:()=>`<p class="what">Igual que en cocina: se prueba y se ajusta la sal. Un cambio cada vez.</p><h3>Pasos</h3><ol><li>Pide cambios concretos:</li></ol>${cb("Mantén todo igual, pero haz la luz un poco más cálida y acerca la cámara al producto. Cambia solo eso.")}
${det("Palabras que ayudan",["<b>Luz</b>: suave, dorada, de ventana, de estudio.","<b>Cámara</b>: plano cenital, primer plano, travelling lento.","<b>Ambiente</b>: tranquilo, minimalista, acogedor, de película de los 70."])}${ok("la nueva versión se parece más a lo que tenías en la cabeza.")}`},
{t:"Descarga y guarda tu receta",s:"2 min · emplatar",b:()=>`<p class="what">Guarda el resultado y también las palabras que lo crearon.</p><h3>Pasos</h3><ol>
<li>Abre el enlace del resultado y descárgalo (también lo tienes en tu biblioteca de Higgsfield).</li>
<li>Pide a Claude:</li></ol>${cb("Escríbeme en un solo bloque la indicación final que ha funcionado, para poder reutilizarla con otros productos.")}${ok("tienes el archivo descargado y tu indicación guardada en una nota.")}`},
{x:1,t:"De imagen a vídeo",s:"10 min · opcional",b:()=>`<p class="what">Una buena imagen puede convertirse en un clip corto con movimiento.</p>${cb("Anima la última imagen: movimiento de cámara muy lento hacia delante, vapor suave y luz que cambia un poco. 8 segundos, formato vertical 9:16.")}${tip("Pide primero una versión corta. Si te gusta, pide variantes.")}`},
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>El conector no aparece</b>: revisa que la URL esté bien copiada y vuelve a pulsar Conectar.</li><li><b>Pide iniciar sesión otra vez</b>: es normal de vez en cuando; vuelve a conectar.</li><li><b>Se queda sin créditos</b>: mira tu saldo en Higgsfield.</li><li><b>El resultado no se parece</b>: da una referencia más clara y pide un solo cambio cada vez.</li></ol>`},
{x:1,t:"Úsalo con responsabilidad",s:"Siempre · consejos",b:()=>`<ol><li>No crees imágenes de <b>personas reales</b> sin su permiso.</li><li>No imites <b>marcas ni personajes</b> que no son tuyos.</li><li>Si publicas anuncios, indica que el contenido está <b>generado con IA</b> cuando la plataforma lo pida.</li><li>Revisa los términos de uso comercial de tu plan.</li></ol>`}
]}};
