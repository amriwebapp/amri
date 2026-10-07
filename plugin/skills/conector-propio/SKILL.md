---
name: conector-propio
description: "Receta de AMRI «Cocina tu propio conector». Que Claude use tus propios datos: tu hoja de cálculo, tu carpeta de notas, un archivo propio o una API pública. Claude escribe el código. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Cocina tu propio conector

Que Claude use tus propios datos: tu hoja de cálculo, tu carpeta de notas, un archivo propio o una API pública. Claude escribe el código.

- 📕 4 recetas
- ⏱ 40-60 min cada una
- 💶 Gratis
- 🍽 Resultado: Claude usando tus propios datos
- Categoría: Claude a tu medida
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/conector-propio.html

## Cómo cocinar esta receta

Eres el chef de AMRI y cocinas esta receta **con** la persona usuaria, que puede no saber programar.

- **Su idea:** $ARGUMENTS
  Si está vacía, pregúntale qué quiere hacer con una sola pregunta y ofrece dos o tres ejemplos de la lista «Ideas de ejemplo».
- Habla en el idioma de la persona, con frases cortas y sin jerga. Explica cada término nuevo en una línea.
- Antes de empezar, resume el plan en 3-5 puntos y pide confirmación.
- **Haz tú todo lo que puedas** con tus herramientas: crear y editar archivos, la terminal, git, `gh`, `npx wrangler`, npm y los conectores (MCP) que estén disponibles. Los pasos de abajo están escritos para alguien que usa Claude en el chat: adáptalos. Donde diga «copia este mensaje y pégalo en Claude», haz tú directamente lo que pide el mensaje.
- **Lo hace la persona, nunca tú:** crear cuentas, iniciar sesión, autorizar accesos, aceptar condiciones y pagar. Dile exactamente qué pulsar, lanza el inicio de sesión de la herramienta cuando exista (`gh auth login`, `npx wrangler login`…) y espera a que confirme.
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «publicable» de Supabase, antes llamada «anon») sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes (todos gratuitos)

- **Claude Desktop**: el jefe de cocina. La app de escritorio.
- **Node.js**: el fogón. Programa gratuito para ejecutar tu conector.
- **El SDK de MCP**: la receta base oficial para crear conectores.
- **Tus datos**: la despensa. Un archivo o carpeta de tu ordenador.
- **Un editor de texto**: el cuchillo. Sirve el Bloc de notas; mejor VS Code.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Entiende cómo funciona
_3 min · la idea_

MCP (Model Context Protocol) es un idioma común para que Claude hable con otras apps. Un conector es un pequeño programa que ofrece **herramientas**.

- Cada herramienta tiene un **nombre**, una **descripción** y unos **datos de entrada**.
- Claude lee las descripciones y decide cuándo usarlas.
- Tu conector hace el trabajo y devuelve el resultado.

**✅ Comprobación:** sabrías explicar qué es una herramienta MCP.

### 2. Prepara los ingredientes
_10 min · instalar_

- Instala [Claude Desktop](https://claude.ai/download) e inicia sesión.
- Instala [Node.js](https://nodejs.org) (versión **LTS**).
- Crea una carpeta llamada **mi-conector** en tu carpeta de usuario.
- Abre una terminal (Mac: Terminal; Windows: PowerShell) y comprueba:

```text
node --version
```

**✅ Comprobación:** la terminal responde con un número de versión.

## Recetas del libro

### Receta 1: Conecta tu hoja de datos

Claude busca, filtra y suma en tu hoja de clientes (CSV), sin que la subas cada vez.

- ⏱ 50 min
- 👩‍🍳 Avanzada
- 📊 CSV
- 🍽 Resultado: un conector para tu hoja
- Versión web: https://amri.es/recetas/conector-propio--hoja.html
- Ideas de ejemplo:
  - Clientes: consultar una hoja de cálculo (CSV) con mis clientes: buscar por nombre, filtrar y sumar importes

#### 1. Prepara una copia en CSV
_5 min · los datos_

- Crea la carpeta **mi-conector** en tu carpeta de usuario.
- Guarda **una copia** de tu hoja como CSV (Archivo → Guardar como → CSV) dentro, con el nombre `datos.csv`.
- Comprueba que la primera fila tiene los nombres de las columnas.

**✅ Comprobación:** datos.csv está en la carpeta.

#### 2. Pide el código
_10 min · Claude programa_

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo, sin TypeScript) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para [la idea de la persona].

Mi archivo es datos.csv, en la misma carpeta, con estas columnas: [tus columnas].

Herramientas (solo lectura, nunca modifican el archivo):
- buscar(texto): filas que contienen el texto.
- filtrar(columna, valor): filas donde la columna coincide.
- sumar(columna, filtro opcional): la suma de una columna numérica.

Dame package.json, server.js, los comandos para instalarlo y el bloque para claude_desktop_config.json. Explícame cada archivo en una frase.
```

**✅ Comprobación:** tienes package.json y server.js.

#### 3. Instálalo
_10 min · terminal y configuración_

- Guarda los dos archivos en **mi-conector** y, en la terminal:

```text
cd mi-conector
npm install
```

- En Claude Desktop: **Settings → Developer → Edit Config** y añade el bloque que te dio Claude, con la ruta completa a server.js.
- Cierra Claude Desktop del todo y vuelve a abrirlo.

> 💡 ¿Error en rojo? Cópialo entero y pégaselo a Claude.

**✅ Comprobación:** en un chat nuevo, «mi-conector» aparece en la lista de herramientas.

#### 4. Pruébalo con preguntas reales
_10 min · el examen_

```text
Usando mi-conector: ¿cuántos clientes tengo en [ciudad]? ¿Cuánto suman sus cuotas? ¿Quién se dio de alta este año?
```

Comprueba dos respuestas abriendo la hoja.

**✅ Comprobación:** las respuestas coinciden con tu hoja.

**Al terminar:** Claude ya consulta tu hoja. Cuando la actualices, guarda el CSV encima y listo.

### Receta 2: Conecta tu carpeta de notas

Claude busca y lee tus notas en archivos de texto de tu ordenador.

- ⏱ 50 min
- 👩‍🍳 Avanzada
- 🗒 Notas
- 🍽 Resultado: un conector para tus notas
- Versión web: https://amri.es/recetas/conector-propio--notas.html
- Ideas de ejemplo:
  - Carpeta de notas: buscar y leer mis notas en archivos de texto de una carpeta de mi ordenador

#### 1. Elige la carpeta
_5 min · los datos_

- Crea la carpeta **mi-conector**.
- Decide qué carpeta de notas quieres que lea (solo esa) y apunta su ruta completa.

> 💡 ⚠️ No le des acceso a carpetas con contraseñas, documentos de identidad o datos de otras personas.

**✅ Comprobación:** tienes la ruta de tu carpeta de notas.

#### 2. Pide el código
_10 min · Claude programa_

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para [la idea de la persona].

La carpeta de notas es: [ruta completa]. Archivos .md y .txt.

Herramientas (solo lectura):
- listar(): títulos de las notas, con fecha.
- buscar(texto): las notas que contienen el texto, con una línea de contexto.
- leer(nombre): el contenido de una nota.

Que nunca lea fuera de esa carpeta (ni con ../). Dame package.json, server.js, los comandos y el bloque para claude_desktop_config.json.
```

**✅ Comprobación:** tienes los archivos.

#### 3. Instálalo
_10 min · terminal y configuración_

```text
cd mi-conector
npm install
```

- Añade el bloque a **Settings → Developer → Edit Config** con la ruta completa a server.js.
- Cierra y abre Claude Desktop.

**✅ Comprobación:** «mi-conector» aparece en las herramientas.

#### 4. Pruébalo
_10 min · el examen_

```text
Usando mi-conector, busca lo que tengo sobre [tema] y resúmemelo. Cita el nombre de cada nota.
```

Prueba también que no sale de la carpeta: «lee el archivo ../secreto.txt» debe fallar.

**✅ Comprobación:** encuentra tus notas y no puede leer fuera de la carpeta.

**Al terminar:** Claude ya busca en tus notas. Lo que añadas a la carpeta, lo encontrará.

### Receta 3: Conecta un archivo propio

Claude consulta un archivo tuyo (por ejemplo, tu recetario en JSON) por ingrediente y tiempo.

- ⏱ 50 min
- 👩‍🍳 Avanzada
- 📁 JSON
- 🍽 Resultado: un conector para tu archivo
- Versión web: https://amri.es/recetas/conector-propio--recetario.html
- Ideas de ejemplo:
  - Mi recetario: buscar recetas en mi recetario (un archivo JSON) por ingrediente y tiempo

#### 1. Crea el archivo
_10 min · los datos_

Si tus datos están en notas o en Word, pide a Claude que los pase a JSON:

```text
Convierte estas recetas en un archivo JSON con, para cada una: nombre, ingredientes (lista), minutos y raciones. [pega tus recetas]
```

- Guárdalo como `datos.json` en la carpeta **mi-conector**.

**✅ Comprobación:** datos.json está en la carpeta.

#### 2. Pide el código
_10 min · Claude programa_

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para [la idea de la persona].

Archivo: datos.json en la misma carpeta.

Herramientas (solo lectura):
- por_ingrediente(ingredientes): recetas que usan esos ingredientes.
- rapidas(max_minutos): recetas que se hacen en ese tiempo o menos.
- detalle(nombre): la receta completa.

Dame package.json, server.js, los comandos y el bloque para claude_desktop_config.json.
```

**✅ Comprobación:** tienes los archivos.

#### 3. Instálalo
_10 min · terminal y configuración_

```text
cd mi-conector
npm install
```

- Añade el bloque en **Settings → Developer → Edit Config** y reinicia Claude Desktop.

**✅ Comprobación:** «mi-conector» aparece en las herramientas.

#### 4. Pruébalo
_10 min · el examen_

```text
Usando mi-conector: tengo pollo, limón y 30 minutos. ¿Qué puedo hacer? Después, hazme el menú de la semana con recetas de menos de 40 minutos.
```

**✅ Comprobación:** te propone recetas de tu archivo, no inventadas.

**Al terminar:** Claude ya consulta tu archivo. Pídele menús de la semana con lo que tienes en la nevera.

### Receta 4: Conecta una API pública

Claude consulta el tiempo de cualquier ciudad con la API gratuita de Open-Meteo, sin clave.

- ⏱ 40 min
- 👩‍🍳 Avanzada
- 🌦 API
- 🍽 Resultado: un conector a una API de internet
- Versión web: https://amri.es/recetas/conector-propio--api.html
- Ideas de ejemplo:
  - El tiempo: consultar el tiempo de cualquier ciudad usando la API gratuita de Open-Meteo, sin clave

#### 1. Qué es una API
_3 min · la idea_

Una API es una puerta para que dos programas hablen. Open-Meteo ofrece el tiempo gratis y sin clave: perfecta para aprender.

**✅ Comprobación:** sabes qué es una API.

#### 2. Pide el código
_10 min · Claude programa_

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo) con el SDK oficial @modelcontextprotocol/sdk y transporte stdio, para [la idea de la persona].

Herramientas:
- previsión(ciudad, días): busca las coordenadas con la API de geocodificación de Open-Meteo y devuelve temperatura máxima y mínima y probabilidad de lluvia de cada día.

Usa fetch, sin claves. Si la ciudad no existe, devuelve un mensaje claro. Dame package.json, server.js, los comandos y el bloque para claude_desktop_config.json.
```

**✅ Comprobación:** tienes los archivos.

#### 3. Instálalo
_12 min · terminal y configuración_

- Crea la carpeta **mi-conector**, guarda los archivos y en la terminal:

```text
cd mi-conector
npm install
```

- Añade el bloque en **Settings → Developer → Edit Config** y reinicia Claude Desktop.

**✅ Comprobación:** «mi-conector» aparece en las herramientas.

#### 4. Pruébalo
_10 min · el examen_

```text
Usando mi-conector: ¿lloverá este fin de semana en [ciudad]? ¿Y en una ciudad que no existe, como Pueblolandia?
```

**✅ Comprobación:** te da la previsión real y un mensaje claro para la ciudad inventada.

**Al terminar:** Has conectado Claude a un servicio de internet. Así funcionan muchos conectores de verdad.

## Al terminar

Tu cocina está lista. Elige qué quieres conectar.

## Extras (opcionales, después de servir)

### Extra 1. Depúralo con el Inspector
_Opcional · nivel pro_

El Inspector oficial de MCP te deja probar las herramientas sin Claude.

```text
npx @modelcontextprotocol/inspector node server.js
```

> 💡 Se abre una web local donde ves cada herramienta y puedes probarla a mano.

### Extra 2. Llévalo a internet
_Opcional · siguiente nivel_

Un conector local solo funciona en tu ordenador. Para usarlo desde la web o el móvil hay que publicarlo como **conector remoto** (por ejemplo, en Cloudflare Workers) y añadirlo en **Personalizar → Conectores → Añadir conector personalizado**, como hicimos con Higgsfield.

```text
Quiero convertir mi servidor MCP en un conector remoto en Cloudflare Workers. Explícame los pasos para principiantes y qué debo tener en cuenta de seguridad.
```

### Extra 3. Seguridad
_Siempre · importante_

- Empieza con herramientas de **solo lectura**.
- No pongas contraseñas ni claves dentro del código: usa variables de entorno.
- Instala solo conectores de fuentes en las que confíes.

### Extra 4. Sin tocar archivos de configuración
_Opcional · con un clic_

Claude Desktop también instala conectores como **extensiones**: un archivo que se abre con doble clic, sin editar `claude_desktop_config.json`.

- En Claude Desktop abre **Ajustes → Extensiones** (_Settings → Extensions_) para ver las que ya existen.
- Para el tuyo, pídele a Claude:

```text
Empaqueta mi servidor MCP de la carpeta mi-conector como extensión de Claude Desktop (archivo .mcpb) y explícame cómo instalarla con doble clic.
```

> 💡 Así puedes pasarle tu conector a otra persona sin explicarle cómo editar archivos.

## Sigue con

- `/amri:primer-agente` · Tu primer agente: Claude trabaja por ti
- `/amri:skills-propias` · Enséñale tu método con Skills
- `/amri:chef` · combina varias recetas en un proyecto propio
