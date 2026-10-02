---
name: navegador-chrome
description: "Receta de AMRI «Claude navega por ti con Chrome». Compara precios, rellena formularios y recopila información de varias webs mientras tú miras. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Claude navega por ti con Chrome

Compara precios, rellena formularios y recopila información de varias webs mientras tú miras.

- ⏱ 20 min aprox.
- 👩‍🍳 Fácil
- 💶 Requiere un plan de pago de Claude
- 🍽 Resultado: tareas web hechas mientras miras
- Categoría: Conecta tus apps
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/claude-chrome.html

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

- **Google Chrome**: la cocina. El navegador donde trabajará Claude.
- **Claude in Chrome**: el pinche. Una extensión oficial que ve la página, hace clic y escribe.
- **Un plan de pago de Claude**: la extensión no está en el plan gratuito.
- **Tus datos básicos**: solo los imprescindibles para la tarea.

## Ideas de ejemplo

- **Investigar un tema:** leer las 5 mejores fuentes sobre un tema y resumirme lo importante con los enlaces
- **Rellenar formularios:** rellenar un formulario largo de inscripción con mis datos, dejándolo listo para que yo lo envíe
- **Planear un viaje:** buscar opciones de alojamiento y transporte para un viaje, sin reservar ni pagar nada

## Antes de empezar

¿La tarea necesita tus datos personales (nombre, dirección, teléfono…)? Si dudas, elige «Sí»: te explicamos qué datos dar y cuáles nunca.

## Pasos

### 1. Instala la extensión
_5 min · el pinche_

Claude in Chrome es una extensión: un pequeño añadido para tu navegador.

- Abre Chrome y busca **«Claude»** en la [Chrome Web Store](https://chromewebstore.google.com) (la oficial, de Anthropic).

- Pulsa **Añadir a Chrome**.

- Pulsa el icono del puzle 🧩 y fija Claude con la chincheta.

- Ábrela e inicia sesión con tu cuenta de Claude.

> 💡 Comprueba que el autor es Anthropic. Hay extensiones de imitación.

**✅ Comprobación:** al pulsar el icono, se abre Claude en un panel lateral.

### 2. Decide los permisos
_2 min · reglas de la casa_

La extensión te pregunta antes de actuar en cada web. Empieza siendo prudente.

- Cuando te pida permiso para un sitio, léelo con calma.
- Al principio, elige la opción de que **te pregunte antes de actuar**.
- No le des acceso a tu banco ni a webs con datos muy sensibles.

**✅ Comprobación:** sabes dónde se aprueban y se quitan los permisos.

### 3. Tu primera tarea
_5 min · a mirar_

Abre el panel de Claude y dale la tarea. Mira cómo trabaja: es fascinante y tranquilizador.

```text
Quiero [la idea de la persona].

Antes de empezar, dime tu plan en pasos cortos. Pídeme permiso antes de pulsar cualquier botón de enviar, reservar, comprar o pagar. Al terminar, dame el resultado en una tabla con enlaces.
```

**¿Por qué pedir el plan antes?**

- Ves qué va a hacer antes de que lo haga.
- Puedes corregirle si se va por otro camino.
- Aprendes cómo razona.

**✅ Comprobación:** Claude te enseña su plan y empieza a navegar.

### 4. Tus datos, con cuidado _(solo si la app guarda datos o cuentas)_
_3 min · la regla de oro_

Da solo lo imprescindible, y el botón final lo pulsas tú.

- Escribe en el chat solo los datos que pide el formulario.
- **Nunca** le des contraseñas, números de tarjeta ni códigos de verificación.
- Pide:

```text
Rellena el formulario con estos datos, pero NO lo envíes. Cuando termines, avísame para que lo revise y lo envíe yo.
```

**✅ Comprobación:** el formulario está relleno y el botón de enviar lo pulsas tú.

### 5. Revisa el resultado
_5 min · probar_

Comprueba dos o tres datos al azar. La IA puede equivocarse al leer una web.

```text
Dime de dónde has sacado cada dato de la tabla, con el enlace exacto.
```

**✅ Comprobación:** los datos que has comprobado coinciden con las webs.

## Al terminar

Claude ya sabe moverse por la web contigo. Empieza con tareas pequeñas y ve dándole más confianza poco a poco.

## Extras (opcionales, después de servir)

### Extra 1. Seguridad: ojo con las trampas
_Siempre · importante_

Algunas webs esconden instrucciones para engañar a los asistentes de IA (se llama _prompt injection_).

- Si Claude hace algo que no le pediste, **páralo** con el botón de detener.
- Usa la extensión en webs de confianza.
- Mantén la regla: compras y pagos, siempre tú.

### Extra 2. Ideas para seguir
_Opcional_

**💡 Tareas que funcionan bien**

- Rellenar una hoja de cálculo con datos de varias webs.
- Revisar si los enlaces de tu web funcionan.
- Buscar convocatorias o ayudas y resumir los requisitos.
- Ordenar tus pestañas abiertas por tema.

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:slack-equipo` · Claude en tu Slack
- `/amri:chef` · combina varias recetas en un proyecto propio
