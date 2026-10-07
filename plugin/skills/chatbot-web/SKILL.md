---
name: chatbot-web
description: "Receta de AMRI «Un chatbot para tu web». Monta tu chatbot, ponlo en tu web, recoge contactos, mejóralo cada semana y dale una bienvenida que invite a preguntar. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Un chatbot para tu web

Monta tu chatbot, ponlo en tu web, recoge contactos, mejóralo cada semana y dale una bienvenida que invite a preguntar.

- 📕 5 recetas
- ⏱ 10-20 min cada una
- 💶 Gratis (con los límites del plan gratuito de Chatbase)
- 🍽 Resultado: un asistente 24/7 en tu web
- Categoría: Crea y publica
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/chatbot-web.html

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

- **Claude**: te prepara todo lo que el bot debe saber.
- **Chatbase**: atiende a tus visitantes en la web.
- **Tu web**: donde vive el chat (sirve la del libro [Tu web online y gratis](webapp-gratis.html)).

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_5 min · gratis_

- Crea tu cuenta en [Claude](https://claude.ai).
- Crea tu cuenta en [Chatbase](https://www.chatbase.co) (botón «Sign in with Google»).
- Ten a mano la dirección de tu web.

> 💡 ¿Aún no tienes web? Haz primero «Tu primera web» y vuelve aquí.

**✅ Comprobación:** has entrado en Claude y en Chatbase.

### 2. Escribe la chuleta con Claude
_15 min · lo que debe saber_

Tu bot solo sabe lo que tú le enseñas. Claude te ayuda a escribir una «chuleta» con todo lo importante.

```text
Voy a crear un chatbot para mi negocio: [descríbelo].

Hazme preguntas, de una en una, para reunir toda la información que necesita: qué ofrezco, precios, horarios, condiciones, cómo contactar y lo que me preguntan siempre. Cuando terminemos, escribe un documento de preguntas frecuentes con respuestas claras y cortas, listo para copiar.
```

> 💡 Incluye lo que te preguntan siempre por teléfono o WhatsApp. Esas son las preguntas de oro.

**✅ Comprobación:** tienes un documento con al menos 15 preguntas y respuestas.

## Recetas del libro

### Receta 1: Monta tu chatbot

Sube la chuleta, dale personalidad y comprueba que no inventa.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🤖 Chatbase
- 🍽 Resultado: un chatbot que responde bien
- Versión web: https://amri.es/recetas/chatbot-web--montar.html
- Ideas de ejemplo:
  - Tienda online: una tienda online: envíos, devoluciones, tallas y métodos de pago
  - Restaurante: un restaurante: carta, horarios, alérgenos, reservas y cómo llegar
  - Servicios: un negocio de servicios: qué ofrezco, precios orientativos y cómo pedir cita

#### 1. Sube la chuleta
_5 min · aprender_

- En Chatbase pulsa **New AI agent** (o **Create**).
- Elige **Text** y pega la chuleta. Si tu web ya tiene información, añade también **Website**.
- Pulsa **Create agent** y espera un minuto.

**✅ Comprobación:** en la ventana de prueba responde bien a una pregunta de tu negocio.

#### 2. Dale personalidad
_10 min · cómo habla_

En Chatbase abre **Settings → AI** (o **Instructions**) y pega, cambiando lo que está entre corchetes:

```text
Eres el asistente de [nombre], [la idea de la persona]. Respondes siempre en español, de forma breve, amable y cercana. Usa solo la información que te he dado. Si no sabes algo, dilo con naturalidad y ofrece contactar en [tu correo o teléfono]. Nunca inventes precios, fechas ni condiciones.
```

> 💡 «Nunca inventes» es la frase más importante.

**✅ Comprobación:** le preguntas algo que no está en la chuleta y te remite a tu contacto.

#### 3. Intenta liarlo
_5 min · prueba de fuego_

- «¿Me haces un descuento del 90%?» → no debe prometer nada.
- «¿Abrís el día de Navidad?» (si no está en la chuleta) → debe remitirte a tu contacto.

> 💡 Para una protección más fuerte, mira el libro [Un guardián para tu chatbot](jev-guardian.html).

**✅ Comprobación:** no promete ni inventa nada.

**Al terminar:** Tu chatbot responde bien. Sigue con «Ponlo en tu web».

### Receta 2: Ponlo en tu web

Pega un pequeño código y aparece la burbuja del chat.

- ⏱ 10 min
- 👩‍🍳 Fácil
- 🌐 Web
- 🍽 Resultado: el chat en tu web
- Versión web: https://amri.es/recetas/chatbot-web--en-tu-web.html
- Ideas de ejemplo:
  - Hecha con AMRI (GitHub): mi web, que está en GitHub y publicada en Cloudflare
  - WordPress, Wix u otra: mi web, hecha con otra plataforma

#### 1. Copia el código
_2 min · Chatbase_

- En Chatbase abre **Deploy → Chat widget** y copia el código.

**✅ Comprobación:** tienes el código copiado.

#### 2. Pégalo
_8 min · instalar_

- Pide a Claude: «Pega este código en mi web, justo antes de </body>, y súbelo a mi repositorio» (o hazlo a mano en `index.html`).
- Cloudflare publica el cambio en 1-2 minutos.

**✅ Comprobación:** abres tu web y aparece la burbuja del chat.

**Al terminar:** Tu web ya tiene asistente.

### Receta 3: Recoge los contactos de interesados

El bot pide nombre y correo a quien está interesado, y tú los recibes.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 📇 Contactos
- 🍽 Resultado: contactos de clientes potenciales
- Versión web: https://amri.es/recetas/chatbot-web--contactos.html
- Ideas de ejemplo:
  - Nombre y correo: nombre y correo
  - Nombre y teléfono: nombre y teléfono

#### 1. Actívalo
_5 min · Chatbase_

- En Chatbase busca **Actions** o **Leads** y activa la recogida de contactos.
- Pide solo [la idea de la persona]: no más de lo necesario.
- Añade a las instrucciones: «Cuando alguien muestre interés, pídele amablemente sus datos para que podamos contactarle».

**✅ Comprobación:** está activado.

#### 2. Privacidad
_10 min · obligatorio_

```text
Escríbeme un texto corto de privacidad para mi web: qué datos recoge el chatbot, para qué, cuánto tiempo los guardo y cómo pedir que se borren.
```

> 💡 ⚠️ Si recoges datos personales, tu web necesita una política de privacidad. Para dudas legales, consulta con un profesional.

**✅ Comprobación:** haces una prueba, dejas tus datos y aparecen en **Activity → Leads**.

**Al terminar:** Ya no pierdes clientes. Responde pronto a cada contacto.

### Receta 4: Mejóralo cada semana

Lee las conversaciones, encuentra lo que falta y añádelo a la chuleta.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 🔁 Rutina
- 🍽 Resultado: un bot que responde mejor cada semana
- Versión web: https://amri.es/recetas/chatbot-web--mejorar.html
- Ideas de ejemplo:
  - Revisión semanal: la revisión de esta semana

#### 1. Lee las conversaciones
_5 min · aprender_

- En Chatbase abre **Activity → Chat logs**.
- Copia las preguntas con respuestas flojas o sin respuesta.

**✅ Comprobación:** tienes las preguntas a mejorar.

#### 2. Respuestas nuevas
_5 min · Claude escribe_

```text
Estas son preguntas que mi chatbot no ha sabido responder bien: [pégalas]. Escríbeme respuestas cortas y claras para añadirlas a su chuleta. Si te falta información, pregúntame.
```

- Añádelas en Chatbase y pulsa **Retrain**.

**✅ Comprobación:** el bot responde bien esas preguntas.

**Al terminar:** Tu bot ha aprendido. Repite cada semana.

### Receta 5: Bienvenida y preguntas sugeridas

Un saludo claro, botones con las preguntas típicas y los colores de tu marca.

- ⏱ 10 min
- 👩‍🍳 Muy fácil
- 🎨 Aspecto
- 🍽 Resultado: un chat que invita a preguntar
- Versión web: https://amri.es/recetas/chatbot-web--bienvenida.html
- Ideas de ejemplo:
  - Cercano: cercano
  - Formal: formal

#### 1. El saludo y las sugerencias
_5 min · Claude escribe_

```text
Escribe un mensaje de bienvenida para mi chatbot con tono [la idea de la persona], que diga que es un asistente automático, y 4 preguntas sugeridas cortas con lo que más me preguntan.
```

**✅ Comprobación:** tienes el saludo y las preguntas.

#### 2. Ponlo en Chatbase
_5 min · ajustes_

- En los ajustes del chat (**Chat interface** o similar), pega el saludo y las preguntas sugeridas.
- Pon tus colores y tu logo.

**✅ Comprobación:** el chat se ve con tu marca y sus sugerencias.

**Al terminar:** Tu chat invita a preguntar.

## Al terminar

Tu chuleta está lista. Empieza por «Monta tu chatbot».

## Extras (opcionales, después de servir)

### Extra 1. Cuida la privacidad
_Siempre · consejos_

- No subas datos privados a la chuleta: ni de clientes ni contraseñas.
- Avisa de que es un asistente automático en el mensaje de bienvenida.
- Revisa los límites gratuitos de Chatbase de vez en cuando.

## Sigue con

- `/amri:webapp-gratis` · Tu web online y gratis
- `/amri:figma-a-web` · De Figma a web real
- `/amri:automatiza-tareas` · Automatiza tareas aburridas con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
