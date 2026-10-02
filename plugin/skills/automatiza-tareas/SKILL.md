---
name: automatiza-tareas
description: "Receta de AMRI «Automatiza tareas aburridas con IA». Conecta tu correo, tu calendario y tus hojas de cálculo para que la IA haga el trabajo repetitivo por ti. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Automatiza tareas aburridas con IA

Conecta tu correo, tu calendario y tus hojas de cálculo para que la IA haga el trabajo repetitivo por ti.

- ⏱ 45 min aprox.
- 👩‍🍳 Sin saber programar
- 💶 0 € para empezar
- 🍽 Resultado: una tarea que se hace sola
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «anon» de Supabase) sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes (todos gratuitos)

- **Zapier**: el robot de cocina. Hace la tarea solo, una y otra vez.
- **Tus apps** (Gmail, Google Drive, Sheets…): los fogones. Donde pasan las cosas.
- **IA dentro de Zapier**: el cocinero. Lee y escribe el texto por ti.
- **Claude**: el jefe de cocina. Te ayuda a planificar y a resolver dudas.

## Ideas de ejemplo

- **Guardar facturas:** cuando me llegue un correo con una factura adjunta, que el archivo se guarde en una carpeta de Google Drive
- **Eventos al calendario:** cuando un correo mencione una cita con fecha y hora, que se cree el evento en mi calendario
- **Formulario a hoja:** cuando alguien rellene mi formulario, que se apunte en una hoja y me llegue un aviso por correo
- **Clasificar mensajes:** cuando me llegue un correo de un cliente, que la IA lo clasifique (duda, queja, pedido) y me avise solo de los urgentes

## Antes de empezar

¿Necesita la IA para leer, resumir o escribir texto? Si dudas, elige «Sí»: añadiremos un paso de IA. Si no hace falta, lo puedes quitar al final.

## Pasos

### 1. Prepara los ingredientes
_5 min · crear cuentas_

Vas a crear dos cuentas gratuitas. Con tu cuenta de Google entras en ambas.

#### Pasos

- Crea tu cuenta en [Zapier](https://zapier.com/sign-up) (botón «Sign up with Google»).

- Crea tu cuenta en [Claude](https://claude.ai).

- Asegúrate de tener acceso a las apps que vas a usar (por ejemplo Gmail y Google Sheets).

**✅ Comprobación:** has entrado en Zapier y en Claude.

### 2. Pídele el plan a Claude
_5 min · diseñar la automatización_

Toda automatización tiene un **disparador** (lo que pasa) y una o varias **acciones** (lo que se hace). Claude te lo dibuja paso a paso.

#### Pasos

- Abre un chat nuevo en Claude.
- Copia este mensaje y pégalo:

```text
Quiero automatizar esto con Zapier: [la idea de la persona].

Explícame paso a paso cómo montar el Zap: qué disparador elegir, qué acciones añadir y qué campos rellenar en cada una. Incluye un paso de IA y escríbeme las instrucciones exactas que debo darle. Explícamelo con palabras simples, como si nunca hubiera usado Zapier.
```

**¿Qué significa cada palabra?**

- **Zap**: el nombre que Zapier da a cada automatización.
- **Disparador (trigger)**: el momento en que empieza. Ejemplo: «llega un correo».
- **Acción (action)**: lo que hace Zapier. Ejemplo: «añade una fila».
- **Paso de IA**: un ayudante que lee o escribe texto en medio del proceso.

**✅ Comprobación:** tienes un plan claro con el disparador y las acciones.

### 3. Enciende el fuego: el disparador
_10 min · cuándo empieza_

Le dices a Zapier qué tiene que vigilar.

#### Pasos

- En Zapier pulsa **+ Create → Zaps**.

- Pulsa **Trigger** y elige: `Gmail → New Email`.

- Pulsa **Sign in** para conectar tu cuenta y autoriza.

- Pulsa **Test trigger**: Zapier buscará un ejemplo real.

> 💡 Para correos, crea antes una etiqueta en Gmail (por ejemplo «automatizar») y elige que solo vigile esa. Así controlas qué entra.

**✅ Comprobación:** el test encuentra un ejemplo real (un correo, una respuesta…).

### 4. Añade al cocinero: el paso de IA _(solo si la app guarda datos o cuentas)_
_10 min · leer y escribir_

La IA recibe el texto del disparador y lo transforma: resume, clasifica o extrae datos.

#### Pasos

- Pulsa **+** debajo del disparador y busca **AI by Zapier**.

- Elige la opción para analizar o transformar texto.

- En las instrucciones pega esto (y ajústalo a tu caso):

```text
Lee el siguiente texto y devuelve: 1) un resumen en 3 puntos, 2) la categoría (duda, queja, pedido u otro), 3) si es urgente (sí/no), 4) la fecha si aparece alguna. Texto:
```

- Al final del mensaje, pulsa el botón **+** para insertar el campo **Body** (el cuerpo del correo).
- Pulsa **Test step**.

**No encuentro AI by Zapier**

- Busca «ChatGPT» o «Claude» entre las apps: también sirven, aunque piden una clave propia.
- Pregúntale a Claude qué opción de IA está disponible en tu plan de Zapier.

**✅ Comprobación:** el test te devuelve el resumen y la categoría del ejemplo.

### 5. Sirve el plato: la acción final
_5 min · qué se hace_

Ahora dices dónde acaba el resultado.

#### Pasos

- Pulsa **+** y elige: `Google Sheets → Create Spreadsheet Row`.

- Conecta tu cuenta si te lo pide.

- Rellena cada campo pulsando **+** y eligiendo el dato de los pasos anteriores (por ejemplo, el resumen de la IA).

- Pulsa **Test step**.

> 💡 Si vas a usar una hoja de cálculo, créala antes con los títulos en la primera fila: Fecha, De, Resumen… Zapier los reconocerá.

**✅ Comprobación:** ves el resultado de prueba en su sitio (la fila, el archivo, el evento…).

### 6. Prueba antes de servir
_5 min · encender_

Toca activarlo y probarlo con un caso real.

#### Pasos

- Pulsa **Publish** para activar el Zap.

- Provoca el disparador de verdad (envíate un correo, rellena el formulario…).

- Espera unos minutos y comprueba el resultado.

- Revisa en **Zap history** que aparece en verde.

> 💡 Los planes gratuitos tienen un límite de tareas al mes y pueden tardar unos minutos en reaccionar. Revisa los límites actuales en la página de precios de Zapier.

**✅ Comprobación:** el caso real llega solo a su sitio sin que hagas nada.

## Al terminar

Tu tarea ya se hace sola. Cada vez que ocurra el disparador, Zapier hará el trabajo por ti. Más abajo tienes dos extras: encadenar más pasos y qué hacer si algo falla.

## Extras (opcionales, después de servir)

### Extra 1. Encadena más pasos
_15 min · opcional_

Cuando la primera funcione, puedes añadirle más cosas: filtros, avisos o más acciones.

#### Ideas

- **Filter**: que siga solo si se cumple una condición (por ejemplo «urgente = sí»).

- **Aviso**: un correo o mensaje cuando pase algo importante.

- **Segunda acción**: además de apuntarlo, guardarlo en otra app.

```text
Tengo este Zap funcionando: [describe los pasos]. Quiero añadir: [tu mejora]. Dime exactamente qué pasos añadir y dónde.
```

> 💡 Un cambio cada vez. Prueba el Zap después de cada mejora.

### Extra 2. Si algo se quema
_Siempre · solucionar errores_

No te asustes: Zapier te avisa por correo cuando algo falla y guarda el historial.

- Abre **Zap history** y pulsa sobre la ejecución en rojo.

- Copia el mensaje de error.

- Pídele ayuda a Claude:

```text
Mi Zap de Zapier da este error: [pega el error]. El Zap hace esto: [describe los pasos]. ¿Cómo lo arreglo? Explícamelo paso a paso.
```

**💡 Otras tareas que puedes automatizar**

- Guardar en una hoja los nuevos suscriptores.
- Recordatorios automáticos a clientes antes de una cita.
- Publicar en redes cuando subes una entrada al blog.
- Un resumen diario de tus correos importantes.

## Sigue con

- `/amri:webapp-gratis` · Tu webapp online y gratis
- `/amri:chatbot-web` · Un chatbot para tu web
- `/amri:figma-a-web` · De Figma a web real
- `/amri:chef` · combina varias recetas en un proyecto propio
