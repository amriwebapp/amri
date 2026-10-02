---
name: redes-sociales
description: "Receta de AMRI «Tus redes sociales con Claude». Instagram, TikTok, LinkedIn y X con tu propia voz: perfiles afinados, una idea adaptada a cada red y un mes planificado. Claude escribe; tú publicas. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tus redes sociales con Claude

Instagram, TikTok, LinkedIn y X con tu propia voz: perfiles afinados, una idea adaptada a cada red y un mes planificado. Claude escribe; tú publicas.

- ⏱ 45 min aprox.
- 👩‍🍳 Sin saber programar
- 💶 0 € para empezar (Claude Code es opcional)
- 🍽 Resultado: tu voz, tus perfiles afinados y un mes de contenido planificado
- Categoría: Estudio creativo
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/redes-sociales.html

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

- **Claude**: el jefe de cocina. Escribe, adapta y planifica contigo.
- **Un Proyecto de Claude**: la libreta de la cocina. Guarda tu voz para que Claude la recuerde en cada chat.
- **Tus redes**: mejor con perfil profesional (de creador o de empresa) para ver tus estadísticas.
- **Plugin Instagram Agent** (opcional, en Claude Code): 13 recetas de Instagram, gratis y open source, creado por [Jake Schincariol](https://github.com/Jakeschincariol/instagram-agent-skill).

## Ideas de ejemplo

- **Instagram:** una cuenta de Instagram con reels y carruseles útiles sobre mi tema
- **TikTok / Shorts:** vídeos cortos para TikTok y YouTube Shorts que enganchen en el primer segundo
- **LinkedIn:** publicaciones de LinkedIn que muestren mi experiencia profesional sin sonar a anuncio
- **X / Threads:** hilos cortos en X y Threads con ideas prácticas de mi sector

## Antes de empezar

Pregunta a la persona: **¿Usas Claude Code en tu ordenador?** Si no lo usas, elige «No»: toda la receta funciona en el chat de Claude. Con Claude Code puedes añadir además un plugin especializado en Instagram.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara la cocina
_5 min · antes de empezar_

Claude escribe y tú decides qué publicas. Nada se publica solo: así cumples las normas de cada red y no arriesgas tu cuenta.

#### Pasos

- Elige **una o dos redes** para empezar. Es mejor hacerlo bien en dos que a medias en cinco.

- Cambia tus perfiles a **cuenta profesional** (de creador o de empresa). Es gratis y te da estadísticas.

- En Claude, crea un **Proyecto** llamado «Mis redes». Todo lo que hagas en esta receta irá dentro.

> 💡 Un Proyecto de Claude es una carpeta con memoria: lo que guardes en sus instrucciones, Claude lo tiene en cuenta en todos los chats de ese proyecto.

**✅ Comprobación:** tus perfiles son profesionales y tienes el Proyecto «Mis redes» creado.

### 2. Enséñale tu voz
_10 min · el paso más importante_

Si Claude no conoce tu voz, todo sonará a «escrito por IA». Este paso lo evita.

#### Pasos

- Dentro del Proyecto, abre un chat y pega este mensaje. Si ya tienes publicaciones, añade tres debajo:

```text
Ayúdame a definir mi voz para redes sociales. Mi cuenta va de [la idea de la persona].

Hazme las preguntas de una en una: a quién hablo, qué ofrezco, qué palabras uso y cuáles nunca diría, qué opino distinto a los demás y qué temas no toco.

Al final, escribe una «guía de voz» de una página que pueda pegar en las instrucciones del proyecto.

[Si tienes publicaciones tuyas, pega aquí tres]
```

- Copia la guía que te dé y pégala en las **instrucciones del Proyecto**.

**¿Qué lleva una buena guía de voz?**

- **A quién hablas**, muy concreto: «oficinistas con dolor de espalda», no «gente».
- **Palabras tuyas** y palabras prohibidas.
- **Tus opiniones**: tres ideas en las que crees y otros no. De ahí salen los mejores contenidos.
- **Pruebas reales**: datos y casos tuyos. Pide a Claude que nunca invente cifras.

**✅ Comprobación:** la guía de voz está en las instrucciones del Proyecto y, al leerla, suena a ti.

### 3. Elige tus pilares de contenido
_5 min · de qué vas a hablar_

Los pilares son 3 o 4 temas fijos. Te ahorran el «¿hoy qué publico?» y hacen que la gente sepa qué esperar de ti.

```text
Con mi guía de voz, propón 4 pilares de contenido para mis redes. Para cada pilar: qué problema resuelve a mi público, 5 ideas de publicación y en qué formato funciona mejor (vídeo corto, carrusel, texto).
```

**✅ Comprobación:** tienes 3 o 4 pilares y una lista de ideas para cada uno.

### 4. Afina tus perfiles
_5 min · primera impresión_

En tres segundos alguien decide si te sigue. Tu biografía tiene que decir qué haces, para quién y por qué seguirte.

```text
Esta es mi biografía actual en [red]: [pégala]. Reescríbela en 3 versiones para esa red, respetando su límite de caracteres. Cada una debe decir qué hago, para quién y qué gana quien me sigue. Termina con una llamada a la acción hacia mi enlace.
```

> 💡 Repite este paso para cada red: no es lo mismo una biografía de LinkedIn que una de TikTok.

**✅ Comprobación:** has cambiado tu biografía en cada red.

### 5. Una idea, todas tus redes
_10 min · el plato principal_

El truco de los creadores: una buena idea se convierte en varias publicaciones, cada una con el formato de su red.

```text
Coge esta idea: [la idea de la persona].

Adáptala a cada una de mis redes:
- Vídeo corto (Reels, TikTok, Shorts): 3 ganchos para el primer segundo y un guion de 30 segundos.
- Carrusel (Instagram, LinkedIn): 7 diapositivas, una idea por diapositiva.
- Texto (LinkedIn, X, Threads): una publicación con una primera línea que enganche.

Usa mi guía de voz y no inventes datos: si falta uno, deja [dato].
```

**Lo que funciona en cada red**

- **TikTok y Shorts**: el primer segundo lo es todo. Ve al grano.
- **Instagram**: reels para llegar a gente nueva; carruseles para que te guarden.
- **LinkedIn**: historias reales y aprendizajes; menos venta y más utilidad.
- **X y Threads**: frases cortas y opiniones claras.

**✅ Comprobación:** tienes la misma idea lista en el formato de cada red.

### 6. Que suene a ti
_3 min · quitar el tono de IA_

Antes de publicar, quita lo que suene a máquina: frases hechas, exceso de emojis y palabras que tú nunca usarías.

```text
Revisa este texto con mi guía de voz. Quita frases hechas, signos raros y cualquier cosa que suene a «escrito por IA». Léelo como si fuera a decirlo en voz alta y dime qué has cambiado.

[pega tu texto]
```

**✅ Comprobación:** al leerlo en voz alta, suena a ti.

### 7. Planifica el mes
_5 min · constancia_

Publicar con constancia importa más que publicar mucho. Un calendario sencillo te quita la presión de improvisar.

```text
Hazme un calendario de publicaciones para las próximas 4 semanas en mis redes, en una tabla: día, red, pilar, formato, idea y gancho. Que sea realista: [número] publicaciones por semana.
```

> 💡 Si tienes la receta «Tu secretaría: Gmail y Calendar», Claude puede pasar el calendario a tu agenda. Con «Tu segundo cerebro en Notion», a una base de datos de Notion.

**✅ Comprobación:** tienes el calendario del mes guardado.

### 8. Publica tú y mide
_Cada semana · aprender_

Publica desde cada app, como siempre. Una vez por semana, mira qué funcionó con tus datos reales.

- Copia de las estadísticas de cada red el alcance, los guardados, los compartidos y los comentarios de cada publicación.
- Pégalos en el Proyecto:

```text
Estos son los datos de mis publicaciones de esta semana: [pega los datos]. Dime qué funcionó mejor y por qué, qué patrón ves y qué repetirías la semana que viene. No inventes datos que no te he dado.
```

**✅ Comprobación:** sabes qué publicación funcionó mejor y qué vas a repetir.

## Al terminar

Ya tienes tu voz, tus perfiles afinados y un mes de contenido planificado para tus redes. Claude escribe; tú decides y publicas. Repite el ciclo cada mes: planifica, publica, mide y ajusta.

## Extras (opcionales, después de servir)

### Extra 1. Instagram a fondo con el plugin Instagram Agent _(solo si la respuesta a «Usas Claude Code en tu ordenador» es «Sí»)_
_Opcional · Claude Code_

Si usas Claude Code, este plugin añade 13 recetas especializadas en Instagram, todas empiezan por `/ig-`. No publica nada por ti ni te pide la contraseña.

- En Claude Code, pega:

```text
/plugin marketplace add Jakeschincariol/instagram-agent-skill
```

```text
/plugin install instagram-agent
```

- Guarda tu guía de voz en `~/.claude/instagram/voice.md`: todas sus recetas la leen.
- Prueba `/ig-profile` (puntúa tu perfil), `/ig-reel` (ganchos y guion), `/ig-caption` (el texto) y `/ig-plan` (la semana).

> 💡 Antes de instalar un plugin de otra persona, echa un vistazo a su repositorio. Este es open source y funciona en tu ordenador.

### Extra 2. Cuida tu comunidad
_Opcional · comentarios y mensajes_

Responder bien a los comentarios hace crecer una cuenta más que publicar más.

```text
Estos son los comentarios y mensajes de esta semana: [pégalos]. Propón una respuesta corta para cada uno, con mi voz. Marca los que debería responder yo en persona.
```

> 💡 Revisa siempre cada respuesta antes de enviarla: la envías tú.

### Extra 3. Convierte un contenido largo en una semana
_Opcional · reutilizar_

Un vídeo largo, un pódcast, un artículo o una charla tienen material para una semana entera de redes.

```text
Esta es la transcripción o el texto de mi contenido largo: [pégalo]. Sácame 5 vídeos cortos, 2 carruseles y 3 publicaciones de texto, cada uno independiente y con su gancho.
```

## Sigue con

- `/amri:higgsfield-cine` · Imágenes y vídeos de cine con Higgsfield
- `/amri:video-aftereffects` · Edita vídeo con Claude y After Effects
- `/amri:blender-3d` · Crea 3D con Claude y Blender
- `/amri:animaciones-opus` · Animaciones con Claude Opus 5.5
- `/amri:chef` · combina varias recetas en un proyecto propio
