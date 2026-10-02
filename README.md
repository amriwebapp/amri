# AMRI · Academia abierta de IA

Academia gratuita y open source para aprender a crear con IA usando Claude y sus conectores (MCP).
La propia web es un ejemplo: está hecha con Claude siguiendo sus propias recetas.

## Estructura

```
index.html            Portada (academia)
i18n.js               Textos en español, inglés y árabe
assets/academia.css   Estilos y animaciones de la portada
assets/academia.js    Animaciones de scroll, órbita, categorías, «cómo funciona», recetario
assets/receta.css/js  Capa común de las páginas de receta (portada, tema, siguiente receta)
recetas/*.html        Carcasa de cada receta (se genera con tools/shells.py)
recetas/data/         Contenido de cada receta en es / en / ar
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

## Añadir una receta

1. Crea `recetas/data/<slug>.es.js` (y `.en.js`, `.ar.js`) copiando uno existente, y ejecuta `python3 tools/shells.py` para generar la página.
2. Añade su `slug` a `RECETAS` (y, si quieres, a `PATHS`) en `assets/academia.js`, y a `ORDER` en `assets/receta.js`.
3. Añade su tarjeta (título, descripción, chips) en `cards` de `i18n.js`, en el mismo orden.
4. Pon su imagen en `img/<slug>.jpg` o `img/<slug>.svg`.

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
