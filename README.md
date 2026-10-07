# AMRI · Plataforma abierta de IA

Plataforma gratuita y open source para aprender a crear con IA usando Claude y sus conectores (MCP).
La propia web es un ejemplo: está hecha con Claude siguiendo sus propias recetas.

## Estructura

```
index.html            Portada
i18n.js               Textos de la web (solo en español)
assets/academia.css   Estilos y animaciones de la portada
assets/academia.js    Animaciones de scroll, órbita, categorías, «cómo funciona», recetario
assets/receta.css/js  Capa común de las páginas de receta (portada, tema, siguiente receta)
recetas/*.html        Carcasa de cada receta (se genera con tools/shells.py)
recetas/data/         Contenido de cada receta o libro (<slug>.es.js)
assets/libro.js       Libros de recetas: «Antes de empezar», índice y recetas de dentro
assets/libros.js      Índice de libros (lo genera tools/shells.py)
assets/motor.js       Motor de pasos común a todas las recetas
assets/cuenta.js      Registro, acceso, comunidad y subida de proyectos
assets/panel.js       Perfil (recorrido) y panel de revisión
perfil.html, admin.html
img/                  Ilustraciones (.jpg originales y .svg generados)
tools/                Scripts para regenerar ilustraciones y recetas nuevas
```

## Antes de publicar

1. Cambia `REPO` al principio de `assets/academia.js` por la URL de tu repositorio.
2. Publica la carpeta tal cual en Cloudflare Pages, GitHub Pages o Netlify (es 100 % estática).

## Cuentas y comunidad (Supabase)

- Proyecto Supabase: `amri-academia` (región París). La URL y la clave **pública** están en `assets/cuenta.js`.
  Es seguro que estén en la web: la protección la hacen las reglas RLS de la base de datos.
- Tablas: `profiles` (usuario único, nombre, nacimiento y teléfono opcionales) y `submissions` (proyectos enviados).
- PDF: se guardan en el bucket `proyectos` (máx. 10 MB, solo PDF, cada usuario en su carpeta).
- Admin: la cuenta registrada con el correo del propietario es admin automáticamente al confirmar el correo.
  Revisa los envíos en `admin.html`. Solo los aprobados aparecen en la comunidad de cada receta.
- Perfil y recorrido de aprendizaje: `perfil.html`.

### Ajustes a hacer en el panel de Supabase (Authentication)
1. **URL Configuration → Site URL**: tu dominio (https://tudominio.com). Añade también `https://tudominio.com/perfil.html` en *Redirect URLs*.
2. **Providers → Email**: mínimo de contraseña 8 y «Confirm email» activado.
3. **SMTP**: el correo de Supabase por defecto tiene un límite muy bajo de envíos por hora; conecta un SMTP propio (Resend, Brevo…) antes del lanzamiento.

## Páginas legales y newsletter

- `aviso-legal.html`, `privacidad.html` y `cookies.html` se generan con `python3 tools/legal.py`.
  **Antes de publicar**, rellena en ese archivo tus datos (nombre o razón social, NIF, dirección y correo de contacto) y vuelve a ejecutarlo.
- La newsletter guarda los correos en la tabla `newsletter` de Supabase (con consentimiento explícito).
  Desde `admin.html` → pestaña «Newsletter» puedes verlos, borrarlos y descargarlos en CSV.

## Libros de recetas

Un libro es una receta con una preparación común («Antes de empezar», una sola vez) y varias recetas concretas dentro.
El primero es `recetas/data/higgsfield-cine.es.js`: cópialo como plantilla.

- En el archivo de datos, `R.steps` es «Antes de empezar» y `recetas:[…]` son las recetas de dentro. Cada una tiene `s` (su nombre en la dirección), `t`, `d`, `meta`, `q`, `ph`, `fin`, `def`, `apps` y `steps`.
- `python3 tools/shells.py` crea la página del libro (`recetas/<libro>.html`), una página por receta (`recetas/<libro>--<receta>.html`) y `assets/libros.js`.
- El progreso se guarda por separado: el libro en `R.key` y cada receta en `R.key/<receta>`.
- En el plugin, cada libro es una sola skill que elige la receta adecuada.

## Añadir una receta

1. Crea `recetas/data/<slug>.es.js` copiando uno existente (o un libro, si va a tener varias recetas dentro).
2. Añade el `slug` **al final** de estas listas (el orden debe ser el mismo en todas, porque la tarjeta se busca por posición):
   `RECETAS` en `assets/academia.js` · `ORDER` (y `SVG`) en `assets/receta.js` · `order` (y `svg`) en `assets/datos.js` · `ORDER` en `tools/plugin.js` · `ORDER` en `plugin.html`.
3. Añade su tarjeta al final de `cards` en `i18n.js`. El tercer chip es el precio: *Gratis*, *Según tu plan*, *Plan de pago* o *De pago*.
4. Ponla en una categoría (`PATHS` en `assets/academia.js` y `paths` en `assets/datos.js`, `CATS` en `tools/plugin.js`), en `META`/`ORDER`/`NEEDS` de `assets/construir.js` y en `TOOLS` de `assets/logos.js`.
5. Pon su imagen en `img/<slug>.svg` (con `python3 tools/gen_thumbs.py`) o `img/<slug>.jpg`.
6. Ejecuta `python3 tools/shells.py` y `node tools/plugin.js`, y sube también lo que generan.
7. Cuando alguien haya seguido la receta entera y funcione, pon la fecha en `revised` de `assets/datos.js`.

## Licencia

Código: MIT · Contenido: CC BY-SA 4.0

## Marca
`img/brand/` contiene el logo de AMRI (la A y la I resaltadas, con una chispa sobre la I):
icono principal (`amri-icono.svg`), monograma (`amri-monograma.svg`, también favicon), versiones crema y noche,
logotipo horizontal claro/oscuro, iconos PNG para móvil y `manifest.webmanifest` para poder instalar la web como app.
La imagen para redes (`img/og-amri.png`) usa el mismo logo.

## Plugin para Claude Code
Las recetas también existen como **skills** de un plugin de Claude Code, para que Claude las cocine con la persona.

```
/plugin marketplace add amriwebapp/amri
/plugin install amri@amri
/amri:webapp-gratis una web para mi panadería      ← una receta
/amri:chef una tienda de velas con reservas        ← el chef combina varias
```

- `.claude-plugin/marketplace.json`: el catálogo (este repositorio es el «marketplace»).
- `plugin/`: el plugin (`plugin.json` + `skills/<receta>/SKILL.md`).
- **No edites los SKILL.md a mano.** Se generan desde las recetas de la web con `node tools/plugin.js`; el chef sale de `tools/chef.template.md`. El script también crea `assets/plugin-map.js`, que usa la web para mostrar el comando de cada receta.
- Después de cambiar o añadir recetas: `node tools/plugin.js`, sube la versión en `plugin/.claude-plugin/plugin.json` y haz commit.
- Comprobar: `claude plugin validate .` y `claude plugin validate plugin`.

## Guía dentro de las recetas (assets/guia.js)
- **Revisada el…**: fecha en `AMRI_DATA.revised` (assets/datos.js). Actualízala cuando revises una receta.
- **Cómo encaja todo**: mapa automático con las herramientas de la receta (`TOOLS` en assets/logos.js).
- **Glosario**: palabras subrayadas con su explicación (`GLOSS` en assets/guia.js, en es/en/ar).
- **¿Por qué este paso? / ¿Algo falla?**: explicaciones y soluciones que se eligen según el texto del paso (`UNDER` y `FIX`).
- **¿Qué quieres construir?** y **Proyectos completos** en la portada: assets/construir.js, con `keywords`, `projects` y `buildOrder` en assets/datos.js.
- **Insignias** en el perfil: se calculan a partir de las recetas aprobadas (assets/panel.js).
