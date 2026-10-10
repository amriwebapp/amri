/* ==========================================================
   AMRI · detalles tranquilos para las páginas de receta
   (portada, línea de lectura, tema, siguiente receta)
   ========================================================== */
(function(){
"use strict";
// Mismo orden que en la portada (assets/academia.js)
var ORDER=["webapp-gratis","imagenes-ia","asistente-ia","automatiza-tareas","chatbot-web","logo-ia","video-aftereffects","blender-3d",
  "higgsfield-cine","canva-diseno","figma-a-web","notion-cerebro","gmail-calendario","navegador-chrome","skills-propias","conector-propio","slack-equipo","gurusup-brain","redes-sociales","animaciones-opus","jev-decisiones","jev-guardian","empieza-aqui","primer-agente"];
var SVG={"higgsfield-cine":1,"canva-diseno":1,"figma-a-web":1,"notion-cerebro":1,"gmail-calendario":1,"navegador-chrome":1,"skills-propias":1,"conector-propio":1,"slack-equipo":1,"gurusup-brain":1,"redes-sociales":1,"animaciones-opus":1,"jev-decisiones":1,"jev-guardian":1,"empieza-aqui":1,"primer-agente":1};
var RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
var slug=document.body.dataset.slug||(location.pathname.split("/").pop()||"").replace(/\.html$/,"");
var inBook=!!document.body.dataset.receta; // receta dentro de un libro: libro.js pone la siguiente
var img=function(s){return "../img/"+s+(SVG[s]?".svg":".jpg")};
var t=function(k,f){return (window.I18N&&I18N.t(k))||f};
var root=document.documentElement;

/* Tema: recuerda la elección de la portada */
var theme=null;try{theme=localStorage.getItem("amri-theme")}catch(e){}
if(!theme)theme=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";
root.setAttribute("data-theme",theme);


/* Portada ilustrada encima del título */
var h1=document.querySelector("main h1"),isBook=!inBook&&window.RECIPE&&RECIPE.es&&RECIPE.es.recetas;
if(h1&&ORDER.indexOf(slug)>-1&&!inBook){
  var fig=document.createElement("div");fig.className="r-cover"+(isBook?" r-book":"");fig.setAttribute("aria-hidden","true");
  var im=new Image();im.alt="";im.src=isBook?"../img/portadas/"+slug+".jpg":img(slug);
  im.onerror=function(){if(isBook&&im.src.indexOf("portadas")>-1){im.src=img(slug)}else fig.remove()};fig.appendChild(im);
  h1.parentNode.insertBefore(fig,h1);
}

/* Línea de lectura + parallax suave de la portada */
var line=document.createElement("div");line.className="r-line";document.body.appendChild(line);
var ticking=false;
function onScroll(){
  var H=document.documentElement.scrollHeight-innerHeight,y=scrollY;
  line.style.transform="scaleX("+(H>0?y/H:0)+")";
  var c=document.querySelector(".r-cover img");
  if(c&&!RM&&!c.parentNode.classList.contains("r-book")){var r=c.parentNode.getBoundingClientRect();if(r.bottom>0){c.style.transform="translateY("+(-6+Math.min(r.top<0?-r.top:0,400)*.04)+"%)";}}
  ticking=false;
}
addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
onScroll();

/* Siguiente receta */
function next(){
  var old=document.querySelector(".r-next");if(old)old.remove();
  var i=ORDER.indexOf(slug);if(i<0||!window.I18N||inBook)return;
  var n=(i+1)%ORDER.length,c=I18N.card(n);
  var a=document.createElement("a");a.className="r-next";a.href=ORDER[n]+".html";
  a.innerHTML='<span class="th"><img alt="" loading="lazy" src="'+img(ORDER[n])+'"></span><span><small>'+t("next_label","Siguiente receta")+' →</small><b></b></span>';
  a.querySelector("b").textContent=c.titulo;
  var foot=document.querySelector("main .foot");if(foot)foot.parentNode.insertBefore(a,foot);
}
next();
document.addEventListener("langchange",next);

/* ⚡ Hazlo con Claude Code (plugin de AMRI) */
function pluginBox(){
  var old=document.querySelector(".r-plugin");if(old)old.remove();
  var map=window.AMRI_PLUGIN&&AMRI_PLUGIN.skills;if(!map||!map[slug])return;
  var foot=document.querySelector("main .foot");if(!foot)return;
  var rt=inBook&&window.RECIPE?RECIPE.es.title+": ":"";
  var cmd="/amri:"+map[slug]+" "+rt+t("pl_idea","tu idea");
  var box=document.createElement("aside");box.className="r-plugin";
  box.innerHTML='<b class="pt"></b><p></p><div class="pcmd"><code></code><button type="button"></button></div><a href="../plugin.html"></a>';
  box.querySelector(".pt").textContent=t("pl_box_t","⚡ Hazlo con Claude Code");
  box.querySelector("p").textContent=t("pl_box_d","");
  box.querySelector("code").textContent=cmd;
  var btn=box.querySelector("button");btn.textContent=t("pl_copy","Copiar");
  btn.onclick=function(){var done=function(){btn.textContent=t("pl_copied","¡Copiado!");setTimeout(function(){btn.textContent=t("pl_copy","Copiar")},1800)};
    if(navigator.clipboard)navigator.clipboard.writeText(cmd).then(done,function(){});};
  box.querySelector("a").textContent=t("pl_how","Cómo instalar el plugin →");
  foot.parentNode.insertBefore(box,foot);
}
pluginBox();
document.addEventListener("langchange",pluginBox);

/* Ingredientes plegados */
(function(){
  var box=document.querySelector("main .ing"),ul=document.getElementById("ing"),h=document.getElementById("ring");if(!box||!ul||!h)return;
  box.classList.add("ing-c");h.setAttribute("role","button");h.tabIndex=0;h.setAttribute("aria-expanded","false");
  var sum=document.createElement("span");sum.className="ing-s";h.appendChild(sum);
  var names=function(){var n=[].map.call(ul.querySelectorAll("li > b:first-child"),function(b){return b.textContent.trim()});
    sum.textContent=n.length?n.join(" · "):"";};
  var toggle=function(){var o=box.classList.toggle("open");h.setAttribute("aria-expanded",o)};
  h.addEventListener("click",function(e){if(e.target!==sum&&e.target!==h&&!h.contains(e.target))return;toggle()});
  h.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle()}});
  new MutationObserver(function(){if(!h.contains(sum))h.appendChild(sum);names()}).observe(ul,{childList:true});
  new MutationObserver(function(){if(!h.contains(sum))h.appendChild(sum)}).observe(h,{childList:true});
  names();
})();

/* Entrada tranquila */
if(!RM){document.body.classList.add("r-enter");setTimeout(function(){document.body.classList.remove("r-enter")},1800);}
})();
