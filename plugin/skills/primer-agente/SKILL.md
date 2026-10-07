---
name: primer-agente
description: "Receta de AMRI «Tu primer agente: Claude trabaja por ti». Claude hace tareas largas en tu ordenador: ordenar carpetas, informes, hojas de cálculo, una web, la terminal y tu primer subagente. Siempre con tu permiso. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu primer agente: Claude trabaja por ti

Claude hace tareas largas en tu ordenador: ordenar carpetas, informes, hojas de cálculo, una web, la terminal y tu primer subagente. Siempre con tu permiso.

- 📕 6 recetas
- ⏱ 20-40 min cada una
- 💶 Necesita un plan de pago de Claude
- 🍽 Resultado: tareas largas hechas por Claude, con tu permiso
- Categoría: Claude a tu medida
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/primer-agente.html

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

- **Claude con un plan de pago** (Pro o superior): el agente. Los modos que trabajan con tus archivos no están en el plan gratuito.
- **La app de escritorio de Claude**: donde trabaja. Mac o Windows.
- **Una carpeta de prueba**: el único sitio donde le dejarás trabajar al principio.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 6 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Qué es un agente
_3 min · la idea_

Hasta ahora has usado Claude como un chat: tú preguntas, él responde y tú haces el resto. Un **agente** hace el trabajo: planifica, abre y crea archivos, comprueba si ha salido bien, corrige y te avisa al terminar.

**La diferencia, con un ejemplo**

- **Chat**: te explica cómo ordenar tu carpeta de descargas.
- **Agente**: la ordena, te enseña el resultado y te pregunta antes de borrar nada.

**✅ Comprobación:** sabrías explicar la diferencia entre un chat y un agente.

### 2. Instala la app y crea tu carpeta
_10 min · la cocina_

- Descarga la app de escritorio desde [claude.ai/download](https://claude.ai/download) e inicia sesión con tu cuenta de pago.
- Crea en tu escritorio una carpeta llamada **prueba-agente**.
- Copia dentro unos cuantos archivos para practicar. **Copias, no los originales.**

> 💡 Trabajar con copias es la mejor red de seguridad: si algo sale mal, borras la carpeta y vuelves a empezar.

**✅ Comprobación:** tienes la app abierta y la carpeta prueba-agente con archivos de prueba.

### 3. Los dos modos: Cowork y Code
_3 min · cuál usar_

- **Cowork**: para tareas con tus documentos: ordenar, resumir, preparar informes u hojas de cálculo.
- **Code** (Claude Code): para crear webs, pequeños programas o automatizaciones.

> 💡 Los nombres de los menús cambian de vez en cuando. Si no ves Cowork ni Code, actualiza la app y comprueba que tu plan es de pago.

**✅ Comprobación:** ves Cowork y Code en la app.

### 4. Tu mensaje de seguridad
_2 min · para siempre_

Guarda este mensaje en una nota. Lo pegarás al principio de cada tarea, cambiando solo la primera línea.

```text
Quiero que hagas esto: [la tarea].

Trabaja solo dentro de la carpeta [nombre].
Antes de hacer nada, dime tu plan en pasos cortos y espera mi OK.
No borres ni sobrescribas ningún archivo sin preguntarme.
Al terminar, resúmeme qué has cambiado.
```

**✅ Comprobación:** tienes el mensaje guardado en una nota.

## Recetas del libro

### Receta 1: Tu primera tarea: ordena una carpeta

La tarea perfecta para empezar: Claude ordena archivos y tú apruebas cada paso.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🗂 Cowork
- 🍽 Resultado: una carpeta ordenada por Claude
- Versión web: https://amri.es/recetas/primer-agente--primera-tarea.html
- Ideas de ejemplo:
  - Descargas: ordenar los archivos de la carpeta en subcarpetas por tipo y darme una lista de lo que hay
  - Fotos: ordenar las fotos de la carpeta en subcarpetas por fecha y renombrarlas con la fecha y el lugar si aparece
  - Facturas: renombrar las facturas de la carpeta con la fecha, la empresa y el importe, y hacerme una lista

#### 1. Abre Cowork en tu carpeta
_3 min · empezar_

- En la app, abre **Cowork**.
- Cuando te pregunte con qué carpeta trabajar, elige **prueba-agente**. Solo esa.

**✅ Comprobación:** Claude tiene acceso a tu carpeta de prueba y a nada más.

#### 2. Pide el plan
_5 min · la orden_

```text
Quiero que hagas esto: [la idea de la persona].

Trabaja solo dentro de la carpeta prueba-agente.
Antes de hacer nada, dime tu plan en pasos cortos y espera mi OK.
No borres ni sobrescribas ningún archivo sin preguntarme.
Al terminar, resúmeme qué has cambiado.
```

**✅ Comprobación:** Claude te ha enseñado un plan que entiendes.

#### 3. Déjale trabajar
_7 min · aprueba con calma_

- Si el plan te parece bien, responde **«OK, adelante»**. Si no, corrígelo.
- Cuando te pida permiso (crear, mover o borrar archivos), lee qué es y decide.

> 💡 Al principio, da los permisos de uno en uno.

**✅ Comprobación:** Claude ha terminado y te ha dado un resumen.

#### 4. Revisa y deshaz si hace falta
_5 min · tú decides_

Abre la carpeta y mira el resultado. Si algo no te convence:

```text
Deshaz el último cambio y explícame qué habías hecho y por qué.
```

**✅ Comprobación:** la carpeta está como querías.

**Al terminar:** Tu primera tarea con un agente: objetivo, plan, permiso y revisión. Ese es el método para todo.

### Receta 2: Un informe con tus documentos

Claude lee varios documentos de una carpeta y te prepara un informe de una página.

- ⏱ 25 min
- 👩‍🍳 Fácil
- 📄 Cowork
- 🍽 Resultado: un informe en un documento nuevo
- Versión web: https://amri.es/recetas/primer-agente--informe.html
- Ideas de ejemplo:
  - Actas de reuniones: leer las actas de reunión de la carpeta y hacerme un informe con las decisiones, los pendientes y quién se encarga de cada uno
  - Presupuestos: leer los presupuestos de la carpeta y hacerme una tabla comparativa con precio, plazo y condiciones
  - Apuntes: leer mis apuntes de la carpeta y hacerme un resumen de una página con lo más importante para el examen

#### 1. Prepara la carpeta
_5 min · solo lo necesario_

- Copia los documentos a **prueba-agente** (o a una carpeta nueva solo para esto).
- Quita los que no tengan que ver.

> 💡 ⚠️ Si hay datos personales de otras personas, piensa si de verdad hacen falta.

**✅ Comprobación:** la carpeta tiene solo los documentos del informe.

#### 2. Pide el informe
_10 min · la orden_

```text
Quiero que hagas esto: [la idea de la persona].

Trabaja solo dentro de la carpeta [nombre]. Antes de empezar, dime qué documentos has encontrado y tu plan. Guarda el informe como un documento nuevo, sin tocar los originales. Indica de qué documento sale cada dato.
```

**✅ Comprobación:** Claude ha creado el informe en un documento nuevo.

#### 3. Comprueba tres datos
_10 min · con lupa_

Elige tres datos del informe al azar y búscalos en los documentos originales.

```text
Este dato no coincide con el documento: [cuál]. Revísalo y corrige el informe.
```

**✅ Comprobación:** los datos que has comprobado coinciden.

**Al terminar:** Tienes tu informe. Guarda el mensaje: el mes que viene solo cambias la carpeta.

### Receta 3: Limpia y resume una hoja de cálculo

Claude revisa un Excel o CSV, corrige errores evidentes y te hace un resumen con totales.

- ⏱ 25 min
- 👩‍🍳 Media
- 📊 Cowork
- 🍽 Resultado: tu hoja limpia y un resumen
- Versión web: https://amri.es/recetas/primer-agente--hoja.html
- Ideas de ejemplo:
  - Gastos: revisar la hoja de gastos, unificar el formato de fechas y categorías, y hacerme un resumen por mes y por categoría
  - Lista de clientes: revisar la lista de clientes, quitar duplicados y marcar los datos que falten
  - Ventas: revisar la hoja de ventas y hacerme un resumen con los productos que más y menos se venden

#### 1. Copia la hoja
_3 min · una copia_

- Copia la hoja a tu carpeta de prueba. **Una copia**: el original no se toca.

**✅ Comprobación:** la copia está en la carpeta.

#### 2. Pide la revisión
_12 min · la orden_

```text
Quiero que hagas esto: [la idea de la persona].

Trabaja solo con la copia de la carpeta [nombre]. Antes de cambiar nada, dime qué errores has encontrado y qué propones. Guarda el resultado en un archivo nuevo y el resumen aparte.
```

**✅ Comprobación:** tienes la hoja limpia en un archivo nuevo y el resumen.

#### 3. Comprueba los totales
_10 min · con calma_

Suma tú una columna o un mes a mano y compáralo con el resumen.

```text
Explícame cómo has calculado este total: [cuál]. ¿Has quitado o cambiado alguna fila?
```

**✅ Comprobación:** los totales que has comprobado cuadran.

**Al terminar:** Tu hoja está limpia y resumida. Revisa siempre los totales antes de usarlos para algo importante.

### Receta 4: Una web sencilla con Claude Code

Claude crea una web de una página, la abre en el navegador y la mejora contigo.

- ⏱ 30 min
- 👩‍🍳 Media
- 💻 Claude Code
- 🍽 Resultado: una web en tu ordenador
- Versión web: https://amri.es/recetas/primer-agente--web.html
- Ideas de ejemplo:
  - Presentación personal: crear una web de una página para presentarme, abrirla en el navegador y mejorarla hasta que quede bien
  - Un evento: crear una web de una página para un evento, con fecha, lugar y programa

#### 1. Abre Code en una carpeta nueva
_3 min · empezar_

- Crea una carpeta **mi-web**.
- En la app, abre **Code** y elige esa carpeta.

**✅ Comprobación:** Claude Code está abierto en mi-web.

#### 2. Pídela
_15 min · Claude trabaja_

```text
Quiero que hagas esto: [la idea de la persona].

Trabaja solo en esta carpeta. Antes de empezar, dime tu plan. Hazla con HTML, CSS y JavaScript sencillos, que se vea bien en el móvil. Cuando acabes, ábrela en el navegador para que la vea.
```

**✅ Comprobación:** ves tu web en el navegador.

#### 3. Mejórala con frases cortas
_10 min · a tu gusto_

- «Pon los colores más cálidos».
- «Añade una sección de contacto».
- «Que el título sea más grande en el móvil».

> 💡 Un cambio cada vez. Si algo se rompe, pide «vuelve a como estaba antes».

**✅ Comprobación:** la web está como querías.

**Al terminar:** Tienes tu web en tu ordenador. Para publicarla gratis, sigue el libro «Tu web online y gratis».

### Receta 5: Claude Code en la terminal

Instálalo, ábrelo en tu carpeta y aprende los cuatro trucos que te dan control.

- ⏱ 20 min
- 👩‍🍳 Media
- ⌨️ Terminal
- 🍽 Resultado: Claude Code funcionando en la terminal
- Versión web: https://amri.es/recetas/primer-agente--terminal.html
- Ideas de ejemplo:
  - Mac: Mac
  - Windows: Windows

#### 1. Instálalo
_5 min · una línea_

La terminal es una ventana donde das órdenes al ordenador escribiendo.

- Abre **PowerShell** y pega:

```text
irm https://claude.ai/install.ps1 | iex
```

> 💡 ¿Sale «command not found» después? Cierra la terminal del todo y vuelve a abrirla.

**✅ Comprobación:** la instalación ha terminado sin errores.

#### 2. Ábrelo en tu carpeta
_5 min · empezar_

```text
cd Desktop/prueba-agente
claude
```

- Inicia sesión cuando te lo pida.
- Pega tu mensaje de seguridad con una tarea pequeña.

**✅ Comprobación:** Claude Code te responde dentro de la terminal.

#### 3. Cuatro trucos
_10 min · control_

- **Mayús + Tab**: cambia de modo. En el **modo plan**, Claude solo propone y no toca nada.
- **/rewind** (o **Esc** dos veces): vuelve a un punto anterior y deshace los cambios.
- **/init**: crea un archivo CLAUDE.md con notas de tu proyecto, que leerá cada vez.
- **/help**: todo lo que puedes hacer.

**✅ Comprobación:** has probado el modo plan y sabes cómo deshacer.

**Al terminar:** Ya usas Claude Code como los programadores. Desde aquí puedes instalar el plugin de AMRI.

### Receta 6: Agentes en equipo: tu primer subagente

Crea un ayudante especializado (por ejemplo, un revisor) al que Claude le pasa parte del trabajo.

- ⏱ 25 min
- 👩‍🍳 Avanzada
- 🧑‍🤝‍🧑 Claude Code
- 🍽 Resultado: un subagente revisor que Claude usa solo
- Versión web: https://amri.es/recetas/primer-agente--equipo.html
- Ideas de ejemplo:
  - Revisor de textos: un revisor que comprueba faltas, tono y datos inventados antes de entregar un texto
  - Investigador: un investigador que busca información y la devuelve resumida con sus fuentes

#### 1. Qué es un subagente
_3 min · la idea_

En tareas grandes, Claude puede repartir el trabajo entre ayudantes especializados, llamados **subagentes**. Cada uno tiene sus propias instrucciones. Antes de llegar aquí, haz varias tareas con un solo agente.

**✅ Comprobación:** sabes para qué sirve un subagente.

#### 2. Créalo con /agents
_12 min · en Claude Code_

- En Claude Code, escribe `/agents` y elige crear uno nuevo.
- Cuando te pida describirlo, pega:

```text
Quiero [la idea de la persona]. Que actúe solo cuando se lo pidan, que explique qué ha encontrado en una lista corta y que nunca cambie archivos sin permiso.
```

**✅ Comprobación:** el subagente aparece en la lista de /agents.

#### 3. Ponlo a trabajar
_10 min · probar_

```text
Escribe un texto corto de presentación para mi web y, antes de dármelo, pásaselo a mi subagente para que lo revise. Dime qué ha corregido.
```

**✅ Comprobación:** Claude ha usado el subagente y te dice qué ha cambiado.

**Al terminar:** Ya tienes tu primer subagente. Puedes crear más, pero empieza con pocos y muy concretos.

## Al terminar

Tu cocina está lista. Empieza por «Tu primera tarea» y después elige la receta que quieras.

## Extras (opcionales, después de servir)

### Extra 1. Reglas de la casa
_Siempre · seguridad_

- Dale acceso solo a la carpeta que necesita.
- Nunca le escribas contraseñas ni datos bancarios.
- Ojo con las trampas: una web o un documento pueden esconder instrucciones para engañar a Claude. Si hace algo que no le pediste, páralo.
- Antes de publicar, enviar o borrar algo, revisa tú.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **No veo Cowork ni Code**: actualiza la app y comprueba que tu plan es de pago.
- **Se para a mitad**: escríbele «sigue por donde ibas».
- **Hace más de lo que pedí**: vuelve a empezar pidiendo el plan primero y di qué no debe tocar.

## Sigue con

- `/amri:skills-propias` · Enséñale tu método con Skills
- `/amri:conector-propio` · Cocina tu propio conector
- `/amri:chef` · combina varias recetas en un proyecto propio
