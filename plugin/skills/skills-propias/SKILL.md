---
name: skills-propias
description: "Receta de AMRI «Enséñale tu método con Skills». Convierte tu forma de trabajar en Skills: informes con tu formato, correos con tu estilo, fichas de producto o material de clase. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Enséñale tu método con Skills

Convierte tu forma de trabajar en Skills: informes con tu formato, correos con tu estilo, fichas de producto o material de clase.

- 📕 4 recetas
- 💶 Gratis si tu plan de Claude incluye Skills
- 🍽 Resultado: Skills que Claude usa solo
- Categoría: Claude a tu medida
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/skills-propias.html

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

- **Claude**: el alumno aplicado.
- **Una Skill**: tu receta escrita. Una carpeta con un archivo **SKILL.md** que explica cómo hacer algo.
- **Tu ejemplo o plantilla**: el plato de muestra.
- **Ejecución de código activada**: la encimera. Las Skills la necesitan.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Entiende qué es una Skill
_la idea_

Una Skill es como una ficha de receta que Claude guarda en su cajón. No la usa siempre: la saca solo cuando la tarea encaja con su descripción.

- **Nombre**: cómo se llama.
- **Descripción**: cuándo usarla. Es lo más importante.
- **Instrucciones**: el paso a paso, ejemplos y plantillas.

**✅ Comprobación:** sabrías explicar a alguien qué es una Skill en una frase.

### 2. Activa las Skills
_ajustes_

- En Claude, abre los ajustes y busca **Capacidades** (_Capabilities_) o **Personalizar → Skills**.
- Activa la **ejecución de código** (_Code execution_) si te lo pide.
- Comprueba que aparece la sección de **Skills**.

> 💡 Según tu plan o tu empresa, algunas opciones pueden estar en otro sitio o desactivadas. Mira la ayuda de Claude si no lo ves.

**✅ Comprobación:** ves la sección de Skills.

## Recetas del libro

### Receta 1: Informes siempre con tu formato

Tu estructura, tu tono y tus gráficos, en cada informe, sin repetir instrucciones.

- 👩‍🍳 Media
- 📊 Informes
- 🍽 Resultado: una Skill de informes instalada
- Versión web: https://amri.es/recetas/skills-propias--informes.html
- Ideas de ejemplo:
  - Informe mensual: escribir informes mensuales siempre con la misma estructura, tono y gráficos

#### 1. Que Claude te entreviste
_tu método_

```text
Quiero crear una Skill para [la idea de la persona].

Entrevístame, de una en una, con estas preguntas y las que necesites: ¿para quién es el informe? ¿qué secciones lleva y en qué orden? ¿qué datos y de dónde salen? ¿qué gráficos uso? ¿qué tono y qué extensión? ¿qué errores no quiero ver nunca? Máximo 8 preguntas.
```

**✅ Comprobación:** has respondido a todas las preguntas.

#### 2. Dale un informe bueno
_el modelo_

- Adjunta un informe tuyo que te guste (sin datos confidenciales).

```text
Este es un informe que me gusta. Inclúyelo en la Skill como modelo de estructura y explica qué tiene de bueno.
```

**✅ Comprobación:** Claude ha entendido tu modelo.

#### 3. Que escriba la Skill
_el archivo_

```text
Escribe la Skill: una carpeta con SKILL.md (nombre corto, descripción que diga cuándo usarla y las instrucciones paso a paso) y una plantilla del informe en un archivo aparte. La descripción debe empezar por: «Úsala cuando haya que preparar el informe mensual…». Empaquétala en un .zip.
```

**✅ Comprobación:** tienes el .zip descargado.

#### 4. Instálala y pruébala sin nombrarla
_el examen_

- En la sección de Skills de los ajustes, pulsa **Subir Skill** y elige el .zip.
- En un chat nuevo, pide:

```text
Prepárame el informe de este mes con estos datos: [pega tus datos].
```

> 💡 Si no usa tu formato, mejora la descripción con las palabras exactas que usas al pedirlo.

**✅ Comprobación:** el informe sale con tu estructura sin que se lo recuerdes.

**Al terminar:** Claude ya hace tus informes a tu manera. Pídele uno sin nombrar la Skill y verás.

### Receta 2: Correos con tu estilo

Tu tono, tu firma y tus respuestas habituales, en cada correo a clientes.

- 👩‍🍳 Media
- ✉️ Correos
- 🍽 Resultado: una Skill de correos instalada
- Versión web: https://amri.es/recetas/skills-propias--correos.html
- Ideas de ejemplo:
  - Correos a clientes: responder correos de clientes con mi tono, mis firmas y mis respuestas habituales

#### 1. Que Claude te entreviste
_tu estilo_

```text
Quiero crear una Skill para [la idea de la persona].

Pregúntame, de una en una: ¿tuteo o usted? ¿cómo saludo y cómo me despido? ¿cuál es mi firma? ¿qué respondo siempre a las 5 preguntas más típicas? ¿qué palabras no uso nunca? ¿qué no debo prometer? Máximo 8 preguntas.
```

**✅ Comprobación:** has respondido a todo.

#### 2. Pega tres correos tuyos
_tu voz_

```text
Estos son tres correos que escribí yo y me gustan: [pégalos, sin datos de clientes]. Úsalos en la Skill como ejemplo de mi tono.
```

**✅ Comprobación:** Claude ha visto tus correos.

#### 3. Que escriba la Skill
_el archivo_

```text
Escribe la Skill: SKILL.md con nombre corto, una descripción que empiece por «Úsala cuando haya que responder a un cliente…», mis reglas de tono, mi firma y mis respuestas habituales en un archivo aparte. Empaquétala en un .zip.
```

**✅ Comprobación:** tienes el .zip.

#### 4. Instálala y pruébala
_el examen_

- Súbela en **Subir Skill**.
- En un chat nuevo, pega un correo real de un cliente (sin datos personales) y pide: «Respóndele».

**✅ Comprobación:** la respuesta suena a ti y lleva tu firma.

**Al terminar:** Tus correos ya suenan a ti sin explicárselo cada vez.

### Receta 3: Fichas de producto

Título, descripción, ventajas y medidas, siempre igual de completas.

- 👩‍🍳 Media
- 🏷 Tienda
- 🍽 Resultado: una Skill de fichas de producto instalada
- Versión web: https://amri.es/recetas/skills-propias--fichas.html
- Ideas de ejemplo:
  - Mi tienda: escribir fichas de producto para mi tienda con título, descripción, ventajas y medidas

#### 1. Que Claude te entreviste
_tu formato_

```text
Quiero crear una Skill para [la idea de la persona].

Pregúntame, de una en una: ¿qué secciones lleva cada ficha? ¿cuánto de largo el título y la descripción? ¿qué datos técnicos son obligatorios (medidas, material, cuidados)? ¿qué tono? ¿qué palabras usa mi cliente al buscar? ¿qué no debo afirmar nunca? Máximo 8 preguntas.
```

**✅ Comprobación:** has respondido a todo.

#### 2. Dale tu mejor ficha
_el modelo_

```text
Esta es la mejor ficha de mi tienda: [pégala]. Úsala como modelo en la Skill.
```

**✅ Comprobación:** Claude tiene tu modelo.

#### 3. Que escriba la Skill
_el archivo_

```text
Escribe la Skill: SKILL.md con descripción que empiece por «Úsala cuando haya que escribir la ficha de un producto…», las reglas y una plantilla. Que nunca invente medidas ni materiales: si falta un dato, que lo pregunte. Empaquétala en un .zip.
```

**✅ Comprobación:** tienes el .zip.

#### 4. Instálala y pruébala
_el examen_

- Súbela en **Subir Skill**.
- Pide: «Ficha para este producto: [datos y una foto]».

**✅ Comprobación:** la ficha sale completa, con tu formato y sin datos inventados.

**Al terminar:** Cada producto nuevo tendrá su ficha completa en un minuto.

### Receta 4: Material de clase

Fichas de ejercicios con nivel, objetivos y soluciones, siempre con tu estructura.

- 👩‍🍳 Media
- 🎓 Clases
- 🍽 Resultado: una Skill de material de clase instalada
- Versión web: https://amri.es/recetas/skills-propias--clases.html
- Ideas de ejemplo:
  - Fichas de ejercicios: preparar fichas de ejercicios para mis alumnos con nivel, objetivos y soluciones

#### 1. Que Claude te entreviste
_tu método_

```text
Quiero crear una Skill para [la idea de la persona]. Enseño [qué] a [quién].

Pregúntame, de una en una: ¿qué partes lleva cada ficha? ¿cómo ordeno los ejercicios por dificultad? ¿cómo escribo los objetivos? ¿cómo presento las soluciones? ¿qué adaptaciones hago para quien va más lento? Máximo 8 preguntas.
```

**✅ Comprobación:** has respondido a todo.

#### 2. Que escriba la Skill
_el archivo_

```text
Escribe la Skill: SKILL.md con descripción que empiece por «Úsala cuando haya que preparar una ficha de ejercicios…», la estructura, las reglas de dificultad y una plantilla. Empaquétala en un .zip.
```

**✅ Comprobación:** tienes el .zip.

#### 3. Instálala y pruébala
_el examen_

- Súbela en **Subir Skill**.
- Pide: «Prepárame una ficha sobre [tema] para la clase de mañana».
- Resuelve tú dos ejercicios para comprobar las soluciones.

**✅ Comprobación:** la ficha sigue tu estructura y las soluciones son correctas.

**Al terminar:** Ya tienes un ayudante que prepara material a tu manera.

## Al terminar

Las Skills están activadas. Elige qué método quieres enseñarle.

## Extras (opcionales, después de servir)

### Extra 1. Compártela con AMRI
_Opcional · código abierto_

Si tu Skill puede ayudar a otras personas, súmala a la plataforma: AMRI es abierta. Mándanos el .zip a [contact@amri.es](mailto:contact@amri.es) con una frase de para qué sirve. Si usas GitHub, también puedes abrir una propuesta en el repositorio.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **No se instala**: el .zip debe contener la carpeta con el SKILL.md dentro.
- **No se usa sola**: la descripción es demasiado vaga. Hazla más concreta.
- **Hace cosas raras**: pide a Claude que revise la Skill y la simplifique.

## Sigue con

- `/amri:primer-agente` · Tu primer agente: Claude trabaja por ti
- `/amri:conector-propio` · Cocina tu propio conector
- `/amri:chef` · combina varias recetas en un proyecto propio
