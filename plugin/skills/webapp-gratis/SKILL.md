---
name: webapp-gratis
description: "Receta de AMRI «Tu web online y gratis». Un libro con 8 recetas: tu primera web, cuentas de usuario, reservas, dominio propio, Google y visitas. Con Claude, GitHub y Cloudflare, sin programar. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu web online y gratis

Un libro con 8 recetas: tu primera web, cuentas de usuario, reservas, dominio propio, Google y visitas. Con Claude, GitHub y Cloudflare, sin programar.

- 📕 8 recetas
- ⏱ 20-90 min cada una
- 💶 Gratis (el dominio propio es de pago)
- 🍽 Resultado: tu web online, a tu medida
- Categoría: Crea y publica
- Versión web (con explicaciones y comunidad): https://amri.es/recetas/webapp-gratis.html

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

- **Claude**: el cocinero. Escribe el código por ti.
- **GitHub**: la nevera. Guarda tus archivos y cada cambio que haces.
- **Cloudflare**: el mostrador. Publica tu web para que cualquiera la vea.
- **Supabase** (solo en algunas recetas): la despensa. Guarda datos y cuentas de usuario.

## Este es un libro de recetas

Tiene una preparación común («Antes de empezar») y 8 recetas concretas. Según la idea de la persona:
1. Elige la receta del libro que mejor encaje (si dudas, propón dos y deja que elija).
2. Haz «Antes de empezar» solo si todavía no está hecho (pregúntalo o compruébalo tú).
3. Cocina esa receta. Al terminar, propón otra del libro que encaje con su idea.

## Antes de empezar

### 1. Crea tus cuentas
_5 min · tres cuentas gratis_

Empieza por GitHub: con esa cuenta podrás entrar en las demás.

- Crea tu cuenta en [GitHub](https://github.com/signup).

- Crea tu cuenta en [Claude](https://claude.ai).

- Crea tu cuenta en [Cloudflare](https://dash.cloudflare.com/sign-up).

> 💡 Supabase solo hace falta si tu web guarda datos o tiene cuentas de usuario. Lo crearás en esas recetas.

**✅ Comprobación:** has entrado en las tres cuentas.

### 2. Conecta GitHub con Claude
_3 min · el conector_

Un conector es un permiso para que Claude use GitHub por ti: así sube los archivos él, sin que tengas que copiar y pegar.

- En Claude abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Busca **GitHub**, pulsa **Conectar** y autoriza con tu cuenta.

> 💡 Si tu plan no muestra conectores, no pasa nada: cada receta tiene también el camino a mano.

**✅ Comprobación:** GitHub aparece como «Conectado».

### 3. Crea el proyecto «Mi web»
_3 min · las reglas_

Un proyecto de Claude guarda tus reglas para siempre. Así Claude trabaja igual en todas las recetas.

- En Claude pulsa **Proyectos → Crear proyecto** y llámalo **Mi web**.

- En **Instrucciones**, pega:

```text
Eres mi programador y me ayudas a crear y mantener mi web, aunque yo no sepa programar.

Reglas:
- Explícame todo con palabras sencillas.
- Haz webs sencillas (HTML, CSS y JavaScript), que se vean bien en el móvil y que se puedan publicar gratis en Cloudflare.
- Antes de cambiar algo, dime qué vas a tocar. Cambia solo lo necesario.
- Nunca pongas claves secretas en el código de la web.
- Cuando termines, dime qué archivos han cambiado.
```

> 💡 Abre siempre los chats de las recetas **dentro de este proyecto**.

**✅ Comprobación:** tienes el proyecto «Mi web» con sus instrucciones.

## Recetas del libro

### Receta 1: Tu primera web: presentación o negocio

Una web de una o varias secciones, publicada en internet con candado, sin base de datos.

- ⏱ 45 min
- 👩‍🍳 Fácil
- 🌐 Web
- 🍽 Resultado: tu web online en una dirección .pages.dev o .workers.dev
- Versión web: https://amri.es/recetas/webapp-gratis--primera-web.html
- Ideas de ejemplo:
  - Web de mi negocio: una web para mi negocio con servicios, precios, opiniones de clientes, horario y un botón de contacto
  - Portfolio / presentación: una web de presentación personal con mi trayectoria, mis proyectos y un enlace para contactarme
  - Carta de restaurante: la carta de mi restaurante, fácil de leer en el móvil, con alérgenos y un botón para reservar por teléfono
  - Evento: una web para un evento con fecha, lugar, programa y cómo apuntarse

#### 1. Pide la web a Claude
_10 min · los archivos_

Abre un chat dentro de **Mi web**. Claude crea **3 archivos** que forman tu web; no tienes que entenderlos.

```text
Quiero [la idea de la persona].

Hazla con tres archivos: index.html, styles.css y app.js. Que se vea bien en el móvil y tenga un diseño cuidado. Explícame cada archivo en una frase.
```

**¿Qué es cada archivo?**

- **index.html**: la página, con sus textos e imágenes.
- **styles.css**: el aspecto: colores, letras, espacios.
- **app.js**: lo que se mueve o reacciona al pulsar.

> 💡 Si algo no te gusta, díselo con tus palabras: «hazlo más oscuro», «pon el botón más grande».

**✅ Comprobación:** Claude te ha enseñado los tres archivos.

#### 2. Baja los archivos
_5 min · a tu ordenador_

- Crea en tu ordenador una carpeta llamada **mi-web**.
- En el chat, cada archivo tiene un botón de **descargar**. Guárdalos en **mi-web**.
- ¿No ves el botón? Pide: «Dame los archivos en un .zip para descargar» y descomprímelo dentro de **mi-web**.

> 💡 Haz doble clic en `index.html` para verla en tu navegador antes de publicarla.

**✅ Comprobación:** ves tu web en el navegador de tu ordenador.

#### 3. Guárdala en GitHub
_5 min · subir_

#### Con el conector

```text
Crea un repositorio en mi GitHub llamado mi-web y sube estos tres archivos.
```

**Sin conector: hacerlo a mano**

- En GitHub pulsa **New repository** y llámalo **mi-web**.
- Pulsa **uploading an existing file**, arrastra tus archivos y confirma con **Commit changes**.

**✅ Comprobación:** ves tus archivos dentro del repositorio mi-web en GitHub.

#### 4. Publícala en Cloudflare
_10 min · online_

- En Cloudflare abre **Workers & Pages → Create** y elige importar un repositorio de GitHub (**Import a repository** o **Connect to Git**).

- Elige el repositorio **mi-web**.

- Deja vacío «Build command» y pon `/` en «Build output directory».

- Pulsa **Save and Deploy** (o **Deploy**) y espera 1-2 minutos.

> 💡 Si ves pantallas distintas, haz una captura, pégala en Claude y pregúntale qué poner.

**✅ Comprobación:** abres tu dirección (termina en `.pages.dev` o `.workers.dev`) y tu web carga con candado.

#### 5. Pruébala en el móvil
_5 min · revisión_

- Abre la dirección en tu móvil.
- Pulsa cada botón y cada enlace.
- Pídele a alguien que la mire y te diga qué no entiende.

```text
Así se ve mi web en el móvil: [describe o sube una captura]. Esto no me gusta: [qué]. Arréglalo cambiando solo eso.
```

**✅ Comprobación:** tu web se ve bien en el móvil y todo funciona.

**Al terminar:** Tu web está online. Cada vez que cambies algo y lo subas a GitHub, Cloudflare la actualiza sola. Sigue con «Tu propio dominio» o «Que te encuentren en Google».

### Receta 2: Una web con cuentas y datos

Cada persona crea su cuenta y guarda sus cosas: tareas, notas, mensajes de un formulario o un catálogo que actualizas tú.

- ⏱ 90 min
- 👩‍🍳 Media
- 🗄 Base de datos
- 🍽 Resultado: una web con cuentas de usuario y datos guardados
- Versión web: https://amri.es/recetas/webapp-gratis--web-con-datos.html
- Ideas de ejemplo:
  - Formulario de contacto: una web de presentación con un formulario de contacto que guarda los mensajes, y una página privada donde solo yo los veo
  - Lista de tareas: una lista de tareas donde cada persona crea su cuenta y ve solo sus tareas
  - Blog o notas: un blog de notas donde cada persona crea su cuenta y puede escribir, editar y borrar sus entradas
  - Catálogo que actualizo yo: un catálogo de productos que yo actualizo desde un panel privado, sin cobro online

#### 1. Crea tu proyecto en Supabase
_5 min · la despensa_

- Entra en [Supabase](https://supabase.com) con el botón **Sign in with GitHub**.
- Pulsa **New project**, ponle nombre y elige una región cercana. Espera un par de minutos.
- Si quieres que Claude cree las tablas por ti, conecta Supabase en **Personalizar → Conectores**.

**✅ Comprobación:** tienes un proyecto en Supabase.

#### 2. Pide la web a Claude
_10 min · los archivos_

```text
Quiero [la idea de la persona].

Hazla con estos archivos: index.html, styles.css, app.js y config.js. Que guarde los datos y las cuentas en Supabase, y deja la dirección y la clave publicable en config.js para que yo las pegue. Que se vea bien en el móvil. Explícame cada archivo en una frase.
```

- Baja los archivos a una carpeta **mi-web** de tu ordenador (botón de descargar, o pide un .zip).

**✅ Comprobación:** tienes los cuatro archivos en tu ordenador.

#### 3. Que Claude cree las tablas
_10 min · con seguridad_

Una tabla es como una hoja de cálculo donde se guardan tus datos. La seguridad (se llama RLS) hace que **cada persona vea solo lo suyo**.

```text
Crea en mi proyecto de Supabase las tablas que necesita esta web. Usa los mismos nombres que en el código. Activa la seguridad (RLS) para que cada usuario vea y cambie solo sus propios datos. Antes de ejecutar nada, dime qué vas a crear.
```

**No tengo el conector o no funciona**

- Pide a Claude: «Dame el SQL para crear las tablas con seguridad RLS».
- En Supabase abre **SQL Editor**, pega el código y pulsa **Run**.

**✅ Comprobación:** en Supabase, en **Table Editor**, ves tu tabla con la seguridad (RLS) activada.

#### 4. Pega las dos llaves
_5 min · conectar_

- En Supabase abre **Project Settings → API**.
- Copia la **Project URL** y la **clave publicable** (_publishable key_; en proyectos antiguos se llama **anon public**).
- Pégalas en `config.js` donde indicó Claude.

> 💡 ⚠️ Nunca uses la clave **secreta** (_secret_ o **service_role**) en tu web: da acceso total a tus datos.

> 💡 Si abres `index.html` con doble clic, crear cuentas puede fallar: los navegadores limitan las webs abiertas como archivo. Es normal; online funcionará.

**✅ Comprobación:** config.js tiene tu Project URL y tu clave publicable.

#### 5. Súbela y publícala
_15 min · online_

- Sube los archivos a GitHub y publícala en Cloudflare, igual que en [Tu primera web](webapp-gratis--primera-web.html) (pasos 3 y 4).
- En Supabase, **Authentication → URL Configuration**: pega la dirección de tu web en «Site URL».

**✅ Comprobación:** tu web está online.

#### 6. Prueba con dos cuentas
_10 min · la prueba de fuego_

- Crea una cuenta en tu web y guarda algo.
- Abre una ventana de incógnito, crea **otra cuenta** con otro correo y comprueba que **no ve lo de la primera**.
- Pídele a Claude que revise que en el código solo aparece la clave publicable.

**✅ Comprobación:** dos usuarios distintos ven datos distintos.

**Al terminar:** Tu web ya guarda datos de forma segura: cada persona ve solo lo suyo. Recuerda: los proyectos gratuitos de Supabase se pausan tras una semana sin uso y se reactivan con un clic.

### Receta 3: Reservas y citas online

Tus clientes eligen un hueco libre y tú ves todas las reservas en una página privada.

- ⏱ 90 min
- 👩‍🍳 Media
- 📅 Reservas
- 🍽 Resultado: un sistema de reservas en tu web
- Versión web: https://amri.es/recetas/webapp-gratis--reservas.html
- Ideas de ejemplo:
  - Citas con horario: citas de duración fija en mi horario de trabajo, sin que dos personas puedan reservar el mismo hueco
  - Mesas de restaurante: reservas de mesa por turnos (comida y cena), con un máximo de personas por turno
  - Clases con plazas: clases con un número de plazas, en las que la gente se apunta hasta que se llenan

#### 1. Define tus reglas
_10 min · antes del código_

Antes de programar, deja claro cómo funcionan tus reservas. Es lo que más errores evita.

```text
Quiero [la idea de la persona].

Hazme preguntas de una en una para definir las reglas: horario, duración, días cerrados, cuánta antelación, cuántas reservas por persona y cómo se cancela. Al final, resume las reglas en una lista.
```

**✅ Comprobación:** tienes las reglas de tus reservas en una lista.

#### 2. Supabase y la web
_20 min · construir_

- Si aún no tienes un proyecto en Supabase, créalo como en [Una web con cuentas y datos](webapp-gratis--web-con-datos.html) (paso 1).
- Pide la web:

```text
Con esas reglas, crea la web de reservas: una página pública donde se ven los huecos libres y se reserva con nombre, correo y teléfono, y una página privada, con mi cuenta, donde veo y cancelo reservas. Usa Supabase. Que la base de datos impida reservar dos veces el mismo hueco. Deja la dirección y la clave publicable en config.js.
```

**✅ Comprobación:** tienes los archivos de la web de reservas.

#### 3. Tablas con seguridad
_10 min · RLS_

```text
Crea las tablas en mi proyecto de Supabase con seguridad (RLS): cualquiera puede crear una reserva, pero solo yo puedo ver la lista completa, con los datos de contacto, y cancelar. Antes de ejecutar, explícame qué vas a crear.
```

> 💡 Los datos de tus clientes son personales: que nadie más que tú pueda verlos.

**✅ Comprobación:** las tablas están creadas con RLS activada.

#### 4. Publica y prueba
_20 min · online_

- Pega las llaves en `config.js`, súbela a GitHub y publícala en Cloudflare (como en [Tu primera web](webapp-gratis--primera-web.html)).
- Haz una reserva de prueba desde el móvil.
- Intenta reservar **el mismo hueco otra vez**: no debería dejarte.
- Entra en la página privada y cancela la prueba.

**✅ Comprobación:** no se puede reservar dos veces el mismo hueco y ves las reservas en tu página privada.

#### 5. Privacidad
_5 min · obligatorio_

Guardas nombres, correos y teléfonos: son datos personales.

```text
Escríbeme un texto corto de privacidad para el formulario de reservas: quién guarda los datos, para qué, cuánto tiempo y cómo pedir que se borren. Y una casilla de aceptación.
```

> 💡 Si tienes dudas legales, consúltalo con un profesional. Este texto es un punto de partida.

**✅ Comprobación:** el formulario tiene su texto de privacidad y la casilla.

**Al terminar:** Ya aceptas reservas online. Revisa la página privada cada día y avisa a tus clientes si algo cambia.

### Receta 4: Cambia tu web sin romperla

Añade secciones, cambia textos o colores y vuelve atrás si algo sale mal.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🛠 Mantenimiento
- 🍽 Resultado: tu web mejorada, con el historial a salvo
- Versión web: https://amri.es/recetas/webapp-gratis--cambios.html
- Ideas de ejemplo:
  - Añadir una sección: añadir una sección nueva
  - Cambiar textos o fotos: cambiar algunos textos y fotos
  - Colores de mi marca: poner los colores y la tipografía de mi marca
  - Arreglar algo roto: arreglar algo que no funciona

#### 1. Pide el cambio
_5 min · con el código delante_

```text
Este es el código de mi web: [pega tus archivos o dime el repositorio de GitHub]. Quiero [la idea de la persona]: [detalla qué].

Antes de cambiar nada, dime qué archivos vas a tocar. Cambia solo lo necesario.
```

**✅ Comprobación:** Claude te ha dicho qué va a tocar.

#### 2. Sube el cambio
_5 min · a GitHub_

- **Con el conector**: «Sube estos cambios a mi repositorio mi-web con una nota de qué has cambiado».
- **A mano**: abre el archivo en GitHub, pulsa el lápiz, pega el código nuevo y pulsa **Commit changes**.

**✅ Comprobación:** el cambio está en GitHub y Cloudflare lo publica en 1-2 minutos.

#### 3. Comprueba
_5 min · en el móvil_

- Abre tu web en el móvil (si no ves el cambio, recarga la página).
- Revisa la parte cambiada y también el resto: a veces un cambio afecta a otra cosa.

**✅ Comprobación:** el cambio se ve bien y lo demás sigue funcionando.

#### 4. Si algo se rompió, vuelve atrás
_5 min · deshacer_

GitHub guarda cada versión. Puedes volver a la anterior.

```text
Mi web se ha roto después del último cambio. Vuelve mi repositorio mi-web a la versión anterior y explícame qué había pasado.
```

**A mano**

- En GitHub, abre el archivo y pulsa **History**.
- Abre la versión anterior, copia su contenido y pégalo en el archivo actual.
- Pulsa **Commit changes**.

**✅ Comprobación:** tu web vuelve a funcionar.

**Al terminar:** Cambio publicado. Regla de oro: un cambio pequeño cada vez y pruébalo antes del siguiente.

### Receta 5: Tu propio dominio

Que tu web tenga una dirección como tunombre.com, con candado.

- ⏱ 20 min
- 👩‍🍳 Fácil
- 🌍 Dominio
- 💶 El dominio es de pago (cada año)
- Versión web: https://amri.es/recetas/webapp-gratis--dominio.html
- Ideas de ejemplo:
  - Aún no lo tengo: comprar un dominio nuevo
  - Ya lo compré en otro sitio: usar un dominio que ya tengo en otra empresa

#### 1. Elige el nombre
_5 min · ideas_

```text
Ayúdame a elegir un dominio para mi web: [de qué va]. Propón 10 nombres cortos, fáciles de decir en voz alta y de escribir, con .com o .es.
```

> 💡 Evita guiones y números: cuesta dictarlos por teléfono.

**✅ Comprobación:** tienes un nombre elegido.

#### 2. Cómpralo o tráelo a Cloudflare
_10 min · el dominio_

#### Si aún no lo tienes

- En Cloudflare abre **Domain Registration → Register Domains**, búscalo y cómpralo. Mira el precio antes: varía según la extensión.

**Si ya lo compraste en otro sitio**

- En Cloudflare pulsa **Add a site**, escribe tu dominio y elige el plan **Free**.
- Cloudflare te dará dos «nameservers». Pégalos en el panel de la empresa donde lo compraste, en la sección de DNS o servidores de nombres.
- Espera a que Cloudflare confirme: puede tardar desde minutos hasta 24 horas.

**✅ Comprobación:** el dominio aparece en tu cuenta de Cloudflare.

#### 3. Únelo a tu web
_5 min · conectar_

- Ve a **Workers & Pages** y abre tu web.
- Pulsa **Custom domains → Set up a custom domain**.
- Escribe tu dominio y confirma. Repite con `www.` delante si quieres que funcionen las dos.
- Si tu web usa Supabase, cambia «Site URL» en **Authentication → URL Configuration** por tu dominio nuevo.

**✅ Comprobación:** abres `https://tudominio` y tu web carga con candado.

**Al terminar:** Tu web ya tiene su propia dirección. Activa la renovación automática: si el dominio caduca, tu web deja de cargar.

### Receta 6: Que te encuentren en Google

Títulos, descripciones y el registro en Google para que tu web aparezca al buscarte.

- ⏱ 40 min
- 👩‍🍳 Fácil
- 🔎 Buscadores
- 🍽 Resultado: tu web lista para aparecer en Google
- Versión web: https://amri.es/recetas/webapp-gratis--google.html
- Ideas de ejemplo:
  - Negocio con local: un negocio con local al que viene la gente
  - Servicio online: un servicio o tienda que funciona online, sin local
  - Web personal: mi web personal o portfolio

#### 1. Las palabras que busca tu cliente
_10 min · pensar como él_

```text
Mi web es de [la idea de la persona]: [qué haces y dónde]. ¿Qué escribiría en Google alguien que necesita lo que ofrezco? Dame 10 búsquedas reales, de más a menos probables.
```

**✅ Comprobación:** tienes la lista de búsquedas.

#### 2. Título, descripción y textos
_10 min · la web_

```text
Este es el código de mi web: [pégalo o dime el repositorio]. Con esas búsquedas, mejora el título de cada página, la descripción que sale en Google y los títulos de las secciones. Añade también un archivo sitemap.xml. Que suene natural, sin repetir palabras a lo loco.
```

- Sube los cambios a GitHub (receta [Cambia tu web sin romperla](webapp-gratis--cambios.html)).

**✅ Comprobación:** tus páginas tienen título y descripción, y tienes sitemap.xml.

#### 3. Avisa a Google
_15 min · Search Console_

- Entra en [Google Search Console](https://search.google.com/search-console) con tu cuenta de Google.
- Añade tu web. Google te pedirá demostrar que es tuya: si no entiendes el método, haz una captura y pregúntale a Claude.
- En **Sitemaps**, escribe `sitemap.xml` y envíalo.

> 💡 Funciona mucho mejor con tu propio dominio. Mira la receta «Tu propio dominio».

**✅ Comprobación:** Search Console dice que ha recibido tu sitemap.

#### 4. Tu ficha de Google Maps
_15 min · negocio local_

Si tienes local, la ficha de Google (Perfil de Empresa) es lo que más te hace aparecer en el mapa.

- Entra en [Perfil de Empresa de Google](https://business.google.com) y crea o reclama tu negocio.
- Pide a Claude la descripción:

```text
Escribe la descripción de mi negocio para Google Maps (máximo 750 caracteres): qué hago, para quién, dónde y qué me diferencia. Sin exagerar.
```

- Pon el enlace a tu web, tu horario y fotos reales.

**✅ Comprobación:** tu ficha de Google tiene descripción, horario, fotos y enlace a tu web.

**Al terminar:** Tu web está preparada. Google tarda unos días o semanas en mostrarla: sé paciente y sigue mejorando el contenido.

### Receta 7: Cuántas visitas tienes (sin cookies)

Estadísticas sencillas de tu web con Cloudflare, sin banner de cookies.

- ⏱ 15 min
- 👩‍🍳 Fácil
- 📈 Estadísticas
- 🍽 Resultado: sabes cuánta gente visita tu web y qué mira
- Versión web: https://amri.es/recetas/webapp-gratis--visitas.html
- Ideas de ejemplo:
  - Visitas en general: cuánta gente visita mi web y qué páginas mira
  - De dónde llegan: de dónde llega la gente: Google, redes o enlaces

#### 1. Activa la analítica de Cloudflare
_5 min · un interruptor_

Cloudflare tiene estadísticas de visitas gratuitas que no usan cookies, así que no necesitas el aviso de cookies por ellas.

- En Cloudflare busca **Web Analytics** en el menú (suele estar dentro de **Analytics & Logs**).
- Añade tu web. Si te da un fragmento de código, pídele a Claude que lo añada a tu web y súbelo.

**✅ Comprobación:** ves tu web en la lista de Web Analytics.

#### 2. Espera unos días
_La paciencia del cocinero_

Las estadísticas necesitan visitas para decir algo. Comparte tu web y vuelve dentro de una semana.

**✅ Comprobación:** han pasado unos días desde que la activaste.

#### 3. Que Claude lo interprete
_5 min · aprender_

```text
Estas son las estadísticas de mi web del último mes: [captura o datos]. Quiero saber [la idea de la persona]. Dime qué ves y 3 cambios concretos para mejorar.
```

**✅ Comprobación:** sabes qué mejorar en tu web.

**Al terminar:** Ya ves tus visitas. Mira las estadísticas una vez al mes y pregúntale a Claude qué mejorar.

### Receta 8: Hazla con Claude Code, sin copiar y pegar

Claude trabaja en una carpeta de tu ordenador: crea los archivos, los sube y la publica él.

- ⏱ 30 min
- 👩‍🍳 Media
- 🤖 Agente
- 💶 Necesita un plan de pago de Claude
- Versión web: https://amri.es/recetas/webapp-gratis--claude-code.html
- Ideas de ejemplo:
  - Una web nueva: una web nueva
  - Mejorar la que ya tengo: mejorar mi web, que está en mi repositorio de GitHub

#### 1. Abre Claude Code
_10 min · preparar_

Claude Code es Claude trabajando en tu ordenador. Puedes usarlo en la app de escritorio de Claude (sin terminal) o en la terminal.

- Si nunca lo has usado, haz antes la receta [Tu primer agente](primer-agente.html).
- Crea una carpeta **mi-web** y ábrela en Claude Code.

**✅ Comprobación:** Claude Code está abierto en la carpeta mi-web.

#### 2. Añade el plugin de AMRI (opcional)
_3 min · la receta, en comando_

Con el plugin, Claude sigue este mismo libro paso a paso.

```text
/plugin marketplace add amriwebapp/amri
```

```text
/plugin install amri@amri
```

**✅ Comprobación:** tienes los comandos que empiezan por /amri:.

#### 3. Pídela
_15 min · Claude trabaja_

```text
/amri:webapp-gratis [la idea de la persona]: [descríbela]. Explícame cada paso con palabras sencillas antes de hacerlo y pídeme permiso antes de subir o publicar nada.
```

> 💡 ¿Sin el plugin? Escribe lo mismo sin el comando del principio.

> 💡 Las cuentas, los inicios de sesión y los pagos los haces siempre tú: Claude te dirá qué pulsar.

**✅ Comprobación:** Claude ha creado la web, la ha subido a GitHub y te da la dirección publicada.

**Al terminar:** Claude ha hecho la web contigo de principio a fin. Así es trabajar con un agente.

## Al terminar

Tu cocina está lista. Empieza por «Tu primera web» y, después, elige la receta que quieras.

## Extras (opcionales, después de servir)

### Extra 1. Si algo no funciona
_Siempre · revisa esto_

- **La web sale en blanco o con error 404**: en Cloudflare, revisa que la carpeta de salida sea donde está `index.html`.
- **Faltan archivos en GitHub**: en Mac, las carpetas que empiezan por punto están ocultas; pulsa ⌘ + Mayús + . en Finder para verlas.
- **Algo se ha roto**: copia el error y pégalo en Claude:

```text
Mi web da este error: [pega el error o describe qué pasa]. Lo último que cambié fue: [qué cambiaste]. ¿Cómo lo arreglo? Explícamelo paso a paso.
```

### Extra 2. Seguridad básica
_Siempre · importante_

- En el código de la web solo pueden ir claves **públicas** (como la clave publicable de Supabase). Las secretas, nunca.
- Si un día usas la API de Claude u otra clave secreta, guárdala en un Worker de Cloudflare, no en la web.
- Haz un cambio pequeño cada vez y pruébalo antes del siguiente.

## Sigue con

- `/amri:chatbot-web` · Un chatbot para tu web
- `/amri:figma-a-web` · De Figma a web real
- `/amri:automatiza-tareas` · Automatiza tareas aburridas con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
