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

Claude busca, filtra y suma en tu hoja de clientes (CSV).

- ⏱ 50 min
- 👩‍🍳 Avanzada
- 📊 CSV
- 🍽 Resultado: un conector para tu hoja
- Versión web: https://amri.es/recetas/conector-propio--hoja.html
- Ideas de ejemplo:
  - Mi hoja de datos: consultar una hoja de cálculo (CSV) con mis clientes: buscar por nombre, filtrar y sumar importes

#### 1. Pide el código a Claude
_10 min · la receta_

Tú describes; Claude programa.

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo, sin TypeScript) usando el SDK oficial @modelcontextprotocol/sdk, con transporte stdio.

Objetivo: [la idea de la persona].

Dame:
1) package.json
2) server.js con 2 o 3 herramientas pequeñas, con descripciones muy claras
3) los comandos exactos para instalarlo
4) el bloque para claude_desktop_config.json

Explícame cada archivo en una frase. Soy principiante.
```

**¿Por qué pocas herramientas?**

- Cada herramienta hace una cosa bien.
- Descripciones claras = Claude acierta cuándo usarlas.
- Siempre puedes añadir más después.

**✅ Comprobación:** Claude te ha dado los archivos y las instrucciones.

#### 2. Guarda e instala
_5 min · montar_

- Guarda **package.json** y **server.js** dentro de **mi-conector**.
- En la terminal, entra en la carpeta e instala:

```text
cd mi-conector
npm install
```

> 💡 Si sale algún error en rojo, cópialo entero y pégaselo a Claude. Es la forma más rápida de arreglarlo.

**✅ Comprobación:** aparece una carpeta node_modules dentro de mi-conector.

#### 3. Pon tus datos en la despensa
_3 min · los datos_

- Copia tu archivo de datos dentro de **mi-conector** (por ejemplo, **datos.csv**).
- Si es un Excel, guárdalo como **CSV** (Archivo → Guardar como → CSV).
- Comprueba que el nombre coincide con el que usa server.js.

> 💡 Empieza con una copia de tus datos, no con el original.

**✅ Comprobación:** el archivo está en la carpeta con el nombre correcto.

#### 4. Conéctalo a Claude Desktop
_5 min · el enchufe_

- En Claude Desktop: **Settings → Developer → Edit Config**.
- Abre **claude_desktop_config.json** y añade tu conector (cambia la ruta por la tuya completa):

```text
{
  "mcpServers": {
    "mi-conector": {
      "command": "node",
      "args": ["/ruta/completa/a/mi-conector/server.js"]
    }
  }
}
```

- Si ya había otros conectores, añade solo el bloque **«mi-conector»** dentro de **mcpServers**.
- Guarda y **cierra Claude Desktop del todo**. Vuelve a abrirlo.

**¿Cómo sé la ruta completa?**

- Mac: arrastra server.js a la Terminal y se escribe solo.
- Windows: mantén Mayús, clic derecho en server.js → «Copiar como ruta». Usa barras dobles \\ o barras /.

**✅ Comprobación:** en un chat nuevo, tu conector aparece en la lista de herramientas.

#### 5. Pruébalo
_5 min · a probar_

```text
¿Qué herramientas tienes de «mi-conector»? Usa una de ellas con un ejemplo sencillo y explícame qué ha pasado.
```

**✅ Comprobación:** Claude usa tu herramienta y te da un resultado con tus datos.

**Al terminar:** Has cocinado tu propio conector: Claude ya puede usar tus datos con herramientas que tú has definido. Esto es exactamente lo que hay detrás de Canva, Notion o Higgsfield.

### Receta 2: Conecta tu carpeta de notas

Claude busca y lee tus notas en archivos de texto de tu ordenador.

- ⏱ 50 min
- 👩‍🍳 Avanzada
- 🗒 Notas
- 🍽 Resultado: un conector para tus notas
- Versión web: https://amri.es/recetas/conector-propio--notas.html
- Ideas de ejemplo:
  - Mi carpeta de notas: buscar y leer mis notas en archivos de texto de una carpeta de mi ordenador

#### 1. Pide el código a Claude
_10 min · la receta_

Tú describes; Claude programa.

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo, sin TypeScript) usando el SDK oficial @modelcontextprotocol/sdk, con transporte stdio.

Objetivo: [la idea de la persona].

Dame:
1) package.json
2) server.js con 2 o 3 herramientas pequeñas, con descripciones muy claras
3) los comandos exactos para instalarlo
4) el bloque para claude_desktop_config.json

Explícame cada archivo en una frase. Soy principiante.
```

**¿Por qué pocas herramientas?**

- Cada herramienta hace una cosa bien.
- Descripciones claras = Claude acierta cuándo usarlas.
- Siempre puedes añadir más después.

**✅ Comprobación:** Claude te ha dado los archivos y las instrucciones.

#### 2. Guarda e instala
_5 min · montar_

- Guarda **package.json** y **server.js** dentro de **mi-conector**.
- En la terminal, entra en la carpeta e instala:

```text
cd mi-conector
npm install
```

> 💡 Si sale algún error en rojo, cópialo entero y pégaselo a Claude. Es la forma más rápida de arreglarlo.

**✅ Comprobación:** aparece una carpeta node_modules dentro de mi-conector.

#### 3. Pon tus datos en la despensa
_3 min · los datos_

- Copia tu archivo de datos dentro de **mi-conector** (por ejemplo, **datos.csv**).
- Si es un Excel, guárdalo como **CSV** (Archivo → Guardar como → CSV).
- Comprueba que el nombre coincide con el que usa server.js.

> 💡 Empieza con una copia de tus datos, no con el original.

**✅ Comprobación:** el archivo está en la carpeta con el nombre correcto.

#### 4. Conéctalo a Claude Desktop
_5 min · el enchufe_

- En Claude Desktop: **Settings → Developer → Edit Config**.
- Abre **claude_desktop_config.json** y añade tu conector (cambia la ruta por la tuya completa):

```text
{
  "mcpServers": {
    "mi-conector": {
      "command": "node",
      "args": ["/ruta/completa/a/mi-conector/server.js"]
    }
  }
}
```

- Si ya había otros conectores, añade solo el bloque **«mi-conector»** dentro de **mcpServers**.
- Guarda y **cierra Claude Desktop del todo**. Vuelve a abrirlo.

**¿Cómo sé la ruta completa?**

- Mac: arrastra server.js a la Terminal y se escribe solo.
- Windows: mantén Mayús, clic derecho en server.js → «Copiar como ruta». Usa barras dobles \\ o barras /.

**✅ Comprobación:** en un chat nuevo, tu conector aparece en la lista de herramientas.

#### 5. Pruébalo
_5 min · a probar_

```text
¿Qué herramientas tienes de «mi-conector»? Usa una de ellas con un ejemplo sencillo y explícame qué ha pasado.
```

**✅ Comprobación:** Claude usa tu herramienta y te da un resultado con tus datos.

**Al terminar:** Has cocinado tu propio conector: Claude ya puede usar tus datos con herramientas que tú has definido. Esto es exactamente lo que hay detrás de Canva, Notion o Higgsfield.

### Receta 3: Conecta un archivo propio

Claude consulta un archivo tuyo (por ejemplo, tu recetario) por ingrediente y tiempo.

- ⏱ 50 min
- 👩‍🍳 Avanzada
- 📁 JSON
- 🍽 Resultado: un conector para tu archivo
- Versión web: https://amri.es/recetas/conector-propio--recetario.html
- Ideas de ejemplo:
  - Mi recetario: buscar recetas en mi recetario (un archivo JSON) por ingrediente y tiempo

#### 1. Pide el código a Claude
_10 min · la receta_

Tú describes; Claude programa.

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo, sin TypeScript) usando el SDK oficial @modelcontextprotocol/sdk, con transporte stdio.

Objetivo: [la idea de la persona].

Dame:
1) package.json
2) server.js con 2 o 3 herramientas pequeñas, con descripciones muy claras
3) los comandos exactos para instalarlo
4) el bloque para claude_desktop_config.json

Explícame cada archivo en una frase. Soy principiante.
```

**¿Por qué pocas herramientas?**

- Cada herramienta hace una cosa bien.
- Descripciones claras = Claude acierta cuándo usarlas.
- Siempre puedes añadir más después.

**✅ Comprobación:** Claude te ha dado los archivos y las instrucciones.

#### 2. Guarda e instala
_5 min · montar_

- Guarda **package.json** y **server.js** dentro de **mi-conector**.
- En la terminal, entra en la carpeta e instala:

```text
cd mi-conector
npm install
```

> 💡 Si sale algún error en rojo, cópialo entero y pégaselo a Claude. Es la forma más rápida de arreglarlo.

**✅ Comprobación:** aparece una carpeta node_modules dentro de mi-conector.

#### 3. Pon tus datos en la despensa
_3 min · los datos_

- Copia tu archivo de datos dentro de **mi-conector** (por ejemplo, **datos.csv**).
- Si es un Excel, guárdalo como **CSV** (Archivo → Guardar como → CSV).
- Comprueba que el nombre coincide con el que usa server.js.

> 💡 Empieza con una copia de tus datos, no con el original.

**✅ Comprobación:** el archivo está en la carpeta con el nombre correcto.

#### 4. Conéctalo a Claude Desktop
_5 min · el enchufe_

- En Claude Desktop: **Settings → Developer → Edit Config**.
- Abre **claude_desktop_config.json** y añade tu conector (cambia la ruta por la tuya completa):

```text
{
  "mcpServers": {
    "mi-conector": {
      "command": "node",
      "args": ["/ruta/completa/a/mi-conector/server.js"]
    }
  }
}
```

- Si ya había otros conectores, añade solo el bloque **«mi-conector»** dentro de **mcpServers**.
- Guarda y **cierra Claude Desktop del todo**. Vuelve a abrirlo.

**¿Cómo sé la ruta completa?**

- Mac: arrastra server.js a la Terminal y se escribe solo.
- Windows: mantén Mayús, clic derecho en server.js → «Copiar como ruta». Usa barras dobles \\ o barras /.

**✅ Comprobación:** en un chat nuevo, tu conector aparece en la lista de herramientas.

#### 5. Pruébalo
_5 min · a probar_

```text
¿Qué herramientas tienes de «mi-conector»? Usa una de ellas con un ejemplo sencillo y explícame qué ha pasado.
```

**✅ Comprobación:** Claude usa tu herramienta y te da un resultado con tus datos.

**Al terminar:** Has cocinado tu propio conector: Claude ya puede usar tus datos con herramientas que tú has definido. Esto es exactamente lo que hay detrás de Canva, Notion o Higgsfield.

### Receta 4: Conecta una API pública

Claude consulta el tiempo de cualquier ciudad con una API gratuita, sin clave.

- ⏱ 40 min
- 👩‍🍳 Avanzada
- 🌦 API
- 🍽 Resultado: un conector a una API
- Versión web: https://amri.es/recetas/conector-propio--api.html
- Ideas de ejemplo:
  - Una API pública: consultar el tiempo de cualquier ciudad usando la API gratuita de Open-Meteo, sin clave

#### 1. Pide el código a Claude
_10 min · la receta_

Tú describes; Claude programa.

```text
Quiero crear mi propio servidor MCP en Node.js (JavaScript sencillo, sin TypeScript) usando el SDK oficial @modelcontextprotocol/sdk, con transporte stdio.

Objetivo: [la idea de la persona].

Dame:
1) package.json
2) server.js con 2 o 3 herramientas pequeñas, con descripciones muy claras
3) los comandos exactos para instalarlo
4) el bloque para claude_desktop_config.json

Explícame cada archivo en una frase. Soy principiante.
```

**¿Por qué pocas herramientas?**

- Cada herramienta hace una cosa bien.
- Descripciones claras = Claude acierta cuándo usarlas.
- Siempre puedes añadir más después.

**✅ Comprobación:** Claude te ha dado los archivos y las instrucciones.

#### 2. Guarda e instala
_5 min · montar_

- Guarda **package.json** y **server.js** dentro de **mi-conector**.
- En la terminal, entra en la carpeta e instala:

```text
cd mi-conector
npm install
```

> 💡 Si sale algún error en rojo, cópialo entero y pégaselo a Claude. Es la forma más rápida de arreglarlo.

**✅ Comprobación:** aparece una carpeta node_modules dentro de mi-conector.

#### 3. Pon tus datos en la despensa
_3 min · los datos_

- Copia tu archivo de datos dentro de **mi-conector** (por ejemplo, **datos.csv**).
- Si es un Excel, guárdalo como **CSV** (Archivo → Guardar como → CSV).
- Comprueba que el nombre coincide con el que usa server.js.

> 💡 Empieza con una copia de tus datos, no con el original.

**✅ Comprobación:** el archivo está en la carpeta con el nombre correcto.

#### 4. Conéctalo a Claude Desktop
_5 min · el enchufe_

- En Claude Desktop: **Settings → Developer → Edit Config**.
- Abre **claude_desktop_config.json** y añade tu conector (cambia la ruta por la tuya completa):

```text
{
  "mcpServers": {
    "mi-conector": {
      "command": "node",
      "args": ["/ruta/completa/a/mi-conector/server.js"]
    }
  }
}
```

- Si ya había otros conectores, añade solo el bloque **«mi-conector»** dentro de **mcpServers**.
- Guarda y **cierra Claude Desktop del todo**. Vuelve a abrirlo.

**¿Cómo sé la ruta completa?**

- Mac: arrastra server.js a la Terminal y se escribe solo.
- Windows: mantén Mayús, clic derecho en server.js → «Copiar como ruta». Usa barras dobles \\ o barras /.

**✅ Comprobación:** en un chat nuevo, tu conector aparece en la lista de herramientas.

#### 5. Pruébalo
_5 min · a probar_

```text
¿Qué herramientas tienes de «mi-conector»? Usa una de ellas con un ejemplo sencillo y explícame qué ha pasado.
```

**✅ Comprobación:** Claude usa tu herramienta y te da un resultado con tus datos.

**Al terminar:** Has cocinado tu propio conector: Claude ya puede usar tus datos con herramientas que tú has definido. Esto es exactamente lo que hay detrás de Canva, Notion o Higgsfield.

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
