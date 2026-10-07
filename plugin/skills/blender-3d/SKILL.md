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

Una taza, una lámpara o lo que quieras, con su material, su luz y una imagen final.

- ⏱ 25 min
- 👩‍🍳 Fácil
- 🧊 Objeto
- 🍽 Resultado: una imagen PNG de tu objeto (1920×1080)
- Versión web: https://amri.es/recetas/blender-3d--objeto.html
- Ideas de ejemplo:
  - Taza: una taza de cerámica azul sobre una mesa de madera, con luz cálida de mañana
  - Lámpara: una lámpara de mesa moderna encendida, sobre un escritorio de madera clara

#### 1. Pide el objeto
_10 min · Claude modela_

```text
Estás conectado a mi Blender. Quiero crear [la idea de la persona].

Dime primero el plan en pasos cortos. Después: borra el cubo inicial, modela el objeto con proporciones reales (en centímetros), ponle un material creíble, una superficie debajo, una luz principal suave y una cámara a la altura de los ojos con el objeto centrado. Nombra cada objeto.
```

**✅ Comprobación:** ves el objeto en la vista 3D.

#### 2. Míralo con luz de verdad
_5 min · Rendered_

- Pasa el ratón por la vista 3D, pulsa **Z** y elige **Rendered**.
- Pide cambios de uno en uno:

```text
Haz que la cerámica sea más brillante y la luz más cálida. Cambia solo eso.
```

> 💡 Usa comparaciones: «como madera de roble», «como metal cepillado».

**✅ Comprobación:** el objeto se ve como lo imaginabas.

#### 3. Saca la imagen
_10 min · render_

```text
Configura el render a 1920×1080 con el motor EEVEE, que es rápido.
```

- Pulsa **F12**.
- En la ventana de la imagen: **Image → Save As** y guárdala como PNG.
- Guarda también el proyecto: **File → Save**.

**✅ Comprobación:** tienes la imagen PNG y el archivo .blend guardados.

**Al terminar:** Tienes tu primer objeto en 3D. Guarda el archivo .blend: podrás cambiarlo cuando quieras.

### Receta 2: Una escena completa

Una habitación o un rincón con varios objetos y luz de atardecer.

- ⏱ 35 min
- 👩‍🍳 Media
- 🏠 Escena
- 🍽 Resultado: una imagen de tu escena
- Versión web: https://amri.es/recetas/blender-3d--escena.html
- Ideas de ejemplo:
  - Habitación acogedora: una habitación pequeña y acogedora con un escritorio, una lámpara encendida y una planta, con luz de atardecer
  - Mi tienda o local: el mostrador de una pequeña tienda con estanterías, productos y luz natural

#### 1. Primero, el plano
_5 min · organizar_

```text
Quiero crear [la idea de la persona]. Antes de construir nada, dame una lista de los objetos, dónde va cada uno y desde dónde mira la cámara. Espera mi OK.
```

**✅ Comprobación:** has aprobado la lista de objetos.

#### 2. Construye por partes
_15 min · Claude modela_

```text
OK. Construye primero la habitación (suelo y paredes), después los muebles grandes y al final los detalles. Enséñamelo después de cada parte. Pon nombres claros y agrupa los objetos en colecciones.
```

> 💡 Por partes es más fácil corregir: si algo no te gusta, lo dices antes de seguir.

**✅ Comprobación:** la escena tiene todos sus objetos.

#### 3. La luz de atardecer
_5 min · ambiente_

```text
Pon luz de atardecer entrando por una ventana, cálida y con sombras largas, y una luz de relleno suave para que no quede muy oscuro.
```

Mírala en modo **Rendered** (tecla Z).

**✅ Comprobación:** la escena tiene ambiente.

#### 4. Saca la imagen
_10 min · render_

```text
Configura el render a 1920×1080 con EEVEE y encuadra la cámara para que se vea toda la escena.
```

- Pulsa **F12** y guárdala con **Image → Save As**.

**✅ Comprobación:** tienes la imagen de tu escena.

**Al terminar:** Tienes tu escena. Prueba a cambiar la hora del día pidiendo otra luz.

### Receta 3: Tu logo en 3D

Tu logo en relieve, con material dorado, girando despacio.

- ⏱ 35 min
- 👩‍🍳 Media
- ✨ Logo
- 🍽 Resultado: tu logo 3D en imagen y en vídeo
- Versión web: https://amri.es/recetas/blender-3d--logo-3d.html
- Ideas de ejemplo:
  - Dorado girando: mi logo en 3D, en relieve y material dorado, girando despacio sobre un fondo liso
  - Cristal: mi logo en 3D de cristal, con reflejos, sobre un fondo de degradado

#### 1. Importa tu logo en SVG
_5 min · el material_

- Necesitas tu logo en **SVG** (formato vectorial).
- En Blender: **File → Import → Scalable Vector Graphics (.svg)**.

> 💡 ¿Solo tienes PNG? Mira «Tu logo en todos los formatos» en el libro [del logo](logo-ia--formatos.html).

**✅ Comprobación:** ves las curvas de tu logo en la escena (muy pequeñas: es normal).

#### 2. Dale volumen
_10 min · Claude modela_

```text
Estás conectado a mi Blender. He importado mi logo en SVG. Quiero [la idea de la persona].

Une las curvas, escálalo a un tamaño cómodo, dale grosor (extrusión) y bisel suave en los bordes, y colócalo de pie en el centro. Pon el material, una luz de estudio y una cámara de frente. Dime el plan antes.
```

**✅ Comprobación:** tu logo tiene volumen y se reconoce.

#### 3. Que gire en bucle
_10 min · animación_

```text
Anímalo: que gire una vuelta completa sobre sí mismo en 5 segundos (120 fotogramas a 24 fps), con un movimiento constante para que el bucle no se note.
```

Pulsa la barra espaciadora para verlo.

**✅ Comprobación:** gira suave y el final enlaza con el principio.

#### 4. Renderiza imagen y vídeo
_10 min · render_

```text
Configura el render para exportar un vídeo MP4 en 1080p con EEVEE y dime dónde se guardará.
```

- **Render → Render Animation** (Ctrl+F12).
- Para una imagen fija, ve a un fotograma bonito y pulsa **F12**.

**✅ Comprobación:** tienes el vídeo y una imagen de tu logo.

**Al terminar:** Tu logo en 3D está listo. Úsalo como intro de tus vídeos o en tu web.

### Receta 4: Tu producto girando

Tu producto sobre un pedestal, con la cámara girando alrededor en bucle, como en una tienda online.

- ⏱ 40 min
- 👩‍🍳 Media
- 🔄 Producto
- 🍽 Resultado: un vídeo en bucle de tu producto
- Versión web: https://amri.es/recetas/blender-3d--producto.html
- Ideas de ejemplo:
  - Botella o frasco: una botella de perfume sobre un pedestal blanco, con la cámara girando alrededor en un bucle suave
  - Caja o paquete: la caja de mi producto sobre un pedestal, con la cámara girando alrededor en un bucle suave

#### 1. Describe tu producto con medidas
_5 min · precisión_

Cuanto más precisa la descripción (medidas, materiales, colores), más se parecerá. Si tienes fotos, súbelas al chat como referencia.

**✅ Comprobación:** tienes la descripción y alguna foto.

#### 2. Modela el producto y el pedestal
_15 min · Claude modela_

```text
Estás conectado a mi Blender. Quiero [la idea de la persona]. Mi producto: [descripción con medidas]. Te adjunto fotos de referencia.

Modélalo con proporciones reales, ponle materiales creíbles, colócalo sobre un pedestal cilíndrico blanco y usa una luz de estudio suave con fondo liso. Dime el plan antes.
```

**✅ Comprobación:** tu producto se reconoce en la escena.

#### 3. Cámara que gira en bucle
_10 min · animación_

```text
Haz que la cámara gire alrededor del producto una vuelta completa en 6 segundos (144 fotogramas a 24 fps), siempre mirando al producto, a velocidad constante para que el bucle sea perfecto.
```

**✅ Comprobación:** el giro es suave y el bucle no se nota.

#### 4. Renderiza en cuadrado y vertical
_10 min · render_

```text
Exporta el vídeo en MP4 con EEVEE, primero en 1080×1080 y después en 1080×1920, sin cambiar la animación.
```

- **Render → Render Animation** para cada formato.

**✅ Comprobación:** tienes los dos vídeos.

**Al terminar:** Tu producto gira como en un anuncio. Úsalo en tu tienda o en redes.

### Receta 5: Un personaje simpático

Un personaje hecho con formas simples que saluda con la mano.

- ⏱ 40 min
- 👩‍🍳 Media
- 🙂 Personaje
- 🍽 Resultado: tu personaje saludando en vídeo
- Versión web: https://amri.es/recetas/blender-3d--personaje.html
- Ideas de ejemplo:
  - Formas simples: un personaje simpático hecho con formas simples (una esfera con ojos y brazos) que saluda
  - Mascota de mi marca: la mascota de mi marca, con mis colores, hecha con formas simples, que saluda

#### 1. Constrúyelo con formas
_15 min · Claude modela_

```text
Estás conectado a mi Blender. Quiero [la idea de la persona].

Hazlo con formas sencillas (esferas, cilindros), con ojos grandes y amables, colores alegres y materiales mate. Pon cada parte con su nombre (cuerpo, ojo_izq, brazo_der…) y emparenta los brazos al cuerpo. Dime el plan antes.
```

> 💡 Formas simples = más simpático y más fácil de animar.

**✅ Comprobación:** ves a tu personaje en la escena.

#### 2. Que salude
_10 min · animación_

```text
Anima el brazo derecho para que salude: sube en 0,5 s, se mueve de lado a lado tres veces y baja. Que el cuerpo se balancee un poco a la vez. 4 segundos en total a 24 fps.
```

Reprodúcelo con la barra espaciadora.

**✅ Comprobación:** tu personaje saluda con un movimiento natural.

#### 3. Ajusta la expresión
_5 min · carácter_

```text
Hazle parpadear una vez en el segundo 2 y que sonría un poco más. Cambia solo eso.
```

**✅ Comprobación:** tiene la expresión que querías.

#### 4. Renderiza el saludo
_10 min · render_

```text
Exporta el vídeo en MP4 1080p con EEVEE, con fondo de un color liso [tu color].
```

- **Render → Render Animation**.

**✅ Comprobación:** tienes el vídeo de tu personaje saludando.

**Al terminar:** Tu personaje saluda. Puedes usarlo como mascota en tus redes.

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
