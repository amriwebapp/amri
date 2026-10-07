---
name: empieza-aqui
description: "Receta de AMRI «Empieza aquí: conoce a Claude». El primer libro: tu primera conversación, cómo pedir bien, darle tus archivos y el mapa de todo lo demás (proyectos, conectores, Skills, plugins y agentes). Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Empieza aquí: conoce a Claude

El primer libro: tu primera conversación, cómo pedir bien, darle tus archivos y el mapa de todo lo demás (proyectos, conectores, Skills, plugins y agentes).

- 📕 5 recetas
- ⏱ 10-15 min cada una
- 💶 Gratis
- 🍽 Resultado: sabes usar Claude y entiendes todo lo demás
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
- **Algo real que hacer**: aprenderás más con una tarea de verdad que con una prueba.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tu cuenta
_3 min · gratis_

Claude es una inteligencia artificial: un programa con el que hablas como con una persona y que te ayuda a escribir, pensar, aprender y crear.

- Entra en [claude.ai](https://claude.ai).

- Crea tu cuenta con tu correo o con tu cuenta de Google.

- Elige el plan gratuito. No hace falta tarjeta.

> 💡 El plan gratuito tiene un límite de mensajes. Si llegas a él, espera unas horas y podrás seguir. Para aprender, es suficiente.

**✅ Comprobación:** ves una caja para escribir que te pregunta en qué puede ayudarte.

### 2. Llévalo contigo
_3 min · móvil y ordenador_

Tus conversaciones son las mismas en todas partes: empiezas en el móvil y sigues en el ordenador. Este paso es opcional, pero muy cómodo.

- **Móvil:** busca «Claude» en la App Store o en Google Play. Comprueba que el autor es **Anthropic**.

- **Ordenador:** descarga la app desde [claude.ai/download](https://claude.ai/download).

- Entra con la misma cuenta.

**✅ Comprobación:** ves tus conversaciones en la app, o has decidido usar solo el navegador.

## Recetas del libro

### Receta 1: Tu primera conversación

Háblale como a una persona y consigue algo útil en 5 minutos.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 💬 Chat
- 🍽 Resultado: tu primera tarea hecha con Claude
- Versión web: https://amri.es/recetas/empieza-aqui--primera-conversacion.html
- Ideas de ejemplo:
  - Escribir y resumir: escribir un correo difícil y resumir un texto largo
  - Aprender algo: entender un tema que me cuesta, con ejemplos sencillos y preguntas para comprobar que lo he entendido
  - Organizar mi semana: organizar mi semana con mis tareas, mis citas y algún rato libre
  - Tener ideas: darme ideas para un proyecto personal y ayudarme a elegir la mejor

#### 1. El primer mensaje
_5 min · a probar_

No hace falta usar palabras especiales: escribe como hablas.

```text
Hola, Claude. Es la primera vez que te uso. Quiero que me ayudes a [la idea de la persona].

Antes de empezar, hazme 3 preguntas cortas para entender bien lo que necesito. Después hazlo y explícame qué has hecho.
```

**✅ Comprobación:** Claude te ha hecho preguntas y te ha dado un resultado.

#### 2. Pide cambios
_3 min · a tu gusto_

Lo primero que te da Claude es un borrador. Dile qué cambiar, con tus palabras:

- «Más corto».
- «Más cercano, menos formal».
- «Ponlo en una lista».
- «Sin emojis».

> 💡 Puedes pedir cambios todas las veces que quieras. No se cansa.

**✅ Comprobación:** el resultado está como querías.

#### 3. Comprueba lo importante
_2 min · con cabeza_

```text
¿Hay algo en tu respuesta de lo que no estés seguro? Dime qué debería comprobar yo.
```

**✅ Comprobación:** sabes qué partes conviene revisar antes de usarlo.

**Al terminar:** Ya has hablado con Claude. Sigue con «Pide mejor»: con cuatro trucos, sus respuestas mejoran muchísimo.

### Receta 2: Pide mejor: el mensaje perfecto

Cuatro ingredientes que hacen que Claude acierte a la primera.

- ⏱ 15 min
- 👩‍🍳 Fácil
- ✍️ Mensajes
- 🍽 Resultado: tu plantilla de mensaje para cualquier tarea
- Versión web: https://amri.es/recetas/empieza-aqui--pide-mejor.html
- Ideas de ejemplo:
  - Una tarea del trabajo: preparar una reunión importante del trabajo
  - Algo de casa: organizar una mudanza
  - Estudios: preparar un examen

#### 1. Los cuatro ingredientes
_3 min · la idea_

Un buen mensaje tiene cuatro partes. No hace falta que sean largas:

- **Quién es Claude**: «Actúa como un profesor paciente».
- **Contexto**: para quién es, qué sabes ya, qué te preocupa.
- **La tarea**: qué quieres exactamente.
- **La forma**: «en 5 puntos», «en una tabla», «en un correo de 100 palabras».

**✅ Comprobación:** sabrías decir los cuatro ingredientes.

#### 2. Pruébalo con una tarea real
_5 min · práctica_

```text
Actúa como [quién quieres que sea].

Contexto: quiero [la idea de la persona]. [Para quién es, qué sé ya, qué me preocupa.]

Tarea: [qué quieres exactamente].

Forma: [cómo lo quieres: lista, tabla, correo, cuánto de largo].
```

**✅ Comprobación:** la respuesta encaja mucho mejor que con un mensaje corto.

#### 3. Que Claude mejore tu mensaje
_5 min · el truco_

Si no sabes cómo pedir algo, pídele a Claude que te ayude a pedirlo.

```text
Quiero pedirte esto: [explícalo como te salga]. Antes de hacerlo, escríbeme el mensaje perfecto para pedírtelo, con quién eres, contexto, tarea y forma. Después hazlo.
```

**✅ Comprobación:** tienes un mensaje bien escrito y su resultado.

**Al terminar:** Ya tienes tu plantilla. Guárdala en una nota del móvil: te servirá para casi todo.

### Receta 3: Dale tus archivos: PDF, fotos y capturas

Sube un documento, una foto o una captura de pantalla y pregúntale lo que quieras.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 📎 Archivos
- 🍽 Resultado: un documento entendido en minutos
- Versión web: https://amri.es/recetas/empieza-aqui--archivos.html
- Ideas de ejemplo:
  - Un documento largo: un documento largo en PDF
  - Una foto: la foto de un papel, una etiqueta o un menú
  - Una captura de pantalla: una captura de pantalla de un error o de una web que no entiendo

#### 1. Súbelo
_2 min · el clip_

- En un chat, pulsa el **+** o el clip 📎, o arrastra el archivo a la ventana.
- En el móvil también puedes hacer una foto directamente.

> 💡 ⚠️ No subas documentos con contraseñas, datos bancarios o datos personales de otras personas.

**✅ Comprobación:** ves el archivo en el chat.

#### 2. Pregúntale
_5 min · entenderlo_

```text
Te he subido [la idea de la persona]. Explícamelo con palabras sencillas: de qué trata, qué es lo más importante y si hay algo que debería revisar con cuidado. Cita la parte del documento de la que sacas cada cosa.
```

**✅ Comprobación:** entiendes el archivo y sabes dónde está cada cosa.

#### 3. Haz algo con él
_3 min · usarlo_

Ahora que lo entiende, pídele trabajo:

- «Hazme una lista de las fechas y plazos».
- «Escribe una respuesta a este correo».
- «Pasa esta tabla de la foto a una hoja de cálculo».

**✅ Comprobación:** tienes algo útil hecho a partir de tu archivo.

**Al terminar:** Ya sabes darle archivos a Claude. Es una de las cosas que más tiempo ahorra.

### Receta 4: El mapa de Claude: seis palabras

Chat, proyecto, conector, Skill, plugin y agente, explicados sin jerga y con su receta.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 🗺 Conceptos
- 🍽 Resultado: entiendes todo lo que verás en AMRI
- Versión web: https://amri.es/recetas/empieza-aqui--mapa.html
- Ideas de ejemplo:
  - Quiero entenderlo todo: entender todas las piezas
  - Que use mis apps: que Claude trabaje dentro de mis apps
  - Que trabaje solo: que Claude haga tareas largas por mí

#### 1. Las seis palabras
_5 min · el mapa_

- **💬 Chat**: una conversación con Claude.

- **📁 Proyecto**: una carpeta con tus instrucciones y documentos. Todos los chats de dentro los tienen en cuenta. [Libro: tu asistente personal](asistente-ia.html).

- **🔌 Conector**: un permiso para que Claude use otra app por ti, como Gmail, Canva o Notion. Lo quitas cuando quieras. [Libro: Gmail y Calendar](gmail-calendario.html).

- **📖 Skill**: una ficha con tu forma de hacer algo. Claude la usa sola cuando toca. [Libro: Skills](skills-propias.html).

- **📦 Plugin**: un paquete con varias Skills (y a veces conectores) que se instala de una vez. [El plugin de AMRI](../plugin.html).

- **🤖 Agente**: Claude trabajando por su cuenta en una tarea de varios pasos. [Libro: tu primer agente](primer-agente.html).

**✅ Comprobación:** sabrías explicar qué es un conector y qué es un agente.

#### 2. Pregúntale a Claude
_3 min · tu caso_

```text
Quiero [la idea de la persona]. Explícame, sin tecnicismos, cuál de estas piezas necesito (chat, proyecto, conector, Skill, plugin o agente) y por qué.
```

**✅ Comprobación:** sabes qué pieza necesitas.

#### 3. Elige tu siguiente libro
_2 min · ¿y ahora?_

- Que Claude te conozca → [Tu asistente personal](asistente-ia.html).
- Que trabaje en tus apps → [Gmail y Calendar](gmail-calendario.html), [Canva](canva-diseno.html) o [Notion](notion-cerebro.html).
- Crear algo para internet → [Tu web online y gratis](webapp-gratis.html).
- Que haga tareas largas → [Tu primer agente](primer-agente.html).
- ¿Tienes un proyecto? Cuéntalo en [«¿Qué quieres construir?»](../index.html#construir).

**✅ Comprobación:** has elegido tu siguiente libro.

**Al terminar:** Ya conoces el mapa. Elige el siguiente libro según lo que quieras conseguir.

### Receta 5: Dónde usar Claude, planes y privacidad

Web, móvil, escritorio, Chrome y Claude Code; qué es gratis y cómo cuidar tus datos.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- ⚙️ Ajustes
- 🍽 Resultado: Claude configurado a tu gusto
- Versión web: https://amri.es/recetas/empieza-aqui--planes.html
- Ideas de ejemplo:
  - Mi privacidad: qué pasa con mis conversaciones
  - Si me merece la pena pagar: si me merece la pena un plan de pago
  - Dónde usarlo: en qué sitio me conviene usar Claude

#### 1. Dónde usar Claude
_3 min · cada sitio_

- **Web (claude.ai)**: todo lo básico, desde cualquier navegador.
- **Móvil**: chats, fotos y voz.
- **App de escritorio**: además, Cowork y Claude Code, para trabajar con los archivos de tu ordenador.
- **Claude in Chrome**: una extensión con la que Claude usa webs por ti.

**✅ Comprobación:** sabes dónde te conviene usarlo.

#### 2. Los planes, sin letra pequeña
_3 min · qué es gratis_

- **Gratis**: chats, proyectos y la mayoría de libros básicos de AMRI. Tiene un límite de mensajes.
- **De pago (Pro o superior)**: más mensajes y funciones como Claude Code, Cowork o la extensión de Chrome.

> 💡 Los precios cambian: míralos en [claude.ai/pricing](https://claude.ai/pricing). Cada tarjeta de AMRI dice si el libro es gratis o depende de tu plan.

**✅ Comprobación:** sabes si te basta el plan gratuito.

#### 3. Tu privacidad
_4 min · ajustes_

- En los ajustes de Claude, en **Privacidad**, decides si tus conversaciones se pueden usar para mejorar Claude.
- Puedes borrar cualquier conversación cuando quieras.
- Regla sencilla: no escribas nada que no pondrías en un correo a alguien de confianza.

**✅ Comprobación:** has revisado tus ajustes de privacidad.

**Al terminar:** Ya sabes dónde usar Claude, qué cuesta y cómo cuidar tu privacidad.

## Al terminar

Ya tienes tu cuenta. Empieza por «Tu primera conversación» y sigue en el orden que quieras.

## Extras (opcionales, después de servir)

### Extra 1. Usa Claude con cabeza
_Siempre · lo básico_

- Claude acierta mucho, pero a veces se equivoca y lo dice muy seguro. Con temas de salud, dinero o leyes, contrasta siempre.
- No le des contraseñas, números de tarjeta ni datos privados de otras personas.
- Tú tienes la última palabra en todo lo que publiques o envíes.

## Sigue con

- `/amri:asistente-ia` · Tu asistente personal con IA
- `/amri:imagenes-ia` · Crea imágenes con IA gratis
- `/amri:logo-ia` · Diseña un logo con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
