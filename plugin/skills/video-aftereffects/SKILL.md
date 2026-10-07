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

Tu logo apareciendo con un efecto de brillo, 5 segundos, para el principio de tus vídeos.

- ⏱ 25 min
- 👩‍🍳 Media
- 🎬 Intro
- 🍽 Resultado: tu intro en MP4
- Versión web: https://amri.es/recetas/video-aftereffects--intro-logo.html
- Ideas de ejemplo:
  - Intro con logo: una intro de 5 segundos en la que aparece mi logo con un efecto de brillo, en formato horizontal 16:9

#### 1. Prepara tu material
_5 min · logo o clip_

Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.

#### Pasos

- Pon tu logo (mejor un **PNG con fondo transparente**) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.

- En After Effects: **File → Import → File…** y elige tus archivos.

- Comprueba que aparecen en el panel **Project**.

> 💡 Si no tienes logo transparente, mira la receta [Diseña un logo con IA](logo-ia.html).

**✅ Comprobación:** tu logo o tu clip se ve en el panel Project.

#### 2. Pídele el vídeo a Claude
_10 min · la orden_

Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.

#### Pasos

- Abre un chat nuevo en Claude Desktop.
- Copia este mensaje y pégalo:

```text
Tienes acceso a mi After Effects a través del conector. Quiero crear [la idea de la persona].

Antes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave. Usa el material que he importado en el panel Project. Al terminar, dime qué has creado y cómo previsualizarlo.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu proyecto.
- **Capas con nombres claros**: luego será fácil retocarlo a mano.
- **Fotogramas clave**: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento.

> 💡 Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.

**✅ Comprobación:** en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.

#### 3. Previsualiza y ajusta
_10 min · pulir el resultado_

Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.

#### Pasos

- Haz doble clic en la composición nueva del panel **Project**.

- Pulsa la **barra espaciadora** para reproducirla.

- Apunta lo que no te gusta y pídeselo a Claude, **un cambio cada vez**:

```text
Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.
```

> 💡 Si un cambio sale mal, deshaz con **Ctrl+Z** (Windows) o **Cmd+Z** (Mac) en After Effects.

**✅ Comprobación:** al reproducirla, el movimiento, los textos y los colores son los que querías.

#### 4. Exporta tu vídeo a MP4
_5 min · el emplatado_

Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.

#### Pasos

- Selecciona la composición.

- Menú **Composition → Add to Adobe Media Encoder Queue**.

- En Media Encoder, en la columna **Format**, elige **H.264** y como preset **«Match Source - High bitrate»**.

- Elige dónde guardarlo y pulsa el botón verde de **Play** (Start Queue).

**✅ Comprobación:** tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.

**Al terminar:** Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.

### Receta 2: Títulos y rótulos animados

Un título para tu canal y un rótulo con tu nombre y cargo, para poner sobre tus vídeos.

- ⏱ 25 min
- 👩‍🍳 Media
- 🔤 Títulos
- 🍽 Resultado: títulos listos para tus vídeos
- Versión web: https://amri.es/recetas/video-aftereffects--titulos.html
- Ideas de ejemplo:
  - Títulos y rótulos: un título animado que dice «Mi canal» y un rótulo con mi nombre y cargo que aparece abajo a la izquierda, para poner sobre mis vídeos

#### 1. Prepara tu material
_5 min · logo o clip_

Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.

#### Pasos

- Pon tu logo (mejor un **PNG con fondo transparente**) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.

- En After Effects: **File → Import → File…** y elige tus archivos.

- Comprueba que aparecen en el panel **Project**.

> 💡 Si no tienes logo transparente, mira la receta [Diseña un logo con IA](logo-ia.html).

**✅ Comprobación:** tu logo o tu clip se ve en el panel Project.

#### 2. Pídele el vídeo a Claude
_10 min · la orden_

Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.

#### Pasos

- Abre un chat nuevo en Claude Desktop.
- Copia este mensaje y pégalo:

```text
Tienes acceso a mi After Effects a través del conector. Quiero crear [la idea de la persona].

Antes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave. Usa el material que he importado en el panel Project. Al terminar, dime qué has creado y cómo previsualizarlo.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu proyecto.
- **Capas con nombres claros**: luego será fácil retocarlo a mano.
- **Fotogramas clave**: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento.

> 💡 Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.

**✅ Comprobación:** en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.

#### 3. Previsualiza y ajusta
_10 min · pulir el resultado_

Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.

#### Pasos

- Haz doble clic en la composición nueva del panel **Project**.

- Pulsa la **barra espaciadora** para reproducirla.

- Apunta lo que no te gusta y pídeselo a Claude, **un cambio cada vez**:

```text
Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.
```

> 💡 Si un cambio sale mal, deshaz con **Ctrl+Z** (Windows) o **Cmd+Z** (Mac) en After Effects.

**✅ Comprobación:** al reproducirla, el movimiento, los textos y los colores son los que querías.

#### 4. Exporta tu vídeo a MP4
_5 min · el emplatado_

Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.

#### Pasos

- Selecciona la composición.

- Menú **Composition → Add to Adobe Media Encoder Queue**.

- En Media Encoder, en la columna **Format**, elige **H.264** y como preset **«Match Source - High bitrate»**.

- Elige dónde guardarlo y pulsa el botón verde de **Play** (Start Queue).

**✅ Comprobación:** tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.

**Al terminar:** Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.

### Receta 3: Vídeo vertical con texto animado

15 segundos en 9:16 con tu clip de fondo y un texto grande que se mueve, para redes.

- ⏱ 30 min
- 👩‍🍳 Media
- 📱 Vertical
- 🍽 Resultado: un vídeo vertical en MP4
- Versión web: https://amri.es/recetas/video-aftereffects--vertical.html
- Ideas de ejemplo:
  - Vídeo vertical: un vídeo vertical 9:16 de 15 segundos con un clip mío de fondo y un texto grande animado encima

#### 1. Prepara tu material
_5 min · logo o clip_

Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.

#### Pasos

- Pon tu logo (mejor un **PNG con fondo transparente**) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.

- En After Effects: **File → Import → File…** y elige tus archivos.

- Comprueba que aparecen en el panel **Project**.

> 💡 Si no tienes logo transparente, mira la receta [Diseña un logo con IA](logo-ia.html).

**✅ Comprobación:** tu logo o tu clip se ve en el panel Project.

#### 2. Pídele el vídeo a Claude
_10 min · la orden_

Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.

#### Pasos

- Abre un chat nuevo en Claude Desktop.
- Copia este mensaje y pégalo:

```text
Tienes acceso a mi After Effects a través del conector. Quiero crear [la idea de la persona].

Antes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave. Usa el material que he importado en el panel Project. Al terminar, dime qué has creado y cómo previsualizarlo.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu proyecto.
- **Capas con nombres claros**: luego será fácil retocarlo a mano.
- **Fotogramas clave**: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento.

> 💡 Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.

**✅ Comprobación:** en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.

#### 3. Previsualiza y ajusta
_10 min · pulir el resultado_

Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.

#### Pasos

- Haz doble clic en la composición nueva del panel **Project**.

- Pulsa la **barra espaciadora** para reproducirla.

- Apunta lo que no te gusta y pídeselo a Claude, **un cambio cada vez**:

```text
Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.
```

> 💡 Si un cambio sale mal, deshaz con **Ctrl+Z** (Windows) o **Cmd+Z** (Mac) en After Effects.

**✅ Comprobación:** al reproducirla, el movimiento, los textos y los colores son los que querías.

#### 4. Exporta tu vídeo a MP4
_5 min · el emplatado_

Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.

#### Pasos

- Selecciona la composición.

- Menú **Composition → Add to Adobe Media Encoder Queue**.

- En Media Encoder, en la columna **Format**, elige **H.264** y como preset **«Match Source - High bitrate»**.

- Elige dónde guardarlo y pulsa el botón verde de **Play** (Start Queue).

**✅ Comprobación:** tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.

**Al terminar:** Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.

### Receta 4: Anuncio animado de producto

10 segundos con fondo de color, el nombre de tu producto entrando con movimiento y el precio.

- ⏱ 30 min
- 👩‍🍳 Media
- 🛍 Anuncio
- 🍽 Resultado: un anuncio en MP4
- Versión web: https://amri.es/recetas/video-aftereffects--anuncio.html
- Ideas de ejemplo:
  - Anuncio de producto: un anuncio de 10 segundos con fondo de color, el nombre de mi producto que entra con movimiento y el precio que aparece después

#### 1. Prepara tu material
_5 min · logo o clip_

Como tu vídeo usa material propio, hay que meterlo en el proyecto para que Claude pueda usarlo.

#### Pasos

- Pon tu logo (mejor un **PNG con fondo transparente**) o tu clip en una carpeta con un nombre sencillo, sin espacios ni acentos.

- En After Effects: **File → Import → File…** y elige tus archivos.

- Comprueba que aparecen en el panel **Project**.

> 💡 Si no tienes logo transparente, mira la receta [Diseña un logo con IA](logo-ia.html).

**✅ Comprobación:** tu logo o tu clip se ve en el panel Project.

#### 2. Pídele el vídeo a Claude
_10 min · la orden_

Ahora Claude crea la animación directamente en tu After Effects. Tú ves cómo aparecen las capas.

#### Pasos

- Abre un chat nuevo en Claude Desktop.
- Copia este mensaje y pégalo:

```text
Tienes acceso a mi After Effects a través del conector. Quiero crear [la idea de la persona].

Antes de tocar nada, dime en pasos cortos qué vas a hacer. Después créalo en mi proyecto abierto: una composición con el tamaño y la duración adecuados, capas con nombres claros y animaciones suaves con fotogramas clave. Usa el material que he importado en el panel Project. Al terminar, dime qué has creado y cómo previsualizarlo.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu proyecto.
- **Capas con nombres claros**: luego será fácil retocarlo a mano.
- **Fotogramas clave**: los puntos donde algo cambia (posición, tamaño, opacidad) para crear movimiento.

> 💡 Empieza con algo corto y sencillo. Es mejor un vídeo de 5 segundos que sale bien que uno de un minuto lleno de fallos.

**✅ Comprobación:** en After Effects hay una composición nueva con capas y Claude te ha explicado qué hizo.

#### 3. Previsualiza y ajusta
_10 min · pulir el resultado_

Casi nunca sale perfecto a la primera. Verlo y pedir cambios pequeños es lo que da buen resultado.

#### Pasos

- Haz doble clic en la composición nueva del panel **Project**.

- Pulsa la **barra espaciadora** para reproducirla.

- Apunta lo que no te gusta y pídeselo a Claude, **un cambio cada vez**:

```text
Haz la entrada del título más lenta y suave, y cambia el color del texto a [tu color]. Cambia solo eso y no toques lo demás.
```

> 💡 Si un cambio sale mal, deshaz con **Ctrl+Z** (Windows) o **Cmd+Z** (Mac) en After Effects.

**✅ Comprobación:** al reproducirla, el movimiento, los textos y los colores son los que querías.

#### 4. Exporta tu vídeo a MP4
_5 min · el emplatado_

Para tener un archivo que puedas subir a cualquier sitio hay que exportarlo con Adobe Media Encoder.

#### Pasos

- Selecciona la composición.

- Menú **Composition → Add to Adobe Media Encoder Queue**.

- En Media Encoder, en la columna **Format**, elige **H.264** y como preset **«Match Source - High bitrate»**.

- Elige dónde guardarlo y pulsa el botón verde de **Play** (Start Queue).

**✅ Comprobación:** tienes un archivo .mp4 que se abre en tu reproductor y se ve como en After Effects.

**Al terminar:** Ya tienes tu vídeo exportado en MP4. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otros textos.

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
