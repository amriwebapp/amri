---
name: automatiza-tareas
description: "Receta de AMRI «Automatiza tareas aburridas con IA». Automatizaciones con Zapier: correos resumidos en una hoja, citas al calendario, formularios con aviso y mensajes clasificados. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Automatiza tareas aburridas con IA

Automatizaciones con Zapier: correos resumidos en una hoja, citas al calendario, formularios con aviso y mensajes clasificados.

- 📕 4 recetas
- 💶 Gratis (con los límites del plan gratuito de Zapier)
- 🍽 Resultado: tareas que se hacen solas
- Categoría: Crea y publica
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/automatiza-tareas.html

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

- **Zapier**: el robot de cocina. Hace la tarea solo, una y otra vez.
- **Tus apps** (Gmail, Google Drive, Sheets, Calendar…): donde pasan las cosas.
- **Claude**: el jefe de cocina. Te ayuda a planificar y a resolver dudas.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_gratis_

- Crea tu cuenta en [Zapier](https://zapier.com) (botón «Sign up with Google»).
- Crea tu cuenta en [Claude](https://claude.ai).

**✅ Comprobación:** has entrado en Zapier y en Claude.

### 2. Cómo funciona una automatización
_la idea_

- **Zap**: el nombre que Zapier da a cada automatización.
- **Disparador** (_trigger_): el momento en que empieza. Ejemplo: «llega un correo».
- **Acción** (_action_): lo que hace Zapier. Ejemplo: «añade una fila».
- **Paso de IA**: un ayudante que lee o escribe texto en medio.

**✅ Comprobación:** sabrías explicar qué es un disparador y una acción.

### 3. Tu ayudante para montar Zaps
_un proyecto_

- En Claude crea un proyecto **Mis automatizaciones**.
- En sus instrucciones, pega:

```text
Me ayudas a montar automatizaciones en Zapier aunque nunca lo haya usado. Explícame cada paso con palabras simples: qué disparador elegir, qué acciones añadir y qué campos rellenar. Si algo falla, pídeme el mensaje de error.
```

**✅ Comprobación:** tienes el proyecto.

## Recetas del libro

### Receta 1: Correos importantes resumidos en una hoja

Cuando llega un correo con una etiqueta, la IA lo resume en 3 puntos y lo apunta en Google Sheets.

- 👩‍🍳 Media
- 📧 Gmail + IA + Sheets
- 🍽 Resultado: una hoja que se rellena sola
- Versión web: https://amri.es/recetas/automatiza-tareas--resumir-correos.html
- Ideas de ejemplo:
  - De clientes: los correos de clientes
  - De proveedores: los correos de proveedores

#### 1. Prepara la etiqueta y la hoja
_antes_

- En Gmail, crea una etiqueta llamada **automatizar** y pónsela a un correo de ejemplo de [la idea de la persona].
- En Google Sheets, crea una hoja con estos títulos en la primera fila: **Fecha, De, Asunto, Resumen**.

**✅ Comprobación:** tienes la etiqueta con un correo de ejemplo y la hoja.

#### 2. El disparador
_cuándo empieza_

- En Zapier pulsa **+ Create → Zaps**.
- Pulsa **Trigger** y elige **Gmail → New Labeled Email** (o «New Email» con la etiqueta).
- Conecta tu cuenta y elige la etiqueta **automatizar**.
- Pulsa **Test trigger**.

**✅ Comprobación:** el test encuentra tu correo de ejemplo.

#### 3. El paso de IA
_resumir_

- Pulsa **+** y busca **AI by Zapier**. Elige la opción de analizar o transformar texto.
- En las instrucciones pega esto y, al final, inserta con **+** el campo **Body** del correo:

```text
Resume este correo en 3 puntos cortos, en español. Si aparece una fecha o un importe, inclúyelo. Correo:
```

**No encuentro AI by Zapier**

- Busca «Claude» o «ChatGPT» entre las apps: también sirven, aunque piden una clave propia.
- Pregunta en tu proyecto de Claude qué opción de IA está disponible en tu plan.

**✅ Comprobación:** el test devuelve el resumen del ejemplo.

#### 4. La acción y la prueba
_encender_

- Pulsa **+** y elige **Google Sheets → Create Spreadsheet Row**.
- Elige tu hoja y rellena cada columna con **+**: fecha, remitente, asunto y el resumen de la IA.
- Pulsa **Test step** y luego **Publish**.
- Etiqueta un correo nuevo y espera unos minutos.

**✅ Comprobación:** aparece una fila nueva con el resumen, sin que hagas nada.

**Al terminar:** Cada correo con la etiqueta se resume y se apunta solo.

### Receta 2: Citas de los correos al calendario

Cuando un correo menciona una cita con fecha y hora, la IA la extrae y crea el evento.

- 👩‍🍳 Media
- 📅 Gmail + IA + Calendar
- 🍽 Resultado: eventos creados solos
- Versión web: https://amri.es/recetas/automatiza-tareas--citas-calendario.html
- Ideas de ejemplo:
  - De clientes: las citas que me piden los clientes
  - Médicos y gestiones: las confirmaciones de citas médicas y gestiones

#### 1. El disparador
_cuándo_

- Pon la etiqueta **citas** a un correo de ejemplo de [la idea de la persona].
- En Zapier, disparador **Gmail → New Labeled Email** con esa etiqueta. Pulsa **Test trigger**.

**✅ Comprobación:** el test encuentra tu correo.

#### 2. Que la IA saque la fecha
_leer_

- Añade **AI by Zapier** y pega estas instrucciones, insertando el **Body** al final:

```text
Del siguiente correo, extrae: título de la cita, fecha de inicio (formato AAAA-MM-DD HH:MM), duración en minutos y lugar. Si falta algo, deja el campo vacío. Correo:
```

**✅ Comprobación:** el test devuelve los datos de la cita.

#### 3. Crea el evento
_encender_

- Añade **Google Calendar → Create Detailed Event** y rellena título, inicio y lugar con los datos de la IA.
- Pulsa **Test step** y luego **Publish**.

> 💡 Añade un **Filter** antes del evento: que siga solo si la IA ha encontrado fecha.

**✅ Comprobación:** el evento de prueba aparece en tu calendario.

**Al terminar:** Las citas llegan solas a tu calendario. Revísalas de vez en cuando: la IA puede equivocarse con una fecha.

### Receta 3: Formulario a hoja, con aviso

Cuando alguien rellena tu formulario, se apunta en una hoja y te llega un correo.

- 👩‍🍳 Fácil
- 📋 Forms + Sheets + Gmail
- 🍽 Resultado: respuestas ordenadas y aviso al momento
- Versión web: https://amri.es/recetas/automatiza-tareas--formulario-hoja.html
- Ideas de ejemplo:
  - Inscripciones: mi formulario de inscripción
  - Contacto: mi formulario de contacto

#### 1. El formulario
_Google Forms_

- Crea [la idea de la persona] en [Google Forms](https://forms.google.com) (pide a Claude las preguntas si no las tienes).
- Respóndelo una vez tú para tener un ejemplo.

**✅ Comprobación:** tienes el formulario con una respuesta de prueba.

#### 2. Disparador y hoja
_apuntar_

- En Zapier, disparador **Google Forms → New Form Response**. Test.
- Acción **Google Sheets → Create Spreadsheet Row** con cada respuesta en su columna.

**✅ Comprobación:** la respuesta de prueba aparece en la hoja.

#### 3. El aviso
_enterarte_

- Añade **Gmail → Send Email** a tu propio correo, con el nombre y la respuesta en el texto.
- Pulsa **Publish** y rellena el formulario otra vez.

**✅ Comprobación:** te llega el correo de aviso y la fila nueva.

**Al terminar:** Cada respuesta se apunta sola y te avisa.

### Receta 4: Clasifica mensajes y avísame de lo urgente

La IA lee cada correo de cliente, lo clasifica (duda, queja, pedido) y solo te avisa de lo urgente.

- 👩‍🍳 Media
- ⚖️ IA + filtro
- 🍽 Resultado: solo te enteras de lo urgente
- Versión web: https://amri.es/recetas/automatiza-tareas--clasificar.html
- Ideas de ejemplo:
  - Correos de clientes: los correos de clientes
  - Soporte: los correos de soporte

#### 1. El disparador
_cuándo_

- Etiqueta como **clasificar** [la idea de la persona] (con un filtro de Gmail).
- En Zapier, disparador **Gmail → New Labeled Email**. Test.

**✅ Comprobación:** el test encuentra un correo de ejemplo.

#### 2. Que la IA clasifique
_decidir_

- Añade **AI by Zapier** con estas instrucciones (inserta el **Body** al final):

```text
Lee el correo y responde solo con: categoría (duda, queja, pedido u otro), urgente (sí/no) y un resumen de una frase. Es urgente si hay un problema con un pedido pagado o si el cliente está muy enfadado. Correo:
```

**✅ Comprobación:** el test devuelve la categoría y si es urgente.

#### 3. Filtro y aviso
_solo lo urgente_

- Añade **Filter**: que siga solo si «urgente» contiene «sí».
- Añade **Gmail → Send Email** a ti con la categoría y el resumen.
- Pulsa **Publish** y pruébalo con un correo urgente y otro que no lo sea.

**✅ Comprobación:** solo te llega el aviso del urgente.

**Al terminar:** Ya solo te llegan avisos de lo urgente. Para clasificar a gran escala, mira el libro de Jev.

## Al terminar

Tu cocina está lista. Elige la primera tarea que quieres quitarte de encima.

## Extras (opcionales, después de servir)

### Extra 1. Si algo se quema
_Siempre · solucionar errores_

Zapier te avisa por correo cuando algo falla y guarda el historial.

- Abre **Zap history** y pulsa la ejecución en rojo.
- Copia el error y pégalo en Claude:

```text
Mi Zap da este error: [pega el error]. El Zap hace esto: [describe los pasos]. ¿Cómo lo arreglo? Explícamelo paso a paso.
```

### Extra 2. Encadena más pasos
_Opcional_

- **Filter**: que siga solo si se cumple una condición («urgente = sí»).
- **Aviso**: un correo o mensaje cuando pase algo importante.
- **Segunda acción**: además de apuntarlo, guardarlo en otra app.

> 💡 Un cambio cada vez. Prueba el Zap después de cada mejora.

### Extra 3. Límites del plan gratuito
_Siempre · tenlo en cuenta_

Los planes gratuitos de Zapier tienen un límite de tareas al mes y pueden tardar unos minutos en reaccionar. Revisa los límites actuales en su página de precios.

## Sigue con

- `/amri:webapp-gratis` · Tu web online y gratis
- `/amri:chatbot-web` · Un chatbot para tu web
- `/amri:figma-a-web` · De Figma a web real
- `/amri:chef` · combina varias recetas en un proyecto propio
