---
name: instagram-ia
description: "Receta de AMRI «Tu Instagram con Claude». Reels, carruseles y textos con tu propia voz, tu perfil afinado y un plan semanal. Claude escribe; tú publicas. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu Instagram con Claude

Reels, carruseles y textos con tu propia voz, tu perfil afinado y un plan semanal. Claude escribe; tú publicas.

- ⏱ 40 min aprox.
- 👩‍🍳 Sin saber programar
- 💳 Requiere Claude Code (plan de pago de Claude)
- 🍽 Resultado: tu voz, tu perfil afinado y tu primera publicación lista
- Categoría: Estudio creativo
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/instagram-ia.html

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

- **Claude Code**: el cocinero, en la terminal de tu ordenador. Si aún no lo tienes, sigue el paso 1 de la [página del plugin de AMRI](../plugin.html).
- **Plugin Instagram Agent**: 13 recetas de Instagram para Claude, gratis y open source (licencia MIT), creado por [Jake Schincariol](https://github.com/Jakeschincariol/instagram-agent-skill).
- **Tu cuenta de Instagram**: mejor si es profesional (de creador o de empresa), para ver tus estadísticas.
- **Tres publicaciones tuyas**, si ya tienes: los textos o guiones que más suenan a ti.

## Ideas de ejemplo

- **Un carrusel:** un carrusel de 7 diapositivas con consejos prácticos de mi tema
- **Mejorar mi perfil:** revisar mi perfil y reescribir la biografía para que se entienda en 3 segundos a qué me dedico
- **Plan de la semana:** un plan de publicaciones para esta semana con formatos y horarios
- **Historias del día:** una secuencia de historias para hoy que lleve a la gente a escribirme por mensaje

## Antes de empezar

Pregunta a la persona: **¿Ya tienes publicaciones o reels tuyos?** Si tienes al menos tres, elige «Sí»: Claude aprenderá tu voz a partir de ellos, que funciona mejor que describirla.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara la cocina
_5 min · antes de empezar_

Este plugin **no publica nada por ti** ni te pide la contraseña de Instagram. Claude escribe y tú decides qué publicas. Así cumples las normas de Instagram y no arriesgas tu cuenta.

#### Pasos

- Comprueba que tienes Claude Code: abre la Terminal, escribe `claude` y pulsa Intro.

- En Instagram ve a **Configuración → Tipo de cuenta y herramientas** y cambia a **cuenta profesional** si aún no lo es. Es gratis.

**✅ Comprobación:** Claude Code se abre en tu terminal y tu cuenta de Instagram es profesional.

### 2. Instala el plugin de Instagram
_2 min · dos comandos_

Un plugin añade recetas nuevas a Claude Code. Este trae 13, todas empiezan por `/ig-`.

#### Pasos

- Dentro de Claude Code, pega este comando:

```text
/plugin marketplace add Jakeschincariol/instagram-agent-skill
```

- Y después este:

```text
/plugin install instagram-agent
```

> 💡 Antes de instalar un plugin de otra persona, echa un vistazo a su repositorio: este es open source y no se conecta a internet ni sube tus datos.

**✅ Comprobación:** al escribir `/ig` aparecen las recetas, como `/ig-reel` o `/ig-caption`.

### 3. Enséñale tu voz
_10 min · el paso más importante_

Todas las recetas del plugin leen un archivo llamado **voice.md**: quién eres, a quién hablas, cómo suenas y qué no dirías nunca. En Instagram importa mucho porque tienes que decir las frases en voz alta.

#### Si ya tienes publicaciones

- Pega en Claude Code este mensaje y, debajo, tres textos o guiones tuyos:

```text
Escribe mi voice.md a partir de estos tres textos míos y guárdalo en ~/.claude/instagram/voice.md. Escribo siempre en español. Pregúntame lo que no puedas deducir: a quién hablo, qué ofrezco y qué temas no toco.

1. [pega aquí tu primer texto]
2. [pega aquí el segundo]
3. [pega aquí el tercero]
```

#### Si todavía no tienes

- Pega en Claude Code este mensaje:

```text
Ayúdame a escribir mi voice.md para Instagram y guárdalo en ~/.claude/instagram/voice.md. Mi cuenta va de [la idea de la persona]. Escribo siempre en español. Hazme las preguntas de una en una.
```

**¿Qué lleva un buen voice.md?**

- **A quién hablas**, muy concreto: «panaderos caseros que empiezan», no «gente».
- **Palabras que usas** y palabras que nunca dirías.
- **Tus opiniones**: tres ideas en las que crees y otros no. De ahí salen los mejores reels.
- **Pruebas reales**: datos y resultados tuyos. El plugin nunca se inventa números; si faltan, deja huecos como {{tu número}}.

**✅ Comprobación:** existe el archivo `~/.claude/instagram/voice.md` y, al leerlo, suena a ti.

### 4. Revisa tu perfil
_5 min · primera impresión_

Tu perfil es tu escaparate: en tres segundos alguien decide si te sigue. Claude lo puntúa sobre 100 con 12 criterios y te propone una biografía nueva.

```text
/ig-profile
```

> 💡 Pega tu biografía actual, tu nombre y el enlace que tienes cuando te lo pida.

**✅ Comprobación:** tienes tu puntuación y has cambiado la biografía en Instagram.

### 5. Prepara tu primera publicación
_10 min · el plato principal_

Le das la idea y Claude prepara la publicación. Para un reel, propone tres ganchos para el primer segundo, los puntúa y escribe el guion.

```text
/ig-reel [la idea de la persona]
```

> 💡 Elige el gancho que dirías tú en voz alta. Si ninguno te convence, pídele otros tres.

**✅ Comprobación:** tienes el guion o las diapositivas listos para grabar o diseñar.

### 6. Que suene a ti
_2 min · quitar el tono de IA_

Esta receta limpia el texto: quita frases hechas, signos raros y ese tono de «escrito por IA», y le da una puntuación de naturalidad.

```text
/ig-human [pega aquí tu guion o tu texto]
```

**✅ Comprobación:** al leerlo en voz alta, suena a ti.

### 7. Escribe el texto del post
_3 min · el pie de foto_

Instagram solo muestra unos 125 caracteres antes del «más». Esta receta te enseña exactamente qué se verá y limita las etiquetas a cinco.

```text
/ig-caption
```

**✅ Comprobación:** la primera línea se entiende sola y tienes como mucho cinco etiquetas.

### 8. Planifica la semana
_5 min · constancia_

Publicar con constancia importa más que publicar mucho. Claude te propone qué publicar cada día, en qué formato y a qué hora, y diez cuentas con las que interactuar.

```text
/ig-plan
```

> 💡 Guarda el plan en tu calendario. Si tienes la receta «Tu secretaría: Gmail y Calendar», Claude puede crear los recordatorios por ti.

**✅ Comprobación:** tienes el plan de la semana apuntado.

### 9. Publica tú y mide
_Una semana · aprender_

Publica desde la app de Instagram, como siempre. Pasada una semana, mira qué funcionó con tus datos reales.

- Publica tu primera pieza.
- A los 7 días, abre las estadísticas de Instagram y copia el alcance, los guardados y los compartidos de cada publicación.
- Pégalos aquí:

```text
/ig-audit [pega aquí tus números de la semana]
```

**✅ Comprobación:** sabes qué publicación funcionó mejor y por qué, y qué repetir la semana que viene.

## Al terminar

Ya tienes tu voz guardada, tu perfil afinado y tu primera publicación lista. Claude escribe; tú decides y publicas. Repite el plan cada semana y, cuando tengas datos, revísalos con /ig-audit.

## Extras (opcionales, después de servir)

### Extra 1. Convierte un contenido en una semana
_Opcional · reutilizar_

Un vídeo largo, un pódcast o una newsletter se convierten en varios reels y carruseles independientes.

```text
/ig-repurpose [pega el texto o la transcripción]
```

### Extra 2. Cuida tu comunidad
_Opcional · comentarios y mensajes_

- `/ig-comment`: comentarios con sentido para las cuentas de tu sector.
- `/ig-reply`: respuestas a los comentarios de tus publicaciones.
- `/ig-dm`: primer mensaje, propuesta de colaboración y seguimiento.

> 💡 Revisa siempre cada mensaje antes de enviarlo: los envías tú.

### Extra 3. Descubre qué funciona en tu tema
_Opcional · investigar_

Busca las publicaciones que destacan en tu tema y explica qué fórmula usan. Lee como lo harías tú, desde tu navegador; no descarga datos de forma automática.

```text
/ig-viral [tu tema]
```

## Sigue con

- `/amri:higgsfield-cine` · Imágenes y vídeos de cine con Higgsfield
- `/amri:video-aftereffects` · Edita vídeo con Claude y After Effects
- `/amri:blender-3d` · Crea 3D con Claude y Blender
- `/amri:chef` · combina varias recetas en un proyecto propio
