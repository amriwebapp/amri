---
name: blender-3d
description: "Receta de AMRI «Crea 3D con Claude y Blender». Sin saber modelar: un objeto, una escena, tu logo en 3D, tu producto girando o un personaje simpático. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Crea 3D con Claude y Blender

Sin saber modelar: un objeto, una escena, tu logo en 3D, tu producto girando o un personaje simpático.

- 📕 5 recetas
- ⏱ 25-40 min cada una
- 💶 Gratis
- 🍽 Resultado: imágenes y vídeos en 3D
- Categoría: Estudio creativo
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/blender-3d.html

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

- **Claude Desktop**: el jefe de cocina. Da las órdenes a Blender.
- **Blender**: el horno. El programa de 3D, gratuito y de código abierto.
- **Conector de Blender**: el camarero. Lleva los pedidos de Claude al horno. Gratuito y oficial.
- **El propio Blender**: también exporta el vídeo final en MP4.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Prepara los ingredientes
_10 min · instalar programas_

Necesitas dos programas gratuitos en el mismo ordenador.

#### Pasos

- Instala [Claude Desktop](https://claude.ai/download) e inicia sesión. Vale cualquier plan, también el gratuito.

- Instala [Blender](https://www.blender.org/download/) en su **versión 4.2 o superior**.

- Abre Blender una vez para comprobar que funciona.

> 💡 Para escenas sencillas basta con un ordenador reciente. Los renders largos y los vídeos tardan más en equipos antiguos.

**✅ Comprobación:** Blender se abre y ves el cubo, la luz y la cámara de la escena inicial.

### 2. Añade el conector a Claude Desktop
_3 min · el camarero_

Blender tiene un conector oficial que se añade desde el directorio de Claude.

#### Pasos

- En Claude Desktop, ve a **Customize → Connectors**.

- Busca **Blender** y pulsa **Add**.

> 💡 Los nombres de los menús pueden cambiar un poco con las actualizaciones. Si no lo encuentras, busca «Connectors» en los ajustes.

**✅ Comprobación:** el conector de Blender aparece en tu lista de conectores.

### 3. Instala el complemento en Blender
_10 min · una sola vez_

El conector necesita un complemento dentro de Blender para poder hablar con él.

#### Pasos

- Abre la página [Blender MCP Server](https://www.blender.org/lab/mcp-server/) en el navegador, con Blender abierto al lado.

- Arrastra el **enlace de instalación** de esa página hasta la ventana de Blender.

- Blender te pedirá añadir el repositorio **«lab»**: acepta.

- Arrastra **el mismo enlace una segunda vez** para instalar el complemento.

> 💡 Es el complemento oficial de Blender. Instala solo el de la página de blender.org: este complemento ejecuta órdenes dentro de tu programa.

**✅ Comprobación:** Blender te avisa de que se ha instalado el complemento.

### 4. Enciende la conexión
_3 min · cada vez que trabajes_

La conexión hay que encenderla desde Blender cada vez que empieces a trabajar.

#### Pasos

- Abre Blender y guarda el proyecto: **File → Save**, con un nombre claro.

- Pasa el ratón por la vista 3D y pulsa la tecla **N** para abrir el panel lateral.

- Busca la pestaña **BlenderMCP** y pulsa **Start MCP server**.

- En Claude Desktop, abre un chat nuevo y pega este mensaje:

```text
¿Estás conectado a Blender? Dime qué objetos hay ahora mismo en la escena.
```

**✅ Comprobación:** Claude te contesta que ve un cubo, una cámara y una luz.

## Recetas del libro

### Receta 1: Un objeto en 3D

Una taza, una lámpara o lo que quieras, con su material y su luz.

- ⏱ 25 min
- 👩‍🍳 Fácil
- 🧊 Objeto
- 🍽 Resultado: una imagen 3D de tu objeto
- Versión web: https://amri.es/recetas/blender-3d--objeto.html
- Ideas de ejemplo:
  - Un objeto: una taza de cerámica azul sobre una mesa de madera, con luz cálida de mañana

#### 1. Pídele la escena a Claude
_10 min · la orden_

Claude construye la escena escribiendo órdenes dentro de Blender. Tú verás cómo aparecen los objetos.

#### Pasos

- En el mismo chat de Claude, copia este mensaje y pégalo:

```text
Estás conectado a mi Blender. Quiero crear [la idea de la persona].

Dime primero el plan en pasos cortos. Después constrúyelo en mi escena: borra el cubo inicial, crea los objetos con formas y proporciones creíbles, ponles materiales, coloca una luz y una cámara con un buen encuadre, y ponles nombres claros.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu escena.
- **Materiales**: el aspecto de cada superficie (madera, metal, cerámica…).
- **Luz y cámara**: lo que hace que la escena se vea bien, igual que en una foto.

> 💡 Empieza con algo simple: un objeto o una escena pequeña. Cuando funcione, añade cosas poco a poco.

**✅ Comprobación:** en Blender ves aparecer los objetos y Claude te explica lo que ha hecho.

#### 2. Ajusta materiales y luz
_10 min · pulir el resultado_

El primer intento casi nunca es el definitivo. Pide cambios pequeños, de uno en uno.

#### Pasos

- Pasa el ratón por la vista 3D y pulsa la tecla **Z**. En el menú circular elige **Rendered**: así ves la luz y los materiales de verdad.

- Gira la vista arrastrando con la **rueda del ratón** pulsada.

- Pídele a Claude un cambio cada vez:

```text
Haz que la luz sea más cálida y suave, y que el material de [objeto] parezca más [brillante / mate / rugoso]. Cambia solo eso y no toques lo demás.
```

> 💡 Si no sabes cómo describir algo, usa comparaciones: «como madera de roble», «como un metal cepillado».

**✅ Comprobación:** la vista Rendered se parece a lo que tenías en mente.

#### 3. Ponle movimiento
_10 min · la animación_

Una animación son muchos dibujos seguidos. Claude coloca los puntos clave del movimiento y Blender rellena el resto.

#### Pasos

- Pídele a Claude:

```text
Anímalo durante 5 segundos a 24 fotogramas por segundo, es decir, 120 fotogramas. Que [la cámara gire alrededor del objeto / el objeto gire sobre sí mismo] con un movimiento suave que se pueda repetir en bucle. Ajusta la línea de tiempo.
```

- Pulsa la **barra espaciadora** en Blender para reproducirla.

**✅ Comprobación:** al reproducir, el movimiento es suave y termina donde empieza.

#### 4. Renderiza y guarda
_5-20 min · el emplatado_

Renderizar es que Blender calcule cada imagen final. Le pedimos a Claude que lo deje configurado para sacar un vídeo.

#### Pasos

- Pídele a Claude:

```text
Configura el render para exportar un vídeo MP4 en 1080p con el motor EEVEE, que es más rápido, y dime dónde se guardará.
```

- En Blender: **Render → Render Animation** (o **Ctrl+F12**).
- Espera a que termine: verás cada fotograma calculándose.

> 💡 Si tarda demasiado, pídele a Claude «baja la calidad a 720p para probar». Cuando te guste, vuelve a 1080p.

**✅ Comprobación:** tienes un archivo .mp4 que se ve como tu animación.

**Al terminar:** Ya tienes tu resultado en 3D. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otras ideas.

### Receta 2: Una escena completa

Una habitación, un rincón o un paisaje, con varios objetos y luz de atardecer.

- ⏱ 35 min
- 👩‍🍳 Media
- 🏠 Escena
- 🍽 Resultado: una imagen de tu escena
- Versión web: https://amri.es/recetas/blender-3d--escena.html
- Ideas de ejemplo:
  - Una escena: una habitación pequeña y acogedora con un escritorio, una lámpara encendida y una planta, con luz de atardecer

#### 1. Pídele la escena a Claude
_10 min · la orden_

Claude construye la escena escribiendo órdenes dentro de Blender. Tú verás cómo aparecen los objetos.

#### Pasos

- En el mismo chat de Claude, copia este mensaje y pégalo:

```text
Estás conectado a mi Blender. Quiero crear [la idea de la persona].

Dime primero el plan en pasos cortos. Después constrúyelo en mi escena: borra el cubo inicial, crea los objetos con formas y proporciones creíbles, ponles materiales, coloca una luz y una cámara con un buen encuadre, y ponles nombres claros.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu escena.
- **Materiales**: el aspecto de cada superficie (madera, metal, cerámica…).
- **Luz y cámara**: lo que hace que la escena se vea bien, igual que en una foto.

> 💡 Empieza con algo simple: un objeto o una escena pequeña. Cuando funcione, añade cosas poco a poco.

**✅ Comprobación:** en Blender ves aparecer los objetos y Claude te explica lo que ha hecho.

#### 2. Ajusta materiales y luz
_10 min · pulir el resultado_

El primer intento casi nunca es el definitivo. Pide cambios pequeños, de uno en uno.

#### Pasos

- Pasa el ratón por la vista 3D y pulsa la tecla **Z**. En el menú circular elige **Rendered**: así ves la luz y los materiales de verdad.

- Gira la vista arrastrando con la **rueda del ratón** pulsada.

- Pídele a Claude un cambio cada vez:

```text
Haz que la luz sea más cálida y suave, y que el material de [objeto] parezca más [brillante / mate / rugoso]. Cambia solo eso y no toques lo demás.
```

> 💡 Si no sabes cómo describir algo, usa comparaciones: «como madera de roble», «como un metal cepillado».

**✅ Comprobación:** la vista Rendered se parece a lo que tenías en mente.

#### 3. Ponle movimiento
_10 min · la animación_

Una animación son muchos dibujos seguidos. Claude coloca los puntos clave del movimiento y Blender rellena el resto.

#### Pasos

- Pídele a Claude:

```text
Anímalo durante 5 segundos a 24 fotogramas por segundo, es decir, 120 fotogramas. Que [la cámara gire alrededor del objeto / el objeto gire sobre sí mismo] con un movimiento suave que se pueda repetir en bucle. Ajusta la línea de tiempo.
```

- Pulsa la **barra espaciadora** en Blender para reproducirla.

**✅ Comprobación:** al reproducir, el movimiento es suave y termina donde empieza.

#### 4. Renderiza y guarda
_5-20 min · el emplatado_

Renderizar es que Blender calcule cada imagen final. Le pedimos a Claude que lo deje configurado para sacar un vídeo.

#### Pasos

- Pídele a Claude:

```text
Configura el render para exportar un vídeo MP4 en 1080p con el motor EEVEE, que es más rápido, y dime dónde se guardará.
```

- En Blender: **Render → Render Animation** (o **Ctrl+F12**).
- Espera a que termine: verás cada fotograma calculándose.

> 💡 Si tarda demasiado, pídele a Claude «baja la calidad a 720p para probar». Cuando te guste, vuelve a 1080p.

**✅ Comprobación:** tienes un archivo .mp4 que se ve como tu animación.

**Al terminar:** Ya tienes tu resultado en 3D. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otras ideas.

### Receta 3: Tu logo en 3D

Tu logo en relieve, con un material dorado, girando despacio.

- ⏱ 35 min
- 👩‍🍳 Media
- ✨ Logo
- 🍽 Resultado: tu logo 3D en imagen y vídeo
- Versión web: https://amri.es/recetas/blender-3d--logo-3d.html
- Ideas de ejemplo:
  - Mi logo en 3D: un logo sencillo en 3D, con forma de letra A en relieve y material dorado, girando despacio sobre un fondo liso

#### 1. Pídele la escena a Claude
_10 min · la orden_

Claude construye la escena escribiendo órdenes dentro de Blender. Tú verás cómo aparecen los objetos.

#### Pasos

- En el mismo chat de Claude, copia este mensaje y pégalo:

```text
Estás conectado a mi Blender. Quiero crear [la idea de la persona].

Dime primero el plan en pasos cortos. Después constrúyelo en mi escena: borra el cubo inicial, crea los objetos con formas y proporciones creíbles, ponles materiales, coloca una luz y una cámara con un buen encuadre, y ponles nombres claros.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu escena.
- **Materiales**: el aspecto de cada superficie (madera, metal, cerámica…).
- **Luz y cámara**: lo que hace que la escena se vea bien, igual que en una foto.

> 💡 Empieza con algo simple: un objeto o una escena pequeña. Cuando funcione, añade cosas poco a poco.

**✅ Comprobación:** en Blender ves aparecer los objetos y Claude te explica lo que ha hecho.

#### 2. Ajusta materiales y luz
_10 min · pulir el resultado_

El primer intento casi nunca es el definitivo. Pide cambios pequeños, de uno en uno.

#### Pasos

- Pasa el ratón por la vista 3D y pulsa la tecla **Z**. En el menú circular elige **Rendered**: así ves la luz y los materiales de verdad.

- Gira la vista arrastrando con la **rueda del ratón** pulsada.

- Pídele a Claude un cambio cada vez:

```text
Haz que la luz sea más cálida y suave, y que el material de [objeto] parezca más [brillante / mate / rugoso]. Cambia solo eso y no toques lo demás.
```

> 💡 Si no sabes cómo describir algo, usa comparaciones: «como madera de roble», «como un metal cepillado».

**✅ Comprobación:** la vista Rendered se parece a lo que tenías en mente.

#### 3. Ponle movimiento
_10 min · la animación_

Una animación son muchos dibujos seguidos. Claude coloca los puntos clave del movimiento y Blender rellena el resto.

#### Pasos

- Pídele a Claude:

```text
Anímalo durante 5 segundos a 24 fotogramas por segundo, es decir, 120 fotogramas. Que [la cámara gire alrededor del objeto / el objeto gire sobre sí mismo] con un movimiento suave que se pueda repetir en bucle. Ajusta la línea de tiempo.
```

- Pulsa la **barra espaciadora** en Blender para reproducirla.

**✅ Comprobación:** al reproducir, el movimiento es suave y termina donde empieza.

#### 4. Renderiza y guarda
_5-20 min · el emplatado_

Renderizar es que Blender calcule cada imagen final. Le pedimos a Claude que lo deje configurado para sacar un vídeo.

#### Pasos

- Pídele a Claude:

```text
Configura el render para exportar un vídeo MP4 en 1080p con el motor EEVEE, que es más rápido, y dime dónde se guardará.
```

- En Blender: **Render → Render Animation** (o **Ctrl+F12**).
- Espera a que termine: verás cada fotograma calculándose.

> 💡 Si tarda demasiado, pídele a Claude «baja la calidad a 720p para probar». Cuando te guste, vuelve a 1080p.

**✅ Comprobación:** tienes un archivo .mp4 que se ve como tu animación.

**Al terminar:** Ya tienes tu resultado en 3D. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otras ideas.

### Receta 4: Tu producto girando

Tu producto sobre un pedestal, con la cámara girando alrededor en bucle.

- ⏱ 40 min
- 👩‍🍳 Media
- 🔄 Producto
- 🍽 Resultado: un vídeo en bucle de tu producto
- Versión web: https://amri.es/recetas/blender-3d--producto.html
- Ideas de ejemplo:
  - Producto girando: una botella de perfume sobre un pedestal blanco, con la cámara girando alrededor en un bucle suave

#### 1. Pídele la escena a Claude
_10 min · la orden_

Claude construye la escena escribiendo órdenes dentro de Blender. Tú verás cómo aparecen los objetos.

#### Pasos

- En el mismo chat de Claude, copia este mensaje y pégalo:

```text
Estás conectado a mi Blender. Quiero crear [la idea de la persona].

Dime primero el plan en pasos cortos. Después constrúyelo en mi escena: borra el cubo inicial, crea los objetos con formas y proporciones creíbles, ponles materiales, coloca una luz y una cámara con un buen encuadre, y ponles nombres claros.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu escena.
- **Materiales**: el aspecto de cada superficie (madera, metal, cerámica…).
- **Luz y cámara**: lo que hace que la escena se vea bien, igual que en una foto.

> 💡 Empieza con algo simple: un objeto o una escena pequeña. Cuando funcione, añade cosas poco a poco.

**✅ Comprobación:** en Blender ves aparecer los objetos y Claude te explica lo que ha hecho.

#### 2. Ajusta materiales y luz
_10 min · pulir el resultado_

El primer intento casi nunca es el definitivo. Pide cambios pequeños, de uno en uno.

#### Pasos

- Pasa el ratón por la vista 3D y pulsa la tecla **Z**. En el menú circular elige **Rendered**: así ves la luz y los materiales de verdad.

- Gira la vista arrastrando con la **rueda del ratón** pulsada.

- Pídele a Claude un cambio cada vez:

```text
Haz que la luz sea más cálida y suave, y que el material de [objeto] parezca más [brillante / mate / rugoso]. Cambia solo eso y no toques lo demás.
```

> 💡 Si no sabes cómo describir algo, usa comparaciones: «como madera de roble», «como un metal cepillado».

**✅ Comprobación:** la vista Rendered se parece a lo que tenías en mente.

#### 3. Ponle movimiento
_10 min · la animación_

Una animación son muchos dibujos seguidos. Claude coloca los puntos clave del movimiento y Blender rellena el resto.

#### Pasos

- Pídele a Claude:

```text
Anímalo durante 5 segundos a 24 fotogramas por segundo, es decir, 120 fotogramas. Que [la cámara gire alrededor del objeto / el objeto gire sobre sí mismo] con un movimiento suave que se pueda repetir en bucle. Ajusta la línea de tiempo.
```

- Pulsa la **barra espaciadora** en Blender para reproducirla.

**✅ Comprobación:** al reproducir, el movimiento es suave y termina donde empieza.

#### 4. Renderiza y guarda
_5-20 min · el emplatado_

Renderizar es que Blender calcule cada imagen final. Le pedimos a Claude que lo deje configurado para sacar un vídeo.

#### Pasos

- Pídele a Claude:

```text
Configura el render para exportar un vídeo MP4 en 1080p con el motor EEVEE, que es más rápido, y dime dónde se guardará.
```

- En Blender: **Render → Render Animation** (o **Ctrl+F12**).
- Espera a que termine: verás cada fotograma calculándose.

> 💡 Si tarda demasiado, pídele a Claude «baja la calidad a 720p para probar». Cuando te guste, vuelve a 1080p.

**✅ Comprobación:** tienes un archivo .mp4 que se ve como tu animación.

**Al terminar:** Ya tienes tu resultado en 3D. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otras ideas.

### Receta 5: Un personaje simpático

Un personaje hecho con formas simples que saluda.

- ⏱ 40 min
- 👩‍🍳 Media
- 🙂 Personaje
- 🍽 Resultado: tu personaje animado
- Versión web: https://amri.es/recetas/blender-3d--personaje.html
- Ideas de ejemplo:
  - Personaje simpático: un personaje simpático hecho con formas simples (una esfera con ojos y brazos) que saluda

#### 1. Pídele la escena a Claude
_10 min · la orden_

Claude construye la escena escribiendo órdenes dentro de Blender. Tú verás cómo aparecen los objetos.

#### Pasos

- En el mismo chat de Claude, copia este mensaje y pégalo:

```text
Estás conectado a mi Blender. Quiero crear [la idea de la persona].

Dime primero el plan en pasos cortos. Después constrúyelo en mi escena: borra el cubo inicial, crea los objetos con formas y proporciones creíbles, ponles materiales, coloca una luz y una cámara con un buen encuadre, y ponles nombres claros.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Dime primero el plan**: así puedes corregirlo antes de que toque tu escena.
- **Materiales**: el aspecto de cada superficie (madera, metal, cerámica…).
- **Luz y cámara**: lo que hace que la escena se vea bien, igual que en una foto.

> 💡 Empieza con algo simple: un objeto o una escena pequeña. Cuando funcione, añade cosas poco a poco.

**✅ Comprobación:** en Blender ves aparecer los objetos y Claude te explica lo que ha hecho.

#### 2. Ajusta materiales y luz
_10 min · pulir el resultado_

El primer intento casi nunca es el definitivo. Pide cambios pequeños, de uno en uno.

#### Pasos

- Pasa el ratón por la vista 3D y pulsa la tecla **Z**. En el menú circular elige **Rendered**: así ves la luz y los materiales de verdad.

- Gira la vista arrastrando con la **rueda del ratón** pulsada.

- Pídele a Claude un cambio cada vez:

```text
Haz que la luz sea más cálida y suave, y que el material de [objeto] parezca más [brillante / mate / rugoso]. Cambia solo eso y no toques lo demás.
```

> 💡 Si no sabes cómo describir algo, usa comparaciones: «como madera de roble», «como un metal cepillado».

**✅ Comprobación:** la vista Rendered se parece a lo que tenías en mente.

#### 3. Ponle movimiento
_10 min · la animación_

Una animación son muchos dibujos seguidos. Claude coloca los puntos clave del movimiento y Blender rellena el resto.

#### Pasos

- Pídele a Claude:

```text
Anímalo durante 5 segundos a 24 fotogramas por segundo, es decir, 120 fotogramas. Que [la cámara gire alrededor del objeto / el objeto gire sobre sí mismo] con un movimiento suave que se pueda repetir en bucle. Ajusta la línea de tiempo.
```

- Pulsa la **barra espaciadora** en Blender para reproducirla.

**✅ Comprobación:** al reproducir, el movimiento es suave y termina donde empieza.

#### 4. Renderiza y guarda
_5-20 min · el emplatado_

Renderizar es que Blender calcule cada imagen final. Le pedimos a Claude que lo deje configurado para sacar un vídeo.

#### Pasos

- Pídele a Claude:

```text
Configura el render para exportar un vídeo MP4 en 1080p con el motor EEVEE, que es más rápido, y dime dónde se guardará.
```

- En Blender: **Render → Render Animation** (o **Ctrl+F12**).
- Espera a que termine: verás cada fotograma calculándose.

> 💡 Si tarda demasiado, pídele a Claude «baja la calidad a 720p para probar». Cuando te guste, vuelve a 1080p.

**✅ Comprobación:** tienes un archivo .mp4 que se ve como tu animación.

**Al terminar:** Ya tienes tu resultado en 3D. Guarda el proyecto y la orden que le diste a Claude: son tu receta para repetirlo con otras ideas.

## Al terminar

Blender está conectado con Claude. Elige qué quieres crear.

## Extras (opcionales, después de servir)

### Extra 1. Guarda y protege tu trabajo
_Siempre · consejos_

Claude ejecuta órdenes dentro de Blender, y algunos cambios grandes no se deshacen con un solo Ctrl+Z.

- **Guarda antes** de cada petición grande: **File → Save**.

- Usa **File → Save Incremental** para guardar versiones (v1, v2, v3…) sin perder las anteriores.

- Prueba primero en un proyecto vacío, no en uno importante.

- Pídele cosas concretas: cuanto más claro, menos riesgo de sorpresas.

### Extra 2. Llévalo a tu web
_10 min · opcional_

Puedes mostrar tu objeto 3D en una página web para que lo giren tus visitantes.

#### Pasos

- En Blender: **File → Export → glTF 2.0 (.glb)** y guárdalo.

- Sigue la receta [Tu webapp online y gratis](webapp-gratis.html) y, cuando Claude te pida el contenido, pídele:

```text
Quiero mostrar mi modelo 3D (archivo .glb) en la web para que los visitantes lo puedan girar con el ratón. Explícame paso a paso cómo añadirlo.
```

### Extra 3. Si algo no funciona
_Siempre · revisa esto_

Casi todos los fallos vienen de una de estas cosas.

- Blender tiene que estar **abierto** con la conexión encendida: pestaña BlenderMCP → **Start MCP server**.

- Comprueba que el conector de Blender está añadido en Claude Desktop.

- Cierra y abre Claude Desktop, y vuelve a encender la conexión en Blender.

- Comprueba que usas Blender 4.2 o superior.

- Repite el mensaje de comprobación: «¿Estás conectado a Blender?».

**💡 Ideas para seguir cocinando**

- Un logo en 3D para la intro de tus vídeos.
- Un mockup de tu producto antes de fabricarlo.
- Un personaje mascota para tu marca.
- Fondos 3D para tus posts y miniaturas.

## Sigue con

- `/amri:higgsfield-cine` · Imágenes y vídeos de cine con Higgsfield
- `/amri:video-aftereffects` · Edita vídeo con Claude y After Effects
- `/amri:redes-sociales` · Tus redes sociales con Claude
- `/amri:animaciones-opus` · Animaciones con Claude Opus 5.5
- `/amri:chef` · combina varias recetas en un proyecto propio
