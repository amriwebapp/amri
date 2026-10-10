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
  [["Claude Code"],"La versión de Claude que trabaja con los archivos de tu ordenador, desde la app de escritorio o la terminal: crea archivos y ejecuta órdenes por ti."],
  [["agente","agentes"],"Claude trabajando por su cuenta en una tarea de varios pasos: hace un plan, lo ejecuta, comprueba el resultado y te pide permiso antes de lo importante."],
  [["subagente","subagentes"],"Un ayudante al que Claude encarga una parte de una tarea grande, por ejemplo investigar o revisar."],
  [["Cowork"],"El modo de la app de escritorio de Claude en el que trabaja con tus documentos y carpetas, sin terminal."],
  [["clave publicable"],"La llave de Supabase que puede ir en tu web sin peligro: solo deja hacer lo que permiten tus reglas."]
 ],
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
};
var UNDER_DEF={es:"Este paso deja preparado lo que necesita el siguiente. Si lo saltas, lo normal es que más adelante algo no funcione."};

/* ---------------- Si algo falla ---------------- */
var FIX={
 es:[
  [["github","repositorio"],"¿Faltan archivos en GitHub? En Mac, las carpetas que empiezan por punto están ocultas: pulsa ⌘ + Mayús + . en Finder para verlas y súbelas también."],
  [["cloudflare","pages"],"¿La web sale en blanco o con error 404? En Cloudflare, revisa que la carpeta de salida (Build output directory) sea donde está index.html."],
  [["dominio","dns"],"¿«No se puede acceder al sitio» después de cambiar los DNS? Espera unas horas o vacía la caché DNS de tu ordenador; prueba desde el móvil con datos."],
  [["supabase","base de datos"],"¿No se guardan los datos? Comprueba que copiaste completas la Project URL y la clave publicable (o «anon» en proyectos antiguos), y que las reglas RLS permiten insertar."],
  [["conector"],"¿No ves el conector? Búscalo en Personalizar → Conectores (Customize → Connectors); algunos dependen de tu plan. Cada paso tiene una alternativa manual."],
  [["copia este","pega","prompt","claude"],"¿Claude no hace lo que quieres? Pide un solo cambio cada vez y explica qué esperabas ver y qué ves."],
  [["plugin","marketplace"],"¿«Marketplace file not found»? El repositorio no tiene la carpeta .claude-plugin: comprueba que se subió."],
  [["imagen","logo"],"¿Las imágenes no se parecen a lo que pides? Describe estilo, encuadre y luz, y pide cuatro variantes para elegir."],
  [["terminal","claude code"],"¿«command not found»? La herramienta no está instalada, o tienes que cerrar y volver a abrir la Terminal después de instalarla."]
 ],
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

function all(){RX=null;revised();decorate();}
var mo=new MutationObserver(function(){decorate()});
["steps","extras","ing"].forEach(function(id){var el=document.getElementById(id);if(el)mo.observe(el,{childList:true})});
all();
document.addEventListener("langchange",function(){setTimeout(all,0)});
})();
