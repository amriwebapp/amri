---
name: slack-equipo
description: "Receta de AMRI «Claude en tu Slack». Ponte al día en un minuto, encuentra qué se decidió, publica anuncios con tu permiso, el canvas de los viernes y reuniones preparadas. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Claude en tu Slack

Ponte al día en un minuto, encuentra qué se decidió, publica anuncios con tu permiso, el canvas de los viernes y reuniones preparadas.

- 📕 5 recetas
- ⏱ 10-15 min cada una
- 💶 Gratis si tu plan de Claude incluye conectores
- 🍽 Resultado: tu equipo al día sin leer cien mensajes
- Categoría: Conecta tus apps
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/slack-equipo.html

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

- **Claude**: lee, resume y redacta.
- **Slack**: donde trabaja tu equipo.
- **El conector de Slack**: busca mensajes, canales, hilos y canvases.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Conecta Slack con Claude
_5 min · el conector_

- En Claude abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Pulsa **Explorar conectores**, busca «Slack» y pulsa **Conectar**.
- Elige tu espacio de trabajo, revisa los permisos y pulsa **Permitir**.

**¿Qué puede ver Claude?**

- Solo lo que tu usuario ya puede ver en Slack.
- No ve canales privados ni mensajes directos a los que no tienes acceso.
- Puedes desconectarlo cuando quieras.

> 💡 En empresas, puede que un administrador de Slack tenga que aprobar la conexión.

**✅ Comprobación:** Slack aparece activado en tus conectores.

### 2. Tu cinturón de seguridad
_1 min · una frase_

Cuando pidas a Claude que escriba algo en Slack, añade siempre: **«No envíes nada hasta que yo diga "publícalo"»**.

**✅ Comprobación:** te acordarás de decirlo.

## Recetas del libro

### Receta 1: Ponte al día en un minuto

Lo importante de tus canales, lo que te piden a ti y los enlaces clave.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 📰 Resumen
- 🍽 Resultado: sabes qué ha pasado
- Versión web: https://amri.es/recetas/slack-equipo--ponerse-al-dia.html
- Ideas de ejemplo:
  - Esta semana: los últimos 7 días
  - Vuelta de vacaciones: el tiempo que he estado fuera

#### 1. El resumen
_5 min · leer por ti_

```text
Usa el conector de Slack. Mira los canales donde participo durante [la idea de la persona]. Dame:
1) Lo importante en 5 puntos.
2) Lo que me mencionan o me piden a mí.
3) Enlaces a los mensajes clave.
```

> 💡 Si tienes muchos canales, nómbralos: «solo #proyecto-web y #marketing».

**✅ Comprobación:** sabes qué ha pasado sin leerlo todo.

#### 2. Lo que te toca
_5 min · tus tareas_

```text
De todo eso, hazme una lista de lo que tengo que hacer yo, con fecha si la hay.
```

**✅ Comprobación:** tienes tu lista de tareas.

**Al terminar:** Al día. Guarda el mensaje para el próximo lunes.

### Receta 2: Encuentra qué se decidió

La decisión, quién la tomó, cuándo y el enlace al mensaje.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 🔎 Buscar
- 🍽 Resultado: la decisión con su enlace
- Versión web: https://amri.es/recetas/slack-equipo--decisiones.html
- Ideas de ejemplo:
  - Un tema concreto: un tema concreto

#### 1. Búscalo
_10 min · la memoria del equipo_

```text
Busca en Slack qué se decidió sobre [tema]. Dime la decisión, quién la tomó, la fecha y el enlace al mensaje. Si hay opiniones distintas, resúmelas.
```

**✅ Comprobación:** tienes la decisión con su enlace.

**Al terminar:** Encontrado. Comprueba siempre el enlace antes de citarlo.

### Receta 3: Redacta y publica un anuncio

Claude escribe, tú lo apruebas y él lo publica en el canal adecuado.

- ⏱ 10 min
- 👩‍🍳 Fácil
- 📣 Publicar
- 🍽 Resultado: un anuncio claro en Slack
- Versión web: https://amri.es/recetas/slack-equipo--anuncio.html
- Ideas de ejemplo:
  - Un cambio: un cambio que afecta al equipo
  - Un logro: un logro del equipo

#### 1. El borrador
_5 min · escribir_

```text
Redacta un mensaje para el equipo sobre [la idea de la persona]: [detalles]. Claro, amable y corto. Enséñamelo y dime en qué canal lo publicarías. No envíes nada hasta que yo diga «publícalo».
```

**✅ Comprobación:** tienes el borrador.

#### 2. Publícalo
_5 min · con tu OK_

```text
Publícalo.
```

> 💡 Si prefieres, cópialo y publícalo tú desde Slack.

**✅ Comprobación:** el mensaje está en el canal.

**Al terminar:** Publicado tal y como lo aprobaste.

### Receta 4: El canvas de los viernes

Una página en Slack con las decisiones, lo pendiente y los hilos importantes de la semana.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 🗒 Canvas
- 🍽 Resultado: un canvas para todo el equipo
- Versión web: https://amri.es/recetas/slack-equipo--canvas.html
- Ideas de ejemplo:
  - Mi equipo: mi equipo
  - Un proyecto: un proyecto concreto

#### 1. Créalo
_15 min · el resumen_

Un canvas es una página dentro de Slack.

```text
Crea un canvas en Slack llamado «Resumen semana [fecha]» para [la idea de la persona], con: decisiones de la semana, tareas pendientes con responsable y enlaces a los hilos importantes. Enséñamelo antes de compartirlo.
```

**✅ Comprobación:** el canvas está en Slack.

**Al terminar:** Tu canvas está en Slack. Repítelo cada viernes.

### Receta 5: Prepara una reunión leyendo el hilo

Claude lee el hilo o el canal del proyecto y te deja un resumen para la reunión.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 🗓 Reuniones
- 🍽 Resultado: la reunión preparada
- Versión web: https://amri.es/recetas/slack-equipo--preparar-reunion.html
- Ideas de ejemplo:
  - De proyecto: una reunión de seguimiento de proyecto

#### 1. El resumen
_10 min · leer_

```text
Prepárame [la idea de la persona]: lee [canal o hilo] de las últimas semanas y dime en qué punto está, qué está bloqueado, qué opiniones hay y 3 preguntas que debería llevar.
```

**✅ Comprobación:** tienes la reunión preparada.

**Al terminar:** Llegas preparado.

## Al terminar

Slack está conectado. Elige qué quieres hacer.

## Extras (opcionales, después de servir)

### Extra 1. Reglas de privacidad
_Siempre · consejos_

- ⚠️ **Ojo con los mensajes trampa**: un mensaje de Slack puede llevar instrucciones escondidas para engañar a Claude. Claude solo lee y propone; enviar o compartir lo decides tú.
- No pidas a Claude que comparta fuera de Slack información confidencial del equipo.
- Sigue las normas de tu empresa sobre IA y datos.

### Extra 2. Claude dentro de Slack
_Opcional_

Además del conector, Claude tiene una app para Slack: puedes escribirle por mensaje directo o mencionarlo en un hilo. Búscala en el directorio de apps de Slack. Puede que tu empresa tenga que aprobarla.

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:chef` · combina varias recetas en un proyecto propio
