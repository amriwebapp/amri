# AMRI · Academia abierta de IA

Academia gratuita y open source para aprender a crear con IA usando Claude y sus conectores (MCP).
La propia web es un ejemplo: está hecha con Claude siguiendo sus propias recetas.

## Estructura

```
index.html            Portada (academia)
i18n.js               Textos en español, inglés y árabe
assets/academia.css   Estilos y animaciones de la portada
assets/academia.js    Animaciones de scroll, órbita, rutas, recetario
assets/receta.css/js  Capa común de las páginas de receta (portada, tema, siguiente receta)
recetas/*.html        Una página por receta (motor interactivo con progreso guardado)
img/                  Ilustraciones (.jpg originales y .svg generados)
tools/                Scripts para regenerar ilustraciones y recetas nuevas
```

## Antes de publicar

1. Cambia `REPO` al principio de `assets/academia.js` por la URL de tu repositorio.
2. Publica la carpeta tal cual en Cloudflare Pages, GitHub Pages o Netlify (es 100 % estática).

## Añadir una receta

1. Duplica una receta de `recetas/` y cambia el objeto `R` (opciones, ingredientes y pasos).
2. Añade su `slug` a `RECETAS` (y, si quieres, a `PATHS`) en `assets/academia.js`, y a `ORDER` en `assets/receta.js`.
3. Añade su tarjeta (título, descripción, chips) en `cards` de `i18n.js`, en el mismo orden.
4. Pon su imagen en `img/<slug>.jpg` o `img/<slug>.svg`.

## Licencia

Código: MIT · Contenido: CC BY-SA 4.0
