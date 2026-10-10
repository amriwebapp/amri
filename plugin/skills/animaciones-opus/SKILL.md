---
name: animaciones-opus
description: "Receta de AMRI «Animaciones con Claude Opus 5.5». Tu logo animado, una explicación animada, un reel vertical, datos en movimiento o una animación para tu web. En el navegador o en MP4. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Animaciones con Claude Opus 5.5

Tu logo animado, una explicación animada, un reel vertical, datos en movimiento o una animación para tu web. En el navegador o en MP4.

- 📕 5 recetas
- 💶 Mejor con un plan de pago de Claude
- 🍽 Resultado: animaciones en tu navegador o en MP4
- Categoría: Estudio creativo
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/animaciones-opus.html

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

## Ingredientes

- **Claude Opus 5.5**: el jefe de cocina. El modelo de Anthropic pensado para trabajos largos y con muchos detalles, como una animación.
- **Artefactos de Claude**: el horno. La animación se ve y se prueba al lado del chat.
- **Tu navegador**: el plato. Chrome, Safari o Firefox.
- **Claude Code**: el ayudante de cocina. Convierte la animación en vídeo MP4 en tu ordenador (instala él mismo lo que haga falta).

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Elige al chef: Claude Opus 5.5
_antes de empezar_

Una animación tiene muchas piezas que deben encajar: tiempos, entradas, salidas y colores. Opus 5.5 es el modelo de Claude que mejor mantiene la coherencia en tareas largas como esta.

#### Pasos

- Entra en [claude.ai](https://claude.ai) y abre un chat nuevo.

- Abre el **selector de modelo** (junto a la caja de texto) y elige **Claude Opus 5.5**.

- Si no aparece en tu plan, usa **Claude Sonnet 5.5**: la receta funciona igual, solo necesitarás alguna ronda más de ajustes.

> 💡 Haz toda la animación en el mismo chat. Así Claude recuerda el storyboard y cada cambio que le pidas.

**✅ Comprobación:** ves Claude Opus 5.5 (o Sonnet 5.5) en el selector del chat nuevo.

## Recetas del libro

### Receta 1: Tu logo animado

Tu logo apareciendo letra a letra con un brillo final, listo para tu web o tus vídeos.

- 👩‍🍳 Fácil
- ✨ Logo
- 🍽 Resultado: tu logo animado en tu navegador
- Versión web: https://amri.es/recetas/animaciones-opus--logo.html
- Ideas de ejemplo:
  - Letra a letra: mi logo apareciendo letra a letra con un brillo final, 5 segundos, fondo crema
  - Se dibuja solo: mi logo dibujándose trazo a trazo, como si alguien lo escribiera, 4 segundos

#### 1. Dale tu logo
_el material_

Funciona mejor con el logo en **SVG**. Si solo tienes PNG, súbelo igual: Claude puede redibujarlo en SVG.

```text
Te adjunto mi logo. Si no es SVG, redibújalo en SVG lo más fiel posible y enséñamelo.
```

**✅ Comprobación:** Claude tiene tu logo en SVG.

#### 2. El guion de 5 segundos
_storyboard_

```text
Quiero [la idea de la persona]. Escribe el storyboard en una tabla: segundo, qué parte del logo se mueve y cómo. Deja 1 segundo quieto al final. No escribas código todavía.
```

**✅ Comprobación:** has aprobado el storyboard.

#### 3. Anímalo
_artefacto_

```text
Crea la animación como un artefacto HTML de una sola página, sin librerías externas, con el SVG del logo. Movimientos suaves (nada lineal). Abajo, un botón para volver a reproducirla.
```

**✅ Comprobación:** ves tu logo animado en el artefacto.

#### 4. Ajusta y guarda
_pulir_

```text
En el segundo [x], [lo que pasa] → [lo que quiero]. Cambia solo eso.
```

- Cuando te guste, pide: «Dame el código para pegarlo en mi web» o descarga el archivo.

**✅ Comprobación:** tienes tu logo animado guardado.

**Al terminar:** Tu logo se mueve. Úsalo como intro de vídeos o al cargar tu web.

### Receta 2: Una explicación animada

30 segundos que explican cómo funciona tu servicio en 3 pasos, con iconos y textos grandes, en MP4.

- 👩‍🍳 Media
- 💡 Explicar
- 🍽 Resultado: una animación explicativa en MP4
- Versión web: https://amri.es/recetas/animaciones-opus--explicacion.html
- Ideas de ejemplo:
  - Servicio en 3 pasos: una animación de 30 segundos que explica cómo funciona mi servicio en 3 pasos, con iconos y textos grandes
  - Antes y después: una animación de 20 segundos con el problema de mi cliente antes y cómo queda después de mi servicio

#### 1. El guion
_storyboard_

```text
Quiero [la idea de la persona]. Mis pasos: [escríbelos].

Escribe el storyboard en una tabla: segundo de inicio y fin, qué se ve, qué icono, qué texto (máximo 6 palabras por pantalla) y cómo entra. Formato horizontal 16:9. Deja cada texto el tiempo de leerlo con calma. No escribas código todavía.
```

**✅ Comprobación:** has aprobado el storyboard.

#### 2. Anímala
_artefacto_

```text
Crea la animación como un artefacto HTML de una sola página, sin librerías externas, siguiendo el storyboard. Todo el movimiento depende de una función render(t) y una constante DUR. Abajo, play/pausa y una barra para saltar a cualquier segundo. Iconos dibujados en SVG.
```

**¿Por qué render(t)?**

- Para cada segundo hay un fotograma fijo: la barra te deja ir directo al segundo 7.
- Es lo que permite convertirla en vídeo después.

**✅ Comprobación:** ves la animación con su barra.

#### 3. Hazla tuya
_tu marca_

```text
Aplica mi marca: colores [#xxxxxx, #xxxxxx], tipografía [nombre de Google Fonts] y mi logo al final. Mantén los tiempos.
```

**✅ Comprobación:** se reconoce tu marca.

#### 4. Conviértela en MP4
_Claude Code_

- Guarda el código como `animacion.html` en una carpeta nueva y ábrela en Claude Code.
- Pega:

```text
En esta carpeta está animacion.html, con una función render(t) y una constante DUR. Crea un script que abra la página con Playwright (Chromium) a 1920×1080, llame a render(t) para cada fotograma a 30 fps, haga una captura y las una con ffmpeg en un MP4 H.264 (yuv420p). Instala lo que falte y explícame cada comando antes de ejecutarlo.
```

> 💡 Sin Claude Code, puedes grabar la pantalla mientras se reproduce: queda peor, pero sirve para probar.

**✅ Comprobación:** tienes animacion.mp4.

**Al terminar:** Tu explicación animada está lista. Ponla en tu web o en tus redes.

### Receta 3: Un reel vertical animado

15 segundos en vertical con textos grandes que presentan tu oferta, en MP4 para redes.

- 👩‍🍳 Media
- 📱 Reel
- 🍽 Resultado: un reel en MP4 (1080×1920)
- Versión web: https://amri.es/recetas/animaciones-opus--reel.html
- Ideas de ejemplo:
  - Oferta: un reel vertical de 15 segundos con textos grandes que presentan mi oferta de verano
  - 3 consejos: un reel vertical de 15 segundos con 3 consejos cortos de mi sector, uno por pantalla

#### 1. El guion vertical
_storyboard_

```text
Quiero [la idea de la persona]. Escribe el storyboard: segundo, texto (máximo 5 palabras), cómo entra. El primer segundo tiene que enganchar. Formato 9:16. Deja los textos dentro de la zona segura (lejos de arriba y de abajo, donde las redes ponen sus botones). No escribas código todavía.
```

**✅ Comprobación:** has aprobado el storyboard.

#### 2. Anímalo
_artefacto_

```text
Crea la animación como un artefacto HTML vertical (1080×1920), sin librerías externas, con render(t) y DUR, play/pausa y barra de tiempo. Textos enormes y con buen contraste.
```

**✅ Comprobación:** ves el reel en el artefacto.

#### 3. Revísalo en pequeño
_como en el móvil_

Míralo a tamaño de móvil. ¿Se lee cada texto sin pausar?

```text
En el segundo [x], el texto dura poco. Déjalo 1 segundo más y ajusta el resto. No cambies nada más.
```

**✅ Comprobación:** cada texto se lee sin pausar.

#### 4. Conviértelo en MP4
_Claude Code_

- Guarda el código como `reel.html` en una carpeta y ábrela en Claude Code.

```text
En esta carpeta está reel.html con render(t) y DUR. Crea un script que lo grabe con Playwright a 1080×1920, 30 fps, y lo una con ffmpeg en un MP4 H.264 (yuv420p) compatible con Instagram y TikTok. Explícame cada comando antes de ejecutarlo.
```

**✅ Comprobación:** tienes reel.mp4 y se ve bien en tu móvil.

**Al terminar:** Tu reel está listo. Súbelo desde el móvil con una música de la biblioteca de la red.

### Receta 4: Datos en movimiento

Un gráfico que crece y cuenta una historia con tus números.

- 👩‍🍳 Media
- 📊 Datos
- 🍽 Resultado: un gráfico animado
- Versión web: https://amri.es/recetas/animaciones-opus--datos.html
- Ideas de ejemplo:
  - Barras que crecen: un gráfico de barras que crece mes a mes mostrando las ventas del año, con el número final destacado
  - Antes y ahora: una comparación animada entre dos años, con el porcentaje de mejora destacado al final

#### 1. La historia de tus números
_el mensaje_

```text
Estos son mis datos: [pégalos]. Quiero [la idea de la persona]. ¿Cuál es la historia más interesante que cuentan? Propón el titular y el orden en que aparece cada dato. No escribas código todavía.
```

> 💡 Un buen gráfico animado dice una sola cosa. Elige cuál.

**✅ Comprobación:** tienes el titular y el orden.

#### 2. Anímalo
_artefacto_

```text
Crea la animación como artefacto HTML, sin librerías externas, con render(t), DUR, play/pausa y barra. Que los números cuenten hacia arriba mientras crecen las barras y que el titular aparezca al final. Usa exactamente mis datos.
```

**✅ Comprobación:** ves el gráfico animado.

#### 3. Comprueba los números
_con lupa_

Para el gráfico al final y compara cada número con tus datos originales.

**✅ Comprobación:** todos los números coinciden.

#### 4. Hazlo tuyo y guárdalo
_marca_

```text
Aplica mis colores [#xxxxxx, #xxxxxx] y mi tipografía. Después dame el código para guardarlo.
```

**✅ Comprobación:** tienes tu gráfico animado guardado.

**Al terminar:** Tus datos cuentan una historia. Ponlo en una presentación o en redes.

### Receta 5: Una animación para tu web

Un fondo suave con formas que flotan para tu portada, que no distrae ni ralentiza.

- 👩‍🍳 Fácil
- 🌐 Web
- 🍽 Resultado: una animación lista para pegar en tu web
- Versión web: https://amri.es/recetas/animaciones-opus--web.html
- Ideas de ejemplo:
  - Fondo de portada: un fondo suave con formas que flotan para la portada de mi web, que no distraiga del texto
  - Detalles al pasar el ratón: pequeñas animaciones en mis botones y tarjetas al pasar el ratón

#### 1. Pídela pensada para web
_artefacto_

```text
Quiero [la idea de la persona]. Hazla con CSS y, solo si hace falta, un poco de JavaScript, sin librerías. Requisitos: que no tape ni compita con el texto, que sea ligera para el móvil y que se pare si la persona tiene activado «reducir movimiento» en su sistema. Enséñamela en un artefacto con un texto de ejemplo encima.
```

**¿Qué es «reducir movimiento»?**

- Una opción del móvil y del ordenador para personas a las que el movimiento marea.
- Respetarla es accesible y educado.

**✅ Comprobación:** la ves en el artefacto y el texto se lee bien.

#### 2. Hazla tuya
_marca_

```text
Usa mis colores [#xxxxxx, #xxxxxx] y hazla más lenta y sutil. Cambia solo eso.
```

**✅ Comprobación:** encaja con tu web.

#### 3. Pégala en tu web
_instalar_

```text
Dame el código para pegar en mi web y dime exactamente dónde va. Este es mi index.html: [pégalo o dime el repositorio].
```

> 💡 Si tu web es del libro [Tu web online y gratis](webapp-gratis.html), usa la receta «Cambia tu web sin romperla».

**✅ Comprobación:** la animación se ve en tu web publicada.

**Al terminar:** Tu web se mueve con calma. Revisa que sigue cargando rápido en el móvil.

## Al terminar

Ya tienes a Opus como chef. Elige qué animación quieres.

## Sigue con

- `/amri:higgsfield-cine` · Imágenes y vídeos de cine con Higgsfield
- `/amri:video-aftereffects` · Edita vídeo con Claude y After Effects
- `/amri:blender-3d` · Crea 3D con Claude y Blender
- `/amri:redes-sociales` · Tus redes sociales con Claude
- `/amri:chef` · combina varias recetas en un proyecto propio
