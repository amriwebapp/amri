/* AMRI · «¿Qué quieres construir?» y proyectos completos (portada)
   Entiende la idea escrita (es / en / ar), la convierte en necesidades editables
   y prepara un menú de recetas por fases, con tiempo, coste y herramientas. */
(function(){
"use strict";
var D=window.AMRI_DATA;if(!D||!window.I18N)return;
var $=function(id){return document.getElementById(id)};
var T=function(k){return I18N.t(k)};
var L=function(){return I18N.lang()};
var tr=function(o){return o[L()]||o.es};
var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};
var norm=function(s){return " "+String(s).toLowerCase().normalize("NFD").replace(/[̀-ًͯ-ْ]/g,"")
  .replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي").replace(/[^\p{L}\p{N}]+/gu," ").trim()+" "};
var img=function(s){return D.img(s,"")};

/* ---------- Recetas: minutos, coste (0 gratis · 1 prueba gratis · 2 de pago) y herramienta extra ---------- */
var META={
 "empieza-aqui":{m:15,p:0,f:1},"asistente-ia":{m:20,p:0,f:1},"primer-agente":{m:40,p:2,f:1,t:"desk"},"skills-propias":{m:30,p:0,f:1},
 "logo-ia":{m:40,p:0,f:2},"imagenes-ia":{m:30,p:0,f:2},"canva-diseno":{m:25,p:0,f:2},
 "webapp-gratis":{m:60,p:0,f:3},"figma-a-web":{m:60,p:0,f:3},"chatbot-web":{m:40,p:0,f:3},"jev-guardian":{m:45,p:2,f:3,t:"cc"},"conector-propio":{m:60,p:0,f:3,t:"desk"},
 "redes-sociales":{m:45,p:0,f:4},"higgsfield-cine":{m:30,p:1,f:4},"video-aftereffects":{m:45,p:2,f:4,t:"desk"},"animaciones-opus":{m:40,p:2,f:4},"blender-3d":{m:45,p:0,f:4,t:"desk"},
 "gmail-calendario":{m:25,p:0,f:5},"notion-cerebro":{m:30,p:0,f:5},"slack-equipo":{m:25,p:0,f:5},"gurusup-brain":{m:30,p:2,f:5},"automatiza-tareas":{m:45,p:0,f:5},"jev-decisiones":{m:50,p:2,f:5,t:"cc"},"navegador-chrome":{m:20,p:2,f:5}
};
var ORDER=["empieza-aqui","asistente-ia","primer-agente","skills-propias","logo-ia","imagenes-ia","canva-diseno","webapp-gratis","figma-a-web","chatbot-web","conector-propio",
 "redes-sociales","higgsfield-cine","video-aftereffects","animaciones-opus","blender-3d","gmail-calendario","notion-cerebro","gurusup-brain","automatiza-tareas","jev-decisiones","navegador-chrome"];

/* ---------- Necesidades: lo que la persona quiere conseguir ----------
   g grupo · r recetas · a necesidades relacionadas · k palabras clave (es/en/ar; una palabra = raíz, varias = frase) */
var NEEDS=[
 {id:"web",g:1,ic:"🌐",l:{es:"Una web o una app"},r:["webapp-gratis"],a:["reservas","chatbot","logo","redes"],
  k:["web","webs","app","apps","aplicacion","application","pagina","website","webpage","site","sitio","landing","dominio","موقع","صفحه"]},
 {id:"reservas",g:1,ic:"📅",l:{es:"Reservas o citas online"},r:["webapp-gratis","gmail-calendario"],a:["web","chatbot","correo"],
  k:["reserva","cita","turno","booking","book","appointment","حجز","موعد","مواعيد"]},
 {id:"tienda",g:1,ic:"🛒",l:{es:"Vender online"},r:["webapp-gratis","imagenes-ia"],a:["redes","chatbot","logo","video"],
  k:["tienda","vender","venta","vendo","ecommerce","e commerce","catalogo","producto","pedido","shop","shopify","store","sell","selling","product","orders","متجر","بيع","منتج","منتجات","طلبات"]},
 {id:"portfolio",g:1,ic:"🧑‍💼",l:{es:"Portfolio o web personal"},r:["webapp-gratis","logo-ia"],a:["redes","imagenes"],
  k:["portfolio","porfolio","curriculum","cv","web personal","marca personal","personal site","personal brand","resume","معرض اعمال","سيره ذاتيه","علامه شخصيه"]},
 {id:"figma",g:1,ic:"📐",l:{es:"Pasar un diseño de Figma a web"},r:["figma-a-web"],a:["web","logo"],
  k:["figma","mockup","maqueta","prototipo","prototype","wireframe","نموذج اولي"]},
 {id:"chatbot",g:1,ic:"🤖",l:{es:"Un chatbot que atienda clientes"},r:["chatbot-web"],a:["guardian","conocimiento","web"],
  k:["chatbot","chat bot","bot","atencion al cliente","atender clientes","responda","responder clientes","preguntas frecuentes","faq","customer service","customer support","answer customers","روبوت","محادثه","خدمه العملاء","اسئله شائعه"]},
 {id:"guardian",g:1,ic:"🛡️",l:{es:"Que tu chatbot sea seguro"},r:["jev-decisiones"],a:["chatbot","clasificar"],
  k:["seguro","seguridad","guardian","proteger","no se invente","no invente","invente","alucina","fiable","safe","safety","guardrail","protect","hallucinat","made up","make things up","reliable","امان","حمايه","حارس","يختلق"]},
 {id:"logo",g:2,ic:"✨",l:{es:"Logo e identidad de marca"},r:["logo-ia"],a:["diseno","web","redes"],
  k:["logo","logotipo","marca","branding","identidad","brand","identity","شعار","هويه","علامه تجاريه"]},
 {id:"diseno",g:2,ic:"🖌️",l:{es:"Carteles, presentaciones y plantillas"},r:["canva-diseno"],a:["logo","imagenes","redes"],
  k:["cartel","poster","flyer","folleto","presentacion","diapositiva","plantilla","tarjeta","canva","invitacion","presentation","slides","template","business card","brochure","invitation","ملصق","عرض تقديمي","قالب","بطاقه","تصميم"]},
 {id:"imagenes",g:2,ic:"🎨",l:{es:"Imágenes e ilustraciones"},r:["imagenes-ia"],a:["diseno","redes","animacion"],
  k:["imagen","foto","ilustracion","dibujo","icono","personaje","image","photo","picture","illustration","drawing","icon","character","صوره","صور","رسم","ايقونه"]},
 {id:"redes",g:2,ic:"📣",l:{es:"Contenido para redes sociales"},r:["redes-sociales"],a:["imagenes","animacion","video","diseno"],
  k:["redes","red social","instagram","tiktok","linkedin","twitter","threads","reel","post","publicacion","contenido","seguidor","darme a conocer","darnos a conocer","dar a conocer","clientes nuevos","conseguir clientes","social","followers","content","get known","grow my audience","new customers","انستغرام","تيك توك","لينكدان","محتوي","منشور","متابعين","شبكات"]},
 {id:"video",g:2,ic:"🎥",l:{es:"Vídeos o anuncios de cine"},r:["higgsfield-cine"],a:["edicion","animacion","redes"],
  k:["video","anuncio","spot","comercial","cine","clip","youtube","canal","cinematic","advert","commercial","channel","فيديو","اعلان","سينمائي","قناه"]},
 {id:"edicion",g:2,ic:"🎬",l:{es:"Editar vídeo y títulos"},r:["video-aftereffects"],a:["video","animacion"],
  k:["editar video","edicion","montaje","titulo","subtitulo","intro","after effects","edit video","edit my video","editing","titles","subtitles","مونتاج","تحرير","عناوين"]},
 {id:"animacion",g:2,ic:"🎞️",l:{es:"Animaciones"},r:["animaciones-opus"],a:["edicion","redes","logo"],
  k:["animacion","animar","animado","motion","gif","animation","animate","animated","تحريك","متحرك","متحركه"]},
 {id:"3d",g:2,ic:"🧊",l:{es:"Modelos y escenas 3D"},r:["blender-3d"],a:["animacion","video"],
  k:["3d","blender","modelo 3d","render","maqueta 3d","3d model","ثلاثي","مجسم"]},
 {id:"correo",g:3,ic:"📬",l:{es:"Ordenar correo y agenda"},r:["gmail-calendario"],a:["clasificar","notas","automatizar"],
  k:["correo","email","mail","gmail","bandeja","agenda","calendario","reunion","inbox","calendar","meeting","بريد","تقويم","اجتماع"]},
 {id:"notas",g:3,ic:"🗂️",l:{es:"Notas y documentación ordenadas"},r:["notion-cerebro"],a:["conocimiento"],
  k:["notion","nota","apunte","documentacion","wiki","organizar","segundo cerebro","notes","docs","organise","organize","second brain","ملاحظات","توثيق","تنظيم"]},
 {id:"conocimiento",g:3,ic:"🧠",l:{es:"Respuestas con el saber de tu empresa"},r:["gurusup-brain"],a:["chatbot","notas"],
  k:["base de conocimiento","conocimiento","manuales","soporte","procedimiento","knowledge","support","manuals","procedure","معرفه","دعم","دليل"]},
 {id:"automatizar",g:3,ic:"⚡",l:{es:"Automatizar tareas repetitivas"},r:["automatiza-tareas"],a:["clasificar","correo"],
  k:["automatiz","automatic","repetitiv","excel","hoja de calculo","factura","informe","copiar y pegar","ahorrar tiempo","automate","spreadsheet","invoice","report","save time","اتمته","تلقائي","متكرر","جدول","فواتير","تقارير"]},
 {id:"clasificar",g:3,ic:"⚖️",l:{es:"Clasificar y priorizar mensajes"},r:["jev-decisiones"],a:["correo","automatizar","guardian"],
  k:["clasificar","priorizar","prioridad","decidir","filtrar","spam","urgente","incidencia","lead","puntuar","resena","moderar","classify","prioriti","triage","urgent","ticket","score","review","moderat","تصنيف","اولويه","عاجل","مراجعات"]},
 {id:"navegador",g:3,ic:"🧭",l:{es:"Investigar y rellenar webs por ti"},r:["navegador-chrome"],a:["automatizar","escribir"],
  k:["investigar","buscar en internet","comparar precio","rellenar formulario","navegador","chrome","research","browse","compare prices","fill in forms","fill forms","بحث","متصفح","مقارنه اسعار"]},
 {id:"empezar",g:4,ic:"🌱",l:{es:"Empezar desde cero con la IA"},r:["empieza-aqui","asistente-ia"],a:["escribir","agente"],
  k:["empezar con la ia","empezar con claude","aprender","principiante","novato","nunca he usado","no se nada","desde cero","beginner","learn","new to ai","never used","مبتدئ","اتعلم","من الصفر"]},
 {id:"escribir",g:4,ic:"✍️",l:{es:"Escribir, resumir y tener ideas"},r:["asistente-ia"],a:["metodo","redes"],
  k:["escribir","redactar","resumir","texto","carta","guion","lluvia de ideas","traducir","brainstorm","write","summari","draft","script","translate","كتابه","تلخيص","افكار","ترجمه"]},
 {id:"metodo",g:4,ic:"📖",l:{es:"Que Claude trabaje a tu manera"},r:["skills-propias"],a:["escribir","conector"],
  k:["skill","metodo","mi forma","a mi manera","proceso","siempre igual","mi estilo","my way","process","method","my style","طريقتي","مهاره","اسلوبي"]},
 {id:"agente",g:4,ic:"🤖",l:{es:"Que Claude haga tareas largas por ti"},r:["primer-agente"],a:["metodo","automatizar"],
  k:["agente","agentes","claude code","cowork","terminal","que trabaje solo","haga por mi","tareas largas","ordenar archivos","agent","agents","do it for me","long tasks","organise files","organize files","وكيل","وكلاء","ينجز عني"]},
 {id:"conector",g:4,ic:"🔌",l:{es:"Conectar tus propias apps o datos"},r:["conector-propio"],a:["metodo","automatizar"],
  k:["conector","mcp","api","mis datos","base de datos","integrar","integracion","mi app","mi programa","connector","integrate","database","my data","my app","موصل","ربط","قاعده بيانات","بياناتي"]}
];
var NI={};NEEDS.forEach(function(n){NI[n.id]=n;n.kn=n.k.map(norm)});

/* ---------- Tipos de proyecto: completan la idea cuando se describe poco ---------- */
var SECTORS=[
 {id:"local",l:{es:"un negocio local"},def:["web","reservas","redes"],sug:["chatbot","logo","correo"],
  k:["peluqueria","barberia","restaurante","bar","cafeteria","panaderia","pasteleria","clinica","dentista","fisioterapeuta","fisio","gimnasio","yoga","pilates","taller","hotel","casa rural","spa","estetica","veterinari","psicolog","nutricionista","floristeria","salon","bakery","restaurant","cafe","clinic","dentist","gym","studio","barber","hair","physio","salon","مطعم","مخبز","صالون","عياده","مقهي","نادي رياضي"]},
 {id:"creador",l:{es:"un creador de contenido"},def:["redes","video","escribir"],sug:["edicion","animacion","imagenes"],
  k:["creador","creadora","youtuber","influencer","podcast","streamer","canal de","creator","content creator","channel","صانع محتوي","بودكاست","يوتيوبر","قناه"]},
 {id:"tienda",l:{es:"una tienda"},def:["tienda","redes"],sug:["chatbot","imagenes","logo"],
  k:["artesania","ceramica","ropa","joyeria","cosmetica","handmade","crafts","clothing","jewellery","jewelry","حرف يدويه","ملابس","مجوهرات"]},
 {id:"freelance",l:{es:"un profesional independiente"},def:["portfolio","logo","redes"],sug:["correo","escribir","diseno"],
  k:["freelance","autonomo","consultor","disenador","fotografo","abogado","coach","profesor","traductor","arquitecto","freelancer","consultant","designer","photographer","lawyer","teacher","translator","مستقل","مصمم","مصور","محامي","مدرس"]},
 {id:"empresa",l:{es:"una empresa o un equipo"},def:["correo","automatizar","notas"],sug:["conocimiento","clasificar"],
  k:["empresa","oficina","pyme","departamento","startup","negocio","company","office","business","small business","department","شركه","مكتب","مشروع"]}
];
var STOP=["quiero","pero","y","necesito","busco","para","and","but","want","need","so","i","اريد","لكن","و","احتاج"];
var HAVE=[/\bya tengo\b|\btengo ya\b|\bya cuento con\b/,/\balready (have|got)\b|\bi(?: ve| have) got\b/,/لدي بالفعل|عندي بالفعل|عندي الان/];

/* ---------- Entender el texto ---------- */
function toks(q){return q.trim().split(" ")}
var AR_PRE=/^(وال|بال|لل|ال|و|ب|ل)/;
function lev1(a,b){if(Math.abs(a.length-b.length)>1)return false;var i=0,j=0,e=0;while(i<a.length&&j<b.length){if(a[i]===b[j]){i++;j++;continue}if(++e>1)return false;if(a.length>b.length)i++;else if(b.length>a.length)j++;else{i++;j++}}return e+(a.length-i)+(b.length-j)<=1}
function hit(q,words,kn){
  var k=kn.trim();if(!k)return false;
  if(k.indexOf(" ")>-1)return q.indexOf(" "+k+" ")>-1||q.indexOf(" "+k)>-1&&k.length>7;
  for(var i=0;i<words.length;i++){var w=words[i],w2=w.replace(AR_PRE,"");
    if(w===k||w2===k)return true;
    var px=function(x){return x.indexOf(k)===0&&(k.length>=6||x.length-k.length<=k.length-2)};
    if(k.length>=4&&(px(w)||px(w2)))return true;
    if(k.length>=7&&w.length>=7&&lev1(w,k))return true;}
  return false;
}
function understand(text){
  var q=norm(text),words=toks(q),score={},have={},sector=null,best=0;
  NEEDS.forEach(function(n){n.kn.forEach(function(k){if(hit(q,words,k))score[n.id]=(score[n.id]||0)+1})});
  /* «ya tengo web» → no hace falta */
  HAVE.forEach(function(re){var m=q.match(re);if(!m)return;var aw0=q.slice(m.index+m[0].length).trim().split(" "),st=aw0.findIndex(function(w,i){return i>0&&STOP.indexOf(w)>-1});
    var after=aw0.slice(0,st>0?Math.min(st,4):4).join(" ");
    var aq=" "+after+" ",aw=toks(aq);NEEDS.forEach(function(n){if(n.kn.some(function(k){return hit(aq,aw,k)}))have[n.id]=1})});
  SECTORS.forEach(function(s){var c=s.k.filter(function(k){return hit(q,words,norm(k))}).length;if(c>best){best=c;sector=s}});
  if(sector&&sector.id==="tienda"&&score.web&&!score.tienda)score.tienda=1;
  var sel=Object.keys(score).filter(function(id){return !have[id]});
  /* «darme a conocer» no es vídeo; «canal» con redes sí */
  if(score.video&&!score.redes&&sector&&sector.id==="creador")sel.push("redes");
  if(sector&&sel.length<2)sector.def.forEach(function(id){if(sel.indexOf(id)<0&&!have[id])sel.push(id)});
  return {sel:uniq(sel),have:Object.keys(have),sector:sector?sector.id:null};
}
function uniq(a){return a.filter(function(x,i){return a.indexOf(x)===i})}

/* ---------- Estado ---------- */
var KEY="amri-build";
var S={text:"",sel:[],have:[],sector:null,lvl:1,bud:1};
try{var sv=JSON.parse(localStorage.getItem(KEY)||"null");if(sv&&sv.sel)S=Object.assign(S,sv)}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
(function fromHash(){var h=location.hash.match(/^#construir=(.+)$/);if(!h)return;
  try{var o=JSON.parse(decodeURIComponent(h[1]));S.text=o.q||"";S.sel=(o.n||[]).filter(function(id){return NI[id]});S.have=(o.h||[]).filter(function(id){return NI[id]});
    S.lvl=+o.l||0;S.bud=o.b==null?1:+o.b;S.sector=o.s||null;S.fromLink=1}catch(e){}})();

/* ---------- El menú ---------- */
function plan(){
  var rec={},add=function(s,why){(rec[s]=rec[s]||{why:[]}).why.push(why)};
  S.sel.forEach(function(id){NI[id].r.forEach(function(s){add(s,tr(NI[id].l))})});
  if(S.lvl===0&&!rec["asistente-ia"])add("asistente-ia",T("b_start"));
  var all=ORDER.filter(function(s){return rec[s]});
  var main=all,paid=[];
  if(S.bud===0){main=all.filter(function(s){return META[s].p<2});paid=all.filter(function(s){return META[s].p===2})}
  var proj=null,bestN=0;D.projects.forEach(function(p){var n=p.r.filter(function(s){return rec[s]}).length;if(n>bestN&&n>=2){bestN=n;proj=p}});
  var related=[];S.sel.forEach(function(id){NI[id].a.forEach(function(a){related.push(a)})});
  var sec=SECTORS.filter(function(x){return x.id===S.sector})[0];if(sec)related=sec.sug.concat(related);
  related=uniq(related).filter(function(id){return S.sel.indexOf(id)<0&&S.have.indexOf(id)<0}).slice(0,5);
  return {rec:rec,main:main,paid:paid,proj:proj,related:related};
}
function dur(m){var h=Math.floor(m/60),r=m%60;return (h?h+" "+T("b_h"):"")+(h&&r?" ":"")+(r?r+" "+T("b_min"):"")}
function chipsOf(s){var c=I18N.card(D.order.indexOf(s));return c?c.chips:["","",""]}

/* ---------- Pintar ---------- */
function needChip(n,on,cls){
  return '<button type="button" class="nd'+(cls?" "+cls:"")+'" data-n="'+n.id+'" aria-pressed="'+(on?"true":"false")+'"><span class="ic">'+n.ic+'</span>'+esc(tr(n.l))+(cls==="und"?'<span class="x" aria-hidden="true">×</span>':"")+'</button>';
}
function paintPicker(){
  var h="";[1,2,3,4].forEach(function(g){
    h+='<div class="bld-g"><h4>'+esc(T("b_g"+g))+'</h4><div class="bld-nds">'+NEEDS.filter(function(n){return n.g===g}).map(function(n){return needChip(n,S.sel.indexOf(n.id)>-1)}).join("")+'</div></div>';
  });
  $("bldPick").innerHTML=h;
}
function seg(name,opts,val){return '<div class="bld-seg" role="group" aria-label="'+esc(T("b_"+name))+'"><span>'+esc(T("b_"+name))+'</span>'+
  opts.map(function(o,i){return '<button type="button" data-'+name+'="'+i+'" aria-pressed="'+(val===i)+'">'+esc(o)+'</button>'}).join("")+'</div>'}
function paintCtx(){$("bldCtx").innerHTML=seg("lvl",T("b_lv"),S.lvl)+seg("bud",T("b_bd"),S.bud)}
function paintUnd(){
  var h='<h3>'+esc(T("b_und"))+'</h3>';
  if(!S.sel.length&&!S.have.length){h+='<p class="bld-hint">'+esc(T(S.text?"b_none":"b_und0"))+'</p>'}
  else{
    var sec=SECTORS.filter(function(x){return x.id===S.sector})[0];
    if(sec)h+='<p class="bld-sec">'+esc(T("b_sector"))+' <b>'+esc(tr(sec.l))+'</b></p>';
    h+='<div class="bld-nds">'+S.sel.map(function(id){return needChip(NI[id],true,"und")}).join("")+
      S.have.map(function(id){return '<button type="button" class="nd have" data-have="'+id+'" title="'+esc(T("b_have_t"))+'"><span class="ic">✓</span>'+esc(tr(NI[id].l))+' · '+esc(T("b_have"))+'</button>'}).join("")+'</div>';
  }
  $("bldUnd").innerHTML=h;
}
function stepLi(s,i,why){
  var c=chipsOf(s),m=META[s],b="";
  if(m.t==="cc")b+='<em class="bdg">Claude Code</em>';
  if(m.t==="desk")b+='<em class="bdg">'+esc(T("b_bdesk"))+'</em>';
  if(m.p)b+='<em class="bdg pay">'+esc(c[2])+'</em>';
  return '<li class="bld-step"><a href="recetas/'+s+'.html"><span class="n">'+(i+1)+'</span><span class="th"><img alt="" loading="lazy" src="'+img(s)+'"></span>'+
    '<span class="tx"><b>'+esc(D.title(s))+'</b><small class="why">'+esc(T("b_for"))+' '+esc(uniq(why).join(" · "))+'</small>'+
    '<span class="meta"><i>'+esc(c[1])+'</i>'+b+'</span></span><span class="go">→</span></a></li>';
}
function render(){
  paintUnd();paintPicker();paintCtx();
  var out=$("bldOut"),P=plan(),h="";
  if(P.related.length)h+='<div class="bld-more"><span>'+esc(T("b_more"))+'</span>'+P.related.map(function(id){var n=NI[id];return '<button type="button" class="nd add" data-n="'+id+'"><span class="ic">+</span>'+esc(tr(n.l))+'</button>'}).join("")+'</div>';
  if(!P.main.length&&!P.paid.length){out.innerHTML=S.sel.length||S.text?h:"";save();return}
  var mins=P.main.reduce(function(a,s){return a+META[s].m},0),tools=[T("b_tc")];
  if(P.main.some(function(s){return META[s].t==="cc"})||S.lvl===2)tools.push("Claude Code");
  if(P.main.some(function(s){return META[s].t==="desk"}))tools.push(T("b_bdesk"));
  if(P.main.some(function(s){return META[s].p===2}))tools.push(T("b_tpaid"));
  h+='<div class="bld-plan"><div class="bld-ph"><h3>'+esc(T("b_res"))+'</h3><p class="bld-sum"><b>'+P.main.length+' '+esc(T(P.main.length===1?"b_r1":"pj_n"))+'</b></p>'+
     '<p class="bld-tools">'+esc(T("b_need"))+' '+tools.map(function(t){return '<i>'+esc(t)+'</i>'}).join("")+'</p></div>';
  var n=0,fn=0;[1,2,3,4,5].forEach(function(f){
    var list=P.main.filter(function(s){return META[s].f===f});if(!list.length)return;
    h+='<div class="bld-fase"><h4><span>'+(++fn)+'</span>'+esc(T("b_f"+f))+'</h4><ol class="bld-steps">'+list.map(function(s){return stepLi(s,n++,P.rec[s].why)}).join("")+'</ol></div>';
  });
  if(P.paid.length){h+='<div class="bld-fase opt"><h4><span>＋</span>'+esc(T("b_opt"))+'</h4><p class="bld-hint">'+esc(T("b_opt_d"))+'</p><ol class="bld-steps">'+
    P.paid.map(function(s,i){return stepLi(s,P.main.length+i,P.rec[s].why)}).join("")+'</ol></div>'}
  if(P.proj)h+='<p class="bld-proj">'+esc(T("b_proj"))+' <a href="#proyectos">'+P.proj.ic+' '+esc(tr(P.proj.t))+'</a></p>';
  var first=P.main[0]||P.paid[0];
  h+='<div class="bld-act"><a class="btn btn-primary" href="recetas/'+first+'.html"><span>'+esc(T("b_go"))+'</span> <span class="arr">→</span></a>'+
     '<button type="button" class="btn btn-ghost" data-act="copy">'+esc(T("b_cp"))+'</button><button type="button" class="btn btn-ghost" data-act="share">'+esc(T("b_sh"))+'</button></div>';
  var idea=S.text.trim()||S.sel.map(function(id){return tr(NI[id].l)}).join(", ");
  h+='<div class="bld-chef'+(S.lvl===2?" hi":"")+'"><p>'+esc(T(S.lvl===2?"b_chef2":"b_chef"))+'</p><div class="bld-cmd"><code></code><button type="button" data-act="cmd">'+esc(T("b_copy"))+'</button></div></div></div>';
  out.innerHTML=h;
  out.querySelector(".bld-cmd code").textContent="/amri:chef "+idea;
  out.dataset.cmd="/amri:chef "+idea;
  out.dataset.menu=[T("b_menu")].concat(P.main.concat(P.paid).map(function(s,i){return (i+1)+". "+D.title(s)+" ("+chipsOf(s)[0]+") — https://amri.es/recetas/"+s+".html"})).join("\n");
  requestAnimationFrame(function(){out.querySelectorAll(".bld-step").forEach(function(c,i){setTimeout(function(){c.classList.add("in")},50*i)})});
  save();
}
function copy(txt,btn){if(!navigator.clipboard)return;var o=btn.textContent;navigator.clipboard.writeText(txt).then(function(){btn.textContent=T("b_copied");setTimeout(function(){btn.textContent=o},1800)},function(){})}
function shareUrl(){return location.origin+location.pathname+"#construir="+encodeURIComponent(JSON.stringify({q:S.text,n:S.sel,h:S.have,l:S.lvl,b:S.bud,s:S.sector}))}

/* ---------- Eventos ---------- */
function fromText(t,scroll){S.text=t;var u=understand(t);S.sel=u.sel;S.have=u.have;S.sector=u.sector;render();
  if(scroll){var u2=$("bldUnd");if(u2&&u2.getBoundingClientRect().top>innerHeight*.6)u2.scrollIntoView({behavior:"smooth",block:"start"})}}
var tm;
var opened=!!S.fromLink;
function openRes(){var r=$("bldRes");if(!r.hidden)return;r.hidden=false;r.classList.remove("show");void r.offsetWidth;r.classList.add("show");opened=true;
  if(!S.sel.length&&$("bldMore"))$("bldMore").open=true;}
$("bldForm").addEventListener("submit",function(e){e.preventDefault();clearTimeout(tm);var v=$("bldIn").value;
  if(v.trim())fromText(v,false);else render();openRes();
  setTimeout(function(){var u2=$("bldRes");if(u2.getBoundingClientRect().top>innerHeight*.55)u2.scrollIntoView({behavior:"smooth",block:"start"})},60)});
$("bldIn").addEventListener("input",function(){clearTimeout(tm);var v=this.value;tm=setTimeout(function(){if(opened&&v.trim().length>3)fromText(v)},650)});
$("construir").addEventListener("click",function(e){
  var b=e.target.closest("button");if(!b)return;
  if(b.dataset.n){var id=b.dataset.n,i=S.sel.indexOf(id);if(i>-1)S.sel.splice(i,1);else{S.sel.push(id);S.have=S.have.filter(function(x){return x!==id})}render();return}
  if(b.dataset.have){S.have=S.have.filter(function(x){return x!==b.dataset.have});render();return}
  if(b.dataset.lvl!=null){S.lvl=+b.dataset.lvl;render();return}
  if(b.dataset.bud!=null){S.bud=+b.dataset.bud;render();return}
  if(b.dataset.act==="copy")copy($("bldOut").dataset.menu,b);
  if(b.dataset.act==="cmd")copy($("bldOut").dataset.cmd,b);
  if(b.dataset.act==="share"){var u=shareUrl();if(navigator.share)navigator.share({title:"AMRI",text:T("b_menu"),url:u}).catch(function(){});else copy(u,b)}
});
function examples(){
  var ex=T("b_ex")||[];$("bldEx").innerHTML=ex.map(function(e){return '<button type="button" class="fchip" data-ex="1">'+esc(e)+'</button>'}).join("");
  $("bldEx").querySelectorAll("button").forEach(function(b){b.onclick=function(){var i=$("bldIn"),go=$("bldForm").querySelector("button[type=submit]");i.value=b.textContent;if(opened){fromText(b.textContent)}else{go.classList.remove("nudge");void go.offsetWidth;go.classList.add("nudge");go.focus({preventScroll:true})}}});
}

/* ---------- Proyectos completos ---------- */
function projects(){
  $("pjs").innerHTML=D.projects.map(function(p,i){
    return '<article class="prj reveal" style="--d:'+(i%2)*.1+'s"><div class="prj-h"><span class="prj-ic">'+p.ic+'</span><span class="prj-n">'+p.r.length+' '+esc(T("pj_n"))+'</span></div>'+
      '<h3>'+esc(tr(p.t))+'</h3><p>'+esc(tr(p.d))+'</p>'+
      '<ol class="prj-r">'+p.r.map(function(s){return '<li><a href="recetas/'+s+'.html"><span class="th"><img alt="" loading="lazy" src="'+img(s)+'"></span>'+esc(D.title(s))+'</a></li>'}).join("")+'</ol>'+
      '<a class="btn btn-ghost prj-go" href="recetas/'+p.r[0]+'.html"><span>'+esc(T("pj_go"))+'</span> <span class="arr">→</span></a></article>';
  }).join("");
  if(window.IntersectionObserver){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
    $("pjs").querySelectorAll(".reveal").forEach(function(el){io.observe(el)});}
  else $("pjs").querySelectorAll(".reveal").forEach(function(el){el.classList.add("in")});
}
function all(){examples();projects();$("bldIn").value=S.text;render();}
all();
if(S.fromLink){openRes();}
if(S.fromLink)setTimeout(function(){$("construir").scrollIntoView({behavior:"smooth"})},400);
document.addEventListener("langchange",all);
window.AMRI_BUILD={understand:understand,NEEDS:NEEDS};
})();
