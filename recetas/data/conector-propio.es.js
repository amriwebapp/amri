(window.RECIPE=window.RECIPE||{}).es={
title:"Libro: cocina tu propio conector",
intro:"Un conector deja a Claude usar tus propios datos o tu propia app. Entiende cómo funciona e instala lo necesario una vez; después elige qué conectar: una hoja de datos, una carpeta de notas, un archivo o una API pública. Claude escribe el código.",
meta:["📕 4 recetas","💶 Gratis","🍽 Resultado: Claude usando tus propios datos"],
ing:"Ingredientes (todos gratuitos)",
fin:"Tu cocina está lista. Elige qué quieres conectar.",
R:{key:"libro-mcp",
ing:()=>`<li><b>Claude Desktop</b>: el jefe de cocina. La app de escritorio.</li><li><b>Node.js</b>: el fogón. Programa gratuito para ejecutar tu conector.</li><li><b>El SDK de MCP</b>: la receta base oficial para crear conectores.</li>${DB()?`<li><b>Tus datos</b>: la despensa. Un archivo o carpeta de tu ordenador.</li>`:""}<li><b>Un editor de texto</b>: el cuchillo. Sirve el Bloc de notas; mejor VS Code.</li>`,
steps:[
{t:"Entiende cómo funciona",s:"la idea",b:()=>`<p class="what">MCP (Model Context Protocol) es un idioma común para que Claude hable con otras apps. Un conector es un pequeño programa que ofrece <b>herramientas</b>.</p><ul><li>Cada herramienta tiene un <b>nombre</b>, una <b>descripción</b> y unos <b>datos de entrada</b>.</li><li>Claude lee las descripciones y decide cuándo usarlas.</li><li>Tu conector hace el trabajo y devuelve el resultado.</li></ul>${ok("sabrías explicar qué es una herramienta MCP.")}`},
{t:"Prepara los ingredientes",s:"instalar",b:()=>`<ol><li>Instala <a href="https://claude.ai/download" target="_blank" rel="noopener">Claude Desktop</a> e inicia sesión.</li><li>Instala <a href="https://nodejs.org" target="_blank" rel="noopener">Node.js</a> (versión <b>LTS</b>).</li><li>Crea una carpeta llamada <b>mi-conector</b> en tu carpeta de usuario.</li><li>Abre una terminal (Mac: Terminal; Windows: PowerShell) y comprueba:</li></ol>${cb("node --version")}${ok("la terminal responde con un número de versión.")}`},
{x:1,t:"Depúralo con el Inspector",s:"Opcional · nivel pro",b:()=>`<p class="what">El Inspector oficial de MCP te deja probar las herramientas sin Claude.</p>${cb("npx @modelcontextprotocol/inspector node server.js")}${tip("Se abre una web local donde ves cada herramienta y puedes probarla a mano.")}`},
{x:1,t:"Llévalo a internet",s:"Opcional · siguiente nivel",b:()=>`<p class="what">Un conector local solo funciona en tu ordenador. Para usarlo desde la web o el móvil hay que publicarlo como <b>conector remoto</b> (por ejemplo, en Cloudflare Workers) y añadirlo en <b>Personalizar → Conectores → Añadir conector personalizado</b>, como hicimos con Higgsfield.</p>${cb("Quiero convertir mi servidor MCP en un conector remoto en Cloudflare Workers. Explícame los pasos para principiantes y qué debo tener en cuenta de seguridad.")}`},
{x:1,t:"Seguridad",s:"Siempre · importante",b:()=>`<ol><li>Empieza con herramientas de <b>solo lectura</b>.</li><li>No pongas contraseñas ni claves dentro del código: usa variables de entorno.</li><li>Instala solo conectores de fuentes en las que confíes.</li></ol>`},
{x:1,t:"Sin tocar archivos de configuración",s:"Opcional · con un clic",b:()=>`<p class="what">Claude Desktop también instala conectores como <b>extensiones</b>: un archivo que se abre con doble clic, sin editar <code>claude_desktop_config.json</code>.</p><ol><li>En Claude Desktop abre <b>Ajustes → Extensiones</b> (<i>Settings → Extensions</i>) para ver las que ya existen.</li><li>Para el tuyo, pídele a Claude:</li></ol>${cb("Empaqueta mi servidor MCP de la carpeta mi-conector como extensión de Claude Desktop (archivo .mcpb) y explícame cómo instalarla con doble clic.")}${tip("Así puedes pasarle tu conector a otra persona sin explicarle cómo editar archivos.")}`}
]},
recetas:[
{s:"hoja",t:"Conecta tu hoja de datos",d:"Claude busca, filtra y suma en tu hoja de clientes (CSV), sin que la subas cada vez.",
meta:["👩‍🍳 Avanzada","📊 CSV","🍽 Resultado: un conector para tu hoja"],
q:"¿Qué hay en tu hoja?",ph:"Describe las columnas. Ejemplo: nombre, ciudad, cuota mensual y fecha de alta",
fin:"Claude ya consulta tu hoja. Cuando la actualices, guarda el CSV encima y listo.",
def:"csv",empty:"[describe tu hoja, arriba]",
apps:{csv:{n:"Clientes",db:true,d:"consultar una hoja de cálculo (CSV) con mis clientes: buscar por nombre, filtrar y sumar importes"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Prepara una copia en CSV",s:"los datos",b:()=>`<ol><li>Crea la carpeta <b>mi-conector</b> en tu carpeta de usuario.</li><li>Guarda <b>una copia</b> de tu hoja como CSV (Archivo → Guardar como → CSV) dentro, con el nombre <code>datos.csv</code>.</li><li>Comprueba que la primera fila tiene los nombres de las columnas.</li></ol>${ok("datos.csv está en la carpeta.")}`},
{t:"Pide el código",s:"Claude programa",b:()=>`${cb(`Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo, sin TypeScript) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para ${D()}.\n\nMi archivo es datos.csv, en la misma carpeta, con estas columnas: [tus columnas].\n\nHerramientas (solo lectura, nunca modifican el archivo):\n- buscar(texto): filas que contienen el texto.\n- filtrar(columna, valor): filas donde la columna coincide.\n- sumar(columna, filtro opcional): la suma de una columna numérica.\n\nDame package.json, server.js, los comandos para instalarlo y el bloque para claude_desktop_config.json. Explícame cada archivo en una frase.`)}${ok("tienes package.json y server.js.")}`},
{t:"Instálalo",s:"terminal y configuración",b:()=>`<ol><li>Guarda los dos archivos en <b>mi-conector</b> y, en la terminal:</li></ol>${cb("cd mi-conector\nnpm install")}<ol start="2"><li>En Claude Desktop: <b>Settings → Developer → Edit Config</b> y añade el bloque que te dio Claude, con la ruta completa a server.js.</li><li>Cierra Claude Desktop del todo y vuelve a abrirlo.</li></ol>${tip("¿Error en rojo? Cópialo entero y pégaselo a Claude.")}${ok("en un chat nuevo, «mi-conector» aparece en la lista de herramientas.")}`},
{t:"Pruébalo con preguntas reales",s:"el examen",b:()=>`${cb("Usando mi-conector: ¿cuántos clientes tengo en [ciudad]? ¿Cuánto suman sus cuotas? ¿Quién se dio de alta este año?")}<p class="what">Comprueba dos respuestas abriendo la hoja.</p>${ok("las respuestas coinciden con tu hoja.")}`}
]},
{s:"notas",t:"Conecta tu carpeta de notas",d:"Claude busca y lee tus notas en archivos de texto de tu ordenador.",
meta:["👩‍🍳 Avanzada","🗒 Notas","🍽 Resultado: un conector para tus notas"],
q:"¿Qué notas tienes?",ph:"Describe la carpeta. Ejemplo: 200 notas en .md de mis clases y reuniones",
fin:"Claude ya busca en tus notas. Lo que añadas a la carpeta, lo encontrará.",
def:"notas",empty:"[describe tus notas, arriba]",
apps:{notas:{n:"Carpeta de notas",db:true,d:"buscar y leer mis notas en archivos de texto de una carpeta de mi ordenador"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Elige la carpeta",s:"los datos",b:()=>`<ol><li>Crea la carpeta <b>mi-conector</b>.</li><li>Decide qué carpeta de notas quieres que lea (solo esa) y apunta su ruta completa.</li></ol>${tip("⚠️ No le des acceso a carpetas con contraseñas, documentos de identidad o datos de otras personas.")}${ok("tienes la ruta de tu carpeta de notas.")}`},
{t:"Pide el código",s:"Claude programa",b:()=>`${cb(`Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para ${D()}.\n\nLa carpeta de notas es: [ruta completa]. Archivos .md y .txt.\n\nHerramientas (solo lectura):\n- listar(): títulos de las notas, con fecha.\n- buscar(texto): las notas que contienen el texto, con una línea de contexto.\n- leer(nombre): el contenido de una nota.\n\nQue nunca lea fuera de esa carpeta (ni con ../). Dame package.json, server.js, los comandos y el bloque para claude_desktop_config.json.`)}${ok("tienes los archivos.")}`},
{t:"Instálalo",s:"terminal y configuración",b:()=>`${cb("cd mi-conector\nnpm install")}<ol><li>Añade el bloque a <b>Settings → Developer → Edit Config</b> con la ruta completa a server.js.</li><li>Cierra y abre Claude Desktop.</li></ol>${ok("«mi-conector» aparece en las herramientas.")}`},
{t:"Pruébalo",s:"el examen",b:()=>`${cb("Usando mi-conector, busca lo que tengo sobre [tema] y resúmemelo. Cita el nombre de cada nota.")}<p class="what">Prueba también que no sale de la carpeta: «lee el archivo ../secreto.txt» debe fallar.</p>${ok("encuentra tus notas y no puede leer fuera de la carpeta.")}`}
]},
{s:"recetario",t:"Conecta un archivo propio",d:"Claude consulta un archivo tuyo (por ejemplo, tu recetario en JSON) por ingrediente y tiempo.",
meta:["👩‍🍳 Avanzada","📁 JSON","🍽 Resultado: un conector para tu archivo"],
q:"¿Qué archivo?",ph:"Describe qué guarda. Ejemplo: mis 80 recetas con ingredientes, tiempo y raciones",
fin:"Claude ya consulta tu archivo. Pídele menús de la semana con lo que tienes en la nevera.",
def:"recetas",empty:"[describe tu archivo, arriba]",
apps:{recetas:{n:"Mi recetario",db:true,d:"buscar recetas en mi recetario (un archivo JSON) por ingrediente y tiempo"},
 otra:{n:"✏️ A mi manera",db:true,d:""}},
steps:[
{t:"Crea el archivo",s:"los datos",b:()=>`<p class="what">Si tus datos están en notas o en Word, pide a Claude que los pase a JSON:</p>${cb("Convierte estas recetas en un archivo JSON con, para cada una: nombre, ingredientes (lista), minutos y raciones. [pega tus recetas]")}<ol><li>Guárdalo como <code>datos.json</code> en la carpeta <b>mi-conector</b>.</li></ol>${ok("datos.json está en la carpeta.")}`},
{t:"Pide el código",s:"Claude programa",b:()=>`${cb(`Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para ${D()}.\n\nArchivo: datos.json en la misma carpeta.\n\nHerramientas (solo lectura):\n- por_ingrediente(ingredientes): recetas que usan esos ingredientes.\n- rapidas(max_minutos): recetas que se hacen en ese tiempo o menos.\n- detalle(nombre): la receta completa.\n\nDame package.json, server.js, los comandos y el bloque para claude_desktop_config.json.`)}${ok("tienes los archivos.")}`},
{t:"Instálalo",s:"terminal y configuración",b:()=>`${cb("cd mi-conector\nnpm install")}<ol><li>Añade el bloque en <b>Settings → Developer → Edit Config</b> y reinicia Claude Desktop.</li></ol>${ok("«mi-conector» aparece en las herramientas.")}`},
{t:"Pruébalo",s:"el examen",b:()=>`${cb("Usando mi-conector: tengo pollo, limón y 30 minutos. ¿Qué puedo hacer? Después, hazme el menú de la semana con recetas de menos de 40 minutos.")}${ok("te propone recetas de tu archivo, no inventadas.")}`}
]},
{s:"api",t:"Conecta una API pública",d:"Claude consulta el tiempo de cualquier ciudad con la API gratuita de Open-Meteo, sin clave.",
meta:["👩‍🍳 Avanzada","🌦 API","🍽 Resultado: un conector a una API de internet"],
q:"¿Qué quieres consultar?",ph:"Di qué. Ejemplo: si lloverá este fin de semana donde tengo un evento",
fin:"Has conectado Claude a un servicio de internet. Así funcionan muchos conectores de verdad.",
def:"tiempo",empty:"[di qué quieres consultar, arriba]",
apps:{tiempo:{n:"El tiempo",db:false,d:"consultar el tiempo de cualquier ciudad usando la API gratuita de Open-Meteo, sin clave"},
 otra:{n:"✏️ A mi manera",db:false,d:""}},
steps:[
{t:"Qué es una API",s:"la idea",b:()=>`<p class="what">Una API es una puerta para que dos programas hablen. Open-Meteo ofrece el tiempo gratis y sin clave: perfecta para aprender.</p>${ok("sabes qué es una API.")}`},
{t:"Pide el código",s:"Claude programa",b:()=>`${cb(`Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para ${D()}.\n\nHerramientas:\n- previsión(ciudad, días): busca las coordenadas con la API de geocodificación de Open-Meteo y devuelve temperatura máxima y mínima y probabilidad de lluvia de cada día.\n\nUsa fetch, sin claves. Si la ciudad no existe, devuelve un mensaje claro. Dame package.json, server.js, los comandos y el bloque para claude_desktop_config.json.`)}${ok("tienes los archivos.")}`},
{t:"Instálalo",s:"terminal y configuración",b:()=>`<ol><li>Crea la carpeta <b>mi-conector</b>, guarda los archivos y en la terminal:</li></ol>${cb("cd mi-conector\nnpm install")}<ol start="2"><li>Añade el bloque en <b>Settings → Developer → Edit Config</b> y reinicia Claude Desktop.</li></ol>${ok("«mi-conector» aparece en las herramientas.")}`},
{t:"Pruébalo",s:"el examen",b:()=>`${cb("Usando mi-conector: ¿lloverá este fin de semana en [ciudad]? ¿Y en una ciudad que no existe, como Pueblolandia?")}${ok("te da la previsión real y un mensaje claro para la ciudad inventada.")}`}
]}
]};
