---
name: empieza-aqui
description: "Receta de AMRI «Empieza aquí: conoce a Claude». Tu primera conversación y un mapa sencillo de todo lo demás: proyectos, conectores, Skills, plugins y agentes. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Empieza aquí: conoce a Claude

Tu primera conversación y un mapa sencillo de todo lo demás: proyectos, conectores, Skills, plugins y agentes.

- ⏱ 15 min aprox.
- 👩‍🍳 Muy fácil
- 💶 Gratis
- 🍽 Resultado: tu primera conversación y un mapa de todo lo demás
- Categoría: Primeros pasos
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/empieza-aqui.html

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

- **Claude**: tu ayudante. Entiende lo que le pides con palabras normales.
- **Un correo electrónico**: para crear tu cuenta.
- **Tu móvil u ordenador**: para llevar a Claude contigo.
- **Algo real que hacer**: aprenderás más con una tarea de verdad que con una prueba.

## Ideas de ejemplo

- **Aprender algo:** entender un tema que me cuesta, con ejemplos sencillos y preguntas para comprobar que lo he entendido
- **Organizar mi semana:** organizar mi semana con mis tareas, mis citas y algún rato libre
- **Tener ideas:** darme ideas para un proyecto personal y ayudarme a elegir la mejor

## Antes de empezar

Pregunta a la persona: **¿Quieres tener Claude también en el móvil o en el ordenador?** Si dudas, elige «Sí». Si prefieres no instalar nada, funciona igual desde el navegador.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Crea tu cuenta
_3 min · gratis_

Claude es una inteligencia artificial: un programa con el que hablas como con una persona y que te ayuda a escribir, pensar, aprender y crear.

#### Pasos

- Entra en [claude.ai](https://claude.ai).

- Crea tu cuenta con tu correo o con tu cuenta de Google.

- Elige el plan gratuito. No hace falta tarjeta.

> 💡 El plan gratuito tiene un límite de mensajes. Si llegas a él, espera unas horas y podrás seguir. Para aprender, es suficiente.

**✅ Comprobación:** ves una caja para escribir que te pregunta en qué puede ayudarte.

### 2. Llévalo contigo _(solo si la respuesta a «Quieres tener Claude también en el móvil o en el ordenador» es «Sí»)_
_3 min · móvil y ordenador_

Tus conversaciones son las mismas en todas partes: empiezas en el móvil y sigues en el ordenador.

#### Pasos

- **Móvil:** busca «Claude» en la App Store o en Google Play. Comprueba que el autor es **Anthropic**.

- **Ordenador:** descarga la app desde [claude.ai/download](https://claude.ai/download).

- Entra con la misma cuenta.

> 💡 En el móvil puedes hablarle en voz alta: pulsa el micrófono.

**✅ Comprobación:** ves tus conversaciones en la app.

### 3. Tu primera conversación
_5 min · a probar_

Háblale como a una persona. No hace falta usar palabras especiales.

#### Copia este mensaje y pégalo

```text
Hola, Claude. Es la primera vez que te uso. Quiero que me ayudes a [la idea de la persona].

Antes de empezar, hazme 3 preguntas cortas para entender bien lo que necesito. Después hazlo y explícame qué has hecho.
```

**Trucos para que te entienda mejor**

- Dile **para quién** es y **para qué**.
- Pide la forma que quieres: «en 5 puntos», «en una tabla», «más corto».
- Si algo no te gusta, díselo: «más cercano», «sin emojis». Puedes pedir cambios todas las veces que quieras.

**✅ Comprobación:** Claude te ha hecho preguntas y te ha dado un resultado que te sirve.

### 4. Comprueba lo importante
_3 min · con cabeza_

Claude acierta mucho, pero a veces se equivoca y lo dice con mucha seguridad. Tú tienes la última palabra.

#### Pregúntale

```text
¿Hay algo en tu respuesta de lo que no estés seguro? Dime qué debería comprobar yo.
```

> 💡 Con temas de salud, dinero o leyes, compara siempre con una fuente fiable o con un profesional.

> 💡 ⚠️ No le des contraseñas, números de tarjeta ni datos privados de otras personas.

**✅ Comprobación:** sabes qué partes de la respuesta conviene revisar.

### 5. El mapa de Claude
_5 min · seis palabras_

En AMRI verás seis palabras una y otra vez. Esto es lo que significan, sin tecnicismos:

- **💬 Chat**: una conversación con Claude. Es lo que acabas de hacer.

- **📁 Proyecto**: una carpeta con tus instrucciones y documentos. Todos los chats que abras dentro los tienen en cuenta. [Receta: tu asistente personal](asistente-ia.html).

- **🔌 Conector**: un permiso para que Claude use otra app por ti, como Gmail, Canva o Notion. Lo quitas cuando quieras. [Receta: Gmail y Calendar](gmail-calendario.html).

- **📖 Skill**: una ficha con tu forma de hacer algo. Claude la usa sola cuando toca. [Receta: enséñale tu método](skills-propias.html).

- **📦 Plugin**: un paquete con varias Skills (y a veces conectores) que se instala de una vez. [El plugin de AMRI](../plugin.html).

- **🤖 Agente**: Claude trabajando por su cuenta en una tarea de varios pasos. Hace un plan, lo ejecuta, comprueba el resultado y te pide permiso antes de lo importante. [Receta: tu primer agente](primer-agente.html).

> 💡 No hace falta aprenderlo de memoria: en las recetas, las palabras subrayadas tienen su explicación.

**✅ Comprobación:** sabrías explicar con tus palabras qué es un conector y qué es un agente.

### 6. Elige tu camino
_2 min · ¿y ahora?_

Cada receta se puede hacer sola. Elige según lo que quieras conseguir:

- Que Claude te conozca y te ayude cada día → [Tu asistente personal](asistente-ia.html).

- Que trabaje dentro de tus apps → [Gmail y Calendar](gmail-calendario.html), [Canva](canva-diseno.html) o [Notion](notion-cerebro.html).

- Crear algo para internet → [Tu web online y gratis](webapp-gratis.html).

- Que haga tareas largas por ti → [Tu primer agente](primer-agente.html).

- ¿Tienes un proyecto en mente? Cuéntalo en [«¿Qué quieres construir?»](../index.html#construir) y te proponemos las recetas en orden.

**✅ Comprobación:** has elegido tu próxima receta.

## Al terminar

Ya conoces a Claude y sabes qué es cada cosa. A partir de aquí, elige la receta que te apetezca: todas se pueden hacer solas.

## Extras (opcionales, después de servir)

### Extra 1. Dónde usar Claude
_Opcional · cada sitio, para qué_

- **Web (claude.ai)**: todo lo básico, desde cualquier navegador.

- **Móvil**: chats, fotos y voz cuando no estás en el ordenador.

- **App de escritorio**: lo mismo que la web y, además, Cowork y Claude Code, para que Claude trabaje con los archivos de tu ordenador.

- **Claude in Chrome**: una extensión con la que Claude usa webs por ti. [Receta](navegador-chrome.html).

- **Claude Code**: para crear webs y programas en tu ordenador, desde la app de escritorio o desde la terminal. [Receta](primer-agente.html).

### Extra 2. Los planes, sin letra pequeña
_Opcional · qué es gratis_

- **Gratis**: chats, proyectos y la mayoría de recetas básicas de AMRI. Tiene un límite de mensajes.

- **De pago (Pro o superior)**: más mensajes y funciones como Claude Code, Cowork o la extensión de Chrome.

- Algunas funciones, como ciertos conectores o las Skills, dependen del plan. Si no las ves, la receta te da otro camino.

> 💡 Los precios cambian: consúltalos en [claude.ai/pricing](https://claude.ai/pricing). En cada tarjeta de AMRI verás si la receta es gratis, depende de tu plan o es de pago.

### Extra 3. Tu privacidad
_Siempre · ajustes_

- En los ajustes de Claude, en **Privacidad**, decides si tus conversaciones se pueden usar para mejorar Claude.

- Puedes borrar cualquier conversación cuando quieras.

- Regla sencilla: no escribas nada que no pondrías en un correo a alguien de confianza.

## Sigue con

- `/amri:asistente-ia` · Tu asistente personal con IA
- `/amri:imagenes-ia` · Crea imágenes con IA gratis
- `/amri:logo-ia` · Diseña un logo con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
