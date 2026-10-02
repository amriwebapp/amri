---
name: slack-equipo
description: "Receta de AMRI «Claude en tu Slack». Resume canales, encuentra decisiones y redacta mensajes para tu equipo sin leer cien notificaciones. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Claude en tu Slack

Resume canales, encuentra decisiones y redacta mensajes para tu equipo sin leer cien notificaciones.

- ⏱ 25 min aprox.
- 👩‍🍳 Fácil
- 💶 0 € para empezar
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «anon» de Supabase) sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes

- **Claude**: el jefe de cocina. Lee, resume y redacta.
- **Slack**: la cocina del equipo. Donde pasa todo.
- **Conector de Slack**: el camarero. Busca mensajes, canales, hilos y canvases, y puede enviar mensajes.

## Ideas de ejemplo

- **Encontrar decisiones:** encontrar qué se decidió sobre un tema y quién lo decidió, con enlace a los mensajes
- **Redactar anuncios:** redactar y publicar un anuncio claro para el equipo en el canal adecuado
- **Canvas semanal:** crear cada viernes un canvas con el resumen de la semana, las decisiones y lo pendiente

## Antes de empezar

Pregunta a la persona: **¿Quieres que Claude pueda publicar mensajes (siempre con tu permiso)?** Si dudas, elige «No»: Claude solo leerá y resumirá. Siempre puedes activarlo después.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_3 min · cuentas_

Necesitas tu cuenta de Slack y tu cuenta de Claude.

- Entra en [Claude](https://claude.ai).
- Ten a mano el espacio de trabajo de Slack que quieres usar.

> 💡 En empresas, puede que un administrador de Slack tenga que aprobar la conexión. Si te sale un aviso, pídeselo con el enlace que te muestra Slack.

**✅ Comprobación:** puedes entrar en Claude y en tu Slack.

### 2. Conecta Slack con Claude
_3 min · el conector_

Un conector es un permiso para que Claude use Slack por ti. Se activa una vez y queda guardado.

#### Pasos

- En Claude (web o app de escritorio) abre **Personalizar → Conectores** (_Customize → Connectors_).

- Pulsa **Explorar conectores**, busca **«Slack»** y pulsa **Conectar**.

- Elige tu espacio de trabajo, revisa los permisos y pulsa **Permitir**.

- En un chat nuevo, pulsa **+** → **Conectores** y comprueba que Slack está activado.

**¿Qué puede ver Claude?**

- Solo lo que tu usuario ya puede ver en Slack.
- No ve canales privados ni mensajes directos a los que tú no tienes acceso.
- Puedes desconectarlo cuando quieras desde el mismo sitio.

**✅ Comprobación:** Slack aparece activado en tus conectores.

### 3. Tu primer resumen
_5 min · ponerse al día_

Empieza por algo que te ahorre tiempo hoy mismo.

```text
Usa el conector de Slack para esto: [la idea de la persona].

Mira los canales donde participo de los últimos 7 días. Dame:
1) Lo importante en 5 puntos.
2) Lo que me mencionan o me piden a mí.
3) Enlaces a los mensajes clave.
```

> 💡 Si tienes muchos canales, nómbralos: «solo #proyecto-web y #marketing».

**✅ Comprobación:** en un minuto sabes qué ha pasado sin leerlo todo.

### 4. Encuentra lo que se decidió
_5 min · buscar_

Slack es memoria del equipo, pero cuesta encontrar las cosas. Claude busca por ti.

```text
Busca en Slack qué se decidió sobre [tema]. Dime la decisión, quién la tomó, la fecha y el enlace al mensaje. Si hay opiniones distintas, resúmelas.
```

**✅ Comprobación:** tienes la decisión con su enlace para comprobarla.

### 5. Redacta y publica con permiso _(solo si la respuesta a «Quieres que Claude pueda publicar mensajes (siempre con tu permiso)» es «Sí»)_
_5 min · escribir_

Claude escribe el mensaje, tú lo apruebas y él lo publica.

```text
Redacta un mensaje para el equipo sobre [tema]: claro, amable y corto. Enséñamelo antes de enviarlo y dime en qué canal lo publicarías. No envíes nada hasta que yo diga «publícalo».
```

> 💡 La frase «no envíes nada hasta que yo diga…» es tu cinturón de seguridad. Úsala siempre.

**✅ Comprobación:** el mensaje aparece en el canal tal y como lo aprobaste.

### 6. Tu canvas de los viernes _(solo si la respuesta a «Quieres que Claude pueda publicar mensajes (siempre con tu permiso)» es «Sí»)_
_5 min · la rutina_

Un **canvas** es una página dentro de Slack. Ideal para dejar el resumen de la semana a todo el equipo.

```text
Crea un canvas en Slack llamado «Resumen semana [fecha]» con: decisiones de la semana, tareas pendientes con responsable y enlaces a los hilos importantes.
```

**✅ Comprobación:** el canvas está en Slack y el equipo puede leerlo.

## Al terminar

Claude ya lee tu Slack por ti. Un mensaje y sabes qué ha pasado, qué se decidió y qué te toca. Más abajo tienes extras: Claude dentro de Slack y reglas de privacidad.

## Extras (opcionales, después de servir)

### Extra 1. Claude dentro de Slack
_Opcional_

Además del conector, Claude tiene una app para Slack: puedes escribirle por mensaje directo o mencionarlo en un hilo. Búscala en el directorio de apps de Slack o en la ayuda de Claude. Puede que tu empresa tenga que aprobarla.

### Extra 2. Reglas de privacidad
_Siempre · consejos_

- No pidas a Claude que comparta fuera de Slack información confidencial del equipo.
- Revisa siempre los mensajes antes de publicarlos: firmas tú.
- Sigue las normas de tu empresa sobre IA y datos.

**💡 Ideas para seguir**

- Un resumen cada mañana de los canales de clientes.
- Preparar una reunión leyendo el hilo del proyecto.
- Pasar decisiones de Slack a tu Notion con el conector de Notion.

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:canva-diseno` · Diseña en Canva hablando con Claude
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:chef` · combina varias recetas en un proyecto propio
