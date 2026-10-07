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

Presupuesto, soporte, factura o spam, en milisegundos, y lo dudoso para ti.

- ⏱ 35 min
- 👩‍🍳 Media
- 📨 Mensajes
- 🍽 Resultado: tus mensajes clasificados automáticamente
- Versión web: https://amri.es/recetas/jev-decisiones--mensajes.html
- Ideas de ejemplo:
  - Formulario de contacto: clasificar los mensajes de mi formulario de contacto en: presupuesto, soporte, factura o spam

#### 1. Escribe los criterios
_10 min · tu conocimiento_

Jev decide comparando cada mensaje con la descripción de cada opción. Escríbelas como se las explicarías a una persona nueva.

```text
Quiero [la idea de la persona]. Ayúdame a escribir un criterio de una o dos frases para cada categoría, con lo que SÍ es y lo que NO es. Ejemplo: «soporte: el cliente tiene un problema con algo que ya ha comprado; no incluye preguntas de precio».
```

**✅ Comprobación:** tienes un criterio claro para cada categoría.

#### 2. Cocina el clasificador
_10 min · Claude Code_

En Claude Code, en tu carpeta con el archivo `.env`, pega:

```text
Usa la skill de TypeSafe. Crea un programa en Python que use una pregunta Choice de Jev con estas categorías y criterios: [pega tus criterios]. Lee la llave de TYPESAFE_API_KEY en .env. Crea ejemplos.csv con 20 mensajes realistas, incluidos algunos difíciles (un cliente enfadado que también pide factura, spam que parece presupuesto). Ejecútalo y guarda en resultados.csv: mensaje, categoría, probabilidades y confianza. Explícame cada paso antes de ejecutarlo.
```

**✅ Comprobación:** existe resultados.csv con una decisión por mensaje.

#### 3. Prueba y ajusta los criterios
_10 min · probar_

```text
Muéstrame resultados.csv ordenado de menor a mayor confianza. Para cada caso dudoso, explícame qué criterio lo confunde y propón cómo reescribirlo. No cambies el código, solo los criterios.
```

**✅ Comprobación:** estás de acuerdo con Jev en casi todos los casos con confianza alta.

#### 4. Lo dudoso, para ti
_5 min · umbral_

```text
Añade un umbral de confianza de 0,85: por encima, aplica la categoría; por debajo, guarda el mensaje en revisar.csv con la categoría propuesta. Dime qué porcentaje se decide solo.
```

> 💡 Empieza con un umbral alto y bájalo poco a poco cuando veas que acierta.

**✅ Comprobación:** los dudosos van a revisar.csv.

#### 5. Conéctalo a tu formulario
_10 min · servirlo_

```text
Convierte el clasificador en un Cloudflare Worker que reciba el mensaje del formulario por POST y devuelva la categoría, la confianza y si necesita revisión. Guarda la llave de Jev como secreto del Worker (wrangler secret put TYPESAFE_API_KEY), nunca en el código. Explícame cómo conectarlo a mi formulario.
```

**✅ Comprobación:** al enviar un mensaje de prueba desde tu formulario, recibes la categoría en menos de un segundo.

**Al terminar:** Tus mensajes llegan ya clasificados. Revisa revisar.csv cada día unos minutos.

### Receta 2: Prioriza incidencias

Urgente, normal o puede esperar, para atender primero lo que importa.

- ⏱ 35 min
- 👩‍🍳 Media
- 🚨 Incidencias
- 🍽 Resultado: incidencias ordenadas por prioridad
- Versión web: https://amri.es/recetas/jev-decisiones--urgencias.html
- Ideas de ejemplo:
  - Urgente, normal o espera: decidir si una incidencia de un cliente es urgente, normal o puede esperar

#### 1. Define qué es urgente
_10 min · tu criterio_

```text
Quiero [la idea de la persona]. Hazme preguntas para definir qué es urgente en mi negocio (dinero perdido, clientes bloqueados, datos en riesgo…) y escribe un criterio de dos frases para cada nivel, con ejemplos.
```

> 💡 Si todo es urgente, nada lo es. Que «urgente» sea de verdad excepcional.

**✅ Comprobación:** tienes los tres criterios.

#### 2. Cocina el priorizador
_10 min · Claude Code_

```text
Usa la skill de TypeSafe. Crea un programa en Python con una pregunta Choice de Jev con los niveles urgente, normal y puede esperar, y estos criterios: [pégalos]. Llave en TYPESAFE_API_KEY (.env). Crea ejemplos.csv con 20 incidencias realistas (algunas que parecen urgentes y no lo son). Guarda resultados.csv con nivel, probabilidades y confianza.
```

**✅ Comprobación:** existe resultados.csv.

#### 3. El error que no te puedes permitir
_10 min · probar_

Aquí el peor error es marcar como «puede esperar» algo urgente.

```text
Busca en resultados.csv incidencias urgentes que Jev haya puesto en otro nivel. Ajusta los criterios para que eso no pase, aunque marque alguna normal como urgente.
```

**✅ Comprobación:** ninguna incidencia urgente queda abajo.

#### 4. Lo dudoso, para ti
_5 min · umbral_

```text
Si la confianza es menor de 0,9 o si duda entre urgente y otro nivel, trátala como urgente y guárdala en revisar.csv.
```

**✅ Comprobación:** ante la duda, sube de prioridad.

#### 5. Avisa al equipo
_10 min · servirlo_

```text
Convierte el priorizador en un Cloudflare Worker (llave como secreto) y, cuando una incidencia sea urgente, envía un aviso a mi canal de Slack con un webhook guardado como secreto. Explícame cómo conectarlo.
```

**✅ Comprobación:** una incidencia urgente de prueba avisa en Slack.

**Al terminar:** Tus incidencias llegan ordenadas. Lo urgente, lo primero.

### Receta 3: Puntúa tus contactos

La probabilidad de que un contacto se convierta en cliente, de 0 a 10, para llamar primero a los mejores.

- ⏱ 35 min
- 👩‍🍳 Media
- 🎯 Contactos
- 🍽 Resultado: tus contactos ordenados por interés
- Versión web: https://amri.es/recetas/jev-decisiones--contactos.html
- Ideas de ejemplo:
  - Del formulario: puntuar de 0 a 10 la probabilidad de que un contacto del formulario se convierta en cliente

#### 1. Tu cliente ideal
_10 min · el criterio_

```text
Quiero [la idea de la persona]. Ayúdame a describir mi cliente ideal y las señales que suben o bajan la puntuación (tamaño, urgencia, presupuesto, cómo escribe). Hazlo en un criterio de 5 líneas.
```

**✅ Comprobación:** tienes el criterio de tu cliente ideal.

#### 2. Cocina el puntuador
_10 min · Claude Code_

```text
Usa la skill de TypeSafe. Crea un programa en Python con una pregunta Score de Jev (0 a 10) y este criterio: [pégalo]. Llave en TYPESAFE_API_KEY (.env). Usa contactos.csv (te paso uno sin datos personales, o inventa 20 realistas). Guarda resultados.csv ordenado de mayor a menor puntuación, con la confianza.
```

**✅ Comprobación:** tienes tus contactos ordenados.

#### 3. Compara con tu intuición
_10 min · probar_

Mira los 5 primeros y los 5 últimos. ¿Tú los ordenarías igual?

```text
Estos contactos los pondría yo más arriba: [cuáles]. Ajusta el criterio para reflejarlo, sin cambiar el código.
```

**✅ Comprobación:** el orden se parece al tuyo.

#### 4. Que se puntúen solos
_10 min · servirlo_

```text
Convierte el puntuador en un Cloudflare Worker (llave como secreto) que reciba cada contacto nuevo del formulario, lo puntúe y lo añada a mi hoja de Google Sheets con su puntuación. Explícame los pasos.
```

> 💡 ⚠️ La puntuación ayuda a ordenar, no a descartar a nadie. Contesta a todos.

**✅ Comprobación:** un contacto de prueba aparece en tu hoja con su puntuación.

**Al terminar:** Ya sabes a quién llamar primero.

### Receta 4: Lee tus reseñas

Positiva, negativa o mixta, y si necesita una respuesta tuya.

- ⏱ 30 min
- 👩‍🍳 Media
- ⭐ Reseñas
- 🍽 Resultado: tus reseñas clasificadas y las que necesitan respuesta
- Versión web: https://amri.es/recetas/jev-decisiones--resenas.html
- Ideas de ejemplo:
  - Reseñas de clientes: decidir si una reseña es positiva, negativa o mixta, y si necesita una respuesta mía

#### 1. Reúne tus reseñas
_5 min · los datos_

Copia tus últimas reseñas (texto y estrellas) en `resenas.csv`, sin nombres de clientes.

**✅ Comprobación:** tienes resenas.csv.

#### 2. Cocina el lector
_10 min · Claude Code_

```text
Usa la skill de TypeSafe. Quiero [la idea de la persona]. Crea un programa en Python con dos preguntas a Jev por reseña: una Choice (positiva, negativa, mixta) y una Noul («¿necesita una respuesta del dueño? Sí si hay una queja concreta, una pregunta o un malentendido»). Llave en TYPESAFE_API_KEY (.env). Lee resenas.csv y guarda resultados.csv con las dos decisiones y su confianza.
```

**✅ Comprobación:** existe resultados.csv.

#### 3. Revisa las mixtas
_10 min · probar_

```text
Muéstrame las reseñas mixtas y las que necesitan respuesta, de menor a mayor confianza. ¿Hay alguna mal clasificada? Propón cómo afinar las preguntas.
```

**✅ Comprobación:** estás de acuerdo con la clasificación.

#### 4. Respuestas con Claude
_5 min · responder_

```text
Para las reseñas que necesitan respuesta, escribe un borrador corto y amable para cada una, sin prometer nada que no pueda cumplir. No publiques nada.
```

**✅ Comprobación:** tienes borradores para revisar y publicar tú.

**Al terminar:** Ya sabes qué reseñas responder primero. Las respuestas, escríbelas tú (o con Claude) y revísalas.

### Receta 5: Modera comentarios

Si un comentario se publica directamente o lo revisas tú antes.

- ⏱ 30 min
- 👩‍🍳 Media
- 💬 Moderación
- 🍽 Resultado: comentarios moderados con tu supervisión
- Versión web: https://amri.es/recetas/jev-decisiones--comentarios.html
- Ideas de ejemplo:
  - Comentarios de mi web: decidir si un comentario de mi web se publica directamente o lo reviso yo antes

#### 1. Tus normas
_10 min · el criterio_

```text
Quiero [la idea de la persona]. Ayúdame a escribir mis normas de comentarios en 5 puntos (respeto, spam, enlaces, datos personales, temas fuera de lugar) y convierte la decisión en una pregunta de sí o no: «¿Se puede publicar sin revisar?».
```

**✅ Comprobación:** tienes tus normas y la pregunta.

#### 2. Cocina el moderador
_10 min · Claude Code_

```text
Usa la skill de TypeSafe. Crea un programa en Python con una pregunta Noul de Jev: «¿Se puede publicar sin revisar según estas normas? [pega tus normas]». Llave en TYPESAFE_API_KEY (.env). Crea comentarios.csv con 20 ejemplos (normales, críticos pero respetuosos, spam, insultos). Guarda resultados.csv con la decisión y la confianza.
```

> 💡 Una crítica respetuosa no es motivo para ocultar un comentario. Asegúrate de que tus normas lo dicen.

**✅ Comprobación:** existe resultados.csv.

#### 3. Prueba los dos errores
_10 min · probar_

```text
Muéstrame los comentarios que se publicarían y no deberían, y los que se frenarían siendo correctos. Ajusta las normas para corregir ambos.
```

**✅ Comprobación:** no se cuela spam ni se frenan críticas respetuosas.

#### 4. Conéctalo a tu web
_10 min · servirlo_

```text
Convierte el moderador en un Cloudflare Worker (llave como secreto) que reciba cada comentario nuevo y devuelva publicar o revisar. Si la confianza es baja, que siempre sea revisar. Explícame cómo conectarlo a mi web.
```

**✅ Comprobación:** un comentario de prueba queda publicado o en revisión según tus normas.

**Al terminar:** Tus comentarios se moderan solos y lo dudoso lo decides tú.

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
