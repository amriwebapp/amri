---
name: logo-ia
description: "Receta de AMRI «Diseña un logo con IA». Crea un logo profesional para tu proyecto en minutos, con variantes, colores y formatos listos para usar. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Diseña un logo con IA

Crea un logo profesional para tu proyecto en minutos, con variantes, colores y formatos listos para usar.

- ⏱ 40 min aprox.
- 👩‍🍳 Sin saber diseñar
- 💶 0 € para empezar
- 🍽 Resultado: tu logo en todos los formatos
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
- No pidas, no escribas y no guardes en el código contraseñas ni claves secretas. Las claves públicas (como la «anon» de Supabase) sí pueden ir en el código; las secretas, solo en variables de entorno.
- Pide permiso antes de cualquier acción que publique algo o no tenga vuelta atrás: subir a GitHub, desplegar, borrar.
- Después de cada paso, comprueba su **✅ Comprobación** antes de seguir. Si falla, averigua por qué y arréglalo; si no puedes, explícalo y propón una salida.
- Trabaja en una carpeta nueva con un nombre corto sacado de la idea, salvo que la persona ya esté dentro de su proyecto.
- Al terminar: resume lo que se ha hecho, da los enlaces importantes y propón la siguiente receta de «Sigue con». Invita a compartir el resultado en la comunidad de la receta en https://amri.es.

## Ingredientes (todos gratuitos)

- **Claude**: el jefe de cocina. Define el estilo y escribe los prompts.
- **Ideogram**: el horno. Genera las propuestas y escribe bien las letras.
- **remove.bg**: el colador. Quita el fondo en un clic.
- **Canva**: el emplatado. Retoca y prepara los formatos.

## Ideas de ejemplo

- **App / startup:** una app de finanzas personales llamada «Hucha», moderna y de confianza
- **Cafetería / restaurante:** una cafetería de barrio llamada «La Tostadora», cálida y artesanal
- **Marca personal:** mi marca personal como fotógrafa, con mis iniciales «LM», elegante y minimalista
- **Solo símbolo / icono:** un icono para mi comunidad de senderismo, sencillo y reconocible

## Antes de empezar

Pregunta a la persona: **¿El logo tiene que llevar el nombre escrito?** Si dudas, elige «Sí»: te enseñamos a que las letras queden perfectas. Siempre puedes quedarte solo con el símbolo.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_5 min · crear cuentas_

Vas a crear tres cuentas gratuitas. Con tu cuenta de Google entras en todas.

#### Pasos

- Crea tu cuenta en [Claude](https://claude.ai).

- Crea tu cuenta en [Ideogram](https://ideogram.ai).

- Crea tu cuenta en [Canva](https://www.canva.com).

- Guarda en favoritos [remove.bg](https://www.remove.bg) (no hace falta cuenta).

**✅ Comprobación:** has entrado en todas las herramientas.

### 2. Pídele el briefing a Claude
_10 min · la personalidad_

Un buen logo empieza por saber qué quiere transmitir. Claude te hace de diseñador y te propone estilos.

#### Pasos

- Abre un chat nuevo en Claude.
- Copia este mensaje y pégalo:

```text
Quiero un logo para [la idea de la persona].

Hazme 4 preguntas para entender mi proyecto. Después propónme 3 estilos de logo distintos (por ejemplo: minimalista, ilustrado, tipográfico), con colores y el porqué de cada uno. Para cada estilo, escríbeme un prompt en inglés para un generador de imágenes con IA, con fondo blanco liso y diseño plano. El logo lleva el nombre escrito: ponlo entre comillas en el prompt.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero un logo para…»**: tu proyecto. Cámbialo por el tuyo.
- **3 estilos**: para que compares antes de decidir.
- **Fondo blanco liso y diseño plano**: así es fácil recortarlo y queda profesional.
- **Nombre entre comillas**: así la IA sabe qué letras escribir.

**✅ Comprobación:** tienes 3 estilos con sus colores y sus prompts.

### 3. Hornea las propuestas
_10 min · generar opciones_

Pegas cada prompt en el generador y te da varias versiones de cada estilo.

#### Pasos

- Abre **Ideogram**.

- Pega el primer prompt y genera. Si ves la opción **Design** o **Typography**, actívala.

- Repite con los otros dos estilos.

- Descarga tus 3-4 favoritos.

> 💡 Enséñaselos a alguien de confianza sin decirle cuál te gusta. Su primera reacción vale oro.

**✅ Comprobación:** tienes varias propuestas descargadas y un favorito.

### 4. Afina el ganador
_5 min · pulir detalles_

Tu favorito seguramente tiene algún detalle que mejorar. Pídeselo a Claude.

#### Pasos

- Vuelve al mismo chat y adjunta la imagen.
- Pega este mensaje:

```text
Este es mi logo favorito, hecho con el prompt [pega el prompt]. Quiero que sea más [simple / grueso / redondeado...] y cambiar [lo que no te gusta]. Reescribe el prompt manteniendo lo que funciona.
```

> 💡 Un buen logo funciona en pequeño. Si tiene muchos detalles, pide «más simple, menos elementos».

**✅ Comprobación:** tienes una versión que te encanta.

### 5. Revisa las letras _(solo si la respuesta a «El logo tiene que llevar el nombre escrito» es «Sí»)_
_5 min · el nombre perfecto_

Las IAs a veces cambian letras o las deforman. En un logo tiene que estar perfecto.

#### Pasos

- Lee el nombre letra por letra, en voz alta.

- Si falla alguna, genera de nuevo con el nombre entre comillas.

- Si sigue fallando: quédate con el **símbolo sin texto** y escribe el nombre en Canva con una tipografía bonita.

```text
Recomiéndame 3 tipografías gratuitas de Canva que combinen con este logo y explícame por qué.
```

> 💡 Símbolo con IA + nombre en Canva es lo que hacen muchos diseñadores: el texto queda perfecto y lo puedes cambiar cuando quieras.

**✅ Comprobación:** el nombre se lee perfecto, sin letras raras.

### 6. Quita el fondo
_3 min · fondo transparente_

Un logo sin fondo se puede poner encima de cualquier color o foto.

#### Pasos

- Abre **remove.bg** y sube tu logo.

- Espera unos segundos y pulsa **Descargar**.

- Comprueba que los bordes están limpios.

> 💡 Si los bordes quedan raros, pide en el generador un logo con «fondo blanco liso» y vuelve a probar: cuanto más limpio el fondo, mejor el recorte.

**✅ Comprobación:** tienes un PNG con fondo transparente (se ve a cuadros en el editor).

### 7. Prepara los platos
_5 min · los formatos_

Necesitas varias versiones para usar tu logo en cualquier sitio.

#### Pasos

- En Canva crea un diseño cuadrado de 1000 × 1000 px y sube tu logo.

- Descarga: **PNG transparente** (web y redes) y **JPG con fondo blanco** (documentos).

- Haz una versión en **blanco** para fondos oscuros.

- Crea un diseño de 500 × 500 px con el logo centrado sobre tu color: tu **foto de perfil**.

**¿Y el formato SVG?**

- El SVG es un formato «vectorial»: se puede ampliar sin perder calidad (ideal para imprimir en grande).
- Herramientas como vectorizer.ai convierten tu PNG a SVG. Revisa sus condiciones actuales antes de usarlo.

**✅ Comprobación:** tienes una carpeta con al menos 4 versiones de tu logo.

## Al terminar

Tu logo está listo en todos los formatos. Guárdalo en una carpeta con el nombre de tu proyecto para tenerlo siempre a mano. Más abajo tienes dos extras: tu kit de marca y cómo protegerlo.

## Extras (opcionales, después de servir)

### Extra 1. Tu kit de marca
_15 min · opcional_

Colores, tipografías y reglas para que todo lo que hagas se vea coherente.

#### Pasos

- Pídele a Claude:

```text
Con este logo [adjúntalo], hazme un kit de marca sencillo: 3 colores con su código HEX, 2 tipografías gratuitas, y 5 reglas de uso (tamaño mínimo, qué no hacer...). Déjalo en una página que pueda imprimir.
```

- Guarda los colores en Canva, en **Marca → Kit de marca**, si tu plan lo permite.

### Extra 2. Protege tu logo
_Siempre · consejos_

Antes de imprimir tarjetas o rotular una tienda, unas comprobaciones sencillas.

- **Busca que no se parezca** a otro logo conocido: haz una búsqueda por imagen en Google.

- **Revisa las condiciones** de la herramienta de IA sobre uso comercial.

- **Si vas en serio**, consulta el registro de marcas en la [OEPM](https://www.oepm.es) (España) o la [EUIPO](https://www.euipo.europa.eu) (UE).

**💡 Dónde usar tu logo**

- Foto de perfil en todas tus redes.
- Icono de la pestaña de tu web (favicon).
- Firma de correo y facturas.
- Pegatinas, tazas o camisetas.

## Sigue con

- `/amri:asistente-ia` · Tu asistente personal con IA
- `/amri:imagenes-ia` · Crea imágenes con IA gratis
- `/amri:chef` · combina varias recetas en un proyecto propio
