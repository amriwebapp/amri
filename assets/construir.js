/* AMRI · «¿Qué quieres construir?» y proyectos completos (portada) */
(function(){
"use strict";
var D=window.AMRI_DATA;if(!D||!window.I18N)return;
var $=function(id){return document.getElementById(id)};
var T=function(k){return I18N.t(k)};
var L=function(){return I18N.lang()};
var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};
var norm=function(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")};
var PLUGIN=(window.AMRI_PLUGIN&&AMRI_PLUGIN.skills)||{};
var img=function(s){return D.img(s,"")};

/* ---------- Menú a partir de la idea ---------- */
function plan(text){
  var q=" "+norm(text)+" ",score={};
  Object.keys(D.keywords).forEach(function(s){
    D.keywords[s].forEach(function(k){if(q.indexOf(norm(k))>-1)score[s]=(score[s]||0)+1;});
  });
  var picks=Object.keys(score).sort(function(a,b){return score[b]-score[a]}).slice(0,4);
  picks.sort(function(a,b){return D.buildOrder.indexOf(a)-D.buildOrder.indexOf(b)});
  var proj=null,best=0;
  D.projects.forEach(function(p){var n=p.r.filter(function(s){return score[s]}).length;if(n>best&&n>=2){best=n;proj=p}});
  return {picks:picks,proj:proj};
}
function render(text){
  var out=$("bldOut");if(!text.trim()){out.innerHTML="";return;}
  var r=plan(text),h="";
  if(!r.picks.length){
    h='<p class="bld-none">'+esc(T("b_none"))+'</p>'+cardList(["asistente-ia"]);
  }else{
    h='<h3>'+esc(T("b_res"))+'</h3>'+cardList(r.picks);
  }
  if(r.proj)h+='<p class="bld-proj">'+esc(T("b_proj"))+' <a href="#proyectos">'+r.proj.ic+' '+esc(r.proj.t[L()]||r.proj.t.es)+'</a></p>';
  var cmd="/amri:chef "+text.trim();
  h+='<div class="bld-chef"><p>'+esc(T("b_chef"))+'</p><div class="bld-cmd"><code></code><button type="button">'+esc(T("b_copy"))+'</button></div></div>';
  out.innerHTML=h;
  out.querySelector(".bld-cmd code").textContent=cmd;
  var btn=out.querySelector(".bld-cmd button");
  btn.onclick=function(){if(navigator.clipboard)navigator.clipboard.writeText(cmd).then(function(){btn.textContent=T("b_copied");setTimeout(function(){btn.textContent=T("b_copy")},1800)},function(){})};
  requestAnimationFrame(function(){out.querySelectorAll(".bld-step").forEach(function(c,i){setTimeout(function(){c.classList.add("in")},80*i)})});
}
function cardList(list){
  return '<ol class="bld-steps">'+list.map(function(s,i){
    return '<li class="bld-step"><a href="recetas/'+s+'.html"><span class="n">'+(i+1)+'</span><span class="th"><img alt="" loading="lazy" src="'+img(s)+'"></span><span class="tx"><b>'+esc(D.title(s))+'</b><small>'+esc(I18N.card(D.order.indexOf(s)).desc)+'</small></span><span class="go">→</span></a></li>';
  }).join("")+'</ol>';
}
var last="";
function examples(){
  var ex=T("b_ex")||[];$("bldEx").innerHTML=ex.map(function(e){return '<button type="button" class="fchip">'+esc(e)+'</button>'}).join("");
  $("bldEx").querySelectorAll("button").forEach(function(b){b.onclick=function(){$("bldIn").value=b.textContent;last=b.textContent;render(last)}});
}
$("bldForm").addEventListener("submit",function(e){e.preventDefault();last=$("bldIn").value;render(last)});

/* ---------- Proyectos completos ---------- */
function projects(){
  $("pjs").innerHTML=D.projects.map(function(p,i){
    return '<article class="prj reveal" style="--d:'+(i%2)*.1+'s"><div class="prj-h"><span class="prj-ic">'+p.ic+'</span><span class="prj-n">'+p.r.length+' '+esc(T("pj_n"))+'</span></div>'+
      '<h3>'+esc(p.t[L()]||p.t.es)+'</h3><p>'+esc(p.d[L()]||p.d.es)+'</p>'+
      '<ol class="prj-r">'+p.r.map(function(s){return '<li><a href="recetas/'+s+'.html"><span class="th"><img alt="" loading="lazy" src="'+img(s)+'"></span>'+esc(D.title(s))+'</a></li>'}).join("")+'</ol>'+
      '<a class="btn btn-ghost prj-go" href="recetas/'+p.r[0]+'.html"><span>'+esc(T("pj_go"))+'</span> <span class="arr">→</span></a></article>';
  }).join("");
  if(window.IntersectionObserver){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
    $("pjs").querySelectorAll(".reveal").forEach(function(el){io.observe(el)});}
  else $("pjs").querySelectorAll(".reveal").forEach(function(el){el.classList.add("in")});
}
function all(){examples();projects();if(last)render(last);}
all();
document.addEventListener("langchange",all);
})();
