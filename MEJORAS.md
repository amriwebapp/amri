# Mejoras de AMRI · plataforma para aprender a usar Claude

Lista de trabajo después de revisar la web como una persona que empieza (octubre de 2026).
Objetivo: que AMRI sea **la mejor plataforma para aprender a usar Claude**, en todos los sentidos y con el mínimo de tecnicismos.

Leyenda: ☐ pendiente · ☑ hecho

## Cambios generales
- ☑ **A. «Academia» → «plataforma».** En todos los textos (es / en / ar), páginas, plugin, manifiesto y páginas legales. La receta del chatbot conserva «academia / cursos» porque ahí es un tipo de negocio.
- ☑ **B. Menos tecnicismos.** Titular nuevo («Aprende a usar Claude, a tu ritmo»), «MCP» fuera de etiquetas y títulos, «open source» → «código abierto», sin *fork* ni *pull request* en la portada, «webapp» → «web» y glosario ampliado (agente, subagente, Cowork, clave publicable).

## 🔴 Graves
- ☑ **1. No se habla de agentes.** Pregunta «¿Qué es un agente?» en la portada, receta propia y el agente en el mapa de conceptos.
- ☑ **2. Ninguna receta enseña Claude Code.** Nueva receta «Tu primer agente: Claude trabaja por ti» (`primer-agente`): app de escritorio (Cowork o Code) y, si quieres, terminal; plan primero, permisos, deshacer, `/rewind`, modo plan y subagentes. Es la receta destacada.
- ☑ **3. El plugin no encaja con «sin saber programar».** Aviso de requisitos arriba del todo en la página del plugin, con enlaces a «Empieza aquí» y «Tu primer agente», y el camino sin terminal (Claude Code en la app de escritorio).
- ☑ **4. La fecha «Revisada el…» era falsa.** Ya no se pone sola: solo aparece cuando alguien rellena la fecha a mano tras probar la receta (`revised` en `assets/datos.js`).
- ☑ **5. No quedaba claro qué es gratis.** Precio honesto en cada tarjeta (*Gratis*, *Según tu plan*, *Plan de pago*, *De pago*, *Prueba gratis*), leyenda sobre el recetario, pregunta frecuente reescrita y línea 💶 de cada receta igualada.
- ☑ **6. Webapp: no se explicaba cómo bajar los archivos del chat.** Añadido «Baja los archivos a tu ordenador» (botón de descarga o .zip).

## 🟠 Importantes
- ☑ **7. El menú de conectores tenía dos nombres.** Ahora siempre «Personalizar → Conectores (Customize → Connectors)», también en la ayuda «¿Algo falla?».
- ☑ **8. Instrucciones que podían estar desactualizadas.** Cloudflare: importar el repositorio desde *Workers & Pages* (vale Pages o Worker, dirección `.pages.dev` o `.workers.dev`) y consejo de pegar una captura en Claude si la pantalla es distinta. Supabase: «clave publicable» (antes «anon»). Conector propio: extra para instalarlo como extensión (.mcpb) sin editar archivos.
- ☑ **9. «Doble clic en index.html» fallaba con cuentas de usuario.** Explicado: se prueba cuando está publicada.
- ☑ **10. Las rutas no tenían un primer paso claro.** «Empieza por aquí» del inicio lleva a la receta 0, que sale la primera en «Primeros pasos», en el recetario y en el buscador de proyectos.
- ☑ **11. Faltaban explicaciones de los conceptos base.** Nueva receta «Empieza aquí: conoce a Claude» (`empieza-aqui`) con el mapa chat · proyecto · conector · Skill · plugin · agente, dónde usar Claude, planes y privacidad. Más una pregunta frecuente con el resumen.
- ☑ **12. El nombre de algunas recetas cambiaba entre la web y el plugin.** Recetas renombradas a `navegador-chrome` y `skills-propias` (las direcciones antiguas redirigen). El plugin ya no tiene la skill sobrante `instagram-ia` y el generador borra solo las skills que ya no tienen receta.
- ☑ **13. Jev y GuruSup en «Maestría».** Nueva categoría «Para empresas» (también en el plugin) marcada como de pago.

## 🟡 Menores
- ☑ **14. «Una receta nueva cada semana».** Ahora: «Te avisamos cuando haya recetas nuevas».
- ☑ **15. No había contacto visible.** `contact@amri.es` en el pie de la portada y de cada receta; quitado el texto «RSS» que no se usaba.
- ☑ **16. Contribuir era difícil.** Se propone una receta por correo; GitHub queda como opción. Igual en la receta de Skills.
- ☑ **17. El aviso de instrucciones trampa solo estaba en Chrome.** Añadido a Gmail, Slack y Notion (y a la receta de agentes).
- ☑ **18. Promesas exageradas.** Fuera «en una hora la tendrás publicada», «en minutos» y «es fascinante»; la web marca «1-2 horas, a tu ritmo».
- ☑ **19. Traducciones incompletas.** Comprobado con un script: las 24 recetas existen en es / en / ar, con las mismas opciones y los mismos pasos, y todos los pasos se generan sin errores.

## Libros de recetas (octubre de 2026)
- ☑ **Web solo en español.** Fuera el inglés, el árabe, el selector y la ventana de idioma. La traducción se hará más adelante de otra forma.
- ☑ **Motor de libros.** Página del libro con «Antes de empezar» y el índice de recetas, una página por receta, progreso por receta, aviso de «prepara antes la cocina» y siguiente receta del libro. En la portada, la tarjeta dice «📕 N recetas» y el buscador encuentra las recetas de dentro. En el plugin, una skill por libro.
- ☑ **Libro piloto: Higgsfield**, con 7 recetas: foto de producto, vídeo realista, vídeo UGC, vídeo animado, de foto a vídeo, personaje que siempre sale igual y anuncio vertical para redes.
- ☑ **Libro de redes sociales** (8 recetas): biografía, reel o TikTok, carrusel, LinkedIn, una idea para todas tus redes, de un contenido largo a una semana, el mes planificado y medir.
- ☑ **Libro de la web** (8 recetas): tu primera web, web con cuentas y datos, reservas, cambiar sin romper, dominio propio, Google, visitas sin cookies y hacerla con Claude Code.
- ☐ **Siguientes libros.** Propuesta: Canva, Asistente e Imágenes; después, el resto.
- ☐ **Probar el libro de Higgsfield con una cuenta real**, sobre todo UGC y Soul ID, que dependen de lo que permita el conector.

## Pendiente de comprobar a mano
- Recorrer en un móvil real la portada (animaciones y la nueva categoría a lo ancho).
- Seguir de verdad «Tu primer agente» con una cuenta de pago para confirmar los nombres actuales de los menús (Cowork / Code) y, después, poner su fecha en `revised`.
- Registro, subida de proyectos y newsletter.
