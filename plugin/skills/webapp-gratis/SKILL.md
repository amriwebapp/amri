---
name: webapp-gratis
description: "Receta de AMRI «Tu web online y gratis». Crea y publica una webapp completa con Claude, GitHub y Cloudflare, sin costes y sin programar. Úsala cuando la persona quiera hacer esto o algo parecido, paso a paso y aunque no sepa programar."
argument-hint: "[tu idea]"
---

# Tu web online y gratis

Crea y publica una webapp completa con Claude, GitHub y Cloudflare, sin costes y sin programar.

- ⏱ 1-2 horas, a tu ritmo
- 👩‍🍳 Sin saber programar
- 💶 0 € para empezar
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

- **Claude**: es el cocinero. Escribe el código por ti.
- **GitHub**: la nevera. Guarda tus archivos.
- **Supabase**: la despensa. Guarda los datos y las cuentas de usuario.
- **Cloudflare**: el mostrador. Publica tu web para que cualquiera la vea.

## Ideas de ejemplo

- **Portfolio / presentación:** una web de presentación personal con mi trayectoria, mis proyectos y un enlace para contactarme
- **Web de mi negocio:** una página para mi negocio con servicios, precios, opiniones de clientes y botón de contacto
- **Blog / notas:** un blog de notas donde cada persona crea su cuenta y puede escribir, editar y borrar sus entradas
- **Web con formulario:** una web de presentación con un formulario de contacto que guarda los mensajes que me envían
- **Reservas / citas:** una web donde los clientes reservan una cita y yo veo todas las reservas
- **Catálogo de productos:** un catálogo de productos que yo actualizo desde un panel privado, sin cobro online

## Antes de empezar

Pregunta a la persona: **¿Necesita guardar datos o cuentas de usuario?** Si dudas, elige «Sí»: funciona igual y luego puedes ignorarlo. Para cobrar online hace falta un servicio de pagos aparte; empieza sin cobros.

Si responde «No», sáltate los pasos marcados con _(solo si la respuesta… es «Sí»)_ y adapta los demás a esa respuesta.

## Pasos

### 1. Prepara los ingredientes
_5 min · crear cuentas_

Vas a crear cuatro cuentas gratuitas. Empieza por GitHub: con ella podrás entrar en las demás.

#### Pasos

- Crea tu cuenta en [GitHub](https://github.com/signup).

- Crea tu cuenta en [Claude](https://claude.ai).

- Crea tu cuenta en [Supabase](https://supabase.com) (botón «Sign in with GitHub»).

- Crea tu cuenta en [Cloudflare](https://dash.cloudflare.com/sign-up).

**✅ Comprobación:** tienes las cuatro pestañas abiertas y has entrado en todas.

### 2. Pídele la receta a Claude
_10 min · generar la web_

Le vas a describir tu idea a Claude. Él crea **3 archivos** que forman tu web. No tienes que entenderlos ahora.

#### Pasos

- Abre un chat nuevo en Claude.
- Copia este mensaje y pégalo:

```text
Quiero [la idea de la persona].

Hazla como una web sencilla con tres archivos: index.html, styles.css y app.js. Que se vea bien en el móvil y con un diseño cuidado. Que guarde los datos en Supabase y deja las claves de conexión en un archivo aparte llamado config.js. Explícame cada archivo con palabras simples, como si no supiera programar.
```

**¿Qué significa cada parte del mensaje?**

- **«Quiero…»**: tu idea. Puedes cambiarla por la tuya.

- **index.html, styles.css, app.js**: la página, su aspecto y su funcionamiento.

- **Supabase**: dónde se guardarán los datos y las cuentas.
- **config.js**: un archivo donde pegarás tus «llaves» de Supabase más adelante.

- **«Como si no supiera programar»**: para que Claude te lo explique fácil.

> 💡 Si algo no te gusta, díselo con tus palabras: «hazlo más oscuro», «pon el botón más grande».

#### Baja los archivos a tu ordenador

- Crea en tu ordenador una carpeta llamada **mi-app**.
- En el chat, cada archivo tiene un botón de **descargar**. Pulsa en cada uno y guárdalo en **mi-app**.
- ¿No ves el botón? Pídele: «Dame los archivos en un .zip para descargar». Descomprímelo dentro de **mi-app**.

> 💡 Si vas a usar el conector de GitHub (paso siguiente), Claude puede subir los archivos él solo. Descargarlos igualmente te deja una copia.

**✅ Comprobación:** tienes los archivos de tu web dentro de la carpeta mi-app de tu ordenador.

### 3. Conecta Claude con tus herramientas
_5 min · conectores_

Un conector es un permiso para que Claude use GitHub y Supabase por ti, sin copiar y pegar. Funciona con MCP, el estándar que permite a Claude usar herramientas externas.

#### Pasos

- En Claude abre **Personalizar → Conectores** (en inglés: **Customize → Connectors**).
- Pulsa **Conectar** junto a GitHub y autoriza con tu cuenta.
- Haz lo mismo con Supabase.

> 💡 Si tu plan no muestra conectores, no pasa nada: cada paso siguiente tiene una alternativa manual.

**✅ Comprobación:** GitHub y Supabase aparecen como «Conectado».

### 4. Que Claude prepare la base de datos _(solo si la respuesta a «Necesita guardar datos o cuentas de usuario» es «Sí»)_
_5 min · crear las tablas_

Una tabla es como una hoja de cálculo donde se guardan tus datos. Claude la crea por ti, con seguridad para que **cada usuario vea solo lo suyo**.

#### Pasos

- En Supabase pulsa **New project**, ponle nombre y elige una región cercana. Espera un par de minutos.

- Vuelve al mismo chat de Claude y pega:

```text
Crea en mi proyecto de Supabase las tablas que necesita esta app. Usa los mismos nombres de campos que en el código. Activa la seguridad (RLS) para que cada usuario vea y modifique solo sus propios datos. Antes de ejecutar nada, dime qué vas a crear.
```

> 💡 Usa una sola tabla para todos los usuarios, con una columna que indica de quién es cada fila. Es más sencillo que una tabla por persona y igual de privado.

**No tengo el conector o no funciona**

- Pídele a Claude: «Dame el SQL para crear las tablas con seguridad RLS».

- En Supabase abre **SQL Editor**, pega el código y pulsa **Run**.

**✅ Comprobación:** en Supabase, en **Table Editor**, ves tu tabla y aparece la seguridad (RLS) activada.

### 5. Enchufa la web a Supabase _(solo si la respuesta a «Necesita guardar datos o cuentas de usuario» es «Sí»)_
_5 min · las dos llaves_

Tu web necesita dos datos para hablar con tu base de datos: una dirección y una llave pública.

#### Pasos

- En Supabase abre **Project Settings → API**.

- Copia la **Project URL** y la **clave publicable** (_publishable key_; en proyectos antiguos se llama **anon public**).

- Ábrelas en el archivo `config.js` y pégalas donde Claude indicó. Si no sabes dónde, pregúntale.

- Guarda el archivo. La probarás de verdad cuando esté publicada (paso «Publica tu web»).

> 💡 Si abres `index.html` con doble clic, el diseño se verá, pero crear cuentas puede fallar: los navegadores limitan las webs abiertas como archivo. Es normal; online funcionará.

> 💡 ⚠️ Nunca uses la clave **secreta** (_secret_ o **service_role**) en tu web: da acceso total a tus datos.

**✅ Comprobación:** config.js tiene tu Project URL y tu clave publicable.

### 6. Guarda todo en GitHub
_5 min · subir los archivos_

Subes tus 3 archivos a GitHub. Cloudflare los leerá de ahí para publicar tu web.

#### Con el conector

- Dile a Claude: «Crea un repositorio llamado mi-app y sube estos archivos».

**Sin conector: hacerlo a mano**

- En GitHub pulsa **New repository** y llámalo **mi-app**.

- Pulsa **uploading an existing file**, arrastra tus archivos y confirma con **Commit changes**.

**✅ Comprobación:** ves tus archivos dentro del repositorio mi-app en GitHub.

### 7. Publica tu web en Cloudflare
_10 min · ponerla online_

Cloudflare Pages coge tu repositorio y lo convierte en una web pública con candado (HTTPS).

#### Pasos

- En Cloudflare abre **Workers & Pages → Create** y elige importar un repositorio de GitHub (**Import a repository** o **Connect to Git**).

- Elige el repositorio **mi-app**.

- Deja vacío «Build command» y pon `/` en «Build output directory».

- Pulsa **Save and Deploy** (o **Deploy**) y espera 1-2 minutos.
- Si ves pantallas distintas a estas, haz una captura, pégala en Claude y pregúntale qué poner.

- En Supabase, **Authentication → URL Configuration**: pega la dirección de tu web en «Site URL».

**✅ Comprobación:** abres tu dirección (termina en `.pages.dev` o `.workers.dev`) y tu web carga.

### 8. Prueba antes de servir
_5 min · revisión final_

Antes de compartirla, comprueba que todo funciona y es seguro.

#### Pasos

- Abre tu web desde el móvil y crea una cuenta.

- Crea otra cuenta con otro correo y comprueba que **no ve los datos de la primera**.
- Revisa que en tu código solo aparece la clave **publicable**.

- Si más adelante usas la API de Claude u otra clave secreta, guárdala en un Worker de Cloudflare, nunca en la web.

> 💡 Los proyectos gratuitos de Supabase se pausan tras una semana sin uso y se reactivan con un clic. Revisa los límites actuales en sus páginas de precios.

**✅ Comprobación:** dos usuarios distintos ven datos distintos.

## Al terminar

Tu webapp está online. Cada vez que cambies algo y lo subas a GitHub, Cloudflare la actualiza sola. Más abajo tienes dos extras: dominio propio y mantenimiento.

## Extras (opcionales, después de servir)

### Extra 1. Conecta tu propio dominio
_20 min · opcional_

Ahora tu web vive en `mi-app.pages.dev`. Con un dominio propio (por ejemplo `tunombre.com`) tendrá una dirección a tu medida. Es lo único que no es gratis: el precio varía según la extensión y dónde lo compres, así que míralo antes de pagar.

#### El camino más fácil: comprarlo en Cloudflare

- En Cloudflare abre **Domain Registration → Register Domains**, busca el nombre que quieres y cómpralo.

- Ve a **Workers & Pages** y abre tu proyecto **mi-app**.

- Pulsa **Custom domains → Set up a custom domain**.

- Escribe tu dominio y pulsa **Continue → Activate domain**. Cloudflare configura todo automáticamente.

- Repite con la versión `www.tunombre.com` si quieres que ambas funcionen.

- En Supabase, **Authentication → URL Configuration**: cambia «Site URL» por tu nuevo dominio, para que el login siga funcionando.

**Ya compré el dominio en otro sitio**

- En Cloudflare pulsa **Add a site**, escribe tu dominio y elige el plan **Free**.

- Cloudflare te dará dos «nameservers». Pégalos en el panel de tu registrador, en la sección de DNS o servidores de nombres.

- Espera a que Cloudflare confirme (puede tardar desde minutos hasta 24 horas) y sigue los pasos 2 a 4 de arriba.

> 💡 Activa la renovación automática del dominio: si caduca, tu web deja de cargar.

**✅ Comprobación:** abres `https://tunombre.com` y tu web carga con candado.

### Extra 2. Mantén y mejora tu web
_Siempre · ideas y consejos_

Una web no se acaba: se va cuidando y ampliando a tu gusto. Así se cambia algo, paso a paso.

#### Cómo añadir o cambiar algo

- Vuelve a tu chat con Claude (o abre uno nuevo y pega tus archivos).

- Pide el cambio con estas palabras:

```text
Este es el código de mi web: [pega aquí tus archivos]. Quiero añadir: [tu mejora]. Cambia solo lo necesario y dime qué archivos has tocado.
```

- Sube los archivos nuevos a GitHub: con el conector, pídele «actualiza el repositorio»; a mano, abre el archivo en GitHub, pulsa el lápiz, pega el código y pulsa **Commit changes**.

- Cloudflare publica el cambio solo en 1-2 minutos.

**💡 Ideas para mejorar tu web**

- Modo oscuro y colores de tu marca.

- Un icono para la pestaña del navegador y un título y descripción cuidados para que te encuentren mejor en buscadores.

- Botones para compartir en redes o enlaces a tus perfiles.

- Estadísticas de visitas (Cloudflare tiene una opción de analítica web).

- Una versión en otro idioma.

- Buscador y filtros para tus datos.
- Exportar los datos a Excel o CSV.
- Subir imágenes o archivos (Supabase incluye almacenamiento).
- Entrar con la cuenta de Google.
- Un panel de administrador solo para ti.

#### Rutina de mantenimiento

- **Antes de un cambio grande:** pídele a Claude que te resuma qué va a tocar. GitHub guarda el historial, así que puedes volver a una versión anterior.

- **Cada mes:** abre tu web en el móvil y comprueba que todo funciona.

- **Si Supabase se pausó por falta de uso:** entra en tu proyecto y pulsa restaurar.
- **Copia de tus datos:** en Supabase, en **Table Editor**, puedes exportar tus tablas a CSV.

- **Revisa los límites gratuitos** de vez en cuando en las páginas de precios de las herramientas que usas.

#### Si algo se rompe

No te asustes: copia el mensaje de error y pídele ayuda a Claude.

```text
Mi web da este error: [pega el error o describe qué pasa]. Lo último que cambié fue: [qué cambiaste]. ¿Cómo lo arreglo? Explícamelo paso a paso.
```

> 💡 Una regla que evita casi todos los sustos: haz un cambio pequeño cada vez y pruébalo antes de pedir el siguiente.

## Sigue con

- `/amri:chatbot-web` · Un chatbot para tu web
- `/amri:figma-a-web` · De Figma a web real
- `/amri:automatiza-tareas` · Automatiza tareas aburridas con IA
- `/amri:chef` · combina varias recetas en un proyecto propio
