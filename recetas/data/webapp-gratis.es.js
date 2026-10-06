(window.RECIPE=window.RECIPE||{}).es={
title:"Receta: tu web online y gratis",
meta:["⏱ 1-2 horas, a tu ritmo", "👩‍🍳 Sin saber programar", "💶 0 € para empezar", "🍽 Resultado: tu web online, a tu medida"],
ing:"Ingredientes (todos gratuitos)",
q:"¿Qué quieres preparar?",
ph:"Describe tu web con tus palabras. Ejemplo: una web para mi gimnasio con horarios y un formulario para apuntarse",
yn:"¿Necesita guardar datos o cuentas de usuario?",
yntip:"Si dudas, elige «Sí»: funciona igual y luego puedes ignorarlo. Para cobrar online hace falta un servicio de pagos aparte; empieza sin cobros.",
fin:"Tu webapp está online. Cada vez que cambies algo y lo subas a GitHub, Cloudflare la actualiza sola. Más abajo tienes dos extras: dominio propio y mantenimiento.",
R:{key:"receta2",def:"tareas",empty:"[escribe aquí tu idea, arriba]",
apps:{
 portfolio:{n:"Portfolio / presentación",db:false,d:"una web de presentación personal con mi trayectoria, mis proyectos y un enlace para contactarme"},
 negocio:{n:"Web de mi negocio",db:false,d:"una página para mi negocio con servicios, precios, opiniones de clientes y botón de contacto"},
 tareas:{n:"Lista de tareas",db:true,d:"una lista de tareas donde cada persona crea su cuenta y ve solo sus tareas"},
 notas:{n:"Blog / notas",db:true,d:"un blog de notas donde cada persona crea su cuenta y puede escribir, editar y borrar sus entradas"},
 contacto:{n:"Web con formulario",db:true,d:"una web de presentación con un formulario de contacto que guarda los mensajes que me envían"},
 reservas:{n:"Reservas / citas",db:true,d:"una web donde los clientes reservan una cita y yo veo todas las reservas"},
 catalogo:{n:"Catálogo de productos",db:true,d:"un catálogo de productos que yo actualizo desde un panel privado, sin cobro online"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
ing:()=>`<li><b>Claude</b>: es el cocinero. Escribe el código por ti.</li><li><b>GitHub</b>: la nevera. Guarda tus archivos.</li>${DB()?`<li><b>Supabase</b>: la despensa. Guarda los datos y las cuentas de usuario.</li>`:""}<li><b>Cloudflare</b>: el mostrador. Publica tu web para que cualquiera la vea.</li>`,
steps:[
{t:"Prepara los ingredientes",s:"5 min · crear cuentas",b:()=>`<p class="what">Vas a crear ${DB()?"cuatro":"tres"} cuentas gratuitas. Empieza por GitHub: con ella podrás entrar en las demás.</p><h3>Pasos</h3><ol>
<li>Crea tu cuenta en <a href="https://github.com/signup" target="_blank" rel="noopener">GitHub</a>.</li>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
${DB()?`<li>Crea tu cuenta en <a href="https://supabase.com" target="_blank" rel="noopener">Supabase</a> (botón «Sign in with GitHub»).</li>`:""}
<li>Crea tu cuenta en <a href="https://dash.cloudflare.com/sign-up" target="_blank" rel="noopener">Cloudflare</a>.</li></ol>${ok(`tienes las ${DB()?"cuatro":"tres"} pestañas abiertas y has entrado en todas.`)}`},
{t:"Pídele la receta a Claude",s:"10 min · generar la web",b:()=>`<p class="what">Le vas a describir tu idea a Claude. Él crea <b>3 archivos</b> que forman tu web. No tienes que entenderlos ahora.</p><h3>Pasos</h3><ol><li>Abre un chat nuevo en Claude.</li><li>Copia este mensaje y pégalo:</li></ol>${cb(`Quiero ${APPS[app].d||"[escribe aquí tu idea, arriba]"}.\n\nHazla como una web sencilla con tres archivos: index.html, styles.css y app.js. Que se vea bien en el móvil y con un diseño cuidado.${DB()?" Que guarde los datos en Supabase y deja las claves de conexión en un archivo aparte llamado config.js.":""} Explícame cada archivo con palabras simples, como si no supiera programar.`)}
<details><summary>¿Qué significa cada parte del mensaje?</summary><ul>
<li><b>«Quiero…»</b>: tu idea. Puedes cambiarla por la tuya.</li>
<li><b>index.html, styles.css, app.js</b>: la página, su aspecto y su funcionamiento.</li>
${DB()?`<li><b>Supabase</b>: dónde se guardarán los datos y las cuentas.</li><li><b>config.js</b>: un archivo donde pegarás tus «llaves» de Supabase más adelante.</li>`:""}
<li><b>«Como si no supiera programar»</b>: para que Claude te lo explique fácil.</li></ul></details>
<div class="tip">Si algo no te gusta, díselo con tus palabras: «hazlo más oscuro», «pon el botón más grande».</div><h3>Baja los archivos a tu ordenador</h3><ol><li>Crea en tu ordenador una carpeta llamada <b>mi-app</b>.</li><li>En el chat, cada archivo tiene un botón de <b>descargar</b>. Pulsa en cada uno y guárdalo en <b>mi-app</b>.</li><li>¿No ves el botón? Pídele: «Dame los archivos en un .zip para descargar». Descomprímelo dentro de <b>mi-app</b>.</li></ol><div class="tip">Si vas a usar el conector de GitHub (paso siguiente), Claude puede subir los archivos él solo. Descargarlos igualmente te deja una copia.</div>${ok("tienes los archivos de tu web dentro de la carpeta mi-app de tu ordenador.")}`},
{t:"Conecta Claude con tus herramientas",s:"5 min · conectores",b:()=>`<p class="what">Un conector es un permiso para que Claude use GitHub${DB()?" y Supabase":""} por ti, sin copiar y pegar. Funciona con MCP, el estándar que permite a Claude usar herramientas externas.</p><h3>Pasos</h3><ol>
<li>En Claude abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Pulsa <b>Conectar</b> junto a GitHub y autoriza con tu cuenta.</li>${DB()?"<li>Haz lo mismo con Supabase.</li>":""}</ol>
<div class="tip">Si tu plan no muestra conectores, no pasa nada: cada paso siguiente tiene una alternativa manual.</div>${ok(DB()?"GitHub y Supabase aparecen como «Conectado».":"GitHub aparece como «Conectado».")}`},
{db:1,t:"Que Claude prepare la base de datos",s:"5 min · crear las tablas",b:()=>`<p class="what">Una tabla es como una hoja de cálculo donde se guardan tus datos. Claude la crea por ti, con seguridad para que <b>cada usuario vea solo lo suyo</b>.</p><h3>Pasos</h3><ol>
<li>En Supabase pulsa <b>New project</b>, ponle nombre y elige una región cercana. Espera un par de minutos.</li>
<li>Vuelve al mismo chat de Claude y pega:</li></ol>${cb(`Crea en mi proyecto de Supabase las tablas que necesita esta app. Usa los mismos nombres de campos que en el código. Activa la seguridad (RLS) para que cada usuario vea y modifique solo sus propios datos. Antes de ejecutar nada, dime qué vas a crear.`)}
<div class="tip">Usa una sola tabla para todos los usuarios, con una columna que indica de quién es cada fila. Es más sencillo que una tabla por persona y igual de privado.</div>
<details><summary>No tengo el conector o no funciona</summary><ul>
<li>Pídele a Claude: «Dame el SQL para crear las tablas con seguridad RLS».</li>
<li>En Supabase abre <b>SQL Editor</b>, pega el código y pulsa <b>Run</b>.</li></ul></details>${ok("en Supabase, en <b>Table Editor</b>, ves tu tabla y aparece la seguridad (RLS) activada.")}`},
{db:1,t:"Enchufa la web a Supabase",s:"5 min · las dos llaves",b:()=>`<p class="what">Tu web necesita dos datos para hablar con tu base de datos: una dirección y una llave pública.</p><h3>Pasos</h3><ol>
<li>En Supabase abre <b>Project Settings → API</b>.</li>
<li>Copia la <b>Project URL</b> y la <b>clave publicable</b> (<i>publishable key</i>; en proyectos antiguos se llama <b>anon public</b>).</li>
<li>Ábrelas en el archivo <code>config.js</code> y pégalas donde Claude indicó. Si no sabes dónde, pregúntale.</li>
<li>Guarda el archivo. La probarás de verdad cuando esté publicada (paso «Publica tu web»).</li></ol><div class="tip">Si abres <code>index.html</code> con doble clic, el diseño se verá, pero crear cuentas puede fallar: los navegadores limitan las webs abiertas como archivo. Es normal; online funcionará.</div>
<div class="tip">⚠️ Nunca uses la clave <b>secreta</b> (<i>secret</i> o <b>service_role</b>) en tu web: da acceso total a tus datos.</div>${ok("config.js tiene tu Project URL y tu clave publicable.")}`},
{t:"Guarda todo en GitHub",s:"5 min · subir los archivos",b:()=>`<p class="what">Subes tus 3 archivos a GitHub. Cloudflare los leerá de ahí para publicar tu web.</p><h3>Con el conector</h3><ol><li>Dile a Claude: «Crea un repositorio llamado mi-app y sube estos archivos».</li></ol>
<details><summary>Sin conector: hacerlo a mano</summary><ul>
<li>En GitHub pulsa <b>New repository</b> y llámalo <b>mi-app</b>.</li>
<li>Pulsa <b>uploading an existing file</b>, arrastra tus archivos y confirma con <b>Commit changes</b>.</li></ul></details>${ok("ves tus archivos dentro del repositorio mi-app en GitHub.")}`},
{t:"Publica tu web en Cloudflare",s:"10 min · ponerla online",b:()=>`<p class="what">Cloudflare Pages coge tu repositorio y lo convierte en una web pública con candado (HTTPS).</p><h3>Pasos</h3><ol>
<li>En Cloudflare abre <b>Workers &amp; Pages → Create</b> y elige importar un repositorio de GitHub (<b>Import a repository</b> o <b>Connect to Git</b>).</li>
<li>Elige el repositorio <b>mi-app</b>.</li>
<li>Deja vacío «Build command» y pon <code>/</code> en «Build output directory».</li>
<li>Pulsa <b>Save and Deploy</b> (o <b>Deploy</b>) y espera 1-2 minutos.</li><li>Si ves pantallas distintas a estas, haz una captura, pégala en Claude y pregúntale qué poner.</li>
${DB()?"<li>En Supabase, <b>Authentication → URL Configuration</b>: pega la dirección de tu web en «Site URL».</li>":""}</ol>${ok("abres tu dirección (termina en <code>.pages.dev</code> o <code>.workers.dev</code>) y tu web carga.")}`},
{t:"Prueba antes de servir",s:"5 min · revisión final",b:()=>`<p class="what">Antes de compartirla, comprueba que todo funciona y es seguro.</p><h3>Pasos</h3><ol>
<li>Abre tu web desde el móvil y crea una cuenta.</li>
${DB()?`<li>Crea otra cuenta con otro correo y comprueba que <b>no ve los datos de la primera</b>.</li><li>Revisa que en tu código solo aparece la clave <b>publicable</b>.</li>`:`<li>Comprueba que los enlaces, las imágenes y los botones funcionan.</li>`}
<li>Si más adelante usas la API de Claude u otra clave secreta, guárdala en un Worker de Cloudflare, nunca en la web.</li></ol>
<div class="tip">${DB()?"Los proyectos gratuitos de Supabase se pausan tras una semana sin uso y se reactivan con un clic. Revisa los límites actuales en sus páginas de precios.":"Revisa los límites actuales de Cloudflare Pages en su página de precios."}</div>${ok(DB()?"dos usuarios distintos ven datos distintos.":"tu web se ve bien en el móvil y todo funciona.")}`}
,
{x:1,t:"Conecta tu propio dominio",s:"20 min · opcional",b:()=>`<p class="what">Ahora tu web vive en <code>mi-app.pages.dev</code>. Con un dominio propio (por ejemplo <code>tunombre.com</code>) tendrá una dirección a tu medida. Es lo único que no es gratis: el precio varía según la extensión y dónde lo compres, así que míralo antes de pagar.</p>
<h3>El camino más fácil: comprarlo en Cloudflare</h3><ol>
<li>En Cloudflare abre <b>Domain Registration → Register Domains</b>, busca el nombre que quieres y cómpralo.</li>
<li>Ve a <b>Workers &amp; Pages</b> y abre tu proyecto <b>mi-app</b>.</li>
<li>Pulsa <b>Custom domains → Set up a custom domain</b>.</li>
<li>Escribe tu dominio y pulsa <b>Continue → Activate domain</b>. Cloudflare configura todo automáticamente.</li>
<li>Repite con la versión <code>www.tunombre.com</code> si quieres que ambas funcionen.</li>
${DB()?`<li>En Supabase, <b>Authentication → URL Configuration</b>: cambia «Site URL» por tu nuevo dominio, para que el login siga funcionando.</li>`:""}</ol>
<details><summary>Ya compré el dominio en otro sitio</summary><ul>
<li>En Cloudflare pulsa <b>Add a site</b>, escribe tu dominio y elige el plan <b>Free</b>.</li>
<li>Cloudflare te dará dos «nameservers». Pégalos en el panel de tu registrador, en la sección de DNS o servidores de nombres.</li>
<li>Espera a que Cloudflare confirme (puede tardar desde minutos hasta 24 horas) y sigue los pasos 2 a 4 de arriba.</li></ul></details>
<div class="tip">Activa la renovación automática del dominio: si caduca, tu web deja de cargar.</div>${ok("abres <code>https://tunombre.com</code> y tu web carga con candado.")}`},
{x:1,t:"Mantén y mejora tu web",s:"Siempre · ideas y consejos",b:()=>`<p class="what">Una web no se acaba: se va cuidando y ampliando a tu gusto. Así se cambia algo, paso a paso.</p>
<h3>Cómo añadir o cambiar algo</h3><ol>
<li>Vuelve a tu chat con Claude (o abre uno nuevo y pega tus archivos).</li>
<li>Pide el cambio con estas palabras:</li></ol>${cb("Este es el código de mi web: [pega aquí tus archivos]. Quiero añadir: [tu mejora]. Cambia solo lo necesario y dime qué archivos has tocado.")}
<ol start="3"><li>Sube los archivos nuevos a GitHub: con el conector, pídele «actualiza el repositorio»; a mano, abre el archivo en GitHub, pulsa el lápiz, pega el código y pulsa <b>Commit changes</b>.</li>
<li>Cloudflare publica el cambio solo en 1-2 minutos.</li></ol>
<details><summary>💡 Ideas para mejorar tu web</summary><ul>
<li>Modo oscuro y colores de tu marca.</li>
<li>Un icono para la pestaña del navegador y un título y descripción cuidados para que te encuentren mejor en buscadores.</li>
<li>Botones para compartir en redes o enlaces a tus perfiles.</li>
<li>Estadísticas de visitas (Cloudflare tiene una opción de analítica web).</li>
<li>Una versión en otro idioma.</li>
${DB()?`<li>Buscador y filtros para tus datos.</li><li>Exportar los datos a Excel o CSV.</li><li>Subir imágenes o archivos (Supabase incluye almacenamiento).</li><li>Entrar con la cuenta de Google.</li><li>Un panel de administrador solo para ti.</li>`:`<li>Una galería de imágenes o una sección de opiniones.</li><li>Un formulario de contacto (podrás añadirlo más adelante con base de datos).</li>`}</ul></details>
<h3>Rutina de mantenimiento</h3><ol>
<li><b>Antes de un cambio grande:</b> pídele a Claude que te resuma qué va a tocar. GitHub guarda el historial, así que puedes volver a una versión anterior.</li>
<li><b>Cada mes:</b> abre tu web en el móvil y comprueba que todo funciona.</li>
${DB()?`<li><b>Si Supabase se pausó por falta de uso:</b> entra en tu proyecto y pulsa restaurar.</li><li><b>Copia de tus datos:</b> en Supabase, en <b>Table Editor</b>, puedes exportar tus tablas a CSV.</li>`:""}
<li><b>Revisa los límites gratuitos</b> de vez en cuando en las páginas de precios de las herramientas que usas.</li></ol>
<h3>Si algo se rompe</h3><p>No te asustes: copia el mensaje de error y pídele ayuda a Claude.</p>${cb("Mi web da este error: [pega el error o describe qué pasa]. Lo último que cambié fue: [qué cambiaste]. ¿Cómo lo arreglo? Explícamelo paso a paso.")}
<div class="tip">Una regla que evita casi todos los sustos: haz un cambio pequeño cada vez y pruébalo antes de pedir el siguiente.</div>`}
]}};
