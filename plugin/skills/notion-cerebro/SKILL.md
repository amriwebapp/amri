---
name: notion-cerebro
description: "Receta de AMRI «Tu segundo cerebro en Notion». Ordena tus notas, un tablero de proyectos, tu repaso de los viernes, tu biblioteca de lecturas, actas de reuniones y preguntas a tu Notion. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu segundo cerebro en Notion

Ordena tus notas, un tablero de proyectos, tu repaso de los viernes, tu biblioteca de lecturas, actas de reuniones y preguntas a tu Notion.

- 📕 6 recetas
- ⏱ 15-25 min cada una
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
- **El conector de Notion**: la llave de la despensa. Deja a Claude leer y escribir páginas.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 6 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_3 min · cuentas_

- Entra en [Notion](https://www.notion.so) (plan gratuito).
- Entra en [Claude](https://claude.ai).

**✅ Comprobación:** puedes entrar en las dos.

### 2. Conecta Notion con Claude
_3 min · el conector_

- En Claude abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Pulsa **Explorar conectores**, busca «Notion» y pulsa **Conectar**.
- Inicia sesión, elige tu espacio de trabajo y pulsa **Permitir**.
- En un chat nuevo, pulsa **+ → Conectores** y comprueba que Notion está activado.

**✅ Comprobación:** Notion aparece activado.

### 3. La regla de oro
_1 min · primero mirar_

En todas las recetas de este libro, empieza diciendo «No cambies nada todavía». Primero mirar, luego tocar.

**✅ Comprobación:** te acordarás de decirlo.

## Recetas del libro

### Receta 1: Ordena tus notas sueltas

Claude revisa lo que tienes, propone una estructura y la monta.

- ⏱ 25 min
- 👩‍🍳 Fácil
- 🗂 Orden
- 🍽 Resultado: tus notas agrupadas por tema
- Versión web: https://amri.es/recetas/notion-cerebro--ordenar.html
- Ideas de ejemplo:
  - Notas sueltas: todas mis notas sueltas, ideas y enlaces guardados
  - Documentos del trabajo: los documentos de mi trabajo

#### 1. El inventario
_5 min · qué hay_

```text
Busca en mi Notion [la idea de la persona]. Hazme un resumen de cómo está organizado ahora y qué problemas ves (duplicados, páginas vacías, cosas sin clasificar). No cambies nada todavía.
```

**✅ Comprobación:** Claude te describe lo que tienes.

#### 2. La estructura
_10 min · el plan_

```text
Propón cómo organizarlo: qué páginas o bases de datos crear y dónde va cada cosa. Explícalo en pocas palabras y espera mi OK.
```

**✅ Comprobación:** tienes un plan que te convence.

#### 3. Que lo monte
_10 min · con permiso_

```text
OK. Crea la estructura y mueve o copia ahí mis páginas. Dime cuáles has tocado. No borres nada.
```

**✅ Comprobación:** abres Notion y ves tus notas ordenadas.

**Al terminar:** Tus notas tienen sitio. Sigue con «Tu repaso de los viernes» para mantenerlo.

### Receta 2: Proyectos y tareas en un tablero

Una base de datos con tus proyectos, fechas y estado, con vista de tablero y calendario.

- ⏱ 20 min
- 👩‍🍳 Fácil
- ✅ Tareas
- 🍽 Resultado: tu tablero de proyectos
- Versión web: https://amri.es/recetas/notion-cerebro--proyectos.html
- Ideas de ejemplo:
  - Trabajo: mis proyectos del trabajo, con sus tareas, fechas de entrega y estado
  - Casa: las tareas de casa y los recados

#### 1. Diseña la base de datos
_5 min · el plan_

Una base de datos de Notion es como una hoja de cálculo bonita: cada fila es una página.

```text
Propón una base de datos de Notion para [la idea de la persona]: propiedades (columnas) con su tipo, una vista de tablero y otra de calendario. Espera mi OK.
```

**✅ Comprobación:** tienes la propuesta.

#### 2. Créala
_10 min · montar_

```text
Créala en mi Notion en una página llamada «Mis proyectos», con 3 ejemplos para ver cómo queda.
```

> 💡 Si Claude no puede crear algo (por ejemplo, un tipo de vista), te dirá cómo hacerlo a mano en dos clics.

**✅ Comprobación:** ves el tablero en Notion.

#### 3. Añade tareas hablando
_5 min · usarlo_

```text
Añade a «Mis proyectos»: [tarea, proyecto, fecha]. Y dime qué vence esta semana.
```

**✅ Comprobación:** la tarea aparece en el tablero.

**Al terminar:** Tu tablero está listo. Añade tareas con un mensaje: «Añade al tablero: …».

### Receta 3: Tu repaso de los viernes

Cada viernes, un resumen de la semana, tus prioridades y lo que se está olvidando.

- ⏱ 15 min
- 👩‍🍳 Muy fácil
- 🔁 Rutina
- 🍽 Resultado: tu resumen semanal guardado en Notion
- Versión web: https://amri.es/recetas/notion-cerebro--repaso.html
- Ideas de ejemplo:
  - Todo: lo que he añadido o cambiado esta semana en mi Notion
  - Solo proyectos: el estado de mis proyectos

#### 1. El resumen
_10 min · la semana_

```text
Revisa [la idea de la persona]. Escríbeme un resumen en 5 líneas, 3 prioridades para la semana que viene y cualquier cosa que se esté quedando olvidada. Guárdalo como página nueva llamada «Semana del [fecha]».
```

**✅ Comprobación:** tienes tu resumen guardado en Notion.

#### 2. Hazlo costumbre
_5 min · la rutina_

- Guarda el mensaje en una nota.
- Ponte un recordatorio los viernes.

**✅ Comprobación:** tienes el recordatorio puesto.

**Al terminar:** Repite cada viernes. En un mes tendrás un diario de tu trabajo.

### Receta 4: Tu biblioteca de lecturas

Libros y artículos con resumen, valoración y citas favoritas.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 📚 Lecturas
- 🍽 Resultado: tu biblioteca en Notion
- Versión web: https://amri.es/recetas/notion-cerebro--lecturas.html
- Ideas de ejemplo:
  - Libros: los libros que leo
  - Artículos y vídeos: los artículos y vídeos que guardo para más tarde

#### 1. Crea la biblioteca
_5 min · la base_

```text
Crea en mi Notion una base de datos para [la idea de la persona]: título, autor, estado (por leer, leyendo, leído), valoración, resumen y citas favoritas. Con una vista de galería.
```

**✅ Comprobación:** ves la biblioteca en Notion.

#### 2. Tu primera ficha
_10 min · probar_

```text
Acabo de leer [título]. Mis notas: [pégalas]. Crea su ficha con un resumen de 5 líneas y mis 3 mejores citas.
```

**✅ Comprobación:** tienes tu primera ficha.

**Al terminar:** Tu biblioteca está lista. Después de cada lectura, pega tus notas y Claude crea la ficha.

### Receta 5: Actas de reuniones en Notion

Pegas tus notas desordenadas y Claude crea un acta limpia con acuerdos y tareas.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 📝 Actas
- 🍽 Resultado: un acta en Notion
- Versión web: https://amri.es/recetas/notion-cerebro--actas.html
- Ideas de ejemplo:
  - Trabajo: una reunión de trabajo
  - Asociación o comunidad: una reunión de mi asociación o comunidad de vecinos

#### 1. Pega tus notas
_5 min · el acta_

```text
Estas son mis notas de [la idea de la persona]: [pégalas, aunque estén desordenadas]. Crea en Notion un acta con: asistentes, temas, acuerdos y tareas con responsable y fecha. No inventes nada que no esté en mis notas.
```

**✅ Comprobación:** el acta está en Notion.

#### 2. Revisa
_5 min · con lupa_

Comprueba nombres, fechas y acuerdos antes de compartirla.

**✅ Comprobación:** el acta es correcta.

**Al terminar:** Tu acta está guardada. Si usas el tablero de proyectos, Claude puede añadir ahí las tareas.

### Receta 6: Pregúntale a tu Notion

Encuentra cualquier cosa que guardaste, aunque no recuerdes dónde.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 🔎 Buscar
- 🍽 Resultado: la respuesta con enlace a la página
- Versión web: https://amri.es/recetas/notion-cerebro--buscar.html
- Ideas de ejemplo:
  - Un dato concreto: un dato concreto que guardé
  - Todo sobre un tema: todo lo que tengo sobre un tema

#### 1. Pregunta
_5 min · buscar_

```text
Busca en mi Notion [la idea de la persona]: [tu pregunta]. Responde citando la página de donde lo sacas, con su enlace. Si no lo encuentras, dilo.
```

**✅ Comprobación:** tienes la respuesta con su enlace.

#### 2. Comprueba
_5 min · el enlace_

Abre el enlace y confirma que es lo que buscabas.

**✅ Comprobación:** la respuesta era correcta.

**Al terminar:** Tu Notion responde. Cuanto más ordenado, mejores respuestas.

## Al terminar

Notion está conectado. Elige qué quieres organizar.

## Extras (opcionales, después de servir)

### Extra 1. Cuida tu despensa
_Siempre · seguridad_

- ⚠️ **Ojo con los mensajes trampa**: un documento o una página web que guardes puede llevar instrucciones escondidas para engañar a Claude. Claude solo lee y propone; borrar o compartir lo decides tú.
- Pide siempre «enséñame antes de borrar».
- No guardes contraseñas ni datos bancarios en Notion.
- Notion guarda el historial de cada página: si algo sale mal, puedes volver atrás.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **Claude no encuentra una página**: comprueba que el espacio de trabajo tiene acceso en el conector.
- **Resultados a medias**: pide partes más pequeñas («solo las notas de marzo»).

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:slack-equipo` · Claude en tu Slack
- `/amri:chef` · combina varias recetas en un proyecto propio
