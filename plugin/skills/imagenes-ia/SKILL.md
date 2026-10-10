---
name: imagenes-ia
description: "Receta de AMRI «Crea imágenes con IA gratis». Ilustraciones, fotos de producto, carteles con texto, edición de fotos e iconos. Con herramientas gratuitas. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Crea imágenes con IA gratis

Ilustraciones, fotos de producto, carteles con texto, edición de fotos e iconos. Con herramientas gratuitas.

- 📕 5 recetas
- 💶 Gratis
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «publicable» de Supabase, antes llamada «anon») sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes (todos gratuitos)

- **Claude**: el jefe de cocina. Convierte tu idea en una buena descripción.
- **Bing Image Creator**: el horno. Genera las imágenes gratis.
- **Ideogram**: el pastelero. El que mejor escribe letras dentro de una imagen.
- **Canva**: el emplatado. Recorta, retoca y exporta.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_cuentas gratis_

- Crea tu cuenta en [Claude](https://claude.ai).

- Entra en [Bing Image Creator](https://www.bing.com/images/create) con una cuenta de Microsoft.

- Crea tu cuenta en [Ideogram](https://ideogram.ai).

- Crea tu cuenta en [Canva](https://www.canva.com).

> 💡 Los límites gratuitos de cada herramienta cambian. Si te quedas sin créditos en una, prueba con la otra o espera al día siguiente.

**✅ Comprobación:** has entrado en todas.

### 2. La fórmula de una buena descripción
_cinco ingredientes_

A la descripción que le das a la IA se le llama **prompt**. Una buena tiene cinco ingredientes:

- **Sujeto**: qué sale.
- **Estilo**: acuarela, 3D, fotografía…
- **Luz**: suave, de atardecer, de estudio.
- **Colores**.
- **Encuadre**: de cerca, desde arriba, de cuerpo entero.

> 💡 Describe lo que SÍ quieres. La IA entiende mal los «no»: en vez de «sin gente», escribe «una calle vacía».

**✅ Comprobación:** sabrías decir los cinco ingredientes.

### 3. Crea el proyecto «Mis imágenes»
_las reglas_

- En Claude crea un proyecto llamado **Mis imágenes**.
- En sus instrucciones, pega:

```text
Me ayudas a crear imágenes con generadores de IA gratuitos (Bing Image Creator e Ideogram).

Cuando te pida una imagen, escríbeme 3 prompts en inglés con sujeto, estilo, luz, colores y encuadre, y explícame en español qué cambia entre ellos. Si lleva texto, pon el texto exacto entre comillas. Cuando algo funcione, guárdalo en un bloque para reutilizarlo.
```

**✅ Comprobación:** tienes el proyecto con sus instrucciones.

## Recetas del libro

### Receta 1: Una ilustración con tu estilo

Para una camiseta, un cuento, tu web o una tarjeta.

- 👩‍🍳 Fácil
- 🎨 Ilustración
- 🍽 Resultado: una ilustración que te gusta
- Versión web: https://amri.es/recetas/imagenes-ia--ilustracion.html
- Ideas de ejemplo:
  - Cuento: una ilustración de cuento, colorida y amable, de un zorro leyendo en un bosque de otoño
  - Camiseta: una ilustración sencilla y con fondo liso para estampar en una camiseta
  - Para mi web: una ilustración plana y limpia para la portada de mi web

#### 1. Tres prompts
_Claude escribe_

```text
Quiero [la idea de la persona]. Dame 3 prompts con estilos distintos.
```

**✅ Comprobación:** tienes 3 prompts y entiendes la diferencia.

#### 2. Genera
_el horno_

- Abre **Bing Image Creator**, pega el primer prompt y pulsa **Crear**.
- Repite con los otros dos.
- Descarga la que más te guste.

> 💡 Si te da error, puede que alguna palabra esté bloqueada (famosos, marcas). Reformula.

**✅ Comprobación:** tienes una imagen favorita.

#### 3. Ajusta
_un cambio cada vez_

```text
Me ha salido esto con el prompt [pégalo]. Me gusta [qué], pero quiero cambiar [qué]. Reescribe el prompt cambiando solo eso.
```

**✅ Comprobación:** tienes la ilustración como querías.

**Al terminar:** Tienes tu ilustración. Guarda el prompt ganador para repetir el estilo.

### Receta 2: Foto de producto realista

Tu producto en una escena bonita, como de catálogo.

- 👩‍🍳 Fácil
- 📸 Producto
- 🍽 Resultado: una foto de producto para tu tienda o redes
- Versión web: https://amri.es/recetas/imagenes-ia--producto.html
- Ideas de ejemplo:
  - Sobre una mesa: una foto de producto de mi taza de cerámica sobre una mesa de madera, con luz de mañana
  - Fondo blanco: una foto de producto sobre fondo blanco puro, centrada y bien iluminada
  - En uso: una foto de mi producto mientras alguien lo usa, en un ambiente acogedor

#### 1. Describe tu producto con detalle
_Claude escribe_

```text
Quiero [la idea de la persona]. Mi producto es: [forma, tamaño, color, material]. Dame 3 prompts de fotografía de producto realista, con la luz y el encuadre de un catálogo profesional.
```

**✅ Comprobación:** tienes 3 prompts.

#### 2. Genera y elige
_el horno_

- Genera los 3 prompts en Bing Image Creator.
- Elige la más realista y descárgala.

> 💡 Una IA gratuita no puede copiar exactamente tu producto. Sirve para ideas, fondos y redes; para tu producto exacto, usa una foto de referencia (libro de Higgsfield).

**✅ Comprobación:** tienes una foto que encaja con tu producto.

#### 3. Ajusta el tamaño en Canva
_emplatar_

- En Canva, crea un diseño del tamaño que necesites y sube la imagen.
- Descarga: **JPG** para fotos.

**✅ Comprobación:** tienes la foto en el tamaño justo.

**Al terminar:** Tienes tu foto. Si necesitas que sea tu producto exacto, mira el libro de Higgsfield: trabaja con tu foto de referencia.

### Receta 3: Una imagen con texto: cartel o portada

Carteles, portadas y anuncios con letras que se leen bien.

- 👩‍🍳 Fácil
- 🔤 Texto
- 🍽 Resultado: un cartel o una portada sin faltas
- Versión web: https://amri.es/recetas/imagenes-ia--con-texto.html
- Ideas de ejemplo:
  - Cartel: un cartel para un concierto de jazz con el texto «Jazz en la terraza · 12 de julio»
  - Portada: la portada de un ebook de recetas veganas con el título «Verde y fácil»
  - Anuncio: un anuncio para redes con el texto «Nueva colección»

#### 1. El prompt con el texto entre comillas
_Claude escribe_

```text
Quiero [la idea de la persona]. Dame 3 prompts para Ideogram, con el texto exacto entre comillas y dónde colocarlo.
```

**✅ Comprobación:** tienes 3 prompts con el texto entre comillas.

#### 2. Genera en Ideogram
_el pastelero_

- Abre **Ideogram**, pega el prompt y genera.
- Lee el texto letra por letra.
- Si hay un error, usa **Remix** con el mismo prompt.

**✅ Comprobación:** el texto se lee bien.

#### 3. Si las letras siguen fallando
_el truco profesional_

Genera la imagen **sin texto** y añade las letras en Canva. Queda perfecto y lo puedes cambiar cuando quieras.

```text
Recomiéndame 2 tipografías gratuitas de Canva que encajen con esta imagen y dónde poner el texto.
```

**✅ Comprobación:** tienes la imagen final con el texto perfecto.

**Al terminar:** Tu imagen con texto está lista y se lee perfecta.

### Receta 4: Edita una foto que ya tienes

Quita el fondo, borra un objeto o amplía el encuadre de una foto tuya.

- 👩‍🍳 Fácil
- ✂️ Edición
- 🍽 Resultado: tu foto editada
- Versión web: https://amri.es/recetas/imagenes-ia--editar.html
- Ideas de ejemplo:
  - Quitar el fondo: quitar el fondo
  - Borrar un objeto: borrar un objeto o una persona del fondo
  - Ampliar el encuadre: ampliar el encuadre a lo ancho

#### 1. Pregunta qué herramienta usar
_el camino_

```text
Te adjunto una foto. Quiero [la idea de la persona]. Dime qué herramienta gratuita me conviene (Canva o Ideogram), los pasos y, si hace falta, el texto exacto en inglés para la zona que voy a cambiar.
```

**✅ Comprobación:** sabes qué herramienta usar y cómo.

#### 2. Edita
_manos a la obra_

- **Quitar el fondo o borrar un objeto**: en Canva, sube la foto y abre **Editar**. Algunas funciones son solo de Canva Pro.
- **Ampliar o cambiar una zona**: en Ideogram, sube la imagen y usa sus herramientas de edición.

> 💡 Edita solo fotos tuyas o con permiso. Nunca cambies la cara de una persona real ni hagas que parezca que dijo o hizo algo que no ocurrió.

**✅ Comprobación:** tienes la versión editada y la original guardadas por separado.

**Al terminar:** Tu foto está editada. Guarda siempre la original aparte.

### Receta 5: Iconos y gráficos dibujados por Claude

Claude dibuja con código (SVG): iconos y gráficos nítidos a cualquier tamaño.

- 👩‍🍳 Fácil
- 🔷 SVG
- 🍽 Resultado: un set de iconos coherentes
- Versión web: https://amri.es/recetas/imagenes-ia--iconos.html
- Ideas de ejemplo:
  - Iconos para mi web: 6 iconos para las secciones de mi web
  - Un diagrama: un diagrama sencillo que explique cómo funciona mi servicio en 4 pasos

#### 1. Pídelos
_Claude dibuja_

```text
Dibújame en SVG [la idea de la persona]. Estilo de línea, trazo redondeado de 2 px, todos coherentes. Muéstramelos juntos y dame el código de cada uno por separado.
```

**✅ Comprobación:** ves los iconos en el chat.

#### 2. Ajusta y guarda
_a tu gusto_

- Pide cambios con palabras: «más grueso», «esquinas redondas», «usa mi color #E07A5F».
- Copia el código de cada uno y guárdalo como `icono.svg`. Canva y casi cualquier web lo aceptan.

**✅ Comprobación:** tienes tus iconos en SVG.

**Al terminar:** Tus iconos se ven nítidos a cualquier tamaño y puedes cambiarles el color cuando quieras.

## Al terminar

Tu cocina está lista. Elige la imagen que quieres hacer.

## Extras (opcionales, después de servir)

### Extra 1. Tu chuleta de estilos
_Opcional_

```text
Hazme una chuleta de 12 estilos para generadores de imágenes, en una tabla: nombre del estilo en inglés, qué aspecto da, para qué lo usaría y 3 palabras clave que lo provocan.
```

### Extra 2. Úsalas con tranquilidad
_Siempre · consejos_

- Revisa las condiciones de cada herramienta antes de un uso comercial: cambian con el tiempo.
- No imites a personas reales ni marcas registradas.
- Revisa manos, ojos y detalles: es donde la IA más se equivoca.
- Guarda tus prompts: son tu recetario personal.

## Sigue con

- `/amri:empieza-aqui` · Empieza aquí: conoce a Claude
- `/amri:asistente-ia` · Tu asistente personal con IA
- `/amri:logo-ia` · Diseña un logo con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
