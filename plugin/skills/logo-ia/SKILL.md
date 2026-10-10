---
name: logo-ia
description: "Receta de AMRI «Diseña un logo con IA». Logo con nombre o símbolo, todos los formatos, tu kit de marca y cómo comprobar y proteger tu logo. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Diseña un logo con IA

Logo con nombre o símbolo, todos los formatos, tu kit de marca y cómo comprobar y proteger tu logo.

- 📕 5 recetas
- 💶 Gratis
- 🍽 Resultado: tu logo en todos los formatos y tu marca definida
- Categoría: Primeros pasos
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/logo-ia.html

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

- **Claude**: el diseñador. Define el estilo y escribe las descripciones.
- **Ideogram**: el horno. Genera las propuestas y escribe bien las letras.
- **remove.bg**: el colador. Quita el fondo en un clic.
- **Canva**: el emplatado. Retoca y prepara los formatos.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 5 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_gratis_

- Crea tu cuenta en [Claude](https://claude.ai).
- Crea tu cuenta en [Ideogram](https://ideogram.ai).
- Crea tu cuenta en [Canva](https://www.canva.com).
- Guarda en favoritos [remove.bg](https://www.remove.bg) (no hace falta cuenta).

**✅ Comprobación:** has entrado en todas.

### 2. La personalidad de tu marca
_con Claude_

Un buen logo empieza por saber qué quiere transmitir. Crea un proyecto en Claude llamado **Mi marca** y, dentro, pega:

```text
Quiero crear la identidad de mi marca. Hazme 6 preguntas, de una en una: qué hago, para quién, qué me diferencia, qué tres palabras me describen, qué marcas me gustan y cuáles no.

Al final, escribe una ficha de marca de media página: personalidad, tono, 3 colores con su código y por qué.
```

- Copia la ficha en las **instrucciones del proyecto**.

**✅ Comprobación:** tienes la ficha de tu marca guardada en el proyecto «Mi marca».

## Recetas del libro

### Receta 1: Logo con el nombre

El nombre de tu marca con un estilo propio, que se lee perfecto.

- 👩‍🍳 Fácil
- 🔤 Logotipo
- 🍽 Resultado: tu logo con nombre
- Versión web: https://amri.es/recetas/logo-ia--con-nombre.html
- Ideas de ejemplo:
  - Cafetería o restaurante: una cafetería de barrio llamada «La Tostadora», cálida y artesanal
  - Tienda o marca: una marca de cosmética natural llamada «Brote», cercana y fresca
  - App o startup: una app de finanzas personales llamada «Hucha», moderna y de confianza

#### 1. Tres estilos
_propuestas_

```text
Quiero un logo para [la idea de la persona]. Con mi ficha de marca, propón 3 estilos distintos (por ejemplo: minimalista, ilustrado, tipográfico) y escribe un prompt en inglés para Ideogram de cada uno, con fondo blanco liso, diseño plano y el nombre exacto entre comillas.
```

**✅ Comprobación:** tienes 3 estilos con sus prompts.

#### 2. Genera en Ideogram
_el horno_

- Pega cada prompt en Ideogram. Si ves la opción **Design** o **Typography**, actívala.
- Descarga tus favoritos.
- Lee el nombre letra por letra, en voz alta.

**✅ Comprobación:** tienes un favorito con el nombre bien escrito.

#### 3. Si las letras fallan
_el truco_

Quédate con el **símbolo sin texto** y escribe el nombre en Canva con una tipografía bonita. Es lo que hacen muchos diseñadores.

```text
Recomiéndame 3 tipografías gratuitas de Canva que combinen con este logo y explícame por qué.
```

**✅ Comprobación:** el nombre se lee perfecto.

**Al terminar:** Tu logo con nombre está listo. Sigue con «Tu logo en todos los formatos».

### Receta 2: Un símbolo o icono

Un dibujo sencillo que se reconoce sin letras, para tu perfil o tu app.

- 👩‍🍳 Fácil
- 🔷 Símbolo
- 🍽 Resultado: tu símbolo, sin texto
- Versión web: https://amri.es/recetas/logo-ia--simbolo.html
- Ideas de ejemplo:
  - Comunidad o club: un icono para mi comunidad de senderismo, sencillo y reconocible
  - Icono de app: el icono de una app, que se vea bien muy pequeño

#### 1. Las ideas
_símbolos_

```text
Quiero [la idea de la persona]. Con mi ficha de marca, propón 5 ideas de símbolo (qué dibujo y por qué) y escribe un prompt en inglés para cada una: diseño plano, sin texto, fondo blanco liso, que funcione en tamaño muy pequeño.
```

**✅ Comprobación:** tienes 5 ideas con sus prompts.

#### 2. Genera y prueba en pequeño
_elegir_

- Genera en Ideogram o Bing Image Creator.
- Reduce tus favoritos al tamaño de un icono del móvil: ¿se sigue entendiendo?

```text
Este es mi favorito [adjúntalo]. Hazlo más simple, con menos elementos y líneas más gruesas. Reescribe el prompt.
```

**✅ Comprobación:** tu símbolo se entiende en pequeño.

**Al terminar:** Tu símbolo está listo. Combínalo con tu nombre en Canva cuando lo necesites.

### Receta 3: Tu logo en todos los formatos

Sin fondo, en blanco, foto de perfil y para documentos.

- 👩‍🍳 Fácil
- 🗂 Formatos
- 🍽 Resultado: una carpeta con todas las versiones
- Versión web: https://amri.es/recetas/logo-ia--formatos.html
- Ideas de ejemplo:
  - En todas partes: redes, web, documentos e impresión
  - Sobre todo en redes: redes sociales

#### 1. Quita el fondo
_transparente_

- Abre **remove.bg** y sube tu logo.
- Descárgalo y comprueba que los bordes están limpios.

**✅ Comprobación:** tienes un PNG con fondo transparente (se ve a cuadros en el editor).

#### 2. Las versiones
_en Canva_

- En Canva, crea un diseño de 1000 × 1000 px y sube tu logo.
- Descarga: **PNG transparente** (web y redes) y **JPG con fondo blanco** (documentos).
- Haz una versión en **blanco** para fondos oscuros.
- Crea un diseño de 500 × 500 px con el logo sobre tu color: tu **foto de perfil**.

**✅ Comprobación:** tienes al menos 4 versiones.

#### 3. ¿Y para imprimir en grande?
_vectorial_

Para imprimir en grande hace falta un formato **vectorial** (SVG), que se amplía sin perder calidad.

- Herramientas como vectorizer.ai convierten tu PNG a SVG. Revisa sus condiciones antes.
- Si tu logo es sencillo, Claude puede redibujarlo en SVG: «Redibuja este logo en SVG, lo más fiel posible».

**✅ Comprobación:** sabes cómo conseguir la versión para imprimir.

**Al terminar:** Tienes tu carpeta de logos. Guárdala con el nombre de tu marca para tenerla siempre a mano.

### Receta 4: Tu kit de marca

Colores, tipografías y reglas para que todo lo que hagas se vea coherente.

- 👩‍🍳 Fácil
- 🎨 Marca
- 🍽 Resultado: una página con tu kit de marca
- Versión web: https://amri.es/recetas/logo-ia--kit.html
- Ideas de ejemplo:
  - Kit básico: un kit de marca sencillo
  - Guía completa: una guía de marca de 3 páginas

#### 1. Pídelo
_con tu logo_

```text
Con este logo [adjúntalo] y mi ficha de marca, hazme [la idea de la persona]: 3 colores con su código, 2 tipografías gratuitas y 5 reglas de uso (tamaño mínimo, qué no hacer…). Déjalo en una página que pueda imprimir.
```

**✅ Comprobación:** tienes tu kit de marca.

#### 2. Guárdalo en Canva
_a mano_

- En Canva, guarda tus colores y tu logo en **Marca** o **Kit de marca**, si tu plan lo permite.
- Si no, crea un diseño «Mi marca» con los colores y cópialos cuando los necesites.

**✅ Comprobación:** tienes tus colores a mano en Canva.

**Al terminar:** Tu kit de marca está listo. Úsalo en el libro de Canva para que todo salga con tu estilo.

### Receta 5: Comprueba y protege tu logo

Que no se parezca a otro, que puedas usarlo comercialmente y, si vas en serio, registrarlo.

- 👩‍🍳 Fácil
- 🛡 Protección
- 🍽 Resultado: tu logo comprobado
- Versión web: https://amri.es/recetas/logo-ia--proteger.html
- Ideas de ejemplo:
  - Que se parezca a otro: que se parezca a otro logo
  - Registrarlo: registrar mi marca

#### 1. Busca parecidos
_Google_

- Haz una búsqueda por imagen en Google con tu logo.
- Si aparece algo muy parecido de tu sector, cambia el diseño.

**✅ Comprobación:** no has encontrado logos demasiado parecidos.

#### 2. Uso comercial
_condiciones_

Revisa las condiciones de la herramienta de IA que usaste sobre uso comercial: cambian con el tiempo.

**✅ Comprobación:** sabes si puedes usarlo para tu negocio.

#### 3. Registro de marca
_si vas en serio_

Si quieres protegerlo, el registro se hace en la [OEPM](https://www.oepm.es) (España) o en la [EUIPO](https://www.euipo.europa.eu) (Unión Europea).

```text
Explícame con palabras sencillas cómo funciona [la idea de la persona] en España: pasos, cuánto cuesta más o menos y qué debo comprobar antes. Dime dónde confirmar los precios actuales.
```

**✅ Comprobación:** sabes qué pasos seguir.

**Al terminar:** Has comprobado tu logo. Para dudas legales importantes, consulta con un profesional.

## Al terminar

Tu marca tiene personalidad. Elige qué tipo de logo quieres hacer.

## Extras (opcionales, después de servir)

### Extra 1. Antes de imprimir
_Siempre · consejos_

- Un buen logo funciona en pequeño: si tiene muchos detalles, pide «más simple».
- Enséñaselo a alguien sin decirle cuál te gusta. Su primera reacción vale oro.

## Sigue con

- `/amri:empieza-aqui` · Empieza aquí: conoce a Claude
- `/amri:asistente-ia` · Tu asistente personal con IA
- `/amri:imagenes-ia` · Crea imágenes con IA gratis
- `/amri:chef` · combina varias recetas en un proyecto propio
