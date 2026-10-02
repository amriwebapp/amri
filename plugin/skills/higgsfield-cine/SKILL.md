---
name: higgsfield-cine
description: "Receta de AMRI «Imágenes y vídeos de cine con Higgsfield». Conecta Higgsfield a Claude y crea fotos de producto, anuncios y clips cinematográficos hablando en español. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Imágenes y vídeos de cine con Higgsfield

Conecta Higgsfield a Claude y crea fotos de producto, anuncios y clips cinematográficos hablando en español.

- ⏱ 30 min aprox.
- 👩‍🍳 Fácil
- 💶 Higgsfield usa créditos (hay prueba)
- 🍽 Resultado: imágenes y clips listos para publicar
- Categoría: Estudio creativo
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/higgsfield-cine.html

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

- **Claude**: el director. Entiende tu idea y escribe las indicaciones.
- **Higgsfield**: el estudio de rodaje. Genera imágenes y vídeos con varios modelos de IA. Funciona con créditos.
- **Conector de Higgsfield**: el ayudante de dirección. Lleva las órdenes de Claude al estudio.
- **Tu foto de referencia**: el atrezo. Una imagen clara de tu producto o logo.

## Ideas de ejemplo

- **Anuncio en vídeo:** un anuncio vertical 9:16 de 8 segundos para redes, con mi producto girando despacio bajo una luz cálida
- **Personaje de marca:** un personaje ilustrado y amable que represente a mi marca, en tres poses diferentes
- **Escena de cine:** un plano cinematográfico de 8 segundos: amanecer en una cocina tranquila, con la cámara avanzando muy despacio

## Antes de empezar

Pregunta a la persona: **¿Vas a usar una foto tuya como referencia (tu producto, tu logo, tu local)?** Si dudas, elige «Sí»: te enseñamos a subir tu foto. Si no la usas, la receta funciona igual.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_5 min · cuentas_

Necesitas dos cuentas: una en Claude y otra en Higgsfield.

#### Pasos

- Entra en [Claude](https://claude.ai) (web o app de escritorio).

- Crea una cuenta en [Higgsfield](https://higgsfield.ai).

- Mira qué créditos o prueba gratuita tienes: cada imagen o vídeo gasta créditos, y el vídeo gasta más que la imagen.

> 💡 Las ofertas y los planes de Higgsfield cambian a menudo. Revisa su web antes de empezar para no llevarte sorpresas.

**✅ Comprobación:** puedes entrar en las dos cuentas.

### 2. Conecta Higgsfield con Claude
_3 min · conector personalizado_

Higgsfield tiene su propio conector. Se añade pegando una dirección web.

#### Pasos

- En Claude abre **Personalizar → Conectores** (_Customize → Connectors_).

- Pulsa **+** → **Añadir conector personalizado** (_Add custom connector_).

- Nombre: **Higgsfield**. Dirección (URL): copia esta:

```text
https://mcp.higgsfield.ai/mcp
```

- Pulsa **Añadir** y después **Conectar**. Inicia sesión con tu cuenta de Higgsfield y acepta.

**¿Qué es esa dirección?**

- Es el «teléfono» del conector: Claude llama ahí cuando necesita generar algo.
- No tienes que instalar nada: todo pasa en internet.
- En el plan gratuito de Claude puedes añadir **un** conector personalizado.

**✅ Comprobación:** en un chat nuevo, al pulsar **+ → Conectores**, ves Higgsfield activado.

### 3. Escribe el guion con Claude
_5 min · la idea_

Antes de gastar créditos, deja que Claude te ayude a afinar la idea. Es gratis y mejora mucho el resultado.

#### Pasos

- Abre un chat nuevo y pega:

```text
Actúa como director de fotografía. Quiero crear [la idea de la persona].

Antes de generar nada, hazme 4 preguntas cortas sobre estilo, colores, encuadre y formato. Después propón 2 ideas en una frase cada una y espera a que yo elija.
```

**¿Por qué no generar directamente?**

- Cada generación gasta créditos: mejor acertar a la primera.
- Claude traduce tus palabras a indicaciones técnicas (luz, lente, movimiento).
- Tú decides antes de que se gaste nada.

**✅ Comprobación:** tienes una idea elegida y clara.

### 4. Sube tu foto de referencia _(solo si la respuesta a «Vas a usar una foto tuya como referencia (tu producto, tu logo, tu local)» es «Sí»)_
_3 min · el atrezo_

Con una referencia, el resultado se parece a tu producto de verdad.

#### Pasos

- Haz una foto de tu producto con buena luz, de frente y sobre un fondo liso.

- Arrástrala al chat de Claude (o pulsa el clip 📎).

- Escribe:

```text
Usa esta foto como referencia. El producto tiene que verse igual: misma forma, mismos colores y mismo logo. Cambia solo el fondo, la luz y el encuadre.
```

> 💡 Usa solo imágenes tuyas o con permiso. No subas fotos de otras personas sin su consentimiento.

**✅ Comprobación:** Claude ha visto tu foto y te confirma qué va a mantener.

### 5. Genera la primera versión
_5 min · ¡acción!_

Ahora sí: Claude le pide a Higgsfield que lo genere.

#### Pasos

- En el mismo chat, pega:

```text
Perfecto. Usa Higgsfield para generar [la idea de la persona]. Usa mi foto de referencia.

Elige tú el modelo más adecuado y dime cuál has usado y por qué. Empieza con una sola versión para no gastar créditos de más.
```

> 💡 Si pides vídeo, puede tardar uno o dos minutos. Respira: es normal.

**✅ Comprobación:** ves la imagen o el vídeo en el chat, con un enlace para abrirlo.

### 6. Ajusta con cambios pequeños
_5 min · pulir_

Igual que en cocina: se prueba y se ajusta la sal. Un cambio cada vez.

#### Pasos

- Pide cambios concretos:

```text
Mantén todo igual, pero haz la luz un poco más cálida y acerca la cámara al producto. Cambia solo eso.
```

**Palabras que ayudan**

- **Luz**: suave, dorada, de ventana, de estudio.
- **Cámara**: plano cenital, primer plano, travelling lento.
- **Ambiente**: tranquilo, minimalista, acogedor, de película de los 70.

**✅ Comprobación:** la nueva versión se parece más a lo que tenías en la cabeza.

### 7. Descarga y guarda tu receta
_2 min · emplatar_

Guarda el resultado y también las palabras que lo crearon.

#### Pasos

- Abre el enlace del resultado y descárgalo (también lo tienes en tu biblioteca de Higgsfield).

- Pide a Claude:

```text
Escríbeme en un solo bloque la indicación final que ha funcionado, para poder reutilizarla con otros productos.
```

**✅ Comprobación:** tienes el archivo descargado y tu indicación guardada en una nota.

## Al terminar

Ya tienes tus primeras piezas generadas con Higgsfield desde Claude. Guarda la conversación: es tu receta para repetirlo con otros productos. Más abajo tienes extras: pasar de imagen a vídeo y cómo usarlo con responsabilidad.

## Extras (opcionales, después de servir)

### Extra 1. De imagen a vídeo
_10 min · opcional_

Una buena imagen puede convertirse en un clip corto con movimiento.

```text
Anima la última imagen: movimiento de cámara muy lento hacia delante, vapor suave y luz que cambia un poco. 8 segundos, formato vertical 9:16.
```

> 💡 Pide primero una versión corta. Si te gusta, pide variantes.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **El conector no aparece**: revisa que la URL esté bien copiada y vuelve a pulsar Conectar.
- **Pide iniciar sesión otra vez**: es normal de vez en cuando; vuelve a conectar.
- **Se queda sin créditos**: mira tu saldo en Higgsfield.
- **El resultado no se parece**: da una referencia más clara y pide un solo cambio cada vez.

### Extra 3. Úsalo con responsabilidad
_Siempre · consejos_

- No crees imágenes de **personas reales** sin su permiso.
- No imites **marcas ni personajes** que no son tuyos.
- Si publicas anuncios, indica que el contenido está **generado con IA** cuando la plataforma lo pida.
- Revisa los términos de uso comercial de tu plan.

## Sigue con

- `/amri:video-aftereffects` · Edita vídeo con Claude y After Effects
- `/amri:blender-3d` · Crea 3D con Claude y Blender
- `/amri:redes-sociales` · Tus redes sociales con Claude
- `/amri:animaciones-opus` · Animaciones con Claude Opus 5.5
- `/amri:chef` · combina varias recetas en un proyecto propio
