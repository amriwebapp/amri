---
name: primer-agente
description: "Receta de AMRI «Tu primer agente: Claude trabaja por ti». Dale una tarea de varios pasos y mira cómo Claude hace un plan, lo ejecuta en tu ordenador y te pide permiso antes de lo importante. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu primer agente: Claude trabaja por ti

Dale una tarea de varios pasos y mira cómo Claude hace un plan, lo ejecuta en tu ordenador y te pide permiso antes de lo importante.

- ⏱ 40 min aprox.
- 👩‍🍳 Sin saber programar
- 💶 Necesita un plan de pago de Claude
- 🍽 Resultado: una tarea hecha por Claude de principio a fin
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
- **Una carpeta de prueba**: el único sitio donde le dejarás trabajar.
- **La terminal**: una ventana donde se dan órdenes al ordenador escribiendo. Ya viene en tu ordenador.

## Ideas de ejemplo

- **Un informe con mis documentos:** leer los documentos de la carpeta y prepararme un informe de una página con lo más importante
- **Limpiar una hoja de cálculo:** revisar la hoja de cálculo de la carpeta, corregir errores evidentes y hacerme un resumen con totales
- **Una web sencilla:** crear una web de una página para presentarme, abrirla en el navegador y mejorarla hasta que quede bien

## Antes de empezar

Pregunta a la persona: **¿Te animas a probar también la terminal?** Si dudas, elige «No»: con la app de escritorio no la necesitas. Con «Sí» aprenderás a usar Claude Code desde la terminal, como hacen los programadores.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Qué es un agente
_3 min · la idea_

Hasta ahora has usado Claude como un chat: tú preguntas, él responde y tú haces el resto. Un **agente** es Claude trabajando por su cuenta en una tarea de varios pasos: hace un plan, abre y crea archivos, comprueba si ha salido bien, corrige y te avisa al terminar.

**La diferencia, con un ejemplo**

- **Chat**: te explica cómo ordenar tu carpeta de descargas.
- **Agente**: la ordena, te enseña el resultado y te pregunta antes de borrar nada.

> 💡 Tú pones el objetivo y los límites. Claude hace el trabajo. Lo importante siempre lo apruebas tú.

**✅ Comprobación:** sabrías explicar la diferencia entre un chat y un agente.

### 2. Prepara la cocina
_10 min · app y carpeta_

#### Pasos

- Descarga la app de escritorio desde [claude.ai/download](https://claude.ai/download) e inicia sesión.

- Crea en tu escritorio una carpeta llamada **prueba-agente**.

- Copia dentro unos cuantos archivos para la tarea. **Copias, no los originales.**

> 💡 Trabajar con copias la primera vez es la mejor red de seguridad: si algo sale mal, borras la carpeta y vuelves a empezar.

**✅ Comprobación:** tienes la app abierta y la carpeta prueba-agente con archivos de prueba.

### 3. Abre el modo agente
_3 min · Cowork o Code_

En la app de escritorio, Claude puede trabajar como agente de dos formas:

- **Cowork**: para tareas con tus documentos: ordenar, resumir, preparar informes u hojas de cálculo.

- **Code** (Claude Code): para crear webs, pequeños programas o automatizaciones.

#### Pasos

- Elige el que encaje con tu tarea.
- Cuando te pregunte con qué carpeta trabajar, elige **prueba-agente**. Solo esa.

> 💡 Los nombres de los menús cambian de vez en cuando. Si no ves Cowork ni Code, actualiza la app y comprueba que tu plan es de pago.

**✅ Comprobación:** Claude tiene acceso a tu carpeta de prueba, y a nada más.

### 4. Pídele un plan primero
_5 min · la orden_

#### Copia este mensaje y pégalo

```text
Quiero que hagas esto: [la idea de la persona].

Trabaja solo dentro de la carpeta prueba-agente.
Antes de hacer nada, dime tu plan en pasos cortos y espera mi OK.
No borres ni sobrescribas ningún archivo sin preguntarme.
Al terminar, resúmeme qué has cambiado.
```

**¿Por qué cada parte?**

- «Solo dentro de la carpeta»: decides dónde puede tocar.
- «Dime tu plan»: ves qué va a hacer antes de que lo haga, y puedes corregirlo.
- «No borres sin preguntarme»: lo que no tiene vuelta atrás lo decides tú.

**✅ Comprobación:** Claude te ha enseñado un plan que entiendes.

### 5. Déjale trabajar
_10 min · aprueba con calma_

#### Pasos

- Si el plan te parece bien, responde **«OK, adelante»**. Si no, corrígelo con tus palabras.

- Mientras trabaja, verás lo que va haciendo.

- Cuando te pida permiso (crear, mover o borrar archivos, entrar en internet), lee qué es y decide.

> 💡 Al principio, da los permisos de uno en uno. Cuando le cojas confianza, podrás darle más libertad.

> 💡 Si hace algo que no querías, pulsa el botón de parar y explícale qué esperabas.

**✅ Comprobación:** Claude ha terminado y te ha dado un resumen de lo que ha hecho.

### 6. Revisa y deshaz si hace falta
_5 min · tú decides_

Abre la carpeta y comprueba el resultado con tus ojos. Si algo no te convence, pídeselo:

```text
Deshaz el último cambio y explícame qué habías hecho y por qué.
```

> 💡 Para la próxima vez: guarda el mensaje del paso 4 en una nota. Te servirá para cualquier tarea, cambiando solo la primera línea.

**✅ Comprobación:** el resultado está como querías, o has deshecho lo que no te gustaba.

### 7. Claude Code en la terminal _(solo si la respuesta a «Te animas a probar también la terminal» es «Sí»)_
_10 min · instalarlo_

La terminal es una ventana donde das órdenes al ordenador escribiendo. Claude Code funciona ahí igual que en la app.

#### Pasos

- **Mac:** abre la app **Terminal** y pega:

```text
curl -fsSL https://claude.ai/install.sh | bash
```

- **Windows:** abre **PowerShell** y pega:

```text
irm https://claude.ai/install.ps1 | iex
```

- Cierra la ventana, ábrela de nuevo y entra en tu carpeta de prueba:

```text
cd Desktop/prueba-agente
claude
```

- Inicia sesión cuando te lo pida y pega el mismo mensaje del paso 4.

> 💡 ¿Sale «command not found»? Cierra la terminal del todo y vuelve a abrirla.

**✅ Comprobación:** Claude Code te responde dentro de la terminal.

### 8. Cuatro trucos de la terminal _(solo si la respuesta a «Te animas a probar también la terminal» es «Sí»)_
_5 min · con seguridad_

- **Mayús + Tab**: cambia de modo. En el **modo plan**, Claude solo propone y no toca nada.

- **/rewind** (o pulsa **Esc** dos veces): vuelve a un punto anterior y deshace los cambios.

- **/init**: Claude crea un archivo CLAUDE.md con notas de tu proyecto, que leerá cada vez que vuelvas.

- **/help**: todo lo que puedes hacer.

**✅ Comprobación:** has probado el modo plan y sabes cómo deshacer.

## Al terminar

Has trabajado con tu primer agente: le diste un objetivo, aprobaste su plan y revisaste el resultado. Ese es el método para cualquier tarea, pequeña o grande.

## Extras (opcionales, después de servir)

### Extra 1. Agentes que trabajan en equipo
_Opcional · siguiente nivel_

En tareas grandes, Claude puede repartir el trabajo entre varios ayudantes, llamados **subagentes**: uno investiga, otro escribe y otro revisa. En Claude Code puedes crear los tuyos con **/agents**.

> 💡 Antes de llegar aquí, haz varias tareas pequeñas con un solo agente. Así sabrás qué pedir y cómo revisar.

### Extra 2. Recetas enteras con un comando
_Opcional · el plugin de AMRI_

Con Claude Code puedes instalar el [plugin de AMRI](../plugin.html). Cada receta de esta web se convierte en un comando, y Claude la hace contigo de principio a fin.

```text
/amri:chef una web para mi estudio de yoga con reservas
```

### Extra 3. Reglas de la casa
_Siempre · seguridad_

- Dale acceso solo a la carpeta que necesita.

- Nunca le escribas contraseñas ni datos bancarios.

- Ojo con las trampas: una web o un documento pueden esconder instrucciones para engañar a Claude. Si hace algo que no le pediste, páralo.

- Antes de publicar, enviar o borrar algo, revisa tú.

### Extra 4. Si algo no funciona
_Siempre · revisa esto_

- **No veo Cowork ni Code**: actualiza la app y comprueba que tu plan es de pago.

- **Se para a mitad**: escríbele «sigue por donde ibas».

- **Hace más de lo que pedí**: vuelve a empezar pidiendo el plan primero y di qué no debe tocar.

## Sigue con

- `/amri:skills-propias` · Enséñale tu método con Skills
- `/amri:conector-propio` · Cocina tu propio conector
- `/amri:chef` · combina varias recetas en un proyecto propio
