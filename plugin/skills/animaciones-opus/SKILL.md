---
name: animaciones-opus
description: "Receta de AMRI «Animaciones con Claude Opus 5.5». Del storyboard a una animación que se mueve en tu navegador, con tu marca. Y, si quieres, un vídeo MP4 para redes. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Animaciones con Claude Opus 5.5

Del storyboard a una animación que se mueve en tu navegador, con tu marca. Y, si quieres, un vídeo MP4 para redes.

- ⏱ 40 min aprox.
- 👩‍🍳 Sin saber programar ni animar
- 💶 Mejor con un plan de pago de Claude
- 🍽 Resultado: una animación en tu navegador y, si quieres, un vídeo MP4
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «anon» de Supabase) sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes

- **Claude Opus 5.5**: el jefe de cocina. El modelo de Anthropic pensado para trabajos largos y con muchos detalles, como una animación.
- **Artefactos de Claude**: el horno. La animación se ve y se prueba al lado del chat.
- **Tu navegador**: el plato. Chrome, Safari o Firefox.
- **Claude Code**: el ayudante de cocina. Convierte la animación en vídeo MP4 en tu ordenador (instala él mismo lo que haga falta).

## Ideas de ejemplo

- **Explicación animada:** una animación de 30 segundos que explica cómo funciona mi servicio en 3 pasos, con iconos y textos grandes
- **Reel vertical:** un reel vertical de 15 segundos con textos grandes que presentan mi oferta de verano
- **Datos en movimiento:** un gráfico de barras que crece mes a mes mostrando las ventas del año, con el número final destacado
- **Animación para tu web:** un fondo suave con formas que flotan para la portada de mi web, que no distraiga del texto

## Antes de empezar

Pregunta a la persona: **¿Quieres exportarla como vídeo MP4?** Si eliges «Sí», al final usarás Claude Code en tu ordenador para convertir la animación en un vídeo listo para redes. Si no, la tendrás en tu navegador y podrás compartirla con un enlace.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Elige al chef: Claude Opus 5.5
_2 min · antes de empezar_

Una animación tiene muchas piezas que deben encajar: tiempos, entradas, salidas y colores. Opus 5.5 es el modelo de Claude que mejor mantiene la coherencia en tareas largas como esta.

#### Pasos

- Entra en [claude.ai](https://claude.ai) y abre un chat nuevo.

- Abre el **selector de modelo** (junto a la caja de texto) y elige **Claude Opus 5.5**.

- Si no aparece en tu plan, usa **Claude Sonnet 5.5**: la receta funciona igual, solo necesitarás alguna ronda más de ajustes.

> 💡 Haz toda la animación en el mismo chat. Así Claude recuerda el storyboard y cada cambio que le pidas.

**✅ Comprobación:** ves Claude Opus 5.5 (o Sonnet 5.5) en el selector del chat nuevo.

### 2. Escribe el storyboard
_5 min · primero el guion, luego el código_

Los animadores profesionales dibujan antes de animar. Un **storyboard** es el guion visual: qué aparece, en qué segundo y cómo se mueve. Así corriges la idea antes de gastar tiempo en detalles.

```text
Quiero [la idea de la persona].

Antes de animar nada, escribe un storyboard en una tabla: segundo de inicio y de fin, qué aparece, cómo entra y cómo sale, y qué texto se lee. Propón también la duración total, 3 colores y una tipografía. Formato: [vertical 9:16 / horizontal 16:9 / cuadrado 1:1].

Deja cada texto en pantalla el tiempo suficiente para leerlo con calma. No escribas código todavía.
```

**¿Por qué no pedir la animación directamente?**

- Cambiar una tabla cuesta segundos; cambiar una animación terminada cuesta mucho más.
- El storyboard es también tu guía para revisar: sabrás qué debería pasar en cada segundo.
- Si no te convence el ritmo, pide «hazlo más tranquilo» o «más enérgico» y Claude rehace la tabla.

**✅ Comprobación:** tienes un storyboard que, al leerlo, te imaginas la animación.

### 3. Anímalo en un artefacto
_5 min · el plato principal_

Un **artefacto** es una ventana al lado del chat donde Claude muestra lo que crea. Ahí verás tu animación moverse sin instalar nada.

```text
Perfecto. Ahora crea la animación como un artefacto HTML de una sola página, sin librerías externas, siguiendo el storyboard.

Requisitos:
- Todo el movimiento depende de una función render(t) que dibuja el fotograma del segundo t, y una constante DUR con la duración total.
- Abajo, un botón de play/pausa y una barra para saltar a cualquier segundo.
- Movimientos con suavizado (nada lineal) y textos grandes que se lean en un móvil.
- Que se vea bien en el formato del storyboard.
```

**¿Qué es eso de render(t)?**

- Es como una película: para cada segundo **t** hay un fotograma fijo.
- Así la animación siempre se ve igual, y la barra te deja ir directo al segundo 7 para revisarlo.
- Es también lo que permite convertirla en vídeo después, fotograma a fotograma.

> 💡 Si no ves la animación a la derecha, pide «muéstramela en un artefacto». Si sale en blanco, dile a Claude qué ves: él lo arregla.

**✅ Comprobación:** la animación se reproduce en el artefacto y la barra te deja moverte por ella.

### 4. Ajusta escena a escena
_10 min · el punto de sal_

Ahora eres el director. Mira la animación entera, luego segundo a segundo, y pide cambios concretos.

#### Cómo pedir cambios que funcionan

- Di **el segundo**: «en el segundo 3,5…».

- Di **qué pasa ahora y qué quieres**: «el título entra de golpe; quiero que suba despacio en 0,8 segundos».

- Pide **un cambio o dos** cada vez.

```text
Cambios: en el segundo [x], [lo que pasa ahora] → [lo que quiero]. En el segundo [y], [lo que pasa ahora] → [lo que quiero]. No toques nada más.
```

**Palabras de animador que Claude entiende**

- **Suavizado (easing)**: que empiece o acabe despacio, como un coche que frena.
- **Escalonado (stagger)**: que los elementos entren uno detrás de otro, no todos a la vez.
- **Rebote**: que se pase un poco y vuelva, da sensación de alegría.
- **Bucle (loop)**: que termine igual que empieza para repetirse sin corte.
- **Pausa de lectura**: tiempo quieto para que se lea un texto.

> 💡 Regla de lectura: lee cada texto en voz alta dos veces. Si no te da tiempo antes de que desaparezca, pide que se quede más.

**✅ Comprobación:** la has visto entera tres veces seguidas y no cambiarías nada.

### 5. Hazla tuya
_5 min · tu marca_

Con tus colores, tu tipografía y tu logo deja de parecer una plantilla.

```text
Aplica mi marca: colores [#xxxxxx, #xxxxxx, #xxxxxx], tipografía [nombre de Google Fonts] y este logo en SVG: [pega el código o adjunta la imagen]. Mantén los tiempos tal y como están.
```

> 💡 ¿No tienes logo en SVG? La receta «Diseña tu logo con IA» te lo prepara, e «Imágenes con IA, gratis» te enseña a dibujar iconos SVG con Claude.

**✅ Comprobación:** al verla, se reconoce tu marca a la primera.

### 6. Conviértela en vídeo MP4 _(solo si la respuesta a «Quieres exportarla como vídeo MP4» es «Sí»)_
_10 min · Claude Code_

Para subirla a Instagram, TikTok o YouTube necesitas un vídeo. Claude Code abre la animación en tu ordenador, saca cada fotograma y los une en un MP4.

#### Pasos

- En el artefacto, copia el código (o descárgalo) y guárdalo como `animacion.html` en una carpeta nueva, por ejemplo `mi-animacion`.

- Abre esa carpeta en **Claude Code** y pega:

```text
En esta carpeta está animacion.html, con una función render(t) y una constante DUR. Crea un script que:
1. Abra la página con Playwright (Chromium) a [1080×1920 para vertical / 1920×1080 para horizontal].
2. Para cada fotograma a 30 fps llame a render(t) y haga una captura.
3. Una las capturas con ffmpeg en un MP4 H.264 (yuv420p) compatible con Instagram, TikTok y YouTube.
Instala lo que falte, explícame cada comando antes de ejecutarlo y deja el vídeo en esta carpeta como animacion.mp4.
```

**Algo falla**

- **Sale en blanco**: pide a Claude Code que espere a que carguen las fuentes antes de capturar.
- **Va a saltos**: comprueba que todo el movimiento esté dentro de render(t) y no en temporizadores.
- **No encuentra ffmpeg**: pídele que lo instale por ti y te explique cómo.

**✅ Comprobación:** animacion.mp4 se reproduce suave en tu móvil.

### 7. Ponle sonido _(solo si la respuesta a «Quieres exportarla como vídeo MP4» es «Sí»)_
_5 min · opcional pero recomendable_

El sonido hace que una animación parezca profesional. Usa música libre de derechos o efectos sencillos.

```text
Añade la pista musica.mp3 al vídeo animacion.mp4 con un fundido de entrada y salida de 1 segundo, a un volumen que no tape la voz. Si no tengo música, genera con código unos efectos suaves (un golpe al aparecer el título y un brillo al final) sincronizados con el storyboard.
```

> 💡 Usa solo música con licencia que te permita publicarla. Las bibliotecas de audio gratuitas de las propias redes son una buena opción.

**✅ Comprobación:** el vídeo suena bien y los efectos coinciden con lo que se ve.

### 8. Sírvela
_3 min · publicar_

Tu animación está lista para el público.

- **Como enlace**: en el artefacto pulsa **Compartir** (o **Publicar**) y envía el enlace.

- **En tu web**: pide a Claude «adáptala para pegarla en mi web, sin ocupar más de [alto] de alto».

- **En redes**: sube `animacion.mp4` desde la app del móvil, como cualquier vídeo.

**✅ Comprobación:** alguien ha visto tu animación fuera de Claude.

## Al terminar

Ya tienes tu animación hecha con Claude Opus 5.5. Guarda el storyboard y el chat: para la siguiente solo tendrás que cambiar los textos y los colores. Más abajo tienes extras para animar tu web, tu logo y tus datos.

## Extras (opcionales, después de servir)

### Extra 1. Microanimaciones para tu web
_10 min · opcional_

Pequeños movimientos que hacen una web más agradable: botones que reaccionan, secciones que aparecen al bajar y números que cuentan.

```text
Este es el HTML de mi web: [pégalo o adjúntalo]. Añade microanimaciones sutiles: botones que reaccionan al pasar el ratón, secciones que aparecen suavemente al hacer scroll y contadores que suben. Solo CSS y JavaScript sin librerías. Respeta «prefers-reduced-motion» para quien prefiere menos movimiento.
```

> 💡 Menos es más: si la animación se nota más que el contenido, es demasiado.

### Extra 2. Tu logo animado en SVG
_10 min · opcional_

Un logo que se dibuja solo pesa muy poco y queda perfecto en la portada de tu web o en tu firma.

```text
Este es mi logo en SVG: [pega el código]. Anímalo para que se dibuje trazo a trazo en 2 segundos y termine con un pequeño brillo. Todo en un único archivo SVG con la animación dentro, que funcione en cualquier navegador.
```

### Extra 3. Datos que cuentan una historia
_15 min · opcional_

Un gráfico que se mueve se entiende y se recuerda mejor que una tabla.

```text
Estos son mis datos: [pega la tabla o adjunta el CSV]. Crea una animación de 20 segundos que cuente la historia de estos datos: empieza por el contexto, muestra el cambio más importante y termina con una frase que resuma la conclusión. No inventes datos.
```

## Sigue con

- `/amri:higgsfield-cine` · Imágenes y vídeos de cine con Higgsfield
- `/amri:video-aftereffects` · Edita vídeo con Claude y After Effects
- `/amri:blender-3d` · Crea 3D con Claude y Blender
- `/amri:redes-sociales` · Tus redes sociales con Claude
- `/amri:chef` · combina varias recetas en un proyecto propio
