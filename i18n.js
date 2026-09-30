/* AMRI · sistema de idiomas (es / en / ar). Los textos viven en T. */
(function(){
var CH=function(a,b,c){return [a,b,c]};
var T={
es:{
 title:"AMRI · Academia abierta de IA — aprende a crear con Claude",
 meta_desc:"AMRI es una academia de IA gratuita y open source. Recetas paso a paso para crear webs, imágenes, vídeo, automatizaciones y conectores con Claude. Sin saber programar.",
 brand_sub:"Academia de IA",theme_aria:"Cambiar tema",lang_aria:"Idioma",
 back:"← Volver a la academia",next_label:"Siguiente receta",
 foot_r:'<a href="../index.html">AMRI</a> · Academia abierta de IA · © 2026 AMRI',
 notice:"Esta receta está disponible por ahora solo en español. La traducción llegará pronto.",
 nav_how:"Cómo funciona",nav_paths:"Rutas",nav_conn:"Conectores",nav_recipes:"Recetas",nav_open:"Open source",
 eyebrow:"Academia abierta · gratis · open source",
 h1:"Aprende a crear <em>con IA</em>, a tu ritmo.",
 lead:"Recetas paso a paso para usar Claude y sus conectores: webs, imágenes, vídeo, automatizaciones y tus propias herramientas. Sin jerga, sin prisas y sin saber programar.",
 cta1:"Empieza por aquí",cta2:"Ver las 16 recetas",scroll_hint:"Desliza despacio",
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
 conn:["imagen y vídeo de cine","diseños y presentaciones","de diseño a código","tu segundo cerebro","correo en orden","agenda sin líos","navega por ti","3D sin modelar","animación y títulos","tu código, versionado","publica gratis","tus archivos a mano"],
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
 o_script:"› Claude, quiero una academia de IA abierta llamada AMRI.\n  Tono tranquilo, colores crema y teja, tipografía Bricolage.\n\nEntendido. Te propongo:\n✓ Portada con animación suave al hacer scroll\n✓ 16 recetas paso a paso, con filtros y buscador\n✓ Rutas de aprendizaje en 5 niveles\n✓ Tres idiomas y modo oscuro\n\n› Añade recetas de conectores: Higgsfield, Canva, Notion…\n✓ Hecho. Cada receta guarda tu progreso.\n\nEl código es tuyo. ¿Lo publicamos en Cloudflare?",
 q_kicker:"Preguntas tranquilas",q_title:"Antes de empezar",
 q1q:"¿De verdad es gratis?",q1a:"Sí. Las recetas son gratuitas y abiertas. Muchas herramientas tienen plan gratuito; cuando alguna es de pago, la receta te lo dice al principio.",
 q2q:"¿Necesito saber programar?",q2a:"No. Cada paso explica qué hacer y trae el texto exacto para copiar. Si alguna vez aparece código, Claude lo escribe por ti.",
 q3q:"¿Qué es un conector y es seguro?",q3a:"Es un permiso para que Claude use otra app en tu nombre. Tú decides cuáles activas y puedes desconectarlos cuando quieras. Empieza siempre con permisos de solo lectura si puedes.",
 q4q:"¿Qué plan de Claude necesito?",q4a:"Muchas recetas funcionan con el plan gratuito. Algunos conectores y funciones avanzadas pueden necesitar un plan de pago; lo indicamos en cada receta.",
 n_title:"Una receta nueva cada semana.",n_desc:"Te escribimos cuando publicamos algo. Sin spam, sin prisas: solo cocina con IA.",n_ph:"tu@correo.com",n_btn:"Avísame",n_ok:"¡Apuntado! ✓",
 fo_l:"<b>AMRI</b> · Academia abierta de IA · © 2026 · Hecha con calma y con Claude",fo_a1:"Sobre AMRI",fo_a2:"Contacto",fo_a3:"RSS",
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
 {tag:"Avanzado",titulo:"Cocina tu propio conector MCP",desc:"Crea un conector sencillo para que Claude use tus propios datos o tu propia app. Claude escribe el código.",chips:CH("1 h","Avanzada","0 €")}]},
en:{
 title:"AMRI · Open AI Academy — learn to create with Claude",
 meta_desc:"AMRI is a free, open-source AI academy. Step-by-step recipes to build websites, images, video, automations and connectors with Claude. No coding required.",
 brand_sub:"AI Academy",theme_aria:"Change theme",lang_aria:"Language",
 back:"← Back to the academy",next_label:"Next recipe",
 foot_r:'<a href="../index.html">AMRI</a> · Open AI Academy · © 2026 AMRI',
 notice:"This recipe is currently available in Spanish only. The translation is coming soon.",
 nav_how:"How it works",nav_paths:"Paths",nav_conn:"Connectors",nav_recipes:"Recipes",nav_open:"Open source",
 eyebrow:"Open academy · free · open source",
 h1:"Learn to create <em>with AI</em>, at your own pace.",
 lead:"Step-by-step recipes for using Claude and its connectors: websites, images, video, automations and your own tools. No jargon, no rush, no coding.",
 cta1:"Start here",cta2:"See all 16 recipes",scroll_hint:"Scroll slowly",
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
 conn:["cinematic image & video","designs & decks","from design to code","your second brain","inbox in order","a calm calendar","browses for you","3D without modelling","animation & titles","your code, versioned","publish for free","your files at hand"],
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
 o_script:"› Claude, I want an open AI academy called AMRI.\n  Calm tone, cream and terracotta colours, Bricolage font.\n\nGot it. Here's my proposal:\n✓ A landing page with gentle scroll animation\n✓ 16 step-by-step recipes, with filters and search\n✓ Learning paths in 5 levels\n✓ Three languages and dark mode\n\n› Add connector recipes: Higgsfield, Canva, Notion…\n✓ Done. Every recipe saves your progress.\n\nThe code is yours. Shall we publish it on Cloudflare?",
 q_kicker:"Calm questions",q_title:"Before you start",
 q1q:"Is it really free?",q1a:"Yes. The recipes are free and open. Many tools have a free plan; when one is paid, the recipe tells you up front.",
 q2q:"Do I need to know how to code?",q2a:"No. Each step explains what to do and includes the exact text to copy. If code ever appears, Claude writes it for you.",
 q3q:"What is a connector, and is it safe?",q3a:"It's a permission that lets Claude use another app on your behalf. You decide which ones to enable and can disconnect them anytime. Start with read-only permissions when you can.",
 q4q:"Which Claude plan do I need?",q4a:"Many recipes work on the free plan. Some connectors and advanced features may need a paid plan; each recipe says so.",
 n_title:"A new recipe every week.",n_desc:"We'll write when we publish something. No spam, no rush: just cooking with AI.",n_ph:"you@email.com",n_btn:"Notify me",n_ok:"You're in! ✓",
 fo_l:"<b>AMRI</b> · Open AI Academy · © 2026 · Made calmly, with Claude",fo_a1:"About AMRI",fo_a2:"Contact",fo_a3:"RSS",
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
 {tag:"Advanced",titulo:"Cook your own MCP connector",desc:"Build a simple connector so Claude can use your own data or app. Claude writes the code.",chips:CH("1 h","Advanced","€0")}]},
ar:{
 title:"AMRI · أكاديمية مفتوحة للذكاء الاصطناعي — تعلّم الإبداع مع Claude",
 meta_desc:"AMRI أكاديمية مجانية ومفتوحة المصدر للذكاء الاصطناعي. وصفات خطوة بخطوة لإنشاء مواقع وصور وفيديو وأتمتة وموصلات مع Claude، دون برمجة.",
 brand_sub:"أكاديمية الذكاء الاصطناعي",theme_aria:"تغيير المظهر",lang_aria:"اللغة",
 back:"→ العودة إلى الأكاديمية",next_label:"الوصفة التالية",
 foot_r:'<a href="../index.html">AMRI</a> · أكاديمية مفتوحة للذكاء الاصطناعي · © 2026 AMRI',
 notice:"هذه الوصفة متوفرة حالياً بالإسبانية فقط. ستتوفر الترجمة قريباً.",
 nav_how:"كيف تعمل",nav_paths:"المسارات",nav_conn:"الموصلات",nav_recipes:"الوصفات",nav_open:"مفتوحة المصدر",
 eyebrow:"أكاديمية مفتوحة · مجانية · مفتوحة المصدر",
 h1:"تعلّم الإبداع <em>بالذكاء الاصطناعي</em>، على مهلك.",
 lead:"وصفات خطوة بخطوة لاستخدام Claude وموصلاته: مواقع وصور وفيديو وأتمتة وأدواتك الخاصة. بلا مصطلحات، بلا عجلة، ودون برمجة.",
 cta1:"ابدأ من هنا",cta2:"شاهد الوصفات الـ16",scroll_hint:"مرّر ببطء",
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
 conn:["صور وفيديو سينمائي","تصاميم وعروض","من التصميم إلى الشيفرة","دماغك الثاني","بريد منظّم","تقويم هادئ","يتصفح عنك","ثلاثي أبعاد بلا نمذجة","حركة وعناوين","شيفرتك بإصداراتها","انشر مجاناً","ملفاتك في متناولك"],
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
 o_script:"› Claude, I want an open AI academy called AMRI.\n  Calm tone, cream and terracotta colours, Bricolage font.\n\nGot it. Here's my proposal:\n✓ A landing page with gentle scroll animation\n✓ 16 step-by-step recipes, with filters and search\n✓ Learning paths in 5 levels\n✓ Three languages and dark mode\n\n› Add connector recipes: Higgsfield, Canva, Notion…\n✓ Done. Every recipe saves your progress.\n\nThe code is yours. Shall we publish it on Cloudflare?",
 q_kicker:"أسئلة هادئة",q_title:"قبل أن تبدأ",
 q1q:"هل هي مجانية حقاً؟",q1a:"نعم. الوصفات مجانية ومفتوحة. لكثير من الأدوات خطة مجانية؛ وإن كانت إحداها مدفوعة تخبرك الوصفة بذلك من البداية.",
 q2q:"هل أحتاج إلى معرفة البرمجة؟",q2a:"لا. كل خطة تشرح ما تفعله وتتضمن النص الدقيق للنسخ. وإن ظهرت شيفرة يوماً، يكتبها Claude عنك.",
 q3q:"ما هو الموصل، وهل هو آمن؟",q3a:"إنه إذن يسمح لـ Claude باستخدام تطبيق آخر نيابة عنك. أنت تقرر ما تفعّله ويمكنك فصله متى شئت. ابدأ بصلاحيات القراءة فقط إن أمكن.",
 q4q:"أي خطة من Claude أحتاج؟",q4a:"كثير من الوصفات تعمل بالخطة المجانية. قد تحتاج بعض الموصلات والميزات المتقدمة إلى خطة مدفوعة؛ نذكر ذلك في كل وصفة.",
 n_title:"وصفة جديدة كل أسبوع.",n_desc:"نراسلك عندما ننشر شيئاً. بلا رسائل مزعجة، بلا عجلة: فقط طبخ بالذكاء الاصطناعي.",n_ph:"you@email.com",n_btn:"أعلمني",n_ok:"تم التسجيل! ✓",
 fo_l:"<b>AMRI</b> · أكاديمية مفتوحة للذكاء الاصطناعي · © 2026 · صُنعت بهدوء ومع Claude",fo_a1:"عن AMRI",fo_a2:"اتصل بنا",fo_a3:"RSS",
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
 {tag:"متقدم",titulo:"اطبخ موصل MCP خاصاً بك",desc:"أنشئ موصلاً بسيطاً ليستخدم Claude بياناتك أو تطبيقك. Claude يكتب الشيفرة.",chips:CH("ساعة","متقدم","مجاناً")}]}
};
var LANGS=[["es","Español"],["en","English"],["ar","العربية"]];
function detect(){try{var s=localStorage.getItem("amri-lang");if(T[s])return s;}catch(e){}var n=((navigator.language||"es")+"").slice(0,2);return T[n]?n:"es";}
var lang=detect();
var t=function(k){var v=T[lang][k];return v!==undefined?v:(T.es[k]!==undefined?T.es[k]:"")};
var card=function(i){return T[lang].cards[i]||T.es.cards[i]};

/* CSS extra: derecha-izquierda, selector y fuente árabe */
var st=document.createElement("style");
st.textContent=".lang-sel{font:inherit;font-weight:600;background:var(--card);border:1px solid var(--line);color:var(--ink);border-radius:999px;padding:8px 12px;cursor:pointer}.lang-sel:hover{border-color:var(--acc)}.lang-sel:focus-visible{outline:3px solid var(--acc);outline-offset:2px}"+
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
  if(lang==="es"){if(n)n.remove();}
  else{if(!n){n=document.createElement("div");n.id="i18n-note";n.className="i18n-note";var h=document.querySelector("main h1");h.parentNode.insertBefore(n,h);}n.textContent=t("notice");}
  /* el título de la pestaña de una receta no se traduce: el contenido sigue en español */
  var rt=document.body.dataset.rt;if(rt)document.title=rt;
 }
 var sel=document.getElementById("lang");if(sel){sel.value=lang;sel.setAttribute("aria-label",t("lang_aria"));}
}
function set(l){if(!T[l])return;lang=l;try{localStorage.setItem("amri-lang",l)}catch(e){}apply();document.dispatchEvent(new CustomEvent("langchange",{detail:l}));}

function build(){
 var s=document.createElement("select");s.id="lang";s.className="lang-sel";
 LANGS.forEach(function(x){var o=document.createElement("option");o.value=x[0];o.textContent=x[1];s.appendChild(o)});
 s.onchange=function(){set(s.value)};
 var nr=document.querySelector(".nav-right");
 if(nr){nr.insertBefore(s,nr.firstChild);}
 else{var m=document.querySelector("main");if(m){var b=document.createElement("div");b.className="langbar";b.appendChild(s);m.insertBefore(b,m.firstChild);}}
}
if(document.querySelector(".abrand")){document.body.dataset.rt=document.title;}
build();apply();
window.I18N={t:t,card:card,set:set,lang:function(){return lang},conn:function(){return T[lang].conn||T.es.conn}};
})();
