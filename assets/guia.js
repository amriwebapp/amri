/* ==========================================================
   AMRI · guía dentro de cada receta
   - «Revisada el…» bajo el título
   - Mapa «Cómo encaja todo»
   - Glosario: palabras subrayadas con su explicación
   - En cada paso: «¿Por qué este paso?» y «¿Algo falla?»
   Todo funciona en es / en / ar y se recalcula cuando cambia el idioma.
   ========================================================== */
(function(){
"use strict";
var D=window.AMRI_DATA,LG=window.AMRI_LOGO;if(!D||!window.I18N)return;
var slug=(document.body.dataset.slug)||(location.pathname.split("/").pop()||"").replace(/\.html$/,"");
var T=function(k){return I18N.t(k)},L=function(){return I18N.lang()};
var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};
var norm=function(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")};

/* ---------------- Glosario ---------------- */
/* [variantes que se buscan en el texto] → explicación */
var GLOSS={
 es:[
  [["repositorio","repositorios"],"Una carpeta de tu proyecto guardada en GitHub, con el historial de cada cambio."],
  [["GitHub"],"Servicio gratuito para guardar el código en la nube y ver cada cambio que haces."],
  [["Cloudflare"],"Empresa que publica tu web en internet, rápida y con candado (HTTPS). El plan básico es gratis."],
  [["Supabase"],"Base de datos y sistema de cuentas de usuario listos para usar, con plan gratuito."],
  [["base de datos","bases de datos"],"Donde tu app guarda los datos de forma ordenada, como una hoja de cálculo muy potente."],
  [["dominio","dominios"],"La dirección de tu web, como amri.es. Se alquila por años."],
  [["DNS"],"La guía telefónica de internet: traduce tu dominio a la dirección del servidor."],
  [["HTTPS"],"La conexión segura: el candado que ves junto a la dirección."],
  [["conector","conectores"],"Un permiso para que Claude use otra app por ti (Gmail, Canva…). Lo puedes quitar cuando quieras."],
  [["MCP"],"El estándar que usan los conectores para que Claude hable con otras herramientas."],
  [["prompt","prompts"],"El mensaje o la instrucción que le das a Claude."],
  [["API"],"La puerta por la que dos programas hablan entre sí."],
  [["terminal","Terminal"],"La ventana donde le das órdenes al ordenador escribiendo texto."],
  [["plugin"],"Un paquete que añade funciones a un programa, por ejemplo recetas nuevas a Claude Code."],
  [["Skill","Skills"],"Instrucciones guardadas que Claude saca solo cuando la tarea encaja."],
  [["RLS"],"Reglas de la base de datos para que cada persona vea solo sus propios datos."],
  [["HTML"],"El esqueleto de una página web: textos, títulos, imágenes y botones."],
  [["CSS"],"El estilo de una web: colores, tamaños, tipografías y posiciones."],
  [["JavaScript"],"El código que hace que la web reaccione: botones, formularios y animaciones."],
  [["commit"],"Guardar un cambio en el historial de tu repositorio, con una nota de qué cambiaste."],
  [["Claude Code"],"La versión de Claude que trabaja en la terminal de tu ordenador: crea archivos y ejecuta órdenes por ti."]
 ],
 en:[
  [["repository","repositories","repo"],"A folder of your project stored on GitHub, with the history of every change."],
  [["GitHub"],"A free service to store code in the cloud and see every change you make."],
  [["Cloudflare"],"A company that publishes your website on the internet, fast and with a padlock (HTTPS). The basic plan is free."],
  [["Supabase"],"A ready-to-use database and user account system, with a free plan."],
  [["database","databases"],"Where your app stores its data in an orderly way, like a very powerful spreadsheet."],
  [["domain","domains"],"Your website's address, like amri.es. You rent it by the year."],
  [["DNS"],"The internet's phone book: it translates your domain into the server's address."],
  [["HTTPS"],"The secure connection: the padlock you see next to the address."],
  [["connector","connectors"],"Permission for Claude to use another app for you (Gmail, Canva…). You can remove it any time."],
  [["MCP"],"The standard connectors use so Claude can talk to other tools."],
  [["prompt","prompts"],"The message or instruction you give Claude."],
  [["API"],"The door through which two programs talk to each other."],
  [["terminal","Terminal"],"The window where you give the computer instructions by typing text."],
  [["plugin"],"A package that adds features to a program, such as new recipes for Claude Code."],
  [["Skill","Skills"],"Saved instructions that Claude uses on its own when the task fits."],
  [["RLS"],"Database rules so each person only sees their own data."],
  [["HTML"],"The skeleton of a web page: text, headings, images and buttons."],
  [["CSS"],"A website's style: colours, sizes, fonts and positions."],
  [["JavaScript"],"The code that makes a website react: buttons, forms and animations."],
  [["commit"],"Saving a change to your repository's history, with a note about what you changed."],
  [["Claude Code"],"The version of Claude that works in your computer's terminal: it creates files and runs commands for you."]
 ],
 ar:[
  [["مستودع","المستودع"],"مجلد مشروعك محفوظ في GitHub مع سجل كل تغيير."],
  [["GitHub"],"خدمة مجانية لحفظ الشيفرة في السحابة ورؤية كل تغيير تجريه."],
  [["Cloudflare"],"شركة تنشر موقعك على الإنترنت بسرعة ومع قفل أمان (HTTPS). الخطة الأساسية مجانية."],
  [["Supabase"],"قاعدة بيانات ونظام حسابات مستخدمين جاهزان للاستخدام، مع خطة مجانية."],
  [["قاعدة بيانات","قاعدة البيانات"],"المكان الذي يحفظ فيه تطبيقك البيانات بترتيب، كجدول بيانات قوي جداً."],
  [["نطاق","النطاق"],"عنوان موقعك، مثل amri.es. يُستأجر بالسنة."],
  [["DNS"],"دليل هاتف الإنترنت: يترجم نطاقك إلى عنوان الخادم."],
  [["HTTPS"],"الاتصال الآمن: القفل الذي تراه بجانب العنوان."],
  [["موصل","الموصل","موصلات"],"إذن لـ Claude لاستخدام تطبيق آخر نيابة عنك (Gmail وCanva…). يمكنك إزالته متى شئت."],
  [["MCP"],"المعيار الذي تستخدمه الموصلات ليتحدث Claude مع أدوات أخرى."],
  [["API"],"الباب الذي يتحدث منه برنامجان معاً."],
  [["الطرفية"],"النافذة التي تعطي فيها أوامر للحاسوب بكتابة نص."],
  [["إضافة","الإضافة"],"حزمة تضيف ميزات إلى برنامج، مثل وصفات جديدة لـ Claude Code."],
  [["Skill","Skills"],"تعليمات محفوظة يستخدمها Claude وحده عندما تناسب المهمة."],
  [["RLS"],"قواعد في قاعدة البيانات ليرى كل شخص بياناته فقط."],
  [["HTML"],"هيكل صفحة الويب: النصوص والعناوين والصور والأزرار."],
  [["CSS"],"مظهر الموقع: الألوان والأحجام والخطوط والمواضع."],
  [["JavaScript"],"الشيفرة التي تجعل الموقع يتفاعل: الأزرار والنماذج والحركة."],
  [["Claude Code"],"نسخة Claude التي تعمل في طرفية حاسوبك: تنشئ الملفات وتنفذ الأوامر نيابة عنك."]
 ]
};

/* ---------------- Qué pasa por debajo ---------------- */
var UNDER={
 es:[
  [["cuenta","cuentas"],"Cada servicio hace una cosa muy bien: GitHub guarda, Cloudflare publica, Claude piensa. Por eso usas varias cuentas: tu proyecto no depende de un único sitio y puedes cambiar una pieza sin tocar las demás."],
  [["github","repositorio"],"Git guarda cada versión de tus archivos. Si algo se rompe, puedes volver atrás. Además, Cloudflare vigila tu repositorio y publica solo cada cambio que subes."],
  [["cloudflare","publica","pages"],"Cloudflare copia tu web en servidores repartidos por todo el mundo, así carga rápido desde cualquier país y no necesitas un servidor propio."],
  [["supabase","base de datos","tabla"],"Tu web es la fachada; los datos viven en Supabase. Las reglas RLS hacen que, aunque todos usen la misma tabla, cada persona vea solo lo suyo."],
  [["conector","mcp","conecta"],"Un conector le da a Claude un pase limitado para actuar en otra app en tu nombre. Claude no ve tu contraseña y puedes retirar el permiso cuando quieras."],
  [["copia este","pega","mensaje","prompt"],"Las órdenes de la receta le dan a Claude el contexto que necesita: qué quieres, para quién y en qué formato. Cuanto más concreto el mensaje, mejor el resultado."],
  [["dominio","dns"],"Tu dominio es tu dirección; los DNS dicen a qué servidor lleva. Al apuntarlos a Cloudflare, todas las visitas pasan por allí."],
  [["skill"],"Claude no recuerda tus conversaciones anteriores, pero sí lee tus Skills cuando la tarea encaja. Son su memoria a largo plazo para tu forma de trabajar."],
  [["claude code","terminal","plugin"],"Claude Code trabaja directamente en tu ordenador: crea archivos y ejecuta órdenes. Por eso te pide permiso antes de cada acción importante."],
  [["imagen","logo","ilustracion"],"Los generadores de imágenes no dibujan trazo a trazo: crean la imagen a partir de ruido siguiendo tu descripción. Por eso el estilo, la luz y los colores del prompt cambian tanto el resultado."],
  [["video","clip"],"Generar vídeo consume mucha potencia, por eso estas herramientas usan créditos. Prueba la idea en una imagen fija antes de gastar en vídeo."],
  [["automatiz","zapier"],"Una automatización es una receta que se repite sola: algo la dispara (una hora, un correo nuevo) y después sigue unos pasos fijos."]
 ],
 en:[
  [["account","accounts","sign up"],"Each service does one thing very well: GitHub stores, Cloudflare publishes, Claude thinks. That's why you use several accounts: your project doesn't depend on a single place and you can swap one piece without touching the others."],
  [["github","repository"],"Git saves every version of your files. If something breaks, you can go back. And Cloudflare watches your repository and publishes every change you push automatically."],
  [["cloudflare","publish","pages"],"Cloudflare copies your website to servers all over the world, so it loads fast from any country and you don't need your own server."],
  [["supabase","database","table"],"Your website is the shop front; the data lives in Supabase. RLS rules mean that even though everyone uses the same table, each person only sees their own data."],
  [["connector","mcp","connect"],"A connector gives Claude a limited pass to act in another app on your behalf. Claude never sees your password and you can withdraw the permission any time."],
  [["copy this","paste","message","prompt"],"The recipe's prompts give Claude the context it needs: what you want, who it's for and in what format. The more specific the message, the better the result."],
  [["domain","dns"],"Your domain is your address; DNS says which server it leads to. When you point it to Cloudflare, every visit goes through there."],
  [["skill"],"Claude doesn't remember your previous conversations, but it does read your Skills when the task fits. They're its long-term memory for the way you work."],
  [["claude code","terminal","plugin"],"Claude Code works directly on your computer: it creates files and runs commands. That's why it asks for permission before each important action."],
  [["image","logo","illustration"],"Image generators don't draw stroke by stroke: they create the image out of noise following your description. That's why style, light and colours in the prompt change the result so much."],
  [["video","clip"],"Generating video takes a lot of computing power, so these tools use credits. Test the idea as a still image before spending on video."],
  [["automat","zapier"],"An automation is a recipe that repeats itself: something triggers it (a time, a new email) and then it follows fixed steps."]
 ],
 ar:[
  [["حساب","حسابات"],"كل خدمة تتقن شيئاً واحداً: GitHub يحفظ، وCloudflare ينشر، وClaude يفكر. لذلك تستخدم عدة حسابات: لا يعتمد مشروعك على مكان واحد، ويمكنك تغيير قطعة دون المساس بالباقي."],
  [["github","مستودع"],"يحفظ Git كل نسخة من ملفاتك. إن تعطل شيء يمكنك الرجوع. كما يراقب Cloudflare مستودعك وينشر تلقائياً كل تغيير ترفعه."],
  [["cloudflare","انشر","ينشر"],"ينسخ Cloudflare موقعك إلى خوادم حول العالم، فيُحمَّل بسرعة من أي بلد ولا تحتاج إلى خادم خاص."],
  [["supabase","قاعدة","جدول"],"موقعك هو الواجهة؛ والبيانات تعيش في Supabase. قواعد RLS تجعل كل شخص يرى بياناته فقط رغم أن الجميع يستخدم الجدول نفسه."],
  [["موصل","mcp","اربط"],"يمنح الموصل Claude تصريحاً محدوداً للعمل في تطبيق آخر نيابة عنك. لا يرى Claude كلمة مرورك ويمكنك سحب الإذن متى شئت."],
  [["انسخ","الصق","رسالة"],"أوامر الوصفة تعطي Claude السياق الذي يحتاجه: ماذا تريد، ولمن، وبأي صيغة. كلما كانت الرسالة أدق كانت النتيجة أفضل."],
  [["نطاق","dns"],"نطاقك هو عنوانك؛ وDNS يحدد إلى أي خادم يوصل. عندما توجّهه إلى Cloudflare تمر كل الزيارات من هناك."],
  [["skill","مهارة"],"لا يتذكر Claude محادثاتك السابقة، لكنه يقرأ مهاراتك عندما تناسب المهمة. إنها ذاكرته الطويلة لطريقة عملك."],
  [["claude code","الطرفية","إضافة"],"يعمل Claude Code مباشرة على حاسوبك: ينشئ الملفات وينفذ الأوامر. لذلك يطلب الإذن قبل كل خطوة مهمة."],
  [["صورة","شعار"],"مولّدات الصور لا ترسم خطاً بخط: تنشئ الصورة من ضجيج وفق وصفك. لذلك يغيّر الأسلوب والإضاءة والألوان في الأمر النتيجة كثيراً."],
  [["فيديو"],"توليد الفيديو يستهلك قدرة كبيرة، لذلك تستخدم هذه الأدوات أرصدة. جرّب الفكرة كصورة ثابتة قبل الإنفاق على الفيديو."],
  [["أتمتة","zapier"],"الأتمتة وصفة تتكرر وحدها: شيء يطلقها (وقت، بريد جديد) ثم تتبع خطوات ثابتة."]
 ]
};
var UNDER_DEF={es:"Este paso deja preparado lo que necesita el siguiente. Si lo saltas, lo normal es que más adelante algo no funcione.",
 en:"This step prepares what the next one needs. If you skip it, something usually won't work later on.",
 ar:"هذه الخطوة تجهّز ما تحتاجه الخطوة التالية. إن تخطيتها، فغالباً لن يعمل شيء لاحقاً."};

/* ---------------- Si algo falla ---------------- */
var FIX={
 es:[
  [["github","repositorio"],"¿Faltan archivos en GitHub? En Mac, las carpetas que empiezan por punto están ocultas: pulsa ⌘ + Mayús + . en Finder para verlas y súbelas también."],
  [["cloudflare","pages"],"¿La web sale en blanco o con error 404? En Cloudflare, revisa que la carpeta de salida (Build output directory) sea donde está index.html."],
  [["dominio","dns"],"¿«No se puede acceder al sitio» después de cambiar los DNS? Espera unas horas o vacía la caché DNS de tu ordenador; prueba desde el móvil con datos."],
  [["supabase","base de datos"],"¿No se guardan los datos? Comprueba que copiaste completas la Project URL y la clave «anon», y que las reglas RLS permiten insertar."],
  [["conector"],"¿No ves el conector? Búscalo en Ajustes → Conectores; algunos dependen de tu plan. Cada paso tiene una alternativa manual."],
  [["copia este","pega","prompt","claude"],"¿Claude no hace lo que quieres? Pide un solo cambio cada vez y explica qué esperabas ver y qué ves."],
  [["plugin","marketplace"],"¿«Marketplace file not found»? El repositorio no tiene la carpeta .claude-plugin: comprueba que se subió."],
  [["imagen","logo"],"¿Las imágenes no se parecen a lo que pides? Describe estilo, encuadre y luz, y pide cuatro variantes para elegir."],
  [["terminal","claude code"],"¿«command not found»? La herramienta no está instalada, o tienes que cerrar y volver a abrir la Terminal después de instalarla."]
 ],
 en:[
  [["github","repository"],"Files missing on GitHub? On a Mac, folders starting with a dot are hidden: press ⌘ + Shift + . in Finder to see them and upload them too."],
  [["cloudflare","pages"],"Blank page or 404 error? In Cloudflare, check that the Build output directory is the folder where index.html is."],
  [["domain","dns"],"“This site can't be reached” after changing DNS? Wait a few hours or flush your computer's DNS cache; try from your phone on mobile data."],
  [["supabase","database"],"Data not saving? Check that you copied the full Project URL and “anon” key, and that the RLS rules allow inserts."],
  [["connector"],"Can't see the connector? Look in Settings → Connectors; some depend on your plan. Every step has a manual alternative."],
  [["copy this","paste","prompt","claude"],"Claude not doing what you want? Ask for one change at a time and explain what you expected to see and what you see."],
  [["plugin","marketplace"],"“Marketplace file not found”? The repository has no .claude-plugin folder: check it was uploaded."],
  [["image","logo"],"Images don't look like what you asked for? Describe style, framing and light, and ask for four variations to choose from."],
  [["terminal","claude code"],"“command not found”? The tool isn't installed, or you need to close and reopen Terminal after installing it."]
 ],
 ar:[
  [["github","مستودع"],"ملفات ناقصة في GitHub؟ على Mac المجلدات التي تبدأ بنقطة مخفية: اضغط ⌘ + Shift + . في Finder لرؤيتها وارفعها أيضاً."],
  [["cloudflare"],"صفحة فارغة أو خطأ 404؟ في Cloudflare تحقق أن مجلد الإخراج (Build output directory) هو المجلد الذي فيه index.html."],
  [["نطاق","dns"],"«لا يمكن الوصول إلى الموقع» بعد تغيير DNS؟ انتظر بضع ساعات أو امسح ذاكرة DNS في حاسوبك؛ جرّب من الهاتف ببيانات الجوال."],
  [["supabase","قاعدة"],"البيانات لا تُحفظ؟ تحقق أنك نسخت Project URL ومفتاح «anon» كاملين، وأن قواعد RLS تسمح بالإضافة."],
  [["موصل"],"لا ترى الموصل؟ ابحث عنه في الإعدادات ← الموصلات؛ بعضها يعتمد على خطتك. لكل خطوة بديل يدوي."],
  [["انسخ","الصق","claude"],"Claude لا يفعل ما تريد؟ اطلب تغييراً واحداً في كل مرة واشرح ما كنت تتوقعه وما تراه."],
  [["إضافة","marketplace"],"«Marketplace file not found»؟ المستودع ليس فيه مجلد ‎.claude-plugin: تحقق من رفعه."],
  [["صورة","شعار"],"الصور لا تشبه ما تطلبه؟ صِف الأسلوب والإطار والإضاءة، واطلب أربعة بدائل لتختار."],
  [["الطرفية","claude code"],"«command not found»؟ الأداة غير مثبّتة، أو عليك إغلاق الطرفية وفتحها من جديد بعد التثبيت."]
 ]
};

function pick(lib,text,max,title){
  var q=norm(text),h=norm(title||""),first=[],rest=[];
  (lib[L()]||lib.es).forEach(function(e){var hit=function(s){return e[0].some(function(k){return s.indexOf(norm(k))>-1})};
    if(h&&hit(h))first.push(e[1]);else if(hit(q))rest.push(e[1]);});
  return first.concat(rest).slice(0,max);
}

/* ---------------- Revisada el… ---------------- */
function revised(){
  var old=document.querySelector(".g-rev");if(old)old.remove();
  var d=D.revised&&D.revised[slug],meta=document.getElementById("rmeta");if(!d||!meta)return;
  var el=document.createElement("p");el.className="g-rev";
  var f;try{f=new Date(d+"T12:00:00").toLocaleDateString(L()==="ar"?"ar":L(),{year:"numeric",month:"long",day:"numeric"})}catch(e){f=d}
  el.innerHTML='<span>✓</span> '+esc(T("g_rev"))+' <time datetime="'+d+'">'+esc(f)+'</time>';
  meta.parentNode.insertBefore(el,meta.nextSibling);
}

/* ---------------- Mapa «Cómo encaja todo» ---------------- */
var NAMES={claude:"Claude",github:"GitHub",cloudflare:"Cloudflare",supabase:"Supabase",canva:"Canva",figma:"Figma",notion:"Notion",gmail:"Gmail","google-calendar":"Calendar",
 "google-sheets":"Sheets",chrome:"Chrome",slack:"Slack",gurusup:"GuruSup",higgsfield:"Higgsfield","after-effects":"After Effects",blender:"Blender",zapier:"Zapier",chatbase:"Chatbase",
 nodejs:"Node.js",ideogram:"Ideogram",bing:"Bing",removebg:"remove.bg"};
function map(){
  var old=document.querySelector(".g-map");if(old)old.remove();
  var ing=document.querySelector("main .ing");if(!ing||!LG)return;
  var tools=(LG.tools[slug]||["claude"]).slice();
  if(tools.indexOf("claude")>0){tools.splice(tools.indexOf("claude"),1);tools.unshift("claude");}
  var res=((window.RECIPE&&(RECIPE[L()]||RECIPE.es)||{}).meta||[]).slice(-1)[0]||"";
  res=res.replace(/^\S+\s*/,"").replace(/^[^:：]*[:：]\s*/,"");
  var nodes=['<div class="gm-n idea"><span class="gm-e">💡</span><b>'+esc(T("g_idea"))+'</b></div>']
    .concat(tools.map(function(t){return '<div class="gm-n" data-t="'+t+'"><span class="gm-l"><span class="gm-e">🔧</span></span><b>'+esc(NAMES[t]||t)+'</b></div>'}))
    .concat(['<div class="gm-n res"><span class="gm-e">🍽</span><b>'+esc(T("g_res"))+'</b><small>'+esc(res)+'</small></div>']);
  var box=document.createElement("section");box.className="g-map";
  box.innerHTML='<h2>'+esc(T("g_map"))+'</h2><div class="gm-flow">'+nodes.join('<span class="gm-a" aria-hidden="true"></span>')+'</div><p class="g-hint">'+esc(T("g_hint"))+'</p>';
  ing.parentNode.insertBefore(box,ing.nextSibling);
  box.querySelectorAll(".gm-n[data-t]").forEach(function(n){var t=n.dataset.t;
    LG.probe(t).then(function(info){if(!info||info==="none")return;n.querySelector(".gm-l").innerHTML='<img alt="" src="../img/logos/'+t+'.'+info.ext+'">';n.classList.toggle("wide",!!info.wide)});});
}

/* ---------------- Glosario en el texto ---------------- */
var RX=null,DEF={};
function buildRx(){
  DEF={};var terms=[];
  (GLOSS[L()]||GLOSS.es).forEach(function(e){e[0].forEach(function(v){DEF[v.toLowerCase()]=e[1];terms.push(v)})});
  terms.sort(function(a,b){return b.length-a.length});
  var alt=terms.map(function(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|");
  RX=new RegExp("(^|[^\\p{L}\\p{N}_])("+alt+")(?=$|[^\\p{L}\\p{N}_])","u");
}
function gloss(root){
  if(!RX)buildRx();
  var used={};
  var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
    var p=n.parentElement;if(!p||p.closest("pre,code,a,button,.gl,.gx,.cb,summary,h1,h2,h3,strong.tt"))return NodeFilter.FILTER_REJECT;
    return n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
  var list=[];while(walker.nextNode())list.push(walker.currentNode);
  list.forEach(function(node){
    var txt=node.nodeValue,m=RX.exec(txt);if(!m)return;
    var term=m[2],key=term.toLowerCase();var def=DEF[key];if(!def||used[def])return;used[def]=1;
    var start=m.index+m[1].length,frag=document.createDocumentFragment();
    frag.appendChild(document.createTextNode(txt.slice(0,start)));
    var sp=document.createElement("span");sp.className="gl";sp.tabIndex=0;sp.textContent=term;sp.setAttribute("data-def",def);sp.setAttribute("aria-label",term+": "+def);
    frag.appendChild(sp);frag.appendChild(document.createTextNode(txt.slice(start+term.length)));
    node.parentNode.replaceChild(frag,node);
  });
}

/* ---------------- ¿Por qué? / ¿Algo falla? en cada paso ---------------- */
function recipeTitle(){var i=D.order.indexOf(slug);return i>-1?I18N.card(i).titulo:document.title}
function decorate(){
  document.querySelectorAll(".step.open .bd").forEach(function(bd){
    if(bd.dataset.gx)return;bd.dataset.gx="1";
    var step=bd.closest(".step"),title=(step.querySelector(".tt strong")||{}).textContent||"",text=title+" "+bd.textContent;
    gloss(bd);
    var why=pick(UNDER,text,2,title);if(!why.length)why=[UNDER_DEF[L()]||UNDER_DEF.es];
    var fix=pick(FIX,text,2,title);
    var ask=T("g_ask_p").replace("{r}",recipeTitle()).replace("{s}",title);
    var gx=document.createElement("div");gx.className="gx";
    gx.innerHTML='<div class="gx-b"><button type="button" class="gx-t" aria-expanded="false" data-p="why">🔍 '+esc(T("g_why"))+'</button><button type="button" class="gx-t" aria-expanded="false" data-p="fix">🛟 '+esc(T("g_fail"))+'</button></div>'+
      '<div class="gx-p" data-p="why" hidden><h4>'+esc(T("g_under"))+'</h4>'+why.map(function(w){return "<p>"+esc(w)+"</p>"}).join("")+'</div>'+
      '<div class="gx-p" data-p="fix" hidden>'+(fix.length?'<h4>'+esc(T("g_fix"))+'</h4><ul>'+fix.map(function(f){return "<li>"+esc(f)+"</li>"}).join("")+'</ul>':'')+
      '<p>'+esc(T("g_ask"))+'</p><div class="cb"><pre>'+esc(ask)+'</pre><button data-copy>'+esc(T("pl_copy"))+'</button></div></div>';
    var btn=bd.querySelector(":scope > .btn");bd.insertBefore(gx,btn||null);
    gx.querySelectorAll(".gx-t").forEach(function(b){b.onclick=function(){
      var p=gx.querySelector('.gx-p[data-p="'+b.dataset.p+'"]'),open=p.hidden;
      gx.querySelectorAll(".gx-p").forEach(function(x){x.hidden=true});gx.querySelectorAll(".gx-t").forEach(function(x){x.setAttribute("aria-expanded","false")});
      p.hidden=!open;b.setAttribute("aria-expanded",open?"true":"false");}});
  });
  var ing=document.getElementById("ing"),f=ing&&ing.firstElementChild;if(f&&!f.dataset.gl){f.dataset.gl="1";gloss(ing);}
}

function all(){RX=null;revised();map();decorate();}
var mo=new MutationObserver(function(){decorate()});
["steps","extras","ing"].forEach(function(id){var el=document.getElementById(id);if(el)mo.observe(el,{childList:true})});
all();
document.addEventListener("langchange",function(){setTimeout(all,0)});
})();
