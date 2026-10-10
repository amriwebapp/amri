---
name: figma-a-web
description: "Receta de AMRI «De Figma a web real». Una página completa, componentes, pantallas de app y tus estilos como variables. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# De Figma a web real

Una página completa, componentes, pantallas de app y tus estilos como variables.

- 📕 4 recetas
- 💶 Gratis si tu plan de Claude incluye conectores
- 🍽 Resultado: tu diseño convertido en web
- Categoría: Crea y publica
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/figma-a-web.html

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

- **Figma**: el plano. Donde está tu diseño. Plan gratuito.
- **Claude**: el constructor. Lee el diseño y escribe la web.
- **El conector de Figma**: las gafas de Claude. Le deja ver capas, colores, textos y medidas.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 4 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Ten un diseño en Figma
_el plano_

- Entra en [Figma](https://www.figma.com) con una cuenta gratuita.
- Si no tienes diseño, busca en **Figma Community** una plantilla gratuita de web y pulsa **Open in Figma**.

**✅ Comprobación:** tienes un diseño abierto en Figma.

### 2. Conecta Figma con Claude
_el conector_

- En Claude abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Pulsa **Explorar conectores**, busca «Figma» y pulsa **Conectar**.
- Inicia sesión y pulsa **Permitir**.

**✅ Comprobación:** Figma aparece activado.

### 3. Ordena el diseño
_cortar los ingredientes_

Un diseño ordenado se convierte en una web mucho mejor.

- Pon cada pantalla en su propio **frame** (marco) con un nombre claro: «Inicio», «Contacto».
- Nombra las capas importantes: «Cabecera», «Botón reservar».
- Si sabes usar **Auto layout**, úsalo.

**✅ Comprobación:** tu frame principal tiene nombre y sus capas se entienden.

### 4. Copiar el enlace de un frame
_señalar_

En cada receta tendrás que darle a Claude el enlace de lo que quieres convertir:

- Haz clic en el frame o el elemento.
- Clic derecho → **Copy/Paste as → Copy link to selection**.

**✅ Comprobación:** sabes copiar el enlace (empieza por figma.com/design/…).

## Recetas del libro

### Receta 1: Una página completa

Tu página de inicio o tu portfolio, convertidos en un index.html fiel al diseño.

- 👩‍🍳 Media
- 🖥 Página
- 🍽 Resultado: tu página como web
- Versión web: https://amri.es/recetas/figma-a-web--pagina.html
- Ideas de ejemplo:
  - Página de inicio: una página de inicio con cabecera, servicios, opiniones y un pie con contacto
  - Portfolio: un portfolio con mi presentación, una galería de proyectos y un formulario de contacto

#### 1. Pide la web
_la orden_

```text
Este es el enlace a un frame de Figma: [pega tu enlace]

Usa el conector de Figma para leerlo. Es [la idea de la persona].

Conviértelo en una web en un único archivo index.html con HTML y CSS. Respeta colores, tipografías, tamaños y espacios. Que se vea bien en móvil. Usa los textos reales del diseño. Al final dime qué partes no has podido copiar exactamente.
```

**✅ Comprobación:** tienes el archivo index.html.

#### 2. Compara al lado
_ajustar_

- Guarda el archivo y ábrelo con doble clic, al lado de Figma.
- Pide los ajustes de uno en uno:

```text
El espacio entre la cabecera y la sección de servicios es más grande que en Figma. Ajústalo para que sea igual y no cambies nada más.
```

> 💡 Para verla como en el móvil: en el navegador pulsa F12 y el icono del teléfono.

**✅ Comprobación:** la web y el diseño se parecen mucho.

#### 3. Guarda la versión buena
_copia_

Guarda el archivo y la conversación: si cambias el diseño, pedirás solo esa parte.

**✅ Comprobación:** tienes la versión final guardada.

**Al terminar:** Tu diseño ya es una web. Para publicarla, mira «Publícala».

### Receta 2: Un componente: botón, tarjeta o menú

Una pieza suelta, con sus estados (normal, al pasar el ratón), lista para reutilizar.

- 👩‍🍳 Fácil
- 🧩 Componente
- 🍽 Resultado: el código de un componente
- Versión web: https://amri.es/recetas/figma-a-web--componente.html
- Ideas de ejemplo:
  - Tarjeta de producto: una tarjeta de producto con imagen, precio y botón, en sus estados normal y al pasar el ratón
  - Menú: un menú de navegación que en el móvil se convierte en un botón desplegable

#### 1. Pídelo
_la pieza_

```text
Este es el enlace a un componente de Figma: [enlace]. Conviértelo en HTML y CSS: [la idea de la persona]. Dame una página de prueba con el componente y su código por separado para copiarlo.
```

**✅ Comprobación:** ves el componente funcionando en la página de prueba.

#### 2. Pruébalo
_estados_

Pasa el ratón por encima, pulsa y míralo en el móvil.

**✅ Comprobación:** se comporta como en el diseño.

**Al terminar:** Tu componente está listo para usarlo en cualquier página.

### Receta 3: Una pantalla de app móvil

La pantalla principal de tu app, como web que se ve en el móvil.

- 👩‍🍳 Media
- 📱 App
- 🍽 Resultado: tu pantalla de app funcionando en el navegador
- Versión web: https://amri.es/recetas/figma-a-web--app.html
- Ideas de ejemplo:
  - Pantalla de inicio: la pantalla principal de una app móvil con menú inferior y una lista de tarjetas
  - Perfil: la pantalla de perfil de usuario

#### 1. Pídela
_la pantalla_

```text
Este es el enlace al frame de Figma: [enlace]. Es [la idea de la persona]. Conviértelo en una web pensada para móvil, en un único index.html, que se pueda tocar (menú y botones). Fiel a colores, tamaños y espacios.
```

**✅ Comprobación:** tienes el archivo.

#### 2. Pruébala en tu móvil
_tocar_

- Ábrela en el navegador con el modo móvil (F12 e icono del teléfono).
- Pide ajustes de uno en uno.

**✅ Comprobación:** se ve y se toca como en el diseño.

**Al terminar:** Tu pantalla funciona. Es un prototipo: para una app real hará falta más trabajo.

### Receta 4: Tus colores y letras como variables

Convierte los estilos de Figma en variables CSS: cambias un color y cambia en toda la web.

- 👩‍🍳 Media
- 🎨 Estilos
- 🍽 Resultado: tu web lista para cambiar de colores en un minuto
- Versión web: https://amri.es/recetas/figma-a-web--variables.html
- Ideas de ejemplo:
  - Colores y textos: los estilos y variables de color y texto

#### 1. Conviértelos
_variables_

```text
Lee [la idea de la persona] de mi archivo de Figma y conviértelos en variables CSS al principio de mi web. Usa esas variables en toda la web en lugar de los colores escritos a mano. Este es el código: [pégalo].
```

**✅ Comprobación:** tu web usa variables.

#### 2. Pruébalo
_un cambio_

```text
Cambia el color principal por [color] para ver cómo queda. Luego vuelve al original.
```

**✅ Comprobación:** toda la web cambia de color con un solo cambio.

**Al terminar:** Ahora cambiar la marca de tu web es cuestión de un minuto.

## Al terminar

Figma está conectado y tu diseño ordenado. Elige qué convertir.

## Extras (opcionales, después de servir)

### Extra 1. Si algo no funciona
_Siempre · revisa esto_

- **Claude no puede leer el enlace**: comprueba que el conector está activado y que tu cuenta tiene acceso al archivo.
- **Fuentes distintas**: pide que use Google Fonts con la misma tipografía o la más parecida.
- **Faltan imágenes**: expórtalas desde Figma, ponlas en la misma carpeta y dile a Claude sus nombres.

## Sigue con

- `/amri:webapp-gratis` · Tu web online y gratis
- `/amri:chatbot-web` · Un chatbot para tu web
- `/amri:automatiza-tareas` · Automatiza tareas aburridas con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
