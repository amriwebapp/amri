(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: tu web online y gratis",
intro:"Claude escribe el código, GitHub lo guarda y Cloudflare lo publica, gratis y sin saber programar. Prepara las cuentas una vez y después elige la receta: tu primera web, una web con cuentas de usuario, reservas, tu dominio, que te encuentren en Google…",
meta:["📕 8 recetas", "💶 Gratis (el dominio propio es de pago)", "🍽 Resultado: tu web online, a tu medida"],
ing:"Ingredientes (todos gratuitos)",
fin:"Tu cocina está lista. Empieza por «Tu primera web» y, después, elige la receta que quieras.",
R:{key:"libro-web",
ing:()=>`<li><b>Claude</b>: el cocinero. Escribe el código por ti.</li><li><b>GitHub</b>: la nevera. Guarda tus archivos y cada cambio que haces.</li><li><b>Cloudflare</b>: el mostrador. Publica tu web para que cualquiera la vea.</li><li><b>Supabase</b> (solo en algunas recetas): la despensa. Guarda datos y cuentas de usuario.</li>`,
steps:[
{t:"Crea tus cuentas",s:"tres cuentas gratis",b:()=>`<p class="what">Empieza por GitHub: con esa cuenta podrás entrar en las demás.</p><ol>
<li>Crea tu cuenta en <a href="https://github.com/signup" target="_blank" rel="noopener">GitHub</a>.</li>
<li>Crea tu cuenta en <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>.</li>
<li>Crea tu cuenta en <a href="https://dash.cloudflare.com/sign-up" target="_blank" rel="noopener">Cloudflare</a>.</li></ol>
${tip("Supabase solo hace falta si tu web guarda datos o tiene cuentas de usuario. Lo crearás en esas recetas.")}${ok("has entrado en las tres cuentas.")}`},
{t:"Conecta GitHub con Claude",s:"el conector",b:()=>`<p class="what">Un conector es un permiso para que Claude use GitHub por ti: así sube los archivos él, sin que tengas que copiar y pegar.</p><ol>
<li>En Claude abre <b>Personalizar → Conectores</b> (en inglés: <b>Customize → Connectors</b>).</li><li>Busca <b>GitHub</b>, pulsa <b>Conectar</b> y autoriza con tu cuenta.</li></ol>
${tip("Si tu plan no muestra conectores, no pasa nada: cada receta tiene también el camino a mano.")}${ok("GitHub aparece como «Conectado».")}`},
{t:"Crea el proyecto «Mi web»",s:"las reglas",b:()=>`<p class="what">Un proyecto de Claude guarda tus reglas para siempre. Así Claude trabaja igual en todas las recetas.</p><ol>
<li>En Claude pulsa <b>Proyectos → Crear proyecto</b> y llámalo <b>Mi web</b>.</li>
<li>En <b>Instrucciones</b>, pega:</li></ol>${cb("Eres mi programador y me ayudas a crear y mantener mi web, aunque yo no sepa programar.\n\nReglas:\n- Explícame todo con palabras sencillas.\n- Haz webs sencillas (HTML, CSS y JavaScript), que se vean bien en el móvil y que se puedan publicar gratis en Cloudflare.\n- Antes de cambiar algo, dime qué vas a tocar. Cambia solo lo necesario.\n- Nunca pongas claves secretas en el código de la web.\n- Cuando termines, dime qué archivos han cambiado.")}
${tip("Abre siempre los chats de las recetas <b>dentro de este proyecto</b>.")}${ok("tienes el proyecto «Mi web» con sus instrucciones.")}`}
,
{x:1,t:"Si algo no funciona",s:"Siempre · revisa esto",b:()=>`<ol><li><b>La web sale en blanco o con error 404</b>: en Cloudflare, revisa que la carpeta de salida sea donde está <code>index.html</code>.</li><li><b>Faltan archivos en GitHub</b>: en Mac, las carpetas que empiezan por punto están ocultas; pulsa ⌘ + Mayús + . en Finder para verlas.</li><li><b>Algo se ha roto</b>: copia el error y pégalo en Claude:</li></ol>${cb("Mi web da este error: [pega el error o describe qué pasa]. Lo último que cambié fue: [qué cambiaste]. ¿Cómo lo arreglo? Explícamelo paso a paso.")}`},
{x:1,t:"Seguridad básica",s:"Siempre · importante",b:()=>`<ol><li>En el código de la web solo pueden ir claves <b>públicas</b> (como la clave publicable de Supabase). Las secretas, nunca.</li><li>Si un día usas la API de Claude u otra clave secreta, guárdala en un Worker de Cloudflare, no en la web.</li><li>Haz un cambio pequeño cada vez y pruébalo antes del siguiente.</li></ol>`}
]},
recetas:[
/* ---------------------------------------------------------------- */
{s:"primera-web",t:"Tu primera web: presentación o negocio",d:"Una web de una o varias secciones, publicada en internet con candado, sin base de datos.",
meta:["👩‍🍳 Fácil", "🌐 Web", "🍽 Resultado: tu web online en una dirección .pages.dev o .workers.dev"],
q:"¿Qué web quieres?",ph:"Descríbela con tus palabras. Ejemplo: la web de mi peluquería con servicios, precios, horario y un botón de WhatsApp",
fin:"Tu web está online. Cada vez que cambies algo y lo subas a GitHub, Cloudflare la actualiza sola. Sigue con «Tu propio dominio» o «Que te encuentren en Google».",
def:"negocio",empty:"[describe aquí tu web, arriba]",
apps:{
 negocio:{n:"Web de mi negocio",db:false,d:"una web para mi negocio con servicios, precios, opiniones de clientes, horario y un botón de contacto"},
 portfolio:{n:"Portfolio / presentación",db:false,d:"una web de presentación personal con mi trayectoria, mis proyectos y un enlace para contactarme"},
 carta:{n:"Carta de restaurante",db:false,d:"la carta de mi restaurante, fácil de leer en el móvil, con alérgenos y un botón para reservar por teléfono"},
 evento:{n:"Evento",db:false,d:"una web para un evento con fecha, lugar, programa y cómo apuntarse"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Pide la web a Claude",s:"los archivos",b:()=>`<p class="what">Abre un chat dentro de <b>Mi web</b>. Claude crea <b>3 archivos</b> que forman tu web; no tienes que entenderlos.</p>${cb(`Quiero ${D()}.\n\nHazla con tres archivos: index.html, styles.css y app.js. Que se vea bien en el móvil y tenga un diseño cuidado. Explícame cada archivo en una frase.`)}
${det("¿Qué es cada archivo?",["<b>index.html</b>: la página, con sus textos e imágenes.","<b>styles.css</b>: el aspecto: colores, letras, espacios.","<b>app.js</b>: lo que se mueve o reacciona al pulsar."])}
${tip("Si algo no te gusta, díselo con tus palabras: «hazlo más oscuro», «pon el botón más grande».")}${ok("Claude te ha enseñado los tres archivos.")}`},
{t:"Baja los archivos",s:"a tu ordenador",b:()=>`<ol><li>Crea en tu ordenador una carpeta llamada <b>mi-web</b>.</li><li>En el chat, cada archivo tiene un botón de <b>descargar</b>. Guárdalos en <b>mi-web</b>.</li><li>¿No ves el botón? Pide: «Dame los archivos en un .zip para descargar» y descomprímelo dentro de <b>mi-web</b>.</li></ol>
${tip("Haz doble clic en <code>index.html</code> para verla en tu navegador antes de publicarla.")}${ok("ves tu web en el navegador de tu ordenador.")}`},
{t:"Guárdala en GitHub",s:"subir",b:()=>`<h3>Con el conector</h3>${cb("Crea un repositorio en mi GitHub llamado mi-web y sube estos tres archivos.")}
${det("Sin conector: hacerlo a mano",["En GitHub pulsa <b>New repository</b> y llámalo <b>mi-web</b>.","Pulsa <b>uploading an existing file</b>, arrastra tus archivos y confirma con <b>Commit changes</b>."])}
${ok("ves tus archivos dentro del repositorio mi-web en GitHub.")}`},
{t:"Publícala en Cloudflare",s:"online",b:()=>`<ol>
<li>En Cloudflare abre <b>Workers &amp; Pages → Create</b> y elige importar un repositorio de GitHub (<b>Import a repository</b> o <b>Connect to Git</b>).</li>
<li>Elige el repositorio <b>mi-web</b>.</li>
<li>Deja vacío «Build command» y pon <code>/</code> en «Build output directory».</li>
<li>Pulsa <b>Save and Deploy</b> (o <b>Deploy</b>) y espera 1-2 minutos.</li></ol>
${tip("Si ves pantallas distintas, haz una captura, pégala en Claude y pregúntale qué poner.")}${ok("abres tu dirección (termina en <code>.pages.dev</code> o <code>.workers.dev</code>) y tu web carga con candado.")}`},
{t:"Pruébala en el móvil",s:"revisión",b:()=>`<ol><li>Abre la dirección en tu móvil.</li><li>Pulsa cada botón y cada enlace.</li><li>Pídele a alguien que la mire y te diga qué no entiende.</li></ol>
${cb("Así se ve mi web en el móvil: [describe o sube una captura]. Esto no me gusta: [qué]. Arréglalo cambiando solo eso.")}${ok("tu web se ve bien en el móvil y todo funciona.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"web-con-datos",t:"Una web con cuentas y datos",d:"Cada persona crea su cuenta y guarda sus cosas: tareas, notas, mensajes de un formulario o un catálogo que actualizas tú.",
meta:["👩‍🍳 Media", "🗄 Base de datos", "🍽 Resultado: una web con cuentas de usuario y datos guardados"],
q:"¿Qué quieres que guarde?",ph:"Descríbelo. Ejemplo: una lista de la compra compartida con mi familia",
fin:"Tu web ya guarda datos de forma segura: cada persona ve solo lo suyo. Recuerda: los proyectos gratuitos de Supabase se pausan tras una semana sin uso y se reactivan con un clic.",
def:"formulario",empty:"[describe aquí qué debe guardar, arriba]",
apps:{
 formulario:{n:"Formulario de contacto",db:true,d:"una web de presentación con un formulario de contacto que guarda los mensajes, y una página privada donde solo yo los veo"},
 tareas:{n:"Lista de tareas",db:true,d:"una lista de tareas donde cada persona crea su cuenta y ve solo sus tareas"},
 notas:{n:"Blog o notas",db:true,d:"un blog de notas donde cada persona crea su cuenta y puede escribir, editar y borrar sus entradas"},
 catalogo:{n:"Catálogo que actualizo yo",db:true,d:"un catálogo de productos que yo actualizo desde un panel privado, sin cobro online"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"Crea tu proyecto en Supabase",s:"la despensa",b:()=>`<ol><li>Entra en <a href="https://supabase.com" target="_blank" rel="noopener">Supabase</a> con el botón <b>Sign in with GitHub</b>.</li><li>Pulsa <b>New project</b>, ponle nombre y elige una región cercana. Espera un par de minutos.</li><li>Si quieres que Claude cree las tablas por ti, conecta Supabase en <b>Personalizar → Conectores</b>.</li></ol>
${ok("tienes un proyecto en Supabase.")}`},
{t:"Pide la web a Claude",s:"los archivos",b:()=>`${cb(`Quiero ${D()}.\n\nHazla con estos archivos: index.html, styles.css, app.js y config.js. Que guarde los datos y las cuentas en Supabase, y deja la dirección y la clave publicable en config.js para que yo las pegue. Que se vea bien en el móvil. Explícame cada archivo en una frase.`)}
<ol><li>Baja los archivos a una carpeta <b>mi-web</b> de tu ordenador (botón de descargar, o pide un .zip).</li></ol>${ok("tienes los cuatro archivos en tu ordenador.")}`},
{t:"Que Claude cree las tablas",s:"con seguridad",b:()=>`<p class="what">Una tabla es como una hoja de cálculo donde se guardan tus datos. La seguridad (se llama RLS) hace que <b>cada persona vea solo lo suyo</b>.</p>${cb("Crea en mi proyecto de Supabase las tablas que necesita esta web. Usa los mismos nombres que en el código. Activa la seguridad (RLS) para que cada usuario vea y cambie solo sus propios datos. Antes de ejecutar nada, dime qué vas a crear.")}
${det("No tengo el conector o no funciona",["Pide a Claude: «Dame el SQL para crear las tablas con seguridad RLS».","En Supabase abre <b>SQL Editor</b>, pega el código y pulsa <b>Run</b>."])}
${ok("en Supabase, en <b>Table Editor</b>, ves tu tabla con la seguridad (RLS) activada.")}`},
{t:"Pega las dos llaves",s:"conectar",b:()=>`<ol><li>En Supabase abre <b>Project Settings → API</b>.</li><li>Copia la <b>Project URL</b> y la <b>clave publicable</b> (<i>publishable key</i>; en proyectos antiguos se llama <b>anon public</b>).</li><li>Pégalas en <code>config.js</code> donde indicó Claude.</li></ol>
${tip("⚠️ Nunca uses la clave <b>secreta</b> (<i>secret</i> o <b>service_role</b>) en tu web: da acceso total a tus datos.")}
${tip("Si abres <code>index.html</code> con doble clic, crear cuentas puede fallar: los navegadores limitan las webs abiertas como archivo. Es normal; online funcionará.")}${ok("config.js tiene tu Project URL y tu clave publicable.")}`},
{t:"Súbela y publícala",s:"online",b:()=>`<ol><li>Sube los archivos a GitHub y publícala en Cloudflare, igual que en <a href="webapp-gratis--primera-web.html">Tu primera web</a> (pasos 3 y 4).</li><li>En Supabase, <b>Authentication → URL Configuration</b>: pega la dirección de tu web en «Site URL».</li></ol>${ok("tu web está online.")}`},
{t:"Prueba con dos cuentas",s:"la prueba de fuego",b:()=>`<ol><li>Crea una cuenta en tu web y guarda algo.</li><li>Abre una ventana de incógnito, crea <b>otra cuenta</b> con otro correo y comprueba que <b>no ve lo de la primera</b>.</li><li>Pídele a Claude que revise que en el código solo aparece la clave publicable.</li></ol>${ok("dos usuarios distintos ven datos distintos.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"reservas",t:"Reservas y citas online",d:"Tus clientes eligen un hueco libre y tú ves todas las reservas en una página privada.",
meta:["👩‍🍳 Media", "📅 Reservas", "🍽 Resultado: un sistema de reservas en tu web"],
q:"¿Qué tipo de reservas?",ph:"Describe tu caso. Ejemplo: citas de 45 minutos de lunes a viernes de 9 a 14 en mi consulta",
fin:"Ya aceptas reservas online. Revisa la página privada cada día y avisa a tus clientes si algo cambia.",
def:"citas",empty:"[describe aquí tus reservas, arriba]",
apps:{
 citas:{n:"Citas con horario",db:true,d:"citas de duración fija en mi horario de trabajo, sin que dos personas puedan reservar el mismo hueco"},
 mesas:{n:"Mesas de restaurante",db:true,d:"reservas de mesa por turnos (comida y cena), con un máximo de personas por turno"},
 clases:{n:"Clases con plazas",db:true,d:"clases con un número de plazas, en las que la gente se apunta hasta que se llenan"},
 otra:{n:"✏️ Otra idea",db:true,d:""}
},
steps:[
{t:"Define tus reglas",s:"antes del código",b:()=>`<p class="what">Antes de programar, deja claro cómo funcionan tus reservas. Es lo que más errores evita.</p>${cb(`Quiero ${D()}.\n\nHazme preguntas de una en una para definir las reglas: horario, duración, días cerrados, cuánta antelación, cuántas reservas por persona y cómo se cancela. Al final, resume las reglas en una lista.`)}${ok("tienes las reglas de tus reservas en una lista.")}`},
{t:"Supabase y la web",s:"construir",b:()=>`<ol><li>Si aún no tienes un proyecto en Supabase, créalo como en <a href="webapp-gratis--web-con-datos.html">Una web con cuentas y datos</a> (paso 1).</li><li>Pide la web:</li></ol>${cb("Con esas reglas, crea la web de reservas: una página pública donde se ven los huecos libres y se reserva con nombre, correo y teléfono, y una página privada, con mi cuenta, donde veo y cancelo reservas. Usa Supabase. Que la base de datos impida reservar dos veces el mismo hueco. Deja la dirección y la clave publicable en config.js.")}${ok("tienes los archivos de la web de reservas.")}`},
{t:"Tablas con seguridad",s:"RLS",b:()=>`${cb("Crea las tablas en mi proyecto de Supabase con seguridad (RLS): cualquiera puede crear una reserva, pero solo yo puedo ver la lista completa, con los datos de contacto, y cancelar. Antes de ejecutar, explícame qué vas a crear.")}
${tip("Los datos de tus clientes son personales: que nadie más que tú pueda verlos.")}${ok("las tablas están creadas con RLS activada.")}`},
{t:"Publica y prueba",s:"online",b:()=>`<ol><li>Pega las llaves en <code>config.js</code>, súbela a GitHub y publícala en Cloudflare (como en <a href="webapp-gratis--primera-web.html">Tu primera web</a>).</li><li>Haz una reserva de prueba desde el móvil.</li><li>Intenta reservar <b>el mismo hueco otra vez</b>: no debería dejarte.</li><li>Entra en la página privada y cancela la prueba.</li></ol>${ok("no se puede reservar dos veces el mismo hueco y ves las reservas en tu página privada.")}`},
{t:"Privacidad",s:"obligatorio",b:()=>`<p class="what">Guardas nombres, correos y teléfonos: son datos personales.</p>${cb("Escríbeme un texto corto de privacidad para el formulario de reservas: quién guarda los datos, para qué, cuánto tiempo y cómo pedir que se borren. Y una casilla de aceptación.")}
${tip("Si tienes dudas legales, consúltalo con un profesional. Este texto es un punto de partida.")}${ok("el formulario tiene su texto de privacidad y la casilla.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"cambios",t:"Cambia tu web sin romperla",d:"Añade secciones, cambia textos o colores y vuelve atrás si algo sale mal.",
meta:["👩‍🍳 Fácil", "🛠 Mantenimiento", "🍽 Resultado: tu web mejorada, con el historial a salvo"],
q:"¿Qué quieres cambiar?",ph:"Descríbelo. Ejemplo: añadir una sección con opiniones de clientes",
fin:"Cambio publicado. Regla de oro: un cambio pequeño cada vez y pruébalo antes del siguiente.",
def:"seccion",empty:"[describe aquí el cambio, arriba]",
apps:{
 seccion:{n:"Añadir una sección",db:false,d:"añadir una sección nueva"},
 textos:{n:"Cambiar textos o fotos",db:false,d:"cambiar algunos textos y fotos"},
 colores:{n:"Colores de mi marca",db:false,d:"poner los colores y la tipografía de mi marca"},
 arreglar:{n:"Arreglar algo roto",db:false,d:"arreglar algo que no funciona"},
 otra:{n:"✏️ Otro cambio",db:false,d:""}
},
steps:[
{t:"Pide el cambio",s:"con el código delante",b:()=>`${cb(`Este es el código de mi web: [pega tus archivos o dime el repositorio de GitHub]. Quiero ${D()}: [detalla qué].\n\nAntes de cambiar nada, dime qué archivos vas a tocar. Cambia solo lo necesario.`)}${ok("Claude te ha dicho qué va a tocar.")}`},
{t:"Sube el cambio",s:"a GitHub",b:()=>`<ul><li><b>Con el conector</b>: «Sube estos cambios a mi repositorio mi-web con una nota de qué has cambiado».</li><li><b>A mano</b>: abre el archivo en GitHub, pulsa el lápiz, pega el código nuevo y pulsa <b>Commit changes</b>.</li></ul>
${ok("el cambio está en GitHub y Cloudflare lo publica en 1-2 minutos.")}`},
{t:"Comprueba",s:"en el móvil",b:()=>`<ol><li>Abre tu web en el móvil (si no ves el cambio, recarga la página).</li><li>Revisa la parte cambiada y también el resto: a veces un cambio afecta a otra cosa.</li></ol>${ok("el cambio se ve bien y lo demás sigue funcionando.")}`},
{t:"Si algo se rompió, vuelve atrás",s:"deshacer",b:()=>`<p class="what">GitHub guarda cada versión. Puedes volver a la anterior.</p>${cb("Mi web se ha roto después del último cambio. Vuelve mi repositorio mi-web a la versión anterior y explícame qué había pasado.")}
${det("A mano",["En GitHub, abre el archivo y pulsa <b>History</b>.","Abre la versión anterior, copia su contenido y pégalo en el archivo actual.","Pulsa <b>Commit changes</b>."])}${ok("tu web vuelve a funcionar.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"dominio",t:"Tu propio dominio",d:"Que tu web tenga una dirección como tunombre.com, con candado.",
meta:["👩‍🍳 Fácil", "🌍 Dominio", "💶 El dominio es de pago (cada año)"],
q:"¿Ya tienes dominio?",ph:"Escribe el nombre que quieres. Ejemplo: peluquerialola.es",
fin:"Tu web ya tiene su propia dirección. Activa la renovación automática: si el dominio caduca, tu web deja de cargar.",
def:"comprar",empty:"[escribe aquí el dominio que quieres, arriba]",
apps:{
 comprar:{n:"Aún no lo tengo",db:false,d:"comprar un dominio nuevo"},
 tengo:{n:"Ya lo compré en otro sitio",db:true,d:"usar un dominio que ya tengo en otra empresa"},
 otra:{n:"✏️ Otro caso",db:false,d:""}
},
steps:[
{t:"Elige el nombre",s:"ideas",b:()=>`${cb("Ayúdame a elegir un dominio para mi web: [de qué va]. Propón 10 nombres cortos, fáciles de decir en voz alta y de escribir, con .com o .es.")}${tip("Evita guiones y números: cuesta dictarlos por teléfono.")}${ok("tienes un nombre elegido.")}`},
{t:"Cómpralo o tráelo a Cloudflare",s:"el dominio",b:()=>`<h3>Si aún no lo tienes</h3><ol><li>En Cloudflare abre <b>Domain Registration → Register Domains</b>, búscalo y cómpralo. Mira el precio antes: varía según la extensión.</li></ol>
${det("Si ya lo compraste en otro sitio",["En Cloudflare pulsa <b>Add a site</b>, escribe tu dominio y elige el plan <b>Free</b>.","Cloudflare te dará dos «nameservers». Pégalos en el panel de la empresa donde lo compraste, en la sección de DNS o servidores de nombres.","Espera a que Cloudflare confirme: puede tardar desde minutos hasta 24 horas."])}
${ok("el dominio aparece en tu cuenta de Cloudflare.")}`},
{t:"Únelo a tu web",s:"conectar",b:()=>`<ol><li>Ve a <b>Workers &amp; Pages</b> y abre tu web.</li><li>Pulsa <b>Custom domains → Set up a custom domain</b>.</li><li>Escribe tu dominio y confirma. Repite con <code>www.</code> delante si quieres que funcionen las dos.</li><li>Si tu web usa Supabase, cambia «Site URL» en <b>Authentication → URL Configuration</b> por tu dominio nuevo.</li></ol>
${ok("abres <code>https://tudominio</code> y tu web carga con candado.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"google",t:"Que te encuentren en Google",d:"Títulos, descripciones y el registro en Google para que tu web aparezca al buscarte.",
meta:["👩‍🍳 Fácil", "🔎 Buscadores", "🍽 Resultado: tu web lista para aparecer en Google"],
q:"¿Qué tipo de web es?",ph:"Di qué haces y dónde. Ejemplo: fisioterapeuta en Zaragoza",
fin:"Tu web está preparada. Google tarda unos días o semanas en mostrarla: sé paciente y sigue mejorando el contenido.",
def:"local",empty:"[di qué haces y dónde, arriba]",
apps:{
 local:{n:"Negocio con local",db:true,d:"un negocio con local al que viene la gente"},
 online:{n:"Servicio online",db:false,d:"un servicio o tienda que funciona online, sin local"},
 personal:{n:"Web personal",db:false,d:"mi web personal o portfolio"},
 otra:{n:"✏️ Otro",db:true,d:""}
},
steps:[
{t:"Las palabras que busca tu cliente",s:"pensar como él",b:()=>`${cb(`Mi web es de ${D()}: [qué haces y dónde]. ¿Qué escribiría en Google alguien que necesita lo que ofrezco? Dame 10 búsquedas reales, de más a menos probables.`)}${ok("tienes la lista de búsquedas.")}`},
{t:"Título, descripción y textos",s:"la web",b:()=>`${cb("Este es el código de mi web: [pégalo o dime el repositorio]. Con esas búsquedas, mejora el título de cada página, la descripción que sale en Google y los títulos de las secciones. Añade también un archivo sitemap.xml. Que suene natural, sin repetir palabras a lo loco.")}
<ol><li>Sube los cambios a GitHub (receta <a href="webapp-gratis--cambios.html">Cambia tu web sin romperla</a>).</li></ol>${ok("tus páginas tienen título y descripción, y tienes sitemap.xml.")}`},
{t:"Avisa a Google",s:"Search Console",b:()=>`<ol><li>Entra en <a href="https://search.google.com/search-console" target="_blank" rel="noopener">Google Search Console</a> con tu cuenta de Google.</li><li>Añade tu web. Google te pedirá demostrar que es tuya: si no entiendes el método, haz una captura y pregúntale a Claude.</li><li>En <b>Sitemaps</b>, escribe <code>sitemap.xml</code> y envíalo.</li></ol>
${tip("Funciona mucho mejor con tu propio dominio. Mira la receta «Tu propio dominio».")}${ok("Search Console dice que ha recibido tu sitemap.")}`},
{db:1,t:"Tu ficha de Google Maps",s:"negocio local",b:()=>`<p class="what">Si tienes local, la ficha de Google (Perfil de Empresa) es lo que más te hace aparecer en el mapa.</p><ol><li>Entra en <a href="https://business.google.com" target="_blank" rel="noopener">Perfil de Empresa de Google</a> y crea o reclama tu negocio.</li><li>Pide a Claude la descripción:</li></ol>${cb("Escribe la descripción de mi negocio para Google Maps (máximo 750 caracteres): qué hago, para quién, dónde y qué me diferencia. Sin exagerar.")}
<ol start="3"><li>Pon el enlace a tu web, tu horario y fotos reales.</li></ol>${ok("tu ficha de Google tiene descripción, horario, fotos y enlace a tu web.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"visitas",off:1,t:"Cuántas visitas tienes (sin cookies)",d:"Estadísticas sencillas de tu web con Cloudflare, sin banner de cookies.",
meta:["👩‍🍳 Fácil", "📈 Estadísticas", "🍽 Resultado: sabes cuánta gente visita tu web y qué mira"],
q:"¿Qué quieres saber?",ph:"Di qué te interesa. Ejemplo: si la gente llega a la página de precios",
fin:"Ya ves tus visitas. Mira las estadísticas una vez al mes y pregúntale a Claude qué mejorar.",
def:"general",empty:"[di qué te interesa, arriba]",
apps:{
 general:{n:"Visitas en general",db:false,d:"cuánta gente visita mi web y qué páginas mira"},
 origen:{n:"De dónde llegan",db:false,d:"de dónde llega la gente: Google, redes o enlaces"},
 otra:{n:"✏️ Otra pregunta",db:false,d:""}
},
steps:[
{t:"Activa la analítica de Cloudflare",s:"un interruptor",b:()=>`<p class="what">Cloudflare tiene estadísticas de visitas gratuitas que no usan cookies, así que no necesitas el aviso de cookies por ellas.</p><ol><li>En Cloudflare busca <b>Web Analytics</b> en el menú (suele estar dentro de <b>Analytics &amp; Logs</b>).</li><li>Añade tu web. Si te da un fragmento de código, pídele a Claude que lo añada a tu web y súbelo.</li></ol>
${ok("ves tu web en la lista de Web Analytics.")}`},
{t:"Espera unos días",s:"La paciencia del cocinero",b:()=>`<p class="what">Las estadísticas necesitan visitas para decir algo. Comparte tu web y vuelve dentro de una semana.</p>${ok("han pasado unos días desde que la activaste.")}`},
{t:"Que Claude lo interprete",s:"aprender",b:()=>`${cb(`Estas son las estadísticas de mi web del último mes: [captura o datos]. Quiero saber ${D()}. Dime qué ves y 3 cambios concretos para mejorar.`)}${ok("sabes qué mejorar en tu web.")}`}
]},
/* ---------------------------------------------------------------- */
{s:"claude-code",off:1,t:"Hazla con Claude Code, sin copiar y pegar",d:"Claude trabaja en una carpeta de tu ordenador: crea los archivos, los sube y la publica él.",
meta:["👩‍🍳 Media", "🤖 Agente", "💶 Necesita un plan de pago de Claude"],
q:"¿Qué web quieres?",ph:"Descríbela. Ejemplo: la web de mi estudio de yoga con horarios y reservas",
fin:"Claude ha hecho la web contigo de principio a fin. Así es trabajar con un agente.",
def:"nueva",empty:"[describe aquí tu web, arriba]",
apps:{
 nueva:{n:"Una web nueva",db:false,d:"una web nueva"},
 mejorar:{n:"Mejorar la que ya tengo",db:false,d:"mejorar mi web, que está en mi repositorio de GitHub"},
 otra:{n:"✏️ Otra idea",db:false,d:""}
},
steps:[
{t:"Abre Claude Code",s:"preparar",b:()=>`<p class="what">Claude Code es Claude trabajando en tu ordenador. Puedes usarlo en la app de escritorio de Claude (sin terminal) o en la terminal.</p><ol><li>Si nunca lo has usado, haz antes la receta <a href="primer-agente.html">Tu primer agente</a>.</li><li>Crea una carpeta <b>mi-web</b> y ábrela en Claude Code.</li></ol>${ok("Claude Code está abierto en la carpeta mi-web.")}`},
{t:"Añade el plugin de AMRI (opcional)",s:"la receta, en comando",b:()=>`<p class="what">Con el plugin, Claude sigue este mismo libro paso a paso.</p>${cb("/plugin marketplace add amriwebapp/amri")}${cb("/plugin install amri@amri")}${ok("tienes los comandos que empiezan por /amri:.")}`},
{t:"Pídela",s:"Claude trabaja",b:()=>`${cb(`/amri:webapp-gratis ${D()}: [descríbela]. Explícame cada paso con palabras sencillas antes de hacerlo y pídeme permiso antes de subir o publicar nada.`)}
${tip("¿Sin el plugin? Escribe lo mismo sin el comando del principio.")}
${tip("Las cuentas, los inicios de sesión y los pagos los haces siempre tú: Claude te dirá qué pulsar.")}${ok("Claude ha creado la web, la ha subido a GitHub y te da la dirección publicada.")}`}
]}
]};
