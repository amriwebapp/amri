---
name: skills-propias
description: "Receta de AMRI «Enséñale tu método con Skills». Convierte tu forma de trabajar en una Skill: Claude la usará sola cada vez que la necesite. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Enséñale tu método con Skills

Convierte tu forma de trabajar en una Skill: Claude la usará sola cada vez que la necesite.

- ⏱ 30 min aprox.
- 👩‍🍳 Dificultad media
- 💶 0 € para empezar
- 🍽 Resultado: una Skill que Claude usa sola
- Categoría: Claude a tu medida
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/skills-claude.html

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

## Ingredientes

- **Claude**: el alumno aplicado.
- **Una Skill**: tu receta escrita. Una carpeta con un archivo **SKILL.md** que explica cómo hacer algo.
- **Tu ejemplo o plantilla**: el plato de muestra.
- **Ejecución de código activada**: la encimera. Las Skills la necesitan.

## Ideas de ejemplo

- **Correos con mi estilo:** responder correos de clientes con mi tono, mis firmas y mis respuestas habituales
- **Fichas de producto:** escribir fichas de producto para mi tienda con título, descripción, ventajas y medidas
- **Material de clase:** preparar fichas de ejercicios para mis alumnos con nivel, objetivos y soluciones

## Antes de empezar

Pregunta a la persona: **¿Tienes un ejemplo o una plantilla que ya uses?** Si dudas, elige «Sí»: un buen ejemplo vale más que mil explicaciones.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Entiende qué es una Skill
_3 min · la idea_

Una Skill es como una ficha de receta que Claude guarda en su cajón. No la usa siempre: la saca solo cuando la tarea encaja con su descripción.

- **Nombre**: cómo se llama.
- **Descripción**: cuándo usarla. Es lo más importante.
- **Instrucciones**: el paso a paso, ejemplos y plantillas.

**✅ Comprobación:** sabrías explicar a alguien qué es una Skill en una frase.

### 2. Activa las Skills
_2 min · ajustes_

- En Claude, abre los ajustes y busca **Capacidades** (_Capabilities_) o **Personalizar → Skills**.
- Activa la **ejecución de código** (_Code execution_) si te lo pide.
- Comprueba que aparece la sección de **Skills**.

> 💡 Según tu plan o tu empresa, algunas opciones pueden estar en otro sitio o desactivadas. Mira la ayuda de Claude si no lo ves.

**✅ Comprobación:** ves la sección de Skills.

### 3. Que Claude te entreviste
_10 min · tu método_

Tú sabes hacerlo; Claude sabe escribirlo. Deja que te pregunte.

```text
Quiero crear una Skill para [la idea de la persona].

Entrevístame con preguntas de una en una para entender mi método: cuándo lo uso, qué pasos sigo, qué errores evito y cómo sé que ha quedado bien. Máximo 8 preguntas.
```

**✅ Comprobación:** has respondido a todas las preguntas.

### 4. Dale tu plato de muestra _(solo si la respuesta a «Tienes un ejemplo o una plantilla que ya uses» es «Sí»)_
_3 min · el ejemplo_

- Adjunta tu ejemplo o plantilla al chat (📎).
- Escribe:

```text
Este es un ejemplo de cómo me gusta que quede. Inclúyelo en la Skill como referencia y explica qué tiene de bueno.
```

> 💡 Quita datos personales o confidenciales del ejemplo antes de subirlo.

**✅ Comprobación:** Claude ha entendido tu ejemplo.

### 5. Que Claude escriba la Skill
_5 min · redactar_

```text
Ahora escribe la Skill. Crea una carpeta con un archivo SKILL.md que tenga: un nombre corto, una descripción clara de CUÁNDO usarla, y las instrucciones paso a paso. Si hace falta, añade plantillas o ejemplos en archivos aparte. Empaquétala en un .zip para que pueda descargarla.
```

**Una buena descripción…**

- Dice cuándo usarla: «Úsala cuando el usuario pida el acta de una reunión».
- Usa las palabras que tú usarías al pedirlo.
- Es corta: una o dos frases.

**✅ Comprobación:** tienes un archivo .zip descargado.

### 6. Instálala
_2 min · al cajón_

- Vuelve a la sección de **Skills** de los ajustes.
- Pulsa **Subir Skill** (_Upload skill_) y elige tu .zip.
- Comprueba que aparece activada.

**✅ Comprobación:** tu Skill aparece en la lista.

### 7. Pruébala sin nombrarla
_5 min · el examen_

La prueba de fuego: pedir la tarea sin mencionar la Skill.

```text
[Pide la tarea como la pedirías normalmente, sin decir «usa la Skill»]
```

> 💡 Si Claude no la usa, mejora la descripción: añade las palabras exactas con las que la pides.

**✅ Comprobación:** Claude aplica tu método sin que se lo recuerdes.

## Al terminar

Claude ya conoce tu método. A partir de ahora lo aplicará solo cuando lo necesite. Y si quieres, compártelo: puede ser una receta de AMRI.

## Extras (opcionales, después de servir)

### Extra 1. Compártela con AMRI
_Opcional · open source_

Si tu Skill puede ayudar a otras personas, súmala a la academia: AMRI es abierta. Abre una propuesta en nuestro repositorio de GitHub con tu carpeta y una frase de para qué sirve.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **No se instala**: el .zip debe contener la carpeta con el SKILL.md dentro.
- **No se usa sola**: la descripción es demasiado vaga. Hazla más concreta.
- **Hace cosas raras**: pide a Claude que revise la Skill y la simplifique.

## Sigue con

- `/amri:gurusup-brain` · El cerebro de tu empresa con GuruSup
- `/amri:conector-propio` · Cocina tu propio conector MCP
- `/amri:chef` · combina varias recetas en un proyecto propio
