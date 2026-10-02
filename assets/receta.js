/* ==========================================================
   AMRI · detalles tranquilos para las páginas de receta
   (portada, línea de lectura, tema, siguiente receta)
   ========================================================== */
(function(){
"use strict";
// Mismo orden que en la portada (assets/academia.js)
var ORDER=["webapp-gratis","imagenes-ia","asistente-ia","automatiza-tareas","chatbot-web","logo-ia","video-aftereffects","blender-3d",
  "higgsfield-cine","canva-diseno","figma-a-web","notion-cerebro","gmail-calendario","claude-chrome","skills-claude","conector-propio","slack-equipo","gurusup-brain","instagram-ia"];
var SVG={"higgsfield-cine":1,"canva-diseno":1,"figma-a-web":1,"notion-cerebro":1,"gmail-calendario":1,"claude-chrome":1,"skills-claude":1,"conector-propio":1,"slack-equipo":1,"gurusup-brain":1,"instagram-ia":1};
var RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
var slug=(location.pathname.split("/").pop()||"").replace(/\.html$/,"");
var img=function(s){return "../img/"+s+(SVG[s]?".svg":".jpg")};
var t=function(k,f){return (window.I18N&&I18N.t(k))||f};
var root=document.documentElement;

/* Tema: recuerda la elección de la portada */
var theme=null;try{theme=localStorage.getItem("amri-theme")}catch(e){}
if(!theme)theme=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";
root.setAttribute("data-theme",theme);


/* Portada ilustrada encima del título */
var h1=document.querySelector("main h1");
if(h1&&ORDER.indexOf(slug)>-1){
  var fig=document.createElement("div");fig.className="r-cover";fig.setAttribute("aria-hidden","true");
  var im=new Image();im.alt="";im.src=img(slug);im.onerror=function(){fig.remove()};fig.appendChild(im);
  var tb=document.createElement("div");tb.className="tools-badge";tb.setAttribute("data-tools",slug);fig.appendChild(tb);if(window.AMRI_LOGO)AMRI_LOGO.fillTools(fig);
  h1.parentNode.insertBefore(fig,document.getElementById("i18n-note")||h1);
}

/* Línea de lectura + parallax suave de la portada */
var line=document.createElement("div");line.className="r-line";document.body.appendChild(line);
var ticking=false;
function onScroll(){
  var H=document.documentElement.scrollHeight-innerHeight,y=scrollY;
  line.style.transform="scaleX("+(H>0?y/H:0)+")";
  var c=document.querySelector(".r-cover img");
  if(c&&!RM){var r=c.parentNode.getBoundingClientRect();if(r.bottom>0){c.style.transform="translateY("+(-6+Math.min(r.top<0?-r.top:0,400)*.04)+"%)";}}
  ticking=false;
}
addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
onScroll();

/* Siguiente receta */
function next(){
  var old=document.querySelector(".r-next");if(old)old.remove();
  var i=ORDER.indexOf(slug);if(i<0||!window.I18N)return;
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
  var ing=document.querySelector("main .ing");if(!ing)return;
  var cmd="/amri:"+map[slug]+" "+t("pl_idea","tu idea");
  var box=document.createElement("aside");box.className="r-plugin";
  box.innerHTML='<b class="pt"></b><p></p><div class="pcmd"><code></code><button type="button"></button></div><a href="../plugin.html"></a>';
  box.querySelector(".pt").textContent=t("pl_box_t","⚡ Hazlo con Claude Code");
  box.querySelector("p").textContent=t("pl_box_d","");
  box.querySelector("code").textContent=cmd;
  var btn=box.querySelector("button");btn.textContent=t("pl_copy","Copiar");
  btn.onclick=function(){var done=function(){btn.textContent=t("pl_copied","¡Copiado!");setTimeout(function(){btn.textContent=t("pl_copy","Copiar")},1800)};
    if(navigator.clipboard)navigator.clipboard.writeText(cmd).then(done,function(){});};
  box.querySelector("a").textContent=t("pl_how","Cómo instalar el plugin →");
  ing.parentNode.insertBefore(box,ing.nextSibling);
}
pluginBox();
document.addEventListener("langchange",pluginBox);

/* Entrada tranquila */
if(!RM){document.body.classList.add("r-enter");setTimeout(function(){document.body.classList.remove("r-enter")},1800);}
})();
