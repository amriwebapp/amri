---
name: gurusup-brain
description: "Receta de AMRI «El cerebro de tu empresa con GuruSup». Claude responde con el conocimiento real de tu empresa: dudas del equipo, clientes, guía de bienvenida y propuestas de venta. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# El cerebro de tu empresa con GuruSup

Claude responde con el conocimiento real de tu empresa: dudas del equipo, clientes, guía de bienvenida y propuestas de venta.

- 📕 4 recetas
- ⏱ 10-15 min cada una
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

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Prepara los ingredientes
_5 min · cuentas_

Necesitas una cuenta de GuruSup con el Brain activado y tu cuenta de Claude.

- Entra en [GuruSup](https://gurusup.com). Si tu empresa aún no lo usa, pide una demo: es un servicio de pago para empresas.

- Entra en [Claude](https://claude.ai).

> 💡 GuruSup es una empresa española: la configuración y el soporte están en español.

**✅ Comprobación:** puedes entrar en GuruSup y en Claude.

### 2. Alimenta el Brain
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

### 4. Hazlo costumbre con un proyecto
_5 min · las reglas_

Un proyecto de Claude guarda la regla de consultar el Brain siempre.

- En Claude: **Proyectos → Crear proyecto**, llámalo **Mi empresa**.
- En **Instrucciones**, pega:

```text
Antes de responder cualquier cosa sobre la empresa, consulta GuruSup Brain. Cita siempre la fuente. Si no está en el Brain, dilo claramente y no lo inventes. Responde breve y en el tono de la empresa.
```

**✅ Comprobación:** en los chats del proyecto, Claude consulta el Brain sin que se lo pidas.

## Recetas del libro

### Receta 1: Dudas del equipo

Procesos, políticas, herramientas y a quién preguntar, respondido con vuestros documentos y su fuente.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 👥 Equipo
- 🍽 Resultado: respuestas internas con su fuente y una lista de huecos
- Versión web: https://amri.es/recetas/gurusup-brain--equipo.html
- Ideas de ejemplo:
  - Dudas internas: responder las dudas internas del equipo: procesos, políticas, herramientas y a quién preguntar

#### 1. Una pregunta de control
_5 min · confianza_

Empieza por una duda cuya respuesta conozcas: así compruebas que el Brain responde con la versión buena.

```text
Consulta primero GuruSup Brain. Quiero [la idea de la persona]. Pregunta: [una duda cuya respuesta sepas]. Dime de qué documento sale la respuesta y de qué fecha es.
```

**✅ Comprobación:** la respuesta es correcta y cita su fuente.

#### 2. Las 10 dudas de siempre
_5 min · el día a día_

```text
Responde con GuruSup Brain estas dudas típicas del equipo, una por una, con su fuente: [pega tus dudas]. Si alguna no está documentada, dilo claramente.
```

**✅ Comprobación:** tienes las respuestas y sabes cuáles faltan.

#### 3. Rellena los huecos
_5 min · mejorar_

```text
Hazme una lista de las dudas que el Brain no pudo responder bien y dime qué persona o documento podría completarlas.
```

**✅ Comprobación:** tienes la lista de huecos y a quién preguntar.

**Al terminar:** Tu equipo tiene respuestas con fuente. Completa los huecos y cada semana responderá mejor.

### Receta 2: Respuestas a clientes

Borradores de respuesta basados en vuestras condiciones, precios y casos resueltos, sin prometer de más.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 💬 Clientes
- 🍽 Resultado: respuestas a clientes con fuente
- Versión web: https://amri.es/recetas/gurusup-brain--clientes.html
- Ideas de ejemplo:
  - Consultas de clientes: preparar respuestas a clientes usando nuestras condiciones, precios y casos resueltos

#### 1. El borrador con fuente
_5 min · responder_

```text
Consulta primero GuruSup Brain. Quiero [la idea de la persona]. El cliente pregunta: [pega la consulta, sin datos personales].

Escribe un borrador amable y corto. Debajo, la fuente de cada dato. Si algo no está en nuestra información, no lo prometas: di que lo consultamos.
```

**✅ Comprobación:** tienes el borrador con sus fuentes.

#### 2. Comprueba lo delicado
_5 min · con lupa_

Revisa a mano precios, plazos y condiciones: es lo que más problemas da si está desactualizado.

```text
¿Alguna de las fuentes que has usado podría estar desactualizada? Dime la fecha de cada una.
```

**✅ Comprobación:** los datos delicados están comprobados.

#### 3. Envíalo tú
_5 min · firmar_

- Ajusta el tono si hace falta y envíalo desde tu herramienta de soporte.
- Si la consulta era nueva, añádela al Brain para la próxima vez.

**✅ Comprobación:** la respuesta está enviada.

**Al terminar:** Tienes respuestas basadas en la información oficial. Revisa cada una antes de enviarla.

### Receta 3: Guía de bienvenida

Todo lo que necesita saber una persona nueva, sacado de vuestra documentación.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 👋 Onboarding
- 🍽 Resultado: una guía de bienvenida
- Versión web: https://amri.es/recetas/gurusup-brain--bienvenida.html
- Ideas de ejemplo:
  - Persona nueva: crear una guía de bienvenida para una persona nueva con todo lo que necesita saber de la empresa

#### 1. El índice
_5 min · estructura_

```text
Consulta primero GuruSup Brain. Quiero [la idea de la persona] para el puesto de [puesto]. Propón un índice: primer día, primera semana, primer mes, herramientas, normas y a quién preguntar cada cosa. Espera mi OK.
```

**✅ Comprobación:** has aprobado el índice.

#### 2. La guía
_5 min · contenido_

```text
Escribe la guía con ese índice usando solo nuestra documentación, con la fuente de cada sección. Marca con [FALTA] lo que no encuentres.
```

**✅ Comprobación:** tienes la guía, con los huecos marcados.

#### 3. Completa y comparte
_5 min · cerrar_

- Rellena los [FALTA] con quien corresponda.
- Comparte la guía con la persona nueva.

**✅ Comprobación:** la guía está completa y compartida.

**Al terminar:** La guía está lista. Pide a la persona nueva que te diga qué echó en falta.

### Receta 4: Propuestas de venta

Servicios, casos de éxito y precios actualizados en una propuesta para un cliente concreto.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 📈 Ventas
- 🍽 Resultado: una propuesta comercial
- Versión web: https://amri.es/recetas/gurusup-brain--propuestas.html
- Ideas de ejemplo:
  - Un cliente concreto: preparar una propuesta comercial con nuestros servicios, casos de éxito y precios actualizados

#### 1. Entiende al cliente
_5 min · contexto_

```text
Consulta primero GuruSup Brain. Quiero [la idea de la persona]. El cliente: [descripción]. ¿Qué servicios nuestros encajan y qué casos de éxito parecidos tenemos? Con fuente.
```

**✅ Comprobación:** sabes qué ofrecer y con qué casos.

#### 2. La propuesta
_5 min · escribirla_

```text
Escribe la propuesta: su problema, nuestra solución, un caso parecido, precio y siguientes pasos. Usa solo precios de nuestra documentación y di de qué fecha son.
```

**✅ Comprobación:** tienes la propuesta.

#### 3. Revisa precios y envía
_5 min · con lupa_

Comprueba con la persona responsable que los precios están vigentes antes de enviarla.

**✅ Comprobación:** la propuesta está revisada.

**Al terminar:** Tu propuesta está lista. Revisa los precios antes de enviarla.

## Al terminar

El Brain está conectado. Elige para qué lo quieres usar.

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
