---
name: jev-decisiones
description: "Receta de AMRI «Decisiones automáticas con Jev». Clasifica mensajes, prioriza incidencias, puntúa contactos, lee reseñas o modera comentarios. Jev decide y te pasa lo dudoso. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Decisiones automáticas con Jev

Clasifica mensajes, prioriza incidencias, puntúa contactos, lee reseñas o modera comentarios. Jev decide y te pasa lo dudoso.

- 📕 5 recetas
- ⏱ 30-40 min cada una
- 💶 Jev es de pago por uso y está en acceso anticipado
- 🍽 Resultado: decisiones automáticas con una persona al mando
- Categoría: Para empresas (de pago)
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/jev-decisiones.html

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

- **Jev**, de TypeSafe AI: el catador. Mira un texto y decide en milisegundos, diciendo cuánta seguridad tiene.
- **Claude Code**: el jefe de cocina. Escribe y ejecuta el código por ti en tu ordenador.
- **La skill de TypeSafe**: el manual de Jev para Claude Code, gratis.
- **Unos ejemplos reales**: 20 o 30 casos como los que quieres clasificar (sin datos personales).
- **Cloudflare** (gratis): para poner tu clasificador en internet.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Conoce el ingrediente: qué es Jev
_5 min · entenderlo_

**Jev** es el primer modelo «System One» de TypeSafe AI. No escribe textos ni charla: **decide**. Le das un texto y unas preguntas, y en 70–500 milisegundos te devuelve una respuesta con su **probabilidad** y su **confianza**.

**Las tres preguntas que sabe responder**

- **Choice** (elegir): ¿cuál de estas opciones? Por ejemplo, presupuesto, soporte o factura.
- **Score** (puntuar): ¿cuánto, en una escala? Por ejemplo, de 0 a 10.
- **Noul** (sí o no): ¿se cumple esto? Por ejemplo, «el mensaje es urgente».

**¿Por qué no usar Claude para esto?**

- Claude piensa y escribe: es ideal para responder, redactar o razonar.
- Jev decide rápido y barato, y te dice cuánta seguridad tiene. Es ideal para miles de decisiones pequeñas.
- Juntos: Jev reparte el trabajo y Claude se encarga de lo que necesita pensar.

> 💡 Piensa en Jev como el catador de la cocina: prueba y dice «sí» o «no» al momento. El chef sigue siendo Claude.

**✅ Comprobación:** sabes explicar con tus palabras si tu decisión es elegir, puntuar o sí/no.

### 2. Consigue tu llave
_5 min · acceso anticipado_

Jev está en **acceso anticipado** desde septiembre de 2026: puede que tengas que apuntarte a la lista de espera.

#### Pasos

- Entra en [typesafe.ai](https://typesafe.ai) y pide acceso.

- Cuando lo tengas, ve a [console.typesafe.ai/keys](https://console.typesafe.ai/keys) y crea una **API key** (tu llave).

- Cópiala y guárdala de momento en un lugar seguro, como tu gestor de contraseñas.

**¿Cuánto cuesta?**

- Pagas por el texto que le envías: unos **0,042 $ por millón de tokens**. Las respuestas no se cobran.
- Ejemplo: 1.000 mensajes de 500 palabras son unos 650.000 tokens, menos de 3 céntimos.
- No se menciona un plan gratuito. Revisa el precio actual en su web antes de empezar.

> 💡 Una API key es como la llave de tu casa: quien la tenga puede gastar a tu nombre. Nunca la pegues en un chat, en un correo ni en GitHub.

**✅ Comprobación:** tienes tu API key guardada en un lugar seguro.

### 3. Prepara la cocina
_5 min · carpeta y llave_

Vas a crear una carpeta para el proyecto y guardar la llave en un archivo que nunca se sube a internet.

#### Pasos

- Crea una carpeta llamada `mi-jev` y ábrela en **Claude Code**.

- Pega esto:

```text
Crea en esta carpeta un archivo .env con la línea TYPESAFE_API_KEY= (vacía) y un .gitignore que excluya .env. No me pidas la llave: la pegaré yo a mano.
```

- Abre `.env` con un editor de texto, pega tu llave después del `=` y guarda.

> 💡 El punto delante de .env hace que el archivo esté oculto. En Mac, pulsa Cmd + Mayús + . en el Finder para verlo.

**✅ Comprobación:** el archivo .env tiene tu llave y .gitignore lo excluye.

### 4. Dale a Claude Code el manual de Jev
_2 min · la skill de TypeSafe_

TypeSafe publica una **skill** gratuita: un manual que enseña a Claude Code a usar Jev correctamente. Así no tiene que adivinar.

- En Claude Code, pega:

```text
/plugin marketplace add typesafe-ai/skills
```

```text
/plugin install typesafe@typesafe-ai
```

- Reinicia Claude Code si te lo pide.

> 💡 Si prefieres la terminal: claude plugin marketplace add typesafe-ai/skills y después claude plugin install typesafe@typesafe-ai.

**✅ Comprobación:** al escribir /plugin ves «typesafe» entre tus plugins instalados.

## Recetas del libro

### Receta 1: Clasifica los mensajes de tu formulario

Presupuesto, soporte, factura o spam, en milisegundos.

- ⏱ 35 min
- 👩‍🍳 Media
- 📨 Mensajes
- 🍽 Resultado: tus mensajes clasificados
- Versión web: https://amri.es/recetas/jev-decisiones--mensajes.html
- Ideas de ejemplo:
  - Clasificar mensajes: clasificar los mensajes de mi formulario de contacto en: presupuesto, soporte, factura o spam

#### 1. Cocina tu clasificador
_10 min · el plato principal_

Ahora Claude Code escribe un pequeño programa que envía cada caso a Jev y guarda su decisión.

```text
Usa la skill de TypeSafe. Quiero un pequeño programa en Python que use Jev para [la idea de la persona].

- Lee la llave de TYPESAFE_API_KEY desde .env.
- Elige la pregunta adecuada (Choice, Score o Noul) y explícame por qué.
- Escribe criterios claros para cada opción, como se los explicarías a una persona nueva.
- Crea ejemplos.csv con 20 casos inventados pero realistas, incluidos algunos difíciles.
- Ejecútalo y guarda en resultados.csv: el caso, la decisión, las probabilidades y la confianza.

Explícame cada paso antes de ejecutarlo.
```

**¿Qué son los «criterios»?**

- Son las descripciones de cada opción. Jev decide comparando el texto con ellas.
- Ejemplo: «soporte: el cliente tiene un problema técnico con algo que ya ha comprado».
- Unos criterios claros importan más que el código: es donde está tu conocimiento.

**✅ Comprobación:** existe resultados.csv con una decisión y una confianza para cada ejemplo.

#### 2. Prueba y lee la confianza
_10 min · probar antes de servir_

Antes de fiarte, compara lo que decide Jev con lo que decidirías tú.

```text
Muéstrame resultados.csv como tabla, ordenada de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribir los criterios. No cambies el código, solo los criterios.
```

- Marca los casos en los que no estás de acuerdo.
- Pide a Claude Code que ajuste los criterios y vuelva a ejecutarlo.
- Añade a `ejemplos.csv` casos reales (sin nombres ni datos personales).

> 💡 Fíjate en la confianza: una decisión correcta con poca confianza te dice que los criterios aún no están claros.

**✅ Comprobación:** estás de acuerdo con Jev en casi todos los casos con confianza alta.

#### 3. Si duda, que te pregunte
_5 min · una persona al mando_

El truco profesional: Jev decide solo cuando está seguro y te pasa a ti los casos dudosos. Así automatizas la mayoría sin arriesgarte con el resto.

```text
Añade un umbral de confianza de 0,8. Si la confianza es mayor, aplica la decisión. Si es menor, guarda el caso en revisar.csv con la decisión propuesta para que yo lo revise. Al final, dime qué porcentaje se ha decidido solo y cuántos quedan para mí.
```

> 💡 Empieza con un umbral alto (0,9) y bájalo poco a poco cuando veas que acierta. Mejor revisar de más al principio.

**✅ Comprobación:** los casos dudosos llegan a revisar.csv y el resto se decide solo.

#### 4. Conéctalo a tu web o tus apps
_10 min · servirlo_

Convierte el clasificador en un servicio en internet al que tu formulario o tus apps envían cada mensaje nuevo.

```text
Convierte el clasificador en un Cloudflare Worker que reciba un texto por POST y devuelva la decisión, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Añade una clave propia para que solo mi web pueda llamarlo y explícame cómo conectarlo a mi formulario.
```

> 💡 ¿Quieres un aviso cuando algo necesite revisión? Con la receta «Claude en tu Slack» puedes enviar los casos dudosos a un canal.

**✅ Comprobación:** al enviar un mensaje de prueba desde tu formulario, recibes la decisión en menos de un segundo.

**Al terminar:** Ya tienes un clasificador con Jev que decide en milisegundos, te dice cuánta confianza tiene y te pasa a ti los casos dudosos. Revísalo cada mes con casos nuevos: tus criterios mejoran con el uso.

### Receta 2: Prioriza incidencias

Urgente, normal o puede esperar, para atender primero lo importante.

- ⏱ 35 min
- 👩‍🍳 Media
- 🚨 Incidencias
- 🍽 Resultado: incidencias ordenadas por prioridad
- Versión web: https://amri.es/recetas/jev-decisiones--urgencias.html
- Ideas de ejemplo:
  - Prioridad de incidencias: decidir si una incidencia de un cliente es urgente, normal o puede esperar

#### 1. Cocina tu clasificador
_10 min · el plato principal_

Ahora Claude Code escribe un pequeño programa que envía cada caso a Jev y guarda su decisión.

```text
Usa la skill de TypeSafe. Quiero un pequeño programa en Python que use Jev para [la idea de la persona].

- Lee la llave de TYPESAFE_API_KEY desde .env.
- Elige la pregunta adecuada (Choice, Score o Noul) y explícame por qué.
- Escribe criterios claros para cada opción, como se los explicarías a una persona nueva.
- Crea ejemplos.csv con 20 casos inventados pero realistas, incluidos algunos difíciles.
- Ejecútalo y guarda en resultados.csv: el caso, la decisión, las probabilidades y la confianza.

Explícame cada paso antes de ejecutarlo.
```

**¿Qué son los «criterios»?**

- Son las descripciones de cada opción. Jev decide comparando el texto con ellas.
- Ejemplo: «soporte: el cliente tiene un problema técnico con algo que ya ha comprado».
- Unos criterios claros importan más que el código: es donde está tu conocimiento.

**✅ Comprobación:** existe resultados.csv con una decisión y una confianza para cada ejemplo.

#### 2. Prueba y lee la confianza
_10 min · probar antes de servir_

Antes de fiarte, compara lo que decide Jev con lo que decidirías tú.

```text
Muéstrame resultados.csv como tabla, ordenada de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribir los criterios. No cambies el código, solo los criterios.
```

- Marca los casos en los que no estás de acuerdo.
- Pide a Claude Code que ajuste los criterios y vuelva a ejecutarlo.
- Añade a `ejemplos.csv` casos reales (sin nombres ni datos personales).

> 💡 Fíjate en la confianza: una decisión correcta con poca confianza te dice que los criterios aún no están claros.

**✅ Comprobación:** estás de acuerdo con Jev en casi todos los casos con confianza alta.

#### 3. Si duda, que te pregunte
_5 min · una persona al mando_

El truco profesional: Jev decide solo cuando está seguro y te pasa a ti los casos dudosos. Así automatizas la mayoría sin arriesgarte con el resto.

```text
Añade un umbral de confianza de 0,8. Si la confianza es mayor, aplica la decisión. Si es menor, guarda el caso en revisar.csv con la decisión propuesta para que yo lo revise. Al final, dime qué porcentaje se ha decidido solo y cuántos quedan para mí.
```

> 💡 Empieza con un umbral alto (0,9) y bájalo poco a poco cuando veas que acierta. Mejor revisar de más al principio.

**✅ Comprobación:** los casos dudosos llegan a revisar.csv y el resto se decide solo.

#### 4. Conéctalo a tu web o tus apps
_10 min · servirlo_

Convierte el clasificador en un servicio en internet al que tu formulario o tus apps envían cada mensaje nuevo.

```text
Convierte el clasificador en un Cloudflare Worker que reciba un texto por POST y devuelva la decisión, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Añade una clave propia para que solo mi web pueda llamarlo y explícame cómo conectarlo a mi formulario.
```

> 💡 ¿Quieres un aviso cuando algo necesite revisión? Con la receta «Claude en tu Slack» puedes enviar los casos dudosos a un canal.

**✅ Comprobación:** al enviar un mensaje de prueba desde tu formulario, recibes la decisión en menos de un segundo.

**Al terminar:** Ya tienes un clasificador con Jev que decide en milisegundos, te dice cuánta confianza tiene y te pasa a ti los casos dudosos. Revísalo cada mes con casos nuevos: tus criterios mejoran con el uso.

### Receta 3: Puntúa tus contactos

La probabilidad de que un contacto se convierta en cliente, de 0 a 10.

- ⏱ 35 min
- 👩‍🍳 Media
- 🎯 Contactos
- 🍽 Resultado: tus contactos puntuados
- Versión web: https://amri.es/recetas/jev-decisiones--contactos.html
- Ideas de ejemplo:
  - Puntuar contactos: puntuar de 0 a 10 la probabilidad de que un contacto del formulario se convierta en cliente

#### 1. Cocina tu clasificador
_10 min · el plato principal_

Ahora Claude Code escribe un pequeño programa que envía cada caso a Jev y guarda su decisión.

```text
Usa la skill de TypeSafe. Quiero un pequeño programa en Python que use Jev para [la idea de la persona].

- Lee la llave de TYPESAFE_API_KEY desde .env.
- Elige la pregunta adecuada (Choice, Score o Noul) y explícame por qué.
- Escribe criterios claros para cada opción, como se los explicarías a una persona nueva.
- Crea ejemplos.csv con 20 casos inventados pero realistas, incluidos algunos difíciles.
- Ejecútalo y guarda en resultados.csv: el caso, la decisión, las probabilidades y la confianza.

Explícame cada paso antes de ejecutarlo.
```

**¿Qué son los «criterios»?**

- Son las descripciones de cada opción. Jev decide comparando el texto con ellas.
- Ejemplo: «soporte: el cliente tiene un problema técnico con algo que ya ha comprado».
- Unos criterios claros importan más que el código: es donde está tu conocimiento.

**✅ Comprobación:** existe resultados.csv con una decisión y una confianza para cada ejemplo.

#### 2. Prueba y lee la confianza
_10 min · probar antes de servir_

Antes de fiarte, compara lo que decide Jev con lo que decidirías tú.

```text
Muéstrame resultados.csv como tabla, ordenada de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribir los criterios. No cambies el código, solo los criterios.
```

- Marca los casos en los que no estás de acuerdo.
- Pide a Claude Code que ajuste los criterios y vuelva a ejecutarlo.
- Añade a `ejemplos.csv` casos reales (sin nombres ni datos personales).

> 💡 Fíjate en la confianza: una decisión correcta con poca confianza te dice que los criterios aún no están claros.

**✅ Comprobación:** estás de acuerdo con Jev en casi todos los casos con confianza alta.

#### 3. Si duda, que te pregunte
_5 min · una persona al mando_

El truco profesional: Jev decide solo cuando está seguro y te pasa a ti los casos dudosos. Así automatizas la mayoría sin arriesgarte con el resto.

```text
Añade un umbral de confianza de 0,8. Si la confianza es mayor, aplica la decisión. Si es menor, guarda el caso en revisar.csv con la decisión propuesta para que yo lo revise. Al final, dime qué porcentaje se ha decidido solo y cuántos quedan para mí.
```

> 💡 Empieza con un umbral alto (0,9) y bájalo poco a poco cuando veas que acierta. Mejor revisar de más al principio.

**✅ Comprobación:** los casos dudosos llegan a revisar.csv y el resto se decide solo.

#### 4. Conéctalo a tu web o tus apps
_10 min · servirlo_

Convierte el clasificador en un servicio en internet al que tu formulario o tus apps envían cada mensaje nuevo.

```text
Convierte el clasificador en un Cloudflare Worker que reciba un texto por POST y devuelva la decisión, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Añade una clave propia para que solo mi web pueda llamarlo y explícame cómo conectarlo a mi formulario.
```

> 💡 ¿Quieres un aviso cuando algo necesite revisión? Con la receta «Claude en tu Slack» puedes enviar los casos dudosos a un canal.

**✅ Comprobación:** al enviar un mensaje de prueba desde tu formulario, recibes la decisión en menos de un segundo.

**Al terminar:** Ya tienes un clasificador con Jev que decide en milisegundos, te dice cuánta confianza tiene y te pasa a ti los casos dudosos. Revísalo cada mes con casos nuevos: tus criterios mejoran con el uso.

### Receta 4: Lee tus reseñas

Positiva, negativa o mixta, y si necesita una respuesta tuya.

- ⏱ 30 min
- 👩‍🍳 Media
- ⭐ Reseñas
- 🍽 Resultado: tus reseñas clasificadas
- Versión web: https://amri.es/recetas/jev-decisiones--resenas.html
- Ideas de ejemplo:
  - Reseñas: decidir si una reseña es positiva, negativa o mixta, y si necesita una respuesta mía

#### 1. Cocina tu clasificador
_10 min · el plato principal_

Ahora Claude Code escribe un pequeño programa que envía cada caso a Jev y guarda su decisión.

```text
Usa la skill de TypeSafe. Quiero un pequeño programa en Python que use Jev para [la idea de la persona].

- Lee la llave de TYPESAFE_API_KEY desde .env.
- Elige la pregunta adecuada (Choice, Score o Noul) y explícame por qué.
- Escribe criterios claros para cada opción, como se los explicarías a una persona nueva.
- Crea ejemplos.csv con 20 casos inventados pero realistas, incluidos algunos difíciles.
- Ejecútalo y guarda en resultados.csv: el caso, la decisión, las probabilidades y la confianza.

Explícame cada paso antes de ejecutarlo.
```

**¿Qué son los «criterios»?**

- Son las descripciones de cada opción. Jev decide comparando el texto con ellas.
- Ejemplo: «soporte: el cliente tiene un problema técnico con algo que ya ha comprado».
- Unos criterios claros importan más que el código: es donde está tu conocimiento.

**✅ Comprobación:** existe resultados.csv con una decisión y una confianza para cada ejemplo.

#### 2. Prueba y lee la confianza
_10 min · probar antes de servir_

Antes de fiarte, compara lo que decide Jev con lo que decidirías tú.

```text
Muéstrame resultados.csv como tabla, ordenada de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribir los criterios. No cambies el código, solo los criterios.
```

- Marca los casos en los que no estás de acuerdo.
- Pide a Claude Code que ajuste los criterios y vuelva a ejecutarlo.
- Añade a `ejemplos.csv` casos reales (sin nombres ni datos personales).

> 💡 Fíjate en la confianza: una decisión correcta con poca confianza te dice que los criterios aún no están claros.

**✅ Comprobación:** estás de acuerdo con Jev en casi todos los casos con confianza alta.

#### 3. Si duda, que te pregunte
_5 min · una persona al mando_

El truco profesional: Jev decide solo cuando está seguro y te pasa a ti los casos dudosos. Así automatizas la mayoría sin arriesgarte con el resto.

```text
Añade un umbral de confianza de 0,8. Si la confianza es mayor, aplica la decisión. Si es menor, guarda el caso en revisar.csv con la decisión propuesta para que yo lo revise. Al final, dime qué porcentaje se ha decidido solo y cuántos quedan para mí.
```

> 💡 Empieza con un umbral alto (0,9) y bájalo poco a poco cuando veas que acierta. Mejor revisar de más al principio.

**✅ Comprobación:** los casos dudosos llegan a revisar.csv y el resto se decide solo.

#### 4. Conéctalo a tu web o tus apps
_10 min · servirlo_

Convierte el clasificador en un servicio en internet al que tu formulario o tus apps envían cada mensaje nuevo.

```text
Convierte el clasificador en un Cloudflare Worker que reciba un texto por POST y devuelva la decisión, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Añade una clave propia para que solo mi web pueda llamarlo y explícame cómo conectarlo a mi formulario.
```

> 💡 ¿Quieres un aviso cuando algo necesite revisión? Con la receta «Claude en tu Slack» puedes enviar los casos dudosos a un canal.

**✅ Comprobación:** al enviar un mensaje de prueba desde tu formulario, recibes la decisión en menos de un segundo.

**Al terminar:** Ya tienes un clasificador con Jev que decide en milisegundos, te dice cuánta confianza tiene y te pasa a ti los casos dudosos. Revísalo cada mes con casos nuevos: tus criterios mejoran con el uso.

### Receta 5: Modera comentarios

Si un comentario se publica directamente o lo revisas tú antes.

- ⏱ 30 min
- 👩‍🍳 Media
- 💬 Moderación
- 🍽 Resultado: comentarios moderados con tu supervisión
- Versión web: https://amri.es/recetas/jev-decisiones--comentarios.html
- Ideas de ejemplo:
  - Moderar comentarios: decidir si un comentario de mi web se publica directamente o lo reviso yo antes

#### 1. Cocina tu clasificador
_10 min · el plato principal_

Ahora Claude Code escribe un pequeño programa que envía cada caso a Jev y guarda su decisión.

```text
Usa la skill de TypeSafe. Quiero un pequeño programa en Python que use Jev para [la idea de la persona].

- Lee la llave de TYPESAFE_API_KEY desde .env.
- Elige la pregunta adecuada (Choice, Score o Noul) y explícame por qué.
- Escribe criterios claros para cada opción, como se los explicarías a una persona nueva.
- Crea ejemplos.csv con 20 casos inventados pero realistas, incluidos algunos difíciles.
- Ejecútalo y guarda en resultados.csv: el caso, la decisión, las probabilidades y la confianza.

Explícame cada paso antes de ejecutarlo.
```

**¿Qué son los «criterios»?**

- Son las descripciones de cada opción. Jev decide comparando el texto con ellas.
- Ejemplo: «soporte: el cliente tiene un problema técnico con algo que ya ha comprado».
- Unos criterios claros importan más que el código: es donde está tu conocimiento.

**✅ Comprobación:** existe resultados.csv con una decisión y una confianza para cada ejemplo.

#### 2. Prueba y lee la confianza
_10 min · probar antes de servir_

Antes de fiarte, compara lo que decide Jev con lo que decidirías tú.

```text
Muéstrame resultados.csv como tabla, ordenada de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribir los criterios. No cambies el código, solo los criterios.
```

- Marca los casos en los que no estás de acuerdo.
- Pide a Claude Code que ajuste los criterios y vuelva a ejecutarlo.
- Añade a `ejemplos.csv` casos reales (sin nombres ni datos personales).

> 💡 Fíjate en la confianza: una decisión correcta con poca confianza te dice que los criterios aún no están claros.

**✅ Comprobación:** estás de acuerdo con Jev en casi todos los casos con confianza alta.

#### 3. Si duda, que te pregunte
_5 min · una persona al mando_

El truco profesional: Jev decide solo cuando está seguro y te pasa a ti los casos dudosos. Así automatizas la mayoría sin arriesgarte con el resto.

```text
Añade un umbral de confianza de 0,8. Si la confianza es mayor, aplica la decisión. Si es menor, guarda el caso en revisar.csv con la decisión propuesta para que yo lo revise. Al final, dime qué porcentaje se ha decidido solo y cuántos quedan para mí.
```

> 💡 Empieza con un umbral alto (0,9) y bájalo poco a poco cuando veas que acierta. Mejor revisar de más al principio.

**✅ Comprobación:** los casos dudosos llegan a revisar.csv y el resto se decide solo.

#### 4. Conéctalo a tu web o tus apps
_10 min · servirlo_

Convierte el clasificador en un servicio en internet al que tu formulario o tus apps envían cada mensaje nuevo.

```text
Convierte el clasificador en un Cloudflare Worker que reciba un texto por POST y devuelva la decisión, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Añade una clave propia para que solo mi web pueda llamarlo y explícame cómo conectarlo a mi formulario.
```

> 💡 ¿Quieres un aviso cuando algo necesite revisión? Con la receta «Claude en tu Slack» puedes enviar los casos dudosos a un canal.

**✅ Comprobación:** al enviar un mensaje de prueba desde tu formulario, recibes la decisión en menos de un segundo.

**Al terminar:** Ya tienes un clasificador con Jev que decide en milisegundos, te dice cuánta confianza tiene y te pasa a ti los casos dudosos. Revísalo cada mes con casos nuevos: tus criterios mejoran con el uso.

## Al terminar

Tu cocina está lista. Elige qué quieres que Jev decida.

## Extras (opcionales, después de servir)

### Extra 1. Jev y Claude, el mejor equipo
_Opcional · ahorrar y responder mejor_

Un patrón muy útil: Jev clasifica cada mensaje al instante y solo los que necesitan pensar llegan a Claude, que redacta la respuesta.

```text
Amplía el programa: si Jev decide que el mensaje es [tipo], pásalo a Claude con mis instrucciones para que redacte un borrador de respuesta. Los demás, solo clasifícalos. Guarda los borradores para que yo los revise antes de enviarlos.
```

### Extra 2. Úsalo con responsabilidad
_Siempre · consejos_

Decidir rápido no es lo mismo que decidir bien. Unas reglas sencillas:

- **Decisiones que afectan a personas** (contratar, conceder un préstamo, sancionar): siempre con revisión humana.

- **Datos personales**: envía solo lo necesario y cumple la protección de datos (RGPD en Europa).

- **Guarda un registro** de las decisiones para poder revisarlas y corregirlas.

- **Sé transparente**: si un sistema automático decide algo, dilo.

## Sigue con

- `/amri:gurusup-brain` · El cerebro de tu empresa con GuruSup
- `/amri:jev-guardian` · Un guardián para tu chatbot con Jev
- `/amri:chef` · combina varias recetas en un proyecto propio
