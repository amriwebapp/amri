---
name: canva-diseno
description: "Receta de AMRI «Diseña en Canva hablando con Claude». Posts, presentaciones y carteles creados en tu cuenta de Canva desde una conversación, con tu marca. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Diseña en Canva hablando con Claude

Posts, presentaciones y carteles creados en tu cuenta de Canva desde una conversación, con tu marca.

- ⏱ 25 min aprox.
- 👩‍🍳 Fácil
- 💶 Gratis si tu plan de Claude incluye conectores
- 🍽 Resultado: diseños editables en tu Canva
- Categoría: Conecta tus apps
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/canva-diseno.html

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

- **Claude**: el diseñador jefe. Decide textos, estructura y estilo.
- **Canva**: el taller. Donde se crean y guardan los diseños. Plan gratuito.
- **Conector de Canva**: el aprendiz. Crea, busca y exporta diseños en tu cuenta.
- **Tu logo y tus colores**: el sello de la casa.

## Ideas de ejemplo

- **Presentación:** una presentación de 8 diapositivas, clara y visual, para explicar mi proyecto a posibles clientes
- **Cartel o flyer:** un cartel A4 para un evento, con título grande, fecha, hora y lugar bien visibles
- **Currículum:** un currículum de una página, limpio y moderno, con mi experiencia y mis habilidades

## Antes de empezar

Pregunta a la persona: **¿Tienes logo o colores de marca que quieras usar?** Si dudas, elige «Sí»: te enseñamos a darle tu marca a Claude. Si no tienes, él te propone una paleta.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_3 min · cuentas_

Solo necesitas una cuenta en Claude y otra en Canva.

#### Pasos

- Entra en [Claude](https://claude.ai).

- Crea tu cuenta gratuita en [Canva](https://www.canva.com) si no la tienes.

**✅ Comprobación:** puedes entrar en las dos.

### 2. Conecta Canva con Claude
_3 min · el conector_

Un conector es un permiso para que Claude use Canva por ti. Se activa una vez y queda guardado.

#### Pasos

- En Claude (web o app de escritorio) abre **Personalizar → Conectores** (en inglés: _Customize → Connectors_).

- Pulsa **Explorar conectores** (_Browse connectors_), busca **«Canva»** y pulsa **Conectar**.

- Se abre una ventana de Canva: inicia sesión y pulsa **Permitir**.

- En un chat nuevo, pulsa el botón **+** → **Conectores** y comprueba que Canva está activado.

> 💡 Los menús de Claude cambian de nombre a veces. Si no lo encuentras, busca «conectores» en la ayuda de Claude.

**✅ Comprobación:** Canva aparece activado en tus conectores.

### 3. Presenta tu marca _(solo si la respuesta a «Tienes logo o colores de marca que quieras usar» es «Sí»)_
_5 min · el sello_

Para que todo salga con tu estilo, primero sube tu logo a Canva y cuéntale a Claude tus colores.

#### Pasos

- En Canva, pulsa **Subidos → Subir archivos** y sube tu logo (mejor PNG con fondo transparente).

- En Claude, escribe:

```text
Mi marca: colores principales [#D2561F y #FBF6EE], tipografía [la que uses], tono [cercano y tranquilo]. Mi logo está subido en Canva con el nombre [nombre del archivo]. Úsalo en todo lo que diseñes hoy.
```

> 💡 ¿No sabes el código de tus colores? Pregúntale a Claude: «Propón una paleta de 3 colores para una marca de [lo tuyo]».

**✅ Comprobación:** Claude te repite tu marca con sus palabras.

### 4. Pide tu diseño
_5 min · la orden_

Primero los textos, luego el diseño. Así no pierdes tiempo con versiones que no te gustan.

#### Pasos

- Pega esto en el chat:

```text
Usa Canva para crear [la idea de la persona].

Antes de diseñar, propón los textos de cada pieza y espera mi OK. Cuando te lo dé, crea el diseño con mi marca y dame el enlace para abrirlo en Canva.
```

**¿Qué significa cada parte?**

- **«Usa Canva»**: le dice a Claude que use el conector, no que lo dibuje él.
- **Primero los textos**: lo más importante de un diseño es lo que dice.
- **El enlace**: para abrirlo y retocarlo tú.

**✅ Comprobación:** Claude te da uno o varios enlaces a diseños nuevos en tu Canva.

### 5. Retoca a mano en Canva
_5 min · tu toque_

La IA hace el 80 %. El último toque es tuyo.

#### Pasos

- Abre el enlace. El diseño está en tu cuenta, en **Proyectos**.

- Cambia lo que quieras: textos, fotos, colores.

- ¿Prefieres que lo haga Claude? Pídeselo en el chat, un cambio cada vez:

```text
En el diseño que acabas de crear, haz el titular más grande y cambia la foto de fondo por algo más luminoso. No toques lo demás.
```

**✅ Comprobación:** el diseño está como tú querías.

### 6. Exporta y publica
_2 min · servir_

Descárgalo en el formato que necesites.

```text
Exporta el diseño como PNG para redes y también como PDF para imprimir. Dame los enlaces de descarga.
```

> 💡 También puedes exportar desde Canva con el botón **Compartir → Descargar**.

**✅ Comprobación:** tienes los archivos descargados.

## Al terminar

Tus diseños ya están en tu cuenta de Canva, listos para retocar a mano o publicar. Más abajo tienes extras: reutilizar diseños y qué hacer si algo falla.

## Extras (opcionales, después de servir)

### Extra 1. Reutiliza lo que ya tienes
_Opcional_

Claude también puede buscar en tus diseños antiguos.

```text
Busca en mi Canva los diseños que hice para [evento o tema] y crea una versión nueva con la fecha actualizada.
```

### Extra 2. Si algo no funciona
_Siempre · revisa esto_

- **Claude dibuja en vez de usar Canva**: empieza el mensaje con «Usa el conector de Canva».
- **No encuentra tu logo**: dile el nombre exacto del archivo subido.
- **Alguna función es de Canva Pro** (kit de marca, quitar fondos): el resto funciona con el plan gratuito.

**💡 Ideas para seguir diseñando**

- Un calendario de contenido para todo el mes.
- Tarjetas de visita.
- Menús para tu restaurante.
- Miniaturas para YouTube.

## Sigue con

- `/amri:gmail-calendario` · Tu secretaría: Gmail y Calendar
- `/amri:notion-cerebro` · Tu segundo cerebro en Notion
- `/amri:navegador-chrome` · Claude navega por ti con Chrome
- `/amri:slack-equipo` · Claude en tu Slack
- `/amri:chef` · combina varias recetas en un proyecto propio
