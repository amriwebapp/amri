/* ==========================================================
   AMRI · motor común de las recetas (es / en / ar)
   Cada receta define window.RECIPE[lang] en recetas/data/<slug>.<lang>.js
   ========================================================== */
var UI={
 es:{copy:"Copiar",copied:"¡Copiado!",ok:"Sabrás que salió bien cuando",undo:"Marcar como pendiente",gotit:"Entendido",next:"Listo, siguiente paso",end:"¡Terminado!",
   of:function(c,n){return c+" de "+n+" pasos completados"},yes:"Sí",no:"No",reset:"Empezar de nuevo",xt:"Extras: después de servir",xs:"Opcionales. No cuentan en tu progreso.",
   finh:"🎉 ¡Listo, a la mesa!",idea:"Tu idea",type:"Tipo"},
};
var LANG=(window.I18N&&I18N.lang())||"es";
if(!RECIPE[LANG])LANG="es";
var U=UI[LANG]||UI.es;
var P=RECIPE[LANG];
var APPS=P.R.apps,app=RECIPE.es.R.def;
var esc=function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;")};
var cb=function(t){return '<div class="cb"><pre>'+esc(t)+'</pre><button data-copy>'+U.copy+'</button></div>'};
var ok=function(t){return '<div class="check">✅ <b>'+U.ok+'</b> '+t+'</div>'};
var tip=function(t){return '<div class="tip">'+t+'</div>'};
var det=function(s,items){return '<details><summary>'+s+'</summary><ul>'+items.map(function(i){return "<li>"+i+"</li>"}).join("")+'</ul></details>'};
var DB=function(){return APPS[app].db};
var D=function(){return APPS[app].d||P.R.empty};

(function(){
var KEY=RECIPE.es.R.key,$=function(id){return document.getElementById(id)};
var done=new Set(),open=null,custom={d:"",db:true};
try{var z=JSON.parse(localStorage.getItem(KEY)||"{}");if(z.d)done=new Set(z.d);if(z.a&&RECIPE.es.R.apps[z.a])app=z.a;if(z.x)custom.d=z.x;if(typeof z.b==="boolean")custom.db=z.b;}catch(e){}
var save=function(){try{localStorage.setItem(KEY,JSON.stringify({d:Array.from(done),a:app,x:custom.d,b:custom.db}))}catch(e){}};
var pick=document.querySelector(".pick"),cu=$("cu"),cx=$("cx");

function steps(){var s=P.R.steps;s.forEach(function(t,i){t.id=i});return s}
function vis(){return steps().filter(function(t){return !t.db||DB()})}

function setLang(l){
  LANG=RECIPE[l]?l:"es";U=UI[l]||UI.es;P=RECIPE[LANG];APPS=P.R.apps;
  if(APPS.otra){APPS.otra.d=custom.d;APPS.otra.db=custom.db;}
  document.title=P.title+" · AMRI";
  $("rh1").innerHTML=P.title;
  $("rmeta").innerHTML=P.meta.map(function(m){return "<span>"+m+"</span>"}).join("");
  $("ring").innerHTML=P.ing;$("rq").innerHTML=P.q;cx.placeholder=P.ph;cx.setAttribute("aria-label",U.idea);pick.setAttribute("aria-label",U.type);
  $("ryn").innerHTML=P.yn;$("ryntip").innerHTML=P.yntip;$("rfin").innerHTML=P.fin;$("rfinh").textContent=U.finh;
  $("rxt").textContent=U.xt;$("rxs").textContent=U.xs;$("reset").textContent=U.reset;
  document.querySelectorAll("[data-yn]").forEach(function(b){b.textContent=b.dataset.yn==="1"?U.yes:U.no});
  pick.innerHTML="";
  Object.keys(APPS).forEach(function(k){var b=document.createElement("button");b.className="chip";b.textContent=APPS[k].n;b.dataset.k=k;
    b.onclick=function(){app=k;open=null;save();render()};pick.appendChild(b)});
  /* Sin opciones que elegir (por ejemplo, «Antes de empezar» de un libro): se oculta la pregunta */
  var single=Object.keys(APPS).length<2;pick.style.display=single?"none":"";$("rq").parentNode.style.display=single?"none":"";
  render();
}
cx.value=custom.d;
cx.oninput=function(){custom.d=cx.value.trim();if(APPS.otra)APPS.otra.d=custom.d;save();render()};
document.querySelectorAll("[data-yn]").forEach(function(b){b.onclick=function(){custom.db=b.dataset.yn==="1";if(APPS.otra)APPS.otra.db=custom.db;save();render()}});

function render(){
  var v=vis(),main=v.filter(function(t){return !t.x}),N=main.length;
  if(open===null||(open!==-1&&!v.some(function(t){return t.id===open})))open=(v.find(function(t){return !done.has(t.id)})||v[0]).id;
  pick.querySelectorAll(".chip").forEach(function(c){c.setAttribute("aria-pressed",c.dataset.k===app)});
  cu.classList.toggle("show",app==="otra");
  document.querySelectorAll("[data-yn]").forEach(function(b){b.setAttribute("aria-pressed",(b.dataset.yn==="1")===custom.db)});
  $("ing").innerHTML=P.R.ing();if(window.AMRI_LOGO)AMRI_LOGO.decorateList($("ing"));
  var card=function(t,n){var d=done.has(t.id),o=open===t.id;
    return '<section class="step'+(t.x?" x":"")+(d?" done":"")+(o?" open":"")+'" id="s'+t.id+'">'+
    '<button class="hd" data-h="'+t.id+'" aria-expanded="'+o+'"><span class="num">'+(d?"✓":t.x?"★":n+1)+'</span><span class="tt"><strong>'+t.t+'</strong>'+(t.s?'<small>'+t.s+'</small>':'')+'</span><span class="chev">▶</span></button>'+
    '<div class="bd">'+(o?t.b():"")+'<button class="btn" data-d="'+t.id+'">'+(d?U.undo:(t.x?U.gotit:(n<N-1?U.next:U.end)))+'</button></div></section>'};
  $("steps").innerHTML=main.map(card).join("");
  $("extras").innerHTML=v.filter(function(t){return t.x}).map(card).join("");
  var c=main.filter(function(t){return done.has(t.id)}).length;
  $("bar").style.width=Math.round(c/N*100)+"%";
  $("pt").textContent=U.of(c,N);
  $("fin").classList.toggle("show",c===N);
}
document.addEventListener("click",function(e){
  var h=e.target.closest("[data-h]"),d=e.target.closest("[data-d]"),c=e.target.closest("[data-copy]");
  if(h){var i=+h.dataset.h;open=open===i?-1:i;render();}
  else if(d){var j=+d.dataset.d,v=vis(),k=v.findIndex(function(t){return t.id===j});
    if(done.has(j))done.delete(j);else{done.add(j);var nx=v[k+1];open=nx&&(!nx.x||v[k].x)?nx.id:-1;}
    save();render();if(open>=0)$("s"+open).scrollIntoView({behavior:"smooth"});}
  else if(c){var txt=c.previousElementSibling.textContent;
    var fin=function(){c.textContent=U.copied;setTimeout(function(){c.textContent=U.copy},1500)};
    var fb=function(){var a=document.createElement("textarea");a.value=txt;document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(x){}a.remove();fin()};
    navigator.clipboard?navigator.clipboard.writeText(txt).then(fin,fb):fb();}
});
$("reset").onclick=function(){done=new Set();open=null;save();render();scrollTo({top:0,behavior:"smooth"})};
document.addEventListener("langchange",function(e){setLang(e.detail)});
setLang(LANG);
})();
