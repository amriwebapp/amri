---
name: figma-a-web
description: "Receta de AMRI «De Figma a web real». Claude lee tu diseño de Figma y lo convierte en una web que funciona, fiel a colores, textos y espacios. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# De Figma a web real

Claude lee tu diseño de Figma y lo convierte en una web que funciona, fiel a colores, textos y espacios.

- ⏱ 1 hora aprox.
- 👩‍🍳 Dificultad media
- 💶 0 € para empezar
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «anon» de Supabase) sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes (todos gratuitos)

- **Figma**: el plano de la cocina. Donde está tu diseño. Plan gratuito.
- **Claude**: el constructor. Lee el diseño y escribe la web.
- **Conector de Figma**: las gafas de Claude. Le deja ver capas, colores, textos y medidas.
- **Tu navegador**: la mesa. Para probar la web en tu ordenador.
- **GitHub y Cloudflare**: el reparto a domicilio. Para publicarla gratis.

## Ideas de ejemplo

- **Portfolio:** un portfolio con mi presentación, una galería de proyectos y un formulario de contacto
- **Un componente:** una tarjeta de producto con imagen, precio y botón, en sus estados normal y al pasar el ratón
- **Pantalla de app:** la pantalla principal de una app móvil con menú inferior y una lista de tarjetas

## Antes de empezar

¿Quieres publicarla en internet al terminar? Si dudas, elige «Sí»: te enlazamos la receta de publicar gratis. Puedes dejarlo para otro día.

## Pasos

### 1. Prepara los ingredientes
_5 min · cuentas_

Necesitas un diseño en Figma. Si no tienes uno, usa una plantilla de la comunidad.

#### Pasos

- Entra en [Figma](https://www.figma.com) con una cuenta gratuita.

- Si no tienes diseño, busca en **Figma Community** una plantilla gratuita de página web y pulsa **Open in Figma**.

- Entra en [Claude](https://claude.ai).

**✅ Comprobación:** tienes un diseño abierto en Figma.

### 2. Ordena el diseño
_10 min · mise en place_

Un diseño ordenado se convierte en una web mucho mejor. Es como cortar los ingredientes antes de cocinar.

#### Pasos

- Pon cada pantalla en su propio **frame** (marco) con un nombre claro: «Inicio», «Contacto».

- Nombra las capas importantes: «Cabecera», «Botón reservar», «Foto principal».

- Si sabes usar **Auto layout**, úsalo: Claude entenderá mejor cómo se ordena todo.

> 💡 No hace falta que sea perfecto. Con que los nombres tengan sentido, ya ayuda mucho.

**✅ Comprobación:** tu frame principal tiene nombre y sus capas se entienden.

### 3. Conecta Figma con Claude
_3 min · el conector_

Un conector es un permiso para que Claude use Figma por ti. Se activa una vez y queda guardado.

#### Pasos

- En Claude (web o app de escritorio) abre **Personalizar → Conectores** (en inglés: _Customize → Connectors_).

- Pulsa **Explorar conectores** (_Browse connectors_), busca **«Figma»** y pulsa **Conectar**.

- Se abre una ventana de Figma: inicia sesión y pulsa **Permitir**.

- En un chat nuevo, pulsa el botón **+** → **Conectores** y comprueba que Figma está activado.

> 💡 Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la ayuda de Claude.

**✅ Comprobación:** Figma aparece activado en tus conectores.

### 4. Copia el enlace del frame
_1 min · señala el plato_

Claude necesita saber qué parte del diseño tiene que construir.

#### Pasos

- En Figma, haz clic en tu frame principal.

- Clic derecho → **Copy/Paste as → Copy link to selection** (Copiar enlace a la selección).

**✅ Comprobación:** tienes un enlace que empieza por figma.com/design/…

### 5. Pide tu web
_10 min · la orden_

Claude lee el diseño y lo convierte en una web real.

#### Pasos

- Abre un chat nuevo y pega (cambia el enlace por el tuyo):

```text
Este es el enlace a un frame de Figma: [pega aquí tu enlace]

Usa el conector de Figma para leerlo. Es [la idea de la persona].

Conviértelo en una web en un único archivo index.html con HTML y CSS. Respeta colores, tipografías, tamaños y espacios. Que se vea bien en móvil. Usa textos reales del diseño, no «lorem ipsum». Al final dime qué partes no has podido copiar exactamente.
```

**¿Qué significa cada parte?**

- **Un único archivo**: más fácil de probar y publicar.
- **Que se vea bien en móvil**: la mayoría de tus visitas vendrán del teléfono.
- **Qué no has podido copiar**: así sabes qué revisar.

**✅ Comprobación:** Claude te da un archivo index.html para descargar o copiar.

### 6. Pruébala y compara
_10 min · probar la sal_

Abre la web al lado del diseño y busca diferencias.

#### Pasos

- Guarda el archivo como **index.html** en una carpeta y ábrelo con doble clic.

- Ponlo al lado de Figma y compara.

- Pide los ajustes de uno en uno:

```text
En la web, el espacio entre la cabecera y la sección de servicios es más grande que en Figma. Ajústalo para que sea igual y no cambies nada más.
```

> 💡 Para ver cómo queda en móvil: en el navegador pulsa F12 y el icono del teléfono.

**✅ Comprobación:** la web y el diseño se parecen como dos gotas de agua.

### 7. Publícala gratis _(solo si la app guarda datos o cuentas)_
_15 min · servir_

Tu archivo ya está listo para salir a internet.

- Sigue desde el paso de GitHub de la receta [Tu webapp online y gratis](webapp-gratis.html).
- Sube tu **index.html** en lugar de crear uno nuevo.

**✅ Comprobación:** tienes una dirección web que puedes abrir desde el móvil.

## Al terminar

Tu diseño ya es una web que funciona. Guarda el archivo y la conversación: si cambias el diseño en Figma, puedes pedirle a Claude que actualice solo esa parte.

## Extras (opcionales, después de servir)

### Extra 1. Tus colores como variables
_Opcional · nivel pro_

Si usas variables o estilos en Figma, pide que se conviertan en variables CSS. Así cambiar un color cambia toda la web.

```text
Lee los estilos y variables de color y texto de mi archivo de Figma y conviértelos en variables CSS al principio del archivo. Usa esas variables en toda la web.
```

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **Claude no puede leer el enlace**: comprueba que el conector está activado y que tu cuenta de Figma tiene acceso al archivo.
- **Fuentes distintas**: pide que use Google Fonts con la misma tipografía o la más parecida.
- **Imágenes que faltan**: expórtalas desde Figma y ponlas en la misma carpeta; dile a Claude sus nombres.

## Sigue con

- `/amri:webapp-gratis` · Tu webapp online y gratis
- `/amri:chatbot-web` · Un chatbot para tu web
- `/amri:automatiza-tareas` · Automatiza tareas aburridas con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
