---
name: higgsfield-cine
description: "Receta de AMRI «Imágenes y vídeos de cine con Higgsfield». Un libro con 7 recetas: foto de producto, vídeo realista, vídeo UGC, animación, foto a vídeo, personajes y anuncios. Hablando en español con Claude. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Imágenes y vídeos de cine con Higgsfield

Un libro con 7 recetas: foto de producto, vídeo realista, vídeo UGC, animación, foto a vídeo, personajes y anuncios. Hablando en español con Claude.

- 📕 7 recetas
- ⏱ 20-40 min cada una
- 💶 Higgsfield usa créditos (hay prueba)
- 🍽 Resultado: imágenes y vídeos listos para publicar
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «publicable» de Supabase, antes llamada «anon») sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes

- **Claude**: el director. Entiende tu idea y escribe las indicaciones técnicas.
- **Higgsfield**: el estudio de rodaje. Genera imágenes y vídeos con varios modelos de IA. Funciona con créditos.
- **El conector de Higgsfield**: el ayudante de dirección. Lleva las órdenes de Claude al estudio.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 7 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_5 min · cuentas_

Necesitas dos cuentas: una en Claude y otra en Higgsfield.

#### Pasos

- Entra en [Claude](https://claude.ai) (web o app de escritorio).

- Crea una cuenta en [Higgsfield](https://higgsfield.ai).

- Mira cuántos créditos tienes. Cada imagen gasta créditos, y el vídeo gasta bastantes más que la imagen.

> 💡 Los planes y los precios de Higgsfield cambian a menudo. Míralos en su web antes de empezar para no llevarte sorpresas.

**✅ Comprobación:** puedes entrar en las dos cuentas.

### 2. Conecta Higgsfield con Claude
_3 min · el conector_

Higgsfield tiene su propio conector. Se añade pegando una dirección web.

#### Pasos

- En Claude abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).

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

### 3. Crea tu estudio en Claude
_5 min · las reglas_

Un proyecto de Claude guarda tus reglas para siempre. Así no gastas créditos sin querer y no repites lo mismo en cada receta.

#### Pasos

- En Claude pulsa **Proyectos → Crear proyecto** y llámalo **Mi estudio**.

- En **Instrucciones**, pega:

```text
Eres mi director de fotografía y usas Higgsfield para generar imágenes y vídeos.

Reglas:
- Antes de generar nada, dime qué vas a hacer, con qué modelo y cuántos créditos gastará más o menos. Espera mi OK.
- Empieza siempre con una sola versión. Si me gusta, hacemos variantes.
- Después de cada resultado, dime qué cambiarías para mejorarlo.
- Cuando algo funcione, escríbeme la indicación final en un bloque para guardarla.
- Háblame sin tecnicismos.
```

> 💡 Abre siempre los chats de las recetas **dentro de este proyecto**. Así Claude recuerda estas reglas.

**✅ Comprobación:** tienes el proyecto «Mi estudio» con sus instrucciones.

### 4. Tu primera prueba
_3 min · barata_

Una prueba pequeña para comprobar que todo funciona antes de gastar créditos en algo grande.

#### Abre un chat en «Mi estudio» y pega

```text
Usa Higgsfield para generar una sola imagen de prueba: una taza de café sobre una mesa de madera, con luz suave de mañana. Dime qué modelo has usado y cuántos créditos ha gastado.
```

> 💡 Si Claude no encuentra Higgsfield, vuelve al paso 2 y comprueba que el conector está activado en ese chat (**+ → Conectores**).

**✅ Comprobación:** ves la imagen en el chat y sabes cuánto ha costado.

## Recetas del libro

### Receta 1: Foto de producto de estudio

Fotos de tu producto que parecen hechas en un estudio profesional, a partir de una foto con el móvil.

- ⏱ 25 min
- 👩‍🍳 Fácil
- 🖼 Imagen
- 🍽 Resultado: 3 fotos de producto listas para tu tienda o redes
- Versión web: https://amri.es/recetas/higgsfield-cine--foto-producto.html
- Ideas de ejemplo:
  - Fondo de estudio: mi producto sobre un fondo liso color crema, con luz suave de estudio y una sombra delicada
  - En un ambiente real: mi producto en una escena real y cuidada (por ejemplo, una cocina luminosa), como si alguien lo estuviera usando
  - Fondo blanco para tienda online: mi producto sobre fondo blanco puro, centrado y bien iluminado, como en un catálogo de tienda online
  - Foto creativa: mi producto flotando en el aire con elementos que lo rodean (gotas, hojas o ingredientes), con mucho color

#### 1. Haz una buena foto de referencia
_5 min · con el móvil_

La IA necesita ver tu producto de verdad para que salga igual. Una foto normal sirve, si está bien hecha.

- Pon el producto junto a una ventana, con luz de día.
- Hazle una foto de frente, entera, sobre un fondo liso.
- Que se lean bien el logo y la etiqueta.

> 💡 Mejor 2 o 3 fotos: de frente, de lado y un detalle. Cuanto más clara la referencia, más fiel el resultado.

**✅ Comprobación:** tienes una foto nítida de tu producto.

#### 2. Pide el plan al fotógrafo
_5 min · sin gastar_

Abre un chat dentro de **Mi estudio**, arrastra tu foto al chat y pega:

```text
Esta es mi foto de producto. Quiero [la idea de la persona].

El producto tiene que verse igual: misma forma, mismos colores, mismo logo. Cambia solo el fondo, la luz y el encuadre.

Antes de generar, propón 3 ideas de foto en una frase cada una y espera a que elija.
```

**✅ Comprobación:** Claude te ha propuesto 3 ideas y has elegido una.

#### 3. Genera la primera foto
_5 min · ¡clic!_

```text
Genera la idea que he elegido con Higgsfield, usando mi foto como referencia. Una sola versión.
```

> 💡 Mira con lupa el logo y las letras: es donde la IA más se equivoca. Si salen mal, díselo: «el logo debe ser idéntico al de la foto».

**✅ Comprobación:** tienes una foto en la que tu producto se reconoce.

#### 4. Ajusta y saca la serie
_5 min · tres fotos_

Un cambio cada vez. Cuando la foto te guste, pide la serie con el mismo estilo.

```text
Me gusta. Ahora haz dos más con la misma luz y el mismo fondo: una de cerca, mostrando un detalle, y otra un poco más abierta. Formato 4:5.
```

**✅ Comprobación:** tienes 3 fotos que parecen de la misma sesión.

#### 5. Descarga y guarda la receta
_2 min · emplatar_

- Descarga las fotos (también están en tu biblioteca de Higgsfield).
- Pide a Claude:

```text
Escríbeme en un solo bloque la indicación final que ha funcionado, para repetirla con mis otros productos.
```

**✅ Comprobación:** tienes las fotos y tu indicación guardada.

**Al terminar:** Ya tienes una serie de fotos de producto. Guarda la indicación final: la próxima vez solo tendrás que cambiar la foto de referencia.

### Receta 2: Vídeo realista de cine

Un plano corto que parece rodado con una cámara de cine: paisaje, comida, ciudad o tu producto.

- ⏱ 30 min
- 👩‍🍳 Fácil
- 🎥 Vídeo
- 🍽 Resultado: un clip de 5 a 10 segundos
- Versión web: https://amri.es/recetas/higgsfield-cine--video-realista.html
- Ideas de ejemplo:
  - Comida: un plato recién hecho humeando sobre una mesa de madera, con la cámara acercándose muy despacio
  - Paisaje: un amanecer sobre montañas con niebla, visto desde un dron que avanza despacio
  - Ciudad: una calle de ciudad de noche con lluvia y luces de neón reflejadas en el suelo
  - Producto en escena: mi producto sobre una mesa mientras la cámara gira despacio a su alrededor, con luz cálida

#### 1. Escribe el plano
_5 min · el guion_

Un buen plano se describe en cuatro cosas: qué se ve, cómo se mueve la cámara, qué luz hay y cuánto dura.

```text
Quiero un plano de vídeo realista: [la idea de la persona].

Escríbelo como lo haría un director de fotografía: qué se ve, movimiento de cámara, luz, ambiente y duración (máximo 8 segundos). Propón 2 versiones y espera a que elija.
```

**✅ Comprobación:** tienes un plano descrito que te gusta.

#### 2. Elige el movimiento
_2 min · la cámara_

El movimiento de cámara es lo que hace que parezca cine. Elige **uno solo**:

- **Acercarse despacio**: íntimo, para comida o producto.
- **Girar alrededor**: para enseñar un objeto.
- **Dron que avanza**: para paisajes.
- **Cámara fija**: para que lo que se mueva sea la escena.

```text
Usa este movimiento de cámara: [el que elijas]. Que sea lento y suave.
```

**✅ Comprobación:** has elegido un movimiento.

#### 3. Genera una versión corta
_5 min · ¡acción!_

```text
Genera el plano con Higgsfield. Elige el modelo de vídeo más realista para esto y dime cuál usas. Una sola versión, de unos 5 segundos.
```

> 💡 El vídeo tarda más que la imagen: uno o dos minutos es normal.

**✅ Comprobación:** tienes un clip que puedes ver en el chat.

#### 4. Revisa los fallos típicos
_5 min · con lupa_

La IA suele fallar en lo mismo. Mira el clip dos veces fijándote en:

- **Manos y caras**: dedos de más, gestos raros.
- **Letras**: carteles y etiquetas con texto inventado.
- **Física**: cosas que atraviesan otras o cambian de forma.

```text
He visto este fallo: [descríbelo]. Corrígelo cambiando solo eso.
```

> 💡 Si necesitas un texto en el vídeo (un precio, tu web), no lo pidas a la IA: añádelo después con Canva o CapCut.

**✅ Comprobación:** el clip no tiene fallos que distraigan.

#### 5. Variantes y descarga
_3 min · emplatar_

```text
Me gusta. Haz una variante en formato vertical 9:16 para redes, igual en todo lo demás. Después escríbeme la indicación final en un bloque.
```

**✅ Comprobación:** tienes el clip en horizontal y en vertical, y la indicación guardada.

**Al terminar:** Tienes tu plano de cine. Junta varios y ya tienes un vídeo: mira la receta «Anuncio vertical para redes».

### Receta 3: Vídeo UGC: alguien recomienda tu producto

El estilo de vídeo de redes en el que una persona habla a cámara y enseña un producto, hecho con IA.

- ⏱ 40 min
- 👩‍🍳 Media
- 🎥 Vídeo con voz
- 🍽 Resultado: un vídeo vertical de 15 segundos
- Versión web: https://amri.es/recetas/higgsfield-cine--video-ugc.html
- Ideas de ejemplo:
  - Reseña a cámara: una persona enseña mi producto a cámara, en su casa, y cuenta en 15 segundos qué problema le resuelve
  - Unboxing: una persona abre la caja de mi producto sobre una mesa, lo saca y cuenta su primera impresión
  - Cómo se usa: una persona enseña en 3 pasos rápidos cómo se usa mi producto
  - Probador de ropa: una persona se prueba mi prenda frente al espejo y cuenta cómo le queda

#### 1. El guion de 15 segundos
_10 min · lo que dice_

Un vídeo UGC funciona si engancha en los primeros 2 segundos. Claude escribe el guion como habla la gente de verdad.

```text
Quiero un vídeo UGC vertical de 15 segundos: [la idea de la persona].

Escribe el guion hablado, en español natural y cercano, con esta estructura:
1) Gancho (2 s): una frase que haga parar de deslizar.
2) Problema (3 s).
3) El producto y qué hace (6 s).
4) Final con una invitación (4 s).

Dame 2 ganchos distintos para probar. Nada de promesas que el producto no cumpla.
```

**✅ Comprobación:** tienes un guion que suena a persona, no a anuncio de la tele.

#### 2. Quién lo cuenta
_5 min · la persona_

Describe a la persona: edad aproximada, estilo, dónde está. Claude la prepara.

```text
Describe a la persona que lo cuenta: [edad, estilo, ropa, lugar]. Que sea una persona inventada, que no se parezca a nadie famoso. Genera con Higgsfield una imagen de ella en ese lugar, mirando a cámara, en vertical.
```

> 💡 La persona debe encajar con quien compra tu producto. Si vendes a jubilados, no pongas a un adolescente.

> 💡 ¿Prefieres salir tú o alguien real? Mira el extra «Si sale una persona real», al final de la receta.

**✅ Comprobación:** tienes la imagen de la persona que va a hablar.

#### 3. Genera el vídeo
_10 min · ¡que hable!_

```text
Usa Higgsfield para crear el vídeo UGC: la persona de la imagen dice el guion con el gancho 1, mirando a cámara, en vertical 9:16, con un estilo natural como grabado con el móvil. Usa el flujo de UGC o de vídeo que hable que tengas disponible y dime cuál eliges.
```

**¿Y si Claude dice que no puede?**

- Algunas funciones de vídeo que habla solo están en la web de Higgsfield.
- Pide a Claude: «Dame el guion y la descripción listos para pegarlos en la web de Higgsfield».
- En la web, busca la sección de **UGC** o de **Lipsync** (vídeo que habla), sube la imagen de la persona y pega el guion.

**✅ Comprobación:** tienes un vídeo en el que la persona dice tu guion.

#### 4. Revisa que se crea
_5 min · con lupa_

- ¿La boca va a la vez que la voz?
- ¿Se pronuncian bien el nombre de tu marca y del producto?
- ¿El producto se ve igual que el de verdad?

```text
He visto esto: [el fallo]. Corrígelo y deja todo lo demás igual.
```

> 💡 Si una palabra se pronuncia mal, escríbela como suena en el guion (por ejemplo, «Glouri» en lugar de «Glowry»).

**✅ Comprobación:** el vídeo se ve natural de principio a fin.

#### 5. Etiquétalo y publícalo
_3 min · con honestidad_

Un vídeo UGC hecho con IA es **publicidad**, no la opinión de un cliente real. Dilo claro:

- Marca la publicación como **contenido hecho con IA** con la opción de la red social.
- Marca que es un **anuncio o colaboración** si la red lo pide.
- No lo presentes como una reseña de un cliente real: eso es engañoso y en la Unión Europea está prohibido.

**✅ Comprobación:** tu vídeo está publicado y etiquetado.

#### Extra 1. Si sale una persona real
_Opcional · permiso y fotos_

- Pide permiso **por escrito** a la persona (un mensaje vale) para usar su cara y su voz con IA, y explica dónde se publicará.
- Hazle 3 fotos claras: de frente, con buena luz y sin gafas de sol.
- Sube las fotos al chat y pide a Claude que las use como referencia.

> 💡 ⚠️ Nunca uses la cara o la voz de alguien sin su permiso, aunque sea un amigo.

**✅ Comprobación:** tienes el permiso y las fotos.

**Al terminar:** Tienes tu vídeo UGC. Pruébalo con dos frases de inicio distintas y quédate con la que mejor funcione.

### Receta 4: Vídeo animado: ilustración, 3D o papel

Una escena animada con el estilo que elijas, para contar una historia o explicar algo.

- ⏱ 35 min
- 👩‍🍳 Media
- 🎞 Animación
- 🍽 Resultado: 2 o 3 planos animados con el mismo estilo
- Versión web: https://amri.es/recetas/higgsfield-cine--video-animado.html
- Ideas de ejemplo:
  - Ilustración 2D: una escena animada en estilo ilustración de cuento, con colores suaves de acuarela
  - 3D de película: una escena animada en 3D, con personajes redondeados y luz cálida, como una película de animación
  - Papel recortado: una escena animada hecha con papel recortado, como un diorama, con textura de cartulina
  - Vídeo que explica algo: un vídeo animado sencillo, con dibujos planos, que explica en 3 pasos cómo funciona mi servicio

#### 1. Elige el estilo con palabras
_5 min · el aspecto_

Describe el estilo por sus rasgos, no con el nombre de un estudio de cine: así el resultado es tuyo y no una copia.

```text
Quiero [la idea de la persona].

Describe el estilo visual en 5 rasgos (formas, colores, texturas, luz y tipo de movimiento) y propón un guion de 3 planos cortos. No uses nombres de estudios ni de películas.
```

**✅ Comprobación:** tienes el estilo descrito y un guion de 3 planos.

#### 2. Crea el fotograma clave
_5 min · primero, imagen_

Primero una imagen fija del plano 1. Es más barato que un vídeo y fija el estilo para los demás.

```text
Genera con Higgsfield la imagen del plano 1 con ese estilo, en formato 16:9. Una sola versión.
```

**✅ Comprobación:** tienes una imagen con el estilo que buscabas.

#### 3. Anima el plano
_10 min · movimiento_

```text
Anima esa imagen: [qué se mueve: el personaje camina, las hojas caen…]. Movimiento suave, unos 5 segundos. Mantén el estilo exactamente igual.
```

> 💡 Pide un solo movimiento por plano. Si pides muchos a la vez, la animación se vuelve rara.

**✅ Comprobación:** tienes el plano 1 animado.

#### 4. Los demás planos, con el mismo estilo
_10 min · coherencia_

```text
Ahora haz los planos 2 y 3. Usa la imagen del plano 1 como referencia de estilo y de personaje, para que todo parezca de la misma película. Primero la imagen, después la animación.
```

**✅ Comprobación:** tienes 3 planos que parecen del mismo vídeo.

#### 5. Descarga y guarda el estilo
_2 min · emplatar_

```text
Escríbeme en un bloque la descripción del estilo y las indicaciones de los 3 planos, para seguir la historia otro día.
```

**✅ Comprobación:** tienes los vídeos y la ficha de estilo guardada.

**Al terminar:** Tienes tus planos animados con un estilo coherente. Únelos en CapCut o Canva y añade música.

### Receta 5: De foto a vídeo: dale vida a una imagen

Convierte una foto que ya tienes en un clip corto con movimiento.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🎥 Vídeo
- 🍽 Resultado: un clip de 5 segundos a partir de tu foto
- Versión web: https://amri.es/recetas/higgsfield-cine--foto-a-video.html
- Ideas de ejemplo:
  - Foto de producto: mi foto de producto, con un giro lento de cámara y un brillo de luz que pasa por encima
  - Mi local o mi casa: la foto de mi local, con gente que pasa difuminada y la luz cambiando un poco
  - Paisaje: mi foto de paisaje, con nubes que se mueven y el agua o la hierba en movimiento
  - Ilustración: mi ilustración, con movimientos suaves: el pelo, el humo o las hojas se mueven

#### 1. Elige bien la foto
_3 min · la base_

- Nítida y con buena luz.
- Que sea tuya o tengas permiso para usarla.
- Si salen personas, que hayan dado su permiso.

**✅ Comprobación:** tienes la foto elegida.

#### 2. Decide un solo movimiento
_3 min · menos es más_

Sube la foto al chat dentro de **Mi estudio** y pega:

```text
Quiero animar esta foto: [la idea de la persona].

Propón 3 movimientos sencillos (uno de cámara y dos de cosas de la escena) y dime cuál quedará más natural.
```

**✅ Comprobación:** has elegido un movimiento.

#### 3. Genera el clip
_5 min · ¡que se mueva!_

```text
Anima la foto con Higgsfield con el movimiento elegido. Unos 5 segundos, movimiento lento. Mantén la imagen igual: no cambies caras, textos ni colores.
```

**✅ Comprobación:** tienes un clip que empieza igual que tu foto.

#### 4. Ajusta la velocidad
_5 min · pulir_

```text
Hazlo un poco más lento y suave. No cambies nada más.
```

> 💡 Si algo se deforma (una cara, un logo), pide que esa parte se quede quieta.

**✅ Comprobación:** el movimiento se ve natural.

#### 5. Haz un bucle para redes
_4 min · opcional_

```text
Haz una versión en bucle: que el final enlace con el principio para que se repita sin cortes. Formato vertical 9:16.
```

**✅ Comprobación:** tienes el clip listo para publicar.

**Al terminar:** Tu foto ya se mueve. Prueba con un bucle para que se repita sin cortes en redes.

### Receta 6: Un personaje que siempre sale igual

Crea la mascota o el presentador de tu marca y úsalo en todas tus imágenes y vídeos.

- ⏱ 40 min
- 👩‍🍳 Media
- 🧑‍🎨 Personaje
- 🍽 Resultado: tu personaje en varias escenas, siempre reconocible
- Versión web: https://amri.es/recetas/higgsfield-cine--personaje.html
- Ideas de ejemplo:
  - Mascota de marca: una mascota amable que represente a mi marca, ilustrada, con colores de la marca
  - Presentador realista: una persona inventada y realista que presente los vídeos de mi marca, siempre con el mismo estilo
  - Personaje de cuento: el protagonista de un cuento infantil, con un rasgo especial que lo haga único

#### 1. La ficha del personaje
_10 min · con Claude_

Antes de dibujar, se escribe. La ficha es lo que hace que el personaje salga siempre igual.

```text
Quiero crear [la idea de la persona].

Hazme 5 preguntas sobre su personalidad y su aspecto. Después escribe su ficha: nombre, rasgos físicos fijos (forma, colores, ropa, un detalle único) y cómo se mueve y habla. Que no se parezca a ningún personaje existente.
```

**✅ Comprobación:** tienes la ficha escrita.

#### 2. Sus primeras imágenes
_10 min · 3 vistas_

```text
Con esa ficha, genera con Higgsfield 3 imágenes del personaje con el mismo estilo: de frente, de lado y de cuerpo entero, sobre fondo liso. Primero una, y si me gusta, las otras dos.
```

> 💡 Elige la versión que más te guste y descarta las demás: a partir de aquí, esa es la «buena».

**✅ Comprobación:** tienes 3 imágenes en las que es claramente el mismo personaje.

#### 3. Que Higgsfield lo recuerde
_10 min · fijarlo_

Higgsfield puede guardar un personaje para que salga igual en todas las generaciones (se llama **Soul ID**). Necesita de 3 a 5 imágenes buenas.

```text
¿Puedes crear un personaje guardado en Higgsfield con estas imágenes? Si no se puede desde aquí, explícame cómo hacerlo en la web, paso a paso.
```

**Si lo haces en la web**

- Busca la opción de crear personaje (Soul ID).
- Sube las 3 a 5 imágenes de tu personaje.
- Ponle el nombre de la ficha. Crear el personaje gasta créditos.

**✅ Comprobación:** tu personaje está guardado en Higgsfield, o tienes sus imágenes listas para usarlas de referencia.

#### 4. Ponlo en escena
_8 min · a trabajar_

```text
Genera a mi personaje en esta escena: [dónde está y qué hace]. Que sea exactamente el mismo: usa el personaje guardado o las imágenes como referencia.
```

**✅ Comprobación:** el personaje se reconoce en una escena nueva.

#### 5. Guarda la ficha en tu estudio
_2 min · para siempre_

- Copia la ficha del paso 1.
- En el proyecto **Mi estudio**, pulsa **Añadir contenido** y pégala junto con las 3 imágenes.

**✅ Comprobación:** en cualquier chat del estudio, Claude sabe cómo es tu personaje.

**Al terminar:** Tu personaje ya tiene ficha y se reconoce en cada escena. Úsalo en las otras recetas del libro: anuncios, animación o vídeo UGC.

### Receta 7: Anuncio vertical para redes

Un anuncio de 15 segundos para Reels, TikTok o Shorts, con 3 planos, tu logo y música.

- ⏱ 40 min
- 👩‍🍳 Media
- 📱 Vídeo vertical
- 🍽 Resultado: un anuncio de 15 segundos listo para publicar
- Versión web: https://amri.es/recetas/higgsfield-cine--anuncio-redes.html
- Ideas de ejemplo:
  - Lanzamiento: el lanzamiento de mi nuevo producto, con un plano final con el producto y mi logo
  - Oferta: una oferta de tiempo limitado, que se entienda en los primeros 3 segundos
  - Marca personal: un anuncio de mi servicio como profesional, cercano y que transmita confianza
  - Evento: un evento con fecha y lugar, que dé ganas de ir

#### 1. Tres planos y un mensaje
_10 min · el guion_

```text
Quiero un anuncio vertical de 15 segundos para redes: [la idea de la persona].

Propón un guion de 3 planos:
1) Gancho visual (3 s): algo que haga parar de deslizar.
2) El producto o el servicio en acción (8 s).
3) Final con el producto y espacio para mi logo (4 s).

Dame también el texto corto que pondré encima de cada plano y 2 ganchos alternativos.
```

**✅ Comprobación:** tienes el guion de 3 planos y los textos.

#### 2. Genera los 3 planos
_15 min · rodaje_

```text
Genera con Higgsfield los 3 planos en vertical 9:16, con la misma luz y los mismos colores para que parezcan del mismo anuncio. Uno a uno: enséñame cada plano antes de hacer el siguiente.
```

> 💡 Si sale tu producto, sube su foto de referencia antes de empezar.

**✅ Comprobación:** tienes los 3 clips.

#### 3. Texto, logo y música
_10 min · montaje_

Los textos y la música se ponen fuera de Higgsfield, en una app de edición sencilla como CapCut o Canva.

- Une los 3 clips en orden.
- Pon encima los textos que te dio Claude, grandes y en la parte central.
- Pon tu logo en el último plano.
- Añade música de la biblioteca de la app (así no tienes problemas de derechos).

**✅ Comprobación:** tu anuncio dura unos 15 segundos y se entiende sin sonido.

#### 4. Prueba dos versiones
_5 min · aprender_

```text
Genera otra versión solo del primer plano, con el gancho alternativo 2, para probar cuál funciona mejor.
```

> 💡 Publica las dos versiones con unos días de diferencia y compara cuánta gente ve el vídeo hasta el final.

**✅ Comprobación:** tienes dos versiones del anuncio listas.

**Al terminar:** Tienes tu anuncio. Publica dos versiones con distinto principio y mira cuál funciona mejor.

## Al terminar

Tu estudio está listo. Ahora elige una receta del libro: todas parten de aquí.

## Extras (opcionales, después de servir)

### Extra 1. Palabras de cine
_Siempre · chuleta_

No hace falta saber de cine: Claude las usa por ti. Pero conocerlas te ayuda a pedir mejor.

**Luz**

- **Suave**: sin sombras duras, como un día nublado.
- **Dorada**: la del amanecer o el atardecer.
- **De ventana**: entra de lado, muy natural.
- **De estudio**: limpia y controlada, para producto.

**Cámara**

- **Primer plano**: muy cerca, se ven detalles.
- **Plano general**: se ve todo el sitio.
- **Cenital**: desde arriba, mirando hacia abajo.
- **Travelling**: la cámara avanza o se desliza despacio.
- **Órbita**: la cámara gira alrededor del objeto.
- **Cámara en mano**: se mueve un poco, como grabado con el móvil.

**Formato**

- **9:16**: vertical, para Reels, TikTok y Shorts.
- **1:1**: cuadrado.
- **4:5**: vertical corto, para publicaciones de Instagram.
- **16:9**: horizontal, para YouTube o la web.

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **El conector no aparece**: revisa que la dirección esté bien copiada y vuelve a pulsar Conectar.
- **Pide iniciar sesión otra vez**: es normal de vez en cuando; vuelve a conectar.
- **Se queda sin créditos**: mira tu saldo en Higgsfield.
- **Claude dice que no puede hacer algo**: pídele el texto exacto para pegarlo tú en la web de Higgsfield. Algunas funciones solo están en la web.
- **El resultado no se parece a lo que pedías**: da una referencia más clara y pide un solo cambio cada vez.

### Extra 3. Úsalo con responsabilidad
_Siempre · importante_

- No crees imágenes ni vídeos de **personas reales** sin su permiso.
- No imites **marcas, famosos ni personajes** que no son tuyos.
- Si publicas contenido con personas o escenas realistas hechas con IA, **indícalo** («Hecho con IA»). Las normas europeas lo exigen en muchos casos, y las redes sociales tienen su propia etiqueta.
- Revisa los términos de uso comercial de tu plan de Higgsfield.

## Sigue con

- `/amri:video-aftereffects` · Edita vídeo con Claude y After Effects
- `/amri:blender-3d` · Crea 3D con Claude y Blender
- `/amri:redes-sociales` · Tus redes sociales con Claude
- `/amri:animaciones-opus` · Animaciones con Claude Opus 5.5
- `/amri:chef` · combina varias recetas en un proyecto propio
