---
name: video-aftereffects
description: "Receta de AMRI «Edita vídeo con Claude y After Effects». Conecta Claude con After Effects y pídele en español: una intro con tu logo, títulos y rótulos, un vídeo vertical con texto animado o un anuncio de producto. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Edita vídeo con Claude y After Effects

Conecta Claude con After Effects y pídele en español: una intro con tu logo, títulos y rótulos, un vídeo vertical con texto animado o un anuncio de producto.

- 📕 4 recetas
- ⏱ 25-30 min cada una
- 💶 After Effects es de pago
- 🍽 Resultado: vídeos animados en MP4
- Categoría: Estudio creativo
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/video-aftereffects.html

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

- **Claude Desktop**: el jefe de cocina. Escribe las órdenes para After Effects.
- **After Effects**: el horno. Donde se crea la animación. Es de pago (Adobe ofrece prueba gratuita).
- **Node.js**: la llave de paso. Un programa gratuito que hace falta para conectar todo.
- **Conector MCP de After Effects**: el camarero. Lleva los pedidos de Claude al horno. Gratuito, hecho por la comunidad.
- **Adobe Media Encoder**: el emplatado. Exporta tu MP4 (viene con la suscripción de Adobe).

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Prepara los ingredientes
_10 min · instalar programas_

Necesitas tres programas en el mismo ordenador. El conector solo funciona si todo está en la misma máquina.

#### Pasos

- Instala [Claude Desktop](https://claude.ai/download) e inicia sesión.

- Instala **After Effects** (versión 2024, 2025 o 2026) desde Creative Cloud. Si no lo tienes, Adobe ofrece una [prueba gratuita](https://www.adobe.com/products/aftereffects.html).

- Instala [Node.js](https://nodejs.org): descarga la versión **LTS** y comprueba que sea la **24 o superior**.

- Abre una terminal (Mac: **Terminal**; Windows: **PowerShell**) y escribe esto para comprobarlo:

```text
node --version
```

**✅ Comprobación:** la terminal responde con un número que empieza por v24 o más.

### 2. Da permiso a After Effects
_2 min · un ajuste_

Para que Claude pueda mover cosas dentro del programa, After Effects tiene que permitir scripts.

#### Pasos

- Abre After Effects.

- Windows: **Edit → Preferences → Scripting & Expressions**. Mac: **After Effects → Settings → Scripting & Expressions**.

- Marca **«Allow Scripts to Write Files and Access Network»** y pulsa **OK**.

> 💡 Si tu After Effects está en español, los menús se llaman parecido. El proyecto del conector puede pedir algún ajuste más: míralo en su [página oficial](https://github.com/kumoproductions/mcp-aftereffects).

**✅ Comprobación:** has marcado la casilla y guardado las preferencias.

### 3. Conecta Claude con After Effects
_10 min · el archivo de configuración_

Aquí le dices a Claude Desktop que existe el conector. Es el paso más técnico, pero solo se hace una vez.

#### Pasos

- En Claude Desktop abre **Settings → Developer → Edit Config**. Se abre una carpeta con el archivo **claude_desktop_config.json**.

- Ábrelo con el Bloc de notas (Windows) o TextEdit (Mac).

- Si el archivo está vacío, pega esto tal cual:

```text
{
  "mcpServers": {
    "aftereffects": {
      "command": "npx",
      "args": ["-y", "@kumoproductions/mcp-aftereffects"]
    }
  }
}
```

- Si el archivo ya tenía otros conectores, no lo borres: añade solo el bloque **«aftereffects»** dentro de la lista **mcpServers** que ya existe.
- Guarda, **cierra Claude Desktop del todo** y ábrelo otra vez.

**¿Qué significa cada parte?**

- **mcpServers**: la lista de conectores de Claude.
- **npx**: un comando de Node.js que descarga y ejecuta el conector solo.
- **@kumoproductions/mcp-aftereffects**: el nombre del conector.

> 💡 Es un proyecto de la comunidad, no de Adobe ni de Anthropic. Úsalo con tus propios proyectos y guarda siempre una copia antes de probar. Puede cambiar con el tiempo: si algo no coincide, mira su página en GitHub.

**✅ Comprobación:** al abrir un chat nuevo en Claude Desktop no sale ningún error y el conector aparece entre las herramientas.

### 4. Abre After Effects y guarda el proyecto
_5 min · el proyecto de trabajo_

El conector trabaja sobre el proyecto que tengas abierto, así que primero tiene que existir.

#### Pasos

- Abre After Effects.

- **File → New → New Project**.

- **File → Save As** y guárdalo con un nombre claro en una carpeta, por ejemplo **mi-video.aep**.

- Si vas a usar un proyecto que ya tenías, haz antes una **copia** y trabaja sobre la copia.

**✅ Comprobación:** After Effects está abierto y el proyecto tiene nombre.

## Recetas del libro

### Receta 1: Una intro con tu logo

Tu logo apareciendo con un brillo, 5 segundos en horizontal, para el principio de tus vídeos.

- ⏱ 25 min
- 👩‍🍳 Media
- 🎬 Intro
- 🍽 Resultado: tu intro en MP4 (1920×1080)
- Versión web: https://amri.es/recetas/video-aftereffects--intro-logo.html
- Ideas de ejemplo:
  - Brillo elegante: una intro de 5 segundos en la que aparece mi logo con un efecto de brillo, en formato horizontal 16:9
  - Entrada con rebote: una intro de 4 segundos en la que mi logo cae, rebota un poco y se queda en el centro, con un fondo de mi color

#### 1. Importa tu logo
_5 min · el material_

- Ten tu logo como **PNG con fondo transparente** (o SVG/AI si lo tienes).
- En After Effects: **File → Import → File…** y elige el logo.
- Comprueba que aparece en el panel **Project** con un nombre sin espacios ni acentos, por ejemplo `logo.png`.

> 💡 ¿No tienes logo transparente? Mira el libro [Diseña tu logo con IA](logo-ia.html).

**✅ Comprobación:** el logo está en el panel Project.

#### 2. Pide la intro
_10 min · Claude anima_

```text
Tienes acceso a mi After Effects a través del conector. Quiero [la idea de la persona].

Usa el archivo logo.png del panel Project. Crea una composición de 1920×1080, 30 fps. Fondo de color liso [tu color]. El logo entra suave (escala de 80 % a 100 % y opacidad de 0 a 100 en 1 segundo), luego un brillo lo recorre de izquierda a derecha y se queda quieto al final. Deja 1 segundo quieto al final para cortar sin prisas.

Antes de tocar nada, dime el plan en pasos cortos. Pon nombres claros a las capas.
```

**✅ Comprobación:** en After Effects hay una composición nueva con el logo animado.

#### 3. Revísala con la barra espaciadora
_5 min · pulir_

- Abre la composición y pulsa la **barra espaciadora**.
- Pide cambios de uno en uno:

```text
Haz la entrada del logo más lenta (1,5 segundos) y el brillo más sutil. Cambia solo eso.
```

> 💡 Una intro buena es corta: si pasa de 6 segundos, la gente la salta.

**✅ Comprobación:** la intro dura unos 5 segundos y te gusta.

#### 4. Exporta a MP4
_5 min · Media Encoder_

- Selecciona la composición y elige **Composition → Add to Adobe Media Encoder Queue**.
- Formato **H.264**, preset **«Match Source - High bitrate»**.
- Pulsa el botón verde de **Play**.

**✅ Comprobación:** tienes intro.mp4 y se ve igual que en After Effects.

**Al terminar:** Tu intro está lista. Pégala al principio de tus vídeos en cualquier editor.

### Receta 2: Títulos y rótulos animados

El título de tu canal y un rótulo con tu nombre y cargo, con fondo transparente para ponerlos encima de tus vídeos.

- ⏱ 25 min
- 👩‍🍳 Media
- 🔤 Títulos
- 🍽 Resultado: títulos con fondo transparente (.mov)
- Versión web: https://amri.es/recetas/video-aftereffects--titulos.html
- Ideas de ejemplo:
  - Título y rótulo: un título animado que dice «Mi canal» y un rótulo con mi nombre y cargo que aparece abajo a la izquierda, para poner sobre mis vídeos
  - Rótulo de sección: un rótulo de sección que aparece en una esquina con el nombre de cada parte del vídeo

#### 1. Decide textos y colores
_3 min · antes_

Ten a mano los textos exactos y el color de tu marca. Los títulos tienen que leerse en el móvil en menos de 2 segundos.

**✅ Comprobación:** tienes los textos y el color.

#### 2. Pide los títulos
_12 min · Claude anima_

```text
Tienes acceso a mi After Effects a través del conector. Quiero [la idea de la persona]. Textos: [tus textos].

Crea una composición de 1920×1080, 30 fps, de 6 segundos, SIN fondo (transparente). El rótulo entra deslizándose desde la izquierda en 0,6 s con una barra de color [tu color] detrás del texto, se queda 4 segundos y sale igual. Letra grande y legible, con un poco de sombra para que se lea sobre cualquier imagen. Deja los textos en capas separadas y con nombre para poder cambiarlos.

Dime el plan antes de empezar.
```

**✅ Comprobación:** hay una composición con los títulos y sin fondo.

#### 3. Pruébalo sobre un vídeo
_5 min · legibilidad_

- Arrastra uno de tus vídeos debajo de los títulos en la composición, solo para probar.
- Comprueba que se lee bien. Después borra esa capa.

```text
El texto se lee mal sobre fondos claros. Haz la barra un poco más opaca. Cambia solo eso.
```

**✅ Comprobación:** los títulos se leen bien sobre tu vídeo.

#### 4. Exporta con fondo transparente
_5 min · Media Encoder_

- **Composition → Add to Adobe Media Encoder Queue**.
- Formato **QuickTime**, códec **Apple ProRes 4444**, y en el vídeo activa el canal **alfa** (RGB + Alpha).
- Pulsa **Play**.

> 💡 Un MP4 no guarda transparencia: por eso aquí se usa .mov. Tu editor lo pondrá encima de tus vídeos sin fondo negro.

```text
¿Cómo exporto esta composición con fondo transparente desde Media Encoder? Dime exactamente qué elegir en cada desplegable.
```

**✅ Comprobación:** al poner el .mov sobre un vídeo, no aparece fondo negro.

**Al terminar:** Tus títulos están listos. Arrástralos encima de tus vídeos en el editor que uses.

### Receta 3: Vídeo vertical con texto animado

15 segundos en 9:16 con tu clip de fondo y un texto grande que se mueve, para Reels, TikTok o Shorts.

- ⏱ 30 min
- 👩‍🍳 Media
- 📱 Vertical
- 🍽 Resultado: un vídeo vertical en MP4 (1080×1920)
- Versión web: https://amri.es/recetas/video-aftereffects--vertical.html
- Ideas de ejemplo:
  - Clip con texto: un vídeo vertical 9:16 de 15 segundos con un clip mío de fondo y un texto grande animado encima
  - 3 frases que van apareciendo: un vídeo vertical de 15 segundos con mi clip de fondo y 3 frases cortas que aparecen una detrás de otra

#### 1. Importa tu clip
_5 min · el material_

- Graba o elige un clip vertical de al menos 15 segundos.
- **File → Import → File…** y llámalo `clip.mp4` en el panel Project.

**✅ Comprobación:** el clip está en el panel Project.

#### 2. Pide el vídeo
_12 min · Claude anima_

```text
Tienes acceso a mi After Effects a través del conector. Quiero [la idea de la persona]. Texto: [tu texto].

Composición de 1080×1920, 30 fps, 15 segundos, con clip.mp4 de fondo ajustado al tamaño. Los textos, grandes y en el centro, dentro de la zona segura (sin tocar los 250 px de arriba ni los 400 de abajo, donde las redes ponen sus botones). Cada texto entra con un pequeño salto y se queda el tiempo suficiente para leerlo. Oscurece un poco el clip para que el texto se lea.

Dime el plan antes de empezar.
```

**✅ Comprobación:** hay una composición vertical con tu clip y los textos.

#### 3. Revísalo como en el móvil
_8 min · pulir_

- Reprodúcelo a tamaño pequeño, como lo verías en el móvil.
- ¿Se lee cada texto sin pausar? Si no:

```text
El segundo texto desaparece antes de poder leerlo. Déjalo 1 segundo más y adelanta el tercero. Cambia solo eso.
```

**✅ Comprobación:** cada texto se lee sin pausar el vídeo.

#### 4. Exporta para redes
_5 min · Media Encoder_

- **Composition → Add to Adobe Media Encoder Queue**.
- Formato **H.264**, preset **«Match Source - High bitrate»** (mantiene el 1080×1920).
- Pulsa **Play** y pásalo al móvil.

**✅ Comprobación:** tienes el MP4 vertical y se ve bien en tu móvil.

**Al terminar:** Tu vídeo vertical está listo para subirlo desde el móvil.

### Receta 4: Anuncio animado de producto

10 segundos con fondo de color, el nombre de tu producto entrando con movimiento y el precio al final.

- ⏱ 30 min
- 👩‍🍳 Media
- 🛍 Anuncio
- 🍽 Resultado: un anuncio en MP4, cuadrado y vertical
- Versión web: https://amri.es/recetas/video-aftereffects--anuncio.html
- Ideas de ejemplo:
  - Nombre y precio: un anuncio de 10 segundos con fondo de color, el nombre de mi producto que entra con movimiento y el precio que aparece después
  - Oferta con fecha: un anuncio de 8 segundos que anuncia una oferta con el descuento muy grande y la fecha de fin

#### 1. Tu material
_5 min · producto_

- Importa una foto de tu producto con fondo transparente (`producto.png`) y tu logo.
- Ten claros el nombre, el precio y una sola ventaja.

> 💡 ¿Foto sin fondo? En el libro [del logo](logo-ia.html) te enseñamos a quitarlo con remove.bg.

**✅ Comprobación:** producto y logo están en el panel Project.

#### 2. Pide el anuncio
_12 min · Claude anima_

```text
Tienes acceso a mi After Effects a través del conector. Quiero [la idea de la persona]. Producto: [nombre], precio: [precio], ventaja: [una frase].

Composición de 1080×1080, 30 fps. Segundo 0-2: el producto entra con un pequeño giro sobre fondo [tu color]. Segundo 2-5: el nombre entra letra a letra. Segundo 5-8: la ventaja. Segundo 8-10: el precio grande y el logo abajo. Movimientos suaves, letra grande.

Dime el plan antes de empezar.
```

**✅ Comprobación:** tienes el anuncio cuadrado.

#### 3. La versión vertical
_5 min · reaprovechar_

```text
Duplica la composición en 1080×1920 y recoloca los elementos para el formato vertical, respetando la zona segura de arriba y abajo. No cambies los tiempos.
```

**✅ Comprobación:** tienes el anuncio también en vertical.

#### 4. Exporta las dos
_8 min · Media Encoder_

- Añade las dos composiciones a la cola de Media Encoder.
- Formato **H.264**, «Match Source - High bitrate», y **Play**.

**✅ Comprobación:** tienes anuncio-cuadrado.mp4 y anuncio-vertical.mp4.

**Al terminar:** Tu anuncio está listo en dos formatos. Pruébalo en redes con dos colores de fondo distintos.

## Al terminar

After Effects está conectado con Claude. Elige qué vídeo quieres hacer.

## Extras (opcionales, después de servir)

### Extra 1. Deja una plantilla reutilizable
_15 min · opcional_

Si vas a repetir este vídeo con otros textos, pídele a Claude que lo deje preparado.

#### Pasos

- Guarda el proyecto y pídele a Claude:

```text
Reorganiza este proyecto para que pueda reutilizarlo: deja los textos y los colores principales fáciles de cambiar, ordena las capas y explícame paso a paso cómo cambiar el texto y exportar de nuevo.
```

> 💡 Guarda una copia del proyecto con el nombre «plantilla» y trabaja siempre sobre copias.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

Casi todos los fallos vienen de una de estas cosas.

- **After Effects tiene que estar abierto** con un proyecto antes de pedirle nada a Claude.

- **Cierra y abre Claude Desktop** del todo tras cambiar el archivo de configuración.

- Revisa que el archivo de configuración esté bien copiado: una coma o una llave de más lo rompe.

- Repite **node --version** en la terminal: debe ser la 24 o superior.

- Comprueba que marcaste el permiso de scripts en las preferencias.

- Mira la página del conector en GitHub: ahí explican los cambios y los errores conocidos.

**💡 Ideas para seguir cocinando**

- Títulos animados para todos tus vídeos.
- Una cortinilla de final con tu web y tus redes.
- Anuncios cortos para Instagram y TikTok.
- Una animación de tu logo para la firma de vídeo.

### Extra 3. Usa material con permiso
_Siempre · consejos_

Antes de publicar, unas reglas sencillas.

- **Música:** usa solo canciones que tengan licencia para tu uso.

- **Tipografías:** revisa que la fuente se pueda usar en proyectos comerciales.

- **Clips e imágenes:** usa solo los tuyos o los que tengan licencia.

- **Guarda el proyecto .aep y el .mp4** en la misma carpeta, para poder retocarlo dentro de meses.

## Sigue con

- `/amri:higgsfield-cine` · Imágenes y vídeos de cine con Higgsfield
- `/amri:blender-3d` · Crea 3D con Claude y Blender
- `/amri:redes-sociales` · Tus redes sociales con Claude
- `/amri:animaciones-opus` · Animaciones con Claude Opus 5.5
- `/amri:chef` · combina varias recetas en un proyecto propio
