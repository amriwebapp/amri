---
name: chatbot-web
description: "Receta de AMRI «Un chatbot para tu web». Añade un chatbot que responde a las preguntas de tus visitantes sobre tu producto o servicio, entrenado con tu contenido. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Un chatbot para tu web

Añade un chatbot que responde a las preguntas de tus visitantes sobre tu producto o servicio, entrenado con tu contenido.

- ⏱ 40 min aprox.
- 👩‍🍳 Sin saber programar
- 💶 0 € para empezar
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «anon» de Supabase) sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes (todos gratuitos)

- **Claude**: el jefe de cocina. Te prepara todo lo que el bot debe saber.
- **Chatbase**: el camarero. Atiende a tus visitantes en la web.
- **Tu web**: el comedor. Donde vive el chat (sirve la de la receta de la webapp).
- **Una hoja de contactos**: la libreta de reservas. Donde se guardan los datos que deja la gente.

## Ideas de ejemplo

- **Restaurante / bar:** un restaurante: carta, horarios, alérgenos, reservas y cómo llegar
- **Servicios profesionales:** un despacho de servicios profesionales: qué ofrezco, precios orientativos y cómo pedir cita
- **Academia / cursos:** una academia: cursos disponibles, horarios, precios y cómo inscribirse
- **Soporte de producto:** una app: cómo empezar a usarla, preguntas frecuentes y cómo resolver problemas comunes

## Antes de empezar

Pregunta a la persona: **¿Quieres que recoja los datos de contacto de los visitantes?** Si dudas, elige «Sí»: es útil para no perder clientes. Recuerda avisar en tu web de cómo usas esos datos.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_5 min · crear cuentas_

Vas a crear dos cuentas gratuitas y tener a mano tu web.

#### Pasos

- Crea tu cuenta en [Claude](https://claude.ai).

- Crea tu cuenta en [Chatbase](https://www.chatbase.co) (botón «Sign in with Google»).

- Ten a mano la dirección de tu web y, si puedes, acceso a sus archivos (por ejemplo en GitHub).

> 💡 ¿Aún no tienes web? Haz primero la receta de la webapp y vuelve aquí.

**✅ Comprobación:** has entrado en Claude y en Chatbase.

### 2. Escribe la chuleta con Claude
_10 min · lo que debe saber_

Tu bot solo sabe lo que tú le enseñas. Claude te ayuda a escribir una «chuleta» con todo lo importante.

#### Pasos

- Abre un chat nuevo en Claude.
- Copia este mensaje y pégalo:

```text
Voy a crear un chatbot para [la idea de la persona].

Hazme preguntas, de una en una, para reunir toda la información que el chatbot necesita. Cuando terminemos, escribe un documento de preguntas frecuentes con respuestas claras y cortas, listo para copiar.
```

**¿Qué significa cada parte del mensaje?**

- **«Voy a crear un chatbot para…»**: tu negocio. Cámbialo por el tuyo.
- **«De una en una»**: así no se te olvida nada.
- **«Documento de preguntas frecuentes»**: el material que subirás a Chatbase.

> 💡 Incluye lo que te preguntan siempre por teléfono o WhatsApp. Esas son las preguntas de oro.

**✅ Comprobación:** tienes un documento con al menos 15 preguntas y respuestas.

### 3. Monta el chatbot
_5 min · subir la chuleta_

Chatbase lee tu chuleta y aprende a responder con ella.

#### Pasos

- En Chatbase pulsa **New AI agent** (o **Create**).

- Elige **Text** y pega el documento de Claude.

- Si tu web ya tiene información, añade también **Website** y pega su dirección.

- Pulsa **Create agent** y espera un minuto.

**✅ Comprobación:** en la ventana de prueba le preguntas algo de tu negocio y responde bien.

### 4. Dale personalidad
_5 min · cómo habla_

Le dices cómo debe hablar y, muy importante, qué hacer cuando no sabe algo.

#### Pasos

- En Chatbase abre **Settings → AI** (o **Instructions**).
- Pega estas instrucciones y cambia lo que está entre corchetes:

```text
Eres el asistente de [nombre del negocio]. Respondes siempre en español, de forma breve, amable y cercana. Usa solo la información que te he dado. Si no sabes algo, dilo con naturalidad y ofrece contactar en [tu correo o teléfono]. Nunca inventes precios, fechas ni condiciones. Cuando alguien muestre interés, pídele amablemente su nombre y su correo para que podamos contactarle.
```

> 💡 La frase «nunca inventes» es la más importante: evita que el bot prometa cosas que no ofreces.

**✅ Comprobación:** le preguntas algo que no está en la chuleta y te remite a tu contacto en vez de inventar.

### 5. Apunta los contactos _(solo si la respuesta a «Quieres que recoja los datos de contacto de los visitantes» es «Sí»)_
_5 min · no perder clientes_

El bot puede pedir el nombre y el correo de quien esté interesado, y tú los recibes.

#### Pasos

- En Chatbase busca la sección **Actions** o **Leads** y activa la recogida de contactos.

- Elige los campos: **nombre** y **correo** (no pidas más de lo necesario).

- Revisa los contactos en la sección **Activity → Leads**.

> 💡 ⚠️ Si recoges datos personales, añade en tu web una política de privacidad que explique para qué los usas. Pídele a Claude un borrador adaptado a tu caso.

**✅ Comprobación:** haces una prueba, dejas tu correo y aparece en la lista de contactos.

### 6. Ponlo en la mesa
_5 min · instalarlo en tu web_

Chatbase te da un pequeño código. Lo pegas en tu web y aparece la burbuja del chat.

#### Pasos

- En Chatbase abre **Deploy → Chat widget** y copia el código.

- Abre tu `index.html` y pégalo justo antes de `</body>`. Si no sabes dónde, pídele a Claude: «pega este código en mi web».

- Sube el cambio a GitHub; Cloudflare publicará la web actualizada en 1-2 minutos.

**Mi web está en otra plataforma (WordPress, Wix…)**

- Busca en Chatbase las instrucciones para tu plataforma.
- Suele haber un apartado de «código personalizado» o un plugin.

**✅ Comprobación:** abres tu web y aparece la burbuja del chat en una esquina.

### 7. Prueba antes de servir
_5 min · revisión final_

Ponte en la piel de un cliente y pon a prueba al bot.

#### Pasos

- Abre tu web desde el móvil y hazle 5 preguntas típicas.

- Hazle una pregunta que no esté en la chuleta: debe remitirte a tu contacto.

- Intenta liarlo: «¿me haces un descuento del 90%?». No debe prometer nada.

**✅ Comprobación:** responde bien las preguntas típicas y no inventa nada.

## Al terminar

Tu web ya tiene un asistente que responde a cualquier hora. Revisa las conversaciones cada semana para mejorarlo. Más abajo tienes dos extras: aprender de las conversaciones y cuidar la privacidad.

## Extras (opcionales, después de servir)

### Extra 1. Aprende de las conversaciones
_10 min a la semana · opcional_

Tus visitantes te dirán qué les falta. Chatbase guarda todas las conversaciones.

- Abre **Activity → Chat logs**.
- Busca respuestas flojas o preguntas sin respuesta.
- Pídele ayuda a Claude:

```text
Estas son preguntas que mi chatbot no ha sabido responder bien: [pega las preguntas]. Escríbeme respuestas cortas y claras para añadirlas a su chuleta.
```

- Añádelas en Chatbase y pulsa **Retrain**.

### Extra 2. Cuida la privacidad
_Siempre · consejos_

Unas reglas sencillas para que el bot sea de confianza.

- **No subas datos privados** a la chuleta: ni de clientes ni contraseñas.

- **Avisa de que es un asistente automático** en el mensaje de bienvenida.

- **Revisa los límites gratuitos** de Chatbase de vez en cuando en su página de precios.

**💡 Ideas para mejorar tu bot**

- Botones de preguntas sugeridas en la bienvenida.
- Los colores y el logo de tu marca en el chat.
- Una versión en inglés para visitantes de fuera.

## Sigue con

- `/amri:webapp-gratis` · Tu webapp online y gratis
- `/amri:figma-a-web` · De Figma a web real
- `/amri:automatiza-tareas` · Automatiza tareas aburridas con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
