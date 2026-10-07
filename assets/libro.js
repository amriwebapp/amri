/* ==========================================================
   AMRI · libros de recetas
   Un libro es una receta con «recetas» dentro:
   - La página del libro (recetas/<libro>.html) muestra «Antes de empezar»
     (la preparación, una sola vez) y el índice de sus recetas.
   - Cada receta (recetas/<libro>--<receta>.html) usa el mismo motor de pasos.
   Este script se carga justo después de los datos y antes de motor.js:
   adapta los datos para el motor y, cuando todo está pintado, añade el índice,
   el aviso de preparación y la siguiente receta.
   ========================================================== */
(function(){
"use strict";
var B=window.RECIPE&&RECIPE.es;if(!B||!B.recetas)return;
var body=document.body,rs=body.dataset.receta,slug=body.dataset.slug;
var R=rs?B.recetas.filter(function(x){return x.s===rs})[0]:null;
var KEY=B.R.key;
var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};

/* ---------- Progreso guardado (lo escribe motor.js) ---------- */
function done(k){try{return (JSON.parse(localStorage.getItem(k)||"{}").d)||[]}catch(e){return []}}
function mainSteps(steps){return steps.map(function(t,i){return {i:i,x:t.x,db:t.db}}).filter(function(t){return !t.x})}
function prepReady(){var d=done(KEY),m=mainSteps(B.R.steps).filter(function(t){return !t.db});return m.every(function(t){return d.indexOf(t.i)>-1})}
function recState(r){var d=done(KEY+"/"+r.s),m=mainSteps(r.steps).filter(function(t){return !t.db}),n=m.filter(function(t){return d.indexOf(t.i)>-1}).length;
  return {n:n,of:m.length,ok:n>=m.length&&m.length>0}}

/* ---------- Adaptar los datos para el motor ---------- */
var book={title:B.title,meta:B.meta};
if(R){
  RECIPE.es={title:R.t,meta:R.meta||[],ing:R.ingT||"Ingredientes",q:R.q||"",ph:R.ph||"",yn:R.yn||"",yntip:R.yntip||"",fin:R.fin||"",
    R:{key:KEY+"/"+R.s,def:R.def||Object.keys(R.apps)[0],empty:R.empty||"",apps:R.apps,ing:R.ing||B.R.ing,steps:R.steps}};
}
if(!B.R.apps){B.R.apps={base:{n:"",db:true,d:""}};B.R.def="base";}

/* ---------- Pintar cuando el motor ya ha terminado ---------- */
function card(r,i){var st=recState(r);
  return '<a class="lb-card'+(st.ok?" ok":"")+'" href="'+slug+'--'+r.s+'.html"><span class="lb-n">'+(st.ok?"✓":i+1)+'</span><span class="lb-tx"><b>'+esc(r.t)+'</b>'+
    (r.d?'<small>'+esc(r.d)+'</small>':'')+'<span class="lb-ch">'+(r.meta||[]).slice(0,2).map(function(m){return '<i>'+esc(m)+'</i>'}).join("")+
    (st.n&&!st.ok?'<i class="lb-pr">'+st.n+' de '+st.of+' pasos</i>':'')+'</span></span><span class="lb-go" aria-hidden="true">→</span></a>'}

function bookPage(){
  var h1=document.getElementById("rh1"),meta=document.getElementById("rmeta");
  if(B.intro&&meta){var p=document.createElement("p");p.className="lb-intro";p.innerHTML=B.intro;meta.parentNode.insertBefore(p,meta.nextSibling);}
  var prog=document.querySelector(".prog");
  if(prog){var h=document.createElement("h2");h.className="lb-h";h.innerHTML="🧺 Antes de empezar <small>Se hace una sola vez y sirve para todas las recetas del libro.</small>";prog.parentNode.insertBefore(h,prog);}
  var fin=document.getElementById("fin");
  var sec=document.createElement("section");sec.className="lb-list";sec.id="recetas-libro";
  sec.innerHTML='<h2 class="lb-h">📕 Las recetas de este libro <small>'+(prepReady()?"Tienes la cocina lista: elige la que quieras, en el orden que quieras.":"Haz primero «Antes de empezar». Después, cualquier receta, en el orden que quieras.")+'</small></h2>'+
    '<div class="lb-grid">'+B.recetas.map(card).join("")+'</div>';
  if(fin)fin.parentNode.insertBefore(sec,fin.nextSibling);
  var lnk=document.createElement("a");lnk.className="lb-jump";lnk.href="#recetas-libro";lnk.textContent="📕 Ver las "+B.recetas.length+" recetas del libro ↓";
  var ingBox=document.querySelector("main .ing");if(ingBox)ingBox.parentNode.insertBefore(lnk,ingBox);
}

function recipePage(){
  var i=B.recetas.indexOf(R),h1=document.getElementById("rh1");
  var crumb=document.createElement("a");crumb.className="lb-crumb";crumb.href=slug+".html";
  crumb.innerHTML='📕 Libro: <b>'+esc(B.title.replace(/^Libro:\s*/,""))+'</b> · receta '+(i+1)+' de '+B.recetas.length;
  h1.parentNode.insertBefore(crumb,h1);
  var ing=document.querySelector("main .ing");
  var warn=document.createElement("div");warn.className="lb-prep"+(prepReady()?" ok":"");
  warn.innerHTML=prepReady()?'✅ <b>Cocina preparada.</b> Ya hiciste «Antes de empezar» de este libro: puedes ir directo a los pasos.'
    :'🧺 <b>Antes de esta receta</b>, prepara la cocina del libro (cuentas y conexión). Solo se hace una vez. <a href="'+slug+'.html">Ir a «Antes de empezar» →</a>';
  if(ing)ing.parentNode.insertBefore(warn,ing);
  var nx=B.recetas[i+1],foot=document.querySelector("main .foot");
  var box=document.createElement("section");box.className="lb-list lb-more";
  box.innerHTML='<h2 class="lb-h">'+(nx?"📕 Siguiente receta del libro":"📕 Has llegado al final del libro")+'</h2><div class="lb-grid">'+
    (nx?card(nx,i+1):'')+'</div><p class="lb-all"><a href="'+slug+'.html#recetas-libro">Ver todas las recetas del libro →</a></p>';
  if(foot)foot.parentNode.insertBefore(box,foot);
}

setTimeout(function(){if(R)recipePage();else bookPage();},0);
})();
