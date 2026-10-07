---
name: gurusup-brain
description: "Receta de AMRI «El cerebro de tu empresa con GuruSup». Conecta GuruSup Brain a Claude para que responda con el conocimiento real de tu empresa, citando la fuente. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# El cerebro de tu empresa con GuruSup

Conecta GuruSup Brain a Claude para que responda con el conocimiento real de tu empresa, citando la fuente.

- ⏱ 30 min aprox.
- 👩‍🍳 Dificultad media
- 💶 GuruSup es de pago (pide demo)
- 🍽 Resultado: Claude responde con lo que sabe tu empresa
- Categoría: Para empresas (de pago)
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/gurusup-brain.html

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

- **Claude**: el jefe de cocina. Razona, redacta y responde.
- **GuruSup Brain**: la memoria de la empresa. Reúne el conocimiento de tus herramientas y de tu equipo.
- **Conector de GuruSup Brain**: el camarero. Lleva las preguntas de Claude al Brain y trae las respuestas.
- **Tus apps de empresa**: la despensa. Notion, Drive, Slack, HubSpot… lo que el Brain leerá.

## Ideas de ejemplo

- **Atención al cliente:** preparar respuestas a clientes usando nuestras condiciones, precios y casos resueltos
- **Onboarding:** crear una guía de bienvenida para una persona nueva con todo lo que necesita saber de la empresa
- **Propuestas de venta:** preparar propuestas comerciales con nuestros servicios, casos de éxito y precios actualizados

## Antes de empezar

Pregunta a la persona: **¿Tu empresa ya tiene información en otras apps (Notion, Drive, Slack, HubSpot…)?** Si dudas, elige «Sí»: te enseñamos a conectar esas fuentes al Brain para que Claude las use.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_5 min · cuentas_

Necesitas una cuenta de GuruSup con el Brain activado y tu cuenta de Claude.

- Entra en [GuruSup](https://gurusup.com). Si tu empresa aún no lo usa, pide una demo: es un servicio de pago para empresas.

- Entra en [Claude](https://claude.ai).

> 💡 GuruSup es una empresa española: la configuración y el soporte están en español.

**✅ Comprobación:** puedes entrar en GuruSup y en Claude.

### 2. Alimenta el Brain _(solo si la respuesta a «Tu empresa ya tiene información en otras apps (Notion, Drive, Slack, HubSpot…)» es «Sí»)_
_10 min · la despensa_

El Brain aprende de las herramientas que ya usa tu empresa. Cuanto mejor lo alimentes, mejores respuestas.

- En GuruSup, busca la sección de **integraciones** del Brain.

- Conecta las fuentes donde vive el conocimiento: Notion, Google Drive, Slack, tu CRM…

- Empieza por lo más útil: procesos, preguntas frecuentes, políticas y precios.

> 💡 Cuando al Brain le falta algo, pregunta a la persona que lo sabe y lo guarda. Así se completa con el uso.

**✅ Comprobación:** el Brain muestra tus fuentes conectadas.

### 3. Conecta el Brain con Claude
_3 min · conector personalizado_

GuruSup ofrece un conector (MCP) para su Brain. Se añade pegando una dirección.

#### Pasos

- En Claude abre **Personalizar → Conectores** (_Customize → Connectors_).

- Pulsa **+** → **Añadir conector personalizado**.

- Nombre: **GuruSup Brain**. Dirección (URL):

```text
https://mcp.brain.gurusup.com/mcp
```

- Pulsa **Añadir** y después **Conectar**. Inicia sesión con tu cuenta de GuruSup.

**¿Qué puede ver Claude?**

- Solo la información a la que tu usuario de GuruSup tiene permiso.
- Todo pasa en los servidores de GuruSup: no se instala nada en tu ordenador.
- Puedes desconectarlo cuando quieras.

**✅ Comprobación:** GuruSup Brain aparece activado en tus conectores.

### 4. Tu primera pregunta
_5 min · probar_

Haz una pregunta cuya respuesta conozcas. Así compruebas que responde con la versión buena.

```text
Consulta primero GuruSup Brain. Quiero [la idea de la persona].

Empieza por esta pregunta: [escribe una duda real]. Dime de qué fuente sale la respuesta y si falta información.
```

> 💡 Pide siempre la fuente. Si Claude no la da, desconfía y compruébalo.

**✅ Comprobación:** la respuesta coincide con lo que tú sabes y cita su fuente.

### 5. Hazlo costumbre con un proyecto
_5 min · las reglas_

Un proyecto de Claude guarda la regla de consultar el Brain siempre.

- En Claude: **Proyectos → Crear proyecto**, llámalo **Mi empresa**.
- En **Instrucciones**, pega:

```text
Antes de responder cualquier cosa sobre la empresa, consulta GuruSup Brain. Cita siempre la fuente. Si no está en el Brain, dilo claramente y no lo inventes. Responde breve y en el tono de la empresa.
```

**✅ Comprobación:** en los chats del proyecto, Claude consulta el Brain sin que se lo pidas.

### 6. Rellena los huecos
_5 min · mejorar_

Cada «no lo sé» es una oportunidad: la información que falta se añade una vez y sirve para siempre.

```text
Hazme una lista de las preguntas de hoy que el Brain no pudo responder bien, y dime qué persona o documento podría completarlas.
```

**✅ Comprobación:** tienes una lista de huecos y a quién preguntar.

## Al terminar

Claude ya consulta el cerebro de tu empresa antes de responder. Menos preguntas repetidas y respuestas con la versión buena de las cosas. Más abajo tienes extras: usarlo en Claude Code y cuidar los permisos.

## Extras (opcionales, después de servir)

### Extra 1. Úsalo en Claude Code
_Opcional · nivel pro_

Si tu equipo programa con Claude Code, GuruSup tiene un plugin que añade el conector y una Skill que le dice a Claude que consulte el Brain primero.

```text
/plugin marketplace add gurusup/gurusup-brain-plugin
/plugin install gurusup-brain@gurusup
```

> 💡 La primera consulta abrirá el navegador para iniciar sesión en GuruSup.

### Extra 2. Permisos y confianza
_Siempre · consejos_

- Revisa quién puede ver qué dentro de GuruSup: Claude respeta esos permisos.
- No conectes fuentes con datos personales sensibles si no hace falta.
- Lee la política de privacidad de GuruSup y las normas de tu empresa sobre IA.

**💡 Ideas para seguir**

- Un asistente de onboarding para cada puesto.
- Respuestas a clientes revisadas por una persona antes de enviarse.
- Documentar procesos que hoy solo están en la cabeza de alguien.

## Sigue con

- `/amri:jev-decisiones` · Decisiones automáticas con Jev
- `/amri:jev-guardian` · Un guardián para tu chatbot con Jev
- `/amri:chef` · combina varias recetas en un proyecto propio
