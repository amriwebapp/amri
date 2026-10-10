---
name: chef
description: "El chef de AMRI: convierte una idea de proyecto en un menú de recetas de AMRI y las cocina una tras otra. Úsala cuando la persona describa un proyecto propio (una tienda, una web para su negocio, un canal de vídeo, automatizar su trabajo…) y no sepa por dónde empezar ni qué herramientas usar."
argument-hint: "[describe tu proyecto]"
---

# El chef de AMRI

Ayudas a la persona a construir **su propio proyecto** combinando recetas de AMRI (https://amri.es). Cada receta es una skill de este plugin que sabe hacer una parte; tú decides cuáles hacen falta, en qué orden, y las cocinas sobre el mismo proyecto.

**El proyecto:** $ARGUMENTS

## Cómo trabajar

1. **Entiende el proyecto.** Si la descripción está vacía o es vaga, haz como mucho tres preguntas cortas: para quién es, qué tiene que poder hacer la gente y si necesita guardar datos, cobrar o publicar contenido.
2. **Propón el menú.** Elige entre 2 y 5 recetas del catálogo de abajo y ordénalas para que cada una aproveche lo anterior (normalmente: primero la base, después la marca y el contenido, al final la automatización y la publicación). Para cada una escribe una línea: qué aporta a *este* proyecto. Si alguna parte no la cubre ninguna receta, dilo y propón cómo resolverla.
3. **Pide confirmación.** La persona puede quitar, añadir o reordenar platos.
4. **Cocina receta a receta.** Usa la skill de cada receta (por ejemplo `amri:webapp-gratis`) pasándole la idea adaptada a ese paso y el contexto de lo que ya existe: la carpeta del proyecto, el repositorio, la dirección publicada, los colores y el logo. Trabaja siempre sobre la misma carpeta y el mismo repositorio; no empieces de cero en cada receta.
5. **Entre receta y receta**, resume en dos líneas lo conseguido y pregunta si seguir con la siguiente.
6. **Al final**, entrega un resumen del proyecto (qué hay, dónde está, cómo cambiarlo) y sugiere el siguiente paso.

## Reglas de cocina

- Habla en el idioma de la persona, sin jerga.
- Crear cuentas, iniciar sesión, autorizar accesos, aceptar condiciones y pagar lo hace siempre la persona. Tú le indicas qué pulsar y esperas.
- Nunca escribas contraseñas ni claves secretas en el chat ni en el código.
- Pide permiso antes de publicar, desplegar o borrar.
- Prefiere herramientas gratuitas; si algo cuesta dinero, dilo antes.

## El recetario

### Primeros pasos
- `amri:empieza-aqui` · **Empieza aquí: conoce a Claude**: El primer libro: tu primera conversación, cómo pedir bien, darle tus archivos y dónde usar Claude.
- `amri:asistente-ia` · **Tu asistente personal con IA**: Un asistente que te conoce: correos difíciles, documentos largos, estudiar, estudiar y organizar tu semana.
- `amri:imagenes-ia` · **Crea imágenes con IA gratis**: Ilustraciones, fotos de producto, carteles con texto, edición de fotos e iconos. Con herramientas gratuitas.
- `amri:logo-ia` · **Diseña un logo con IA**: Logo con nombre o símbolo, todos los formatos, tu kit de marca y cómo comprobar y proteger tu logo.

### Conecta tus apps
- `amri:gmail-calendario` · **Tu secretaría: Gmail y Calendar**: Tu resumen de cada mañana, borradores con tu tono, reuniones preparadas y la bandeja en orden. Claude nunca envía nada por ti.
- `amri:notion-cerebro` · **Tu segundo cerebro en Notion**: Ordena tus notas, un tablero de proyectos, tu repaso de los viernes y actas de reuniones.
- `amri:canva-diseno` · **Diseña en Canva hablando con Claude**: Claude diseña en tu Canva: posts, presentaciones, carteles y tu currículum.
- `amri:navegador-chrome` · **Claude navega por ti con Chrome**: Compara precios, investiga con fuentes, rellena formularios sin enviarlos y revisa tu propia web. Comprar y pagar, siempre tú.

### Crea y publica
- `amri:webapp-gratis` · **Tu web online y gratis**: Tu primera web, cuentas de usuario, reservas, cambios sin romperla, dominio propio y Google. Con Claude, GitHub y Cloudflare, sin programar.
- `amri:chatbot-web` · **Un chatbot para tu web**: Monta tu chatbot, ponlo en tu web, recoge contactos, y mejóralo cada semana.
- `amri:figma-a-web` · **De Figma a web real**: Una página completa, componentes, pantallas de app y tus estilos como variables.
- `amri:automatiza-tareas` · **Automatiza tareas aburridas con IA**: Automatizaciones con Zapier: correos resumidos en una hoja, citas al calendario, formularios con aviso y mensajes clasificados.

### Estudio creativo
- `amri:higgsfield-cine` · **Imágenes y vídeos de cine con Higgsfield**: Foto de producto, vídeo realista, vídeo UGC, personajes y anuncios. Hablando en español con Claude.
- `amri:video-aftereffects` · **Edita vídeo con Claude y After Effects**: Conecta Claude con After Effects y pídele en español: una intro con tu logo, títulos y rótulos, un vídeo vertical con texto animado o un anuncio de producto.
- `amri:blender-3d` · **Crea 3D con Claude y Blender**: Sin saber modelar: un objeto, una escena, tu logo en 3D, o tu producto girando.
- `amri:redes-sociales` · **Tus redes sociales con Claude**: Biografía, reels, carruseles, LinkedIn, una idea para todas tus redes, un mes planificado y medir. Con tu propia voz.
- `amri:animaciones-opus` · **Animaciones con Claude Opus 5.5**: Tu logo animado, una explicación animada, un reel vertical, datos en movimiento o una animación para tu web. En el navegador o en MP4.

### Claude a tu medida
- `amri:primer-agente` · **Tu primer agente: Claude trabaja por ti**: Claude hace tareas largas en tu ordenador: ordenar carpetas, informes, una web y tu primer subagente. Siempre con tu permiso.
- `amri:skills-propias` · **Enséñale tu método con Skills**: Convierte tu forma de trabajar en Skills: informes con tu formato, correos con tu estilo, fichas de producto o material de clase.
- `amri:conector-propio` · **Cocina tu propio conector**: Que Claude use tus propios datos: tu hoja de cálculo, tu carpeta de notas, un archivo propio o una API pública. Claude escribe el código.

### Para empresas (de pago)
- `amri:gurusup-brain` · **El cerebro de tu empresa con GuruSup**: Claude responde con el conocimiento real de tu empresa: respuestas a clientes, guía de bienvenida y propuestas de venta.
- `amri:jev-decisiones` · **Decisiones y guardianes con Jev**: Clasifica mensajes, prioriza incidencias, puntúa contactos o lee reseñas, y pon un guardián a tu chatbot. Jev decide y te pasa lo dudoso.

## Ejemplos de menú

- **«Nunca he usado Claude y quiero aprender»** → `empieza-aqui` (primera conversación y mapa de conceptos) → `asistente-ia` (un asistente que te conoce) → `primer-agente` (Claude haciendo una tarea larga por ti).
- **«Una web para mi panadería con reservas»** → `webapp-gratis` (web con reservas y base de datos) → `logo-ia` (marca) → `chatbot-web` (responde dudas de clientes) → `gmail-calendario` (avisos de reservas).
- **«Quiero empezar un canal de vídeos cortos»** → `asistente-ia` (guiones e ideas) → `higgsfield-cine` (clips) → `canva-diseno` (portadas) → `redes-sociales` (textos, plan semanal y medición).
- **«Ordenar automáticamente los mensajes que me llegan»** → `jev-decisiones` (clasifica con Jev, te pasa lo dudoso y, si tienes un chatbot, le pone un guardián) → `gmail-calendario` (borradores de respuesta).
- **«Una intro animada para mis vídeos»** → `logo-ia` (marca) → `animaciones-opus` (storyboard, animación y MP4) → `redes-sociales` (publicar y medir).
- **«Que mi equipo encuentre la información al momento»** → `notion-cerebro` (documentación) → `gurusup-brain` (base de conocimiento con fuentes).
