---
name: asistente-ia
description: "Receta de AMRI «Tu asistente personal con IA». Un asistente que te conoce: correos difíciles, documentos largos, estudiar, organizar tu semana, responder a clientes y tus atajos. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu asistente personal con IA

Un asistente que te conoce: correos difíciles, documentos largos, estudiar, organizar tu semana, responder a clientes y tus atajos.

- 📕 6 recetas
- ⏱ 10-20 min cada una
- 💶 Gratis
- 🍽 Resultado: un ayudante que te conoce
- Categoría: Primeros pasos
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/asistente-ia.html

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

## Ingredientes (todos gratuitos)

- **Claude**: tu asistente.
- **Un proyecto de Claude**: el cuaderno donde guarda sus instrucciones para siempre.
- **Una nota en tu móvil**: para guardar tus mensajes favoritos.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 6 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Que Claude te entreviste
_10 min · tu ficha_

En vez de escribir tú las instrucciones, deja que Claude te haga preguntas y las escriba por ti.

```text
Quiero que seas mi asistente personal.

Hazme 8 preguntas, de una en una, para conocerme: a qué me dedico, cómo escribo, qué tareas repito, qué me cuesta y cómo me gusta recibir las respuestas. Cuando termines, escríbeme unas instrucciones claras para que te comportes siempre así.
```

> 💡 Responde con naturalidad, como si hablaras con alguien nuevo en tu equipo.

**✅ Comprobación:** Claude te ha dado un texto con tus instrucciones personales.

### 2. Crea el proyecto «Mi asistente»
_5 min · su cuaderno_

- En Claude, en el menú lateral, pulsa **Proyectos → Crear proyecto** y llámalo **Mi asistente**.
- Pulsa **Instrucciones del proyecto** y pega el texto del paso anterior.

**No veo la opción de Proyectos**

- Tu plan puede tener límites. Alternativa: guarda las instrucciones en una nota.
- Pégalas al principio de cada chat nuevo. Funciona igual.

**✅ Comprobación:** tienes un proyecto con tus instrucciones.

### 3. Pruébalo
_3 min · primera tarea_

```text
Ayúdame con esto: [pega un correo, una duda o una tarea real de hoy]. Respóndeme como lo haría yo.
```

> 💡 Si algo no te gusta, díselo y luego pide: «añade esto a tus instrucciones».

**✅ Comprobación:** la respuesta te sirve casi sin tocarla.

## Recetas del libro

### Receta 1: Responde correos difíciles

Un cliente enfadado, un no educado o un recordatorio incómodo, con tu tono.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- ✉️ Correo
- 🍽 Resultado: un correo listo para enviar
- Versión web: https://amri.es/recetas/asistente-ia--correos.html
- Ideas de ejemplo:
  - Responder una queja: responder a una queja de un cliente con calma y una solución
  - Decir que no: decir que no a una petición sin quedar mal
  - Reclamar un pago: recordar a un cliente un pago pendiente con educación y firmeza

#### 1. Pega el contexto
_3 min · qué pasa_

```text
Quiero [la idea de la persona]. Este es el correo que he recibido (o la situación): [pégalo].

Lo que quiero conseguir: [qué]. Lo que no quiero: [qué].
```

**✅ Comprobación:** Claude tiene toda la información.

#### 2. Dos versiones
_4 min · elegir_

```text
Escribe 2 versiones con mi tono: una más cálida y otra más directa. Que no pasen de 120 palabras.
```

**✅ Comprobación:** tienes dos versiones para elegir.

#### 3. Repásalo y envíalo tú
_3 min · enviar_

- Lee el correo en voz alta.
- Cambia lo que no dirías tú.
- Envíalo desde tu correo.

**✅ Comprobación:** el correo está enviado.

**Al terminar:** Listo. Guarda el mensaje que mejor te ha funcionado como atajo.

### Receta 2: Resume documentos largos

Sube un PDF, un contrato o un informe y quédate con lo importante en 5 puntos.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 📄 Documentos
- 🍽 Resultado: lo importante de un documento, con citas
- Versión web: https://amri.es/recetas/asistente-ia--documentos.html
- Ideas de ejemplo:
  - Un contrato: un contrato
  - Un informe del trabajo: un informe largo del trabajo
  - Una normativa: una normativa o unas bases

#### 1. Súbelo
_2 min · el clip_

- Abre un chat dentro de **Mi asistente** y arrastra el documento (o pulsa 📎).

> 💡 ⚠️ No subas documentos con contraseñas, datos bancarios o datos de otras personas que no hagan falta.

**✅ Comprobación:** ves el documento en el chat.

#### 2. Pide el resumen
_5 min · lo importante_

```text
Te he subido [la idea de la persona]. Resúmelo en 5 puntos, con palabras sencillas. Después dime: plazos y fechas, lo que me obliga a hacer, lo que me puede costar dinero y lo que deberías mirar con lupa. Cita la parte del documento de cada cosa.
```

**✅ Comprobación:** tienes el resumen con las citas.

#### 3. Pregunta tus dudas
_3 min · lo tuyo_

```text
En mi caso, [explica tu situación]. ¿Qué parte del documento me afecta más y qué me recomiendas preguntar?
```

> 💡 Para decisiones legales o de dinero importantes, consulta además con un profesional.

**✅ Comprobación:** sabes qué te afecta y qué preguntar.

**Al terminar:** Ya tienes lo importante. Para documentos que uses a menudo, súbelos al proyecto: así no tendrás que subirlos cada vez.

### Receta 3: Estudia con Claude: resúmenes y test

Sube tus apuntes y Claude te hace resúmenes, preguntas tipo test y te explica lo que no entiendes.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🎓 Estudios
- 🍽 Resultado: resumen, test y dudas resueltas
- Versión web: https://amri.es/recetas/asistente-ia--estudiar.html
- Ideas de ejemplo:
  - Preparar un examen: preparar un examen
  - Entender un tema difícil: entender un tema que me cuesta
  - Practicar un idioma: practicar un idioma conversando

#### 1. Sube tus apuntes
_3 min · tu material_

- Sube tus apuntes o el tema (PDF, fotos de tus apuntes o texto).

**✅ Comprobación:** Claude tiene tus apuntes.

#### 2. Resumen y test
_10 min · estudiar_

```text
Quiero [la idea de la persona]. Con mis apuntes:
1) Resúmelo en una página.
2) Hazme 10 preguntas tipo test, de una en una. Espera mi respuesta antes de decirme si he acertado y por qué.
Usa solo lo que está en mis apuntes.
```

**✅ Comprobación:** has hecho el test y sabes en qué fallas.

#### 3. Lo que no entiendes
_7 min · dudas_

```text
No entiendo [qué]. Explícamelo como a alguien de 12 años, con un ejemplo de la vida real. Después hazme una pregunta para ver si lo he entendido.
```

**✅ Comprobación:** entiendes lo que antes no.

**Al terminar:** Repite el test dentro de dos días: lo que se repasa espaciado se recuerda mucho mejor.

### Receta 4: Organiza tu semana

Tareas, citas y descansos en un plan realista que cabe en tu semana.

- ⏱ 15 min
- 👩‍🍳 Muy fácil
- 📅 Organización
- 🍽 Resultado: tu semana planificada en una tabla
- Versión web: https://amri.es/recetas/asistente-ia--semana.html
- Ideas de ejemplo:
  - Semana de trabajo: una semana con mucho trabajo
  - Casa y familia: una semana con la casa, los niños y los recados
  - Comidas y compra: el menú de la semana y la lista de la compra

#### 1. Vacía la cabeza
_5 min · todo lo pendiente_

```text
Ayúdame a organizar [la idea de la persona]. Esto es todo lo que tengo pendiente, sin orden: [escríbelo todo]. Mis horarios fijos son: [cuáles].
```

**✅ Comprobación:** Claude tiene todo lo pendiente.

#### 2. El plan
_5 min · una tabla_

```text
Hazme un plan realista en una tabla, día a día. Primero lo urgente, deja huecos libres y avísame si no cabe todo.
```

**✅ Comprobación:** tienes la semana en una tabla.

#### 3. Llévalo a tu agenda
_5 min · donde lo veas_

- Cópialo en tu agenda o en una nota.
- Con el libro [Gmail y Calendar](gmail-calendario.html), Claude puede apuntarlo en tu calendario.

**✅ Comprobación:** el plan está donde lo vas a ver.

**Al terminar:** Tu semana tiene un plan. El viernes, cuéntale cómo ha ido y ajusta la siguiente.

### Receta 5: Responde dudas de clientes con tus documentos

Sube tus precios, horarios y condiciones, y tu asistente contesta con tu información, sin inventar.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🏪 Negocio
- 🍽 Resultado: respuestas a clientes basadas en tus documentos
- Versión web: https://amri.es/recetas/asistente-ia--clientes.html
- Ideas de ejemplo:
  - Tienda: una tienda
  - Servicios: un negocio de servicios con citas
  - Clases o cursos: una academia o unos cursos

#### 1. Sube tus documentos al proyecto
_5 min · la despensa_

- Reúne precios, horarios, condiciones y preguntas frecuentes. Mejor pocos y claros.
- En **Mi asistente**, pulsa **Añadir contenido** y súbelos.

**✅ Comprobación:** los documentos están en el proyecto.

#### 2. Comprueba que lo entiende
_5 min · el examen_

```text
Tengo [la idea de la persona]. Lee los documentos del proyecto y dime en 5 puntos qué has entendido. Si algo es confuso o falta, dímelo. A partir de ahora, si no encuentras algo en mis documentos, dilo en vez de inventarlo.
```

**✅ Comprobación:** Claude resume bien tu negocio.

#### 3. Responde una duda real
_10 min · probar_

```text
Un cliente me pregunta esto: [pega la pregunta]. Respóndele con mi tono usando solo mis documentos. Si no está, dime qué información falta.
```

**✅ Comprobación:** la respuesta es correcta y no inventa nada.

**Al terminar:** Tu asistente responde con tu información. Si quieres que lo haga solo en tu web, mira el libro «Un chatbot para tu web».

### Receta 6: Tu libreta de atajos

Los mensajes que repites cada semana, listos para pegar en un segundo.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- ⚡ Atajos
- 🍽 Resultado: 5 mensajes listos para usar a diario
- Versión web: https://amri.es/recetas/asistente-ia--atajos.html
- Ideas de ejemplo:
  - Trabajo: mi trabajo
  - Casa: mi vida diaria

#### 1. Pide tus atajos
_5 min · a medida_

```text
Según lo que sabes de mí, dame 5 mensajes cortos que podría usar a diario contigo para ahorrar tiempo en [la idea de la persona]. Déjalos listos para copiar, con [huecos] donde tenga que poner lo mío.
```

**✅ Comprobación:** tienes 5 mensajes.

#### 2. Guárdalos
_5 min · a mano_

- Cópialos en una nota del móvil llamada «Atajos de Claude».
- Añade los que ya te han funcionado en otras recetas.

**✅ Comprobación:** tienes tus atajos guardados.

**Al terminar:** Tienes tus atajos. Cuantos más uses, más tiempo ahorras.

## Al terminar

Tu asistente ya te conoce. Abre cada receta dentro de tu proyecto «Mi asistente».

## Extras (opcionales, después de servir)

### Extra 1. Conéctalo con tus apps
_Opcional · conectores_

Con los conectores, tu asistente puede leer tu correo, tu calendario o tus documentos sin copiar y pegar.

- En Claude abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Conecta la app que quieras y autoriza.

> 💡 Conecta solo lo que necesites. Mira el libro [Gmail y Calendar](gmail-calendario.html).

### Extra 2. Mantenlo al día
_Cada mes · 5 minutos_

```text
Revisa tus instrucciones y propón mejoras según nuestras últimas conversaciones. Dime qué cambiarías y por qué.
```

## Sigue con

- `/amri:empieza-aqui` · Empieza aquí: conoce a Claude
- `/amri:imagenes-ia` · Crea imágenes con IA gratis
- `/amri:logo-ia` · Diseña un logo con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
