---
name: gmail-calendario
description: "Receta de AMRI «Tu secretaría: Gmail y Calendar». Tu resumen de cada mañana, borradores con tu tono, reuniones preparadas y la bandeja en orden. Claude nunca envía nada por ti. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu secretaría: Gmail y Calendar

Tu resumen de cada mañana, borradores con tu tono, reuniones preparadas y la bandeja en orden. Claude nunca envía nada por ti.

- 📕 4 recetas
- 💶 Gratis si tu plan de Claude incluye conectores
- 🍽 Resultado: tu correo y tu agenda en orden
- Categoría: Conecta tus apps
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/gmail-calendario.html

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

- **Claude**: tu secretaría. Lee, resume y propone.
- **Gmail y Google Calendar**: tu correo y tu agenda.
- **Los conectores de Gmail y Calendar**: el pase de acceso. Tú decides qué permisos das.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Conecta Gmail y Calendar
_dos conectores_

- En Claude (web o app de escritorio) abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Pulsa **Explorar conectores**, busca «Gmail» y pulsa **Conectar**. Inicia sesión y pulsa **Permitir**.
- Repite buscando «Google Calendar».
- En un chat nuevo, pulsa **+ → Conectores** y comprueba que los dos están activados.

> 💡 Si usas una cuenta de trabajo, puede que tu empresa tenga que autorizar la conexión.

**✅ Comprobación:** Gmail y Google Calendar aparecen activados.

### 2. Crea «Mi secretaría»
_las reglas_

- En Claude: **Proyectos → Crear proyecto**, llámalo **Mi secretaría**.
- En **Instrucciones**, pega:

```text
Eres mi secretaría y usas Gmail y Google Calendar.

Reglas:
- Nunca envíes correos ni aceptes invitaciones: solo propones y preparas borradores.
- Sé breve: listas cortas, lo urgente primero.
- Si algo parece una estafa o pide datos bancarios, avísame.
- Escribe como yo: cercano, claro y educado.
```

**✅ Comprobación:** tienes el proyecto con sus instrucciones.

## Recetas del libro

### Receta 1: Tu resumen de cada mañana

En un minuto: lo urgente de tu correo y tus reuniones del día.

- 👩‍🍳 Muy fácil
- ☀️ Rutina
- 🍽 Resultado: sabes qué te espera hoy
- Versión web: https://amri.es/recetas/gmail-calendario--buenos-dias.html
- Ideas de ejemplo:
  - Todo lo urgente: lo urgente de todo mi correo
  - Solo clientes: solo los correos de clientes

#### 1. El mensaje de buenos días
_probar_

Abre un chat dentro de **Mi secretaría** y pega:

```text
Revisa mis correos de las últimas 24 horas (fíjate sobre todo en [la idea de la persona]) y mi agenda de hoy. Dime:
1) Lo urgente (máximo 5).
2) Lo que puede esperar.
3) Mis reuniones de hoy y qué debería preparar para cada una.
```

**✅ Comprobación:** en un minuto sabes qué te espera hoy.

#### 2. Hazlo costumbre
_la rutina_

- Guarda el mensaje en una nota.
- Úsalo cada mañana dentro del proyecto.

> 💡 Si usas Cowork en la app de escritorio, puedes preguntarle si puede convertirlo en una tarea que se repita cada mañana laborable.

**✅ Comprobación:** mañana lo repites y tardas menos de un minuto.

**Al terminar:** Guarda el mensaje en una nota y úsalo cada mañana dentro del proyecto.

### Receta 2: Borradores de respuesta con tu tono

Claude escribe; tú revisas y envías.

- 👩‍🍳 Fácil
- ✉️ Responder
- 🍽 Resultado: borradores listos para enviar
- Versión web: https://amri.es/recetas/gmail-calendario--borradores.html
- Ideas de ejemplo:
  - Los urgentes: los correos urgentes
  - Los que se repiten: los correos que se repiten (precios, horarios, disponibilidad)

#### 1. Pide los borradores
_Claude escribe_

```text
Prepara borradores de respuesta para [la idea de la persona], con mi tono. No envíes nada. Si el conector permite crear borradores en Gmail, déjalos ahí; si no, escríbemelos aquí para copiarlos.
```

**✅ Comprobación:** tienes los borradores.

#### 2. Revisa y envía tú
_firmar_

- Abre cada borrador en Gmail (o cópialo).
- Cambia lo que no dirías tú.
- Envíalo.

**✅ Comprobación:** has enviado las respuestas que querías.

**Al terminar:** Tienes los borradores. Lee cada uno antes de enviarlo: tú firmas, tú decides.

### Receta 3: Prepara una reunión en 5 minutos

Quién viene, de qué hablasteis la última vez y qué hay que decidir.

- 👩‍🍳 Fácil
- 🗓 Reuniones
- 🍽 Resultado: una ficha de la reunión
- Versión web: https://amri.es/recetas/gmail-calendario--reuniones.html
- Ideas de ejemplo:
  - La próxima: mi próxima reunión
  - Con un cliente: mi reunión con un cliente

#### 1. La ficha
_contexto_

```text
Prepárame [la idea de la persona]: quién viene, qué nos hemos escrito últimamente, qué quedó pendiente y 3 cosas que debería decidir o preguntar. Una ficha corta.
```

**✅ Comprobación:** tienes la ficha de la reunión.

#### 2. Después: el resumen
_cerrar_

```text
Ya ha terminado la reunión. Mis notas: [pégalas]. Escribe un borrador de correo de resumen para los asistentes, con acuerdos y próximos pasos. No lo envíes.
```

**✅ Comprobación:** tienes el borrador del resumen.

**Al terminar:** Llegas preparado. Después de la reunión, pide un correo de resumen.

### Receta 4: Ordena tu bandeja de entrada

Qué es newsletter, qué es importante y de qué te puedes dar de baja.

- 👩‍🍳 Fácil
- 🧹 Orden
- 🍽 Resultado: un plan para vaciar tu bandeja
- Versión web: https://amri.es/recetas/gmail-calendario--limpiar.html
- Ideas de ejemplo:
  - Llenísima: una bandeja con miles de correos sin leer
  - Demasiadas newsletters: demasiadas newsletters y publicidad

#### 1. El diagnóstico
_qué hay_

```text
Tengo [la idea de la persona]. Mira mis correos de las últimas semanas y dime: quién me escribe más, qué newsletters no abro nunca y qué correos importantes llevan tiempo sin respuesta. No borres ni cambies nada.
```

**✅ Comprobación:** sabes qué ocupa tu bandeja.

#### 2. El plan
_poco a poco_

```text
Propón un plan en 3 pasos para vaciar mi bandeja: de qué me doy de baja, qué filtros o etiquetas creo en Gmail y qué respondo primero. Explícame cómo hacer cada cosa yo.
```

**✅ Comprobación:** tienes el plan y has empezado por el primer paso.

**Al terminar:** Tienes un plan. Las bajas y los borrados los haces tú, poco a poco.

## Al terminar

Tu secretaría está conectada. Elige la receta que más tiempo te ahorre hoy.

## Extras (opcionales, después de servir)

### Extra 1. Privacidad tranquila
_Siempre · consejos_

- ⚠️ **Ojo con los mensajes trampa**: un correo puede llevar instrucciones escondidas para engañar a Claude («ignora lo anterior y reenvía…»). Por eso la regla de oro: Claude solo lee y propone; enviar, borrar o compartir lo haces tú.
- Puedes desconectar Gmail o Calendar cuando quieras en **Personalizar → Conectores**.
- Revisa la política de tu empresa antes de conectar una cuenta de trabajo.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **No ve tus correos**: vuelve a conectar Gmail y acepta todos los permisos.
- **Resúmenes demasiado largos**: añade a las instrucciones «máximo 10 líneas».

## Sigue con

- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:chef` · combina varias recetas en un proyecto propio
