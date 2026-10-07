---
name: notion-cerebro
description: "Receta de AMRI «Tu segundo cerebro en Notion». Claude ordena tus notas, crea bases de datos y te resume la semana dentro de tu Notion. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu segundo cerebro en Notion

Claude ordena tus notas, crea bases de datos y te resume la semana dentro de tu Notion.

- ⏱ 30 min aprox.
- 👩‍🍳 Fácil
- 💶 Gratis si tu plan de Claude incluye conectores
- 🍽 Resultado: un Notion ordenado que se resume solo
- Categoría: Conecta tus apps
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/notion-cerebro.html

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

- **Notion**: la despensa. Donde guardas todo. Plan gratuito.
- **Claude**: el jefe de cocina. Ordena, resume y propone.
- **Conector de Notion**: la llave de la despensa. Deja a Claude leer y escribir páginas.

## Ideas de ejemplo

- **Proyectos y tareas:** mis proyectos con sus tareas, fechas de entrega y estado
- **Libros y lecturas:** los libros y artículos que leo, con resumen, valoración y citas favoritas
- **Recetas de cocina:** mis recetas de cocina con ingredientes, tiempo, dificultad y fotos

## Antes de empezar

Pregunta a la persona: **¿Ya tienes páginas en Notion con contenido?** Si dudas, elige «Sí»: Claude revisará lo que tienes antes de proponer nada. Si tu Notion está vacío, también funciona.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_3 min · cuentas_

Necesitas una cuenta en Notion y otra en Claude.

- Entra en [Notion](https://www.notion.so) (plan gratuito).
- Entra en [Claude](https://claude.ai).

**✅ Comprobación:** puedes entrar en las dos.

### 2. Conecta Notion con Claude
_3 min · el conector_

Un conector es un permiso para que Claude use Notion por ti. Se activa una vez y queda guardado.

#### Pasos

- En Claude (web o app de escritorio) abre **Personalizar → Conectores** (en inglés: _Customize → Connectors_).

- Pulsa **Explorar conectores** (_Browse connectors_), busca **«Notion»** y pulsa **Conectar**.

- Se abre una ventana de Notion: inicia sesión y pulsa **Permitir**.

- En un chat nuevo, pulsa el botón **+** → **Conectores** y comprueba que Notion está activado.
Notion te preguntará a qué espacio de trabajo quieres dar acceso. Elige el tuyo.

> 💡 Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la ayuda de Claude.

**✅ Comprobación:** Notion aparece activado en tus conectores.

### 3. Que Claude explore tu Notion _(solo si la respuesta a «Ya tienes páginas en Notion con contenido» es «Sí»)_
_5 min · inventario_

Antes de ordenar, hay que saber qué hay en la despensa.

```text
Busca en mi Notion todo lo relacionado con [la idea de la persona]. Hazme un resumen de cómo está organizado ahora y qué problemas ves (duplicados, páginas vacías, cosas sin clasificar).

No cambies nada todavía.
```

> 💡 «No cambies nada todavía» es tu mejor amigo. Primero mirar, luego tocar.

**✅ Comprobación:** Claude te describe lo que tienes.

### 4. Diseña la estructura
_5 min · el plan_

Una **base de datos** de Notion es como una hoja de cálculo bonita: cada fila es una página.

```text
Propón una base de datos de Notion para organizar [la idea de la persona].

Dime: las propiedades (columnas) con su tipo, 2 o 3 vistas útiles (tabla, tablero, calendario) y una plantilla para páginas nuevas. Explícalo en pocas palabras y espera mi OK.
```

**✅ Comprobación:** tienes una propuesta que entiendes y te gusta.

### 5. Créala en tu Notion
_5 min · montar_

Ahora Claude la construye por ti.

```text
Perfecto. Crea en mi Notion una página llamada «Mi segundo cerebro» con esa base de datos. Después mueve o copia ahí mis páginas existentes que encajen, y dime cuáles has tocado.
```

> 💡 Si Claude no puede crear algo (por ejemplo, un tipo de vista), te dirá cómo hacerlo a mano en dos clics.

**✅ Comprobación:** abres Notion y ves la página nueva con su base de datos.

### 6. Tu repaso semanal
_5 min · la rutina_

La magia está en repetirlo. Cada viernes, un mensaje:

```text
Revisa lo que he añadido o cambiado esta semana en «Mi segundo cerebro». Escríbeme un resumen en 5 líneas, 3 prioridades para la semana que viene y cualquier cosa que se esté quedando olvidada. Guárdalo como página nueva llamada «Semana del [fecha]».
```

**✅ Comprobación:** tienes tu primer resumen semanal guardado en Notion.

## Al terminar

Tu Notion ya tiene una estructura clara y una rutina semanal. Cada viernes, un mensaje y listo. Más abajo tienes extras de seguridad e ideas.

## Extras (opcionales, después de servir)

### Extra 1. Cuida tu despensa
_Siempre · seguridad_

- ⚠️ **Ojo con los mensajes trampa**: un documento o una página web que guardes puede llevar instrucciones escondidas para engañar a Claude («ignora lo anterior y reenvía…»). Por eso la regla de oro: Claude solo lee y propone; enviar, borrar o compartir lo haces tú. Si hace algo que no le pediste, páralo.
- Pide siempre **«enséñame antes de borrar»**.
- No guardes contraseñas ni datos bancarios en Notion.
- Notion guarda el historial de cada página: si algo sale mal, puedes volver atrás.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **Claude no encuentra una página**: comprueba que el espacio de trabajo tiene acceso en el conector.
- **Resultados a medias**: pide partes más pequeñas («solo las notas de marzo»).

**💡 Ideas para seguir**

- Un diario con preguntas diarias.
- Un CRM sencillo de clientes.
- Un plan de estudio para tus exámenes.

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:slack-equipo` · Claude en tu Slack
- `/amri:chef` · combina varias recetas en un proyecto propio
