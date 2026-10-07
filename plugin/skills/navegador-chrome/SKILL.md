---
name: navegador-chrome
description: "Receta de AMRI «Claude navega por ti con Chrome». Compara precios, investiga con fuentes, rellena formularios sin enviarlos, planea viajes y revisa tu propia web. Comprar y pagar, siempre tú. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Claude navega por ti con Chrome

Compara precios, investiga con fuentes, rellena formularios sin enviarlos, planea viajes y revisa tu propia web. Comprar y pagar, siempre tú.

- 📕 5 recetas
- ⏱ 15-20 min cada una
- 💶 Requiere un plan de pago de Claude
- 🍽 Resultado: tareas web hechas mientras miras
- Categoría: Conecta tus apps
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/navegador-chrome.html

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

- **Google Chrome**: el navegador donde trabajará Claude.
- **Claude in Chrome**: una extensión oficial que ve la página, hace clic y escribe.
- **Un plan de pago de Claude**: la extensión no está en el plan gratuito.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Instala la extensión
_5 min · el pinche_

Una extensión es un pequeño añadido para tu navegador.

- Abre Chrome y busca **«Claude»** en la [Chrome Web Store](https://chromewebstore.google.com).

- Pulsa **Añadir a Chrome**.

- Pulsa el icono del puzle 🧩 y fija Claude con la chincheta.

- Ábrela e inicia sesión con tu cuenta de Claude.

> 💡 Comprueba que el autor es Anthropic. Hay extensiones de imitación.

**✅ Comprobación:** al pulsar el icono, se abre Claude en un panel lateral.

### 2. Decide los permisos
_2 min · reglas de la casa_

- Cuando te pida permiso para un sitio, léelo con calma.
- Al principio, elige la opción de que **te pregunte antes de actuar**.
- No le des acceso a tu banco ni a webs con datos muy sensibles.

**✅ Comprobación:** sabes dónde se aprueban y se quitan los permisos.

### 3. Tu mensaje de seguridad
_1 min · para siempre_

Añade esto al final de cada tarea que le pidas:

```text
Antes de empezar, dime tu plan en pasos cortos. Pídeme permiso antes de pulsar cualquier botón de enviar, reservar, comprar o pagar. Al terminar, dime de dónde has sacado cada dato, con su enlace.
```

**✅ Comprobación:** lo tienes guardado en una nota.

## Recetas del libro

### Receta 1: Compara precios en varias tiendas

Una tabla con precio, envío y valoraciones de un producto en 4 tiendas.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 🛒 Compras
- 🍽 Resultado: una tabla comparativa con enlaces
- Versión web: https://amri.es/recetas/navegador-chrome--comparar.html
- Ideas de ejemplo:
  - Un producto: comparar el precio de un producto en 4 tiendas online y hacerme una tabla con precio, envío y valoraciones
  - Seguros o tarifas: comparar 4 tarifas de móvil e internet y hacerme una tabla con lo que incluye cada una

#### 1. Dale la tarea
_10 min · mira cómo trabaja_

```text
Quiero [la idea de la persona]: [qué exactamente]. Antes de empezar, dime tu plan en pasos cortos. No compres ni añadas nada al carrito. Al terminar, dame la tabla con enlaces.
```

**✅ Comprobación:** tienes la tabla.

#### 2. Comprueba dos datos
_5 min · con lupa_

Abre dos enlaces y comprueba el precio. La IA puede equivocarse al leer una web.

**✅ Comprobación:** los precios comprobados coinciden.

**Al terminar:** Ya sabes dónde comprarlo. La compra, tú.

### Receta 2: Investiga un tema con fuentes

Lee las mejores fuentes sobre un tema y te resume lo importante, con enlaces.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🔎 Investigar
- 🍽 Resultado: un resumen con sus fuentes
- Versión web: https://amri.es/recetas/navegador-chrome--investigar.html
- Ideas de ejemplo:
  - Un tema: leer las 5 mejores fuentes sobre un tema y resumirme lo importante con los enlaces
  - Ayudas o convocatorias: buscar ayudas o convocatorias abiertas y resumir requisitos, plazos y enlaces

#### 1. Dale la tarea
_15 min · leer por ti_

```text
Quiero [la idea de la persona]: [el tema]. Usa fuentes fiables (oficiales cuando las haya). Antes de empezar, dime tu plan. Al terminar, resume en 10 puntos con el enlace de cada dato.
```

**✅ Comprobación:** tienes el resumen con enlaces.

#### 2. Revisa las fuentes
_5 min · confianza_

```text
¿Cuáles de esas fuentes son oficiales y cuáles no? ¿Hay algo en lo que se contradigan?
```

**✅ Comprobación:** sabes qué fuentes son fiables.

**Al terminar:** Tienes tu resumen. Para decisiones importantes, lee tú las fuentes originales.

### Receta 3: Rellena un formulario largo (sin enviarlo)

Claude rellena con tus datos y tú revisas y pulsas enviar.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 📝 Formularios
- 🍽 Resultado: un formulario relleno, listo para que lo envíes
- Versión web: https://amri.es/recetas/navegador-chrome--formulario.html
- Ideas de ejemplo:
  - Inscripción: rellenar un formulario largo de inscripción
  - Solicitud: rellenar una solicitud

#### 1. Solo los datos necesarios
_5 min · la regla de oro_

- Escribe en el chat solo los datos que pide el formulario.
- **Nunca** le des contraseñas, números de tarjeta ni códigos de verificación.

**✅ Comprobación:** tienes tus datos preparados.

#### 2. Que lo rellene
_10 min · sin enviar_

```text
Quiero [la idea de la persona] en esta página. Mis datos: [los imprescindibles]. Rellénalo, pero NO lo envíes. Cuando termines, avísame para que lo revise y lo envíe yo.
```

**✅ Comprobación:** el formulario está relleno y el botón de enviar lo pulsas tú.

**Al terminar:** El formulario está listo. El botón de enviar lo pulsas tú.

### Receta 4: Planea un viaje (sin reservar)

Opciones de alojamiento y transporte en una tabla, para que decidas tú.

- ⏱ 20 min
- 👩‍🍳 Fácil
- ✈️ Viajes
- 🍽 Resultado: opciones comparadas con enlaces
- Versión web: https://amri.es/recetas/navegador-chrome--viaje.html
- Ideas de ejemplo:
  - Alojamiento: buscar 5 alojamientos y hacerme una tabla con precio, valoraciones y condiciones de cancelación
  - Transporte: comparar tren, avión y coche para el viaje, con precio y duración

#### 1. Dale la tarea
_15 min · buscar_

```text
Para este viaje: [dónde, cuándo, cuántos], quiero [la idea de la persona]. No reserves ni pagues nada. Antes de empezar, dime tu plan. Al terminar, dame la tabla con enlaces.
```

**✅ Comprobación:** tienes las opciones en una tabla.

#### 2. Decide tú
_5 min · elegir_

```text
De estas opciones, ¿cuál me recomiendas y por qué? Dime también qué letra pequeña debería revisar.
```

**✅ Comprobación:** has elegido y sabes qué revisar antes de reservar.

**Al terminar:** Tienes tus opciones. La reserva y el pago, tú.

### Receta 5: Revisa tu propia web

Comprueba enlaces rotos, textos confusos y cómo se ve desde fuera.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 🧪 Revisión
- 🍽 Resultado: una lista de mejoras de tu web
- Versión web: https://amri.es/recetas/navegador-chrome--tu-web.html
- Ideas de ejemplo:
  - Revisión general: revisar mi web: enlaces rotos, textos confusos, faltas y cosas que no se entienden
  - Como un cliente: usar mi web como lo haría un cliente nuevo y decirme dónde se atasca

#### 1. Dale la tarea
_10 min · recorrerla_

```text
Abre mi web [dirección] y quiero [la idea de la persona]. No envíes ningún formulario. Al terminar, dame una lista ordenada de lo más grave a lo menos.
```

**✅ Comprobación:** tienes la lista de mejoras.

#### 2. Arréglalo
_5 min · siguiente paso_

Usa la receta [Cambia tu web sin romperla](webapp-gratis--cambios.html) para corregir lo más grave primero.

**✅ Comprobación:** sabes por dónde empezar.

**Al terminar:** Tienes tu lista de mejoras. Para cambiarlas, mira el libro de la web.

## Al terminar

La extensión está lista. Empieza con tareas pequeñas y ve dándole confianza poco a poco.

## Extras (opcionales, después de servir)

### Extra 1. Seguridad: ojo con las trampas
_Siempre · importante_

Algunas webs esconden instrucciones para engañar a los asistentes de IA.

- Si Claude hace algo que no le pediste, **páralo** con el botón de detener.
- Usa la extensión en webs de confianza.
- Nunca le des contraseñas, números de tarjeta ni códigos de verificación.
- Compras y pagos, siempre tú.

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:slack-equipo` · Claude en tu Slack
- `/amri:chef` · combina varias recetas en un proyecto propio
