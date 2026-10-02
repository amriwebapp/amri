---
name: gmail-calendario
description: "Receta de AMRI «Tu secretaría: Gmail y Calendar». Cada mañana, Claude repasa tu correo y tu agenda, te dice qué importa y prepara los borradores. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu secretaría: Gmail y Calendar

Cada mañana, Claude repasa tu correo y tu agenda, te dice qué importa y prepara los borradores.

- ⏱ 25 min aprox.
- 👩‍🍳 Fácil
- 💶 0 € para empezar
- 🍽 Resultado: un resumen de tu día en 1 minuto
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «anon» de Supabase) sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes

- **Claude**: tu secretaría. Lee, resume y propone.
- **Gmail y Google Calendar**: tu correo y tu agenda.
- **Conectores de Gmail y Google Calendar**: el pase de acceso. Tú decides qué permisos das.
- **Un proyecto en Claude**: la libreta de instrucciones, para no repetirte.

## Ideas de ejemplo

- **Responder correos:** responder más rápido los correos que se repiten, con mi tono
- **Preparar reuniones:** llegar preparado a cada reunión: quién viene, de qué hablamos la última vez y qué decidir
- **Planificar la semana:** planificar mi semana: encontrar huecos, agrupar reuniones y proteger tiempo para concentrarme

## Antes de empezar

Pregunta a la persona: **¿Quieres que prepare borradores de respuesta?** Claude nunca debe enviar nada por ti en esta receta: solo prepara borradores que tú revisas.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_2 min · cuentas_

Necesitas tu cuenta de Google y tu cuenta de Claude.

- Entra en [Claude](https://claude.ai).
- Ten a mano tu usuario y contraseña de Google.

> 💡 Si usas una cuenta de trabajo, puede que tu empresa tenga que autorizar la conexión.

**✅ Comprobación:** puedes entrar en Claude y en Gmail.

### 2. Conecta Gmail y Calendar
_5 min · dos conectores_

Un conector es un permiso para que Claude use Gmail por ti. Se activa una vez y queda guardado.

#### Pasos

- En Claude (web o app de escritorio) abre **Personalizar → Conectores** (en inglés: _Customize → Connectors_).

- Pulsa **Explorar conectores** (_Browse connectors_), busca **«Gmail»** y pulsa **Conectar**.

- Se abre una ventana de Gmail: inicia sesión y pulsa **Permitir**.

- En un chat nuevo, pulsa el botón **+** → **Conectores** y comprueba que Gmail está activado.
Repite lo mismo buscando **«Google Calendar»**.

> 💡 Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la ayuda de Claude.

**✅ Comprobación:** Gmail y Google Calendar aparecen activados.

### 3. Crea «Mi secretaría»
_5 min · las reglas_

Un proyecto guarda tus reglas para siempre. Así no tienes que repetirlas.

- En Claude: **Proyectos → Crear proyecto**, llámalo **Mi secretaría**.
- En **Instrucciones**, pega:

```text
Eres mi secretaría. Tu objetivo: [la idea de la persona].

Reglas:
- Nunca envíes correos ni aceptes invitaciones: solo propones y preparas borradores.
- Sé breve: listas cortas, lo urgente primero.
- Si algo parece una estafa o pide datos bancarios, avísame.
- Escribe como yo: cercano, claro y educado.
```

**✅ Comprobación:** tienes el proyecto con sus instrucciones.

### 4. Tu primer resumen
_3 min · buenos días_

Abre un chat dentro del proyecto y pide tu resumen.

```text
Revisa mis correos de las últimas 24 horas y mi agenda de hoy. Dime:
1) Lo urgente (máximo 5).
2) Lo que puede esperar.
3) Mis reuniones de hoy y qué debería preparar para cada una.
```

**✅ Comprobación:** en un minuto sabes qué te espera hoy.

### 5. Borradores con tu tono _(solo si la respuesta a «Quieres que prepare borradores de respuesta» es «Sí»)_
_5 min · responder_

Claude escribe, tú revisas y envías.

```text
Prepara borradores de respuesta para los correos urgentes, con mi tono. No envíes nada. Si el conector permite crear borradores en Gmail, déjalos ahí; si no, escríbemelos aquí para copiarlos.
```

> 💡 Lee siempre cada borrador antes de enviarlo. Tú firmas, tú decides.

**✅ Comprobación:** tienes borradores listos para revisar.

### 6. Hazlo costumbre
_2 min · la rutina_

Guarda el mensaje del resumen en una nota y úsalo cada mañana dentro del proyecto.

> 💡 Si usas **Claude Cowork** en el escritorio, puedes convertirlo en una **tarea programada** que se ejecute sola cada mañana laborable.

**✅ Comprobación:** mañana repites y tardas menos de un minuto.

## Al terminar

Tu secretaría ya está en marcha. Cada mañana, un mensaje y sabes qué importa. Más abajo tienes extras sobre privacidad e ideas.

## Extras (opcionales, después de servir)

### Extra 1. Privacidad tranquila
_Siempre · consejos_

- Puedes **desconectar** Gmail o Calendar cuando quieras en Personalizar → Conectores.
- No pidas a Claude que reenvíe datos personales de otras personas.
- Revisa la política de tu empresa antes de conectar una cuenta de trabajo.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **No ve tus correos**: vuelve a conectar Gmail y acepta todos los permisos que pide.
- **Resúmenes demasiado largos**: añade a las instrucciones «máximo 10 líneas».

**💡 Ideas para seguir**

- Un resumen de los viernes con lo pendiente.
- Encontrar facturas y apuntarlas en una hoja.
- Proponer huecos para una reunión con 3 personas.

## Sigue con

- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:slack-equipo` · Claude en tu Slack
- `/amri:chef` · combina varias recetas en un proyecto propio
