---
name: imagenes-ia
description: "Receta de AMRI «Crea imágenes con IA gratis». Genera ilustraciones, logos y fotos realistas con herramientas de IA gratuitas. Desde el prompt hasta el resultado. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Crea imágenes con IA gratis

Genera ilustraciones, logos y fotos realistas con herramientas de IA gratuitas. Desde el prompt hasta el resultado.

- ⏱ 30 min aprox.
- 👩‍🍳 Sin saber dibujar
- 💶 0 € para empezar
- 🍽 Resultado: imágenes listas para usar
- Categoría: Primeros pasos
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/imagenes-ia.html

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

- **Claude**: el jefe de cocina. Convierte tu idea en un buen prompt.
- **Bing Image Creator**: el horno. Genera las imágenes gratis.
- **Ideogram**: el pastelero. El que mejor escribe letras dentro de una imagen.
- **Canva**: el emplatado. Recorta, retoca y exporta.

## Ideas de ejemplo

- **Foto de producto:** una foto de producto de una taza de cerámica artesanal sobre una mesa de madera, luz de mañana
- **Post para redes:** una imagen para Instagram que anuncia la apertura de mi cafetería, ambiente acogedor
- **Cartel con texto:** un cartel para un concierto de jazz con el texto «Jazz en la terraza · 12 de julio»
- **Avatar / perfil:** un avatar estilo 3D amable de una persona sonriente con gafas, fondo liso
- **Portada con título:** la portada de un ebook de recetas veganas con el título «Verde y fácil»

## Antes de empezar

Pregunta a la persona: **¿La imagen tiene que llevar texto escrito?** Si dudas, elige «Sí»: te enseñamos la herramienta que mejor escribe letras. Si al final no lleva texto, funciona igual.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_5 min · crear cuentas_

Vas a crear cuatro cuentas gratuitas. Con una cuenta de Microsoft o Google entras en casi todas.

#### Pasos

- Crea tu cuenta en [Claude](https://claude.ai).

- Entra en [Bing Image Creator](https://www.bing.com/images/create) con una cuenta de Microsoft.

- Crea tu cuenta en [Ideogram](https://ideogram.ai) (botón «Continue with Google»).

- Crea tu cuenta en [Canva](https://www.canva.com).

**✅ Comprobación:** tienes las cuatro pestañas abiertas y has entrado en todas.

### 2. Pídele el prompt a Claude
_5 min · la receta de la imagen_

Un **prompt** es la descripción que le das a la IA. Cuanto más concreto, mejor sale. Claude te lo escribe por ti.

#### Pasos

- Abre un chat nuevo en Claude.
- Copia este mensaje y pégalo:

```text
Quiero crear [la idea de la persona].

Escríbeme 3 prompts distintos para un generador de imágenes con IA. Cada uno debe describir: el sujeto, el estilo (por ejemplo acuarela, 3D, fotografía), la luz, los colores y el encuadre. La imagen lleva texto: pon el texto exacto entre comillas y dime dónde colocarlo. Escríbelos en inglés, que funciona mejor, y explícame en español qué cambia entre uno y otro.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero crear…»**: tu idea. Cámbiala por la tuya.
- **Sujeto, estilo, luz, colores, encuadre**: los cinco ingredientes de un buen prompt.
- **Texto entre comillas**: así la IA sabe qué letras escribir exactamente.
- **En inglés**: los generadores entienden mejor el inglés, pero te lo explica en español.

> 💡 Describe lo que SÍ quieres. La IA entiende mal los «no»: en vez de «sin gente» escribe «una calle vacía».

**✅ Comprobación:** Claude te ha dado tres prompts y entiendes la diferencia entre ellos.

### 3. Hornea las primeras imágenes
_5 min · generar_

Pegas el prompt en el generador y en unos segundos te da varias versiones.

#### Pasos

- Abre **Ideogram**.

- Pega el primer prompt de Claude y pulsa **Generate**.

- Repite con los otros dos prompts.

- Descarga las que más te gusten.

> 💡 Cada generación tarda unos segundos. Si hay cola, espera un poco: no hace falta pulsar otra vez.

**No me deja generar o me da error**

- Algunas palabras están bloqueadas (violencia, famosos, marcas). Reformula con palabras neutras.
- Si has gastado tus créditos del día, prueba mañana o usa la otra herramienta.
- Revisa los límites gratuitos actuales en la página de cada herramienta.

**✅ Comprobación:** tienes al menos 3 imágenes descargadas en tu ordenador o móvil.

### 4. Ajusta la sazón
_5 min · mejorar el resultado_

Casi nunca sale perfecta a la primera. Elige la mejor y pídele a Claude que la mejore contigo.

#### Pasos

- Vuelve al mismo chat de Claude.
- Pega este mensaje (puedes adjuntar la imagen):

```text
Esta es la imagen que me ha salido con el prompt [pega el prompt]. Me gusta [lo que te gusta], pero quiero cambiar [lo que no te gusta]. Reescribe el prompt para corregirlo sin perder lo bueno.
```

> 💡 Cambia una sola cosa cada vez. Si cambias cinco a la vez, no sabrás cuál ha funcionado.

**✅ Comprobación:** tienes una imagen que te gusta de verdad.

### 5. Revisa las letras _(solo si la respuesta a «La imagen tiene que llevar texto escrito» es «Sí»)_
_5 min · que el texto se lea bien_

Las IAs a veces escriben letras raras o con faltas. Hay que revisarlo con lupa.

#### Pasos

- Lee el texto de la imagen letra por letra.

- Si hay un error pequeño, en Ideogram usa **Remix** con el mismo prompt y el texto entre comillas.

- Si sigue fallando, genera la imagen **sin texto** y añádelo después en Canva con la herramienta **Texto**.

> 💡 El truco profesional: fondo con IA y letras en Canva. Queda perfecto y puedes cambiar el texto cuando quieras.

**✅ Comprobación:** el texto se lee bien y no tiene faltas.

### 6. Emplata y sirve
_5 min · retocar y exportar_

Canva te permite recortar, ajustar el tamaño para cada red y exportar en el formato correcto.

#### Pasos

- En Canva pulsa **Crear diseño** y elige el tamaño (post de Instagram, historia, A4…).

- Pulsa **Subir** y arrastra tu imagen.

- Ajusta brillo y contraste en **Editar foto** si hace falta.

- Pulsa **Compartir → Descargar**: **PNG** para gráficos y **JPG** para fotos.

**✅ Comprobación:** tienes tu imagen final descargada con el tamaño correcto.

## Al terminar

Ya tienes tus imágenes. Guarda los prompts que mejor te han salido: son tus recetas secretas para repetir el estilo cuando quieras. Más abajo tienes extras para ir más allá: el mismo personaje en varias imágenes, editar fotos que ya tienes, dibujar iconos con Claude y tu chuleta de estilos.

## Extras (opcionales, después de servir)

### Extra 1. Crea una serie con el mismo estilo
_15 min · opcional_

Si necesitas varias imágenes que parezcan de la misma familia (para una web o una campaña), reutiliza tu receta.

#### Pasos

- Guarda en una nota el prompt que mejor te salió.
- Pídele a Claude:

```text
Este es mi prompt ganador: [pega el prompt]. Hazme 5 variaciones con sujetos distintos ([sujeto 1], [sujeto 2]...) pero manteniendo exactamente el mismo estilo, luz y colores.
```

> 💡 Usa siempre las mismas palabras de estilo. Cambiar «acuarela» por «pintura» ya cambia el resultado.

### Extra 2. El mismo personaje en varias imágenes
_15 min · opcional_

Para una mascota de marca, un cuento o un cómic necesitas que el personaje sea siempre el mismo. El truco: una **ficha de personaje** y una **imagen de referencia**.

#### Pasos

- Pídele a Claude la ficha:

```text
Mi personaje es [descríbelo]. Escríbeme una ficha de personaje en inglés para generadores de imágenes: rasgos de la cara, pelo, ropa con colores exactos, proporciones y estilo de dibujo. Después dame 4 prompts que reutilicen la ficha palabra por palabra, cada uno en una escena distinta: [escena 1], [escena 2]…
```

- Genera la primera imagen y quédate con la mejor: será tu **referencia**.
- En las siguientes, pega la ficha completa y, si tu herramienta permite subir una imagen de referencia, sube esa.

> 💡 No cambies ni una palabra de la ficha. Cambia solo la escena: lo que hace el personaje y dónde está.

**✅ Comprobación:** tienes al menos 3 imágenes en las que se reconoce al mismo personaje.

### Extra 3. Edita una imagen que ya tienes
_10 min · opcional_

No siempre hay que empezar de cero: puedes quitar el fondo, borrar un objeto, ampliar el encuadre o cambiar una parte de una foto tuya.

#### Qué herramienta usar

- **Quitar el fondo o borrar un objeto**: en Canva, sube la foto y abre **Editar**. Algunas de estas funciones son solo de Canva Pro.

- **Ampliar o cambiar una zona**: en Ideogram, sube tu imagen y usa sus herramientas de edición para pintar la zona que quieres cambiar.

- Antes de editar, pídele a Claude la instrucción exacta:

```text
Te adjunto una foto. Quiero [quitar el fondo / ampliar el encuadre a lo ancho / cambiar la camiseta por una azul]. Dime qué herramienta gratuita me conviene, los pasos y el texto exacto que debo escribir en inglés para la zona que voy a cambiar.
```

> 💡 Edita solo fotos tuyas o con permiso. Nunca cambies la cara de una persona real ni hagas que parezca que dijo o hizo algo que no ocurrió.

**✅ Comprobación:** tienes la versión editada y la original guardadas por separado.

### Extra 4. Dibuja con Claude: iconos y gráficos
_10 min · opcional_

Claude no genera fotos, pero sí **dibuja con código**: iconos, logotipos sencillos, diagramas y fondos en formato **SVG**. Un SVG se ve nítido a cualquier tamaño y puedes cambiarle los colores cuando quieras.

#### Pasos

- En un chat de Claude, pega:

```text
Dibújame en SVG un set de 6 iconos para [tu tema]: [icono 1], [icono 2]… Estilo de línea, trazo redondeado de 2 px, 24×24, todos coherentes. Muéstramelos juntos en un artefacto y dame el código de cada uno por separado.
```

- Pide cambios con palabras: «más grueso», «esquinas redondas», «usa mi color #E07A5F».
- Copia el código de cada icono y guárdalo como `icono.svg`. Canva y casi cualquier web lo aceptan.

> 💡 Para fotos e ilustraciones realistas usa los generadores de esta receta. Para iconos, diagramas y gráficos limpios, Claude es más preciso.

**✅ Comprobación:** tienes tus iconos en SVG y se ven nítidos al ampliarlos.

### Extra 5. Tu chuleta de estilos
_10 min · opcional_

Aprender a nombrar estilos es lo que más mejora tus imágenes. Hazte una chuleta probando el mismo sujeto en varios estilos.

```text
Hazme una chuleta de 12 estilos para generadores de imágenes, en una tabla: nombre del estilo en inglés, qué aspecto da, para qué lo usaría y 3 palabras clave que lo provocan. Incluye acuarela, 3D, fotografía de producto, flat, risograph, cine y pixel art. Después escribe un prompt base de «[la idea de la persona]» que pueda repetir cambiando solo el estilo.
```

> 💡 Genera el mismo prompt en 4 estilos y guarda las imágenes juntas: verás de un vistazo cuál encaja con tu marca.

**✅ Comprobación:** tienes tu chuleta guardada con un ejemplo de cada estilo que te gusta.

### Extra 6. Úsalas con tranquilidad
_Siempre · consejos_

Unas reglas sencillas para no llevarte sustos.

- **Revisa las condiciones** de cada herramienta antes de un uso comercial: cambian con el tiempo.

- **No imites a personas reales** ni marcas registradas.

- **Revisa manos, ojos y detalles**: es donde la IA más se equivoca.

- **Guarda tus prompts** en una carpeta: son tu recetario personal.

**💡 Ideas para seguir cocinando**

- Fondos para tu web o presentaciones.
- Ilustraciones para un cuento infantil.
- Mockups de producto antes de fabricarlo.
- Iconos para tu app con el mismo estilo.

## Sigue con

- `/amri:asistente-ia` · Tu asistente personal con IA
- `/amri:logo-ia` · Diseña un logo con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
