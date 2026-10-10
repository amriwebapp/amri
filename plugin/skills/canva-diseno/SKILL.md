---
name: canva-diseno
description: "Receta de AMRI «Diseña en Canva hablando con Claude». Claude diseña en tu Canva: posts, presentaciones, carteles y tu currículum. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Diseña en Canva hablando con Claude

Claude diseña en tu Canva: posts, presentaciones, carteles y tu currículum.

- 📕 4 recetas
- 💶 Gratis si tu plan de Claude incluye conectores
- 🍽 Resultado: diseños editables en tu Canva
- Categoría: Conecta tus apps
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/canva-diseno.html

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

- **Claude**: el diseñador jefe. Decide textos, estructura y estilo.
- **Canva**: el taller. Donde se crean y guardan los diseños. Plan gratuito.
- **El conector de Canva**: el aprendiz. Crea, busca y exporta diseños en tu cuenta.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_cuentas_

- Entra en [Claude](https://claude.ai).
- Crea tu cuenta gratuita en [Canva](https://www.canva.com) si no la tienes.

**✅ Comprobación:** puedes entrar en las dos.

### 2. Conecta Canva con Claude
_el conector_

- En Claude (web o app de escritorio) abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Pulsa **Explorar conectores**, busca «Canva» y pulsa **Conectar**.
- Inicia sesión en Canva y pulsa **Permitir**.
- En un chat nuevo, pulsa **+ → Conectores** y comprueba que Canva está activado.

> 💡 Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la ayuda de Claude.

**✅ Comprobación:** Canva aparece activado.

### 3. Presenta tu marca
_el sello_

- En Canva, pulsa **Subidos → Subir archivos** y sube tu logo (mejor PNG sin fondo).
- En Claude, crea un proyecto **Mis diseños** y pega en sus instrucciones:

```text
Diseño en Canva a través del conector.
Mi marca: colores [#D2561F y #FBF6EE], tipografía [la que uses], tono [cercano y tranquilo].
Mi logo está subido en Canva con el nombre [nombre del archivo].
Antes de diseñar, propón siempre los textos y espera mi OK.
```

> 💡 ¿No tienes logo ni colores? Mira el libro [Diseña tu logo con IA](logo-ia.html), o pide a Claude una paleta de 3 colores.

**✅ Comprobación:** tienes el proyecto «Mis diseños» con tu marca.

## Recetas del libro

### Receta 1: Posts para Instagram

Tres posts con tu marca, listos para publicar o retocar.

- 👩‍🍳 Fácil
- 📱 Redes
- 🍽 Resultado: 3 posts en tu Canva
- Versión web: https://amri.es/recetas/canva-diseno--posts.html
- Ideas de ejemplo:
  - Un producto nuevo: tres posts cuadrados para Instagram que anuncien mi nuevo producto, con un titular corto y mucho aire
  - Consejos: tres posts con un consejo útil de mi sector cada uno
  - Una oferta: tres posts para una oferta de tiempo limitado

#### 1. Primero los textos
_lo que dice_

```text
Usa Canva para crear [la idea de la persona]. Antes de diseñar, propón los textos de cada post y espera mi OK.
```

**✅ Comprobación:** has aprobado los textos.

#### 2. El diseño
_Claude diseña_

```text
OK. Crea los diseños con mi marca y dame los enlaces para abrirlos en Canva.
```

**✅ Comprobación:** tienes los enlaces a 3 diseños nuevos en tu Canva.

#### 3. Retoca y descarga
_tu toque_

- Abre los enlaces y cambia lo que quieras a mano.
- O pídeselo a Claude, un cambio cada vez: «haz el titular más grande en el segundo».
- Descarga en **PNG** desde **Compartir → Descargar**.

**✅ Comprobación:** tienes los 3 posts descargados.

**Al terminar:** Tus posts están en Canva. Para el texto que acompaña a cada post, mira el libro de redes sociales.

### Receta 2: Una presentación

Diapositivas claras y visuales para explicar tu proyecto o tu clase.

- 👩‍🍳 Fácil
- 📊 Presentación
- 🍽 Resultado: una presentación en tu Canva
- Versión web: https://amri.es/recetas/canva-diseno--presentacion.html
- Ideas de ejemplo:
  - Para clientes: una presentación de 8 diapositivas, clara y visual, para explicar mi proyecto a posibles clientes
  - Para una clase: una presentación de 10 diapositivas para una clase, con poco texto y ejemplos
  - Para mi equipo: una presentación corta con los resultados del mes para mi equipo

#### 1. El guion
_la estructura_

```text
Quiero [la idea de la persona]. Propón el guion: título de cada diapositiva y una o dos frases. Una idea por diapositiva. Espera mi OK.
```

**✅ Comprobación:** has aprobado el guion.

#### 2. El diseño
_en Canva_

```text
Crea la presentación en Canva con mi marca, siguiendo el guion. Poco texto y letra grande. Dame el enlace.
```

**✅ Comprobación:** tienes la presentación en tu Canva.

#### 3. Las notas para hablar
_el discurso_

```text
Escríbeme lo que diría en cada diapositiva, en frases cortas, para no leer la pantalla.
```

**✅ Comprobación:** tienes tus notas.

**Al terminar:** Tu presentación está en Canva. Ensáyala en voz alta una vez con el cronómetro.

### Receta 3: Cartel o flyer para imprimir

Un cartel A4 para un evento, con la fecha y el lugar bien visibles.

- 👩‍🍳 Fácil
- 🖨 Impresión
- 🍽 Resultado: un cartel en PDF listo para imprimir
- Versión web: https://amri.es/recetas/canva-diseno--cartel.html
- Ideas de ejemplo:
  - Evento: un cartel A4 para un evento, con título grande, fecha, hora y lugar bien visibles
  - Mi negocio: un flyer A5 para repartir que presente mi negocio y su horario

#### 1. Los textos
_lo esencial_

```text
Usa Canva para crear [la idea de la persona]. Antes, propón los textos: lo que se tiene que leer desde lejos y lo que va en pequeño.
```

**✅ Comprobación:** has aprobado los textos.

#### 2. El diseño
_en Canva_

```text
Crea el diseño en Canva con mi marca. Que el título se lea a 3 metros. Dame el enlace.
```

**✅ Comprobación:** tienes el cartel en tu Canva.

#### 3. Exporta para imprimir
_PDF_

```text
Exporta el diseño como PDF para imprimir y dame el enlace de descarga.
```

> 💡 También puedes hacerlo desde Canva: **Compartir → Descargar → PDF para imprimir**.

**✅ Comprobación:** tienes el PDF.

**Al terminar:** Tu cartel está listo para imprimir. Imprime una prueba antes de hacer muchas copias.

### Receta 4: Tu currículum

Un currículum de una página, limpio y moderno, con tu experiencia bien contada.

- 👩‍🍳 Fácil
- 📄 CV
- 🍽 Resultado: tu CV en PDF
- Versión web: https://amri.es/recetas/canva-diseno--cv.html
- Ideas de ejemplo:
  - Un puesto concreto: un currículum de una página, limpio y moderno, para el puesto que busco
  - Cambio de sector: un currículum que destaque lo que me sirve para cambiar de sector

#### 1. Cuéntale tu experiencia
_el contenido_

```text
Quiero [la idea de la persona]. Esta es mi experiencia, sin orden: [pégala o sube tu CV antiguo]. Escríbela de forma clara y concreta, con logros y no solo tareas. No inventes nada.
```

**✅ Comprobación:** tienes los textos del CV.

#### 2. El diseño
_en Canva_

```text
Crea el currículum en Canva, en una página, limpio y fácil de leer. Dame el enlace.
```

**✅ Comprobación:** tienes el CV en tu Canva.

#### 3. Revisa y descarga
_PDF_

- Revisa fechas, nombres y tu teléfono.
- Descárgalo en **PDF**.

**✅ Comprobación:** tienes tu CV en PDF.

**Al terminar:** Tu currículum está listo. Adáptalo un poco a cada oferta: Claude te ayuda en un minuto.

## Al terminar

Canva está conectado y Claude conoce tu marca. Elige qué quieres diseñar.

## Extras (opcionales, después de servir)

### Extra 1. Si algo no funciona
_Siempre · revisa esto_

- **Claude dibuja en vez de usar Canva**: empieza el mensaje con «Usa el conector de Canva».
- **No encuentra tu logo**: dile el nombre exacto del archivo subido.
- Algunas funciones son de **Canva Pro** (kit de marca, quitar fondos); el resto funciona con el plan gratuito.

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:chef` · combina varias recetas en un proyecto propio
