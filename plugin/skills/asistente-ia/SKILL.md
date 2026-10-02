---
name: asistente-ia
description: "Receta de AMRI «Tu asistente personal con IA». Monta un asistente que contesta tus preguntas, resume textos y te ayuda a escribir, usando Claude o ChatGPT. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu asistente personal con IA

Monta un asistente que contesta tus preguntas, resume textos y te ayuda a escribir, usando Claude o ChatGPT.

- ⏱ 20 min aprox.
- 👩‍🍳 Sin saber programar
- 💶 0 € para empezar
- 🍽 Resultado: un ayudante que te conoce
- Categoría: Primeros pasos
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/asistente-ia.html

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

- **Claude**: el cocinero. Será tu asistente.
- **Proyectos de Claude**: el recetario. Guarda sus instrucciones para siempre.
- **Tus documentos**: la despensa. Lo que tu asistente necesita saber.
- **Una nota en tu móvil**: la libreta. Para guardar tus mejores mensajes.

## Ideas de ejemplo

- **Estudios:** estudiar mis apuntes: hacerme resúmenes, preguntas tipo test y explicarme lo que no entiendo
- **Mi negocio:** responder dudas de clientes de mi negocio usando mis precios, horarios y condiciones
- **Escribir contenido:** escribir publicaciones para redes sociales y newsletters con mi estilo
- **Organización personal:** organizar mi semana, planificar comidas y hacer listas de la compra

## Antes de empezar

Pregunta a la persona: **¿Tiene que conocer tus documentos (catálogo, apuntes, normas…)?** Si dudas, elige «Sí»: te enseñamos a darle tus documentos. Si no los necesitas, puedes saltarte ese paso.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_3 min · crear la cuenta_

Solo necesitas una cuenta gratuita en Claude y tener a mano tus documentos.

#### Pasos

- Crea tu cuenta en [Claude](https://claude.ai).

- Reúne en una carpeta los documentos que usará (PDF, Word o texto). Mejor pocos y claros que muchos.

- Abre una nota vacía en tu móvil u ordenador.

**✅ Comprobación:** has entrado en Claude y tienes tus documentos en una carpeta.

### 2. Que Claude te entreviste
_5 min · tu ficha personal_

En vez de escribir tú las instrucciones, deja que Claude te haga preguntas y las escriba por ti.

#### Pasos

- Abre un chat nuevo en Claude.
- Copia este mensaje y pégalo:

```text
Quiero que seas mi asistente personal para [la idea de la persona].

Hazme 8 preguntas, de una en una, para conocerme: a qué me dedico, cómo escribo, qué tareas repito y cómo me gusta recibir las respuestas. Cuando termines, escríbeme unas instrucciones claras para que te comportes siempre así.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero que seas…»**: el trabajo de tu asistente. Cámbialo por el tuyo.
- **«De una en una»**: así es una conversación, no un formulario.
- **«Escríbeme unas instrucciones»**: el resultado que guardarás en el siguiente paso.

> 💡 Responde con naturalidad, como si hablaras con alguien nuevo en tu equipo. Cuanto más concreto, mejor.

**✅ Comprobación:** Claude te ha dado un texto con tus instrucciones personales.

### 3. Crea su cocina propia
_5 min · el proyecto_

Un **Proyecto** es un espacio en Claude con sus propias instrucciones. Todos los chats que abras dentro las recordarán.

#### Pasos

- En Claude, en el menú lateral, pulsa **Proyectos → Crear proyecto**.

- Ponle un nombre, por ejemplo **Mi asistente**.

- Pulsa **Instrucciones del proyecto** y pega el texto del paso anterior.

**No veo la opción de Proyectos**

- Tu plan puede tener límites. Alternativa: guarda las instrucciones en tu nota del móvil.
- Pégalas al principio de cada chat nuevo. Funciona igual, solo es un paso más.

**✅ Comprobación:** tienes un proyecto con tus instrucciones guardadas.

### 4. Llena la despensa _(solo si la respuesta a «Tiene que conocer tus documentos (catálogo, apuntes, normas…)» es «Sí»)_
_5 min · subir tus documentos_

Tu asistente responderá usando tus documentos, no información inventada.

#### Pasos

- Dentro del proyecto, pulsa **Añadir contenido** (o el botón **+** de archivos).

- Sube tus documentos.

- Abre un chat dentro del proyecto y pega:

```text
Lee los documentos del proyecto y dime en 5 puntos qué has entendido. Si algo es confuso o falta información, dímelo. A partir de ahora, si no encuentras algo en mis documentos, dilo en vez de inventarlo.
```

> 💡 ⚠️ No subas contraseñas, datos bancarios ni datos personales de otras personas.

**✅ Comprobación:** Claude te resume bien lo que hay en tus documentos.

### 5. Pruébalo con una tarea real
_5 min · primera prueba_

Dale algo que harías hoy de verdad. Así ves si necesita ajustes.

#### Ejemplo

```text
ayúdame con esto: [pega aquí un correo, una duda o una tarea real]. Respóndeme como lo haría yo.
```

> 💡 Si algo no te gusta, díselo: «más corto», «más formal», «sin emojis». Y luego pídele: «añade esto a tus instrucciones».

**✅ Comprobación:** la respuesta te sirve casi sin tocarla.

### 6. Guarda tus atajos
_3 min · tu libreta de mensajes_

Los mensajes que repites a menudo son oro. Guárdalos para pegarlos en un segundo.

#### Pasos

- Copia en tu nota los mensajes que mejor te han funcionado.
- Pídele a Claude que te sugiera más:

```text
Según lo que sabes de mí, dame 5 mensajes cortos que podría usar a diario contigo para ahorrar tiempo. Déjalos listos para copiar.
```

**✅ Comprobación:** tienes al menos 5 atajos guardados en tu nota.

## Al terminar

Tu asistente ya te conoce. Cada vez que abras un chat dentro de su proyecto, recordará tus instrucciones. Más abajo tienes dos extras: conectarlo con tus apps y mantenerlo al día.

## Extras (opcionales, después de servir)

### Extra 1. Conéctalo con tus apps
_10 min · opcional_

Con los **conectores**, Claude puede leer tu correo, tu calendario o tus documentos de Google sin copiar y pegar.

#### Pasos

- En Claude ve a **Ajustes → Conectores**.

- Pulsa **Conectar** junto a la app que quieras y autoriza.

- Prueba: «¿Qué tengo en el calendario mañana?».

> 💡 Conecta solo lo que necesites. Puedes desconectar cualquier app cuando quieras desde el mismo sitio.

### Extra 2. Mantenlo al día
_Siempre · rutina_

Un asistente mejora contigo. Dedícale cinco minutos al mes.

- **Cada mes:** revisa sus instrucciones y quita lo que ya no aplique.

- **Cuando cambie algo** (precios, temario, normas): sustituye el documento viejo por el nuevo.

- **Si se equivoca siempre en lo mismo:** añade una regla a las instrucciones.

```text
Revisa tus instrucciones y propón mejoras según nuestras últimas conversaciones. Dime qué cambiarías y por qué.
```

**💡 Ideas para seguir cocinando**

- Un segundo proyecto solo para un cliente o asignatura.
- Plantillas de correo para situaciones típicas.
- Un resumen semanal de tus tareas pendientes.

## Sigue con

- `/amri:imagenes-ia` · Crea imágenes con IA gratis
- `/amri:logo-ia` · Diseña un logo con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
