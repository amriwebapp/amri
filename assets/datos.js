/* AMRI · datos compartidos de recetas y categorías (mismo orden que las tarjetas de i18n.js) */
window.AMRI_DATA={
  order:["webapp-gratis","imagenes-ia","asistente-ia","automatiza-tareas","chatbot-web","logo-ia","video-aftereffects","blender-3d",
    "higgsfield-cine","canva-diseno","figma-a-web","notion-cerebro","gmail-calendario","navegador-chrome","skills-propias","conector-propio","slack-equipo","gurusup-brain","redes-sociales","animaciones-opus","jev-decisiones","jev-guardian","empieza-aqui","primer-agente"],
  svg:["higgsfield-cine","canva-diseno","figma-a-web","notion-cerebro","gmail-calendario","navegador-chrome","skills-propias","conector-propio","slack-equipo","gurusup-brain","redes-sociales","animaciones-opus","jev-decisiones","jev-guardian","empieza-aqui","primer-agente"],
  paths:[
    {ic:"🌱",r:["empieza-aqui","asistente-ia","imagenes-ia","logo-ia"]},
    {ic:"🔌",r:["gmail-calendario","notion-cerebro","canva-diseno","navegador-chrome","slack-equipo"]},
    {ic:"🛠️",r:["webapp-gratis","chatbot-web","figma-a-web","automatiza-tareas"]},
    {ic:"🎬",r:["higgsfield-cine","video-aftereffects","blender-3d","redes-sociales","animaciones-opus"]},
    {ic:"🧠",r:["primer-agente","skills-propias","conector-propio"]},
    {ic:"🏢",r:["gurusup-brain","jev-decisiones","jev-guardian"]}
  ],
  img:function(slug,base){return (base||"")+"img/"+slug+(this.svg.indexOf(slug)>-1?".svg":".jpg")},
  title:function(slug){var i=this.order.indexOf(slug);return i>-1&&window.I18N?I18N.card(i).titulo:slug}
};

/* ---- Proyectos completos (rutas que encadenan recetas) ---- */
window.AMRI_DATA.projects=[
  {id:"negocio",ic:"🏪",r:["logo-ia","webapp-gratis","chatbot-web","redes-sociales"],
   t:{es:"Tu negocio online en un fin de semana",en:"Your business online in a weekend",ar:"مشروعك على الإنترنت في عطلة أسبوع"},
   d:{es:"Marca, web con reservas, un asistente que atiende a tus clientes y tus redes sociales en marcha.",en:"A brand, a website with bookings, an assistant that answers your customers and your social media up and running.",ar:"علامة تجارية، وموقع بحجوزات، ومساعد يجيب عملاءك، وشبكاتك الاجتماعية جاهزة."}},
  {id:"marca",ic:"✨",r:["logo-ia","canva-diseno","webapp-gratis","redes-sociales"],
   t:{es:"Tu marca personal",en:"Your personal brand",ar:"علامتك الشخصية"},
   d:{es:"Logo, plantillas con tus colores, un portfolio online y contenido con tu voz.",en:"A logo, templates in your colours, an online portfolio and content in your voice.",ar:"شعار، وقوالب بألوانك، ومعرض أعمال على الإنترنت، ومحتوى بصوتك."}},
  {id:"oficina",ic:"🗂️",r:["asistente-ia","gmail-calendario","notion-cerebro","automatiza-tareas","slack-equipo"],
   t:{es:"Tu oficina con IA",en:"Your AI-powered office",ar:"مكتبك مع الذكاء الاصطناعي"},
   d:{es:"Correo y agenda en orden, notas que se organizan solas, tareas automáticas y tu equipo conectado.",en:"Email and calendar in order, notes that organise themselves, automatic tasks and your team connected.",ar:"بريد وتقويم منظمان، وملاحظات تنتظم وحدها، ومهام آلية، وفريقك متصل."}},
  {id:"video",ic:"🎬",r:["asistente-ia","higgsfield-cine","video-aftereffects","redes-sociales"],
   t:{es:"Tu canal de vídeo",en:"Your video channel",ar:"قناتك للفيديو"},
   d:{es:"Ideas y guiones, clips de cine, títulos animados y un plan para publicar cada semana.",en:"Ideas and scripts, cinematic clips, animated titles and a plan to post every week.",ar:"أفكار وسيناريوهات، ولقطات سينمائية، وعناوين متحركة، وخطة للنشر كل أسبوع."}}
];
/* ---- Fecha de la última revisión real de cada receta ----
   Pon aquí la fecha SOLO cuando alguien haya seguido la receta de principio a fin y comprobado que funciona.
   Ejemplo: "webapp-gratis":"2026-10-07". Sin fecha, la receta no muestra «Revisada el…». */
window.AMRI_DATA.revised={};
/* ---- Palabras clave para «¿Qué quieres construir?» (es / en / ar) ---- */
window.AMRI_DATA.keywords={
 "webapp-gratis":["web","pagina","página","website","site","tienda","shop","reserva","booking","portfolio","blog","app","موقع","متجر","حجز"],
 "chatbot-web":["chatbot","bot","atencion","atención","clientes","preguntas","faq","customer","support","روبوت","محادثة","عملاء"],
 "logo-ia":["logo","marca","brand","identidad","identity","شعار","علامة"],
 "imagenes-ia":["imagen","imagenes","imágenes","foto","ilustracion","ilustración","image","photo","picture","illustration","صورة","صور"],
 "asistente-ia":["asistente","escribir","resumir","texto","ayuda","assistant","write","summar","مساعد","كتابة","تلخيص"],
 "automatiza-tareas":["automatiz","tareas","repetitiv","hoja de calculo","excel","automat","tasks","spreadsheet","أتمتة","مهام"],
 "video-aftereffects":["video","vídeo","animacion","animación","intro","titulos","títulos","animation","فيديو","رسوم متحركة"],
 "blender-3d":["3d","modelo","objeto","escena","render","model","scene","ثلاثي"],
 "higgsfield-cine":["cine","anuncio","producto","clip","cinematic","commercial","advert","product","إعلان","سينمائي","منتج"],
 "canva-diseno":["canva","cartel","presentacion","presentación","post","diseño","diseno","poster","presentation","design","flyer","تصميم","ملصق","عرض"],
 "figma-a-web":["figma","mockup","prototipo","prototype","maqueta","نموذج"],
 "notion-cerebro":["notion","notas","organizar","documentacion","documentación","notes","organis","organiz","docs","ملاحظات","تنظيم"],
 "gmail-calendario":["correo","email","gmail","agenda","calendario","citas","calendar","inbox","بريد","تقويم","مواعيد"],
 "navegador-chrome":["navegador","chrome","investigar","formulario","browser","research","form","متصفح","بحث"],
 "skills-propias":["metodo","método","plantilla","proceso","skill","template","process","method","طريقة","قالب"],
 "conector-propio":["conector","api","integrar","integracion","integración","connector","mcp","integrate","موصل","ربط"],
 "slack-equipo":["slack","equipo","team","فريق"],
 "gurusup-brain":["conocimiento","soporte","base de conocimiento","knowledge","support","معرفة","دعم"],
 "animaciones-opus":["animacion","animación","animar","animado","motion","animate","animated","opus","storyboard","تحريك","متحرك"],
 "jev-decisiones":["jev","clasificar","clasificador","decidir","decision","decisión","priorizar","puntuar","classify","decide","prioriti","score","triage","تصنيف","قرار"],
 "jev-guardian":["guardian","guardián","seguridad","proteger","moderar","moderacion","moderación","safety","guardrail","protect","moderat","حارس","حماية","أمان"],
 "empieza-aqui":["empezar","principiante","aprender","que es claude","qué es claude","primera vez","desde cero","beginner","start","learn","first time","مبتدئ","البداية","تعلم"],
 "primer-agente":["agente","agentes","claude code","cowork","terminal","tarea larga","trabaje solo","agent","agents","autonomous","وكيل","وكلاء"],
 "redes-sociales":["tiktok","linkedin","threads","instagram","redes","reel","seguidores","social","contenido","content","followers","إنستغرام","محتوى","متابعين"]
};
/* Orden natural para cocinar un proyecto: base → marca → contenido → automatización */
window.AMRI_DATA.buildOrder=["empieza-aqui","asistente-ia","logo-ia","imagenes-ia","webapp-gratis","figma-a-web","chatbot-web","canva-diseno","higgsfield-cine","video-aftereffects","blender-3d","animaciones-opus","redes-sociales","notion-cerebro","gmail-calendario","slack-equipo","gurusup-brain","automatiza-tareas","navegador-chrome","primer-agente","skills-propias","conector-propio","jev-decisiones","jev-guardian"];
