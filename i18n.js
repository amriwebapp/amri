/* AMRI · sistema de idiomas (es / en / ar). Los textos viven en T. */
(function(){
var CH=function(a,b,c){return [a,b,c]};
var T={
es:{
 title:"AMRI · Academia abierta de IA — aprende a crear con Claude",
 meta_desc:"AMRI es una academia de IA gratuita y open source. Recetas paso a paso para crear webs, imágenes, vídeo, automatizaciones y conectores con Claude. Sin saber programar.",
 brand_sub:"Academia de IA",theme_aria:"Cambiar tema",lang_aria:"Idioma",
 back:"← Volver a la academia",next_label:"Siguiente receta",
 foot_r:'<a href="../index.html">AMRI</a> · Academia abierta de IA · © 2026 AMRI · <a href="../aviso-legal.html">Aviso legal</a> · <a href="../privacidad.html">Privacidad</a> · <a href="../cookies.html">Cookies</a>',
 notice:"Esta receta está disponible por ahora solo en español. La traducción llegará pronto.",
 nav_how:"Cómo funciona",nav_paths:"Rutas",nav_conn:"Conectores",nav_recipes:"Recetas",nav_open:"Open source",
 eyebrow:"Academia abierta · gratis · open source",
 h1:"Aprende a crear <em>con IA</em>, a tu ritmo.",
 lead:"Recetas paso a paso para usar Claude y sus conectores: webs, imágenes, vídeo, automatizaciones y tus propias herramientas. Sin jerga, sin prisas y sin saber programar.",
 cta1:"Empieza por aquí",cta2:"Ver todas las recetas",scroll_hint:"Desliza despacio",
 st1l:"recetas guiadas",st2l:"conectores explicados",st3n:"0 €",st3l:"para siempre",st4l:"código abierto",
 m_kicker:"Qué es AMRI",
 m_text:"AMRI es una academia abierta para aprender inteligencia artificial *con calma*. Aquí no hay cursos de pago ni palabras raras: hay recetas cortas que puedes seguir con un café al lado. Y esta misma web es la primera lección: *la cocinamos con Claude*, y su código es tuyo.",
 h_kicker:"Cómo funciona",h_title:"Cuatro pasos. <em>Una conversación.</em>",
 h_s1t:"Elige una receta",h_s1d:"Cada receta es un objetivo concreto: una web, un logo, un vídeo. Eliges qué quieres cocinar y la receta se adapta a ti.",
 h_s2t:"Conecta tus herramientas",h_s2d:"Los conectores le dan manos a Claude: Canva, Notion, Gmail, Figma, Higgsfield… Un clic y trabaja donde tú trabajas.",
 h_s3t:"Copia, pega y ajusta",h_s3d:"Cada paso trae la orden exacta que tienes que darle a Claude. La copias, la personalizas y ves el resultado al momento.",
 h_s4t:"Compártelo y mejora la academia",h_s4d:"Todo es abierto. Si descubres un truco, escribe tu propia receta y súmala. Así crecemos todos.",
 h_c1u:"Quiero una web para mi panadería, pero no sé programar.",h_c1t:"",h_c1a:"¡Perfecto! Sigue la receta <b>«Tu webapp online y gratis»</b>. En una hora la tendrás publicada. Empezamos por los ingredientes.",
 h_c2u:"Hazme 3 posts para Instagram con mi logo.",h_c2t:"Canva conectado",h_c2a:"He creado 3 diseños en tu cuenta de Canva, con tu logo y tus colores. ¿Quieres ver alguno en formato historia?",
 h_c3u:"Haz la entrada del título más lenta y suave. Cambia solo eso.",h_c3t:"",h_c3a:"Hecho: la animación ahora dura 1,2 s con curva suave. No he tocado nada más.",
 h_c4u:"He creado una receta para hacer podcasts con IA. ¿Cómo la comparto?",h_c4t:"GitHub conectado",h_c4a:"Te he preparado el <i>pull request</i> con tu receta. Cuando lo aprueben, aparecerá en AMRI para todo el mundo. 🎉",
 p_kicker:"Rutas de aprendizaje",p_title:"De tu primer chat a <em>tu propio conector</em>.",p_lead:"Cinco niveles, sin exámenes. Empieza por el que te apetezca: cada receta se sostiene sola.",lvl:"Nivel",
 p1t:"Primeros pasos",p1d:"Habla con Claude como con un compañero: pídele ayuda, dale contexto y crea tus primeras imágenes.",
 p2t:"Conecta tus apps",p2d:"Deja que Claude trabaje dentro de tu correo, tu calendario, Notion, Canva o el navegador.",
 p3t:"Crea y publica",p3d:"Webs, chatbots y automatizaciones reales, online y gratis, sin escribir código a mano.",
 p4t:"Estudio creativo",p4d:"Vídeo, animación y 3D: Claude dirige y las herramientas profesionales ejecutan.",
 p5t:"Maestría",p5d:"Enséñale a Claude tu forma de trabajar con Skills y construye tu propio conector.",
 c_kicker:"Conectores (MCP)",c_title:"Claude ya sabe pensar.<br><em>Los conectores le dan manos.</em>",
 c_lead:"Un conector es un puente entre Claude y otra aplicación. Con él, Claude no solo te dice cómo hacer algo: lo hace contigo, dentro de tus herramientas.",
 c_a1t:"Claude es el cocinero",c_a1d:"Entiende lo que quieres y decide los pasos.",
 c_a2t:"El conector es el camarero",c_a2d:"Lleva los pedidos a la app correcta y trae la respuesta.",
 c_a3t:"Tus apps son los fogones",c_a3d:"Canva, Notion, Gmail… donde de verdad se cocina.",
 conn:["imagen y vídeo de cine","diseños y presentaciones","de diseño a código","tu segundo cerebro","correo en orden","agenda sin líos","navega por ti","3D sin modelar","animación y títulos","tu código, versionado","publica gratis","tus archivos a mano","tu equipo al día","el cerebro de tu empresa"],
 f_badge:"✦ Nueva receta",f_title:"Imágenes y vídeos de cine con Higgsfield",
 f_desc:"Conecta Higgsfield a Claude y crea fotos de producto, anuncios y clips de vídeo cinematográficos hablando en español. Sin cámara, sin editor.",
 f_c1:"⏱ 30 min",f_c2:"👩‍🍳 Fácil",f_c3:"🔌 Conector",f_open:"Abrir receta",card_open:"Ver receta",new:"Nueva",
 r_kicker:"El recetario",r_title:"Elige qué quieres <em>cocinar hoy</em>.",
 filter_label:"Filtrar:",fl_all:"Todas",fl_conn:"🔌 Conectores",fl_web:"Webs",fl_img:"Imagen y diseño",fl_txt:"Texto y chat",fl_auto:"Automatización",fl_video:"Vídeo y 3D",
 search_ph:"Buscar receta…",empty:"No hay recetas aquí todavía. ¿Y si escribes tú la primera?",
 o_kicker:"Esta web es una lección",o_title:"Abierta, <em>como una receta</em> de la abuela.",
 o_desc:"AMRI está hecha con Claude, siguiendo sus propias recetas. Puedes ver cómo está hecha, copiarla para tu proyecto o proponer mejoras.",
 o_l1:"Haz un <i>fork</i> del repositorio en GitHub.",o_l2:"Duplica cualquier receta de la carpeta <code>recetas/</code> y cambia los pasos.",o_l3:"Abre un <i>pull request</i>. Revisamos juntos y se publica.",
 o_b1:"Ver el código",o_b2:"Haz tu propia versión",o_lic1:"Código · MIT",o_lic2:"Contenido · CC BY-SA 4.0",o_term:"conversación con Claude · amri",
 o_script:"› Claude, quiero una academia de IA abierta llamada AMRI.\n  Tono tranquilo, colores crema y teja, tipografía Bricolage.\n\nEntendido. Te propongo:\n✓ Portada con animación suave al hacer scroll\n✓ Recetas paso a paso, con filtros y buscador\n✓ 5 categorías: empieza por donde quieras\n✓ Tres idiomas y modo oscuro\n\n› Añade recetas de conectores: Higgsfield, Canva, Notion…\n✓ Hecho. Cada receta guarda tu progreso.\n\nEl código es tuyo. ¿Lo publicamos en Cloudflare?",
 q_kicker:"Preguntas tranquilas",q_title:"Antes de empezar",
 q1q:"¿De verdad es gratis?",q1a:"Sí. Las recetas son gratuitas y abiertas. Muchas herramientas tienen plan gratuito; cuando alguna es de pago, la receta te lo dice al principio.",
 q2q:"¿Necesito saber programar?",q2a:"No. Cada paso explica qué hacer y trae el texto exacto para copiar. Si alguna vez aparece código, Claude lo escribe por ti.",
 q3q:"¿Qué es un conector y es seguro?",q3a:"Es un permiso para que Claude use otra app en tu nombre. Tú decides cuáles activas y puedes desconectarlos cuando quieras. Empieza siempre con permisos de solo lectura si puedes.",
 q4q:"¿Qué plan de Claude necesito?",q4a:"Muchas recetas funcionan con el plan gratuito. Algunos conectores y funciones avanzadas pueden necesitar un plan de pago; lo indicamos en cada receta.",
 q5q:"¿Necesito una cuenta?",q5a:"No. Todo el contenido es libre y abierto sin registrarte. La cuenta solo sirve si quieres publicar tus proyectos terminados, aparecer en la comunidad de cada receta y guardar tu recorrido de aprendizaje.",
 n_title:"Una receta nueva cada semana.",n_desc:"Te escribimos cuando publicamos algo. Sin spam, sin prisas: solo cocina con IA.",n_ph:"tu@correo.com",n_btn:"Avísame",n_ok:"¡Apuntado! ✓",
 fo_l:"<b>AMRI</b> · Academia abierta de IA · © 2026 · Hecha con calma y con Claude",fo_a1:"Sobre AMRI",fo_a2:"Contacto",fo_a3:"RSS",
 n_consent:'Acepto la <a href="privacidad.html">política de privacidad</a> y quiero recibir la newsletter.',n_err:"Revisa el correo y marca la casilla de privacidad.",n_fail:"No se ha podido guardar. Inténtalo más tarde.",
 fo_legal:"Aviso legal",fo_priv:"Privacidad",fo_cookies:"Cookies",fo_brands:"AMRI no está afiliada a Anthropic ni a las demás marcas mencionadas. Sus nombres y logos pertenecen a sus propietarios.",legal_note:"",
 cards:[
 {tag:"Web",titulo:"Tu webapp online y gratis",desc:"Crea y publica una webapp completa con Claude, GitHub y Cloudflare, sin costes y sin programar.",chips:CH("1 h","Fácil","0 €")},
 {tag:"Imagen",titulo:"Crea imágenes con IA gratis",desc:"Genera ilustraciones, logos y fotos realistas con herramientas de IA gratuitas. Desde el prompt hasta el resultado.",chips:CH("30 min","Fácil","0 €")},
 {tag:"Chat",titulo:"Tu asistente personal con IA",desc:"Monta un asistente que contesta tus preguntas, resume textos y te ayuda a escribir, usando Claude o ChatGPT.",chips:CH("20 min","Fácil","0 €")},
 {tag:"Automatización",titulo:"Automatiza tareas aburridas con IA",desc:"Conecta tu correo, tu calendario y tus hojas de cálculo para que la IA haga el trabajo repetitivo por ti.",chips:CH("45 min","Media","0 €")},
 {tag:"Chatbot",titulo:"Un chatbot para tu web",desc:"Añade un chatbot que responde a las preguntas de tus visitantes sobre tu producto o servicio, entrenado con tu contenido.",chips:CH("40 min","Media","0 €")},
 {tag:"Branding",titulo:"Diseña un logo con IA",desc:"Crea un logo profesional para tu proyecto en minutos, con variantes, colores y formatos listos para usar.",chips:CH("40 min","Fácil","0 €")},
 {tag:"Vídeo",titulo:"Edita vídeo con Claude y After Effects",desc:"Conecta Claude con After Effects y crea intros, títulos y anuncios animados dándole órdenes en español.",chips:CH("45 min","Media","Adobe")},
 {tag:"3D",titulo:"Crea 3D con Claude y Blender",desc:"Conecta Claude con Blender y crea objetos, escenas y animaciones en 3D sin saber modelar.",chips:CH("45 min","Media","0 €")},
 {tag:"Vídeo",titulo:"Imágenes y vídeos de cine con Higgsfield",desc:"Conecta Higgsfield a Claude y crea fotos de producto, anuncios y clips cinematográficos hablando en español.",chips:CH("30 min","Fácil","Prueba gratis")},
 {tag:"Diseño",titulo:"Diseña en Canva hablando con Claude",desc:"Posts, presentaciones y carteles creados en tu cuenta de Canva desde una conversación, con tu marca.",chips:CH("25 min","Fácil","0 €")},
 {tag:"Web",titulo:"De Figma a web real",desc:"Claude lee tu diseño de Figma y lo convierte en una web que funciona, fiel a colores, textos y espacios.",chips:CH("1 h","Media","0 €")},
 {tag:"Productividad",titulo:"Tu segundo cerebro en Notion",desc:"Claude ordena tus notas, crea bases de datos y te resume la semana dentro de tu Notion.",chips:CH("30 min","Fácil","0 €")},
 {tag:"Automatización",titulo:"Tu secretaría: Gmail y Calendar",desc:"Cada mañana, Claude repasa tu correo y tu agenda, te dice qué importa y prepara los borradores.",chips:CH("25 min","Fácil","0 €")},
 {tag:"Navegador",titulo:"Claude navega por ti con Chrome",desc:"Compara precios, rellena formularios y recopila información de varias webs mientras tú miras.",chips:CH("20 min","Fácil","Plan de pago")},
 {tag:"Skills",titulo:"Enséñale tu método con Skills",desc:"Convierte tu forma de trabajar en una Skill: Claude la usará sola cada vez que la necesite.",chips:CH("30 min","Media","0 €")},
 {tag:"Avanzado",titulo:"Cocina tu propio conector MCP",desc:"Crea un conector sencillo para que Claude use tus propios datos o tu propia app. Claude escribe el código.",chips:CH("1 h","Avanzada","0 €")},
 {tag:"Equipo",titulo:"Claude en tu Slack",desc:"Resume canales, encuentra decisiones y redacta mensajes para tu equipo sin leer cien notificaciones.",chips:CH("25 min","Fácil","0 €")},
 {tag:"Empresa",titulo:"El cerebro de tu empresa con GuruSup",desc:"Conecta GuruSup Brain a Claude para que responda con el conocimiento real de tu empresa, citando la fuente.",chips:CH("30 min","Media","De pago")},
 {tag:"Redes",titulo:"Tus redes sociales con Claude",desc:"Instagram, TikTok, LinkedIn y X con tu propia voz: perfiles afinados, una idea adaptada a cada red y un mes planificado. Claude escribe; tú publicas.",chips:CH("45 min","Fácil","0 €")},
 {tag:"Animación",titulo:"Animaciones con Claude Opus 5.5",desc:"Del storyboard a una animación que se mueve en tu navegador, con tu marca. Y, si quieres, un vídeo MP4 para redes.",chips:CH("40 min","Media","Plan de pago")},
 {tag:"Decisiones",titulo:"Decisiones automáticas con Jev",desc:"Clasifica mensajes, prioriza incidencias o puntúa contactos en milisegundos. Jev decide, te dice su confianza y te pasa lo dudoso.",chips:CH("50 min","Media","De pago")},
 {tag:"Seguridad",titulo:"Un guardián para tu chatbot con Jev",desc:"Revisa cada pregunta y cada respuesta de tu asistente para frenar trampas, temas ajenos y datos inventados.",chips:CH("45 min","Avanzada","De pago")}]},
en:{
 title:"AMRI · Open AI Academy — learn to create with Claude",
 meta_desc:"AMRI is a free, open-source AI academy. Step-by-step recipes to build websites, images, video, automations and connectors with Claude. No coding required.",
 brand_sub:"AI Academy",theme_aria:"Change theme",lang_aria:"Language",
 back:"← Back to the academy",next_label:"Next recipe",
 foot_r:'<a href="../index.html">AMRI</a> · Open AI Academy · © 2026 AMRI · <a href="../aviso-legal.html">Legal notice</a> · <a href="../privacidad.html">Privacy</a> · <a href="../cookies.html">Cookies</a>',
 notice:"This recipe is currently available in Spanish only. The translation is coming soon.",
 nav_how:"How it works",nav_paths:"Paths",nav_conn:"Connectors",nav_recipes:"Recipes",nav_open:"Open source",
 eyebrow:"Open academy · free · open source",
 h1:"Learn to create <em>with AI</em>, at your own pace.",
 lead:"Step-by-step recipes for using Claude and its connectors: websites, images, video, automations and your own tools. No jargon, no rush, no coding.",
 cta1:"Start here",cta2:"See all the recipes",scroll_hint:"Scroll slowly",
 st1l:"guided recipes",st2l:"connectors explained",st3n:"€0",st3l:"forever",st4l:"open source",
 m_kicker:"What AMRI is",
 m_text:"AMRI is an open academy for learning artificial intelligence *calmly*. No paid courses, no strange words: just short recipes you can follow with a coffee by your side. And this very website is the first lesson: *we cooked it with Claude*, and its code is yours.",
 h_kicker:"How it works",h_title:"Four steps. <em>One conversation.</em>",
 h_s1t:"Pick a recipe",h_s1d:"Each recipe is a concrete goal: a website, a logo, a video. You choose what to cook and the recipe adapts to you.",
 h_s2t:"Connect your tools",h_s2d:"Connectors give Claude hands: Canva, Notion, Gmail, Figma, Higgsfield… One click and it works where you work.",
 h_s3t:"Copy, paste and adjust",h_s3d:"Every step includes the exact prompt to give Claude. Copy it, personalise it and see the result right away.",
 h_s4t:"Share it and improve the academy",h_s4d:"Everything is open. If you discover a trick, write your own recipe and add it. That's how we all grow.",
 h_c1u:"I want a website for my bakery, but I can't code.",h_c1t:"",h_c1a:"Perfect! Follow the <b>“Your web app, online and free”</b> recipe. You'll have it live in an hour. Let's start with the ingredients.",
 h_c2u:"Make me 3 Instagram posts with my logo.",h_c2t:"Canva connected",h_c2a:"I've created 3 designs in your Canva account, with your logo and colours. Want one as a story too?",
 h_c3u:"Make the title entrance slower and softer. Change only that.",h_c3t:"",h_c3a:"Done: the animation now lasts 1.2 s with an ease-out curve. I didn't touch anything else.",
 h_c4u:"I wrote a recipe for making podcasts with AI. How do I share it?",h_c4t:"GitHub connected",h_c4a:"I've prepared the <i>pull request</i> with your recipe. Once approved, it'll appear on AMRI for everyone. 🎉",
 p_kicker:"Learning paths",p_title:"From your first chat to <em>your own connector</em>.",p_lead:"Five levels, no exams. Start wherever you like: every recipe stands on its own.",lvl:"Level",
 p1t:"First steps",p1d:"Talk to Claude like a colleague: ask for help, give it context and create your first images.",
 p2t:"Connect your apps",p2d:"Let Claude work inside your email, calendar, Notion, Canva or browser.",
 p3t:"Build and publish",p3d:"Real websites, chatbots and automations, online and free, without writing code by hand.",
 p4t:"Creative studio",p4d:"Video, animation and 3D: Claude directs, professional tools execute.",
 p5t:"Mastery",p5d:"Teach Claude how you work with Skills and build your own connector.",
 c_kicker:"Connectors (MCP)",c_title:"Claude already knows how to think.<br><em>Connectors give it hands.</em>",
 c_lead:"A connector is a bridge between Claude and another app. With it, Claude doesn't just tell you how to do something: it does it with you, inside your tools.",
 c_a1t:"Claude is the chef",c_a1d:"It understands what you want and plans the steps.",
 c_a2t:"The connector is the waiter",c_a2d:"It takes orders to the right app and brings back the answer.",
 c_a3t:"Your apps are the stove",c_a3d:"Canva, Notion, Gmail… where the real cooking happens.",
 conn:["cinematic image & video","designs & decks","from design to code","your second brain","inbox in order","a calm calendar","browses for you","3D without modelling","animation & titles","your code, versioned","publish for free","your files at hand","your team up to date","your company's brain"],
 f_badge:"✦ New recipe",f_title:"Cinematic images and video with Higgsfield",
 f_desc:"Connect Higgsfield to Claude and create product photos, ads and cinematic video clips just by describing them. No camera, no editor.",
 f_c1:"⏱ 30 min",f_c2:"👩‍🍳 Easy",f_c3:"🔌 Connector",f_open:"Open recipe",card_open:"See recipe",new:"New",
 r_kicker:"The cookbook",r_title:"Choose what to <em>cook today</em>.",
 filter_label:"Filter:",fl_all:"All",fl_conn:"🔌 Connectors",fl_web:"Websites",fl_img:"Image & design",fl_txt:"Text & chat",fl_auto:"Automation",fl_video:"Video & 3D",
 search_ph:"Search recipes…",empty:"No recipes here yet. Why not write the first one?",
 o_kicker:"This website is a lesson",o_title:"Open, <em>like grandma's</em> recipe.",
 o_desc:"AMRI is built with Claude, following its own recipes. You can see how it's made, copy it for your project or suggest improvements.",
 o_l1:"<i>Fork</i> the repository on GitHub.",o_l2:"Duplicate any recipe in the <code>recetas/</code> folder and change the steps.",o_l3:"Open a <i>pull request</i>. We review it together and publish it.",
 o_b1:"View the code",o_b2:"Make your own version",o_lic1:"Code · MIT",o_lic2:"Content · CC BY-SA 4.0",o_term:"conversation with Claude · amri",
 o_script:"› Claude, I want an open AI academy called AMRI.\n  Calm tone, cream and terracotta colours, Bricolage font.\n\nGot it. Here's my proposal:\n✓ A landing page with gentle scroll animation\n✓ Step-by-step recipes, with filters and search\n✓ 5 categories: start wherever you like\n✓ Three languages and dark mode\n\n› Add connector recipes: Higgsfield, Canva, Notion…\n✓ Done. Every recipe saves your progress.\n\nThe code is yours. Shall we publish it on Cloudflare?",
 q_kicker:"Calm questions",q_title:"Before you start",
 q1q:"Is it really free?",q1a:"Yes. The recipes are free and open. Many tools have a free plan; when one is paid, the recipe tells you up front.",
 q2q:"Do I need to know how to code?",q2a:"No. Each step explains what to do and includes the exact text to copy. If code ever appears, Claude writes it for you.",
 q3q:"What is a connector, and is it safe?",q3a:"It's a permission that lets Claude use another app on your behalf. You decide which ones to enable and can disconnect them anytime. Start with read-only permissions when you can.",
 q4q:"Which Claude plan do I need?",q4a:"Many recipes work on the free plan. Some connectors and advanced features may need a paid plan; each recipe says so.",
 q5q:"Do I need an account?",q5a:"No. All content is free and open without signing up. An account is only for publishing your finished projects, appearing in each recipe's community and keeping your learning path.",
 n_title:"A new recipe every week.",n_desc:"We'll write when we publish something. No spam, no rush: just cooking with AI.",n_ph:"you@email.com",n_btn:"Notify me",n_ok:"You're in! ✓",
 fo_l:"<b>AMRI</b> · Open AI Academy · © 2026 · Made calmly, with Claude",fo_a1:"About AMRI",fo_a2:"Contact",fo_a3:"RSS",
 n_consent:'I accept the <a href="privacidad.html">privacy policy</a> and want to receive the newsletter.',n_err:"Check your email and tick the privacy box.",n_fail:"It couldn't be saved. Please try again later.",
 fo_legal:"Legal notice",fo_priv:"Privacy",fo_cookies:"Cookies",fo_brands:"AMRI is not affiliated with Anthropic or the other brands mentioned. Their names and logos belong to their owners.",legal_note:"This legal text is written in Spanish, which is the governing language.",
 cards:[
 {tag:"Web",titulo:"Your web app, online and free",desc:"Build and publish a complete web app with Claude, GitHub and Cloudflare, at no cost and without coding.",chips:CH("1 h","Easy","€0")},
 {tag:"Image",titulo:"Create images with AI for free",desc:"Generate illustrations, logos and realistic photos with free AI tools. From the prompt to the finished result.",chips:CH("30 min","Easy","€0")},
 {tag:"Chat",titulo:"Your personal AI assistant",desc:"Set up an assistant that answers your questions, summarizes texts and helps you write, using Claude or ChatGPT.",chips:CH("20 min","Easy","€0")},
 {tag:"Automation",titulo:"Automate boring tasks with AI",desc:"Connect your email, calendar and spreadsheets so AI can do the repetitive work for you.",chips:CH("45 min","Medium","€0")},
 {tag:"Chatbot",titulo:"A chatbot for your website",desc:"Add a chatbot that answers your visitors' questions about your product or service, trained on your own content.",chips:CH("40 min","Medium","€0")},
 {tag:"Branding",titulo:"Design a logo with AI",desc:"Create a professional logo for your project in minutes, with variants, colors and ready-to-use formats.",chips:CH("40 min","Easy","€0")},
 {tag:"Video",titulo:"Edit video with Claude and After Effects",desc:"Connect Claude to After Effects and create animated intros, titles and ads just by telling it what you want.",chips:CH("45 min","Medium","Adobe")},
 {tag:"3D",titulo:"Create 3D with Claude and Blender",desc:"Connect Claude to Blender and create 3D objects, scenes and animations without knowing how to model.",chips:CH("45 min","Medium","€0")},
 {tag:"Video",titulo:"Cinematic images and video with Higgsfield",desc:"Connect Higgsfield to Claude and create product photos, ads and cinematic clips just by describing them.",chips:CH("30 min","Easy","Free trial")},
 {tag:"Design",titulo:"Design in Canva by talking to Claude",desc:"Posts, decks and posters created in your Canva account from a conversation, on brand.",chips:CH("25 min","Easy","€0")},
 {tag:"Web",titulo:"From Figma to a real website",desc:"Claude reads your Figma design and turns it into a working website, faithful to colours, text and spacing.",chips:CH("1 h","Medium","€0")},
 {tag:"Productivity",titulo:"Your second brain in Notion",desc:"Claude tidies your notes, builds databases and sums up your week inside your Notion.",chips:CH("30 min","Easy","€0")},
 {tag:"Automation",titulo:"Your secretary: Gmail and Calendar",desc:"Every morning, Claude reviews your inbox and calendar, tells you what matters and prepares drafts.",chips:CH("25 min","Easy","€0")},
 {tag:"Browser",titulo:"Claude browses for you in Chrome",desc:"Compare prices, fill in forms and gather information from several websites while you watch.",chips:CH("20 min","Easy","Paid plan")},
 {tag:"Skills",titulo:"Teach it your method with Skills",desc:"Turn the way you work into a Skill: Claude will use it on its own whenever it's needed.",chips:CH("30 min","Medium","€0")},
 {tag:"Advanced",titulo:"Cook your own MCP connector",desc:"Build a simple connector so Claude can use your own data or app. Claude writes the code.",chips:CH("1 h","Advanced","€0")},
 {tag:"Team",titulo:"Claude in your Slack",desc:"Summarise channels, find decisions and draft messages for your team without reading a hundred notifications.",chips:CH("25 min","Easy","€0")},
 {tag:"Company",titulo:"Your company's brain with GuruSup",desc:"Connect GuruSup Brain to Claude so it answers with your company's real knowledge, citing the source.",chips:CH("30 min","Medium","Paid")},
 {tag:"Social",titulo:"Your social media with Claude",desc:"Instagram, TikTok, LinkedIn and X in your own voice: sharper profiles, one idea adapted to each network and a month planned. Claude writes; you post.",chips:CH("45 min","Easy","€0")},
 {tag:"Animation",titulo:"Animations with Claude Opus 5.5",desc:"From storyboard to an animation that moves in your browser, in your brand. And, if you like, an MP4 video for social media.",chips:CH("40 min","Medium","Paid plan")},
 {tag:"Decisions",titulo:"Automatic decisions with Jev",desc:"Sort messages, prioritise tickets or score leads in milliseconds. Jev decides, tells you its confidence and hands you the doubtful ones.",chips:CH("50 min","Medium","Paid")},
 {tag:"Safety",titulo:"A guardian for your chatbot with Jev",desc:"Check every question and every answer from your assistant to stop tricks, off-topic chats and made-up facts.",chips:CH("45 min","Advanced","Paid")}]},
ar:{
 title:"AMRI · أكاديمية مفتوحة للذكاء الاصطناعي — تعلّم الإبداع مع Claude",
 meta_desc:"AMRI أكاديمية مجانية ومفتوحة المصدر للذكاء الاصطناعي. وصفات خطوة بخطوة لإنشاء مواقع وصور وفيديو وأتمتة وموصلات مع Claude، دون برمجة.",
 brand_sub:"أكاديمية الذكاء الاصطناعي",theme_aria:"تغيير المظهر",lang_aria:"اللغة",
 back:"→ العودة إلى الأكاديمية",next_label:"الوصفة التالية",
 foot_r:'<a href="../index.html">AMRI</a> · أكاديمية مفتوحة للذكاء الاصطناعي · © 2026 AMRI · <a href="../aviso-legal.html">إشعار قانوني</a> · <a href="../privacidad.html">الخصوصية</a> · <a href="../cookies.html">ملفات تعريف الارتباط</a>',
 notice:"هذه الوصفة متوفرة حالياً بالإسبانية فقط. ستتوفر الترجمة قريباً.",
 nav_how:"كيف تعمل",nav_paths:"المسارات",nav_conn:"الموصلات",nav_recipes:"الوصفات",nav_open:"مفتوحة المصدر",
 eyebrow:"أكاديمية مفتوحة · مجانية · مفتوحة المصدر",
 h1:"تعلّم الإبداع <em>بالذكاء الاصطناعي</em>، على مهلك.",
 lead:"وصفات خطوة بخطوة لاستخدام Claude وموصلاته: مواقع وصور وفيديو وأتمتة وأدواتك الخاصة. بلا مصطلحات، بلا عجلة، ودون برمجة.",
 cta1:"ابدأ من هنا",cta2:"شاهد كل الوصفات",scroll_hint:"مرّر ببطء",
 st1l:"وصفة موجّهة",st2l:"موصلات مشروحة",st3n:"مجاناً",st3l:"للأبد",st4l:"مفتوحة المصدر",
 m_kicker:"ما هي AMRI",
 m_text:"AMRI أكاديمية مفتوحة لتعلّم الذكاء الاصطناعي *بهدوء*. لا دورات مدفوعة ولا كلمات غريبة: فقط وصفات قصيرة يمكنك اتباعها مع فنجان قهوة. وهذا الموقع نفسه هو الدرس الأول: *طبخناه مع Claude*، وشيفرته ملكك.",
 h_kicker:"كيف تعمل",h_title:"أربع خطوات. <em>محادثة واحدة.</em>",
 h_s1t:"اختر وصفة",h_s1d:"كل وصفة هدف محدد: موقع أو شعار أو فيديو. تختار ما تريد طبخه وتتكيف الوصفة معك.",
 h_s2t:"اربط أدواتك",h_s2d:"الموصلات تمنح Claude يدين: Canva وNotion وGmail وFigma وHiggsfield… بنقرة واحدة يعمل حيث تعمل.",
 h_s3t:"انسخ والصق وعدّل",h_s3d:"كل خطوة تتضمن الأمر الدقيق الذي تعطيه لـ Claude. انسخه وخصّصه وشاهد النتيجة فوراً.",
 h_s4t:"شاركه وحسّن الأكاديمية",h_s4d:"كل شيء مفتوح. إن اكتشفت حيلة، اكتب وصفتك وأضفها. هكذا نكبر جميعاً.",
 h_c1u:"أريد موقعاً لمخبزي، لكنني لا أعرف البرمجة.",h_c1t:"",h_c1a:"ممتاز! اتبع وصفة <b>«تطبيق ويب خاص بك، على الإنترنت ومجاناً»</b>. سيكون منشوراً خلال ساعة. لنبدأ بالمكونات.",
 h_c2u:"اصنع لي 3 منشورات لإنستغرام مع شعاري.",h_c2t:"Canva متصل",h_c2a:"أنشأت 3 تصاميم في حسابك على Canva بشعارك وألوانك. هل تريد أحدها بصيغة قصة؟",
 h_c3u:"اجعل ظهور العنوان أبطأ وأنعم. غيّر ذلك فقط.",h_c3t:"",h_c3a:"تم: الحركة الآن تستغرق 1.2 ثانية بمنحنى ناعم. لم ألمس أي شيء آخر.",
 h_c4u:"كتبت وصفة لصنع بودكاست بالذكاء الاصطناعي. كيف أشاركها؟",h_c4t:"GitHub متصل",h_c4a:"جهّزت لك <i>pull request</i> بوصفتك. عند الموافقة ستظهر في AMRI للجميع. 🎉",
 p_kicker:"مسارات التعلّم",p_title:"من محادثتك الأولى إلى <em>موصلك الخاص</em>.",p_lead:"خمسة مستويات بلا امتحانات. ابدأ من حيث تشاء: كل وصفة مستقلة بذاتها.",lvl:"المستوى",
 p1t:"الخطوات الأولى",p1d:"تحدّث مع Claude كزميل: اطلب المساعدة، أعطه السياق، وأنشئ صورك الأولى.",
 p2t:"اربط تطبيقاتك",p2d:"دع Claude يعمل داخل بريدك وتقويمك وNotion وCanva والمتصفح.",
 p3t:"أنشئ وانشر",p3d:"مواقع وروبوتات محادثة وأتمتة حقيقية، على الإنترنت ومجاناً، دون كتابة شيفرة بيدك.",
 p4t:"الاستوديو الإبداعي",p4d:"فيديو وحركة وثلاثي أبعاد: Claude يوجّه والأدوات الاحترافية تنفّذ.",
 p5t:"الإتقان",p5d:"علّم Claude طريقتك في العمل بالمهارات (Skills) وابنِ موصلك الخاص.",
 c_kicker:"الموصلات (MCP)",c_title:"Claude يعرف كيف يفكر.<br><em>والموصلات تمنحه يدين.</em>",
 c_lead:"الموصل جسر بين Claude وتطبيق آخر. بفضله لا يكتفي Claude بإخبارك كيف تفعل الشيء، بل يفعله معك داخل أدواتك.",
 c_a1t:"Claude هو الطاهي",c_a1d:"يفهم ما تريد ويقرر الخطوات.",
 c_a2t:"الموصل هو النادل",c_a2d:"يحمل الطلبات إلى التطبيق الصحيح ويعيد الجواب.",
 c_a3t:"تطبيقاتك هي المواقد",c_a3d:"Canva وNotion وGmail… حيث يحدث الطبخ فعلاً.",
 conn:["صور وفيديو سينمائي","تصاميم وعروض","من التصميم إلى الشيفرة","دماغك الثاني","بريد منظّم","تقويم هادئ","يتصفح عنك","ثلاثي أبعاد بلا نمذجة","حركة وعناوين","شيفرتك بإصداراتها","انشر مجاناً","ملفاتك في متناولك","فريقك على اطلاع","دماغ شركتك"],
 f_badge:"✦ وصفة جديدة",f_title:"صور وفيديو سينمائي مع Higgsfield",
 f_desc:"اربط Higgsfield بـ Claude وأنشئ صور منتجات وإعلانات ومقاطع سينمائية بمجرد وصفها. بلا كاميرا ولا محرر.",
 f_c1:"⏱ 30 دقيقة",f_c2:"👩‍🍳 سهل",f_c3:"🔌 موصل",f_open:"افتح الوصفة",card_open:"عرض الوصفة",new:"جديد",
 r_kicker:"كتاب الوصفات",r_title:"اختر ما <em>تطبخه اليوم</em>.",
 filter_label:"تصفية:",fl_all:"الكل",fl_conn:"🔌 الموصلات",fl_web:"مواقع",fl_img:"صور وتصميم",fl_txt:"نصوص ومحادثة",fl_auto:"أتمتة",fl_video:"فيديو وثلاثي الأبعاد",
 search_ph:"ابحث عن وصفة…",empty:"لا توجد وصفات هنا بعد. لمَ لا تكتب الأولى؟",
 o_kicker:"هذا الموقع درس",o_title:"مفتوح، <em>كوصفة الجدة</em>.",
 o_desc:"صُنعت AMRI مع Claude باتباع وصفاتها نفسها. يمكنك رؤية كيف صُنعت، ونسخها لمشروعك، أو اقتراح تحسينات.",
 o_l1:"أنشئ <i>fork</i> للمستودع على GitHub.",o_l2:"انسخ أي وصفة من مجلد <code>recetas/</code> وغيّر الخطوات.",o_l3:"افتح <i>pull request</i>. نراجعه معاً ثم يُنشر.",
 o_b1:"شاهد الشيفرة",o_b2:"اصنع نسختك",o_lic1:"الشيفرة · MIT",o_lic2:"المحتوى · CC BY-SA 4.0",o_term:"محادثة مع Claude · amri",
 o_script:"› Claude, I want an open AI academy called AMRI.\n  Calm tone, cream and terracotta colours, Bricolage font.\n\nGot it. Here's my proposal:\n✓ A landing page with gentle scroll animation\n✓ Step-by-step recipes, with filters and search\n✓ 5 categories: start wherever you like\n✓ Three languages and dark mode\n\n› Add connector recipes: Higgsfield, Canva, Notion…\n✓ Done. Every recipe saves your progress.\n\nThe code is yours. Shall we publish it on Cloudflare?",
 q_kicker:"أسئلة هادئة",q_title:"قبل أن تبدأ",
 q1q:"هل هي مجانية حقاً؟",q1a:"نعم. الوصفات مجانية ومفتوحة. لكثير من الأدوات خطة مجانية؛ وإن كانت إحداها مدفوعة تخبرك الوصفة بذلك من البداية.",
 q2q:"هل أحتاج إلى معرفة البرمجة؟",q2a:"لا. كل خطة تشرح ما تفعله وتتضمن النص الدقيق للنسخ. وإن ظهرت شيفرة يوماً، يكتبها Claude عنك.",
 q3q:"ما هو الموصل، وهل هو آمن؟",q3a:"إنه إذن يسمح لـ Claude باستخدام تطبيق آخر نيابة عنك. أنت تقرر ما تفعّله ويمكنك فصله متى شئت. ابدأ بصلاحيات القراءة فقط إن أمكن.",
 q4q:"أي خطة من Claude أحتاج؟",q4a:"كثير من الوصفات تعمل بالخطة المجانية. قد تحتاج بعض الموصلات والميزات المتقدمة إلى خطة مدفوعة؛ نذكر ذلك في كل وصفة.",
 q5q:"هل أحتاج إلى حساب؟",q5a:"لا. كل المحتوى مجاني ومفتوح دون تسجيل. الحساب مفيد فقط إن أردت نشر مشاريعك المكتملة والظهور في مجتمع كل وصفة وحفظ مسار تعلّمك.",
 n_title:"وصفة جديدة كل أسبوع.",n_desc:"نراسلك عندما ننشر شيئاً. بلا رسائل مزعجة، بلا عجلة: فقط طبخ بالذكاء الاصطناعي.",n_ph:"you@email.com",n_btn:"أعلمني",n_ok:"تم التسجيل! ✓",
 fo_l:"<b>AMRI</b> · أكاديمية مفتوحة للذكاء الاصطناعي · © 2026 · صُنعت بهدوء ومع Claude",fo_a1:"عن AMRI",fo_a2:"اتصل بنا",fo_a3:"RSS",
 n_consent:'أوافق على <a href="privacidad.html">سياسة الخصوصية</a> وأرغب في تلقي النشرة.',n_err:"تحقق من بريدك وضع علامة على خانة الخصوصية.",n_fail:"تعذّر الحفظ. حاول لاحقاً.",
 fo_legal:"إشعار قانوني",fo_priv:"الخصوصية",fo_cookies:"ملفات تعريف الارتباط",fo_brands:"AMRI غير تابعة لـ Anthropic ولا لأي من العلامات المذكورة. أسماؤها وشعاراتها ملك لأصحابها.",legal_note:"هذا النص القانوني مكتوب بالإسبانية، وهي اللغة المعتمدة.",
 cards:[
 {tag:"ويب",titulo:"تطبيق ويب خاص بك، على الإنترنت ومجاناً",desc:"أنشئ وانشر تطبيق ويب كاملاً باستخدام Claude وGitHub وCloudflare، دون تكاليف ودون برمجة.",chips:CH("ساعة","سهل","مجاناً")},
 {tag:"صورة",titulo:"أنشئ صوراً بالذكاء الاصطناعي مجاناً",desc:"ولّد رسومات وشعارات وصوراً واقعية بأدوات ذكاء اصطناعي مجانية، من الأمر حتى النتيجة.",chips:CH("30 دقيقة","سهل","مجاناً")},
 {tag:"محادثة",titulo:"مساعدك الشخصي بالذكاء الاصطناعي",desc:"أنشئ مساعداً يجيب عن أسئلتك ويلخّص النصوص ويساعدك في الكتابة باستخدام Claude أو ChatGPT.",chips:CH("20 دقيقة","سهل","مجاناً")},
 {tag:"أتمتة",titulo:"أتمتة المهام المملة بالذكاء الاصطناعي",desc:"اربط بريدك وتقويمك وجداولك ليتولى الذكاء الاصطناعي العمل المتكرر عنك.",chips:CH("45 دقيقة","متوسط","مجاناً")},
 {tag:"روبوت محادثة",titulo:"روبوت محادثة لموقعك",desc:"أضف روبوت محادثة يجيب عن أسئلة زوارك حول منتجك أو خدمتك، مدرَّباً على محتواك.",chips:CH("40 دقيقة","متوسط","مجاناً")},
 {tag:"هوية بصرية",titulo:"صمّم شعاراً بالذكاء الاصطناعي",desc:"أنشئ شعاراً احترافياً لمشروعك في دقائق، مع نسخ وألوان وصيغ جاهزة.",chips:CH("40 دقيقة","سهل","مجاناً")},
 {tag:"فيديو",titulo:"حرّر الفيديو مع Claude وAfter Effects",desc:"اربط Claude بـ After Effects وأنشئ مقدمات وعناوين وإعلانات متحركة بمجرد أن تطلب.",chips:CH("45 دقيقة","متوسط","Adobe")},
 {tag:"3D",titulo:"أنشئ مجسمات ثلاثية الأبعاد مع Claude وBlender",desc:"اربط Claude بـ Blender وأنشئ مجسمات ومشاهد ورسوماً متحركة دون معرفة بالنمذجة.",chips:CH("45 دقيقة","متوسط","مجاناً")},
 {tag:"فيديو",titulo:"صور وفيديو سينمائي مع Higgsfield",desc:"اربط Higgsfield بـ Claude وأنشئ صور منتجات وإعلانات ومقاطع سينمائية بمجرد وصفها.",chips:CH("30 دقيقة","سهل","تجربة مجانية")},
 {tag:"تصميم",titulo:"صمّم في Canva بالحديث مع Claude",desc:"منشورات وعروض وملصقات تُنشأ في حسابك على Canva من محادثة، بهوية علامتك.",chips:CH("25 دقيقة","سهل","مجاناً")},
 {tag:"ويب",titulo:"من Figma إلى موقع حقيقي",desc:"يقرأ Claude تصميمك في Figma ويحوّله إلى موقع يعمل، وفياً للألوان والنصوص والمسافات.",chips:CH("ساعة","متوسط","مجاناً")},
 {tag:"إنتاجية",titulo:"دماغك الثاني في Notion",desc:"يرتّب Claude ملاحظاتك وينشئ قواعد بيانات ويلخّص أسبوعك داخل Notion.",chips:CH("30 دقيقة","سهل","مجاناً")},
 {tag:"أتمتة",titulo:"سكرتيرك: Gmail والتقويم",desc:"كل صباح يراجع Claude بريدك وتقويمك، يخبرك بما يهم ويجهّز المسودات.",chips:CH("25 دقيقة","سهل","مجاناً")},
 {tag:"متصفح",titulo:"Claude يتصفح عنك في Chrome",desc:"قارن الأسعار واملأ النماذج واجمع المعلومات من عدة مواقع وأنت تشاهد.",chips:CH("20 دقيقة","سهل","خطة مدفوعة")},
 {tag:"مهارات",titulo:"علّمه طريقتك بالمهارات (Skills)",desc:"حوّل طريقة عملك إلى مهارة: سيستخدمها Claude وحده كلما احتاجها.",chips:CH("30 دقيقة","متوسط","مجاناً")},
 {tag:"متقدم",titulo:"اطبخ موصل MCP خاصاً بك",desc:"أنشئ موصلاً بسيطاً ليستخدم Claude بياناتك أو تطبيقك. Claude يكتب الشيفرة.",chips:CH("ساعة","متقدم","مجاناً")},
 {tag:"فريق",titulo:"Claude في Slack الخاص بك",desc:"لخّص القنوات واعثر على القرارات واكتب رسائل لفريقك دون قراءة مئة إشعار.",chips:CH("25 دقيقة","سهل","مجاناً")},
 {tag:"شركة",titulo:"دماغ شركتك مع GuruSup",desc:"اربط GuruSup Brain بـ Claude ليجيب بمعرفة شركتك الحقيقية مع ذكر المصدر.",chips:CH("30 دقيقة","متوسط","مدفوع")},
 {tag:"تواصل",titulo:"شبكاتك الاجتماعية مع Claude",desc:"إنستغرام وتيك توك ولينكدإن وX بصوتك أنت: ملفات أقوى، وفكرة واحدة مكيّفة لكل شبكة، وشهر مخطط. Claude يكتب وأنت تنشر.",chips:CH("45 دقيقة","سهل","0 €")},
 {tag:"تحريك",titulo:"رسوم متحركة مع Claude Opus 5.5",desc:"من اللوحة القصصية إلى رسم متحرك في متصفحك بهوية علامتك. وإن أردت، فيديو MP4 للشبكات.",chips:CH("40 دقيقة","متوسط","خطة مدفوعة")},
 {tag:"قرارات",titulo:"قرارات تلقائية مع Jev",desc:"صنّف الرسائل ورتّب البلاغات حسب الأولوية وقيّم جهات الاتصال في أجزاء من الثانية. Jev يقرر ويخبرك بثقته ويحيل إليك المشكوك فيه.",chips:CH("50 دقيقة","متوسط","مدفوع")},
 {tag:"أمان",titulo:"حارس لروبوت المحادثة مع Jev",desc:"راجع كل سؤال وكل إجابة من مساعدك لإيقاف الخدع والمواضيع الدخيلة والمعلومات المختلقة.",chips:CH("45 دقيقة","متقدم","مدفوع")}]}
};
/* v15 · guía: construir, proyectos, mapa, por qué, si algo falla, glosario */
Object.assign(T.es,{
 b_k:"Tu proyecto",b_t:"¿Qué quieres <em>construir</em>?",b_l:"Escríbelo con tus palabras y te proponemos las recetas, en orden. Las cocinas aquí paso a paso, o con el chef de AMRI en Claude Code.",
 b_ph:"Ej.: una web para mi peluquería con reservas e Instagram",b_btn:"Prepárame el menú",b_ex:["Una web para mi panadería con reservas","Quiero empezar un canal de vídeos","Ordenar mi correo y mi agenda"],
 b_res:"Tu menú",b_none:"No he encontrado una receta exacta para eso. Empieza por «Tu asistente personal con IA» o mira los proyectos de abajo.",b_chef:"¿Prefieres que Claude lo cocine contigo? Pega esto en Claude Code:",b_proj:"Proyecto que encaja:",b_copy:"Copiar",b_copied:"¡Copiado!",
 pj_k:"Proyectos completos",pj_t:"Recetas que juntas <em>son un proyecto</em>.",pj_l:"Rutas pensadas para terminar algo grande, receta a receta y en orden.",pj_go:"Empezar el proyecto",pj_n:"recetas",
 g_rev:"Revisada el",g_map:"Cómo encaja todo",g_idea:"Tu idea",g_res:"Resultado",g_why:"¿Por qué este paso?",g_fail:"¿Algo falla?",g_under:"Qué pasa por debajo",g_fix:"Soluciones rápidas",
 g_ask:"Si sigue sin funcionar, pídele ayuda a Claude:",g_ask_p:"Estoy siguiendo la receta «{r}» de AMRI, en el paso «{s}». Me pasa esto: [describe el problema o pega el error]. Explícame qué ocurre y cómo arreglarlo, paso a paso y sin jerga.",
 g_hint:"💡 Las palabras subrayadas tienen explicación: pasa el ratón o tócalas."
});
Object.assign(T.en,{
 b_k:"Your project",b_t:"What do you want to <em>build</em>?",b_l:"Describe it in your own words and we'll suggest the recipes, in order. Cook them here step by step, or with the AMRI chef in Claude Code.",
 b_ph:"E.g. a website for my hair salon with bookings and Instagram",b_btn:"Plan my menu",b_ex:["A website for my bakery with bookings","I want to start a video channel","Get my email and calendar in order"],
 b_res:"Your menu",b_none:"I couldn't find an exact recipe for that. Start with “Your personal AI assistant” or look at the projects below.",b_chef:"Rather have Claude cook it with you? Paste this into Claude Code:",b_proj:"Matching project:",b_copy:"Copy",b_copied:"Copied!",
 pj_k:"Complete projects",pj_t:"Recipes that together <em>make a project</em>.",pj_l:"Paths designed to finish something big, recipe by recipe and in order.",pj_go:"Start the project",pj_n:"recipes",
 g_rev:"Reviewed on",g_map:"How it all fits together",g_idea:"Your idea",g_res:"Result",g_why:"Why this step?",g_fail:"Something not working?",g_under:"What happens under the hood",g_fix:"Quick fixes",
 g_ask:"If it still doesn't work, ask Claude for help:",g_ask_p:"I'm following the AMRI recipe “{r}”, at the step “{s}”. This is happening: [describe the problem or paste the error]. Explain what's going on and how to fix it, step by step and without jargon.",
 g_hint:"💡 Underlined words have an explanation: hover over or tap them."
});
Object.assign(T.ar,{
 b_k:"مشروعك",b_t:"ماذا تريد أن <em>تبني</em>؟",b_l:"اكتبه بكلماتك وسنقترح عليك الوصفات بالترتيب. اطبخها هنا خطوة بخطوة، أو مع طاهي AMRI في Claude Code.",
 b_ph:"مثال: موقع لصالون الحلاقة مع حجوزات وإنستغرام",b_btn:"حضّر لي القائمة",b_ex:["موقع لمخبزي مع حجوزات","أريد أن أبدأ قناة فيديو","تنظيم بريدي وتقويمي"],
 b_res:"قائمتك",b_none:"لم أجد وصفة مطابقة لذلك. ابدأ بـ«مساعدك الشخصي بالذكاء الاصطناعي» أو اطّلع على المشاريع في الأسفل.",b_chef:"تفضّل أن يطبخها Claude معك؟ الصق هذا في Claude Code:",b_proj:"مشروع مناسب:",b_copy:"نسخ",b_copied:"تم النسخ!",
 pj_k:"مشاريع كاملة",pj_t:"وصفات تصنع معاً <em>مشروعاً</em>.",pj_l:"مسارات مصمّمة لإنجاز شيء كبير، وصفة بعد وصفة وبالترتيب.",pj_go:"ابدأ المشروع",pj_n:"وصفات",
 g_rev:"رُوجعت في",g_map:"كيف يترابط كل شيء",g_idea:"فكرتك",g_res:"النتيجة",g_why:"لماذا هذه الخطوة؟",g_fail:"هل هناك مشكلة؟",g_under:"ماذا يحدث خلف الكواليس",g_fix:"حلول سريعة",
 g_ask:"إن استمرت المشكلة، اطلب المساعدة من Claude:",g_ask_p:"أتبع وصفة AMRI «{r}»، في الخطوة «{s}». يحدث لي هذا: [صف المشكلة أو الصق الخطأ]. اشرح لي ما يحدث وكيف أصلحه، خطوة بخطوة ودون مصطلحات معقدة.",
 g_hint:"💡 الكلمات المسطّرة لها شرح: مرّر المؤشر فوقها أو المسها."
});
/* v12 · plugin de AMRI para Claude Code */
Object.assign(T.es,{
 set_btn:"Ajustes",set_lang:"Idioma",set_theme:"Tema",set_light:"Claro",set_dark:"Oscuro",lp_k:"Plugin para Claude Code",lp_t:"¿Prefieres que <em>Claude lo cocine contigo</em>?",lp_d:"Instala el plugin de AMRI y cada receta se convierte en un comando. O cuéntale al chef tu proyecto y él elige las recetas.",lp_b:"Instalar el plugin",lp_e1:"una web para mi panadería",lp_r1:"Web creada y publicada",lp_e2:"una tienda de velas con reservas",lp_r2:"Menú: webapp → logo → chatbot → dominio",
 pl_box_t:"⚡ Hazlo con Claude Code",pl_box_d:"¿Prefieres que Claude la cocine contigo? Con el plugin de AMRI, pega este comando en Claude Code y cambia el final por tu idea:",
 pl_idea:"tu idea",pl_copy:"Copiar",pl_copied:"¡Copiado!",pl_how:"Cómo instalar el plugin →",nav_plugin:"Plugin",fo_plugin:"Plugin para Claude Code",
 pg_title:"AMRI · Plugin para Claude Code",pg_kicker:"Plugin para Claude Code",pg_h:"Que Claude <em>cocine contigo</em>.",
 pg_lead:"Instala el plugin de AMRI y cada receta se convierte en un comando. Claude la sigue paso a paso: crea los archivos, usa la terminal y publica tu proyecto, y te pide ayuda solo cuando hace falta.",
 pg_s1t:"Instala Claude Code",pg_s1d:"Solo la primera vez. En Mac o Linux, abre la Terminal y pega:",pg_s1w:"En Windows, abre PowerShell y pega:",pg_s1n:"Después escribe <code>claude</code> y pulsa Intro para abrirlo.",
 pg_s2t:"Añade AMRI",pg_s2d:"Dentro de Claude Code, pega estos dos comandos, uno detrás de otro:",
 pg_s3t:"Cocina una receta",pg_s3d:"Escribe el comando de la receta y, detrás, tu idea con tus palabras:",pg_s3x:"una web para mi panadería con horarios y un botón de WhatsApp",
 pg_s4t:"O deja que el chef lo planifique",pg_s4d:"Describe tu proyecto. El chef elige las recetas que hacen falta, te propone un orden y las cocina una tras otra sobre el mismo proyecto.",pg_s4x:"una tienda online de velas artesanales con reservas",
 pg_who:"Quién hace qué",pg_c:"Claude hace",pg_c1:"Crea y edita los archivos de tu proyecto",pg_c2:"Usa la terminal, git y GitHub",pg_c3:"Publica en Cloudflare y conecta Supabase",pg_c4:"Comprueba cada paso antes de seguir",
 pg_u:"Tú haces",pg_u1:"Crear tus cuentas e iniciar sesión",pg_u2:"Aceptar los permisos que te pida",pg_u3:"Decidir y confirmar antes de publicar",pg_u4:"Pagar, si algo cuesta dinero (te avisará antes)",
 pg_note:"Claude Code necesita un plan de pago de Claude (Pro o superior) o créditos de la API. Las recetas de la web siguen siendo gratis para todo el mundo.",
 pg_cw:"¿Sin terminal? Las recetas del plugin también funcionan en Cowork, dentro de la app de escritorio de Claude.",
 pg_list:"Todas las recetas",pg_cmd:"Comando",pg_open:"Ver receta",pg_src:"El plugin es open source: lo encontrarás en la carpeta <code>plugin/</code> del repositorio de AMRI. Cada receta del plugin se genera a partir de la receta de la web, así que siempre van a la par."
});
Object.assign(T.en,{
 set_btn:"Settings",set_lang:"Language",set_theme:"Theme",set_light:"Light",set_dark:"Dark",lp_k:"Plugin for Claude Code",lp_t:"Rather have <em>Claude cook it with you</em>?",lp_d:"Install the AMRI plugin and every recipe becomes a command. Or tell the chef about your project and it picks the recipes.",lp_b:"Install the plugin",lp_e1:"a website for my bakery",lp_r1:"Website built and published",lp_e2:"a candle shop with bookings",lp_r2:"Menu: web app → logo → chatbot → domain",
 pl_box_t:"⚡ Do it with Claude Code",pl_box_d:"Rather have Claude cook it with you? With the AMRI plugin, paste this command into Claude Code and replace the end with your idea:",
 pl_idea:"your idea",pl_copy:"Copy",pl_copied:"Copied!",pl_how:"How to install the plugin →",nav_plugin:"Plugin",fo_plugin:"Plugin for Claude Code",
 pg_title:"AMRI · Plugin for Claude Code",pg_kicker:"Plugin for Claude Code",pg_h:"Let Claude <em>cook with you</em>.",
 pg_lead:"Install the AMRI plugin and every recipe becomes a command. Claude follows it step by step: it creates the files, uses the terminal and publishes your project, and only asks for your help when needed.",
 pg_s1t:"Install Claude Code",pg_s1d:"Only the first time. On Mac or Linux, open Terminal and paste:",pg_s1w:"On Windows, open PowerShell and paste:",pg_s1n:"Then type <code>claude</code> and press Enter to open it.",
 pg_s2t:"Add AMRI",pg_s2d:"Inside Claude Code, paste these two commands, one after the other:",
 pg_s3t:"Cook a recipe",pg_s3d:"Type the recipe command followed by your idea in your own words:",pg_s3x:"a website for my bakery with opening hours and a WhatsApp button",
 pg_s4t:"Or let the chef plan it",pg_s4d:"Describe your project. The chef picks the recipes you need, suggests an order and cooks them one after another on the same project.",pg_s4x:"an online shop for handmade candles with bookings",
 pg_who:"Who does what",pg_c:"Claude does",pg_c1:"Creates and edits your project files",pg_c2:"Uses the terminal, git and GitHub",pg_c3:"Publishes to Cloudflare and connects Supabase",pg_c4:"Checks every step before moving on",
 pg_u:"You do",pg_u1:"Create your accounts and sign in",pg_u2:"Accept the permissions it asks for",pg_u3:"Decide and confirm before publishing",pg_u4:"Pay, if something costs money (it will warn you first)",
 pg_note:"Claude Code needs a paid Claude plan (Pro or higher) or API credits. The recipes on the website are still free for everyone.",
 pg_cw:"No terminal? The plugin recipes also work in Cowork, inside the Claude desktop app.",
 pg_list:"All recipes",pg_cmd:"Command",pg_open:"View recipe",pg_src:"The plugin is open source: you'll find it in the <code>plugin/</code> folder of the AMRI repository. Every plugin recipe is generated from the website recipe, so they always stay in sync."
});
Object.assign(T.ar,{
 set_btn:"الإعدادات",set_lang:"اللغة",set_theme:"المظهر",set_light:"فاتح",set_dark:"داكن",lp_k:"إضافة لـ Claude Code",lp_t:"تفضّل أن <em>يطبخها Claude معك</em>؟",lp_d:"ثبّت إضافة AMRI فتتحول كل وصفة إلى أمر. أو أخبر الطاهي بمشروعك فيختار الوصفات.",lp_b:"ثبّت الإضافة",lp_e1:"موقع لمخبزي",lp_r1:"تم إنشاء الموقع ونشره",lp_e2:"متجر شموع مع حجوزات",lp_r2:"القائمة: تطبيق ويب ← شعار ← روبوت محادثة ← نطاق",
 pl_box_t:"⚡ نفّذها مع Claude Code",pl_box_d:"تفضّل أن يطبخها Claude معك؟ مع إضافة AMRI، الصق هذا الأمر في Claude Code واستبدل آخره بفكرتك:",
 pl_idea:"فكرتك",pl_copy:"نسخ",pl_copied:"تم النسخ!",pl_how:"كيف تثبّت الإضافة ←",nav_plugin:"الإضافة",fo_plugin:"إضافة لـ Claude Code",
 pg_title:"AMRI · إضافة لـ Claude Code",pg_kicker:"إضافة لـ Claude Code",pg_h:"دع Claude <em>يطبخ معك</em>.",
 pg_lead:"ثبّت إضافة AMRI فتتحول كل وصفة إلى أمر. يتبعها Claude خطوة بخطوة: ينشئ الملفات ويستخدم الطرفية وينشر مشروعك، ولا يطلب مساعدتك إلا عند الحاجة.",
 pg_s1t:"ثبّت Claude Code",pg_s1d:"في المرة الأولى فقط. على Mac أو Linux افتح الطرفية والصق:",pg_s1w:"على Windows افتح PowerShell والصق:",pg_s1n:"ثم اكتب <code>claude</code> واضغط Enter لفتحه.",
 pg_s2t:"أضف AMRI",pg_s2d:"داخل Claude Code، الصق هذين الأمرين واحداً بعد الآخر:",
 pg_s3t:"اطبخ وصفة",pg_s3d:"اكتب أمر الوصفة وبعده فكرتك بكلماتك:",pg_s3x:"موقع لمخبزي فيه ساعات العمل وزر واتساب",
 pg_s4t:"أو دع الطاهي يخطط",pg_s4d:"صف مشروعك. يختار الطاهي الوصفات اللازمة ويقترح ترتيباً ويطبخها واحدة تلو الأخرى على المشروع نفسه.",pg_s4x:"متجر إلكتروني لشموع يدوية مع حجوزات",
 pg_who:"من يفعل ماذا",pg_c:"Claude يفعل",pg_c1:"ينشئ ملفات مشروعك ويعدّلها",pg_c2:"يستخدم الطرفية وgit وGitHub",pg_c3:"ينشر على Cloudflare ويربط Supabase",pg_c4:"يتحقق من كل خطوة قبل المتابعة",
 pg_u:"أنت تفعل",pg_u1:"إنشاء حساباتك وتسجيل الدخول",pg_u2:"قبول الأذونات التي يطلبها",pg_u3:"القرار والتأكيد قبل النشر",pg_u4:"الدفع إن كان شيء مدفوعاً (سيخبرك أولاً)",
 pg_note:"يحتاج Claude Code إلى خطة Claude مدفوعة (Pro أو أعلى) أو رصيد API. وصفات الموقع تبقى مجانية للجميع.",
 pg_cw:"بلا طرفية؟ وصفات الإضافة تعمل أيضاً في Cowork داخل تطبيق Claude لسطح المكتب.",
 pg_list:"كل الوصفات",pg_cmd:"الأمر",pg_open:"عرض الوصفة",pg_src:"الإضافة مفتوحة المصدر: ستجدها في مجلد <code>plugin/</code> في مستودع AMRI. كل وصفة في الإضافة تُولَّد من وصفة الموقع، فتبقيان متطابقتين دائماً."
});
/* v9 · categorías y nuevo «Cómo funciona» */
Object.assign(T.es,{
 nav_paths:"Categorías",
 p_kicker:"Categorías",p_title:"Empieza por <em>lo que te interese</em>.",p_lead:"Sin niveles ni orden obligatorio: elige una categoría y abre cualquier receta. Cada una se sostiene sola.",
 p5t:"Claude a tu medida",p5d:"Enséñale a Claude tu forma de trabajar con Skills, dale tu propio conocimiento, crea tu conector y automatiza decisiones con Jev.",
 cat_n:"recetas",cat_cta_t:"¿No sabes por dónde empezar?",cat_cta_d:"Prueba «Tu asistente personal con IA». Es la más sencilla y en un rato verás todo lo que Claude puede hacer por ti.",cat_cta_b:"Empezar por aquí",cat_see:"Ver en el recetario",
 h_title:"Así se cocina <em>una receta</em>.",h_lead:"Te lo enseñamos con un ejemplo real: la web de una panadería, de principio a fin.",
 h_s1t:"Elige qué quieres hacer",h_s1d:"Entra en el recetario y abre la receta que te interese. Cada una es un objetivo concreto —una web, un logo, un vídeo— y no hace falta seguir ningún orden.",
 h_s2t:"Prepara los ingredientes",h_s2d:"La receta te dice qué cuentas gratuitas necesitas y, si usa un conector, cómo activarlo en Claude con un clic. Las vas marcando a medida que las tienes.",
 h_s3t:"Copia la orden y pégala en Claude",h_s3d:"Cada paso trae el mensaje exacto. Pulsa «Copiar», pégalo en Claude y él hace el trabajo. ¿Algo no te convence? Pídele cambios con tus palabras.",
 h_s4t:"Disfruta el resultado y compártelo",h_s4d:"Al terminar tienes algo real y funcionando. Si quieres, sube el enlace desde tu cuenta: cuando se apruebe, aparecerá en la comunidad de la receta.",
 hv_step:"Paso",hv_of:"de",hv1_t:"Recetario",hv1_pick:"Elegida",
 hv2_t:"Ingredientes",hv2_i1:"Cuenta en Claude",hv2_i2:"Cuenta en GitHub",hv2_i3:"Cuenta en Cloudflare",hv2_free:"gratis",hv2_ready:"¡Todo listo!",
 hv3_t:"Paso 1 de la receta",hv3_p:"Crea una web para mi panadería con horarios, la carta y un botón de WhatsApp.",hv3_copy:"Copiar",hv3_copied:"¡Copiado!",hv3_paste:"Pegado en Claude",
 hv3_a:"¡Hecha! Te he preparado la web con tus horarios y la carta. ¿Probamos otros colores?",
 hv4_site:"Panadería Lola",hv4_tag:"Pan de masa madre · De 8 a 14 h",hv4_btn:"Pedir por WhatsApp",hv4_toast:"Proyecto enviado a la comunidad",hv4_done:"Receta completada"
});
Object.assign(T.en,{
 nav_paths:"Categories",
 p_kicker:"Categories",p_title:"Start with <em>whatever interests you</em>.",p_lead:"No levels, no set order: pick a category and open any recipe. Each one stands on its own.",
 p5t:"Claude, your way",p5d:"Teach Claude how you work with Skills, give it your own knowledge, build your connector and automate decisions with Jev.",
 cat_n:"recipes",cat_cta_t:"Not sure where to start?",cat_cta_d:"Try “Your personal AI assistant”. It's the simplest one, and in no time you'll see everything Claude can do for you.",cat_cta_b:"Start here",cat_see:"Show in the recipe book",
 h_title:"How to cook <em>a recipe</em>.",h_lead:"Here's a real example from start to finish: a website for a bakery.",
 h_s1t:"Pick what you want to make",h_s1d:"Browse the recipe book and open whichever recipe interests you. Each one is a concrete goal — a website, a logo, a video — and there's no set order.",
 h_s2t:"Get the ingredients ready",h_s2d:"The recipe tells you which free accounts you need and, if it uses a connector, how to switch it on in Claude with one click. Tick them off as you go.",
 h_s3t:"Copy the prompt and paste it into Claude",h_s3d:"Every step includes the exact message. Press “Copy”, paste it into Claude and it does the work. Not convinced? Ask for changes in your own words.",
 h_s4t:"Enjoy the result and share it",h_s4d:"When you finish, you have something real that works. If you like, upload the link from your account: once approved, it appears in the recipe's community.",
 hv_step:"Step",hv_of:"of",hv1_t:"Recipe book",hv1_pick:"Chosen",
 hv2_t:"Ingredients",hv2_i1:"Claude account",hv2_i2:"GitHub account",hv2_i3:"Cloudflare account",hv2_free:"free",hv2_ready:"All set!",
 hv3_t:"Recipe step 1",hv3_p:"Build a website for my bakery with opening hours, the menu and a WhatsApp button.",hv3_copy:"Copy",hv3_copied:"Copied!",hv3_paste:"Pasted into Claude",
 hv3_a:"Done! I've built the site with your hours and menu. Shall we try other colours?",
 hv4_site:"Lola's Bakery",hv4_tag:"Sourdough bread · 8 am to 2 pm",hv4_btn:"Order on WhatsApp",hv4_toast:"Project sent to the community",hv4_done:"Recipe completed"
});
Object.assign(T.ar,{
 nav_paths:"الفئات",
 p_kicker:"الفئات",p_title:"ابدأ بـ<em>ما يهمّك</em>.",p_lead:"لا مستويات ولا ترتيب إلزامي: اختر فئة وافتح أي وصفة. كل وصفة مستقلة بذاتها.",
 p5t:"Claude على مقاسك",p5d:"علّم Claude طريقتك في العمل بالمهارات (Skills)، وأعطه معرفتك الخاصة، وابنِ موصلك، وأتمت القرارات مع Jev.",
 cat_n:"وصفات",cat_cta_t:"لا تعرف من أين تبدأ؟",cat_cta_d:"جرّب «مساعدك الشخصي بالذكاء الاصطناعي». إنها الأبسط، وخلال وقت قصير سترى كل ما يمكن أن يفعله Claude لك.",cat_cta_b:"ابدأ من هنا",cat_see:"اعرضها في كتاب الوصفات",
 h_title:"هكذا تُطبخ <em>الوصفة</em>.",h_lead:"نشرحها بمثال حقيقي من البداية إلى النهاية: موقع لمخبز.",
 h_s1t:"اختر ما تريد صنعه",h_s1d:"تصفّح كتاب الوصفات وافتح الوصفة التي تهمّك. كل وصفة هدف محدد —موقع أو شعار أو فيديو— ولا يلزم اتباع أي ترتيب.",
 h_s2t:"جهّز المكوّنات",h_s2d:"تخبرك الوصفة بالحسابات المجانية التي تحتاجها، وإن كانت تستخدم موصلاً، كيف تفعّله في Claude بنقرة واحدة. ضع علامة عليها كلما جهّزتها.",
 h_s3t:"انسخ الأمر والصقه في Claude",h_s3d:"كل خطوة تتضمن الرسالة الدقيقة. اضغط «نسخ» والصقها في Claude وسيقوم بالعمل. لم يعجبك شيء؟ اطلب التعديل بكلماتك.",
 h_s4t:"استمتع بالنتيجة وشاركها",h_s4d:"في النهاية يكون لديك شيء حقيقي يعمل. إن أردت، ارفع الرابط من حسابك: بعد الموافقة سيظهر في مجتمع الوصفة.",
 hv_step:"الخطوة",hv_of:"من",hv1_t:"كتاب الوصفات",hv1_pick:"تم الاختيار",
 hv2_t:"المكوّنات",hv2_i1:"حساب Claude",hv2_i2:"حساب GitHub",hv2_i3:"حساب Cloudflare",hv2_free:"مجاني",hv2_ready:"كل شيء جاهز!",
 hv3_t:"الخطوة 1 من الوصفة",hv3_p:"أنشئ موقعاً لمخبزي فيه ساعات العمل وقائمة المنتجات وزر واتساب.",hv3_copy:"نسخ",hv3_copied:"تم النسخ!",hv3_paste:"تم اللصق في Claude",
 hv3_a:"تم! جهّزت لك الموقع بساعاتك وقائمتك. هل نجرّب ألواناً أخرى؟",
 hv4_site:"مخبز لولا",hv4_tag:"خبز العجين المخمّر · من 8 إلى 14",hv4_btn:"اطلب عبر واتساب",hv4_toast:"أُرسل المشروع إلى المجتمع",hv4_done:"اكتملت الوصفة"
});
/* v16 · página del plugin explicada */
Object.assign(T.es,{
 pg_lead:"Un plugin convierte cada receta de AMRI en un comando. Tú escribes tu idea y Claude la cocina contigo en tu ordenador: crea los archivos, usa la terminal y publica tu proyecto. Solo te pide ayuda cuando hace falta.",
 pg_jump:"Instalarlo ahora ↓",
 pg_what_k:"Lo básico",pg_what_t:"¿Qué es un plugin?",
 pg_what_d:"Claude ya sabe cocinar. Un plugin es un <b>libro de recetas</b> que le das para que sepa hacer algo concreto, a tu manera y paso a paso. Se instala una vez en Claude Code y le añade comandos nuevos que empiezan por <code>/amri:</code>.",
 pg_c1t:"Claude",pg_c1d:"El cocinero: entiende lo que quieres y sabe hacerlo.",
 pg_c2t:"El plugin de AMRI",pg_c2d:"El libro de recetas: todas las recetas de la web y el chef que las combina.",
 pg_c3t:"Tu ordenador",pg_c3d:"La cocina: ahí se crean los archivos y desde ahí se publica tu proyecto.",
 pg_vs:"<b>¿Y un conector?</b> Un conector le da a Claude acceso a una app, como Gmail o Canva. Un plugin le enseña a hacer tareas completas. Se complementan: las recetas usan conectores cuando hacen falta.",
 pg_cmp_t:"La misma receta, de dos maneras",
 pg_no_t:"📖 En la web",pg_no_s:"Gratis · para aprender con calma",
 pg_no_l:["Lees cada paso y entiendes por qué se hace","Copias la orden y la pegas en el chat de Claude","Vuelves a la web, marcas el paso y sigues","Tú haces cada paso, con la receta al lado"],
 pg_yes_t:"⚡ Con el plugin",pg_yes_s:"Claude Code · para construir rápido",
 pg_yes_l:["Escribes un solo comando con tu idea","Claude sigue la receta entera en tu ordenador","Crea los archivos, los guarda y los publica","Te avisa solo cuando necesita algo de ti"],
 pg_cmp_n:"Lo mejor es combinarlas: lee la receta en la web para entenderla y deja que el plugin la haga contigo.",
 pg_inst_t:"Instálalo en 3 minutos",
 pg_use_t:"Cómo sacarle provecho",
 pg_uses:[["🧭","Empieza un proyecto desde cero","Describe tu idea. El chef elige las recetas que hacen falta, te propone un orden y las cocina una tras otra.","/amri:chef una web para mi estudio de yoga con reservas y su Instagram"],
  ["🎯","Haz una receta concreta","Si ya sabes lo que quieres, ve directo a la receta y añade tu idea detrás.","/amri:logo-ia un logo para mi estudio de yoga, en tonos tierra y minimalista"],
  ["🛠️","Mejora un proyecto que ya tienes","Abre Claude Code en la carpeta de tu proyecto y pídele que aplique una receta sobre lo que ya existe.","/amri:chatbot-web añade a la web de esta carpeta un asistente que responda dudas de horarios y precios"],
  ["🎓","Aprende mientras lo hace","Pídele que te explique cada paso antes de hacerlo. Así no solo tienes el resultado: entiendes cómo se hizo.","/amri:webapp-gratis una web para mi panadería. Explícame cada paso con palabras sencillas antes de hacerlo"],
  ["⏯️","Retoma donde lo dejaste","Si cierras Claude Code a mitad, vuelve a abrirlo en la misma carpeta y dile por dónde ibas.","/amri:webapp-gratis seguimos: ya está en GitHub, falta publicarla en Cloudflare"]],
 pg_use_tip:"Truco: cuanto más concreta sea tu idea (para quién es, qué tiene que poder hacer la gente y qué estilo quieres), mejor será el resultado.",
 pg_demo_t:"Así es una sesión con el chef",
 pg_demo:["› /amri:chef una web para mi estudio de yoga con reservas","Te propongo este menú:","  1. Diseña un logo con IA","  2. Tu webapp online y gratis (con reservas)","  3. Un chatbot para tu web","¿Empezamos por el logo?","› sí","✓ Logo listo, en tres versiones","Para guardar la web necesito que inicies sesión en GitHub. Se abrirá el navegador.","› hecho","✓ Web publicada en estudio-yoga.pages.dev"],
 pg_faq_t:"Preguntas frecuentes",
 pg_faq:[["¿Necesito saber programar?","No. Claude escribe el código y te explica lo que hace. Tú decides, confirmas y aprendes por el camino."],
  ["¿Cuánto cuesta?","El plugin de AMRI es gratis y open source. Claude Code necesita un plan de pago de Claude (Pro o superior). Las recetas de la web son gratis para todo el mundo."],
  ["¿Es seguro?","Claude te pide permiso antes de publicar, subir o borrar nada. Nunca ve tus contraseñas: los inicios de sesión los haces tú en el navegador."],
  ["¿Y si no uso la terminal?","Las recetas del plugin también funcionan en Cowork, dentro de la app de escritorio de Claude."],
  ["¿Cómo consigo las recetas nuevas?","Cuando AMRI publica recetas, actualiza el catálogo desde el menú /plugin de Claude Code y aparecerán los comandos nuevos."],
  ["¿Plugin, skill o conector?","Un conector da acceso a una app. Una skill es una receta que Claude sabe seguir. Un plugin es un paquete que reúne varias skills (y a veces conectores) para instalarlas de una vez."]],
 lp_d:"Un plugin es un libro de recetas para Claude Code: lo instalas una vez y cada receta se convierte en un comando. Claude la cocina contigo en tu ordenador, y el chef combina varias en tu propio proyecto.",
 lp_b2:"Qué es un plugin",pl_how:"Qué es un plugin y cómo instalarlo →"
});
Object.assign(T.en,{
 pg_lead:"A plugin turns every AMRI recipe into a command. You type your idea and Claude cooks it with you on your computer: it creates the files, uses the terminal and publishes your project. It only asks for your help when needed.",
 pg_jump:"Install it now ↓",
 pg_what_k:"The basics",pg_what_t:"What is a plugin?",
 pg_what_d:"Claude already knows how to cook. A plugin is a <b>recipe book</b> you give it so it knows how to do something specific, your way and step by step. You install it once in Claude Code and it adds new commands that start with <code>/amri:</code>.",
 pg_c1t:"Claude",pg_c1d:"The cook: understands what you want and knows how to do it.",
 pg_c2t:"The AMRI plugin",pg_c2d:"The recipe book: every recipe on the website plus the chef that combines them.",
 pg_c3t:"Your computer",pg_c3d:"The kitchen: that's where the files are created and where your project is published from.",
 pg_vs:"<b>What about a connector?</b> A connector gives Claude access to an app, like Gmail or Canva. A plugin teaches it to do complete tasks. They work together: recipes use connectors when they need them.",
 pg_cmp_t:"The same recipe, two ways",
 pg_no_t:"📖 On the website",pg_no_s:"Free · to learn at your own pace",
 pg_no_l:["You read each step and understand why it's done","You copy the prompt and paste it into Claude's chat","You come back, tick the step and carry on","You do each step, with the recipe beside you"],
 pg_yes_t:"⚡ With the plugin",pg_yes_s:"Claude Code · to build fast",
 pg_yes_l:["You type a single command with your idea","Claude follows the whole recipe on your computer","It creates the files, saves them and publishes them","It only stops when it needs something from you"],
 pg_cmp_n:"The best way is to combine them: read the recipe on the website to understand it, and let the plugin do it with you.",
 pg_inst_t:"Install it in 3 minutes",
 pg_use_t:"How to make the most of it",
 pg_uses:[["🧭","Start a project from scratch","Describe your idea. The chef picks the recipes you need, suggests an order and cooks them one after another.","/amri:chef a website for my yoga studio with bookings and its Instagram"],
  ["🎯","Cook one specific recipe","If you already know what you want, go straight to the recipe and add your idea after it.","/amri:logo-ia a logo for my yoga studio, earthy tones and minimalist"],
  ["🛠️","Improve a project you already have","Open Claude Code in your project's folder and ask it to apply a recipe to what's already there.","/amri:chatbot-web add an assistant to the website in this folder that answers questions about times and prices"],
  ["🎓","Learn while it works","Ask it to explain each step before doing it. You don't just get the result: you understand how it was made.","/amri:webapp-gratis a website for my bakery. Explain each step in simple words before doing it"],
  ["⏯️","Pick up where you left off","If you close Claude Code halfway, reopen it in the same folder and tell it where you were.","/amri:webapp-gratis let's continue: it's on GitHub, it still needs publishing on Cloudflare"]],
 pg_use_tip:"Tip: the more specific your idea (who it's for, what people need to be able to do and what style you want), the better the result.",
 pg_demo_t:"What a session with the chef looks like",
 pg_demo:["› /amri:chef a website for my yoga studio with bookings","Here's the menu I suggest:","  1. Design a logo with AI","  2. Your web app, online and free (with bookings)","  3. A chatbot for your website","Shall we start with the logo?","› yes","✓ Logo ready, in three versions","To save the website I need you to sign in to GitHub. Your browser will open.","› done","✓ Website live at yoga-studio.pages.dev"],
 pg_faq_t:"Frequently asked questions",
 pg_faq:[["Do I need to know how to code?","No. Claude writes the code and explains what it does. You decide, confirm and learn along the way."],
  ["How much does it cost?","The AMRI plugin is free and open source. Claude Code needs a paid Claude plan (Pro or higher). The recipes on the website are free for everyone."],
  ["Is it safe?","Claude asks for permission before publishing, uploading or deleting anything. It never sees your passwords: you do the sign-ins yourself in the browser."],
  ["What if I don't use the terminal?","The plugin recipes also work in Cowork, inside the Claude desktop app."],
  ["How do I get new recipes?","When AMRI publishes recipes, update the catalogue from the /plugin menu in Claude Code and the new commands will appear."],
  ["Plugin, skill or connector?","A connector gives access to an app. A skill is a recipe Claude knows how to follow. A plugin is a package that bundles several skills (and sometimes connectors) so you can install them in one go."]],
 lp_d:"A plugin is a recipe book for Claude Code: you install it once and every recipe becomes a command. Claude cooks it with you on your computer, and the chef combines several into your own project.",
 lp_b2:"What is a plugin?",pl_how:"What a plugin is and how to install it →"
});
Object.assign(T.ar,{
 pg_lead:"الإضافة تحوّل كل وصفة من AMRI إلى أمر. تكتب فكرتك ويطبخها Claude معك على حاسوبك: ينشئ الملفات ويستخدم الطرفية وينشر مشروعك، ولا يطلب مساعدتك إلا عند الحاجة.",
 pg_jump:"ثبّتها الآن ↓",
 pg_what_k:"الأساسيات",pg_what_t:"ما هي الإضافة؟",
 pg_what_d:"Claude يعرف الطبخ أصلاً. الإضافة <b>كتاب وصفات</b> تعطيه إياه ليعرف كيف ينجز شيئاً محدداً بطريقتك وخطوة بخطوة. تُثبَّت مرة واحدة في Claude Code وتضيف أوامر جديدة تبدأ بـ <code>/amri:</code>.",
 pg_c1t:"Claude",pg_c1d:"الطاهي: يفهم ما تريد ويعرف كيف ينجزه.",
 pg_c2t:"إضافة AMRI",pg_c2d:"كتاب الوصفات: كل وصفات الموقع والطاهي الذي يجمعها.",
 pg_c3t:"حاسوبك",pg_c3d:"المطبخ: هناك تُنشأ الملفات ومن هناك يُنشر مشروعك.",
 pg_vs:"<b>وماذا عن الموصل؟</b> الموصل يمنح Claude وصولاً إلى تطبيق مثل Gmail أو Canva. أما الإضافة فتعلّمه إنجاز مهام كاملة. يكمّل أحدهما الآخر: الوصفات تستخدم الموصلات عند الحاجة.",
 pg_cmp_t:"الوصفة نفسها بطريقتين",
 pg_no_t:"📖 على الموقع",pg_no_s:"مجاناً · للتعلّم بهدوء",
 pg_no_l:["تقرأ كل خطوة وتفهم سببها","تنسخ الأمر وتلصقه في محادثة Claude","تعود إلى الموقع وتضع علامة على الخطوة وتتابع","تنفّذ كل خطوة بنفسك والوصفة بجانبك"],
 pg_yes_t:"⚡ مع الإضافة",pg_yes_s:"Claude Code · للبناء بسرعة",
 pg_yes_l:["تكتب أمراً واحداً مع فكرتك","يتبع Claude الوصفة كاملة على حاسوبك","ينشئ الملفات ويحفظها وينشرها","يتوقف فقط عندما يحتاج شيئاً منك"],
 pg_cmp_n:"الأفضل أن تجمع بينهما: اقرأ الوصفة على الموقع لتفهمها، ودع الإضافة تنفذها معك.",
 pg_inst_t:"ثبّتها في 3 دقائق",
 pg_use_t:"كيف تستفيد منها أقصى استفادة",
 pg_uses:[["🧭","ابدأ مشروعاً من الصفر","صِف فكرتك. يختار الطاهي الوصفات اللازمة ويقترح ترتيباً ويطبخها واحدة تلو الأخرى.","/amri:chef موقع لاستوديو اليوغا الخاص بي مع حجوزات وحساب إنستغرام"],
  ["🎯","اطبخ وصفة محددة","إن كنت تعرف ما تريد، اذهب مباشرة إلى الوصفة وأضف فكرتك بعدها.","/amri:logo-ia شعار لاستوديو اليوغا بألوان ترابية وبأسلوب بسيط"],
  ["🛠️","حسّن مشروعاً لديك","افتح Claude Code في مجلد مشروعك واطلب منه تطبيق وصفة على ما هو موجود.","/amri:chatbot-web أضف إلى موقع هذا المجلد مساعداً يجيب عن أسئلة المواعيد والأسعار"],
  ["🎓","تعلّم وهو يعمل","اطلب منه أن يشرح كل خطوة قبل تنفيذها. هكذا لا تحصل على النتيجة فقط، بل تفهم كيف صُنعت.","/amri:webapp-gratis موقع لمخبزي. اشرح لي كل خطوة بكلمات بسيطة قبل تنفيذها"],
  ["⏯️","تابع من حيث توقفت","إن أغلقت Claude Code في المنتصف، افتحه من جديد في المجلد نفسه وأخبره أين وصلت.","/amri:webapp-gratis لنتابع: الموقع على GitHub، ويبقى نشره على Cloudflare"]],
 pg_use_tip:"نصيحة: كلما كانت فكرتك أدق (لمن هي، وماذا يجب أن يستطيع الناس فعله، وأي أسلوب تريد) كانت النتيجة أفضل.",
 pg_demo_t:"هكذا تبدو جلسة مع الطاهي",
 pg_demo:["› /amri:chef موقع لاستوديو اليوغا مع حجوزات","أقترح عليك هذه القائمة:","  1. صمّم شعاراً بالذكاء الاصطناعي","  2. تطبيق ويب خاص بك، على الإنترنت ومجاناً (مع حجوزات)","  3. روبوت محادثة لموقعك","هل نبدأ بالشعار؟","› نعم","✓ الشعار جاهز بثلاث نسخ","لحفظ الموقع أحتاج أن تسجّل الدخول إلى GitHub. سيفتح المتصفح.","› تم","✓ الموقع منشور على yoga-studio.pages.dev"],
 pg_faq_t:"أسئلة شائعة",
 pg_faq:[["هل أحتاج إلى معرفة البرمجة؟","لا. يكتب Claude الشيفرة ويشرح ما يفعله. أنت تقرّر وتؤكّد وتتعلّم في الطريق."],
  ["كم تكلّف؟","إضافة AMRI مجانية ومفتوحة المصدر. يحتاج Claude Code إلى خطة Claude مدفوعة (Pro أو أعلى). وصفات الموقع مجانية للجميع."],
  ["هل هي آمنة؟","يطلب Claude إذنك قبل نشر أي شيء أو رفعه أو حذفه. لا يرى كلمات مرورك أبداً: أنت من يسجّل الدخول في المتصفح."],
  ["وإن لم أستخدم الطرفية؟","وصفات الإضافة تعمل أيضاً في Cowork داخل تطبيق Claude لسطح المكتب."],
  ["كيف أحصل على الوصفات الجديدة؟","عندما ينشر AMRI وصفات جديدة، حدّث الكتالوج من قائمة ‎/plugin في Claude Code فتظهر الأوامر الجديدة."],
  ["إضافة أم مهارة أم موصل؟","الموصل يمنح وصولاً إلى تطبيق. المهارة وصفة يعرف Claude كيف يتبعها. الإضافة حزمة تجمع عدة مهارات (وأحياناً موصلات) لتثبيتها دفعة واحدة."]],
 lp_d:"الإضافة كتاب وصفات لـ Claude Code: تثبّتها مرة واحدة فتتحول كل وصفة إلى أمر. يطبخها Claude معك على حاسوبك، ويجمع الطاهي عدة وصفات في مشروعك الخاص.",
 lp_b2:"ما هي الإضافة؟",pl_how:"ما هي الإضافة وكيف تثبّتها ←"
});
var LANGS=[["es","Español"],["en","English"],["ar","العربية"]];
function detect(){try{var s=localStorage.getItem("amri-lang");if(T[s])return s;}catch(e){}var n=((navigator.language||"es")+"").slice(0,2);return T[n]?n:"es";}
var lang=detect();
var t=function(k){var v=T[lang][k];return v!==undefined?v:(T.es[k]!==undefined?T.es[k]:"")};
var card=function(i){return T[lang].cards[i]||T.es.cards[i]};

/* CSS extra: derecha-izquierda, selector y fuente árabe */
var st=document.createElement("style");
st.textContent=".settings{position:relative}.set-btn{font:inherit;font-weight:600;background:var(--card);border:1px solid var(--line);color:var(--ink);border-radius:999px;padding:8px 14px;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:border-color .3s}.set-btn:hover,.settings.open .set-btn{border-color:var(--acc)}.set-btn svg{transition:transform .6s cubic-bezier(.22,.8,.24,1)}.settings.open .set-btn svg{transform:rotate(60deg)}.set-btn:focus-visible,.seg button:focus-visible{outline:3px solid var(--acc);outline-offset:2px}.set-pop{position:absolute;top:calc(100% + 10px);inset-inline-end:0;z-index:80;background:var(--card);border:1px solid var(--line);border-radius:18px;padding:16px;min-width:270px;box-shadow:0 24px 50px -20px rgba(42,31,20,.4);display:flex;flex-direction:column;gap:14px}.set-pop[hidden]{display:none}.set-row{display:flex;flex-direction:column;gap:8px}.set-l{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--mute)}.seg{display:flex;gap:4px;background:var(--bg);border:1px solid var(--line);border-radius:999px;padding:4px}.seg button{flex:1;font:inherit;font-size:14px;font-weight:600;border:0;background:none;color:var(--ink);border-radius:999px;padding:8px 10px;cursor:pointer;white-space:nowrap}.seg button[aria-pressed=true]{background:var(--acc);color:#fff}@media(max-width:560px){.set-btn .set-tx{display:none}.set-btn{padding:9px}}.lang-sel{font:inherit;font-weight:600;background:var(--card);border:1px solid var(--line);color:var(--ink);border-radius:999px;padding:8px 12px;cursor:pointer}.lang-sel:hover{border-color:var(--acc)}.lang-sel:focus-visible{outline:3px solid var(--acc);outline-offset:2px}"+
".langbar{display:flex;justify-content:flex-end;margin-bottom:12px}.i18n-note{background:var(--soft);border-inline-start:4px solid var(--acc);border-radius:8px;padding:10px 12px;font-size:15px;margin:0 0 16px}"+
"[dir=rtl] body{font-family:'Noto Sans Arabic','Segoe UI',Tahoma,system-ui,sans-serif;line-height:1.75}[dir=rtl] h1,[dir=rtl] h2,[dir=rtl] h3{letter-spacing:0!important}"+
"[dir=rtl] .brand .sub,[dir=rtl] .abrand .sub{border-left:0;padding-left:0;border-right:1px solid var(--line);padding-right:10px}"+
"[dir=rtl] .card-thumb .tag{left:auto;right:10px}[dir=rtl] .more svg{transform:scaleX(-1)}[dir=rtl] a.card:hover .more svg{transform:scaleX(-1) translateX(4px)}"+
"[dir=rtl] .news-form input[type=email]{direction:ltr;text-align:right}";
document.head.appendChild(st);

function loadArabicFont(){if(document.getElementById("ar-font"))return;var l=document.createElement("link");l.id="ar-font";l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700;800&display=swap";document.head.appendChild(l);}

function apply(){
 var d=document.documentElement;d.lang=lang;d.dir=lang==="ar"?"rtl":"ltr";if(lang==="ar")loadArabicFont();
 document.title=t("title");
 var md=document.querySelector('meta[name="description"]');if(md)md.setAttribute("content",t("meta_desc"));
 var isRecipe=!!document.querySelector(".abrand");
 document.querySelectorAll("[data-i]").forEach(function(e){e.innerHTML=t(e.dataset.i)});
 document.querySelectorAll("[data-i-ph]").forEach(function(e){e.placeholder=t(e.dataset.iPh)});
 document.querySelectorAll("[data-i-aria]").forEach(function(e){e.setAttribute("aria-label",t(e.dataset.iAria))});
 document.querySelectorAll("[data-i-alt]").forEach(function(e){e.alt=t(e.dataset.iAlt)});
 if(isRecipe){
  var sub=document.querySelector(".abrand .sub");if(sub)sub.textContent=t("brand_sub");
  document.querySelectorAll(".back").forEach(function(e){e.textContent=t("back")});
  var af=document.querySelector(".afoot");if(af)af.innerHTML=t("foot_r");
  var n=document.getElementById("i18n-note");
  if(lang==="es"||(window.RECIPE&&window.RECIPE[lang])){if(n)n.remove();}
  else{if(!n){n=document.createElement("div");n.id="i18n-note";n.className="i18n-note";var h=document.querySelector("main h1");h.parentNode.insertBefore(n,h);}n.textContent=t("notice");}
  /* el título de la pestaña de una receta no se traduce: el contenido sigue en español */
  var rt=document.body.dataset.rt;if(rt&&!(window.RECIPE&&window.RECIPE[lang]))document.title=rt;
 }
 paintSettings();
}
function set(l){if(!T[l])return;lang=l;try{localStorage.setItem("amri-lang",l)}catch(e){}apply();document.dispatchEvent(new CustomEvent("langchange",{detail:l}));}

function build(){
 /* Ajustes: idioma y tema juntos en un solo botón */
 var w=document.createElement("div");w.className="settings";
 w.innerHTML='<button type="button" class="set-btn" aria-expanded="false" aria-haspopup="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg><span class="set-tx"></span></button>'+
  '<div class="set-pop" role="dialog" hidden><div class="set-row"><span class="set-l" data-k="set_lang"></span><div class="seg" data-g="lang"></div></div>'+
  '<div class="set-row"><span class="set-l" data-k="set_theme"></span><div class="seg" data-g="theme"><button type="button" data-v="light">☀️ <span data-k="set_light"></span></button><button type="button" data-v="dark">🌙 <span data-k="set_dark"></span></button></div></div></div>';
 var segL=w.querySelector('[data-g="lang"]');
 LANGS.forEach(function(x){var b=document.createElement("button");b.type="button";b.dataset.v=x[0];b.textContent=x[1];b.lang=x[0];segL.appendChild(b)});
 var btn=w.querySelector(".set-btn"),pop=w.querySelector(".set-pop");
 function open(o){pop.hidden=!o;btn.setAttribute("aria-expanded",o?"true":"false");w.classList.toggle("open",o)}
 btn.onclick=function(e){e.stopPropagation();open(pop.hidden)};
 document.addEventListener("click",function(e){if(!w.contains(e.target))open(false)});
 document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!pop.hidden){open(false);btn.focus()}});
 segL.onclick=function(e){var b=e.target.closest("button");if(b)set(b.dataset.v)};
 w.querySelector('[data-g="theme"]').onclick=function(e){var b=e.target.closest("button");if(b)setTheme(b.dataset.v)};
 var nr=document.querySelector(".nav-right");
 if(nr){nr.insertBefore(w,nr.firstChild);}
 else{var m=document.querySelector("main");if(m){var bar=document.createElement("div");bar.className="langbar";bar.appendChild(w);m.insertBefore(bar,m.firstChild);}}
 paintTheme();
}
function curTheme(){return document.documentElement.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light")}
function setTheme(v){document.documentElement.setAttribute("data-theme",v);try{localStorage.setItem("amri-theme",v)}catch(e){}paintTheme();document.dispatchEvent(new CustomEvent("themechange",{detail:v}));}
function paintTheme(){var v=curTheme();
 var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=v==="dark"?"#17110B":"#FBF6EE";
 document.querySelectorAll('.settings [data-g="theme"] button').forEach(function(b){b.setAttribute("aria-pressed",b.dataset.v===v?"true":"false")});}
function paintSettings(){
 document.querySelectorAll(".settings [data-k]").forEach(function(el){el.textContent=t(el.dataset.k)});
 var b=document.querySelector(".settings .set-btn");if(b){b.querySelector(".set-tx").textContent=t("set_btn");b.setAttribute("aria-label",t("set_btn"));}
 document.querySelectorAll('.settings [data-g="lang"] button').forEach(function(x){x.setAttribute("aria-pressed",x.dataset.v===lang?"true":"false")});
}
if(document.querySelector(".abrand")){document.body.dataset.rt=document.title;}
build();apply();
/* Banner de idioma: solo la primera visita */
function chosen(){try{return !!localStorage.getItem("amri-lang")}catch(e){return true}}
function langBanner(){
 if(chosen())return;
 var css=".lb-wrap{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:20px;background:color-mix(in srgb,var(--bg) 55%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);animation:lbf .6s cubic-bezier(.22,.8,.24,1)}"+
 ".lb{width:min(440px,100%);background:var(--card);border:1px solid var(--line);border-radius:28px;padding:32px 26px;text-align:center;box-shadow:0 40px 90px -40px rgba(42,31,20,.55);animation:lbu .8s cubic-bezier(.22,.8,.24,1)}"+
 ".lb .lg{width:54px;height:54px;border-radius:16px;background:var(--acc);color:#fff;display:grid;place-items:center;font-weight:800;font-size:30px;margin:0 auto 14px}"+
 ".lb h2{margin:0 0 4px;font-size:24px;letter-spacing:-.02em}.lb p{margin:0 0 20px;color:var(--mute);font-size:15px}"+
 ".lb button{display:flex;width:100%;align-items:center;justify-content:space-between;gap:10px;font:inherit;font-weight:700;font-size:17px;padding:14px 18px;margin-top:10px;border-radius:16px;border:1.5px solid var(--line);background:var(--bg);color:var(--ink);cursor:pointer;transition:border-color .3s,transform .4s cubic-bezier(.22,.8,.24,1)}"+
 ".lb button:hover,.lb button:focus-visible{border-color:var(--acc);transform:translateY(-2px);outline:0}.lb button.sug{border-color:var(--acc)}.lb button small{font-weight:600;color:var(--mute);font-size:13px}"+
 "@keyframes lbf{from{opacity:0}}@keyframes lbu{from{opacity:0;transform:translateY(20px) scale(.98)}}";
 var st2=document.createElement("style");st2.textContent=css;document.head.appendChild(st2);
 var w=document.createElement("div");w.className="lb-wrap";w.setAttribute("role","dialog");w.setAttribute("aria-modal","true");w.setAttribute("aria-label","Idioma · Language · اللغة");
 var H={es:["Elige tu idioma","Puedes cambiarlo cuando quieras."],en:["Choose your language","You can change it anytime."],ar:["اختر لغتك","يمكنك تغييرها في أي وقت."]}[lang];
 w.innerHTML='<div class="lb"><div class="lg">A</div><h2>'+H[0]+'</h2><p>'+H[1]+'</p>'+LANGS.map(function(x){return '<button type="button" data-l="'+x[0]+'" class="'+(x[0]===lang?"sug":"")+'" dir="'+(x[0]==="ar"?"rtl":"ltr")+'"><span>'+x[1]+'</span><small>'+(x[0]===lang?"✓":"")+'</small></button>'}).join("")+'</div>';
 w.addEventListener("click",function(e){var b=e.target.closest("[data-l]");if(!b)return;set(b.dataset.l);w.style.transition="opacity .5s";w.style.opacity="0";setTimeout(function(){w.remove()},500)});
 document.body.appendChild(w);
 var f=w.querySelector(".sug");if(f)setTimeout(function(){f.focus()},50);
}
langBanner();
window.I18N={t:t,card:card,set:set,lang:function(){return lang},conn:function(){return T[lang].conn||T.es.conn}};
})();
